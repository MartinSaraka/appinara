<template>
  <section id="services" class="relative py-32 overflow-hidden dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 bg-gradient-to-b from-gray-50 via-white to-gray-50">
    <!-- Decorative parallax orb (pre-blurred gradient — cheap to composite) -->
    <div class="absolute inset-0 parallax-drift pointer-events-none" aria-hidden="true">
      <div class="absolute top-10 right-[-10%] w-[560px] h-[560px] rounded-full soft-orb"></div>
    </div>

    <div class="container mx-auto px-6 relative">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p v-motion-reveal class="eyebrow mb-4">01 · Služby</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Ako vám môžeme <span class="accent-text">pomôcť</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Riešenia, ktoré prinesú vášmu biznisu reálne výsledky a návratnosť investície
        </p>
      </div>

      <!-- Stacking cards — each pins below the nav and the next slides over it -->
      <div class="max-w-6xl mx-auto flex flex-col gap-10">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="stack-card sticky surface overflow-hidden rounded-none p-0"
          :style="{ top: `calc(var(--stack-base) + ${index} * var(--stack-step))` }"
        >
          <div class="grid lg:grid-cols-[.9fr_1.1fr] min-h-[23rem]">
            <ServiceVisual
              :type="service.visual"
              :number="`0${index + 1}`"
              :caption="service.caption"
              class="h-full min-h-[220px] lg:min-h-full"
            />
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-baseline justify-between gap-4 mb-4">
                <h3 class="text-2xl md:text-3xl font-display font-bold dark:text-white text-gray-900">
                  {{ service.title }}
                </h3>
                <span class="font-display font-bold text-lg accent-text tabular-nums flex-shrink-0" aria-hidden="true">0{{ index + 1 }}</span>
              </div>
              <p class="dark:text-slate-300 text-gray-700 mb-7 leading-relaxed max-w-xl">{{ service.description }}</p>
              <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-2 dark:text-slate-300 text-gray-600 text-sm"
            >
              <svg class="w-5 h-5 dark:text-primary-400 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feature }}</span>
            </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// (styles for stacking cards are at the bottom of this file)
const services = [
  {
    visual: 'ai' as const,
    caption: 'Automatizácia / 24—7',
    title: 'AI Integrácie & Chatboty',
    description: 'Automatizujte opakujúce sa úlohy, ušetrite čas a znížte náklady pomocou inteligentných AI riešení šitých na mieru vášmu biznisu.',
    features: [
      'AI chatboti pre zákaznícky servis 24/7',
      'Automatizácia e-mailovej komunikácie',
      'Inteligentné spracovanie dokumentov',
      'Predikcie a business analytics',
      'Integrácia s vašimi systémami'
    ]
  },
  {
    visual: 'web' as const,
    caption: 'Web / Konverzia',
    title: 'Webové stránky & Aplikácie',
    description: 'Moderné webové stránky a aplikácie s dokonalým dizajnom a UX, ktoré premieňajú návštevníkov na zákazníkov. Od landing pages po komplexné platformy.',
    features: [
      'Responzívny dizajn pre všetky zariadenia',
      'Vysoká konverzná optimalizácia',
      'SEO optimalizácia pre vyhľadávače',
      'Rýchle načítanie a moderný tech stack',
      'Bezpečnosť a škálovateľnosť'
    ]
  },
  {
    visual: 'shop' as const,
    caption: 'E-commerce / Predaj',
    title: 'E-commerce & Online predaj',
    description: 'Výkonný online obchod, ktorý predáva 24/7. S AI odporúčaniami produktov, automatickým skladom, platobnými bránami a prepojením na dopravu.',
    features: [
      'AI odporúčania pre zvýšené predaje',
      'Platobné brány a faktúry',
      'Automatická správa skladu',
      'Prepojenie s dopravcami',
      'Marketing a loyalty programy'
    ]
  },
  {
    visual: 'data' as const,
    caption: 'Dáta / Rozhodnutia',
    title: 'Business nástroje & Dashboardy',
    description: 'Vlastné firemné systémy pre efektívnejšiu prácu. CRM, dashboardy, project management a automatizácie pre váš rast.',
    features: [
      'Real-time business dashboardy',
      'CRM systémy pre lepší predaj',
      'Automatizácia workflow procesov',
      'Reporty a vizualizácie dát',
      'Integrácie s existujúcimi systémami'
    ]
  }
]
</script>

<style scoped>
.stack-card {
  --stack-base: 5.5rem;
  --stack-step: 1.1rem;
  min-height: 21rem;
  /* solid elevation so covered cards read as a stack, not a blur */
  box-shadow:
    0 -10px 32px -18px rgba(15, 23, 42, 0.25),
    0 28px 56px -28px rgba(15, 23, 42, 0.28);
}
.dark .stack-card {
  box-shadow:
    0 -10px 32px -18px rgba(0, 0, 0, 0.6),
    0 28px 56px -28px rgba(0, 0, 0, 0.65);
}
@media (max-width: 640px) {
  .stack-card {
    --stack-base: 4.75rem;
    --stack-step: 0.65rem;
    min-height: 0;
  }
}
</style>
