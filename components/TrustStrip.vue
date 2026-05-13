<template>
  <section
    aria-label="Princípy spolupráce"
    class="relative border-y border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite py-6 md:py-7"
  >
    <div class="container mx-auto px-6">
      <ul class="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-slate-400">
        <li v-for="item in items" :key="item.label" class="flex items-center gap-2.5">
          <span
            class="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <component :is="item.icon" class="w-4 h-4" />
          </span>
          <span>
            <span class="block font-semibold text-gray-900 dark:text-white text-[13px] leading-tight">{{ item.label }}</span>
            <span class="block text-[12px] leading-tight text-gray-500 dark:text-slate-500">{{ item.detail }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const ClockIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' })
  ])

const FlagIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 21V4m0 0c4 0 5 2 9 2s5-2 9-2v11c-4 0-5 2-9 2s-5-2-9-2' })
  ])

const ShieldIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
    })
  ])

const HandshakeIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M7.5 8.25h9l-.75 6h-7.5l-.75-6zM12 14.25v3M9 17.25h6M5.25 8.25l-1.5-3M18.75 8.25l1.5-3'
    })
  ])

const items = [
  { label: 'Odpoveď do 24 h', detail: 'cez pracovný týždeň', icon: ClockIcon },
  { label: 'Slovenská firma', detail: 'priama komunikácia', icon: FlagIcon },
  { label: 'Bez agentúrnej marže', detail: 'pracujem priamo pre vás', icon: HandshakeIcon },
  { label: 'GDPR-friendly', detail: 'bez tracking peklíka', icon: ShieldIcon }
]
</script>
