<template>
  <section id="why-us" class="relative py-20 md:py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <p v-motion-reveal class="eyebrow mb-4">04 · Prečo my</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Prečo práve <span class="accent-text">Appinara</span>?
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Moderné technológie, osobný prístup a zameranie na vaše výsledky
        </p>
      </div>
      
      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          v-motion-reveal-scale
          :delay="(index % 3) * 100"
          class="group relative"
        >
          <!-- Card -->
          <div class="relative surface rounded-2xl p-7 md:p-10 h-full hover:border-primary-500/40 dark:hover:border-primary-400/40">
            <BenefitMark :type="benefit.icon" class="mb-7 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" />
            <!-- Content -->
            <h3 class="text-2xl font-display font-bold mb-4 dark:text-white text-gray-900">
              {{ benefit.title }}
            </h3>
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Process Timeline -->
      <div class="mt-20 md:mt-32 max-w-5xl mx-auto">
        <div class="text-center mb-10 md:mb-16">
          <h3
            v-motion-reveal
            class="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white text-gray-900"
          >
            Ako <span class="accent-text">spolupracujeme</span>
          </h3>
          <p
            v-motion-reveal
            :delay="120"
            class="text-lg text-gray-700 dark:text-slate-300"
          >
            Jednoduchý, transparentný proces od prvého kontaktu po spustenie
          </p>
        </div>
        
        <div class="relative">
          <!-- Timeline track: fills with a gradient as you scroll through -->
          <div class="absolute left-7 top-7 bottom-7 w-px bg-gray-200 dark:bg-slate-800" aria-hidden="true">
            <div class="timeline-fill absolute inset-0 origin-top bg-gradient-to-b from-primary-500 to-violet-500"></div>
          </div>

          <div class="space-y-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.title"
              v-motion-reveal-left
              :delay="index * 90"
              class="relative flex gap-6 items-start group"
            >
              <!-- Step node -->
              <div
                class="relative z-10 flex-shrink-0 w-14 h-14 rounded-full surface !border-2 flex items-center justify-center font-display font-bold text-lg text-primary-600 dark:text-primary-400 tabular-nums transition-all duration-300 group-hover:scale-110 group-hover:border-primary-500 dark:group-hover:border-primary-400 group-hover:shadow-lg group-hover:shadow-primary-500/20"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <!-- Step Content -->
              <div class="flex-1 surface rounded-2xl p-6 md:p-8 group-hover:border-primary-500/40 dark:group-hover:border-primary-400/40 transition-colors">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 class="text-xl font-display font-bold dark:text-white text-gray-900">{{ step.title }}</h4>
                  <span class="text-sm font-semibold dark:text-primary-400 text-primary-600 whitespace-nowrap">{{ step.duration }}</span>
                </div>
                <p class="mt-2 dark:text-slate-300 text-gray-700 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: 'speed',
    title: 'Rýchla realizácia',
    description: 'Väčšinu projektov dodávame do 2-4 týždňov. Žiadne nekonečné čakanie, ale efektívny vývoj s pravidelnými update-mi.'
  },
  {
    icon: 'tech',
    title: 'Moderné technológie',
    description: 'Využívame najnovšie overené technológie ako Vue.js, Nuxt, AI API a cloud riešenia pre maximálny výkon a škálovateľnosť.'
  },
  {
    icon: 'target',
    title: 'Zamerané na výsledky',
    description: 'Nie len pekný dizajn, ale riešenia ktoré skutočne fungujú, prinášajú konverzie a zlepšujú vaše business metriky.'
  },
  {
    icon: 'human',
    title: 'Osobný prístup',
    description: 'Nie ste len číslo v zozname. Komunikujeme priamo, rýchlo reagujeme a skutočne rozumieme vašim potrebám.'
  },
  {
    icon: 'price',
    title: 'Férové ceny',
    description: 'Transparentné ceny bez skrytých poplatkov. Platíte za hodnotu ktorú dostanete, nie za zbytočne naťahované projekty.'
  },
  {
    icon: 'support',
    title: 'Podpora po spustení',
    description: 'Neopustíme vás po odovzdaní. Poskytujeme technickú podporu, školenia a pomôžeme s ďalším rozvojom.'
  }
]

const processSteps = [
  {
    title: 'Nezáväzná konzultácia',
    description: 'Napíšete nám o vašom projekte, dohodneme si stretnutie (online/osobne) a prediskutujeme vaše potreby a ciele. Konzultácia je zdarma.',
    duration: '1 deň'
  },
  {
    title: 'Návrh riešenia a cenovka',
    description: 'Pripravíme pre vás návrh riešenia, technické špecifikácie a transparentnú cenovú ponuku. Všetko vysvetlíme zrozumiteľne.',
    duration: '2-3 dni'
  },
  {
    title: 'Vývoj s pravidelnými update-mi',
    description: 'Po schválení ponuky začneme s vývojom. Budete pravidelne dostávať update-y a môžete vidieť priebeh projektu v reálnom čase.',
    duration: '2-4 týždne'
  },
  {
    title: 'Testovanie a odovzdanie',
    description: 'Pred spustením všetko dôkladne otestujeme. Zaškolíme vás v používaní systému a pomôžeme so spustením projektu.',
    duration: '3-5 dní'
  },
  {
    title: 'Podpora a ďalší rozvoj',
    description: 'Poskytujeme technickú podporu, riešime prípadné problémy a sme tu pre vás keď budete chcieť projekt ďalej rozvíjať.',
    duration: 'Dlhodobo'
  }
]
</script>

