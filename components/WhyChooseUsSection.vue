<template>
  <section id="why-appinara" class="relative py-24 md:py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2
          v-motion-fade-visible
          class="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white text-gray-900"
        >
          Prečo <span class="gradient-text">Appinara</span>
        </h2>
        <p
          v-motion-fade-visible
          :delay="200"
          class="text-lg text-gray-700 dark:text-slate-300"
        >
          Konkrétny prístup: AI, vývoj a automatizácia v jednom — aby ste nemuseli skladať päť dodávateľov.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          v-motion-fade-visible
          :delay="index * 80"
          class="group"
        >
          <div class="glass-effect rounded-2xl p-8 h-full hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 border border-transparent dark:border-white/5">
            <div class="text-3xl mb-4" aria-hidden="true">{{ benefit.icon }}</div>
            <h3 class="text-lg font-display font-bold mb-2 dark:text-white text-gray-900">
              {{ benefit.title }}
            </h3>
            <p class="dark:text-slate-300 text-gray-700 text-sm leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: '🧩',
    title: 'Riešenia šité na mieru',
    description: 'Žiadne univerzálne šablóny bez súvislosti s vaším procesom — navrhujem podľa skutočnej prevádzky.'
  },
  {
    icon: '📈',
    title: 'Praktický focus na výsledok',
    description: 'Merateľnejší čas, menej chaosu, rýchlejšie dopyty. Ak to nedáva zmysel, povieme to na rovinu.'
  },
  {
    icon: '⚙️',
    title: 'AI + vývoj + automatizácia',
    description: 'Od návrhu cez implementáciu až po nasadenie — jeden smer namiesto rozťaženého projektu.'
  },
  {
    icon: '✨',
    title: 'Moderný dizajn a použiteľnosť',
    description: 'Riešenia majú vyzerať dôveryhodne a byť zrozumiteľné pre váš tím aj zákazníkov.'
  },
  {
    icon: '🏢',
    title: 'Aj pre menšie firmy',
    description: 'Nechcem predávať „enterprise“ za každú cenu — viem nastaviť rozumný rozsah podľa rozpočtu.'
  }
]
</script>
