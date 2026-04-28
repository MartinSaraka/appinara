<template>
  <footer class="relative dark:bg-slate-900 bg-gray-50 border-t dark:border-slate-800 border-gray-200">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="mb-4">
            <AppinaraLogo size="lg" />
          </div>
          <p class="dark:text-slate-300 text-gray-700 mb-2 max-w-md text-sm leading-relaxed">
            <span class="font-semibold dark:text-white text-gray-900">Martin Saraka</span> — freelance developer zo Slovenska.
          </p>
          <p class="dark:text-slate-400 text-gray-600 mb-5 max-w-md text-sm leading-relaxed">
            Žiadne agentúrne marže, žiadny manažér medzi nami. Píšete priamo.
          </p>
          <div class="flex flex-col gap-1.5 mb-5 text-sm">
            <a href="mailto:appinarasolutions@gmail.com" class="dark:text-slate-300 text-gray-700 dark:hover:text-primary-400 hover:text-primary-600 transition-colors">
              appinarasolutions@gmail.com
            </a>
            <a href="tel:+421917566722" class="dark:text-slate-300 text-gray-700 dark:hover:text-primary-400 hover:text-primary-600 transition-colors">
              +421 917 566 722
            </a>
          </div>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
              :aria-label="`Navštíviť ${social.name} profil Appinara`"
            >
              <component :is="social.icon" class="w-5 h-5 dark:text-slate-300 text-gray-600" aria-hidden="true" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="dark:text-white text-gray-900 font-semibold mb-4">Rýchle odkazy</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a 
                :href="link.href"
                class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 hover:text-primary-600 transition-colors focus:outline-none dark:focus:text-primary-400 focus:text-primary-600 focus:underline"
                :aria-label="`Prejsť na: ${link.label}`"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="dark:text-white text-gray-900 font-semibold mb-4">Služby</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="dark:text-slate-400 text-gray-600">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="pt-8 border-t dark:border-slate-800 border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="dark:text-slate-500 text-gray-500 text-sm">
          © {{ currentYear }} Martin Saraka — Appinara · Slovensko
        </p>
        <div class="flex gap-6 text-sm">
          <NuxtLink to="/ochrana-udajov" class="dark:text-slate-500 text-gray-500 dark:hover:text-primary-400 hover:text-primary-600 transition-colors focus:outline-none dark:focus:text-primary-400 focus:text-primary-600 focus:underline">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="dark:text-slate-500 text-gray-500 dark:hover:text-primary-400 hover:text-primary-600 transition-colors focus:outline-none dark:focus:text-primary-400 focus:text-primary-600 focus:underline">
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
  { label: 'Príklady', href: '/#portfolio' },
  { label: 'Postup', href: '/#spolupraca' },
  { label: 'O mne', href: '/o-mne' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'AI audit', href: '/ai-audit' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/#contact' }
]

const services = [
  'AI Integrácie & Chatboty',
  'Webové stránky & Aplikácie',
  'E-commerce & Online predaj',
  'Business nástroje & Dashboardy'
]

const currentYear = computed(() => new Date().getFullYear())
</script>
