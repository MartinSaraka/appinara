// https://nuxt.com/docs/api/configuration/nuxt-config
// Windows + `nuxt dev`: Nuxt DevTools can trigger SSR ERR_UNSUPPORTED_ESM_URL_SCHEME ("Received protocol 'c:'").
// Enable explicitly: $env:NUXT_DEVTOOLS="true"; npm run dev  (PowerShell)
const devtoolsFlag = process.env.NUXT_DEVTOOLS
const devtoolsEnabled =
  devtoolsFlag === 'true' ? true : devtoolsFlag === 'false' ? false : process.platform !== 'win32'

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://appinara.sk').replace(/\/$/, '')
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: devtoolsEnabled },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],
  image: {
    format: ['avif', 'webp'],
    quality: 80,
    screens: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
  },
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
        { name: 'theme-color', content: '#DC2F1A' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${siteUrl}/` },
        { property: 'og:title', content: 'Appinara | AI Integrácie & Moderné Webové Riešenia' },
        { property: 'og:description', content: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.' },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:locale', content: 'sk_SK' },
        { property: 'og:site_name', content: 'Appinara' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: `${siteUrl}/` },
        { name: 'twitter:title', content: 'Appinara | AI Integrácie & Moderné Webové Riešenia' },
        { name: 'twitter:description', content: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.' },
        { name: 'twitter:image', content: ogImage }
      ],
      link: [
        { rel: 'canonical', href: `${siteUrl}/` },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://api.fontshare.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      /** Kanonická URL webu (OG, JSON-LD); prepíš cez NUXT_PUBLIC_SITE_URL */
      siteUrl,
      /** LinkedIn profil alebo stránka pre JSON-LD sameAs; napr. https://www.linkedin.com/company/... */
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || ''
    },
    emailjsServiceId: '',
    emailjsTemplateId: '',
    emailjsPublicKey: '',
    leadRecipientEmail: '',
    /** Prefix predmetu interného emailu (filtre v schránke); napr. [Appinara Lead] */
    leadEmailSubjectPrefix: '[Appinara Lead]',
    minimaxApiKey: '',
    minimaxApiBase: 'https://api.minimax.io',
    minimaxModel: 'MiniMax-M2',
    minimaxChatModel: 'MiniMax-M2',
    minimaxEnabled: false
  },
  typescript: {
    strict: true
  }
})
