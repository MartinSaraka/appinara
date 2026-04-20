<template>
  <section id="riesenia" class="relative py-24 md:py-32 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 bg-gradient-to-b from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2
          v-motion-fade-visible
          class="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white text-gray-900"
        >
          Čo pre vás viem <span class="gradient-text">vyriešiť</span>
        </h2>
        <p
          v-motion-fade-visible
          :delay="200"
          class="text-lg text-gray-700 dark:text-slate-400"
        >
          Tri oblasti, kde má AI a automatizácia najrýchlejší dopad na váš čas a dopyty.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <article
          v-for="(card, index) in cards"
          :key="card.title"
          v-motion-fade-visible
          :delay="index * 100"
          class="group relative flex flex-col h-full"
        >
          <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
          <div class="relative glass-effect rounded-2xl p-8 h-full flex flex-col card-hover hover:bg-gray-50 dark:hover:bg-white/5">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <component :is="card.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-display font-bold mb-3 dark:text-white text-gray-900">
              {{ card.title }}
            </h3>
            <p class="dark:text-slate-300 text-gray-700 mb-6 leading-relaxed flex-1">
              {{ card.text }}
            </p>
            <div class="flex flex-col gap-2 mt-auto">
              <NuxtLink
                :to="card.moreHref"
                class="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline text-center sm:text-left"
                @click="trackCard('zistit-viac', card.id)"
              >
                Zistiť viac
              </NuxtLink>
              <NuxtLink
                :to="card.ctaHref"
                class="btn-primary text-center text-sm py-3 px-4"
                @click="trackCard('chcem-riesenie', card.id)"
              >
                Chcem toto riešenie
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { trackEvent } = useAnalytics()

function trackCard(action: string, cardId: string) {
  trackEvent('solution_card_clicked', { action, cardId })
}

const BoltIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
  ])

const ChatIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    })
  ])

const LayersIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M4 7l8-4 8 4M4 7v10l8 4 8-4V7M4 7l8 4 8-4M12 21V11'
    })
  ])

const cards = [
  {
    id: 'lead-followup',
    title: 'AI lead follow-up',
    text: 'Automatizované spracovanie nových dopytov, kvalifikácia leadov a rýchlejšie reakcie na potenciálnych klientov.',
    icon: BoltIcon,
    moreHref: '/riesenia#lead-followup',
    ctaHref: '/ai-audit'
  },
  {
    id: 'chatbot',
    title: 'AI chatbot a zákaznícka komunikácia',
    text: 'Chatboty a asistenčné riešenia pre web, FAQ, predkvalifikáciu zákazníkov a zefektívnenie komunikácie.',
    icon: ChatIcon,
    moreHref: '/riesenia#chatbot',
    ctaHref: '/ai-audit'
  },
  {
    id: 'web-apps',
    title: 'Weby, aplikácie a interné nástroje',
    text: 'Vlastné riešenia od prezentačných webov až po interné dashboardy, e-commerce a business systémy.',
    icon: LayersIcon,
    moreHref: '/riesenia#web-a-interne',
    ctaHref: '/ai-audit'
  }
]
</script>
