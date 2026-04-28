<template>
  <div class="relative overflow-hidden marquee-mask" :class="containerClass">
    <div
      class="flex gap-8 md:gap-12 w-max will-change-transform"
      :class="[reverse ? 'animate-marquee-x-rev' : 'animate-marquee-x', { 'pause-on-hover': true }]"
      :style="{ animationDuration: `${duration}s` }"
    >
      <div
        v-for="copy in 2"
        :key="copy"
        class="flex gap-8 md:gap-12 items-center flex-shrink-0"
        aria-hidden="true"
      >
        <span
          v-for="item in items"
          :key="`${copy}-${item}`"
          class="font-mono text-[12px] md:text-[13px] tracking-mono-wide uppercase text-ink-700 dark:text-bone-100 whitespace-nowrap flex items-center gap-3"
        >
          <span class="w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow flex-shrink-0" aria-hidden="true" />
          {{ item }}
        </span>
      </div>
    </div>
    <div class="sr-only">
      <p>{{ srLabel }}: {{ items.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    items: string[]
    duration?: number
    reverse?: boolean
    srLabel?: string
    containerClass?: string
  }>(),
  {
    duration: 50,
    reverse: false,
    srLabel: 'Stack',
    containerClass: ''
  }
)
</script>

<style scoped>
.pause-on-hover:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .pause-on-hover { animation-play-state: paused; }
}
</style>
