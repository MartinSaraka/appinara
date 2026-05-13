<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <article class="relative pt-28 md:pt-36 pb-24">
      <!-- Top hero block with cover image -->
      <div class="container mx-auto px-6 max-w-3xl">
        <nav class="mb-8 text-sm" aria-label="Drobky">
          <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">
            Domov
          </NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">
            Blog
          </NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <span class="dark:text-slate-300 text-gray-700">{{ breadcrumb }}</span>
        </nav>

        <header class="mb-10">
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-cinnabar-soft/60 dark:bg-cinnabar-glow/15 text-cinnabar-deep dark:text-cinnabar-glow text-xs font-bold uppercase tracking-widest">
              {{ category }}
            </span>
            <span class="text-xs dark:text-slate-500 text-gray-500 font-medium tracking-wide uppercase">
              {{ readTime }} čítania · {{ date }}
            </span>
          </div>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            {{ title }}
            <span v-if="titleAccent" class="italic font-medium gradient-text">{{ titleAccent }}</span>
          </h1>

          <p class="text-xl md:text-2xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty font-light">
            {{ intro }}
          </p>
        </header>
      </div>

      <!-- Full-bleed cover image -->
      <figure
        v-if="resolvedCover"
        class="my-12 md:my-16"
      >
        <div class="container mx-auto px-0 md:px-6 max-w-5xl">
          <div class="relative overflow-hidden md:rounded-3xl bg-gray-100 dark:bg-slate-900 border-y md:border border-gray-200 dark:border-slate-800">
            <img
              :src="resolvedCover"
              :alt="coverAlt || title"
              class="w-full h-[280px] md:h-[460px] object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </figure>

      <!-- Article body -->
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="article-prose prose prose-lg max-w-none">
          <slot />

          <aside
            v-if="ctaTitle && ctaText"
            class="article-cta mt-16 rounded-2xl bg-anthracite dark:bg-cinnabar-deep/30 dark:border dark:border-cinnabar-glow/30 p-7 md:p-10 relative overflow-hidden"
          >
            <div class="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cinnabar-500/30 blur-3xl pointer-events-none" aria-hidden="true" />
            <div class="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-cinnabar-glow/20 blur-3xl pointer-events-none" aria-hidden="true" />

            <p class="article-cta-eyebrow mb-4 relative">{{ ctaEyebrow }}</p>
            <p class="article-cta-title font-display font-bold mb-3 relative text-balance">
              {{ ctaTitle }}
            </p>
            <p class="article-cta-body mb-7 leading-relaxed text-pretty relative">
              {{ ctaText }}
            </p>
            <div class="flex flex-wrap gap-3 relative">
              <NuxtLink v-if="primaryLabel && primaryTo" :to="primaryTo" class="article-btn-primary">
                {{ primaryLabel }}
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
              <NuxtLink v-if="secondaryLabel && secondaryTo" :to="secondaryTo" class="article-btn-secondary">
                {{ secondaryLabel }}
              </NuxtLink>
            </div>
          </aside>
        </div>

        <!-- Related posts -->
        <aside v-if="relatedPosts.length > 0" class="mt-20 pt-12 border-t border-gray-200 dark:border-slate-800">
          <p class="eyebrow mb-6">Pokračovať v čítaní</p>
          <div class="grid sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="rel in relatedPosts"
              :key="rel.slug"
              :to="`/blog/${rel.slug}`"
              class="group rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/60 dark:bg-anthracite/80 hover:border-cinnabar-500/50 dark:hover:border-cinnabar-glow/50 transition-colors p-5 flex gap-4"
            >
              <div class="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-900">
                <img :src="rel.image" :alt="rel.title" class="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="eyebrow mb-1 text-[10px]">{{ rel.category }} · {{ rel.readTime }}</p>
                <p class="text-sm font-display font-bold dark:text-white text-gray-900 leading-snug group-hover:text-cinnabar-500 dark:group-hover:text-cinnabar-glow transition-colors line-clamp-3 text-balance">
                  {{ rel.title }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </aside>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script setup lang="ts">
// BlogArticleLayout — auto-resolves cover image from blogPosts data via current route slug
import { computed } from 'vue'
import { blogPosts } from '~/data/blogPosts'

const props = withDefaults(defineProps<{
  breadcrumb: string
  category: string
  readTime: string
  date: string
  title: string
  titleAccent?: string
  intro: string
  coverImage?: string
  coverAlt?: string
  ctaEyebrow?: string
  ctaTitle?: string
  ctaText?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>(), {
  titleAccent: '',
  coverImage: '',
  coverAlt: '',
  ctaEyebrow: 'Ďalší krok',
  ctaTitle: '',
  ctaText: '',
  primaryLabel: '',
  primaryTo: '',
  secondaryLabel: '',
  secondaryTo: ''
})

const route = useRoute()

// Auto-resolve cover image from blogPosts data based on current slug.
// Each blog page sits at /blog/<slug>, so we read the last segment.
const currentSlug = computed(() => {
  const path = route.path.replace(/\/$/, '')
  return path.split('/').pop() || ''
})

const currentPost = computed(() => blogPosts.find(p => p.slug === currentSlug.value))

const resolvedCover = computed(() => props.coverImage || currentPost.value?.image || '')

// Pick 2 related posts (same category if possible, otherwise most recent others).
const relatedPosts = computed(() => {
  const slug = currentSlug.value
  const cat = currentPost.value?.category
  const others = blogPosts.filter(p => p.slug !== slug)
  const sameCat = cat ? others.filter(p => p.category === cat) : []
  const rest = others.filter(p => !sameCat.includes(p))
  return [...sameCat, ...rest].slice(0, 2)
})
</script>

<style scoped>
/* Article-specific prose enhancements (v3) — only apply inside the article body. */
/* Touched to force Vite HMR refresh on Windows file-watcher edge case. */

.article-prose :deep(p) {
  @apply text-base md:text-lg leading-[1.75] my-6 dark:text-slate-200 text-gray-800;
}

/* First paragraph of the article body: emphasized lead style */
.article-prose :deep(> p:first-of-type) {
  @apply text-lg md:text-xl font-light leading-[1.7] dark:text-slate-100 text-gray-900;
}

/* Drop cap on the very first letter of the very first paragraph */
.article-prose :deep(> p:first-of-type::first-letter) {
  @apply font-display font-bold float-left mr-3 leading-[0.85];
  font-size: 4.5rem;
  background: linear-gradient(135deg, #FF3B1F, #FF5C3F);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 0.4rem;
}

.article-prose :deep(h2) {
  @apply text-2xl md:text-[2rem] font-display font-bold leading-[1.15] mt-16 mb-5 dark:text-white text-gray-900 text-balance;
  position: relative;
}

.article-prose :deep(h2)::before {
  content: '';
  display: block;
  width: 2.5rem;
  height: 3px;
  margin-bottom: 1rem;
  border-radius: 2px;
  background: linear-gradient(90deg, #FF3B1F, transparent);
}

.article-prose :deep(h3) {
  @apply text-xl md:text-2xl font-display font-bold mt-10 mb-3 dark:text-white text-gray-900;
}

.article-prose :deep(strong) {
  @apply font-bold dark:text-white text-gray-900;
  background-image: linear-gradient(transparent 65%, rgba(255, 92, 63, 0.18) 65%);
  background-repeat: no-repeat;
  padding: 0 0.1em;
}

.article-prose :deep(a:not(.article-btn-primary):not(.article-btn-secondary)) {
  @apply font-medium text-cinnabar-deep dark:text-cinnabar-glow no-underline border-b border-cinnabar-500/40 dark:border-cinnabar-glow/40 hover:border-cinnabar-500 dark:hover:border-cinnabar-glow transition-colors;
}

/* Article CTA box — editorial inverse-contrast block at the end of each post */
.article-prose :deep(.article-cta-eyebrow) {
  @apply text-[11px] font-bold uppercase tracking-[0.18em] text-cinnabar-glow;
}

.article-prose :deep(.article-cta-title) {
  @apply text-2xl md:text-[1.85rem] leading-[1.15] text-bone;
}

.article-prose :deep(.article-cta-body) {
  @apply text-base md:text-lg text-bone/75;
}

.article-prose :deep(.article-btn-primary) {
  @apply inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-anthracite bg-cinnabar-glow hover:bg-cinnabar-500 transition-colors no-underline border-0;
  background-image: linear-gradient(135deg, #FF5C3F 0%, #FF3B1F 100%);
  color: #0A0A0A;
  box-shadow: 0 8px 24px -8px rgba(255, 59, 31, 0.6);
}

.article-prose :deep(.article-btn-primary:hover) {
  color: #0A0A0A;
  transform: translateY(-1px);
  box-shadow: 0 12px 28px -8px rgba(255, 59, 31, 0.75);
}

.article-prose :deep(.article-btn-secondary) {
  @apply inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-bone/90 bg-transparent border border-bone/30 hover:border-bone/60 hover:bg-bone/5 transition-colors no-underline;
}

.article-prose :deep(.article-btn-secondary:hover) {
  color: #F2EDE4;
}

/* Dark mode: keep the box dark but tinted with cinnabar */
:global(.dark) .article-prose :deep(.article-cta-title) {
  @apply text-bone;
}

.article-prose :deep(ul) {
  @apply my-6 space-y-2.5 pl-0 list-none;
}

.article-prose :deep(ul > li) {
  @apply relative pl-7 text-base md:text-lg leading-[1.7] dark:text-slate-200 text-gray-800;
}

.article-prose :deep(ul > li)::before {
  content: '';
  position: absolute;
  left: 0.25rem;
  top: 0.85em;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: #FF3B1F;
}

.article-prose :deep(ol) {
  @apply my-6 space-y-2.5 pl-6 dark:text-slate-200 text-gray-800;
}

.article-prose :deep(ol > li) {
  @apply text-base md:text-lg leading-[1.7];
}

.article-prose :deep(ol > li::marker) {
  @apply font-display font-bold text-cinnabar-deep dark:text-cinnabar-glow;
}

.article-prose :deep(blockquote) {
  @apply not-italic relative my-10 pl-7 pr-5 py-5 rounded-r-2xl border-l-4 border-cinnabar-500 bg-cinnabar-soft/40 dark:bg-cinnabar-glow/10 dark:border-cinnabar-glow font-display;
}

.article-prose :deep(blockquote p) {
  @apply text-lg md:text-xl font-medium leading-snug dark:text-white text-gray-900;
}

.article-prose :deep(blockquote p::before),
.article-prose :deep(blockquote p::after) {
  content: '';
}

.article-prose :deep(hr) {
  @apply my-14 border-0 mx-auto;
  height: 2px;
  width: 4rem;
  background: linear-gradient(90deg, #FF3B1F, transparent);
  border-radius: 2px;
}

.article-prose :deep(code) {
  @apply px-1.5 py-0.5 rounded text-sm bg-gray-100 dark:bg-slate-800 dark:text-slate-100 text-gray-900 font-mono;
}

.article-prose :deep(img) {
  @apply rounded-2xl border border-gray-200 dark:border-slate-800 my-10;
}

/* Optional opt-in callout boxes — use in posts as: <aside class="callout">...</aside> */
.article-prose :deep(.callout) {
  @apply my-10 p-6 rounded-2xl border border-amber-200/80 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10;
}

.article-prose :deep(.callout-title) {
  @apply text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2;
}

.article-prose :deep(.callout p) {
  @apply text-base leading-relaxed text-gray-800 dark:text-slate-200 my-2;
}

/* Key takeaway / TL;DR block */
.article-prose :deep(.key-takeaway) {
  @apply my-10 p-6 md:p-7 rounded-2xl border border-cinnabar-500/30 dark:border-cinnabar-glow/30 bg-cinnabar-soft/30 dark:bg-cinnabar-glow/10;
}

.article-prose :deep(.key-takeaway-title) {
  @apply text-xs font-bold uppercase tracking-widest text-cinnabar-deep dark:text-cinnabar-glow mb-2;
}

.article-prose :deep(.key-takeaway p) {
  @apply text-base md:text-lg leading-relaxed text-gray-900 dark:text-white my-2 font-medium;
}
</style>
