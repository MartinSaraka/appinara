<template>
  <div
    class="relative overflow-hidden"
    :class="[ratioClass, rounded ? 'rounded-2xl' : '']"
  >
    <NuxtImg
      v-if="src"
      :src="src"
      :alt="alt"
      :sizes="sizes"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      v-else
      class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 border-2 border-dashed border-gray-300/80 dark:border-slate-600/60 bg-gray-50 dark:bg-slate-900/60"
      role="img"
      :aria-label="`Foto slot: ${label}`"
    >
      <div class="absolute inset-0 mesh-1 opacity-[0.18]" aria-hidden="true" />
      <svg class="relative w-10 h-10 text-primary-500/70 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.823-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
      <p class="relative text-sm font-display font-bold text-gray-900 dark:text-white">
        {{ label }}
      </p>
      <p class="relative text-xs text-gray-600 dark:text-slate-400 mt-1">
        {{ ratioLabel }} · drop file: <code class="font-mono text-[11px] bg-gray-200/70 dark:bg-slate-800 px-1.5 py-0.5 rounded">{{ src ?? expectedPath }}</code>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src?: string | null
    expectedPath?: string
    label?: string
    alt?: string
    ratio?: '1/1' | '3/4' | '4/3' | '16/9' | '21/9' | '4/5'
    rounded?: boolean
    sizes?: string
  }>(),
  {
    src: null,
    expectedPath: '/photos/your-photo.jpg',
    label: 'Foto slot',
    alt: '',
    ratio: '4/5',
    rounded: true,
    sizes: 'sm:100vw md:50vw lg:600px'
  }
)

const ratioClass = computed(() => {
  switch (props.ratio) {
    case '1/1':  return 'aspect-square'
    case '3/4':  return 'aspect-[3/4]'
    case '4/3':  return 'aspect-[4/3]'
    case '16/9': return 'aspect-video'
    case '21/9': return 'aspect-[21/9]'
    case '4/5':
    default:     return 'aspect-[4/5]'
  }
})

const ratioLabel = computed(() => {
  const map: Record<string, string> = {
    '1/1':  '1:1 · 1000×1000',
    '3/4':  '3:4 · 600×800',
    '4/3':  '4:3 · 1200×900',
    '16/9': '16:9 · 1600×900',
    '21/9': '21:9 · 2400×1029',
    '4/5':  '4:5 · 800×1000'
  }
  return map[props.ratio]
})
</script>
