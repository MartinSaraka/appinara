<template>
  <section class="relative section-tall border-t overflow-hidden" style="border-color: var(--color-rule); background: var(--color-fg); color: var(--color-bg);">
    <!-- hatched ruling band at the top -->
    <div class="absolute top-0 left-0 right-0 h-1.5 hatched" aria-hidden="true"></div>

    <div class="container mx-auto px-6 max-w-6xl relative">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio" style="color: var(--color-bg);">№ 08 / Začať</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight mb-6 text-balance" style="color: var(--color-bg);">
            Tri spôsoby ako začať —
            <span class="font-display italic" style="color: var(--color-accent);">vyberte si podľa toho, kde ste.</span>
          </h2>
          <p class="text-base md:text-[17px] leading-relaxed max-w-2xl" style="color: var(--color-fg-meta);">
            Nemusíte mať pripravený brief ani dokumentáciu. Stačí krátky popis situácie — návrh ďalšieho kroku pošlem do dvoch pracovných dní.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 border-t" style="border-color: var(--color-bg);">
        <NuxtLink
          to="/balicky"
          class="group p-7 md:p-9 border-b md:border-b-0 md:border-r transition-colors"
          style="border-color: var(--color-bg);"
        >
          <div class="flex items-baseline justify-between mb-6">
            <span class="ordinal text-3xl md:text-4xl" style="color: var(--color-bg); opacity: 0.4;">A</span>
            <span class="font-mono text-[10px] uppercase" style="letter-spacing:0.18em; color: var(--color-fg-meta);">Hotové balíčky</span>
          </div>
          <p class="font-display text-2xl md:text-[28px] font-medium leading-tight mb-3" style="color: var(--color-bg);">Pozrieť balíčky</p>
          <p class="text-[14.5px] leading-relaxed mb-6" style="color: var(--color-fg-meta);">
            Tri tiery na web, AI chatbot a e-shop. Cena, scope a deadline na jednom mieste.
          </p>
          <span class="inline-flex items-center gap-2 font-mono text-[11px] uppercase border-b pb-1" style="letter-spacing:0.16em; color: var(--color-bg); border-color: var(--color-bg);">
            Otvoriť cenník <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>

        <NuxtLink
          to="/ai-audit"
          class="group p-7 md:p-9 border-b md:border-b-0 md:border-r relative"
          style="border-color: var(--color-bg); background: var(--color-accent); color: var(--color-accent-fg);"
        >
          <span class="absolute -top-3 left-7 inline-block px-3 py-1 font-mono text-[10px] uppercase" style="letter-spacing:0.18em; background: var(--color-bg); color: var(--color-fg);">★ Odporúčané</span>
          <div class="flex items-baseline justify-between mb-6">
            <span class="ordinal text-3xl md:text-4xl" style="color: var(--color-accent-fg); opacity: 0.5;">B</span>
            <span class="font-mono text-[10px] uppercase" style="letter-spacing:0.18em; color: var(--color-accent-fg); opacity: 0.7;">3–4 minúty</span>
          </div>
          <p class="font-display text-2xl md:text-[28px] font-medium leading-tight mb-3" style="color: var(--color-accent-fg);">Krátky AI audit</p>
          <p class="text-[14.5px] leading-relaxed mb-6" style="color: var(--color-accent-fg); opacity: 0.85;">
            5 otázok, 3–4 minúty. Vrátim odporúčanie, či má AI alebo automatizácia u vás zmysel.
          </p>
          <span class="inline-flex items-center gap-2 font-mono text-[11px] uppercase border-b pb-1" style="letter-spacing:0.16em; color: var(--color-accent-fg); border-color: var(--color-accent-fg);">
            Spustiť audit <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>

        <a
          href="#contact"
          class="group p-7 md:p-9 transition-colors"
        >
          <div class="flex items-baseline justify-between mb-6">
            <span class="ordinal text-3xl md:text-4xl" style="color: var(--color-bg); opacity: 0.4;">C</span>
            <span class="font-mono text-[10px] uppercase" style="letter-spacing:0.18em; color: var(--color-fg-meta);">Klasická cesta</span>
          </div>
          <p class="font-display text-2xl md:text-[28px] font-medium leading-tight mb-3" style="color: var(--color-bg);">Napíšem priamo</p>
          <p class="text-[14.5px] leading-relaxed mb-6" style="color: var(--color-fg-meta);">
            Krátky popis situácie. Odpoveď do dvoch pracovných dní s návrhom ďalšieho kroku.
          </p>
          <span class="inline-flex items-center gap-2 font-mono text-[11px] uppercase border-b pb-1" style="letter-spacing:0.16em; color: var(--color-bg); border-color: var(--color-bg);">
            Otvoriť formulár <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
