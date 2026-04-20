<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient pb-8">
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="max-w-5xl mx-auto text-center">
        <div
          v-motion-fade-visible
          class="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-8 animate-glow"
        >
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-sm font-medium text-gray-900 dark:text-white">Pripravený na nové projekty</span>
        </div>

        <h1
          v-motion-fade-visible
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-gray-900 dark:text-white"
        >
          AI automatizácie a digitálne riešenia,
          <span class="block gradient-text animate-gradient">ktoré šetria čas a prinášajú viac dopytov</span>
        </h1>

        <p
          v-motion-fade-visible
          :delay="200"
          class="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Od AI chatbotov a lead follow-up automatizácií až po weby, dashboardy a vlastné riešenia. Zameriavam sa na
          <span class="dark:text-primary-400 text-primary-600 font-semibold">praktické výsledky</span>, nie na prázdny hype.
        </p>

        <div
          v-motion-fade-visible
          :delay="400"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <NuxtLink
            to="/ai-audit"
            class="btn-primary group"
            aria-label="Získať AI audit"
            @click="trackEvent('hero_primary_cta_click')"
          >
            Získať AI audit
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/riesenia"
            class="btn-secondary group"
            aria-label="Pozrieť riešenia"
            @click="trackEvent('hero_secondary_cta_click')"
          >
            Pozrieť riešenia
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>
        </div>

        <div
          v-motion-fade-visible
          :delay="600"
          class="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-20 max-w-3xl mx-auto"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="glass-effect rounded-2xl p-6 sm:p-8 card-hover"
          >
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3">{{ stat.value }}</div>
            <div class="text-gray-700 dark:text-slate-300 text-sm sm:text-base leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { trackEvent } = useAnalytics()

const stats = [
  { value: '5+', label: 'Rokov praxe vo vývoji a AI' },
  { value: '2–4', label: 'Týždne typický cyklus dodania' },
  { value: '24/7', label: 'Automatizácie pracujú nepretržite' }
]
</script>
