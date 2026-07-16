// Stiahne Unsplash covery z data/blogPosts.ts, skonvertuje na lokálne webp
// (public/images/blog/<slug>.webp) a prepíše image cesty v dátach.
// Spustenie: node scripts/self-host-blog-covers.mjs
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const dataPath = path.join(root, 'data', 'blogPosts.ts')
const outDir = path.join(root, 'public', 'images', 'blog')
fs.mkdirSync(outDir, { recursive: true })

let source = fs.readFileSync(dataPath, 'utf8')
const entries = [...source.matchAll(/slug: '([^']+)'[\s\S]*?image: '(https:\/\/images\.unsplash\.com[^']+)'/g)]
console.log(`Found ${entries.length} remote covers`)

let ok = 0
for (const [, slug, url] of entries) {
  const outFile = path.join(outDir, `${slug}.webp`)
  try {
    if (!fs.existsSync(outFile)) {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      await sharp(buf).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 72 }).toFile(outFile)
    }
    source = source.replace(`image: '${url}'`, `image: '/images/blog/${slug}.webp'`)
    ok++
    console.log(`ok  ${slug} (${Math.round(fs.statSync(outFile).size / 1024)} kB)`)
  } catch (e) {
    console.log(`FAIL ${slug}: ${e.message} — ponechávam Unsplash URL`)
  }
}

fs.writeFileSync(dataPath, source)
console.log(`Done: ${ok}/${entries.length} self-hosted`)
