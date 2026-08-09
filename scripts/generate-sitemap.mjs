/**
 * Vygeneruje public/sitemap.xml z data/blogPosts.ts + zoznamu statických stránok.
 *
 * Prečo: sitemapa sa predtým udržiavala ručne a <lastmod> hodnoty boli dekoratívne
 * (12 článkov tvrdilo rok 2024, hoci súbory sa medzitým menili). Google podľa lastmod
 * rozhoduje o opätovnom prehľadaní, takže starý dátum re-crawl priamo brzdí.
 *
 * lastmod berieme z gitu (dátum posledného commitu daného súboru). Ak má súbor
 * neodkomitované zmeny, použije sa dnešný dátum — po commite bude hodnota rovnaká.
 *
 * Spustenie:  npm run sitemap
 *
 * Právne stránky (/ochrana-udajov, /obchodne-podmienky) sú zámerne vynechané —
 * majú noindex.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://appinara.sk'

const STATIC_PAGES = [
  { loc: '/', file: 'pages/index.vue', priority: '1.0', changefreq: 'monthly' },
  { loc: '/riesenia', file: 'pages/riesenia.vue', priority: '0.9', changefreq: 'monthly' },
  // Výpis blogu sa mení aj vtedy, keď pribudne článok do dátového súboru.
  { loc: '/blog', file: 'pages/blog/index.vue', priority: '0.8', changefreq: 'weekly', deps: ['data/blogPosts.ts'] },
  { loc: '/o-mne', file: 'pages/o-mne.vue', priority: '0.6', changefreq: 'yearly' }
]

// Články, ktoré sú rozcestníkom pre ostatné (veľa interných odkazov naň).
const HUB_SLUGS = new Set(['realny-cennik-webov-na-slovensku', 'salon-meri1-pripadovka'])

const today = new Date().toISOString().slice(0, 10)

const git = (args) => {
  try {
    // stderr ticho zahadzujeme — mimo git repozitára (napr. plytký build) je hlásenie očakávané.
    return execFileSync('git', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim()
  } catch {
    return ''
  }
}

/**
 * Dátumy z predchádzajúcej sitemapy. Slúžia ako záchrana pri buildoch, kde nie je
 * plná git história (Vercel klonuje plytko) — vtedy radšej zachováme už commitnutú
 * hodnotu, než by sme dátum vymysleli a poslali Googlu falošný signál.
 */
const previousLastmod = (() => {
  const map = new Map()
  try {
    const xml = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8')
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
      map.set(m[1].replace(SITE, '') || '/', m[2])
    }
  } catch {
    /* prvé spustenie, sitemapa ešte neexistuje */
  }
  return map
})()

/** Dátum posledného commitu súboru; prázdny reťazec, ak ho git nevie určiť. */
const gitDate = (file) => {
  if (git(['status', '--porcelain', '--', file])) return today
  return git(['log', '-1', '--format=%cs', '--', file])
}

/**
 * Článok renderuje zdieľaný BlogArticleLayout, takže jeho zmena mení výsledné HTML
 * každého článku. Berieme preto najnovší dátum zo súboru aj jeho závislostí.
 */
const ARTICLE_DEPS = ['components/BlogArticleLayout.vue', 'data/blogPosts.ts']

const lastModified = (file, loc, fallback, deps = []) => {
  const dates = [file, ...deps].map(gitDate).filter(Boolean)
  if (dates.length) return dates.sort().pop()
  return previousLastmod.get(loc) || fallback || today
}

// --- Načítať články z dátového súboru -------------------------------------
const dataSrc = readFileSync(resolve(ROOT, 'data/blogPosts.ts'), 'utf8')

const posts = dataSrc
  .split(/\n  \{\n/)
  .slice(1)
  .map((block) => {
    const field = (key) => (block.match(new RegExp(`${key}: '([^']*)'`)) || [])[1]
    return { slug: field('slug'), dateIso: field('dateIso') }
  })
  .filter((p) => p.slug)

if (!posts.length) {
  throw new Error('V data/blogPosts.ts sa nenašiel ani jeden článok — sitemapa sa negeneruje.')
}

const missingIso = posts.filter((p) => !p.dateIso).map((p) => p.slug)
if (missingIso.length) {
  throw new Error(`Chýba dateIso pri článkoch: ${missingIso.join(', ')}`)
}

// --- Poskladať URL ---------------------------------------------------------
const urls = [
  ...STATIC_PAGES.map((page) => ({
    loc: page.loc,
    lastmod: lastModified(page.file, page.loc, undefined, page.deps),
    changefreq: page.changefreq,
    priority: page.priority
  })),
  ...posts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: lastModified(`pages/blog/${post.slug}.vue`, `/blog/${post.slug}`, post.dateIso, ARTICLE_DEPS),
    changefreq: 'yearly',
    priority: HUB_SLUGS.has(post.slug) ? '0.8' : '0.7'
  }))
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generované: npm run sitemap (scripts/generate-sitemap.mjs). Needitovať ručne. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(ROOT, 'public/sitemap.xml'), xml, 'utf8')
console.log(`Sitemapa vygenerovaná: ${urls.length} URL (${STATIC_PAGES.length} statických + ${posts.length} článkov).`)
