<template>
  <div
    class="relative overflow-hidden"
    :class="[ratioClass, rounded ? 'rounded-2xl' : '']"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :sizes="sizes"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Elegant branded fallback — no dev instructions on the live page.
         To show a real photo, drop it at the `expectedPath` and pass `src`. -->
    <div
      v-else
      class="absolute inset-0 flex items-center justify-center photo-fallback"
      role="img"
      :aria-label="alt || label"
      :title="`${ratioLabel} · ${expectedPath}`"
    >
      <span class="font-display font-extrabold text-6xl md:text-7xl text-white/90 select-none" aria-hidden="true">
        {{ initials }}
      </span>
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

const initials = computed(() => {
  const source = props.alt || props.label || 'A'
  return source
    .split(/\s+/)
    .filter(w => /^[A-ZÁ-Ž]/.test(w))
    .slice(0, 2)
    .map(w => w[0])
    .join('') || 'A'
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

<style scoped>
.photo-fallback {
  background:
    radial-gradient(ellipse 80% 80% at 20% 10%, rgba(255, 255, 255, 0.14), transparent 60%),
    linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
}
</style>
