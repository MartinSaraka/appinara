<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <main id="main-content" class="relative pt-32 md:pt-40 pb-20">
      <div class="container mx-auto px-6 max-w-3xl">
        <header class="mb-12">
          <p class="eyebrow mb-5">Chyba {{ statusCode }}</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            {{ heading }}
            <span class="italic font-medium gradient-text">{{ headingAccent }}</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            {{ message }}
          </p>
        </header>

        <nav aria-label="Kam ďalej">
          <p class="eyebrow mb-6">Kam ďalej</p>
          <div class="grid sm:grid-cols-3 gap-4">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="group rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/60 dark:bg-anthracite/80 hover:border-cinnabar-500/50 dark:hover:border-cinnabar-glow/50 transition-colors p-5 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
            >
              <p class="text-sm font-display font-bold dark:text-white text-gray-900 mb-1 group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors">
                {{ link.title }}
              </p>
              <p class="text-sm dark:text-slate-400 text-gray-600 leading-snug text-pretty">
                {{ link.description }}
              </p>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const statusCode = computed(() => props.error?.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)

const heading = computed(() => (isNotFound.value ? 'Táto stránka' : 'Niečo sa'))
const headingAccent = computed(() => (isNotFound.value ? 'tu už nie je.' : 'pokazilo.'))

const message = computed(() =>
  isNotFound.value
    ? 'Adresa je preklep, alebo sme obsah presunuli. Nižšie sú miesta, kde pravdepodobne nájdete to, čo ste hľadali.'
    : 'Na našej strane nastala chyba. Skúste to o chvíľu znova — ak problém pretrvá, dajte nám vedieť.'
)

const links = [
  { to: '/', title: 'Domov', description: 'Čo robíme a pre koho.' },
  { to: '/riesenia', title: 'Riešenia', description: 'Weby, AI a automatizácia v praxi.' },
  { to: '/blog', title: 'Blog', description: 'Články o weboch, cenách a AI.' }
]

// Chybové stránky nepatria do indexu.
useHead({
  title: computed(() => (isNotFound.value ? 'Stránka sa nenašla | Appinara' : 'Chyba | Appinara')),
  meta: [{ name: 'robots', content: 'noindex, follow' }]
})
</script>
