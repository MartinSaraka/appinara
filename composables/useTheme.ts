import { ref, computed, onMounted, watch } from 'vue'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const theme = ref<Theme>('light')

  // Inicializácia témy
  const initTheme = () => {
    if (process.client) {
      // Skúsiť získať tému z localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null
      
      if (savedTheme) {
        theme.value = savedTheme
      } else {
        // Ak nie je uložená, použiť systémové preferencie
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        theme.value = prefersDark ? 'dark' : 'light'
      }
      
      applyTheme(theme.value)
    }
  }

  // Aplikovať tému na HTML element
  const applyTheme = (newTheme: Theme) => {
    if (process.client) {
      const html = document.documentElement
      
      if (newTheme === 'dark') {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  }

  // Prepnúť tému
  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    theme.value = newTheme
    if (process.client) {
      applyTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  // Nastaviť konkrétnu tému
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    if (process.client) {
      applyTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  // Inicializovať pri mounted
  onMounted(() => {
    initTheme()
  })

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: computed(() => theme.value === 'dark'),
    isLight: computed(() => theme.value === 'light'),
  }
}

