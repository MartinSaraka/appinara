<template>
  <section class="relative py-32 dark:bg-slate-900 bg-gray-50 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 grid-pattern opacity-20"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div 
        v-motion-fade-visible
        class="max-w-4xl mx-auto text-center"
      >
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white text-gray-900">
          Pripravení posunúť váš
          <span class="gradient-text block">biznis na ďalší level?</span>
        </h2>
        <p class="text-xl dark:text-slate-200 text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Napíšte nám o vašom projekte a dostanete nezáväznú konzultáciu zdarma. Spolu preberieme vaše potreby a nájdeme najlepšie riešenie.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contact" class="btn-primary text-lg group" aria-label="Kontaktovať nás a začať nový projekt">
            Začať projekt
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <!-- Features -->
        <div class="grid md:grid-cols-3 gap-8 mt-20">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="text-center"
          >
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-lg font-semibold dark:text-white text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-700 dark:text-slate-400 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '⚡',
    title: 'Rýchla realizácia',
    description: 'Väčšinu projektov dokončíme do 2-4 týždňov'
  },
  {
    icon: '🎯',
    title: 'Zamerané na výsledky',
    description: 'Nie len dizajn, ale funkčné riešenia pre váš biznis'
  },
  {
    icon: '🤝',
    title: 'Dlhodobá podpora',
    description: 'Technická podpora a pomoc aj po spustení projektu'
  }
]
</script>
