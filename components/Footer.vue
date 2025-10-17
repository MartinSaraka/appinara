<template>
  <footer class="relative bg-slate-900 border-t border-slate-800">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="text-2xl font-display font-bold mb-4">
            <span class="gradient-text">Appi</span>
            <span class="text-white">nara</span>
          </div>
          <p class="text-slate-400 mb-4 max-w-md">
            Pomáhame firmám rásť pomocou AI integráciií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.
          </p>
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-all duration-300"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5 text-slate-300" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Rýchle odkazy</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a 
                :href="link.href"
                class="text-slate-400 hover:text-primary-400 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold mb-4">Služby</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-slate-400">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          © {{ currentYear }} Appinara. Všetky práva vyhradené.
        </p>
        <div class="flex gap-6 text-sm">
          <NuxtLink to="/ochrana-udajov" class="text-slate-500 hover:text-primary-400 transition-colors">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="text-slate-500 hover:text-primary-400 transition-colors">
            Obchodné podmienky
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h, computed } from 'vue'

const LinkedInIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/appinara/', icon: LinkedInIcon }
]

const quickLinks = [
  { label: 'Služby', href: '#services' },
  { label: 'Ukážky prác', href: '#portfolio' },
  { label: 'Kontakt', href: '#contact' }
]

const services = [
  'AI Integrácie',
  'Webové aplikácie',
  'E-shopy',
  'Firemné systémy'
]

const currentYear = computed(() => new Date().getFullYear())
</script>
