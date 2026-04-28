<template>
  <div class="relative overflow-hidden dark:bg-anthracite bg-bone">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 dark:text-white text-gray-900">
            <span class="gradient-text">Blog</span> & Insights
          </h1>
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-8">
            Praktické tipy a návody ako využiť AI a moderné technológie vo vašom biznise
          </p>
        </div>
      </div>
    </section>
    
    <!-- Blog Posts Grid -->
    <section class="py-20 dark:bg-slate-950 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <NuxtLink 
            v-for="post in blogPosts" 
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group glass-effect rounded-2xl overflow-hidden card-hover"
          >
            <!-- Post Image -->
            <div class="relative h-48 overflow-hidden dark:bg-slate-800 bg-gray-200">
              <!-- Real photo -->
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <!-- Gradient overlay for better text readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <!-- Category badge on image -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-lg text-xs font-bold shadow-lg">
                  {{ post.emoji }} {{ post.category }}
                </span>
              </div>
            </div>
            
            <!-- Post Content -->
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sm dark:text-slate-400 text-gray-600">{{ post.readTime }} čítania</span>
              </div>
              
              <h2 class="text-xl font-display font-bold dark:text-white text-gray-900 mb-3 dark:group-hover:text-primary-400 group-hover:text-primary-600 transition-colors leading-tight">
                {{ post.title }}
              </h2>
              
              <p class="dark:text-slate-300 text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                {{ post.excerpt }}
              </p>
              
              <div class="flex items-center dark:text-primary-400 text-primary-600 text-sm font-semibold">
                Čítať viac
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div class="mt-4 pt-4 border-t dark:border-slate-700 border-gray-200 text-xs dark:text-slate-500 text-gray-500">
                {{ post.date }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - AI & Web Development Tipy | Appinara',
  meta: [
    { name: 'description', content: 'Praktické tipy, návody a insights o AI integrácii, vývoji webov a digitálnej transformácii pre slovenské firmy.' },
    { name: 'keywords', content: 'AI blog, webový vývoj, AI integrácie, chatboty, automatizácia, slovensko, návody' }
  ]
})

const blogPosts = [
  {
    slug: 'faceless-ai-videa-navod',
    title: 'Faceless AI videá: Kompletný návod 2025',
    excerpt: 'Ako zarábať 2000-5000€/mesiac na YouTube bez ukázania tváre. AI tools, workflow, monetizácia. Step-by-step tutoriál s reálnymi príkladmi.',
    category: 'AI Video',
    emoji: '🎬',
    readTime: '15 min',
    date: '16. November 2024',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80'
  },
  {
    slug: 'ai-vs-ludia-buducnost-prace',
    title: 'AI vs. Ľudia: Ktoré joby prežijú?',
    excerpt: 'Brutálne úprimná analýza: Ktoré profesie AI vymaže do 2030 a ktoré budú prosperovať? Risk assessment podľa kategórií + action plan.',
    category: 'Budúcnosť práce',
    emoji: '⚔️',
    readTime: '14 min',
    date: '16. November 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    slug: 'web-ai-trendy-2025',
    title: 'TOP Web & AI trendy pre rok 2025',
    excerpt: '10 trendov, ktoré zmenia digitálny svet v 2025. AI-first weby, voice search, micro-SaaS, zero-click content a viac. S predikciami a practical tips.',
    category: 'Trendy 2025',
    emoji: '🚀',
    readTime: '12 min',
    date: '16. November 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    slug: 'ai-chatbot-pre-maly-biznis',
    title: 'AI Chatbot pre malý biznis: Kompletný sprievodca 2025',
    excerpt: 'Zistite, ako môže AI chatbot ušetriť vašej firme desiatky hodín týždenne a zvýšiť predaje o 30-40%. Praktický návod krok za krokom.',
    category: 'AI Návod',
    emoji: '🤖',
    readTime: '8 min',
    date: '16. November 2024',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80'
  },
  {
    slug: 'kolko-stoji-webova-stranka-2024',
    title: 'Koľko stojí webová stránka v roku 2025?',
    excerpt: 'Transparentný prehľad cien webových stránok na Slovensku. Prečo niektoré weby stoja 300€ a iné 3000€? Rozložíme si to.',
    category: 'Pricing',
    emoji: '💰',
    readTime: '10 min',
    date: '12. November 2024',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
  },
  {
    slug: 'web-ktory-predava-checklist',
    title: '10 vecí, ktoré musí mať web aby skutočne predával',
    excerpt: 'Checklist overený stovkami projektov. Tieto elementy rozhodujú o tom, či váš web konvertuje návštevníkov na zákazníkov alebo nie.',
    category: 'Checklist',
    emoji: '✅',
    readTime: '9 min',
    date: '10. November 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    slug: 'preco-potrebuje-moja-firma-ai',
    title: 'Prečo potrebuje moja firma AI? (A prečo práve teraz)',
    excerpt: '5 konkrétnych príkladov, ako AI pomáha slovenským firmám šetriť náklady, zvyšovať predaje a predbehávať konkurenciu.',
    category: 'AI Business',
    emoji: '💡',
    readTime: '8 min',
    date: '8. November 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
  },
  {
    slug: 'eshop-vs-marketplace',
    title: 'Vlastný e-shop vs. Marketplace: Čo sa oplatí viac?',
    excerpt: 'Predávate produkty? Zistite, či sa vám oplatí vlastný e-shop alebo radšej predávať cez Marketplace. Reálne čísla a porovnanie.',
    category: 'E-commerce',
    emoji: '🛒',
    readTime: '9 min',
    date: '5. November 2024',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
  },
  {
    slug: 'automatizacia-pre-zaciatocnikov',
    title: 'Automatizácia pre začiatočníkov: Kde začať?',
    excerpt: 'Ako automatizovať vaše prvé procesy vo firme bez programovania. 5 jednoduchých nástrojov, ktoré môžete použiť dnes.',
    category: 'Automatizácia',
    emoji: '⚙️',
    readTime: '7 min',
    date: '3. November 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
  },
  {
    slug: 'ako-vybrat-web-developera',
    title: 'Ako vybrať správneho web developera?',
    excerpt: 'Checklist, otázky a red flags. Ako neprísť o peniaze a čas výberom zlého developera. Na základe 100+ projektov.',
    category: 'Hiring Guide',
    emoji: '👨‍💻',
    readTime: '8 min',
    date: '1. November 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
  },
  {
    slug: 'top-10-ai-nastrojov-2024',
    title: 'TOP 10 AI nástrojov pre firmy v 2025',
    excerpt: 'Overené nástroje, ktoré používame denne. S cenami, pros/cons a reálnymi use cases. Ušetrite stovky hodín mesačne.',
    category: 'AI Tools',
    emoji: '🔧',
    readTime: '10 min',
    date: '16. November 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    slug: 'roi-modernizacie-webu',
    title: 'ROI modernizácie webu: Oplatí sa to?',
    excerpt: 'Ako počítať návratnosť investície do nového webu. Reálne case studies s číslami a kalkulačka. Väčšina webov sa vráti za 3-6 mesiacov.',
    category: 'ROI & Analytics',
    emoji: '📈',
    readTime: '8 min',
    date: '26. Október 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  }
]
</script>

