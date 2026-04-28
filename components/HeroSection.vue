<template>
  <section
    ref="root"
    class="relative overflow-hidden hero-surface paper-grain section-tall pt-32 md:pt-40"
  >
    <!-- One single-color riso glow. No second blob, no halftone overlay. -->
    <span class="riso-glow cinnabar w-[480px] h-[480px] -top-32 -right-24" aria-hidden="true" />

    <div class="container mx-auto px-6 relative z-10 max-w-5xl">

      <!-- Top editorial rule -->
      <div
        class="editorial-rule reveal-fade is-revealed mb-6"
        :style="{ animationDelay: '0ms' }"
      >
        § 01 — Príjem · AI asistent
      </div>

      <!-- Status badge, single line -->
      <p
        class="eyebrow reveal-fade mb-10 md:mb-14 flex items-center gap-2"
        :style="{ animationDelay: '180ms' }"
      >
        <span class="relative flex h-1.5 w-1.5">
          <span class="absolute inline-flex h-full w-full rounded-full bg-primary-500 dark:bg-cinnabar-glow opacity-60 animate-ping" />
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
        </span>
        Beriem nové projekty · odpoveď do 24 h
      </p>

      <!-- Headline: single italic accent word, no multi-line stagger -->
      <h1
        class="font-display font-normal text-ink-900 dark:text-bone-100 text-display-xl text-balance max-w-4xl reveal-clip"
        :style="{ animationDelay: '380ms', lineHeight: '0.98' }"
      >
        AI a weby pre prevádzky, ktoré majú
        <em class="italic font-normal text-primary-500 dark:text-cinnabar-glow not-italic-rule">dosť</em>
        pretekov s emailom.
      </h1>

      <!-- Body lede -->
      <p
        class="text-lg md:text-xl text-ink-700 dark:text-bone-100 leading-snug max-w-2xl mt-8 reveal-rise"
        :style="{ animationDelay: '720ms' }"
      >
        Asistent dvíha 70&nbsp;% bežných dopytov sám. Vy odpisujete len na to, kde to dáva zmysel.
      </p>

      <!-- Founder byline -->
      <div
        class="mt-8 flex items-center gap-4 max-w-xl reveal-rise"
        :style="{ animationDelay: '780ms' }"
      >
        <div class="relative flex items-center justify-center w-12 h-12 bg-bone-200 dark:bg-anthracite-elev border border-ink-900 dark:border-bone-100 overflow-hidden flex-shrink-0">
          <NuxtImg
            v-if="hasPortrait"
            src="/photos/portrait.jpg"
            alt="Martin Saraka — zakladateľ Appinara"
            sizes="48px"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <span v-else class="font-display italic text-base text-ink-900 dark:text-bone-100 leading-none translate-y-[1px]" aria-hidden="true">M.S.</span>
          <span class="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" aria-hidden="true" />
          <span class="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" aria-hidden="true" />
        </div>
        <div class="text-sm leading-snug">
          <p class="font-sans font-medium text-ink-900 dark:text-bone-100">Martin Saraka</p>
          <p class="text-ink-700 dark:text-bone-200">Robím Appinaru sám — píšete priamo so mnou.</p>
        </div>
      </div>

      <!-- CTA pair -->
      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 reveal-rise"
        :style="{ animationDelay: '880ms' }"
      >
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
        <NuxtLink
          to="/ai-audit"
          class="btn-secondary"
          aria-label="Spustiť bezplatný AI audit"
          @click="trackEvent('hero_secondary_cta_click', { target: 'ai-audit' })"
        >
          Bezplatný AI audit
        </NuxtLink>
      </div>

      <!-- Device showcase -->
      <div
        class="relative mt-20 md:mt-24 max-w-4xl reveal-clip"
        :style="{ animationDelay: '950ms' }"
      >
        <div class="paper-card-deep overflow-hidden">
          <DeviceFrame
            device="browser"
            url="appinara.sk/asistent"
            container-class="relative"
          >
            <div class="relative w-full h-full bg-bone-50 dark:bg-anthracite-elev p-5 md:p-7 flex flex-col gap-4">

              <!-- Header -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="relative flex items-center justify-center w-9 h-9 bg-bone-50 dark:bg-anthracite-elev border border-ink-900 dark:border-bone-100">
                    <span class="font-display italic text-[16px] text-ink-900 dark:text-bone-100 leading-none translate-y-[1px]">A</span>
                    <span class="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
                    <span class="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
                  </span>
                  <div>
                    <p class="font-mono text-[11px] tracking-mono-wide uppercase text-ink-700 dark:text-bone-100">Asistent · príjem dopytov</p>
                    <p class="text-[11px] text-ink-500 dark:text-ink-300 mt-0.5">Online · v1.4</p>
                  </div>
                </div>
              </div>

              <!-- Chat conversation -->
              <div class="flex-1 space-y-3">
                <div class="flex justify-end">
                  <div class="max-w-[78%] rounded-md bg-bone-200 dark:bg-anthracite-mist px-3.5 py-2 text-sm text-ink-900 dark:text-bone-100 font-sans">
                    Dobrý deň, máte voľný termín tento týždeň?
                  </div>
                </div>
                <div class="flex">
                  <div class="max-w-[88%] rounded-md bg-cinnabar-soft dark:bg-cinnabar-glow/10 border border-primary-500/30 dark:border-cinnabar-glow/40 px-3.5 py-2.5 text-sm text-ink-900 dark:text-bone-100 font-sans">
                    Áno — voľné sú
                    <em class="font-display italic font-normal text-primary-500 dark:text-cinnabar-glow not-italic-rule">štvrtok 14:30</em>
                    a
                    <em class="font-display italic font-normal text-primary-500 dark:text-cinnabar-glow not-italic-rule">piatok 11:00</em>.
                    <div class="mt-2 flex gap-2 flex-wrap">
                      <span class="text-[10px] font-mono tracking-mono-wide uppercase px-2 py-1 bg-primary-500 text-bone-50 dark:bg-cinnabar-glow dark:text-anthracite">Štv 14:30</span>
                      <span class="text-[10px] font-mono tracking-mono-wide uppercase px-2 py-1 bg-primary-500 text-bone-50 dark:bg-cinnabar-glow dark:text-anthracite">Pia 11:00</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </DeviceFrame>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { trackEvent } = useAnalytics()
const root = ref<HTMLElement | null>(null)

// Toggle to true once /public/photos/portrait.jpg exists.
const hasPortrait = ref(false)
</script>

<style scoped>
/* When Tailwind's utility `italic` lands on the same span as a font-display rule,
   ensure font-style:italic still wins. */
.not-italic-rule { font-style: italic; }
</style>
