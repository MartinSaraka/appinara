<template>
  <div class="fixed top-0 left-0 right-0 z-[60] h-1 bg-cream-100">
    <div 
      class="h-full bg-gradient-sunset transition-all duration-300"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const progress = (scrollTop / (documentHeight - windowHeight)) * 100
  scrollProgress.value = Math.min(100, Math.max(0, progress))
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

