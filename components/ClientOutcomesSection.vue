<template>
  <section
    id="co-ziskate"
    class="relative section-tall border-t overflow-hidden"
    style="border-color: var(--color-rule); background: var(--color-bg);"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio">№ 03 / Z praxe</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Anonymizované príklady.
            <span class="accent-italic">Žiadne reklamné čísla.</span>
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-0 border-t" style="border-color: var(--color-rule);">
        <article
          v-for="(row, idx) in outcomes"
          :key="row.title"
          class="p-8 md:p-10 border-b md:last:border-r-0 md:[&:not(:last-child)]:border-r"
          style="border-color: var(--color-rule);"
        >
          <div class="flex items-center justify-between mb-6">
            <span class="stamp">Case · {{ String(idx + 1).padStart(2, '0') }}</span>
            <span class="folio">{{ row.badge }}</span>
          </div>

          <h3 class="font-display text-[28px] md:text-[36px] font-medium leading-[1.05] mb-5 text-balance" style="color: var(--color-fg);">
            {{ row.title }}
          </h3>

          <!-- Big bold metric callout -->
          <p class="font-display italic text-xl md:text-2xl font-medium mb-6 leading-snug" style="color: var(--color-accent);">
            → {{ row.metric }}
          </p>

          <hr class="my-5" style="border-color: var(--color-rule-soft);"/>

          <p class="text-[15px] md:text-base leading-relaxed text-pretty" style="color: var(--color-fg-muted);">
            {{ row.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const outcomes = [
  {
    badge: 'Služby · prevádzka',
    title: 'Rýchlejší prvý kontakt s klientom',
    metric: 'prvé odpovede v hodinách, nie 1–2 dňoch',
    text: 'Sezónna prevádzka s dopytmi z webu. Zjednotili sme prvú reakciu tak, aby sa nič nestratilo medzi tímom a Instagram DM-kami.'
  },
  {
    badge: 'B2B obchod',
    title: 'Menej stratených leadov',
    metric: 'menej ručného prepisovania medzi schránkou a CRM',
    text: 'Firma s pravidelnými dopytmi z viacerých zdrojov. Jednoduchší prehľad a follow-up — obchod rieši priority namiesto dohľadávania v inboxe.'
  }
]
</script>
