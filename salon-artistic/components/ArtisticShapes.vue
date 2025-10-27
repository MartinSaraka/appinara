<template>
  <div class="artistic-shapes">
    <!-- Subtle Hair/Salon themed decorations -->
    
    <!-- Scissors Icon -->
    <svg class="absolute top-20 right-10 w-32 h-32 opacity-10 animate-float" viewBox="0 0 100 100" style="animation-delay: 0s;">
      <circle cx="25" cy="25" r="12" :fill="colors[0]" />
      <circle cx="75" cy="25" r="12" :fill="colors[1]" />
      <line x1="25" y1="25" x2="50" y2="75" :stroke="colors[0]" stroke-width="3" />
      <line x1="75" y1="25" x2="50" y2="75" :stroke="colors[1]" stroke-width="3" />
    </svg>

    <!-- Comb Shape -->
    <svg class="absolute bottom-40 left-20 w-40 h-40 opacity-8 animate-float" viewBox="0 0 100 100" style="animation-delay: 1.5s;">
      <rect x="20" y="30" width="60" height="15" :fill="colors[2]" rx="3" />
      <rect x="25" y="45" width="5" height="40" :fill="colors[2]" />
      <rect x="35" y="45" width="5" height="35" :fill="colors[2]" />
      <rect x="45" y="45" width="5" height="40" :fill="colors[2]" />
      <rect x="55" y="45" width="5" height="35" :fill="colors[2]" />
      <rect x="65" y="45" width="5" height="40" :fill="colors[2]" />
    </svg>

    <!-- Paint Brush (for coloring) -->
    <svg class="absolute top-1/3 left-10 w-28 h-28 opacity-10 animate-float" viewBox="0 0 100 100" style="animation-delay: 0.7s;">
      <rect x="40" y="10" width="8" height="50" :fill="colors[3]" rx="2" />
      <ellipse cx="44" cy="65" rx="15" ry="20" :fill="colors[4]" />
    </svg>

    <!-- Subtle Circles -->
    <svg class="absolute bottom-20 right-1/4 w-40 h-40 opacity-8" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="60" :fill="colors[5]" opacity="0.4" />
    </svg>

    <!-- Hair Strand Curl -->
    <svg class="absolute top-1/2 right-20 w-24 h-48 opacity-8 animate-float" viewBox="0 0 50 100" style="animation-delay: 2s;">
      <path d="M25,10 Q35,30 25,50 Q15,70 25,90" 
            :stroke="colors[0]" 
            stroke-width="3" 
            fill="none" 
            stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const colors = [
  'rgba(255, 107, 107, 0.6)',  // coral
  'rgba(255, 179, 71, 0.6)',   // peach
  'rgba(107, 203, 119, 0.6)',  // mint
  'rgba(78, 205, 196, 0.6)',   // turquoise
  'rgba(167, 139, 250, 0.6)',  // lavender
  'rgba(255, 111, 181, 0.6)',  // pink
]

const currentColor = computed(() => {
  const colorNames = ['coral', 'peach', 'mint', 'turquoise', 'lavender', 'pink']
  return colorNames[Math.floor(Math.random() * colorNames.length)]
})
</script>

<style scoped>
.artistic-shapes {
  pointer-events: none;
}
</style>

