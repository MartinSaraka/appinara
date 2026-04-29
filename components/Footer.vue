<template>
  <footer class="relative border-t" style="border-color: var(--color-rule); background: var(--color-bg-subtle);">
    <!-- Big editorial wordmark band -->
    <div class="border-b" style="border-color: var(--color-rule);">
      <div class="container mx-auto px-6 py-12 md:py-16">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <a href="/" class="font-display text-[18vw] md:text-[14vw] leading-[0.85] font-medium tracking-tighter inline-flex items-baseline" style="color: var(--color-fg);">
            <span>Appinara</span>
            <span class="font-display italic" style="color: var(--color-accent);">.</span>
          </a>
          <p class="folio max-w-xs text-right" style="color: var(--color-fg-muted);">
            Freelance studio · est. 2024 · Slovensko
          </p>
        </div>
      </div>
    </div>

    <!-- Sitemap columns -->
    <div class="container mx-auto px-6 py-12 md:py-16">
      <div class="grid md:grid-cols-12 gap-10 mb-12">
        <div class="md:col-span-5">
          <p class="folio mb-4">Kto / čo</p>
          <p class="text-[15px] md:text-base leading-relaxed text-pretty mb-6 max-w-md" style="color: var(--color-fg-muted);">
            Freelance studio Martina Saraku. AI integrácie, weby a interné nástroje pre menšie a stredné firmy na Slovensku.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 inline-flex items-center justify-center border transition-colors"
              style="border-color: var(--color-fg); color: var(--color-fg);"
              :aria-label="`Navštíviť ${social.name} profil Appinara`"
            >
              <component :is="social.icon" class="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div class="md:col-span-3">
          <p class="folio mb-4">Stránka</p>
          <ul class="space-y-2.5">
            <li v-for="link in pageLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="font-display text-lg hover:underline underline-offset-4"
                style="color: var(--color-fg); text-decoration-color: var(--color-accent);"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <p class="folio mb-4">Kontakt</p>
          <ul class="space-y-2 text-[15px]">
            <li>
              <a href="mailto:appinarasolutions@gmail.com" class="font-display text-lg hover:underline underline-offset-4" style="color: var(--color-fg); text-decoration-color: var(--color-accent);">
                appinarasolutions@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+421917566722" class="font-display text-lg hover:underline underline-offset-4" style="color: var(--color-fg); text-decoration-color: var(--color-accent);">
                +421 917 566 722
              </a>
            </li>
            <li class="font-mono text-[11px] uppercase mt-3" style="letter-spacing:0.16em; color: var(--color-fg-meta);">
              Slovensko · vzdialene + Bratislava
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-[11px] uppercase" style="border-color: var(--color-rule); letter-spacing:0.16em; color: var(--color-fg-meta);">
        <p>© {{ currentYear }} Appinara · Martin Saraka</p>
        <div class="flex gap-6">
          <NuxtLink to="/ochrana-udajov" class="hover:underline underline-offset-4" style="text-decoration-color: var(--color-accent);">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="hover:underline underline-offset-4" style="text-decoration-color: var(--color-accent);">
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

const pageLinks = [
  { label: 'Služby', href: '/#services' },
  { label: 'Riešenia', href: '/riesenia' },
  { label: 'Balíčky', href: '/balicky' },
  { label: 'AI audit', href: '/ai-audit' },
  { label: 'Blog', href: '/blog' },
  { label: 'O mne', href: '/o-mne' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>
