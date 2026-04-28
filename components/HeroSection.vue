<template>
  <section
    ref="root"
    class="relative overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32 bg-bone dark:bg-anthracite is-revealed"
  >
    <div class="container mx-auto px-6 relative z-10 max-w-4xl">

      <p class="hero-eyebrow eyebrow flex items-center justify-center gap-2 mb-10">
        <span class="relative flex h-1.5 w-1.5">
          <span class="absolute inline-flex h-full w-full rounded-full bg-ink-900 dark:bg-bone-100 opacity-50 animate-ping" />
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink-900 dark:bg-bone-100" />
        </span>
        Beriem nové projekty · odpoveď do 24 h
      </p>

      <h1
        class="hero-h1 font-display font-normal text-ink-900 dark:text-bone-100 text-display-xl text-balance text-center"
        style="line-height: 1.02;"
      >
        Weby a AI nástroje, ktoré
        <em class="italic font-normal">reálne pomáhajú</em>
        prevádzke.
      </h1>

      <p class="hero-sub text-lg md:text-xl text-ink-700 dark:text-bone-100/80 leading-snug max-w-2xl mt-8 mx-auto text-center text-pretty">
        Pomáham firmám automatizovať prvý kontakt, dopyty a opakovanú agendu.
        Bez ceremónií — píšete priamo so mnou.
      </p>

      <div class="hero-cta mt-12 flex items-center justify-center gap-6 flex-wrap">
        <a
          href="#contact"
          class="btn-primary group"
          aria-label="Prejsť na kontaktný formulár"
          @click="trackEvent('hero_primary_cta_click', { target: 'contact' })"
        >
          Napísať mi
          <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.6" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <a
          href="#work"
          class="font-mono text-[12px] uppercase tracking-mono-wide text-ink-700 dark:text-bone-100 underline-offset-4 hover:underline decoration-ink-300 dark:decoration-ink-500"
        >
          alebo&nbsp;pozri&nbsp;projekty&nbsp;↓
        </a>
      </div>

    </div>

    <div class="container mx-auto px-6 max-w-5xl mt-20 md:mt-28">
      <figure class="hero-photo-wrap relative aspect-[16/10] overflow-hidden bg-bone-200 dark:bg-anthracite-elev img-placeholder">
        <NuxtImg
          v-if="!photoFailed"
          src="/images/hero-scene.jpg"
          alt="Editorial workspace — Appinara"
          format="webp"
          sizes="sm:96vw md:90vw lg:1024px"
          class="absolute inset-0 w-full h-full object-cover"
          @error="photoFailed = true"
        />
        <figcaption class="absolute left-4 bottom-4 right-4 flex items-end justify-between text-bone-50 mix-blend-difference font-mono text-[10px] tracking-mono-wide uppercase">
          <span>Martin · Appinara</span>
          <span>SK · 2026</span>
        </figcaption>
      </figure>

      <ul class="hero-stats mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300" aria-label="Kľúčové metriky">
        <li v-for="stat in stats" :key="stat.label" class="flex items-baseline gap-1.5">
          <span class="font-display text-base text-ink-900 dark:text-bone-100" style="font-style: normal;">{{ stat.value }}</span>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { trackEvent } = useAnalytics()
const photoFailed = ref(false)
const root = ref<HTMLElement | null>(null)

const stats = [
  { value: '20+', label: 'Projektov' },
  { value: '4 r.', label: 'Skúseností' },
  { value: '24 h', label: 'Odpoveď' },
  { value: '100 %', label: 'Priamo so mnou' }
]
</script>

<style scoped>
.hero-eyebrow,
.hero-h1,
.hero-sub,
.hero-cta,
.hero-photo-wrap,
.hero-stats {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 720ms ease, transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
}
.is-revealed .hero-eyebrow    { opacity: 1; transform: none; transition-delay: 0ms; }
.is-revealed .hero-h1         { opacity: 1; transform: none; transition-delay: 120ms; }
.is-revealed .hero-sub        { opacity: 1; transform: none; transition-delay: 280ms; }
.is-revealed .hero-cta        { opacity: 1; transform: none; transition-delay: 400ms; }
.is-revealed .hero-photo-wrap { opacity: 1; transform: none; transition-delay: 520ms; }
.is-revealed .hero-stats      { opacity: 1; transform: none; transition-delay: 640ms; }

@media (prefers-reduced-motion: reduce) {
  .hero-eyebrow, .hero-h1, .hero-sub, .hero-cta, .hero-photo-wrap, .hero-stats {
    transform: none !important;
    transition: none !important;
    opacity: 1 !important;
  }
}
</style>
