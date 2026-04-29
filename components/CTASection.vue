<template>
  <section class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 overflow-hidden">
    <MeshGradientBg palette="1" :grain="true" />
    <div class="absolute inset-0 bg-bone/55 dark:bg-anthracite/65 backdrop-blur-[2px]" aria-hidden="true" />
    <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <div v-motion-fade-visible class="max-w-4xl mx-auto text-center">
        <p class="eyebrow mb-5">Ďalší krok</p>
        <h2 class="text-display-xl font-display font-bold text-gray-900 dark:text-white text-balance mb-6 leading-[1.02]">
          Pripravený posunúť firmu
          <span class="italic font-medium gradient-text">na ďalší level?</span>
        </h2>
        <p class="text-lg md:text-2xl text-gray-700 dark:text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Krátky AI audit zarovná smer. Bez sales hovorov, bez záväzkov.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
          <NuxtLink to="/ai-audit" class="btn-primary btn-lg group">
            Spustiť AI audit
            <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <a href="#contact" class="btn-secondary btn-lg">
            Napísať priamo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
