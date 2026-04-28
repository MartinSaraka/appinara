<template>
  <section
    id="services"
    class="relative section-spacing border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        <h2
          v-motion-fade-visible
          class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white"
        >
          Čo pre vás <span class="gradient-text">pripravím</span>
        </h2>
        <p
          v-motion-fade-visible
          :delay="120"
          class="text-lg text-gray-600 dark:text-slate-400 leading-relaxed"
        >
          Štyri oblasti, ktoré najčastejšie riešime od návrhu po nasadenie.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          v-motion-fade-visible
          :delay="index * 80"
          class="flex flex-col h-full rounded-2xl border border-gray-200/90 dark:border-slate-700/80 bg-gray-50/80 dark:bg-slate-900/40 p-8 card-hover hover:border-primary-300/60 dark:hover:border-primary-600/40"
        >
          <div
            class="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
          >
            <component :is="service.icon" class="w-6 h-6 text-white" />
          </div>

          <p
            v-if="index === 0"
            class="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2"
          >
            Častý štart
          </p>
          <h3 class="text-xl font-display font-bold mb-3 text-gray-900 dark:text-white">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed flex-grow">
            {{ service.description }}
          </p>

          <ul class="space-y-2.5 mt-auto">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400"
            >
              <svg
                class="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </article>
      </div>

      <p
        v-motion-fade-visible
        class="text-center mt-12 text-gray-600 dark:text-slate-400 text-sm md:text-base"
      >
        Neviete, kde začať?
        <NuxtLink
          to="/ai-audit"
          class="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline-offset-2 hover:underline"
        >
          Krátky AI audit
        </NuxtLink>
        zarovná smer ešte pred vývojom.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const SparklesIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    })
  ])

const CodeIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    })
  ])

const ShoppingIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    })
  ])

const DatabaseIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    })
  ])

const services = [
  {
    title: 'AI a automatizácia',
    description:
      'Chatboty, follow-up a úlohy, ktoré by inak padali na ľudí alebo do schránky.',
    icon: SparklesIcon,
    features: ['AI chatbot a prvý kontakt so zákazníkom', 'Automatizácia emailov a notifikácií', 'Napojenie na váš existujúci stack']
  },
  {
    title: 'Weby a aplikácie',
    description:
      'Rýchle weby a interné nástroje, ktoré zvládnu dopyty aj každodennú prevádzku.',
    icon: CodeIcon,
    features: ['Responzívny dizajn', 'SEO a výkon', 'Bezpečnosť a údržba']
  },
  {
    title: 'E‑commerce',
    description:
      'Predaj online s platbami a prevádzkovými procesmi pod kontrolou.',
    icon: ShoppingIcon,
    features: ['Objednávky a platby', 'Sklad a prepojenia', 'Úpravy podľa rastu']
  },
  {
    title: 'Firemné nástroje',
    description:
      'CRM, prehľady a dashboardy namiesto tabuliek roztrúsených po tíme.',
    icon: DatabaseIcon,
    features: ['Prehľad leadov a úloh', 'Reporty na mieru', 'Integrácie s nástrojmi, ktoré už používate']
  }
]
</script>
