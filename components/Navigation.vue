<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-500 focus:text-bone-50 focus:rounded-xl focus:shadow-letterpress"
  >
    Preskočiť na hlavný obsah
  </a>

  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b"
    :class="
      scrolled
        ? 'bg-bone-50/95 dark:bg-anthracite/95 backdrop-blur-md border-mist dark:border-anthracite-mist'
        : 'bg-bone/85 dark:bg-anthracite/85 backdrop-blur-sm border-transparent'
    "
    role="navigation"
    aria-label="Hlavná navigácia"
  >
    <div class="container mx-auto px-6 py-3.5 md:py-4">
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 rounded-md px-1 -mx-1"
          aria-label="Appinara — Domovská stránka"
        >
          <AppinaraLogo size="md" />
        </a>

        <div class="hidden md:flex items-center gap-7 lg:gap-9">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link"
            :aria-label="`Prejsť na: ${item.label}`"
          >
            <span class="nav-link-text">{{ item.label }}</span>
          </a>

          <span class="local-chip" aria-hidden="true">
            <span class="local-dot" />
            <span class="local-label">BA · {{ localTime }}</span>
          </span>

          <button
            type="button"
            class="theme-toggle group"
            :aria-label="isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'"
            @click="toggleTheme"
          >
            <span class="theme-toggle-mark" :class="{ 'is-night': isDark }" aria-hidden="true">
              <span class="theme-toggle-dot" />
            </span>
            <span class="theme-toggle-label">{{ isDark ? 'Noc' : 'Deň' }}</span>
          </button>

          <a href="/#contact" class="btn-nav-primary" aria-label="Kontaktovať Appinara">
            Kontakt
          </a>
        </div>

        <div class="md:hidden flex items-center gap-2">
          <button
            type="button"
            class="theme-toggle"
            :aria-label="isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'"
            @click="toggleTheme"
          >
            <span class="theme-toggle-mark" :class="{ 'is-night': isDark }" aria-hidden="true">
              <span class="theme-toggle-dot" />
            </span>
          </button>

          <button
            type="button"
            class="text-ink-900 dark:text-bone-100 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
            :aria-label="mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M4 7h16M4 13h16M4 19h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-mist dark:border-anthracite-mist pt-4">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="block py-2.5 px-1 rounded-md hover:bg-bone-200/60 dark:hover:bg-anthracite-elev font-sans text-base text-ink-900 dark:text-bone-100"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <a href="/#contact" class="btn-nav-primary justify-center mt-3" @click="mobileMenuOpen = false">
            Kontakt
          </a>
        </div>
      </Transition>
    </div>

    <!-- Ink scroll progress hairline at the bottom of the nav -->
    <div
      aria-hidden="true"
      class="absolute left-0 bottom-0 h-px bg-ink-900 dark:bg-bone-100 origin-left will-change-transform"
      :style="{ transform: `scaleX(${progress})` }"
      style="width: 100%; transition: transform 80ms linear;"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const progress = ref(0)
const localTime = ref('—')

const { toggleTheme, isDark } = useTheme()

const navItems = [
  { label: 'Služby', href: '/#services' },
  { label: 'Blog', href: '/blog' }
]

let raf = 0
function readScroll() {
  if (raf) return
  raf = window.requestAnimationFrame(() => {
    raf = 0
    const y = window.scrollY
    scrolled.value = y > 20
    const docH = (document.documentElement.scrollHeight - window.innerHeight) || 1
    progress.value = Math.min(1, Math.max(0, y / docH))
  })
}

let timeInterval: ReturnType<typeof setInterval> | null = null
function updateLocalTime() {
  try {
    const d = new Date()
    const fmt = new Intl.DateTimeFormat('sk-SK', {
      timeZone: 'Europe/Bratislava',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    localTime.value = fmt.format(d).replace(/\s/g, '')
  } catch {
    const d = new Date()
    localTime.value = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  }
}

onMounted(() => {
  readScroll()
  window.addEventListener('scroll', readScroll, { passive: true })
  updateLocalTime()
  timeInterval = setInterval(updateLocalTime, 30_000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', readScroll)
  if (raf) window.cancelAnimationFrame(raf)
  if (timeInterval) clearInterval(timeInterval)
})
</script>

<style scoped>
.nav-link {
  display: inline-flex;
  position: relative;
  padding: 0.25rem 0.1rem;
  text-decoration: none;
}
.nav-link-text {
  font-family: theme('fontFamily.sans')[0];
  font-size: 0.875rem;
  font-weight: 500;
  color: theme('colors.ink.900');
  letter-spacing: -0.005em;
  position: relative;
}
:global(.dark) .nav-link-text { color: theme('colors.bone.100'); }
.nav-link-text::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -4px;
  height: 1px;
  background-color: theme('colors.ink.900');
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 320ms cubic-bezier(0.65, 0, 0.35, 1);
}
:global(.dark) .nav-link-text::after { background-color: theme('colors.bone.100'); }
.nav-link:hover .nav-link-text::after { transform: scaleX(1); }

/* Theme toggle — small mono button with day/night dot */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  border: 1px solid theme('colors.mist.DEFAULT');
  background-color: transparent;
  font-family: theme('fontFamily.mono')[0];
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: theme('colors.ink.700');
  transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
}
:global(.dark) .theme-toggle {
  border-color: theme('colors.anthracite.mist');
  color: theme('colors.ink.100');
}
.theme-toggle:hover {
  background-color: theme('colors.bone.200');
  border-color: theme('colors.ink.700');
  color: theme('colors.ink.900');
}
:global(.dark) .theme-toggle:hover {
  background-color: theme('colors.anthracite.elev');
  border-color: theme('colors.bone.100');
  color: theme('colors.bone.100');
}

.theme-toggle-mark {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid currentColor;
  display: inline-flex;
  overflow: hidden;
}
.theme-toggle-dot {
  position: absolute;
  inset: 0;
  background-color: currentColor;
  clip-path: circle(50% at 75% 50%);
  transition: clip-path 320ms cubic-bezier(0.65, 0, 0.35, 1);
}
.theme-toggle-mark.is-night .theme-toggle-dot {
  clip-path: circle(50% at 25% 50%);
}

.theme-toggle-label {
  letter-spacing: 0.18em;
}

/* Live local time chip */
.local-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.65rem;
  border-radius: 4px;
  border: 1px solid theme('colors.mist.DEFAULT');
  font-family: theme('fontFamily.mono')[0];
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: theme('colors.ink.500');
  font-variant-numeric: tabular-nums;
  user-select: none;
}
:global(.dark) .local-chip {
  border-color: theme('colors.anthracite.mist');
  color: theme('colors.ink.300');
}
.local-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: theme('colors.ink.900');
  box-shadow: 0 0 0 0 rgba(15, 15, 14, 0.35);
  animation: local-pulse 2.4s ease-out infinite;
}
:global(.dark) .local-dot {
  background-color: theme('colors.bone.100');
  box-shadow: 0 0 0 0 rgba(245, 242, 237, 0.30);
}
@keyframes local-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(15, 15, 14, 0.35); }
  70%  { box-shadow: 0 0 0 6px rgba(15, 15, 14, 0); }
  100% { box-shadow: 0 0 0 0 rgba(15, 15, 14, 0); }
}
.local-label { letter-spacing: 0.18em; }

@media (prefers-reduced-motion: reduce) {
  .nav-link-text::after,
  .theme-toggle-dot { transition: none; }
  .local-dot { animation: none; }
}
</style>
