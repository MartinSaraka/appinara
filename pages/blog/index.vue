<template>
  <div class="relative overflow-hidden dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <section class="relative pt-32 pb-16 border-b border-gray-200/80 dark:border-slate-800">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl">
          <p class="eyebrow mb-4">Appinara · zápisky z praxe</p>
          <h1 class="text-5xl md:text-7xl font-display font-bold mb-5 dark:text-white text-gray-900 leading-[1.05] text-balance">
            Blog bez všeobecných rád.
          </h1>
          <p class="text-xl dark:text-slate-300 text-gray-700 max-w-2xl leading-relaxed text-pretty">
            Weby, AI a automatizácia očami dodávateľa, ktorý rieši malé firmy, lokálne prevádzky a konkrétne rozpočty. Menej trendov, viac rozhodnutí.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="container mx-auto px-6">
        <NuxtLink
          :to="`/blog/${blogPosts[0].slug}`"
          class="group block mb-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white/55 dark:bg-anthracite/80 hover:border-cinnabar-500/50 dark:hover:border-cinnabar-glow/50 transition-colors max-w-7xl mx-auto"
        >
          <div class="grid md:grid-cols-2">
            <div class="relative h-64 md:h-auto overflow-hidden bg-gray-100 dark:bg-slate-900">
              <img
                :src="blogPosts[0].image"
                :alt="blogPosts[0].title"
                class="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span class="absolute top-4 left-4 px-3 py-1.5 bg-bone/95 text-gray-900 rounded-full text-xs font-bold tracking-wide shadow">
                {{ blogPosts[0].category }}
              </span>
            </div>
            <div class="p-8 md:p-10 flex flex-col justify-center">
              <p class="eyebrow mb-3">Najnovší článok · {{ blogPosts[0].readTime }} čítania</p>
              <h2 class="text-2xl md:text-3xl font-display font-bold dark:text-white text-gray-900 mb-4 leading-snug group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors text-balance">
                {{ blogPosts[0].title }}
              </h2>
              <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6 text-pretty">
                {{ blogPosts[0].excerpt }}
              </p>
              <div class="flex items-center gap-2 text-cinnabar-500 dark:text-cinnabar-glow font-semibold text-sm">
                Čítať článok
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <NuxtLink
            v-for="post in blogPosts.slice(1)"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white/55 dark:bg-anthracite/80 hover:border-cinnabar-500/50 dark:hover:border-cinnabar-glow/50 transition-colors flex flex-col"
          >
            <div class="relative h-44 overflow-hidden bg-gray-100 dark:bg-slate-900 flex-shrink-0">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <span class="absolute top-3 left-3 px-2.5 py-1 bg-bone/95 text-gray-900 rounded-full text-xs font-bold tracking-wide shadow">
                {{ post.category }}
              </span>
            </div>

            <div class="p-6 flex flex-col flex-1">
              <p class="eyebrow mb-2">{{ post.readTime }} čítania</p>
              <h2 class="text-lg font-display font-bold dark:text-white text-gray-900 mb-3 leading-snug group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors flex-1 text-balance">
                {{ post.title }}
              </h2>
              <p class="dark:text-slate-400 text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between pt-4 border-t dark:border-slate-800 border-gray-200/80">
                <span class="text-xs dark:text-slate-500 text-gray-500">{{ post.date }}</span>
                <span class="flex items-center gap-1 text-cinnabar-500 dark:text-cinnabar-glow text-sm font-medium">
                  Čítať
                  <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
import { blogPosts } from '~/data/blogPosts'

useHead({
  title: 'Blog — weby, AI a automatizácia z praxe | Appinara',
  meta: [
    { name: 'description', content: 'Praktické články o weboch, AI a automatizácii pre slovenské firmy. Konkrétne rozhodnutia, rozpočty, riziká a skúsenosti z projektov.' },
    { name: 'keywords', content: 'webový vývoj, AI automatizácia, firemný web, slovenský biznis, Appinara blog' }
  ]
})

</script>
