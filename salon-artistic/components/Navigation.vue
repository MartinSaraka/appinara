<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass-light shadow-xl py-4' : 'bg-white/90 backdrop-blur-sm py-6']">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between">
        <!-- Logo - Cleaner -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Icon name="ph:scissors-fill" class="text-2xl text-white" />
          </div>
          <div class="hidden sm:flex flex-col">
            <span class="text-2xl font-artistic font-bold text-gray-800">
              ArtHair
            </span>
            <span class="text-xs font-modern text-art-coral -mt-1">Kaderníctvo</span>
          </div>
        </NuxtLink>

        <!-- Desktop Menu - Better UX -->
        <div class="hidden lg:flex items-center space-x-6">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-base font-modern font-medium text-gray-700 hover:text-art-coral transition-all duration-300 rounded-lg hover:bg-cream-50"
          >
            {{ item.label }}
          </NuxtLink>
          
          <!-- Prominent CTA -->
          <NuxtLink 
            to="/rezervacia" 
            class="flex items-center space-x-2 px-6 py-3 bg-gradient-sunset text-white font-artistic font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Icon name="ph:calendar-check" class="text-lg" />
            <span>Rezervovať</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button - Better UX -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-cream-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'ph:x' : 'ph:list'" class="text-2xl text-gray-800" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden glass-light border-t border-gray-200">
        <div class="container mx-auto px-4 py-6 space-y-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block text-lg font-modern font-medium text-gray-700 hover:text-art-coral hover:translate-x-2 transition-all duration-300"
          >
            {{ item.label }}
          </NuxtLink>
          
          <NuxtLink to="/rezervacia" @click="mobileMenuOpen = false" class="block">
            <button class="w-full btn-artistic">
              <span>Rezervovať</span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Domov', path: '/' },
  { label: 'Služby', path: '/#sluzby' },
  { label: 'Galéria', path: '/#galeria' },
  { label: 'Kontakt', path: '/#kontakt' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
