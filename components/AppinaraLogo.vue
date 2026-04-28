<template>
  <span class="inline-flex items-baseline gap-2.5 select-none" :class="containerClass">
    <span
      class="appinara-mark relative flex items-center justify-center flex-shrink-0"
      :class="markSize"
      aria-hidden="true"
    >
      <span class="appinara-mark-A font-display italic" :class="markGlyphSize">A</span>
      <span class="appinara-mark-corner appinara-mark-corner-tl" />
      <span class="appinara-mark-corner appinara-mark-corner-br" />
    </span>
    <span v-if="!iconOnly" class="appinara-wordmark font-display italic font-normal tracking-tight" :class="textSize">
      Appinara
    </span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    iconOnly?: boolean
    containerClass?: string
  }>(),
  { size: 'md', iconOnly: false, containerClass: '' }
)

const markSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-7 h-7'
    case 'lg': return 'w-11 h-11'
    default:   return 'w-9 h-9'
  }
})

const markGlyphSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-[18px] leading-none'
    case 'lg': return 'text-[28px] leading-none'
    default:   return 'text-[22px] leading-none'
  }
})

const textSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-[20px]'
    case 'lg': return 'text-[32px]'
    default:   return 'text-[26px] md:text-[28px]'
  }
})
</script>

<style scoped>
/* Mark — bone square with cinnabar corner brackets, italic A inside.
   References Czech/Slovak modernist colophons. */
.appinara-mark {
  background-color: theme('colors.bone.50');
  color: theme('colors.ink.900');
  border: 1px solid theme('colors.ink.900');
  border-radius: 2px;
  position: relative;
}
:global(.dark) .appinara-mark {
  background-color: theme('colors.anthracite.elev');
  color: theme('colors.bone.100');
  border-color: theme('colors.bone.100');
}

.appinara-mark-A {
  display: block;
  font-feature-settings: 'kern', 'dlig', 'ss01';
  transform: translateY(0.06em);
}

/* Cinnabar corner ticks — bracket motif */
.appinara-mark-corner {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: theme('colors.primary.500');
}
.appinara-mark-corner-tl { top: -2px;    left: -2px; }
.appinara-mark-corner-br { bottom: -2px; right: -2px; }
:global(.dark) .appinara-mark-corner {
  background-color: theme('colors.cinnabar.glow');
}

/* Wordmark — Instrument Serif italic, ink. The tittle (dot above i) is replaced
   by a small cinnabar square — riso-print signature, positioned over the second 'i'.
   Since Instrument Serif italic already has a tittle on 'i', we layer a square over it. */
.appinara-wordmark {
  position: relative;
  color: theme('colors.ink.900');
  letter-spacing: -0.02em;
  font-feature-settings: 'kern', 'liga';
}
:global(.dark) .appinara-wordmark {
  color: theme('colors.bone.100');
}

</style>
