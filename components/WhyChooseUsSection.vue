<template>
  <section
    id="why-us"
    class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite overflow-hidden"
  >
    <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
    <div class="absolute -top-40 -right-40 w-[520px] h-[520px] mesh-1 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <div class="max-w-2xl mb-16 md:mb-24">
        <p class="eyebrow mb-4">Prečo Appinara</p>
        <h2 class="text-display-lg font-display font-bold text-gray-900 dark:text-white text-balance">
          Bez ceremónií. <span class="italic font-medium gradient-text">Píšete priamo so mnou.</span>
        </h2>
      </div>

      <div class="max-w-4xl space-y-12 md:space-y-16">
        <KineticStatement v-for="(s, i) in statements" :key="i" :size="s.size">
          {{ s.text }}<span class="text-primary-600 dark:text-primary-400">.</span>
        </KineticStatement>
      </div>

      <div class="max-w-3xl mt-16 md:mt-24 grid sm:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-slate-400">
        <div>
          <p class="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">2–4</p>
          <p>týždne typický projekt</p>
        </div>
        <div>
          <p class="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">24 h</p>
          <p>čas na prvú odpoveď</p>
        </div>
        <div>
          <p class="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">0</p>
          <p>medziľahlých project managerov</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const statements = [
  { text: 'Najprv problém. Potom nástroj', size: 'xl' as const },
  { text: 'Píšete osobe — nie ticket systému', size: 'xl' as const },
  { text: 'Vlastníte kód, dáta aj prístupy', size: 'xl' as const },
  { text: 'Realistické tempo. Bez reklamných sľubov', size: 'xl' as const }
]
</script>
