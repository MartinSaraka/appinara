<template>
  <p
    class="font-display font-semibold text-gray-900 dark:text-white text-balance leading-[1.1] tracking-tight"
    :class="sizeClass"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: 'md' | 'lg' | 'xl' | '2xl'
  }>(),
  { size: 'xl' }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'md':  return 'text-display-md'
    case 'lg':  return 'text-display-lg'
    case '2xl': return 'text-display-2xl'
    case 'xl':
    default:    return 'text-display-xl'
  }
})
</script>
