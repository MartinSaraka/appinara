<template>
  <div class="relative">
    <!-- Static left rule, no progress dot or fill animation -->
    <div class="absolute left-5 top-0 bottom-0 w-px bg-mist dark:bg-anthracite-mist" aria-hidden="true" />
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ showDot?: boolean }>(), { showDot: true })
</script>
