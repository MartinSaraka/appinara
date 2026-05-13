<template>
  <section
    id="spolupraca"
    class="relative section-tall border-t overflow-hidden"
    style="border-color: var(--color-rule); background: var(--color-bg-subtle);"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio">№ 04 / Postup</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Od prvého kontaktu po
            <span class="accent-italic">funkčné riešenie.</span>
          </h2>
        </div>
      </div>

      <ol class="grid md:grid-cols-12 gap-0 border-t" style="border-color: var(--color-rule);">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="md:col-span-3 relative p-7 md:p-8 border-b md:border-b-0 md:border-r last:md:border-r-0 group"
          style="border-color: var(--color-rule);"
        >
          <span class="ordinal block text-[88px] md:text-[120px] leading-[0.85] mb-4 transition-colors" style="color: var(--color-fg);">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span aria-hidden="true" class="absolute top-8 right-6 hidden md:inline-block w-8 h-px" style="background: var(--color-accent);"></span>
          <p class="folio mb-3" style="color: var(--color-fg-meta);">Krok {{ index + 1 }} / 04</p>
          <h3 class="font-display text-xl md:text-[22px] font-medium leading-tight mb-3" style="color: var(--color-fg);">
            {{ step.title }}
          </h3>
          <p class="text-[14px] md:text-[15px] leading-relaxed text-pretty" style="color: var(--color-fg-muted);">
            {{ step.text }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Krátky rozbeh',
    text: 'Spoločne zosúladíme cieľ a obmedzenia — často cez audit alebo nezáväzný call.'
  },
  {
    title: 'Návrh a rozsah',
    text: 'Zrozumiteľný plán — čo presne vznikne a v akom poradí.'
  },
  {
    title: 'Realizácia',
    text: 'Vývoj s pravidelnými updatemi. Vidíte pokrok bez statusových callov.'
  },
  {
    title: 'Spustenie a doladenie',
    text: 'Nasadenie, krátke zaškolenie a úpravy podľa praxe po štarte.'
  }
]
</script>
