<template>
  <section class="relative overflow-hidden hero-surface paper-grain section-tall pt-32 md:pt-40">
    <span class="riso-glow cinnabar w-[480px] h-[480px] -top-32 -right-24" aria-hidden="true" />

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <div class="lg:col-span-7">
          <p class="eyebrow mb-8 flex items-center gap-2">
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full rounded-full bg-primary-500 dark:bg-cinnabar-glow opacity-60 animate-ping" />
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
            </span>
            Beriem nové projekty · odpoveď do 24 h
          </p>

          <h1
            class="font-display font-normal text-ink-900 dark:text-bone-100 text-display-xl text-balance"
            style="line-height: 1.02;"
          >
            Weby a AI nástroje, ktoré
            <em class="italic font-normal text-primary-500 dark:text-cinnabar-glow">reálne pomáhajú</em>
            prevádzke.
          </h1>

          <p class="text-lg md:text-xl text-ink-700 dark:text-bone-100 leading-snug max-w-xl mt-8">
            Pomáham firmám automatizovať prvý kontakt, dopyty a opakovanú agendu.
            Bez ceremónií — píšete priamo so mnou.
          </p>

          <div class="mt-10">
            <a
              href="#contact"
              class="btn-primary group"
              aria-label="Prejsť na kontaktný formulár"
              @click="trackEvent('hero_primary_cta_click', { target: 'contact' })"
            >
              Napísať mi
              <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative max-w-sm mx-auto lg:max-w-none">
            <div class="paper-card-deep overflow-hidden aspect-[4/5] relative">
              <NuxtImg
                v-if="!photoFailed"
                src="/me.jpg"
                alt="Appinara"
                format="webp"
                sizes="sm:80vw md:50vw lg:480px"
                class="absolute inset-0 w-full h-full object-cover"
                @error="photoFailed = true"
              />
              <div
                v-else
                class="absolute inset-0 flex flex-col items-center justify-center bg-bone-200 dark:bg-anthracite-elev"
                aria-hidden="true"
              >
                <span class="font-display italic text-[140px] leading-none text-ink-900 dark:text-bone-100">A</span>
                <span class="font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300 mt-4">
                  Foto čoskoro
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { trackEvent } = useAnalytics()
const photoFailed = ref(false)
</script>
