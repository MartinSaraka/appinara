<template>
  <section class="relative py-32 dark:bg-slate-900 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <!-- Gradient panel -->
      <div
        v-motion-reveal-scale
        class="relative max-w-5xl mx-auto rounded-3xl overflow-hidden cta-panel border border-white/10"
      >
        <!-- Panel decorations -->
        <div class="absolute inset-0 grid-pattern opacity-[0.12]" aria-hidden="true"></div>
        <div class="absolute -top-32 -right-24 w-96 h-96 rounded-full cta-orb" aria-hidden="true"></div>
        <div class="absolute -bottom-40 -left-24 w-96 h-96 rounded-full cta-orb" aria-hidden="true"></div>

        <div class="relative px-8 py-16 md:px-16 md:py-20 text-center">
          <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            Zistite, čo by web a AI<br class="hidden md:block" />
            spravili pre váš biznis
          </h2>
          <p class="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Napíšte nám pár viet o svojej firme. Do 24 hodín sa ozveme
            s konkrétnym návrhom — nezáväzne a zdarma.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              class="px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
              aria-label="Získať nezáväznú konzultáciu zdarma"
            >
              Konzultácia zdarma
              <svg class="inline-block w-5 h-5 ml-2 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              class="px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all duration-300"
              aria-label="Pozrieť našu prácu"
            >
              Pozrieť našu prácu
            </a>
          </div>

          <ul class="mt-10 flex flex-wrap gap-x-8 gap-y-2 justify-center text-sm text-indigo-100/80">
            <li v-for="point in trustPoints" :key="point" class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Features -->
      <div class="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          v-motion-reveal
          :delay="index * 110"
          class="text-center"
        >
          <div
            class="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 flex items-center justify-center"
            aria-hidden="true"
          >
            <component :is="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold dark:text-white text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-700 dark:text-slate-400 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const trustPoints = ['Odpoveď do 24 hodín', 'Bez záväzkov', 'Platíte až po schválení ponuky']

const BoltIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
  ])

const TargetIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '9' }),
    h('circle', { cx: '12', cy: '12', r: '5' }),
    h('circle', { cx: '12', cy: '12', r: '1.2', fill: 'currentColor' })
  ])

const SupportIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m9.9 2.829a5 5 0 010 7.07m-7.072 0a5 5 0 010-7.07M12 12h.01'
    })
  ])

const features = [
  {
    icon: BoltIcon,
    title: 'Rýchla realizácia',
    description: 'Väčšinu projektov dokončíme do 2-4 týždňov'
  },
  {
    icon: TargetIcon,
    title: 'Zamerané na výsledky',
    description: 'Nie len dizajn, ale funkčné riešenia pre váš biznis'
  },
  {
    icon: SupportIcon,
    title: 'Dlhodobá podpora',
    description: 'Technická podpora a pomoc aj po spustení projektu'
  }
]
</script>

<style scoped>
/* Deep, desaturated panel — anchor, not neon billboard */
.cta-panel {
  background:
    radial-gradient(ellipse 90% 90% at 15% -20%, rgba(99, 102, 241, 0.35), transparent 60%),
    linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #3b2b7a 100%);
  box-shadow: 0 28px 64px -28px rgba(30, 27, 75, 0.55);
}
.cta-orb {
  background: radial-gradient(circle closest-side, rgba(255, 255, 255, 0.10), transparent 72%);
}
</style>
