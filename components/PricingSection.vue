<template>
  <!-- Balíky — vizuálne súrodenec sekcie Služby: blueprint mriežka, index v rohu,
       štítok v rámčeku, fialové fajky. Nič nové do dizajnového systému nepridáva. -->
  <section
    id="baliky"
    class="relative py-20 md:py-32 overflow-x-clip dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 bg-gradient-to-b from-gray-50 via-white to-gray-50"
  >
    <div class="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-24 left-[-12%] w-[520px] h-[520px] rounded-full soft-orb"></div>
    </div>

    <div class="container mx-auto px-6 relative">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-14">
        <p v-motion-reveal class="eyebrow mb-4">05 · Balíky</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Jasná cena, <span class="accent-text">žiadne prekvapenia</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Jednorazová cena za spustenie a mesačná správa, aby všetko fungovalo aj po roku. Presnú sumu potvrdíme po krátkom hovore.
        </p>
      </div>

      <!-- Kategórie -->
      <div v-motion-reveal :delay="160" class="flex justify-center mb-4">
        <div
          role="tablist"
          aria-label="Kategórie balíkov"
          class="pricing-tabs inline-flex max-w-full overflow-x-auto gap-1 p-1 rounded-full surface"
        >
          <button
            v-for="(cat, i) in categories"
            :id="`tab-${cat.id}`"
            :key="cat.id"
            role="tab"
            type="button"
            :aria-selected="active === i"
            :aria-controls="`panel-${cat.id}`"
            :tabindex="active === i ? 0 : -1"
            class="whitespace-nowrap rounded-full px-4 md:px-6 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-400/50"
            :class="active === i
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
              : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'"
            @click="active = i"
            @keydown.right.prevent="move(1)"
            @keydown.left.prevent="move(-1)"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Pre koho je kategória — mení sa s kartou, drží kontext -->
      <p
        class="text-center text-sm text-gray-600 dark:text-slate-400 mb-10 md:mb-14 min-h-[1.5rem]"
        aria-live="polite"
      >
        <span class="block sm:inline">{{ current.hint }}</span>
        <span class="hidden sm:inline text-gray-400 dark:text-slate-600" aria-hidden="true">&nbsp;·&nbsp;</span>
        <span class="block sm:inline whitespace-nowrap text-gray-500 dark:text-slate-500">Ceny bez DPH</span>
      </p>

      <!-- Karty -->
      <Transition name="plans" mode="out-in">
        <div
          :id="`panel-${current.id}`"
          :key="current.id"
          role="tabpanel"
          :aria-labelledby="`tab-${current.id}`"
          class="plans-grid grid gap-6 lg:gap-8 max-w-xl lg:max-w-6xl mx-auto lg:grid-cols-3 items-stretch"
        >
          <article
            v-for="(plan, index) in current.plans"
            :key="plan.name"
            class="plan-card surface flex flex-col overflow-hidden"
            :class="plan.featured ? 'is-featured order-first lg:order-none' : ''"
          >
            <!-- Blueprint hlavička s cenou -->
            <div class="plan-visual">
              <span class="plan-index">0{{ index + 1 }}</span>
              <span v-if="plan.featured" class="plan-flag">Najčastejšia voľba</span>

              <div class="plan-body relative z-[2] px-7 md:px-8">
                <h3 class="text-2xl font-display font-bold dark:text-white text-gray-900 mb-1.5">
                  {{ plan.name }}
                </h3>
                <p class="plan-for text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  {{ plan.for }}
                </p>

                <!-- Cena: jeden hlavný údaj, druhý podriadený. Nie jedna dlhá veta. -->
                <div class="mt-6">
                  <p class="plan-label">{{ plan.monthly ? 'Spustenie' : 'Mesačne' }}</p>
                  <p class="flex items-baseline gap-1.5">
                    <span v-if="plan.from" class="text-sm font-semibold text-gray-500 dark:text-slate-400">od</span>
                    <span class="text-4xl md:text-[2.75rem] leading-none font-display font-bold tabular-nums dark:text-white text-gray-900">
                      {{ plan.price }}
                    </span>
                    <span v-if="!plan.monthly" class="text-sm text-gray-500 dark:text-slate-400">/ mes.</span>
                  </p>
                  <div v-if="plan.monthly" class="plan-monthly">
                    <span>Mesačná správa</span>
                    <strong class="accent-text font-bold tabular-nums">{{ plan.monthly }}</strong>
                  </div>
                </div>
              </div>

              <span class="plan-caption">{{ plan.caption }}</span>
            </div>

            <!-- Obsah -->
            <div class="p-7 md:p-8 flex flex-col flex-1">
              <ul class="space-y-2.5 mb-8 flex-1">
                <li
                  v-for="item in plan.items"
                  :key="item"
                  class="flex items-start gap-2 dark:text-slate-300 text-gray-700 text-sm"
                >
                  <svg class="w-5 h-5 dark:text-primary-400 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <a
                href="#contact"
                :class="plan.featured ? 'btn-primary' : 'btn-secondary'"
                class="plan-cta group w-full !py-3.5 inline-flex items-center justify-center gap-2"
                :aria-label="`Vybrať balík ${plan.name} a prejsť na formulár`"
                @click="choose(plan)"
              >
                Vybrať {{ plan.name }}
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </Transition>

      <!-- Čo je v správe -->
      <div class="max-w-6xl mx-auto mt-14 md:mt-20">
        <div class="grid lg:grid-cols-[.9fr_1.1fr] surface overflow-hidden plan-note">
          <div class="plan-visual flex items-center">
            <span class="plan-index">+</span>
            <div class="relative z-[2] p-8 md:p-10">
              <h3 class="text-2xl md:text-3xl font-display font-bold dark:text-white text-gray-900 mb-3">
                Čo je v mesačnej správe
              </h3>
              <p class="text-gray-700 dark:text-slate-400 leading-relaxed">
                Web sa nekončí spustením. Správa znamená, že sa oň niekto stará, kým vy robíte svoju prácu.
              </p>
            </div>
            <span class="plan-caption">Prevádzka / Pokoj</span>
          </div>
          <div class="p-8 md:p-10">
            <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <li
                v-for="item in careItems"
                :key="item"
                class="flex items-start gap-2 dark:text-slate-300 text-gray-700 text-sm"
              >
                <svg class="w-5 h-5 dark:text-primary-400 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="mt-7 text-sm text-gray-500 dark:text-slate-500">
              Správu môžete zrušiť s mesačnou výpovednou lehotou. Web, doména aj dáta zostávajú vaše. Ceny sú bez DPH.
            </p>
          </div>
        </div>

        <!-- Nerozhodnutý? -->
        <div class="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p class="text-gray-700 dark:text-slate-300">
            Neviete, ktorý balík sedí? Za 20 minút vám povieme, čo naozaj potrebujete, a čo nie.
          </p>
          <a href="#contact" class="btn-primary !py-3 !px-6 whitespace-nowrap">Konzultácia zdarma</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Plan {
  name: string
  for: string
  price: string
  from?: boolean
  priceNote: string
  monthly?: string
  caption: string
  featured?: boolean
  items: string[]
}

