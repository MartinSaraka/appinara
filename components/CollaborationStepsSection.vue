<template>
  <section
    id="spolupraca"
    class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mb-14 md:mb-20">
        <p class="eyebrow mb-4">Postup</p>
        <h2 class="text-display-lg font-display font-bold text-gray-900 dark:text-white text-balance">
          Od prvého kontaktu po
          <span class="italic font-medium gradient-text">funkčné riešenie.</span>
        </h2>
      </div>

      <ScrollProgressLine class="max-w-3xl">
        <ol class="list-none p-0 m-0 space-y-12 md:space-y-16 pl-12 md:pl-16">
          <li
            v-for="(step, index) in steps"
            :key="step.title"
            v-motion-fade-visible
            :delay="index * 80"
            class="relative"
          >
            <span class="absolute -left-12 md:-left-16 top-0 text-display-md font-display font-bold text-gray-200 dark:text-slate-800 leading-none select-none" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">{{ step.title }}</h3>
            <p class="text-base md:text-lg text-gray-600 dark:text-slate-300 leading-relaxed max-w-xl text-pretty">
              {{ step.text }}
            </p>
          </li>
        </ol>
      </ScrollProgressLine>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Krátky rozbeh',
    text: 'Spoločne zosúladíme cieľ a obmedzenia — často cez audit alebo nezáväzný call.'
  },
  {
    title: 'Návrh a rozsah',
    text: 'Zrozumiteľný plán — čo presne vznikne a v akom poradí.'
  },
  {
    title: 'Realizácia',
    text: 'Vývoj s pravidelnými updatemi. Vidíte pokrok bez statusových callov.'
  },
  {
    title: 'Spustenie a doladenie',
    text: 'Nasadenie, krátke zaškolenie a úpravy podľa praxe po štarte.'
  }
]
</script>
