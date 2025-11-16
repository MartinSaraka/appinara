<template>
  <!-- Skip to main content link for accessibility -->
  <a 
    href="#main-content" 
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
  >
    Preskočiť na hlavný obsah
  </a>
  
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-effect shadow-lg' : ''"
    role="navigation"
    aria-label="Hlavná navigácia"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a 
          href="/"
          v-motion-fade-visible
          class="text-2xl font-display font-bold cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-4 focus:ring-primary-400/50 rounded-lg"
          aria-label="Appinara - Domovská stránka"
        >
          <span class="gradient-text">Appi</span>
          <span class="text-white">nara</span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            class="text-slate-300 hover:text-white transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-400/50 rounded px-2 py-1"
            :aria-label="`Prejsť na sekciu: ${item.label}`"
          >
            {{ item.label }}
          </a>
          <a 
            href="/#contact"
            class="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Kontaktovať Appinara"
          >
            Kontaktuj nás
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary-400/50 rounded"
          :aria-label="mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'"
          :aria-expanded="mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 flex flex-col gap-4">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </a>
          <a 
            href="/#contact"
            @click="mobileMenuOpen = false"
            class="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-primary-500/30 text-center"
          >
            Kontaktuj nás
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Služby', href: '/#services' },
  { label: 'Prečo my', href: '/#why-us' },
  { label: 'Blog', href: '/blog' },
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
