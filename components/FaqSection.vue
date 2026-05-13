<template>
  <section id="faq" class="relative section-tall border-t" style="border-color: var(--color-rule); background: var(--color-bg);">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio">№ 07 / FAQ</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Otázky, ktoré
            <span class="accent-italic">padajú často.</span>
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-12 gap-0">
        <div class="md:col-span-1 hidden md:block"></div>
        <div class="md:col-span-11 border-t" style="border-color: var(--color-rule);">
          <details
            v-for="(item, index) in faqs"
            :key="index"
            class="group border-b transition-colors"
            style="border-color: var(--color-rule-soft);"
          >
            <summary
              class="cursor-pointer list-none flex items-baseline gap-6 py-6 md:py-7 px-2 md:px-4 focus:outline-none"
            >
              <span class="ordinal text-2xl md:text-[28px] shrink-0 w-10" style="color: var(--color-fg-meta);">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="flex-1 font-display text-xl md:text-[26px] font-medium leading-tight" style="color: var(--color-fg);">
                {{ item.q }}
              </span>
              <span class="font-mono text-2xl shrink-0 transition-transform group-open:rotate-45" style="color: var(--color-accent);" aria-hidden="true">+</span>
            </summary>
            <div class="grid md:grid-cols-12 px-2 md:px-4 pb-6 md:pb-7">
              <div class="md:col-start-2 md:col-span-10 text-[15px] md:text-base leading-relaxed text-pretty" style="color: var(--color-fg-muted);">
                {{ item.a }}
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'Pre koho sú služby určené?',
    a: 'Pre menšie a stredné firmy, ktoré chcú menej ručnej práce okolo dopytov, emailov alebo interných procesov.'
  },
  {
    q: 'Musím už vedieť presný projekt?',
    a: 'Nie. Stačí popísať situáciu — navrhnem rozumný ďalší krok.'
  },
  {
    q: 'Viete sa napojiť na to, čo už používame?',
    a: 'Áno, keď to dáva technický a biznisový zmysel — riešenia navrhujem s ohľadom na váš stack.'
  },
  {
    q: 'Robíte aj veci mimo AI?',
    a: 'Áno — weby, e-commerce, dashboardy a vlastné nástroje sú bežná súčasť práce.'
  }
]
</script>

<style scoped>
details > summary::-webkit-details-marker { display: none; }
</style>
