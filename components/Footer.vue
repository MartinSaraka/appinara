<template>
  <footer class="relative bg-bone dark:bg-anthracite border-t border-mist dark:border-anthracite-mist">
    <div class="container mx-auto px-6 max-w-6xl py-16 md:py-20">
      <div class="grid md:grid-cols-12 gap-10 md:gap-12 mb-16">

        <div class="md:col-span-7">
          <p class="eyebrow mb-5">
            Sign-off
          </p>
          <h3 class="font-display font-normal text-display-md text-ink-900 dark:text-bone-100 leading-[1.02] text-balance">
            Pekný deň. Ďakujem, že
            <em class="italic font-normal">ste sa zastavili.</em>
          </h3>
          <p class="mt-6 text-ink-700 dark:text-bone-100/80 max-w-md leading-relaxed">
            <span class="text-ink-900 dark:text-bone-100 font-medium">Martin Saraka</span> — freelance developer zo Slovenska. Žiadne agentúrne marže, žiadny manažér medzi nami. Píšete priamo.
          </p>
        </div>

        <div class="md:col-span-2">
          <p class="font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300 mb-4">
            Kontakt
          </p>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:appinarasolutions@gmail.com" class="text-ink-900 dark:text-bone-100 hover:underline underline-offset-4 decoration-ink-300 dark:decoration-ink-500 decoration-1 transition-colors">
                Email
              </a>
            </li>
            <li>
              <a href="tel:+421917566722" class="text-ink-900 dark:text-bone-100 hover:underline underline-offset-4 decoration-ink-300 dark:decoration-ink-500 decoration-1 transition-colors">
                Telefón
              </a>
            </li>
            <li>
              <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer" class="text-ink-900 dark:text-bone-100 hover:underline underline-offset-4 decoration-ink-300 dark:decoration-ink-500 decoration-1 transition-colors">
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <p class="font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300 mb-4">
            Index
          </p>
          <ul class="space-y-2 text-sm">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-ink-900 dark:text-bone-100 hover:underline underline-offset-4 decoration-ink-300 dark:decoration-ink-500 decoration-1 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-mist dark:border-anthracite-mist flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300">
        <p>
          © {{ currentYear }} Martin Saraka · Appinara · SK
        </p>
        <div class="flex gap-6">
          <NuxtLink to="/ochrana-udajov" class="hover:text-ink-900 dark:hover:text-bone-100">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="hover:text-ink-900 dark:hover:text-bone-100">
            Obchodné podmienky
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/appinara/' }
]

const quickLinks = [
  { label: 'Služby', href: '#services' },
  { label: 'Vybrané projekty', href: '#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '#contact' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>
