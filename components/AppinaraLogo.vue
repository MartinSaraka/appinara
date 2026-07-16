<template>
  <span class="inline-flex items-baseline select-none" :class="containerClass">
    <span
      class="appinara-wordmark font-display font-bold tracking-tight text-gray-900 dark:text-white"
      :class="textSize"
    >{{ iconOnly ? 'A' : 'Appinara' }}<span class="appinara-dot text-cinnabar-500 dark:text-cinnabar-glow">.</span></span>
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

const textSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-[20px]'
    case 'lg': return 'text-[32px]'
    default:   return 'text-[26px] md:text-[28px]'
  }
})
</script>

<style scoped>
/* Clean wordmark — Bricolage Grotesque bold, ink/white, cinnabar full stop.
   The dot is the whole brand mark: confident, editorial, zero decoration. */
.appinara-wordmark {
  letter-spacing: -0.03em;
  font-feature-settings: 'kern', 'liga';
  line-height: 1;
}
.appinara-dot {
  margin-left: 0.04em;
}
</style>
