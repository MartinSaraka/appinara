<template>
  <section
    id="co-ziskate"
    class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 dark:bg-slate-900/80 bg-gray-50 overflow-hidden"
  >
    <div class="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
    <div class="absolute -top-32 -left-32 w-[420px] h-[420px] mesh-3 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <div class="max-w-2xl mb-14 md:mb-20">
        <p class="eyebrow mb-4">Z praxe</p>
        <h2 class="text-display-lg font-display font-bold dark:text-white text-gray-900 text-balance">
          Anonymizované príklady.
          <span class="block italic font-medium gradient-text">Žiadne reklamné čísla.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
        <article
          v-for="row in outcomes"
          :key="row.title"
          v-motion-fade-visible
          class="rounded-2xl border border-gray-200/90 dark:border-slate-700/80 bg-bone-50 dark:bg-anthracite-elev/70 p-7 md:p-8 shadow-sm"
        >
          <p class="eyebrow mb-3">{{ row.badge }}</p>
          <h3 class="text-2xl md:text-3xl font-display font-bold dark:text-white text-gray-900 mb-3 text-balance leading-[1.15]">
            {{ row.title }}
          </h3>
          <p class="text-base md:text-lg text-emerald-700 dark:text-emerald-400 font-semibold mb-5 leading-snug">
            {{ row.metric }}
          </p>
          <p class="text-sm md:text-base dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            {{ row.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const outcomes = [
  {
    badge: 'Služby · prevádzka',
    title: 'Rýchlejší prvý kontakt s klientom',
    metric: '→ prvé odpovede v hodinách, nie 1–2 dňoch',
    text: 'Sezónna prevádzka s dopytmi z webu. Zjednotili sme prvú reakciu tak, aby sa nič nestratilo medzi tímom a Instagram DM-kami.'
  },
  {
    badge: 'B2B obchod',
    title: 'Menej stratených leadov',
    metric: '→ menej ručného prepisovania medzi schránkou a CRM',
    text: 'Firma s pravidelnými dopytmi z viacerých zdrojov. Jednoduchší prehľad a follow-up — obchod rieši priority namiesto dohľadávania v inboxe.'
  }
]
</script>
