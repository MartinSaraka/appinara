<template>
  <section id="zaverecna-cta" class="relative py-24 md:py-32 dark:bg-slate-900 bg-gray-50 overflow-hidden">
    <div class="absolute inset-0 grid-pattern opacity-20"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div v-motion-fade-visible class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white text-gray-900">
          Zistime, čo sa oplatí
          <span class="gradient-text block">automatizovať vo vašej firme</span>
        </h2>
        <p class="text-lg md:text-xl dark:text-slate-200 text-gray-700 mb-10 leading-relaxed">
          Vyplňte krátky AI audit alebo mi napíšte o vašom projekte. Ozvem sa s konkrétnym návrhom ďalšieho postupu.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/ai-audit" class="btn-primary text-lg group" aria-label="Spustiť AI audit">
            Spustiť AI audit
            <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <a href="#contact" class="btn-secondary text-lg">Napísať správu</a>
        </div>
      </div>
    </div>
  </section>
</template>
