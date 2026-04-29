<template>
  <section
    id="why-us"
    class="relative section-tall border-t overflow-hidden"
    style="border-color: var(--color-rule); background: var(--color-bg-subtle);"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio">№ 06 / Manifest</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Bez agentúrnych marží.
            <span class="accent-italic">Bez náladovej cenovky.</span>
          </h2>
        </div>
      </div>

      <dl class="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l" style="border-color: var(--color-rule);">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="p-7 md:p-8 border-r border-b group transition-colors"
          style="border-color: var(--color-rule);"
        >
          <dt class="mb-4">
            <div class="flex items-baseline gap-3 mb-3">
              <span class="ordinal text-4xl md:text-[44px]" style="color: var(--color-accent);">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span aria-hidden="true" class="flex-1 border-b" style="border-color: var(--color-rule-soft);"></span>
            </div>
            <p class="font-display text-xl md:text-[22px] font-medium leading-tight text-balance" style="color: var(--color-fg);">
              {{ benefit.title }}
            </p>
          </dt>
          <dd class="text-[14.5px] md:text-[15px] leading-relaxed text-pretty" style="color: var(--color-fg-muted);">
            {{ benefit.description }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Pracujete priamo so mnou',
    description: 'Žiadny project manager, žiadny account manager. Otázku riešite s tým, kto píše kód. Rýchlejšie rozhodnutia, menej tichého telefónu.'
  },
  {
    title: 'Fixný rozsah, fixná cena',
    description: 'Pred štartom dohodneme konkrétny scope a cenovku. Ak sa vec rozšíri, otvorene to pomenujem skôr než mi pribudne hodina v exceli.'
  },
  {
    title: 'MVP do dvoch týždňov',
    description: 'Radšej spustíme jednoduchú verziu a dolaďujeme z reálneho používania, než pol roka kreslíme dokonalý obrázok do Figmy.'
  },
  {
    title: 'Vlastníte všetko',
    description: 'Kód, dáta, prístupy aj domény ostávajú u vás. Nie sú zamknuté u dodávateľa, takže ma viete kedykoľvek nahradiť.'
  },
  {
    title: 'Bez žargónu',
    description: 'Vysvetlím vám čo presne robím a prečo. Aj babičke, aj CFO. Žiadne „synergie", žiadne „leveraging AI capabilities".'
  },
  {
    title: 'Realistický rozsah',
    description: 'Keď sa AI alebo nový web nehodí, poviem to. Ušetrím vám peniaze, aj keď to znamená že nepríde objednávka.'
  }
]
</script>
