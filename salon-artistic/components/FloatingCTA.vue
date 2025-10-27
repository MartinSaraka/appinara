<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <NuxtLink 
        to="/rezervacia"
        class="flex items-center space-x-3 px-8 py-4 bg-gradient-sunset text-white font-artistic font-bold text-lg rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      >
        <Icon name="ph:calendar-check-fill" class="text-2xl group-hover:rotate-12 transition-transform" />
        <span>Rezervovať termín</span>
        <Icon name="ph:arrow-right" class="text-xl group-hover:translate-x-1 transition-transform" />
      </NuxtLink>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  // Show after scrolling past hero section
  const heroHeight = window.innerHeight
  isVisible.value = window.scrollY > heroHeight && window.scrollY < (document.documentElement.scrollHeight - window.innerHeight - 500)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>

