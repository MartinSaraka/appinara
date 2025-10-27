<template>
  <div>
    <ScrollProgress />
    <NuxtPage />
    <ScrollToTop />
    <FloatingCTA />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'sk'
  }
})
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better focus states for accessibility */
*:focus-visible {
  outline: 2px solid #FF6B6B;
  outline-offset: 2px;
}
</style>

