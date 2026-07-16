<template>
  <div class="benefit-mark" aria-hidden="true">
    <svg viewBox="0 0 48 48">
      <path v-if="type === 'speed'" d="M27 5 12 27h11l-2 16 15-23H25Z" />
      <template v-else-if="type === 'tech'">
        <rect x="9" y="9" width="30" height="30" rx="2" />
        <path d="M18 18h12v12H18zM24 3v6m0 30v6M3 24h6m30 0h6" />
      </template>
      <template v-else-if="type === 'target'">
        <circle cx="24" cy="24" r="17" /><circle cx="24" cy="24" r="9" /><path d="m24 24 14-14m-5 0h5v5" />
      </template>
      <template v-else-if="type === 'human'">
        <circle cx="18" cy="17" r="7" /><circle cx="34" cy="19" r="5" /><path d="M5 40c1-9 6-14 13-14s12 5 13 14m-3-10c7-1 12 3 14 10" />
      </template>
      <template v-else-if="type === 'price'">
        <path d="M7 13h34v24H7z" /><circle cx="24" cy="25" r="7" /><path d="M7 19c4 0 6-2 6-6m28 6c-4 0-6-2-6-6M7 31c4 0 6 2 6 6m28-6c-4 0-6 2-6 6" />
      </template>
      <template v-else>
        <path d="M10 22a14 14 0 0 1 28 0v13a6 6 0 0 1-6 6h-6" /><path d="M10 22H7v10h7V22Zm28 0h3v10h-7V22Z" /><circle cx="24" cy="41" r="2" />
      </template>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{ type: string }>()
</script>

<style scoped>
/* Bare icon, no plate — height fixed so all six cards keep the same rhythm */
.benefit-mark { height: 44px; display: grid; align-items: center; justify-items: start; }
svg { width: 36px; height: 36px; fill: none; stroke: #4f46e5; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>

<!-- Dark override must live unscoped: `:global(.dark)` inside scoped styles never matches -->
<style>
.dark .benefit-mark svg { stroke: #a5b4fc; }
</style>
