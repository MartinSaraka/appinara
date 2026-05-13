<template>
  <section id="pre-koho" class="relative section-tall border-t overflow-hidden" style="border-color: var(--color-rule); background: var(--color-bg);">
    <div class="container mx-auto px-6 max-w-6xl">
      <!-- folio header -->
      <div class="grid md:grid-cols-12 gap-6 mb-12 md:mb-16">
        <div class="md:col-span-3">
          <p class="folio">№ 01 / Pre koho</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Prevádzky. B2B. Firmy s
            <span class="accent-italic">prudkým rastom</span>
            dopytov.
          </h2>
        </div>
      </div>

      <!-- Editorial index — type list with leader dots -->
      <ol class="grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl">
        <li
          v-for="(item, idx) in items"
          :key="item.tag"
          class="group flex items-baseline gap-4 py-4 border-b transition-colors"
          style="border-color: var(--color-rule-soft);"
        >
          <span class="folio shrink-0 w-8" style="color: var(--color-fg-meta);">{{ String(idx + 1).padStart(2, '0') }}</span>
          <span class="font-display text-2xl md:text-[28px] font-medium tracking-tight transition-colors" style="color: var(--color-fg);">
            {{ item.tag }}
          </span>
          <span class="hidden md:block flex-1 mx-3 border-b border-dotted" style="border-color: var(--color-rule-soft);"></span>
          <span class="folio hidden md:inline shrink-0" style="color: var(--color-fg-meta);">{{ item.note }}</span>
        </li>
      </ol>

      <p class="mt-12 max-w-2xl text-base md:text-[17px] leading-relaxed text-pretty" style="color: var(--color-fg-muted);">
        Najväčší dopad tam, kde vzniká chaos v komunikácii, lead managemente alebo opakujúcich sa procesoch — keď Excel a inbox prestávajú stačiť.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { tag: 'Salóny & prevádzky',         note: 'Dopyty z webu / IG' },
  { tag: 'Služby na dopyt',                note: 'Hodinová fakturácia' },
  { tag: 'Agentúry',                        note: 'White-label vývoj' },
  { tag: 'B2B obchod',                      note: 'CRM & follow-up' },
  { tag: 'E-commerce',                      note: 'Stripe / Packeta' },
  { tag: 'Interné nástroje',                note: 'Mini-CRM, dashboardy' },
  { tag: 'Veľa ručnej administratívy',     note: 'Reporty, opakovanky' },
  { tag: 'Firmy s rastom dopytov',          note: 'Sezóna, kampane' },
]
</script>
