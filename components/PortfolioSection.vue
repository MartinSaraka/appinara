<template>
  <section id="portfolio" class="relative py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden">
    <!-- Decorative parallax orb -->
    <div class="absolute inset-0 parallax-drift pointer-events-none" aria-hidden="true">
      <div class="absolute -top-20 left-[-12%] w-[520px] h-[520px] rounded-full soft-orb"></div>
    </div>

    <div class="container mx-auto px-6 relative">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p v-motion-reveal class="eyebrow mb-4">03 · Portfólio</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Naša práca <span class="accent-text">naživo</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Žiadne sľuby z prezentácie — kliknite a preskúmajte skutočné weby,
          ktoré máme vonku. Presne takto môže vyzerať ten váš.
        </p>
      </div>

      <!-- Real projects -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
        <a
          v-for="(project, index) in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          rel="noopener"
          v-motion-reveal-scale
          :delay="index * 130"
          class="group block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400/50 rounded-2xl"
          :aria-label="`Otvoriť projekt: ${project.title}`"
        >
          <DeviceFrame device="browser" :url="project.urlLabel" container-class="transition-transform duration-500 group-hover:-translate-y-2">
            <div class="relative w-full h-full overflow-hidden">
              <img
                :src="project.image"
                :alt="`Náhľad webu ${project.title}`"
                loading="lazy"
                width="1280"
                height="800"
                class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-gray-900 text-sm font-bold shadow-lg">
                  Otvoriť stránku
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </div>
          </DeviceFrame>

          <div class="mt-6 px-2">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-display font-bold dark:text-white text-gray-900 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 whitespace-nowrap">{{ project.category }}</span>
            </div>
            <p class="mt-2 text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-primary-500/10 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>

      <!-- Demo playground -->
      <div v-motion-reveal class="mt-20 max-w-6xl mx-auto">
        <div class="flex items-center gap-4 mb-8">
          <span class="eyebrow whitespace-nowrap">Demá na vyskúšanie</span>
          <span class="h-px flex-1 bg-gray-200 dark:bg-slate-800" aria-hidden="true"></span>
        </div>
        <div class="grid sm:grid-cols-2 gap-6 max-w-3xl">
          <a
            v-for="demo in demos"
            :key="demo.title"
            :href="demo.url"
            target="_blank"
            rel="noopener"
            class="group flex items-center gap-4 surface rounded-xl p-4 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400/50"
            :aria-label="`Otvoriť demo: ${demo.title}`"
          >
            <img
              :src="demo.image"
              :alt="`Náhľad dema ${demo.title}`"
              loading="lazy"
              width="1280"
              height="800"
              class="w-24 h-16 object-cover object-top rounded-lg flex-shrink-0 border border-gray-200 dark:border-slate-700"
            />
            <span class="min-w-0">
              <span class="block font-display font-bold text-sm dark:text-white text-gray-900 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                {{ demo.title }}
              </span>
              <span class="block text-xs text-gray-500 dark:text-slate-500 mt-0.5">{{ demo.note }}</span>
            </span>
            <svg class="w-4 h-4 ml-auto flex-shrink-0 text-gray-400 dark:text-slate-500 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 4h6m0 0v6m0-6L10 14m-4-8H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Your project CTA card -->
      <div
        v-motion-reveal
        class="mt-16 max-w-3xl mx-auto"
      >
        <a
          href="#contact"
          class="group flex flex-col sm:flex-row items-center justify-between gap-6 surface rounded-2xl px-8 py-7 border-dashed !border-2 border-gray-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
          aria-label="Prejsť na kontaktný formulár"
        >
          <div class="text-center sm:text-left">
            <h3 class="text-xl font-display font-bold dark:text-white text-gray-900">
              Ďalší projekt v tomto zozname môže byť váš
            </h3>
            <p class="mt-1 text-gray-600 dark:text-slate-400 text-sm">
              Povedzte nám o svojom biznise a do pár dní uvidíte návrh riešenia.
            </p>
          </div>
          <span class="btn-primary whitespace-nowrap flex-shrink-0">
            Chcem takýto web
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Salon Meri',
    category: 'Klientsky web · Bratislava',
    description: 'Web pre skutočné kaderníctvo v Ružinove — elegantný čierno-zlatý dizajn na mieru značke, rezervácia termínov, cenník, galéria a lokálne SEO na „balayage Bratislava".',
    url: 'https://salonmeri.sk/',
    urlLabel: 'salonmeri.sk',
    image: '/images/demos/salonmeri.webp',
    tags: ['Reálny klient', 'Rezervácie', 'Lokálne SEO', 'Dizajn na mieru']
  },
  {
    title: 'Dreamtangle',
    category: 'Vlastný AI produkt',
    description: 'AI aplikácia na výklad snov, ktorú sme navrhli a postavili celú — od ilustrovaného dizajnu cez AI integráciu až po viacjazyčnú podporu. Ukážka toho, čo s AI vieme.',
    url: 'https://dreamtangle.com/',
    urlLabel: 'dreamtangle.com',
    image: '/images/demos/dreamtangle.webp',
    tags: ['AI integrácia', 'Web aplikácia', 'Viacjazyčnosť', 'Vlastný produkt']
  }
]

const demos = [
  {
    title: 'Salon Elegance',
    note: 'Ukážkové demo — moderný salón',
    url: 'https://salonelegance.vercel.app/',
    image: '/images/demos/salon-elegance.webp'
  },
  {
    title: 'Vintage Barbershop',
    note: 'Ukážkové demo — retro barbershop',
    url: 'https://salonretro.vercel.app/',
    image: '/images/demos/vintage-barbershop.webp'
  }
]
</script>
