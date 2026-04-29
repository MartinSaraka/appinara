<template>
  <section id="services" class="relative section-tall border-t overflow-hidden" style="border-color: var(--color-rule); background: var(--color-bg-subtle);">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div class="md:col-span-3">
          <p class="folio">№ 02 / Služby</p>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display text-display-lg font-medium tracking-tight text-balance" style="color: var(--color-fg);">
            Štyri oblasti, kde to
            <span class="accent-italic">dáva zmysel.</span>
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-2 border-t" style="border-color: var(--color-rule);">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative p-7 md:p-10 border-b md:border-r transition-colors"
          :class="{
            'md:border-r-0': index % 2 === 1,
          }"
          style="border-color: var(--color-rule);"
        >
          <!-- Big serial number watermark -->
          <span class="ordinal absolute top-6 right-6 text-[100px] md:text-[140px] opacity-[0.07] select-none pointer-events-none" style="color: var(--color-fg);">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <p class="folio mb-5">{{ service.tag }}</p>
          <h3 class="font-display text-2xl md:text-[34px] font-medium leading-[1.05] mb-4 text-balance" style="color: var(--color-fg);">
            {{ service.title }}
          </h3>
          <p class="text-[15px] md:text-base leading-relaxed mb-6 text-pretty max-w-md" style="color: var(--color-fg-muted);">
            {{ service.description }}
          </p>

          <ul class="space-y-2 mb-7 text-sm md:text-[15px]" style="color: var(--color-fg);">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-3"
            >
              <span class="mt-2 w-2 h-2 shrink-0" style="background: var(--color-accent);" aria-hidden="true" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <NuxtLink
            v-if="service.link"
            :to="service.link"
            class="inline-flex items-center gap-2 font-mono text-[11px] uppercase border-b pb-1 transition-colors"
            style="letter-spacing: 0.16em; color: var(--color-fg); border-color: var(--color-fg);"
          >
            {{ service.linkLabel ?? 'Detail' }}
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    tag: 'AI integrácie',
    title: 'AI chatbot a asistent v texte zákazníka',
    description: 'Rieši opakujúce sa otázky, kvalifikuje dopyt a posunie ďalej k vám. Najčastejšie nasadenie do 1–2 týždňov.',
    features: [
      'FAQ bot s napojením na váš obsah',
      'Lead qualifier s prepisom do CRM/emailu',
      'Slovenská a česká diakritika natívne'
    ],
    link: '/sluzby/ai-chatbot',
    linkLabel: 'Cenník chatbotu'
  },
  {
    tag: 'Weby',
    title: 'Weby a landing pages, ktoré nesú obchod',
    description: 'Editorial dizajn, rýchle načítanie, SEO basics. Jeden web, nie tri varianty na A/B testovanie ktoré sa nikdy neurobí.',
    features: [
      'Nuxt 3 / Vue 3 / Tailwind',
      'CMS, ak ho chcete spravovať sami',
      'Hosting a nasadenie cez Vercel/Cloudflare'
    ],
    link: '/balicky#web',
    linkLabel: 'Webové balíčky'
  },
  {
    tag: 'E-commerce',
    title: 'E-shopy a online predaj',
    description: 'Pre menšie obchody, ktoré nepotrebujú Shopify Plus. Jednoduchá správa skladu, platby, doprava.',
    features: [
      'Stripe / GoPay / platobné brány',
      'Packeta a kuriéri',
      'Faktúry, sklad, zľavy'
    ],
    link: '/balicky#eshop',
    linkLabel: 'E-shop balíčky'
  },
  {
    tag: 'Interné nástroje',
    title: 'Dashboardy a interné systémy',
    description: 'Keď firma rastie, Excel prestáva stačiť. Vlastný malý CRM, evidencia projektov, reporty zo Stripe/Shoptetu.',
    features: [
      'Auth, role a multi-user prístup',
      'Real-time dáta cez Supabase / Postgres',
      'Napojenie na nástroje, ktoré už používate'
    ],
    link: '/balicky#custom',
    linkLabel: 'Custom riešenie'
  }
]
</script>
