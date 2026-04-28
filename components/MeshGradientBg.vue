<template>
  <div
    class="absolute inset-0 overflow-hidden pointer-events-none"
    :class="[paletteClass, { 'film-grain': grain }]"
    aria-hidden="true"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    palette?: '1' | '2' | '3'
    grain?: boolean
  }>(),
  { palette: '1', grain: true }
)

const paletteClass = computed(() => `mesh-${props.palette}`)
</script>
