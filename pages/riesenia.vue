<template>
  <div class="relative overflow-hidden min-h-screen dark:bg-anthracite bg-bone">
    <Navigation />
    <main id="main-content">
      <section class="relative pt-32 md:pt-40 pb-12 md:pb-16 hero-surface film-grain overflow-hidden">
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[420px] mesh-1 rounded-full opacity-50 blur-3xl pointer-events-none" aria-hidden="true" />
        <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div class="container mx-auto px-6 max-w-5xl text-center relative">
          <p class="eyebrow mb-4">Riešenia</p>
          <h1 class="text-display-xl font-display font-bold dark:text-white text-gray-900 mb-6 leading-[1.0] text-balance">
            Konkrétne oblasti, kde to
            <span class="italic font-medium gradient-text">dáva zmysel.</span>
          </h1>
          <p class="text-lg md:text-2xl dark:text-slate-300 text-gray-700 leading-relaxed max-w-2xl mx-auto text-pretty">
            AI nemá zmysel všade. Tu sú scenáre, kde investícia reálne uvoľní čas tímu.
          </p>

          <nav aria-label="Rýchle prepojenia" class="mt-10 flex flex-wrap justify-center gap-2">
            <a
              v-for="topic in topics"
              :key="topic.id"
              :href="`#${topic.id}`"
              class="text-sm px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-gray-700 dark:text-slate-300 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {{ topic.short }}
            </a>
          </nav>
        </div>
      </section>

      <section
        v-for="(topic, index) in topics"
        :id="topic.id"
        :key="topic.id"
        class="section-tall border-t border-gray-200/80 dark:border-slate-800 scroll-mt-28 overflow-hidden relative"
        :class="index % 2 === 0 ? 'bg-bone dark:bg-anthracite' : 'bg-bone-50 dark:bg-anthracite-elev/60'"
      >
        <div
          class="absolute -top-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl pointer-events-none"
          :class="[index % 2 === 0 ? 'mesh-2 -right-32' : 'mesh-3 -left-32']"
          aria-hidden="true"
        />

        <div class="container mx-auto px-6 max-w-5xl relative">
          <div class="grid md:grid-cols-12 gap-10 md:gap-14">
            <div class="md:col-span-5">
              <p class="eyebrow mb-4">{{ String(index + 1).padStart(2, '0') }} · {{ topic.tag }}</p>
              <h2 class="text-display-lg font-display font-bold dark:text-white text-gray-900 mb-6 text-balance leading-[1.05]">
                {{ topic.title }}
              </h2>
              <p class="text-base md:text-lg dark:text-slate-300 text-gray-700 leading-relaxed mb-7 text-pretty">
                {{ topic.intro }}
              </p>
              <div class="flex flex-wrap gap-3">
                <NuxtLink to="/ai-audit" class="btn-primary">Zistiť, či to dáva zmysel</NuxtLink>
                <a href="/#contact" class="btn-secondary">Mám už dopyt</a>
              </div>
            </div>

            <div class="md:col-span-7 space-y-5">
              <div class="rounded-2xl border border-gray-200 dark:border-slate-700 bg-bone-50 dark:bg-anthracite-elev/70 p-6 md:p-7">
                <p class="eyebrow mb-3 text-amber-600 dark:text-amber-400">Signály, že to potrebujete</p>
                <ul class="space-y-2">
                  <li v-for="signal in topic.signals" :key="signal" class="text-sm md:text-base text-gray-700 dark:text-slate-300 flex items-start gap-2.5">
                    <svg class="w-1.5 h-1.5 mt-2.5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8" aria-hidden="true">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span>{{ signal }}</span>
                  </li>
                </ul>
              </div>

              <div class="rounded-2xl border border-emerald-200/70 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/30 p-6 md:p-7">
                <p class="eyebrow mb-3 text-emerald-700 dark:text-emerald-400">Čo z toho máte</p>
                <ul class="space-y-2">
                  <li v-for="o in topic.outcomes" :key="o" class="text-sm md:text-base text-gray-800 dark:text-slate-200 flex items-start gap-2.5">
                    <svg class="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ o }}</span>
                  </li>
                </ul>
              </div>

              <div class="grid sm:grid-cols-2 gap-3">
                <div class="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/40 p-4">
                  <p class="text-[11px] uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-1">Rozsah</p>
                  <p class="text-sm font-display font-bold dark:text-white text-gray-900">{{ topic.scope }}</p>
                </div>
                <div class="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/40 p-4">
                  <p class="text-[11px] uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-1">Čas do nasadenia</p>
                  <p class="text-sm font-display font-bold dark:text-white text-gray-900">{{ topic.timeline }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in topic.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-md bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 font-medium border border-primary-100 dark:border-primary-500/20">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const topics = [
  {
    id: 'lead-followup',
    short: 'Lead follow-up',
    tag: 'AI · Sales',
    title: 'AI lead follow-up a triedenie dopytov',
    intro:
      'Dopyty padajú z webu, e-mailu, Facebooku aj telefónu. Časť sa stratí. Cieľom je, aby žiadny vážny dopyt nezostal bez reakcie.',
    signals: [
      'Dopyty prichádzajú do viacerých schránok.',
      'Prvá odpoveď trvá viac ako 24 hodín.',
      'Reporty o leadoch robí niekto ručne v Exceli.'
    ],
    outcomes: [
      'Centrálny prehľad dopytov zo všetkých kanálov.',
      'Automatické potvrdenie a follow-up po stanovenom čase.',
      'Týždenný report do schránky majiteľa.'
    ],
    scope: 'Audit + integrácia + automatizácie',
    timeline: '2–4 týždne',
    tags: ['Webhooks', 'OpenAI', 'n8n / Make', 'Pipedrive / HubSpot', 'PostgreSQL']
  },
  {
    id: 'chatbot',
    short: 'AI chatbot',
    tag: 'AI · Komunikácia',
    title: 'AI chatbot a prvý kontakt so zákazníkom',
    intro:
      'Chatbot pokryje 60–80 % rutinných otázok (otváracie hodiny, ceny, dostupnosť). Zvyšok odovzdá človeku s plným kontextom.',
    signals: [
      'Tím odpovedá na rovnaké otázky stále dookola.',
      'Mimo pracovných hodín nereaguje nikto.',
      'Web má veľa návštev, ale málo dopytov.'
    ],
    outcomes: [
      'Trénovaný na vašich materiáloch (FAQ, web, dokumenty).',
      'Pokrýva prvý kontakt 24/7.',
      'Eskalácia na človeka so zhrnutím konverzácie.'
    ],
    scope: 'Bot + admin + napojenie',
    timeline: '1–3 týždne',
    tags: ['OpenAI', 'Vue / Nuxt widget', 'Edge functions', 'Webhooks', 'Slack / Telegram']
  },
  {
    id: 'web-a-interne',
    short: 'Web a interné nástroje',
    tag: 'Web · Aplikácie',
    title: 'Weby, aplikácie a interné nástroje',
    intro:
      'Niekedy nestačí ďalší AI nástroj — chýba samotný digitálny základ. Rýchly web, prehľadná interná appka, dashboard pre majiteľa.',
    signals: [
      'Web je pomalý a neviete ho sám upravovať.',
      'Excel tabuliek na koordináciu je viac ako členov tímu.',
      'Reportovanie pre majiteľa zaberie 2+ hodiny týždenne.'
    ],
    outcomes: [
      'Rýchly responzívny web s SEO základom.',
      'Vlastná interná appka prispôsobená procesom.',
      'Dashboard s živými metrikami a alertmi.'
    ],
    scope: 'MVP najprv, rozširovanie postupne',
    timeline: '2–6 týždňov',
    tags: ['Nuxt 3', 'Vue 3', 'Tailwind', 'PostgreSQL', 'Supabase', 'Vercel']
  }
]

useHead({
  title: 'Riešenia — AI, web a automatizácia | Appinara',
  meta: [
    {
      name: 'description',
      content:
        'Konkrétne scenáre kedy sa oplatí AI, web alebo automatizácia. Lead follow-up, chatboty, weby a interné nástroje pre slovenské firmy.'
    },
    { property: 'og:title', content: 'Riešenia | Appinara' },
    { property: 'og:url', content: 'https://appinara.sk/riesenia' }
  ],
  link: [{ rel: 'canonical', href: 'https://appinara.sk/riesenia' }]
})
</script>
