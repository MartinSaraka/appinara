<template>
  <div class="min-h-screen">
    <NuxtPage />
    <ChatWidget />
    <MobileStickyCTA />
  </div>
</template>

<script setup lang="ts">
// Initialize theme management
const { theme } = useTheme()
</script>
