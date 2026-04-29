<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <!-- Hero -->
    <section class="relative pt-32 md:pt-40 pb-12 md:pb-16 hero-surface film-grain overflow-hidden">
      <div class="absolute -top-20 -left-20 w-[420px] h-[420px] mesh-2 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div class="absolute inset-0 grid-pattern opacity-25 pointer-events-none" aria-hidden="true" />

      <div class="container mx-auto px-6 max-w-5xl relative">
        <p class="eyebrow mb-4">Blog</p>
        <h1 class="text-display-xl font-display font-bold dark:text-white text-gray-900 mb-6 leading-[1.0] text-balance">
          Krátko a vecne k AI,
          <span class="block italic font-medium gradient-text">webom a tomu, čo predáva.</span>
        </h1>
        <p class="text-lg md:text-xl dark:text-slate-300 text-gray-700 max-w-2xl leading-relaxed text-pretty">
          Žiadne „TOP 10 AI nástrojov, ktoré zmenia všetko". Skôr poznámky z reálnej práce — koľko veci stoja, čo funguje a kde sa AI neoplatí.
        </p>

        <!-- Category filter -->
        <nav v-if="categories.length > 0" aria-label="Kategórie" class="mt-10 flex flex-wrap gap-2">
          <button
            v-for="cat in ['Všetko', ...categories]"
            :key="cat"
            type="button"
            class="text-sm px-4 py-2 rounded-full border transition-colors"
            :class="activeCategory === cat
              ? 'border-cinnabar-500 dark:border-cinnabar-glow bg-cinnabar-soft dark:bg-cinnabar-glow/15 text-cinnabar-deep dark:text-cinnabar-glow font-semibold'
              : 'border-gray-200 dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev/60 text-gray-700 dark:text-slate-300 hover:border-cinnabar-500/60 dark:hover:border-cinnabar-glow/60'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </nav>
      </div>
    </section>

    <!-- Featured + grid -->
    <section class="section-tall border-t border-gray-200/80 dark:border-anthracite-mist">
      <div class="container mx-auto px-6 max-w-6xl">
        <!-- Featured (most recent) -->
        <article
          v-if="featuredPost && activeCategory === 'Všetko'"
          class="mb-16 md:mb-20"
        >
          <NuxtLink
            :to="`/blog/${featuredPost.slug}`"
            class="group grid md:grid-cols-12 gap-8 md:gap-10 items-center rounded-3xl border border-gray-200 dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev/70 p-7 md:p-10 hover:border-cinnabar-500/60 dark:hover:border-cinnabar-glow/60 transition-colors"
          >
            <div class="md:col-span-5 aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden bg-bone-200 dark:bg-anthracite-mist">
              <img
                :src="featuredPost.image"
                :alt="featuredPost.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div class="md:col-span-7">
              <p class="eyebrow mb-3">{{ featuredPost.category }} · Najnovšie</p>
              <h2 class="text-display-md font-display font-bold dark:text-white text-gray-900 mb-4 leading-[1.1] text-balance group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors">
                {{ featuredPost.title }}
              </h2>
              <p class="text-base md:text-lg dark:text-slate-300 text-gray-700 mb-5 leading-relaxed text-pretty">
                {{ featuredPost.excerpt }}
              </p>
              <div class="flex items-center gap-4 text-sm dark:text-slate-400 text-gray-600">
                <span>{{ featuredPost.date }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ featuredPost.readTime }} čítania</span>
              </div>
            </div>
          </NuxtLink>
        </article>

        <!-- Rest of posts -->
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
          <li
            v-for="post in regularPosts"
            :key="post.slug"
          >
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="group block h-full rounded-2xl border border-gray-200 dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev/60 overflow-hidden hover:border-cinnabar-500/60 dark:hover:border-cinnabar-glow/60 transition-colors"
            >
              <div class="aspect-[16/10] overflow-hidden bg-bone-200 dark:bg-anthracite-mist">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div class="p-6 md:p-7">
                <p class="eyebrow mb-3">{{ post.category }}</p>
                <h3 class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-3 leading-[1.2] text-balance group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors">
                  {{ post.title }}
                </h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">
                  {{ post.excerpt }}
                </p>
                <div class="flex items-center justify-between text-xs dark:text-slate-400 text-gray-600">
                  <span>{{ post.date }}</span>
                  <span>{{ post.readTime }}</span>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <p
          v-if="filteredPosts.length === 0"
          class="text-center dark:text-slate-400 text-gray-600 py-16"
        >
          V tejto kategórii zatiaľ nie je nič.
        </p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Blog — Appinara · AI, weby a poznámky z reálnej práce',
  meta: [
    { name: 'description', content: 'Krátke články o AI, weboch a tom, čo skutočne predáva — bez „kompletných sprievodcov 2025". Z reálnej praxe, s konkrétnymi číslami.' },
    { name: 'keywords', content: 'AI blog Slovensko, web development, AI integrácie, chatboty, automatizácia, freelance' }
  ]
})

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  dateIso: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'salon-meri1-pripadovka',
    title: 'Ako sme spravili web pre kaderníctvo za dva týždne',
    excerpt: 'Konkrétny prípad: zadanie v stredu, online v ďalšej. Čo ostalo, čo sa škrtlo a čo by som dnes urobil inak. Vrátane nákladov a hodín.',
    category: 'Prípadovka',
    readTime: '6 min',
    date: '14. apríl 2026',
    dateIso: '2026-04-14',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80'
  },
  {
    slug: 'co-som-sa-naucil-z-troch-ai-chatbotov',
    title: 'Čo som sa naučil z prvých troch AI chatbotov v praxi',
    excerpt: 'Tri firmy, tri rôzne problémy. Kde chatbot sedel, kde nie a prečo. Otvorene aj o tom, čo sa nepodarilo na prvý raz.',
    category: 'Z praxe',
    readTime: '8 min',
    date: '7. apríl 2026',
    dateIso: '2026-04-07',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80'
  },
  {
    slug: 'realny-cennik-webov-na-slovensku',
    title: 'Reálny cenník: čo dostanete za 500, 1500 a 5000 € web',
    excerpt: 'Bez „závisí od náročnosti". Konkrétne, čo je v každom rozsahu doma — a čo sa vám nezmestí. Plus typické skryté náklady, na ktoré sa zabúda.',
    category: 'Cenník',
    readTime: '9 min',
    date: '24. marec 2026',
    dateIso: '2026-03-24',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80'
  },
  {
    slug: 'kolko-stoji-webova-stranka-2024',
    title: 'Koľko stojí webová stránka v roku 2025?',
    excerpt: 'Prečo niektoré weby stoja 300 € a iné 3 000 €? Rozdiely v scope, použitom stacku a v tom, kto za projektom stojí.',
    category: 'Cenník',
    readTime: '8 min',
    date: '12. november 2024',
    dateIso: '2024-11-12',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  },
  {
    slug: 'ai-chatbot-pre-maly-biznis',
    title: 'AI chatbot pre malý biznis — kedy má a kedy nemá zmysel',
    excerpt: 'Bez „revolúcie zákazníckeho servisu". Realisticky o tom, ktoré firmy z chatbota niečo majú a ktoré len získajú nový support kanál navyše.',
    category: 'AI',
    readTime: '7 min',
    date: '15. november 2024',
    dateIso: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80'
  },
  {
    slug: 'ako-vybrat-web-developera',
    title: 'Ako vybrať web developera, aby ste o pol roka neľutovali',
    excerpt: 'Čo sa pýtať pred podpisom, čo si overiť v zmluve a aké červené zástavky som videl u klientov, ktorí prišli odinakiaľ.',
    category: 'Hiring',
    readTime: '8 min',
    date: '1. november 2024',
    dateIso: '2024-11-01',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80'
  },
  {
    slug: 'roi-modernizacie-webu',
    title: 'Oplatí sa modernizovať starý web?',
    excerpt: 'Kedy nový web zarobí naspäť a kedy je to len redizajn pre redizajn. Tri otázky, ktoré si treba odpovedať predtým, než utratíte rozpočet.',
    category: 'Cenník',
    readTime: '7 min',
    date: '26. október 2024',
    dateIso: '2024-10-26',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
  },
  {
    slug: 'web-ai-trendy-2025',
    title: 'Trendy 2025 — čo z toho má vplyv na vašu firmu',
    excerpt: 'Bez clickbaitu. Päť reálnych zmien v digitále, ktoré ovplyvnia menšie firmy v 2025 — a päť, ktoré môžete pokojne ignorovať.',
    category: 'Trendy',
    readTime: '9 min',
    date: '16. november 2024',
    dateIso: '2024-11-16',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80'
  },
  {
    slug: 'web-ktory-predava-checklist',
    title: 'Čo musí mať web, aby skutočne predával',
    excerpt: 'Checklist z desiatok projektov: konkrétne sekcie, dôveryhodné prvky a UX patterny, ktoré rozhodujú o tom, či návštevník napíše alebo zatvorí.',
    category: 'Konverzie',
    readTime: '7 min',
    date: '10. november 2024',
    dateIso: '2024-11-10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  },
  {
    slug: 'eshop-vs-marketplace',
    title: 'Vlastný e-shop vs. marketplace — čo sa kedy oplatí',
    excerpt: 'Predávate produkty? Aktuálne rozhodnutie závisí od toho, či máte brand, marže a kapacitu na marketing. Reálne porovnanie.',
    category: 'E-commerce',
    readTime: '7 min',
    date: '5. november 2024',
    dateIso: '2024-11-05',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80'
  },
  {
    slug: 'automatizacia-pre-zaciatocnikov',
    title: 'Automatizácia pre začiatočníkov — kde reálne začať',
    excerpt: 'Ako automatizovať prvé procesy bez programovania. Päť nástrojov, ktoré som videl reálne fungovať aj mimo IT firiem.',
    category: 'Automatizácia',
    readTime: '6 min',
    date: '3. november 2024',
    dateIso: '2024-11-03',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80'
  },
  {
    slug: 'top-10-ai-nastrojov-2024',
    title: 'AI nástroje, ktoré reálne používam pri klientskej práci',
    excerpt: 'Žiadny TOP 10 listicle. Konkrétne tools s cenou a use-case-om, ktoré pri vývoji a komunikácii s klientmi naozaj šetria čas.',
    category: 'AI',
    readTime: '8 min',
    date: '8. november 2024',
    dateIso: '2024-11-08',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80'
  }
]

const categories = computed(() => {
  const set = new Set(blogPosts.map(p => p.category))
  return Array.from(set).sort()
})

const activeCategory = ref<string>('Všetko')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'Všetko') return [...blogPosts].sort((a, b) => b.dateIso.localeCompare(a.dateIso))
  return blogPosts
    .filter(p => p.category === activeCategory.value)
    .sort((a, b) => b.dateIso.localeCompare(a.dateIso))
})

const featuredPost = computed(() => filteredPosts.value[0] ?? null)
const regularPosts = computed(() => {
  if (activeCategory.value === 'Všetko') return filteredPosts.value.slice(1)
  return filteredPosts.value
})
</script>
