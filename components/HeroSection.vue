<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient pb-8">
    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>
    
    <!-- Animated gradient orb -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    
    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Badge -->
        <div 
          v-motion-fade-visible
          class="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-8 animate-glow"
        >
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-sm font-medium">Dostupný pre nové projekty</span>
        </div>
        
        <!-- Main Heading -->
        <h1 
          v-motion-fade-visible
          class="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
        >
          Zvýšte vaše
          <span class="block gradient-text animate-gradient">zisky pomocou AI</span>
          a moderných technológií
        </h1>
        
        <!-- Subheading -->
        <p 
          v-motion-fade-visible
          :delay="200"
          class="text-xl md:text-2xl text-slate-200 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Pomáhame firmám automatizovať procesy, zvýšiť efektivitu a rásť pomocou 
          <span class="text-primary-400 font-semibold">AI integrácií</span> a vlastných webových riešení.
        </p>
        
        <!-- CTA Buttons -->
        <div 
          v-motion-fade-visible
          :delay="400"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" class="btn-primary group" aria-label="Kontaktovať nás a začať spoluprácu">
            Začnime spoluprácu
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" class="btn-secondary group" aria-label="Prejsť na sekciu služby">
            Pozrieť služby
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
        
        <!-- Stats -->
        <div 
          v-motion-fade-visible
          :delay="600"
          class="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-24 max-w-3xl mx-auto"
        >
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="glass-effect rounded-2xl p-6 sm:p-8 card-hover"
          >
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3">{{ stat.value }}</div>
            <div class="text-slate-300 text-sm sm:text-base leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '5+', label: 'Rokov skúseností' },
  { value: '2-4', label: 'Týždne na realizáciu' },
  { value: '24/7', label: 'Podpora pre klientov' },
]
</script>