interface Category {
  id: string
  label: string
  /** Jedna veta pod prepínačom — pre koho kategória je */
  hint: string
  /** Hodnota pre select „Typ projektu“ v kontaktnom formulári */
  projectType: string
  plans: Plan[]
}

const categories: Category[] = [
  {
    id: 'weby',
    label: 'Weby',
    hint: 'Nový web alebo redizajn toho, ktorý máte',
    projectType: 'web-app',
    plans: [
      {
        name: 'Štart',
        for: 'Pre živnostníkov a malé prevádzky, ktoré potrebujú byť dohľadateľné.',
        price: '490 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '19 €',
        caption: 'Web / Vizitka',
        items: [
          'Jednostránkový web, mobil aj desktop',
          'Kontaktný alebo rezervačný formulár',
          'Napojenie na Google profil a mapu',
          'Základné SEO a rýchle načítanie',
          'Spustenie do 2 týždňov'
        ]
      },
      {
        name: 'Biznis',
        for: 'Pre firmy, ktoré chcú, aby web prinášal dopyty a šetril čas.',
        price: '1 490 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '59 €',
        caption: 'Web / Konverzia',
        featured: true,
        items: [
          'Viacstránkový web s úpravou obsahu',
          'AI asistent, ktorý odpovedá zákazníkom 24/7',
          'Online objednávanie alebo rezervácie',
          'Meranie návštevnosti a dopytov',
          '1 hodina úprav mesačne v cene'
        ]
      },
      {
        name: 'Rast',
        for: 'Pre firmy, ktoré chcú automatizovať procesy a prepojiť systémy.',
        price: '3 490 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '149 €',
        caption: 'Web / Na mieru',
        items: [
          'Web alebo aplikácia na mieru',
          'Integrácie (platby, CRM, sklad, kalendár)',
          'Automatizácia opakovanej práce',
          'Prioritná podpora a mesačný report',
          '3 hodiny vývoja mesačne v cene'
        ]
      }
    ]
  },
  {
    id: 'eshop',
    label: 'E-shopy',
    hint: 'Predaj online od prvej objednávky po sklad a faktúry',
    projectType: 'ecommerce',
    plans: [
      {
        name: 'E-shop Štart',
        for: 'Pre prvý online predaj s menším sortimentom.',
        price: '1 290 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '39 €',
        caption: 'Predaj / Prvé objednávky',
        items: [
          'Do 50 produktov s variantmi',
          'Platba kartou a na dobierku',
          'Doprava cez Packetu alebo kuriéra',
          'Automatické e-maily k objednávke',
          'Obchodné podmienky a GDPR pripravené'
        ]
      },
      {
        name: 'E-shop Biznis',
        for: 'Pre obchody, ktoré chcú predávať viac bez viac práce.',
        price: '2 490 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '79 €',
        caption: 'Predaj / Automatizácia',
        featured: true,
        items: [
          'Neobmedzený počet produktov',
          'Faktúry a sklad bez ručného prepisovania',
          'AI odporúčania a opustené košíky',
          'Zľavové kódy a zákaznícke účty',
          '2 hodiny úprav mesačne v cene'
        ]
      },
      {
        name: 'E-shop Pro',
        for: 'Pre obchody s vlastnými procesmi, skladom a viacerými kanálmi.',
        price: '4 990 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '149 €',
        caption: 'Predaj / Škálovanie',
        items: [
          'Prepojenie s účtovníctvom a ERP',
          'Predaj aj na marketplacoch',
          'Vlastné pravidlá cien a dopravy',
          'Dashboard tržieb a marže',
          'Prioritná podpora a mesačný report'
        ]
      }
    ]
  },
  {
    id: 'ai',
    label: 'AI & automatizácia',
    hint: 'Doplnky k vášmu súčasnému webu a firemným procesom',
    projectType: 'ai-integration',
    plans: [
      {
        name: 'AI chatbot',
        for: 'Doplnok k vášmu existujúcemu webu. Odpovedá, kým vy spíte.',
        price: '390 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '29 €',
        caption: 'AI / 24—7',
        items: [
          'Naučený na vaše služby, ceny a FAQ',
          'Funguje na akomkoľvek webe',
          'Posiela dopyty rovno na váš e-mail',
          'Po slovensky, česky aj anglicky',
          'Mesačný prehľad otázok zákazníkov'
        ]
      },
      {
        name: 'Automatizácia',
        for: 'Keď sa v tíme opakovane prepisujú rovnaké údaje.',
        price: '690 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '39 €',
        caption: 'Procesy / Čas',
        featured: true,
        items: [
          'Formuláre a e-maily rovno do tabuľky či CRM',
          'Automatické faktúry a pripomienky',
          'Spracovanie objednávok a dokumentov',
          'Upozornenia na to, čo treba riešiť',
          'Úspora hodín mesačne, ktorú viete zmerať'
        ]
      },
      {
        name: 'AI pre tím',
        for: 'Interný asistent, ktorý pozná vaše dokumenty a postupy.',
        price: '1 290 €',
        from: true,
        priceNote: 'jednorazovo',
        monthly: '79 €',
        caption: 'AI / Firemné znalosti',
        items: [
          'Odpovedá z vašich smerníc a dokumentov',
          'Pomoc pri e-mailoch, ponukách a reportoch',
          'Prístup len pre váš tím',
          'Dáta zostávajú vaše, bez tréningu modelov',
          'Zaškolenie tímu v cene'
        ]
      }
    ]
  },
  {
    id: 'sprava',
    label: 'Správa webu',
    hint: 'Pre weby, ktoré už máte — aj od iného dodávateľa',
    projectType: 'maintenance',
    plans: [
      {
        name: 'Údržba',
        for: 'Pre existujúci web, ktorý má bežať bez starostí.',
        price: '29 €',
        priceNote: 'mesačne',
        caption: 'Prevádzka / Istota',
        items: [
          'Hosting, SSL a denné zálohy',
          'Bezpečnostné aktualizácie',
          'Monitoring dostupnosti webu',
          'Oprava chýb do 48 hodín',
          'Aj pre weby, ktoré sme nerobili my'
        ]
      },
      {
        name: 'Správa+',
        for: 'Keď chcete web meniť bez toho, aby ste sa to učili.',
        price: '79 €',
        priceNote: 'mesačne',
        caption: 'Prevádzka / Úpravy',
        featured: true,
        items: [
          'Všetko z balíka Údržba',
          '2 hodiny úprav mesačne v cene',
          'Nové texty, fotky, akcie a cenníky',
          'Mesačný prehľad návštevnosti a dopytov',
          'Reakcia do 24 hodín'
        ]
      },
      {
        name: 'Rastový paušál',
        for: 'Pre firmy, ktoré chcú, aby ich web každý mesiac rástol.',
        price: '199 €',
        priceNote: 'mesačne',
        caption: 'Prevádzka / Rast',
        items: [
          'Všetko z balíka Správa+',
          '2 nové články mesačne pre Google',
          'SEO a optimalizácia konverzie',
          'Mesačný hovor nad číslami',
          '4 hodiny práce mesačne v cene'
        ]
      }
    ]
  }
]

