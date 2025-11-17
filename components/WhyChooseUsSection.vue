<template>
  <section id="why-us" class="relative py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 
          v-motion-fade-visible
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Prečo práve <span class="gradient-text">Appinara</span>?
        </h2>
        <p 
          v-motion-fade-visible
          :delay="200"
          class="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Moderné technológie, osobný prístup a zameranie na vaše výsledky
        </p>
      </div>
      
      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="benefit.title"
          v-motion-fade-visible
          :delay="index * 100"
          class="group relative"
        >
          <!-- Card -->
          <div class="relative glass-effect rounded-2xl p-10 h-full hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300">
            <!-- Icon -->
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-purple-600/20 border-2 border-primary-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="text-4xl">{{ benefit.icon }}</div>
            </div>
            
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
      <div class="mt-32 max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h3 
            v-motion-fade-visible
            class="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white text-gray-900"
          >
            Ako <span class="gradient-text">spolupracujeme</span>
          </h3>
          <p 
            v-motion-fade-visible
            :delay="200"
            class="text-lg text-gray-700 dark:text-slate-300"
          >
            Jednoduchý, transparentný proces od prvého kontaktu po spustenie
          </p>
        </div>
        
        <div class="space-y-6">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.title"
            v-motion-fade-visible
            :delay="index * 150"
            class="relative flex gap-6 items-start group"
          >
            <!-- Step Number -->
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
              {{ index + 1 }}
            </div>
            
            <!-- Step Content -->
            <div class="flex-1 glass-effect rounded-2xl p-8 group-hover:bg-gray-100/50 dark:group-hover:bg-white/10 transition-all duration-300">
              <h4 class="text-xl font-display font-bold mb-2 dark:text-white text-gray-900">{{ step.title }}</h4>
              <p class="dark:text-slate-300 text-gray-700 leading-relaxed">{{ step.description }}</p>
              <div class="mt-3 dark:text-primary-400 text-primary-600 text-sm font-semibold">{{ step.duration }}</div>
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
    icon: '🚀',
    title: 'Rýchla realizácia',
    description: 'Väčšinu projektov dodávame do 2-4 týždňov. Žiadne nekonečné čakanie, ale efektívny vývoj s pravidelnými update-mi.'
  },
  {
    icon: '💡',
    title: 'Moderné technológie',
    description: 'Využívame najnovšie overené technológie ako Vue.js, Nuxt, AI API a cloud riešenia pre maximálny výkon a škálovateľnosť.'
  },
  {
    icon: '🎯',
    title: 'Zamerané na výsledky',
    description: 'Nie len pekný dizajn, ale riešenia ktoré skutočně fungujú, prinášajú konverzie a zlepšujú vaše business metriky.'
  },
  {
    icon: '🤝',
    title: 'Osobný prístup',
    description: 'Nie ste len číslo v zozname. Komunikujeme priamo, rýchlo reagujeme a skutočne rozumieme vašim potrebám.'
  },
  {
    icon: '💰',
    title: 'Férové ceny',
    description: 'Transparentné ceny bez skrytých poplatkov. Platíte za hodnotu ktorú dostanete, nie za zbytočne naťahované projekty.'
  },
  {
    icon: '🛠️',
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

