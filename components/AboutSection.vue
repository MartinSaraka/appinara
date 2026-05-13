<template>
  <section
    id="o-mne"
    class="relative section-tall border-t overflow-hidden"
    style="border-color: var(--color-rule); background: var(--color-bg);"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <!-- Left col — folio + photo -->
        <div class="md:col-span-5 order-2 md:order-1">
          <p class="folio mb-6 md:hidden">№ 05 / Kto je za tým</p>
          <div class="relative max-w-sm md:max-w-none">
            <PhotoSlot
              :src="null"
              expected-path="public/photos/portrait.jpg"
              label="Portrét — Martin Saraka"
              alt="Martin Saraka — zakladateľ Appinara"
              ratio="3/4"
              class="relative border"
              style="border-color: var(--color-rule);"
            />
            <!-- Editorial caption -->
            <div class="mt-4 flex items-baseline justify-between font-mono text-[10px] uppercase" style="letter-spacing: 0.18em; color: var(--color-fg-meta);">
              <span>Fig. 01</span>
              <span>Martin Saraka, Bratislava</span>
            </div>
          </div>
        </div>

        <!-- Right col — story -->
        <div class="md:col-span-7 order-1 md:order-2">
          <p class="folio hidden md:block mb-6">№ 05 / Kto je za tým</p>

          <h2 class="font-display text-display-lg font-medium tracking-tight mb-8 text-balance leading-[1.0]" style="color: var(--color-fg);">
            Pracujete priamo so mnou —
            <span class="accent-italic">bez agentúrnej vrstvy.</span>
          </h2>

          <!-- Drop-cap intro paragraph (editorial flourish) -->
          <p class="text-base md:text-[18px] leading-relaxed mb-5 text-pretty drop-cap" style="color: var(--color-fg);">
            Som Martin, freelance developer zo Slovenska. Robím weby a AI integrácie pre menšie a stredné firmy — najmä prevádzky, B2B obchody a interné nástroje.
          </p>
          <p class="text-[15px] md:text-base leading-relaxed mb-8 text-pretty" style="color: var(--color-fg-muted);">
            Stack: Nuxt 3, Vue 3, TypeScript, Tailwind, OpenAI, Anthropic, Stripe, Supabase, Postgres, Vercel. K tomu n8n a Make.com pre automatizácie. Výber technológií si robím podľa toho, čo dáva pre vás zmysel — nie podľa toho, čo sa najlepšie predáva.
          </p>

          <hr class="mb-8" style="border-color: var(--color-rule);" />

          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/o-mne" class="btn-secondary">
              Celý príbeh
              <span aria-hidden="true">→</span>
            </NuxtLink>
            <a
              href="https://www.linkedin.com/company/appinara/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.drop-cap::first-letter {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 4.2em;
  line-height: 0.85;
  float: left;
  margin: 0.05em 0.12em 0 0;
  color: var(--color-accent);
}
</style>
