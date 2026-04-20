// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  /** Server-only: set via NUXT_* env. Legacy EmailJS defaults keep current deployment working until you migrate to .env. */
  runtimeConfig: {
    /** Optional: MiniMax API kľúč len na serveri (text/TTS/video) — env: NUXT_MINIMAX_API_KEY */
    minimaxApiKey: '',
    emailjsServiceId: 'service_is1zj0v',
    emailjsTemplateId: 'template_xjtb39p',
    emailjsPublicKey: 'OkHjN5RiYSgxDL-5S'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: 'Appinara | AI automatizácie a digitálne riešenia',
      htmlAttrs: {
        lang: 'sk'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI automatizácie, lead follow-up, chatboty, weby a interné nástroje pre firmy na Slovensku. Praktické výsledky namiesto hype.' },
        { name: 'keywords', content: 'AI integrácie, webové riešenia, vývoj aplikácií, chatboty, automatizácia, fullstack development, Nuxt, Vue, Slovensko' },
        { name: 'author', content: 'Appinara' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://appinara.sk/' },
        { property: 'og:title', content: 'Appinara | AI automatizácie a digitálne riešenia' },
        { property: 'og:description', content: 'AI automatizácie, lead follow-up, chatboty, weby a interné nástroje pre firmy na Slovensku.' },
        { property: 'og:image', content: 'https://appinara.sk/logo.svg' },
        { property: 'og:locale', content: 'sk_SK' },
        { property: 'og:site_name', content: 'Appinara' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://appinara.sk/' },
        { name: 'twitter:title', content: 'Appinara | AI automatizácie a digitálne riešenia' },
        { name: 'twitter:description', content: 'AI automatizácie, lead follow-up, chatboty, weby a interné nástroje pre firmy na Slovensku.' },
        { name: 'twitter:image', content: 'https://appinara.sk/logo.svg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://appinara.sk/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  }
})
