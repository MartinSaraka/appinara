<template>
  <div class="relative overflow-hidden min-h-screen dark:bg-anthracite bg-bone">
    <Navigation />
    <main id="main-content">
      <section class="relative pt-32 md:pt-44 pb-16 md:pb-24 hero-surface film-grain overflow-hidden">
        <div class="absolute -top-32 -right-24 w-[480px] h-[480px] mesh-1 rounded-full opacity-50 blur-3xl pointer-events-none" aria-hidden="true" />
        <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

        <div class="container mx-auto px-6 max-w-6xl relative">
          <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div class="md:col-span-5 order-2 md:order-1">
              <div class="relative max-w-sm mx-auto md:mx-0">
                <div class="absolute -inset-4 mesh-1 rounded-3xl blur-2xl opacity-60 pointer-events-none" aria-hidden="true" />
                <PhotoSlot
                  :src="null"
                  expected-path="public/photos/portrait.jpg"
                  label="Portrét — nahraj sem"
                  alt="Martin Saraka — zakladateľ Appinara"
                  ratio="3/4"
                  class="relative shadow-editorial dark:shadow-editorial-dark"
                />
                <div class="hidden md:block absolute -right-4 -bottom-4 rounded-xl border border-gray-200/90 dark:border-slate-700/70 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg px-4 py-2.5">
                  <p class="text-[10px] uppercase tracking-wide text-gray-500 dark:text-slate-500">Zakladateľ</p>
                  <p class="text-sm font-display font-semibold text-gray-900 dark:text-white">Martin Saraka</p>
                </div>
              </div>
            </div>

            <div class="md:col-span-7 order-1 md:order-2">
              <p class="eyebrow mb-4">Martin Saraka — O mne</p>
              <h1 class="text-display-xl font-display font-bold dark:text-white text-gray-900 mb-6 text-balance">
                Robím AI a weby,
                <span class="block italic font-medium gradient-text">ktoré reálne šetria čas.</span>
              </h1>
              <p class="text-lg md:text-xl dark:text-slate-300 text-gray-700 leading-relaxed mb-4 text-pretty">
                Som Martin, freelance developer zo Slovenska. Pracujete priamo so mnou — bez project managerov, sales call sekvencií a pitch deckov.
              </p>
              <p class="text-base md:text-lg dark:text-slate-400 text-gray-600 leading-relaxed text-pretty">
                Pomáham menším a stredným firmám zjednodušiť to, na čo nikdy nie je čas: dopyty, follow-up, interný prehľad.
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" class="btn-primary">Napísať priamo</a>
                <NuxtLink to="/blog" class="btn-secondary">Čítať blog</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-tall border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite overflow-hidden">
        <div class="container mx-auto px-6 max-w-4xl">
          <p class="eyebrow mb-4">Princípy</p>
          <h2 class="text-display-lg font-display font-bold dark:text-white text-gray-900 mb-12 md:mb-16 text-balance">
            Ako k tomu
            <span class="italic font-medium gradient-text">pristupujem.</span>
          </h2>

          <div class="space-y-10 md:space-y-14">
            <KineticStatement v-for="(s, i) in principles" :key="i" size="lg">
              {{ s }}<span class="text-primary-600 dark:text-primary-400">.</span>
            </KineticStatement>
          </div>
        </div>
      </section>

      <section class="border-t border-gray-200/80 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80 py-16 md:py-20">
        <div class="container mx-auto px-6 max-w-4xl">
          <p class="eyebrow mb-3">Stack</p>
          <h2 class="text-display-md font-display font-bold dark:text-white text-gray-900 mb-10 text-balance">
            S čím <span class="italic font-medium gradient-text">pracujem.</span>
          </h2>
          <div class="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm md:text-base">
            <div>
              <p class="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-3">Frontend & AI</p>
              <ul class="space-y-1.5 text-gray-700 dark:text-slate-300">
                <li v-for="item in stackPrimary" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <p class="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-3">Automatizácie & backend</p>
              <ul class="space-y-1.5 text-gray-700 dark:text-slate-300">
                <li v-for="item in stackSecondary" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section-tall border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite overflow-hidden">
        <div class="container mx-auto px-6 max-w-4xl">
          <p class="eyebrow mb-4">Ďalší krok</p>
          <h2 class="text-display-lg font-display font-bold dark:text-white text-gray-900 mb-10 text-balance">
            Kde sa <span class="italic font-medium gradient-text">stretneme.</span>
          </h2>

          <div class="grid sm:grid-cols-2 gap-4">
            <a
              href="/#contact"
              class="group rounded-2xl border border-primary-200 dark:border-primary-500/30 bg-primary-50 dark:bg-primary-500/10 p-7 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors"
            >
              <p class="eyebrow mb-3">Odporúčam začať tu</p>
              <p class="text-2xl font-display font-bold dark:text-white text-gray-900 mb-2">Napísať priamo</p>
              <p class="text-sm dark:text-slate-300 text-gray-600 mb-4">Krátky popis situácie a navrhnem ďalší krok.</p>
              <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300">
                Otvoriť formulár
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <NuxtLink
              to="/blog"
              class="group rounded-2xl border border-gray-200 dark:border-slate-700 bg-bone-50 dark:bg-anthracite-elev/70 p-7 hover:border-gray-300 dark:hover:border-slate-600 transition-colors"
            >
              <p class="eyebrow mb-3 text-gray-500 dark:text-slate-500">Pozrieť praktické články</p>
              <p class="text-2xl font-display font-bold dark:text-white text-gray-900 mb-2">Blog z praxe</p>
              <p class="text-sm dark:text-slate-300 text-gray-600 mb-4">Web, AI, automatizácia. Konkrétne rozhodnutia bez všeobecných rád.</p>
              <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-slate-100">
                Otvoriť blog
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const principles = [
  'Najprv problém. Potom nástroj',
  'MVP do dvoch týždňov, nie redesign na pol roka',
  'Bez žargónu — vysvetlím to babičke aj CFO',
  'Vlastníte kód, dáta aj prístupy'
]

const stackPrimary = ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind', 'OpenAI', 'Anthropic', 'Stripe', 'Supabase', 'PostgreSQL', 'Vercel']
const stackSecondary = ['n8n', 'Make.com', 'Webhooks', 'Edge functions', 'Notion API', 'Pipedrive', 'HubSpot', 'GoPay', 'Packeta', 'Cloudflare']

useHead({
  title: 'O mne | Appinara — AI a weby pre slovenské firmy',
  meta: [
    {
      name: 'description',
      content:
        'Freelance developer zo Slovenska. AI integrácie, weby a vlastné nástroje pre menšie a stredné firmy. Priama komunikácia, realistický rozsah, bez agentúrnych marží.'
    },
    { property: 'og:title', content: 'O mne | Appinara' },
    { property: 'og:url', content: 'https://appinara.sk/o-mne' }
  ],
  link: [{ rel: 'canonical', href: 'https://appinara.sk/o-mne' }]
})
</script>
