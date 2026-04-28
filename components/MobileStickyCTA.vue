<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="visible"
      class="md:hidden fixed left-0 right-0 z-40 px-4 pointer-events-none"
      :style="{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }"
      role="region"
      aria-label="Rýchle akcie"
    >
      <div
        class="pointer-events-auto rounded-2xl border border-gray-200/90 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-gray-900/10 dark:shadow-black/40 p-2 flex gap-2"
      >
        <NuxtLink
          to="/ai-audit"
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-sm border border-primary-500/40 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          AI audit
        </NuxtLink>
        <a
          :href="contactHref"
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-primary-600 shadow-md shadow-primary-600/20 hover:bg-primary-700 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Napísať
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const route = useRoute()
const visible = ref(false)
let raf = 0

const contactHref = computed(() => (route.path === '/' ? '#contact' : '/#contact'))

function update() {
  if (typeof window === 'undefined') return
  visible.value = window.scrollY > 600
}

function onScroll() {
  if (raf) return
  raf = window.requestAnimationFrame(() => {
    raf = 0
    update()
  })
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) {
    window.cancelAnimationFrame(raf)
    raf = 0
  }
})
</script>
