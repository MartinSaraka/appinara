<template>
  <section aria-label="Manifest" class="relative py-20 md:py-28 bg-gray-50 dark:bg-slate-900">
    <div class="container mx-auto px-6">
      <p class="manifesto mx-auto max-w-4xl text-center font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.18]">
        Žiadne šablóny. Žiadne vymyslené referencie. Len poctivá práca,
        ktorú si viete pozrieť naživo — a weby, ktoré zarábajú.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Fallback: plain solid text */
.manifesto {
  color: #0f172a;
}
.dark .manifesto {
  color: #f1f5f9;
}

/* Scroll-scrubbed sweep: the text "lights up" left-to-right, line by line,
   tied directly to scroll position — works forwards and backwards. */
@supports (animation-timeline: view()) and (-webkit-background-clip: text) {
  @media (prefers-reduced-motion: no-preference) {
    .manifesto {
      color: transparent;
      /* diagonal, soft-edged sweep — follows reading direction */
      background-image: linear-gradient(115deg, #0f172a 44%, #cbd5e1 56%);
      background-size: 260% 100%;
      background-position: 100% 0;
      -webkit-background-clip: text;
      background-clip: text;
      animation: manifesto-sweep linear both;
      animation-timeline: view();
      animation-range: entry 75% cover 50%;
    }
    .dark .manifesto {
      color: transparent;
      background-image: linear-gradient(115deg, #f1f5f9 44%, #334155 56%);
    }
  }
}
@keyframes manifesto-sweep {
  to {
    background-position: 0% 0;
  }
}
</style>
