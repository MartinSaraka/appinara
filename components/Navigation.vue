<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-vermilion-500 focus:text-white focus:font-mono focus:uppercase focus:text-xs focus:tracking-widest"
  >
    Preskočiť na hlavný obsah
  </a>

  <!-- Top ticker bar — issue / date / status -->
  <div
    class="hidden md:block border-b"
    style="border-color: var(--color-rule); background: var(--color-bg-subtle);"
  >
    <div class="container mx-auto px-6 flex items-center justify-between py-2 font-mono text-[10px] uppercase" style="letter-spacing:0.18em; color: var(--color-fg-muted);">
      <div class="flex items-center gap-5">
        <span class="inline-flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full" style="background: var(--color-accent); box-shadow: 0 0 0 3px var(--color-accent-tint);"></span>
          Otvorené pre nové projekty · {{ currentMonth }}
        </span>
      </div>
      <div class="flex items-center gap-5">
        <span>Issue №{{ issue }}</span>
        <span class="hidden lg:inline">/ Bratislava · SK</span>
        <span>{{ today }}</span>
      </div>
    </div>
  </div>

  <nav
    class="sticky top-0 left-0 right-0 z-50 transition-all"
    :class="scrolled ? 'shadow-sm' : ''"
    :style="{
      background: scrolled ? 'color-mix(in oklab, var(--color-bg) 92%, transparent)' : 'var(--color-bg)',
      borderBottom: '1px solid var(--color-rule)',
      backdropFilter: scrolled ? 'blur(8px) saturate(120%)' : 'none'
    }"
    role="navigation"
    aria-label="Hlavná navigácia"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between py-4">
        <!-- Wordmark -->
        <a
          href="/"
          class="group inline-flex items-baseline gap-1 focus:outline-none"
          aria-label="Appinara — Domov"
        >
          <span class="font-display text-2xl md:text-[26px] leading-none font-medium tracking-tight" style="color: var(--color-fg);">
            Appinara
          </span>
          <span class="font-display italic text-2xl md:text-[26px] leading-none -ml-0.5" style="color: var(--color-accent);">.</span>
          <span class="hidden lg:inline-block ml-3 pl-3 border-l font-mono text-[10px] uppercase" style="border-color: var(--color-rule-soft); letter-spacing: 0.18em; color: var(--color-fg-meta);">
            Freelance studio · est. 2024
          </span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="(item, idx) in navItems"
            :key="item.href"
            :href="item.href"
            class="group relative px-3 py-2 font-mono text-[11px] uppercase transition-colors focus:outline-none"
            style="letter-spacing: 0.16em; color: var(--color-fg);"
          >
            <span class="opacity-50 mr-1.5">{{ String(idx + 1).padStart(2, '0') }}</span>
            {{ item.label }}
            <span class="absolute left-3 right-3 bottom-1 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style="background: var(--color-accent);"></span>
          </a>

          <button
            @click="toggleTheme"
            class="ml-2 w-9 h-9 inline-flex items-center justify-center border focus:outline-none transition-colors"
            :style="{
              borderColor: 'var(--color-rule)',
              color: 'var(--color-fg)'
            }"
            :aria-label="isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'"
          >
            <svg v-if="isDark" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"/>
              <path d="M12,7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V6A1,1,0,0,0,12,7Zm0,16a1,1,0,0,0,1-1V19a1,1,0,0,0-2,0v3A1,1,0,0,0,12,23ZM21,13H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM6,13H3a1,1,0,0,0,0,2H6a1,1,0,0,0,0-2Zm10.66-5.66a1,1,0,0,0,1.41,0l2.12-2.12a1,1,0,0,0-1.41-1.41L16.66,5.93A1,1,0,0,0,16.66,7.34ZM5.93,18.07a1,1,0,0,0,0,1.41l2.12,2.12a1,1,0,0,0,1.41-1.41L7.34,18.07A1,1,0,0,0,5.93,18.07Zm12.14,0-2.12,2.12a1,1,0,0,0,1.41,1.41l2.12-2.12a1,1,0,0,0-1.41-1.41ZM7.34,5.93,5.22,3.81A1,1,0,0,0,3.81,5.22L5.93,7.34A1,1,0,0,0,7.34,5.93Z"/>
            </svg>
          </button>

          <NuxtLink
            to="/balicky"
            class="ml-2 inline-flex items-center gap-2 px-4 py-2.5 font-mono text-[11px] uppercase transition-all"
            style="letter-spacing:0.16em; background: var(--color-fg); color: var(--color-bg); border: 1px solid var(--color-fg);"
            aria-label="Pozrieť balíčky a cenník"
          >
            <span>Balíčky</span>
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <!-- Mobile actions -->
        <div class="md:hidden flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="w-9 h-9 inline-flex items-center justify-center border"
            :style="{ borderColor: 'var(--color-rule)', color: 'var(--color-fg)' }"
            :aria-label="isDark ? 'Svetlý režim' : 'Tmavý režim'"
          >
            <svg v-if="isDark" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/></svg>
            <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"/><path d="M12,7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V6A1,1,0,0,0,12,7Zm0,16a1,1,0,0,0,1-1V19a1,1,0,0,0-2,0v3A1,1,0,0,0,12,23ZM21,13H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM6,13H3a1,1,0,0,0,0,2H6a1,1,0,0,0,0-2Z"/></svg>
          </button>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="w-9 h-9 inline-flex items-center justify-center border"
            :style="{ borderColor: 'var(--color-rule)', color: 'var(--color-fg)' }"
            :aria-label="mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'"
            :aria-expanded="mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 17h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-6 border-t" :style="{ borderColor: 'var(--color-rule-faint)' }">
          <a
            v-for="(item, idx) in navItems"
            :key="item.href"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="flex items-center justify-between py-4 border-b font-mono uppercase text-sm"
            :style="{ borderColor: 'var(--color-rule-faint)', color: 'var(--color-fg)', letterSpacing: '0.14em' }"
          >
            <span>
              <span class="opacity-50 mr-3">{{ String(idx + 1).padStart(2, '0') }}</span>
              {{ item.label }}
            </span>
            <span aria-hidden="true">→</span>
          </a>
          <NuxtLink
            to="/balicky"
            @click="mobileMenuOpen = false"
            class="mt-5 block w-full text-center px-4 py-3.5 font-mono uppercase text-xs"
            :style="{ background: 'var(--color-fg)', color: 'var(--color-bg)', letterSpacing: '0.16em' }"
          >
            Pozrieť balíčky →
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const { toggleTheme, isDark } = useTheme()

const navItems = [
  { label: 'Služby',   href: '/#services' },
  { label: 'Riešenia', href: '/riesenia' },
  { label: 'Balíčky',  href: '/balicky' },
  { label: 'Blog',     href: '/blog' },
  { label: 'O mne',    href: '/o-mne' },
]

const monthsSk = ['Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December']
const now = new Date()
const currentMonth = computed(() => `${monthsSk[now.getMonth()]} ${now.getFullYear()}`)
const today = computed(() => {
  const d = String(now.getDate()).padStart(2,'0')
  const m = String(now.getMonth()+1).padStart(2,'0')
  return `${d}.${m}.${now.getFullYear()}`
})
const issue = computed(() => {
  const start = new Date(2024, 0, 1)
  const weeks = Math.floor((+now - +start) / (7*24*60*60*1000))
  return String(weeks).padStart(3, '0')
})

const handleScroll = () => { scrolled.value = window.scrollY > 32 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
