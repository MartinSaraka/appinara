<template>
  <section id="pre-koho" class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80 overflow-hidden">
    <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
    <div class="absolute top-1/2 -translate-y-1/2 -left-32 w-[420px] h-[420px] mesh-2 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <div class="max-w-5xl mx-auto">
        <p class="eyebrow mb-4 text-center">Pre koho</p>
        <h2 class="text-display-lg font-display font-bold text-gray-900 dark:text-white text-balance text-center mb-12">
          Prevádzky. B2B. Firmy s
          <span class="italic font-medium gradient-text">prudkým rastom dopytov.</span>
        </h2>

        <ul class="flex flex-wrap justify-center gap-3 md:gap-4">
          <li
            v-for="tag in tags"
            :key="tag"
            v-motion-fade-visible
            class="text-base md:text-lg font-display font-semibold px-5 md:px-7 py-3 md:py-4 rounded-full border border-gray-200 dark:border-slate-700 bg-bone-50 dark:bg-anthracite-elev/70 text-gray-800 dark:text-slate-100 shadow-sm hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {{ tag }}
          </li>
        </ul>

        <p class="text-center mt-12 max-w-xl mx-auto text-gray-600 dark:text-slate-400 leading-relaxed text-balance">
          Najväčší dopad tam, kde vzniká chaos v komunikácii, lead managemente alebo opakujúcich sa procesoch.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = [
  'Salóny a prevádzky',
  'Služby na dopyt',
  'Agentúry',
  'B2B obchod',
  'E-commerce',
  'Interné nástroje',
  'Veľa ručnej administratívy'
]
</script>
