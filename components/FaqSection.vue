<template>
  <section id="faq" class="relative py-20 md:py-32 bg-white dark:bg-slate-950">
    <div class="container mx-auto px-6">
      <div class="text-center mb-10 md:mb-16">
        <p v-motion-reveal class="eyebrow mb-4">05 · FAQ</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Otázky pred <span class="accent-text">rozhodnutím</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          To, čo sa nás firmy pýtajú najčastejšie — na rovinu a bez žargónu
        </p>
      </div>

      <!-- One reveal for the whole list — per-item tweens spike on anchor jumps -->
      <div v-motion-reveal class="max-w-3xl mx-auto">
        <details
          v-for="(item, index) in faqs"
          :key="item.q"
          class="faq-item group surface rounded-2xl mb-4 overflow-hidden"
        >
          <summary class="cursor-pointer list-none flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400/50 rounded-2xl">
            <span class="font-display font-bold text-sm text-primary-600 dark:text-primary-400 tabular-nums flex-shrink-0" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="flex-1 font-display font-bold text-lg md:text-xl leading-tight dark:text-white text-gray-900">
              {{ item.q }}
            </span>
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xl font-medium transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            >+</span>
          </summary>
          <div class="px-6 md:px-8 pb-6 md:pb-7 pl-[4.25rem] md:pl-[4.75rem] text-gray-700 dark:text-slate-300 leading-relaxed">
            {{ item.a }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'Koľko stojí nový web?',
    a: 'Závisí od rozsahu. Jednoduchšie weby začínajú v stovkách eur, e-shopy a aplikácie naceňujeme individuálne. Po nezáväznej konzultácii dostanete do 2–3 dní presnú ponuku — a rozhodujete sa až potom.'
  },
  {
    q: 'Ako dlho trvá, kým bude web hotový?',
    a: 'Väčšinu projektov dodávame do 2–4 týždňov od schválenia návrhu. Počas vývoja dostávate pravidelné ukážky, takže presne viete, v akom stave projekt je.'
  },
  {
    q: 'Musím presne vedieť, čo chcem?',
    a: 'Nie. Stačí, keď nám popíšete svoj biznis a čo vás trápi — my navrhneme riešenie a vysvetlíme ho zrozumiteľne, bez IT žargónu.'
  },
  {
    q: 'Čo ak sa mi návrh nebude páčiť?',
    a: 'Konzultácia aj návrh sú nezáväzné. Na projekte pracujeme spolu — pripomienkujete priebežne počas vývoja, nie až na konci. Nič neplatíte, kým neschválite ponuku.'
  },
  {
    q: 'Viete sa napojiť na to, čo už používame?',
    a: 'Áno — rezervačné systémy, fakturáciu, CRM či sklad. Riešenia navrhujeme s ohľadom na nástroje, ktoré už vo firme máte.'
  },
  {
    q: 'Čo sa deje po spustení webu?',
    a: 'Nezmizneme. Poskytujeme technickú podporu, drobné úpravy aj ďalší rozvoj podľa toho, ako váš biznis rastie.'
  }
]

// FAQ structured data for search engines
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      })
    }
  ]
})
</script>

<style scoped>
details > summary::-webkit-details-marker {
  display: none;
}
.faq-item[open] {
  border-color: rgba(99, 102, 241, 0.4);
}
</style>
