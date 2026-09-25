<template>
  <section id="baliky" class="relative py-20 md:py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12 md:mb-20">
        <p v-motion-reveal class="eyebrow mb-4">05 · Balíky</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Jasná cena, <span class="accent-text">žiadne prekvapenia</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Jednorazová cena za spustenie a mesačná správa, aby web fungoval aj po roku. Presnú sumu potvrdíme po krátkom hovore.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
        <div
          v-for="(plan, index) in plans"
          :key="plan.name"
          v-motion-reveal-scale
          :delay="index * 100"
          class="relative"
        >
          <div
            class="relative surface rounded-2xl p-7 md:p-9 h-full flex flex-col"
            :class="plan.featured ? 'border-primary-500/60 dark:border-primary-400/60 ring-1 ring-primary-500/30' : ''"
          >
            <span
              v-if="plan.featured"
              class="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white"
            >
              Najčastejšia voľba
            </span>

            <h3 class="text-2xl font-display font-bold mb-2 dark:text-white text-gray-900">
              {{ plan.name }}
            </h3>
            <p class="text-gray-700 dark:text-slate-400 mb-6 leading-relaxed">
              {{ plan.for }}
            </p>

            <div class="mb-1">
              <span class="text-sm text-gray-600 dark:text-slate-400">od </span>
              <span class="text-4xl font-display font-bold dark:text-white text-gray-900">{{ plan.setup }}</span>
              <span class="text-gray-600 dark:text-slate-400"> jednorazovo</span>
            </div>
            <p class="mb-7 text-gray-700 dark:text-slate-300">
              + <strong class="dark:text-white text-gray-900">{{ plan.monthly }}</strong> mesačne za správu
            </p>

            <ul class="space-y-3 mb-8 flex-1">
              <li
                v-for="item in plan.items"
                :key="item"
                class="flex gap-3 text-gray-700 dark:text-slate-300"
              >
                <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-violet-500" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <a
              href="#contact"
              :class="plan.featured ? 'btn-primary' : 'btn-secondary'"
              class="text-center w-full"
            >
              Chcem {{ plan.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto mt-12 md:mt-16 text-center">
        <p class="text-gray-700 dark:text-slate-300 leading-relaxed">
          <strong class="dark:text-white text-gray-900">Čo je v mesačnej správe:</strong>
          hosting, SSL a zálohy, bezpečnostné aktualizácie, drobné úpravy textov a fotiek, mesačný prehľad návštevnosti a dopytov.
          Správu môžete zrušiť s mesačnou výpovednou lehotou. Web aj dáta zostávajú vaše.
        </p>
        <p class="mt-4 text-sm text-gray-600 dark:text-slate-400">
          Ceny sú bez DPH. Ak potrebujete niečo mimo balíkov, napíšte, pripravíme ponuku na mieru.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Plan {
  name: string
  for: string
  setup: string
  monthly: string
  featured?: boolean
  items: string[]
}

const plans: Plan[] = [
  {
    name: 'Štart',
    for: 'Pre živnostníkov a malé prevádzky, ktoré potrebujú byť dohľadateľné.',
    setup: '490 €',
    monthly: '19 €',
    items: [
      'Jednostránkový web, mobil aj desktop',
      'Kontaktný alebo rezervačný formulár',
      'Napojenie na Google profil a mapu',
      'Základné SEO a rýchle načítanie',
      'Spustenie do 2 týždňov'
    ]
  },
  {
    name: 'Biznis',
    for: 'Pre firmy, ktoré chcú, aby web prinášal dopyty a šetril čas.',
    setup: '1 490 €',
    monthly: '59 €',
    featured: true,
    items: [
      'Viacstránkový web s úpravou obsahu',
      'AI asistent, ktorý odpovedá zákazníkom 24/7',
      'Online objednávanie alebo rezervácie',
      'Meranie návštevnosti a dopytov',
      '1 hodina úprav mesačne v cene'
    ]
  },
  {
    name: 'Rast',
    for: 'Pre firmy, ktoré chcú automatizovať procesy a prepojiť systémy.',
    setup: '3 490 €',
    monthly: '149 €',
    items: [
      'Web alebo aplikácia na mieru',
      'Integrácie (platby, CRM, sklad, kalendár)',
      'Automatizácia opakovanej práce',
      'Prioritná podpora a mesačný report',
      '3 hodiny vývoja mesačne v cene'
    ]
  }
]
</script>
