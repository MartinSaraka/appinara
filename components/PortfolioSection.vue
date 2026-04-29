<template>
  <section
    id="portfolio"
    class="relative section-tall border-t border-gray-200/80 dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev/40 overflow-hidden"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="max-w-2xl mb-14 md:mb-20">
        <p
          class="eyebrow mb-4"
        >
          Práca
        </p>
        <h2
          class="text-display-lg font-display font-bold dark:text-white text-gray-900 text-balance"
        >
          Demo projekty a referenčné riešenia.
          <span class="block italic font-medium gradient-text">Bez vymyslených klientov.</span>
        </h2>
        <p
          class="mt-5 text-base dark:text-slate-300 text-gray-700 leading-relaxed text-pretty"
        >
          Klientske projekty bývajú pod NDA. Tu sú demá a referencie, ktoré ukazujú, ako pracujem — môžete si ich preklikať a vyskúšať.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative rounded-2xl border border-gray-200/90 dark:border-anthracite-mist/80 bg-bone dark:bg-anthracite-elev/70 overflow-hidden transition-colors hover:border-cinnabar-500/60 dark:hover:border-cinnabar-glow/60"
        >
          <!-- Header strip -->
          <div class="px-7 md:px-8 pt-6 md:pt-7 flex items-center justify-between">
            <p class="eyebrow">{{ String(index + 1).padStart(2, '0') }} · {{ project.kind }}</p>
            <span class="text-[11px] font-mono uppercase tracking-wider text-ink-500 dark:text-ink-300">
              {{ project.tag }}
            </span>
          </div>

          <div class="px-7 md:px-8 pt-4 pb-7 md:pb-8">
            <h3 class="text-2xl md:text-3xl font-display font-bold mb-3 dark:text-white text-gray-900 leading-[1.15] text-balance">
              {{ project.title }}
            </h3>
            <p class="text-base dark:text-slate-300 text-gray-700 mb-5 leading-relaxed text-pretty">
              {{ project.description }}
            </p>

            <ul class="space-y-1.5 text-sm dark:text-slate-300 text-gray-700 mb-6">
              <li
                v-for="bullet in project.bullets"
                :key="bullet"
                class="flex items-start gap-2"
              >
                <span class="mt-2 w-1 h-1 rounded-full bg-cinnabar-500 dark:bg-cinnabar-glow flex-shrink-0" aria-hidden="true" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="t in project.stack"
                :key="t"
                class="px-2.5 py-1 text-xs font-mono rounded-full border border-gray-200 dark:border-anthracite-mist text-ink-700 dark:text-ink-100"
              >
                {{ t }}
              </span>
            </div>

            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-semibold text-cinnabar-500 dark:text-cinnabar-glow inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
            >
              Otvoriť demo
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14M5 5h4a2 2 0 012 2v4M5 5v14a2 2 0 002 2h12" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <div class="mt-12 text-sm dark:text-slate-400 text-gray-600 max-w-2xl">
        Reálne klientske referencie pošlem na vyžiadanie — väčšina projektov je pod dohodou o mlčanlivosti.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  kind: string
  tag: string
  title: string
  description: string
  bullets: string[]
  stack: string[]
  demoUrl?: string
}

const projects: Project[] = [
  {
    kind: 'Demo · Prevádzka',
    tag: 'Salón Elegance',
    title: 'Web s rezerváciami pre kaderníctvo',
    description: 'Šablóna jednostránkového webu pre lokálnu prevádzku — galéria, cenník, online rezervačný formulár. Slúži ako východisko pre klientov, ktorí potrebujú web do dvoch týždňov.',
    bullets: [
      'Online rezervácia s notifikáciou na email',
      'Galéria prác s lightbox náhľadom',
      'Mobile-first, optimalizované pre kontakt na telefón',
      'SEO basics — schema markup, meta tagy, sitemap'
    ],
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind', 'TypeScript']
  },
  {
    kind: 'Demo · Retro brand',
    tag: 'Salon Retro',
    title: 'Editorial web pre brand s príbehom',
    description: 'Druhá šablóna — pre prevádzky, ktoré chcú výraznejší vizuál, nie len rezervačný formulár. Typografia, story-telling, sekcie s históriou a tímom.',
    bullets: [
      'Vizuálne odlišný, pomalší rytmus stránky',
      'Story sekcia, tím, prevádzkový čas',
      'Príprava na multi-jazyk',
      'Mesh gradient + film grain ako brand prvok'
    ],
    stack: ['Nuxt 3', 'Tailwind', 'Custom theme tokens']
  },
  {
    kind: 'Tooling · AI',
    tag: 'Audit wizard',
    title: 'AI audit ako qualifier pre dopyty',
    description: 'Krátky 5-krokový dotazník priamo na Appinara. Po vyplnení vráti odporúčaný smer a posunie kontakt mailom — namiesto generického "napíšte nám".',
    bullets: [
      'Pravidlové odporúčania (žiadne LLM v rozhodovaní)',
      'Validácia, povinné polia, GDPR súhlas',
      'Štruktúrovaný email s tagmi pre triedenie',
      'Tracking eventov pre conversion analytics'
    ],
    stack: ['Nuxt 3', 'TypeScript', 'EmailJS', 'Custom rules engine'],
    demoUrl: '/ai-audit'
  },
  {
    kind: 'Tooling · Chat',
    tag: 'Frondo bot',
    title: 'Chatbot ako asistent pre návštevníka',
    description: 'Floating chat widget na pravom dolnom rohu stránky. Odpovedá na bežné otázky o službách, cenách a procese — vie aj zachytiť kontakt a kvalifikovať dopyt.',
    bullets: [
      'Slovenský a český jazyk',
      'Z knowledge base konkrétneho klienta',
      'Lead capture s tagmi (typ firmy, kanál dopytov)',
      'Server-side anti-spam a rate limit'
    ],
    stack: ['Nuxt 3', 'OpenAI', 'Edge functions', 'Custom KB']
  }
]
</script>
