<template>
  <section id="faq" class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite">
    <div class="container mx-auto px-6 max-w-3xl">
      <p class="eyebrow mb-4 text-center">FAQ</p>
      <h2 class="text-display-lg font-display font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-14 text-balance">
        Otázky, ktoré <span class="italic font-medium gradient-text">padajú často.</span>
      </h2>
      <div class="space-y-3">
        <details
          v-for="(item, index) in faqs"
          :key="index"
          class="group rounded-md border border-mist dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev/70 overflow-hidden"
        >
          <summary
            class="cursor-pointer list-none flex justify-between items-center gap-4 px-5 py-4 md:px-6 md:py-4 font-semibold text-gray-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 rounded-2xl"
          >
            <span class="text-left text-sm md:text-base">{{ item.q }}</span>
            <span class="text-primary-600 dark:text-primary-400 group-open:rotate-180 transition-transform flex-shrink-0" aria-hidden="true">▼</span>
          </summary>
          <div
            class="px-5 pb-4 md:px-6 md:pb-5 pt-0 text-gray-600 dark:text-slate-300 text-sm leading-relaxed border-t border-gray-100 dark:border-slate-800/80"
          >
            <p class="pt-4">{{ item.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'Pre koho sú služby určené?',
    a: 'Pre menšie a stredné firmy, ktoré chcú menej ručnej práce okolo dopytov, emailov alebo interných procesov.'
  },
  {
    q: 'Musím už vedieť presný projekt?',
    a: 'Nie. Stačí popísať situáciu — navrhnem rozumný ďalší krok.'
  },
  {
    q: 'Viete sa napojiť na to, čo už používame?',
    a: 'Áno, keď to dáva technický a biznisový zmysel — riešenia navrhujem s ohľadom na váš stack.'
  },
  {
    q: 'Robíte aj veci mimo AI?',
    a: 'Áno — weby, e‑commerce, dashboardy a vlastné nástroje sú bežná súčasť práce.'
  }
]
</script>

<style scoped>
details > summary::-webkit-details-marker {
  display: none;
}
</style>