const careItems = [
  'Hosting, SSL a denné zálohy',
  'Bezpečnostné aktualizácie',
  'Drobné úpravy textov a fotiek',
  'Monitoring, že web beží',
  'Mesačný prehľad návštevnosti a dopytov',
  'Jeden kontakt, ktorý web pozná'
]

const active = ref(0)
const current = computed(() => categories[active.value])

const selected = useSelectedPackage()

function choose(plan: Plan) {
  const cat = current.value
  const priceLine = plan.monthly
    ? `od ${plan.price} + ${plan.monthly} mesačne`
    : `${plan.price} mesačne`
  selected.value = {
    name: plan.name,
    category: cat.label,
    projectType: cat.projectType,
    priceLine
  }
}

function move(dir: number) {
  active.value = (active.value + dir + categories.length) % categories.length
  nextTick(() => {
    document.getElementById(`tab-${categories[active.value].id}`)?.focus()
  })
}
</script>

<style scoped>
.plan-card,
.plan-note {
  --visual-fg: #1e293b;
  --visual-bg: #ffffff;
  --visual-muted: #f8fafc;
  --visual-rule: rgba(99, 102, 241, .18);
  --visual-rule-soft: rgba(15, 23, 42, .13);
  --visual-accent: #6366f1;
  --visual-tint: rgba(99, 102, 241, .10);
  box-shadow:
    0 -10px 32px -18px rgba(15, 23, 42, 0.18),
    0 28px 56px -28px rgba(15, 23, 42, 0.26);
  transition: transform .35s cubic-bezier(.2, .7, .2, 1), box-shadow .35s ease, border-color .3s ease;
}
.plan-card:focus-within { border-color: var(--visual-accent); }
@media (hover: hover) {
  .plan-card:hover {
    transform: translateY(-6px);
    box-shadow:
      0 -10px 32px -18px rgba(15, 23, 42, 0.2),
      0 36px 64px -28px rgba(79, 70, 229, 0.35);
  }
}
.plan-card.is-featured {
  border-color: var(--visual-accent);
  box-shadow:
    0 0 0 1px var(--visual-accent),
    0 36px 70px -30px rgba(79, 70, 229, 0.45);
}
/* Odporúčaná karta: jemný fialový nádych v mriežke, na desktope vyzdvihnutá */
.plan-card.is-featured .plan-visual {
  background:
    linear-gradient(var(--visual-rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--visual-rule) 1px, transparent 1px),
    linear-gradient(180deg, var(--visual-tint), transparent 85%),
    var(--visual-muted);
  background-size: 28px 28px, 28px 28px, 100% 100%, auto;
}
@media (min-width: 1024px) {
  .plan-card.is-featured { transform: translateY(-12px); }
  @media (hover: hover) {
    .plan-card.is-featured:hover { transform: translateY(-18px); }
  }
}

