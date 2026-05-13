<template>
  <section
    aria-hidden="true"
    class="relative border-y overflow-hidden"
    style="border-color: var(--color-rule); background: var(--color-fg); color: var(--color-bg);"
  >
    <div class="flex w-max animate-marquee py-3 md:py-4">
      <div
        v-for="copy in 2"
        :key="copy"
        class="flex items-center gap-10 md:gap-14 flex-shrink-0 pr-10 md:pr-14"
      >
        <span
          v-for="item in items"
          :key="`${copy}-${item}`"
          class="font-mono text-[11px] md:text-[12px] uppercase whitespace-nowrap inline-flex items-center gap-3"
          style="letter-spacing: 0.18em;"
        >
          <span aria-hidden="true" class="inline-block w-1.5 h-1.5" style="background: var(--color-accent);" />
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    items?: string[]
  }>(),
  {
    items: () => [
      'AI integrácie',
      'Nuxt 3 / Vue 3',
      'OpenAI · Anthropic',
      'Stripe · GoPay',
      'Supabase · Postgres',
      'Interné dashboardy',
      'E-commerce',
      'Editorial weby',
      'Fixný rozsah',
      'Bez agentúrnych marží',
      'Slovensko · vzdialene',
      'Bratislava · stretnutia',
    ]
  }
)
</script>

<style scoped>
.animate-marquee {
  animation: marquee 38s linear infinite;
}
.animate-marquee:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
