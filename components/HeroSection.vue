<template>
  <section class="relative pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden" style="background: var(--color-bg);">
    <!-- subtle dot grid as canvas structure -->
    <div class="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <!-- Top index row — editorial folio strip -->
      <div class="flex items-end justify-between pb-6 border-b mb-10 md:mb-14" style="border-color: var(--color-rule);">
        <div class="flex items-center gap-4">
          <span class="folio">№ 00 / Index</span>
          <span class="hidden md:inline folio opacity-50">— Vol. {{ new Date().getFullYear() }}</span>
        </div>
        <div class="hidden md:flex items-center gap-4 folio">
          <span>AI · Web · Tools</span>
          <span class="opacity-50">/</span>
          <span>SK · CZ · EN</span>
        </div>
      </div>

      <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
        <!-- Headline -->
        <div class="md:col-span-9">
          <p
            class="eyebrow no-rule mb-8 rise-in"
            style="color: var(--color-accent); animation-delay: 0ms;"
          >
            <span class="inline-block w-2.5 h-2.5" style="background: var(--color-accent);"></span>
            Pre slovenské firmy & prevádzky
          </p>

          <h1
            class="font-display text-display-xl font-medium tracking-tight rise-in"
            style="color: var(--color-fg); animation-delay: 80ms;"
          >
            <span class="block">AI a weby,</span>
            <span class="block">ktoré
              <span class="accent-italic">reálne</span>
              <span class="inline-block w-[0.4em]"></span>
              <span class="accent-italic">ušetria</span>
            </span>
            <span class="block">čas tímu.</span>
          </h1>
        </div>

        <!-- Right column — caption -->
        <div class="md:col-span-3 md:pl-6 md:border-l" style="border-color: var(--color-rule-soft);">
          <p
            class="text-base md:text-[17px] leading-relaxed rise-in"
            style="color: var(--color-fg-muted); animation-delay: 180ms;"
          >
            Freelance studio Martina Saraku.
            Pracujete priamo so mnou — bez project managerov, sales sekvencií a pitch deckov.
          </p>
        </div>
      </div>

      <!-- CTA row -->
      <div class="mt-12 md:mt-16 flex flex-wrap gap-3 items-center">
        <NuxtLink
          to="/balicky"
          class="btn-primary rise-in"
          style="animation-delay: 240ms;"
        >
          Pozrieť balíčky
          <span aria-hidden="true">→</span>
        </NuxtLink>
        <NuxtLink
          to="/ai-audit"
          class="btn-secondary rise-in"
          style="animation-delay: 300ms;"
        >
          Spustiť AI audit
        </NuxtLink>
        <a
          href="#contact"
          class="ml-2 md:ml-4 font-mono text-[11px] uppercase underline underline-offset-4 decoration-2 rise-in"
          style="letter-spacing:0.16em; color: var(--color-fg); text-decoration-color: var(--color-accent); animation-delay: 360ms;"
        >
          Alebo napíšte priamo
        </a>
      </div>

      <!-- Footer of hero — three-up proof -->
      <dl
        class="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-b divide-y md:divide-y-0 md:divide-x rise-in"
        style="border-color: var(--color-rule); --tw-divide-opacity:1; border-color: var(--color-rule); animation-delay: 420ms;"
      >
        <div
          v-for="(point, idx) in proofPoints"
          :key="point.label"
          class="py-6 md:py-7 md:px-7 first:md:pl-0 last:md:pr-0"
          :style="{ borderColor: 'var(--color-rule-soft)' }"
        >
          <div class="flex items-baseline gap-3 mb-3">
            <span class="ordinal text-3xl md:text-4xl">{{ String(idx + 1).padStart(2, '0') }}</span>
            <dt class="folio" style="color: var(--color-fg-muted);">{{ point.label }}</dt>
          </div>
          <dd class="text-[15px] md:text-base leading-snug text-pretty" style="color: var(--color-fg);">
            {{ point.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const proofPoints = [
  { label: 'Pracujem priamo', value: 'Žiadny project manager v strede. Mailom, callom alebo Slackom — vždy s tým, kto píše kód.' },
  { label: 'Fixný rozsah', value: 'Dohodneme čo presne vznikne, dokedy a za koľko. Bez postupne narastajúcej cenovky.' },
  { label: 'Vlastníte všetko', value: 'Kód, dáta, prístupy aj domény ostávajú u vás. Nie sú zamknuté u dodávateľa.' }
]
</script>

<style scoped>
/* fix divide-x with custom border colors */
dl > div + div { border-color: var(--color-rule-soft); }
@media (min-width: 768px) {
  dl { border-left: 0; border-right: 0; }
  dl > div + div { border-left: 1px solid var(--color-rule-soft); border-top: 0; }
}
</style>