/* Cena — štítok, hlavné číslo, podriadený riadok správy */
.plan-label {
  margin-bottom: .35rem;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--visual-accent);
}
.plan-monthly {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: .9rem;
  padding-top: .75rem;
  border-top: 1px dashed var(--visual-rule-soft);
  font-size: .875rem;
  color: var(--visual-fg);
  opacity: .92;
}
.plan-monthly strong { font-size: 1rem; }
.plan-for { min-height: 2.75rem; }

/* Blueprint hlavička — rovnaká mriežka ako ServiceVisual */
.plan-visual {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(var(--visual-rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--visual-rule) 1px, transparent 1px),
    var(--visual-muted);
  background-size: 28px 28px;
  border-bottom: 1px solid var(--visual-rule-soft);
}
.plan-note .plan-visual {
  border-bottom: 0;
  border-right: 1px solid var(--visual-rule-soft);
  min-height: 220px;
}
.plan-visual::after {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px solid var(--visual-rule-soft);
  pointer-events: none;
}
.plan-index {
  position: absolute;
  top: 17px;
  right: 20px;
  z-index: 3;
  font: 700 11px/1 var(--font-sans, sans-serif);
  letter-spacing: .12em;
  color: var(--visual-accent);
}
.plan-caption,
.plan-flag {
  position: absolute;
  z-index: 3;
  padding: 5px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .11em;
  text-transform: uppercase;
  line-height: 1.2;
}
.plan-caption {
  left: 20px;
  bottom: 16px;
  background: var(--visual-bg);
  border: 1px solid var(--visual-rule-soft);
  color: var(--visual-fg);
}
.plan-flag {
  left: 20px;
  top: 14px;
  background: #4f46e5;
  color: #fff;
  box-shadow: 0 6px 16px -6px rgba(79, 70, 229, .6);
}
/* Miesto hore pre štítok „Najčastejšia voľba“ a index, dole pre caption */
.plan-body { padding: 3.25rem 1.75rem 3.5rem; }
@media (min-width: 768px) { .plan-body { padding-left: 2rem; padding-right: 2rem; } }

.pricing-tabs { scrollbar-width: none; }
.pricing-tabs::-webkit-scrollbar { display: none; }

/* Prepnutie kategórie */
.plans-enter-active,
.plans-leave-active { transition: opacity .28s ease, transform .28s ease; }
.plans-enter-from { opacity: 0; transform: translateY(14px); }
.plans-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 1023px) {
  .plan-note .plan-visual { border-right: 0; border-bottom: 1px solid var(--visual-rule-soft); min-height: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .plan-card,
  .plans-enter-active,
  .plans-leave-active { transition: none; }
  .plan-card:hover { transform: none; }
}
</style>

<!-- Dark overrides unscoped — rovnaký dôvod ako v ServiceVisual.vue -->
<style>
.dark .plan-card,
.dark .plan-note {
  --visual-fg: #e2e8f0;
  --visual-bg: #0f172a;
  --visual-muted: #111827;
  --visual-rule: rgba(129, 140, 248, .12);
  --visual-rule-soft: rgba(255, 255, 255, .12);
  --visual-accent: #818cf8;
  --visual-tint: rgba(99, 102, 241, .16);
}
</style>
