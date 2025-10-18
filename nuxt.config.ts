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
      title: 'Appinara | AI Integrácie & Moderné Webové Riešenia',
      htmlAttrs: {
        lang: 'sk'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.' },
        { name: 'keywords', content: 'AI integrácie, webové riešenia, vývoj aplikácií, chatboty, automatizácia, fullstack development, Nuxt, Vue, Slovensko' },
        { name: 'author', content: 'Appinara' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://appinara.sk/' },
        { property: 'og:title', content: 'Appinara | AI Integrácie & Moderné Webové Riešenia' },
        { property: 'og:description', content: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.' },
        { property: 'og:image', content: 'https://appinara.sk/logo.svg' },
        { property: 'og:locale', content: 'sk_SK' },
        { property: 'og:site_name', content: 'Appinara' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://appinara.sk/' },
        { name: 'twitter:title', content: 'Appinara | AI Integrácie & Moderné Webové Riešenia' },
        { name: 'twitter:description', content: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.' },
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
