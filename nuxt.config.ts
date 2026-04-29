// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: 'Appinara — AI, weby a interné nástroje pre slovenské firmy',
      htmlAttrs: {
        lang: 'sk'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Freelance studio Martina Saraku. AI integrácie, weby a interné nástroje pre menšie a stredné firmy na Slovensku. Priama komunikácia, fixný rozsah, bez agentúrnych marží.' },
        { name: 'keywords', content: 'AI integrácie Slovensko, webové stránky, AI chatbot, automatizácia, dashboard, freelance developer, Nuxt, Vue' },
        { name: 'author', content: 'Martin Saraka — Appinara' },
        { name: 'theme-color', content: '#FF3B1F' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://appinara.sk/' },
        { property: 'og:title', content: 'Appinara — AI, weby a interné nástroje pre slovenské firmy' },
        { property: 'og:description', content: 'Freelance studio Martina Saraku. AI integrácie, weby a interné nástroje pre menšie a stredné firmy. Bez agentúrnych marží.' },
        { property: 'og:image', content: 'https://appinara.sk/og-image.png' },
        { property: 'og:locale', content: 'sk_SK' },
        { property: 'og:site_name', content: 'Appinara' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://appinara.sk/' },
        { name: 'twitter:title', content: 'Appinara — AI, weby a interné nástroje pre slovenské firmy' },
        { name: 'twitter:description', content: 'Freelance studio Martina Saraku. AI integrácie, weby a interné nástroje pre menšie a stredné firmy. Bez agentúrnych marží.' },
        { name: 'twitter:image', content: 'https://appinara.sk/og-image.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://appinara.sk/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  }
})
