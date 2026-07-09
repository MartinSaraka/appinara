<template>
  <div class="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none" aria-hidden="true">
    <div
      class="h-full origin-left bg-gradient-to-r from-primary-500 to-violet-500"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
let ticking = false

const update = () => {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
  ticking = false
}

const onScroll = () => {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>
