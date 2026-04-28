<template>
  <span class="appinara-logo" :class="sizeClass" :aria-label="ariaLabel">
    <span class="appinara-mark" aria-hidden="true">A</span>
    <span class="appinara-word">
      <span class="text-primary-600 dark:text-cinnabar-glow">appi</span><span class="text-ink-900 dark:text-bone-100">nara</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{ size?: Size; ariaLabel?: string }>(), {
  size: 'md',
  ariaLabel: 'Appinara'
})

const sizeClass = computed(() => ({
  sm: 'is-sm',
  md: 'is-md',
  lg: 'is-lg'
}[props.size]))
</script>

<style scoped>
.appinara-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: theme('fontFamily.display')[0];
  font-weight: 600;
  letter-spacing: -0.01em;
}
.appinara-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6em;
  height: 1.6em;
  background-color: theme('colors.primary.500');
  color: theme('colors.bone.50');
  border-radius: 4px;
  font-style: italic;
  font-weight: 500;
  line-height: 1;
  transform: translateY(-1px);
}
.appinara-word { line-height: 1; }
.is-sm { font-size: 0.95rem; }
.is-md { font-size: 1.15rem; }
.is-lg { font-size: 1.5rem; }
</style>
