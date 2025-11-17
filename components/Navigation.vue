<template>
  <!-- Skip to main content link for accessibility -->
  <a 
    href="#main-content" 
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
  >
    Preskočiť na hlavný obsah
  </a>
  
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 dark:bg-transparent bg-white/80 backdrop-blur-md"
    :class="scrolled ? 'glass-effect shadow-lg' : 'border-b dark:border-transparent border-gray-200'"
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
          <span class="dark:text-white text-gray-900">nara</span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            class="dark:text-slate-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-400/50 rounded px-2 py-1"
            :aria-label="`Prejsť na sekciu: ${item.label}`"
          >
            {{ item.label }}
          </a>
          
          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full glass-effect hover:bg-primary-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
            :aria-label="isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'"
          >
            <!-- Moon Icon for Dark Mode -->
            <svg 
              v-if="isDark" 
              class="w-6 h-6 text-yellow-300"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
            <!-- Sun Icon for Light Mode -->
            <svg 
              v-else
              class="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"/>
              <path d="M12,7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V6A1,1,0,0,0,12,7Z"/>
              <path d="M12,23a1,1,0,0,0,1-1V19a1,1,0,0,0-2,0v3A1,1,0,0,0,12,23Z"/>
              <path d="M21,13H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z"/>
              <path d="M6,13H3a1,1,0,0,0,0,2H6a1,1,0,0,0,0-2Z"/>
              <path d="M16.66,7.34a1,1,0,0,0,1.41,0l2.12-2.12a1,1,0,0,0-1.41-1.41L16.66,5.93A1,1,0,0,0,16.66,7.34Z"/>
              <path d="M5.93,18.07a1,1,0,0,0,0,1.41l2.12,2.12a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L7.34,18.07A1,1,0,0,0,5.93,18.07Z"/>
              <path d="M18.07,18.07l-2.12,2.12a1,1,0,0,0,1.41,1.41l2.12-2.12a1,1,0,0,0-1.41-1.41Z"/>
              <path d="M7.34,5.93,5.22,3.81A1,1,0,0,0,3.81,5.22L5.93,7.34A1,1,0,0,0,7.34,5.93Z"/>
            </svg>
          </button>
          
          <a 
            href="/#contact"
            class="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400/50 focus:ring-offset-2 dark:focus:ring-offset-slate-950 focus:ring-offset-white"
            aria-label="Kontaktovať Appinara"
          >
            Kontaktuj nás
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-4">
          <!-- Theme Toggle for Mobile -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full glass-effect hover:bg-primary-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
            :aria-label="isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'"
          >
            <svg 
              v-if="isDark" 
              class="w-5 h-5 text-yellow-300"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
            <svg 
              v-else
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"/>
              <path d="M12,7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V6A1,1,0,0,0,12,7Z"/>
              <path d="M12,23a1,1,0,0,0,1-1V19a1,1,0,0,0-2,0v3A1,1,0,0,0,12,23Z"/>
              <path d="M21,13H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z"/>
              <path d="M6,13H3a1,1,0,0,0,0,2H6a1,1,0,0,0,0-2Z"/>
              <path d="M16.66,7.34a1,1,0,0,0,1.41,0l2.12-2.12a1,1,0,0,0-1.41-1.41L16.66,5.93A1,1,0,0,0,16.66,7.34Z"/>
              <path d="M5.93,18.07a1,1,0,0,0,0,1.41l2.12,2.12a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L7.34,18.07A1,1,0,0,0,5.93,18.07Z"/>
              <path d="M18.07,18.07l-2.12,2.12a1,1,0,0,0,1.41,1.41l2.12-2.12a1,1,0,0,0-1.41-1.41Z"/>
              <path d="M7.34,5.93,5.22,3.81A1,1,0,0,0,3.81,5.22L5.93,7.34A1,1,0,0,0,7.34,5.93Z"/>
            </svg>
          </button>
          
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="dark:text-white text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-primary-400/50 rounded"
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
            class="dark:text-slate-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium"
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

// Theme management
const { toggleTheme, isDark } = useTheme()

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
