<template>
  <section
    id="portfolio"
    class="relative border-t border-gray-200/80 dark:border-slate-800 bg-bone dark:bg-anthracite overflow-hidden"
  >
    <div class="container mx-auto px-6 pt-20 md:pt-28 pb-10 md:pb-12">
      <div class="max-w-2xl">
        <p class="eyebrow mb-4">Príklady</p>
        <h2 class="text-display-lg font-display font-normal text-gray-900 dark:text-white text-balance">
          Tri scenáre,
          <span class="italic gradient-text">ktoré sa opakujú.</span>
        </h2>
      </div>
    </div>

    <div class="relative">
      <article
        v-for="(project, i) in projects"
        :key="project.title"
        class="relative section-tall overflow-hidden"
        :class="i % 2 === 0 ? 'bg-bone dark:bg-anthracite' : 'bg-gray-50 dark:bg-slate-900/60'"
      >
        <MeshGradientBg :palette="project.palette" :grain="true" />
        <div class="absolute inset-0 bg-white/55 dark:bg-slate-950/60 backdrop-blur-[2px]" aria-hidden="true" />

        <div class="container mx-auto px-6 relative">
          <div
            class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            :class="i % 2 === 0 ? '' : 'lg:[direction:rtl]'"
          >
            <div
              class="lg:col-span-7 [direction:ltr]"
              v-motion-fade-visible
            >
              <DeviceFrame :device="project.device" :url="project.url" container-class="relative">
                <component :is="project.preview" />
              </DeviceFrame>
            </div>

            <div class="lg:col-span-5 [direction:ltr]">
              <p class="text-display-2xl font-display font-bold leading-none text-transparent select-none mb-4" :style="numberStyle(project.palette)" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </p>
              <p class="eyebrow mb-3">{{ project.category }}</p>
              <h3 class="text-display-md font-display font-bold text-gray-900 dark:text-white text-balance mb-4">
                {{ project.title }}
              </h3>
              <p class="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-6 text-pretty">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-7">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-medium"
                >
                  {{ tag }}
                </span>
              </div>
              <button
                type="button"
                class="inline-flex items-center gap-1.5 text-base font-semibold text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 group"
                @click="openProject(project)"
              >
                Pozrieť detail
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      <div class="bg-bone dark:bg-anthracite border-t border-gray-200/80 dark:border-slate-800 py-16 md:py-20 text-center">
        <p class="text-base md:text-lg text-gray-600 dark:text-slate-400 mb-3">
          Reálne referencie poskytnem na vyžiadanie po prvom kontakte.
        </p>
        <NuxtLink
          to="/riesenia"
          class="inline-flex items-center gap-1.5 text-base font-semibold text-primary-700 dark:text-primary-300 group"
        >
          Pozrieť všetky typy riešení
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          @click="closeProject"
        >
          <Transition
            enter-active-class="transition-all duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="selectedProject"
              class="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
              @click.stop
            >
              <button
                type="button"
                class="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center bg-gray-100/80 dark:bg-slate-800/80 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors backdrop-blur"
                aria-label="Zavrieť detail"
                @click="closeProject"
              >
                <svg class="w-5 h-5 text-gray-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="relative h-44 md:h-56 overflow-hidden rounded-t-3xl">
                <MeshGradientBg :palette="selectedProject.palette" :grain="true" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <p class="text-display-2xl font-display font-bold text-white/80 leading-none">
                    {{ selectedProject.numberLabel }}
                  </p>
                </div>
                <span class="absolute top-5 left-5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white border border-white/25">
                  {{ selectedProject.category }}
                </span>
              </div>

              <div class="p-6 md:p-10">
                <h2 class="text-display-md font-display font-bold text-gray-900 dark:text-white mb-3 text-balance">
                  {{ selectedProject.title }}
                </h2>
                <p class="text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-8">
                  {{ selectedProject.fullDescription }}
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                  <div class="rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-950/50 p-5">
                    <h3 class="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-3">Východisko</h3>
                    <p class="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">{{ selectedProject.before }}</p>
                  </div>
                  <div class="rounded-2xl border border-emerald-200/60 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/30 p-5">
                    <h3 class="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 mb-3">Po nasadení</h3>
                    <p class="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">{{ selectedProject.after }}</p>
                  </div>
                </div>

                <div class="mb-8">
                  <h3 class="text-base font-display font-bold text-gray-900 dark:text-white mb-3">Čo zahŕňa</h3>
                  <ul class="space-y-2">
                    <li v-for="f in selectedProject.features" :key="f" class="flex items-start gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                      <svg class="w-4 h-4 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{{ f }}</span>
                    </li>
                  </ul>
                </div>

                <div class="mb-8">
                  <h3 class="text-base font-display font-bold text-gray-900 dark:text-white mb-3">Stack</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in selectedProject.tags" :key="tag" class="px-3 py-1 rounded-md bg-primary-50 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200/60 dark:border-primary-500/20">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-3">
                  <a href="/#contact" class="btn-primary" @click="closeProject">Chcem niečo podobné</a>
                  <NuxtLink to="/ai-audit" class="btn-secondary" @click="closeProject">Najprv AI audit</NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { h, ref, onUnmounted } from 'vue'

type Palette = '1' | '2' | '3'

type Project = {
  title: string
  category: string
  description: string
  fullDescription: string
  before: string
  after: string
  features: string[]
  tags: string[]
  palette: Palette
  numberLabel: string
  device: 'browser' | 'phone' | 'laptop'
  url?: string
  preview: any
}

function numberStyle(palette: Palette) {
  // Each project gets a distinct single-color editorial outline number,
  // anchored in the cinnabar / marigold / lichen brand palette.
  const stops: Record<Palette, string> = {
    '1': 'linear-gradient(135deg, rgba(220,47,26,0.65), rgba(220,47,26,0.18))',
    '2': 'linear-gradient(135deg, rgba(216,148,34,0.65), rgba(216,148,34,0.18))',
    '3': 'linear-gradient(135deg, rgba(110,130,102,0.65), rgba(110,130,102,0.18))'
  }
  return {
    backgroundImage: stops[palette],
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontStyle: 'italic'
  }
}

const ChatPreview = {
  render() {
    return h('div', { class: 'w-full h-full bg-bone-50 dark:bg-anthracite-elev halftone-field-overlay-soft p-5 flex flex-col gap-3 relative' }, [
      h('div', { class: 'flex items-center gap-2 mb-1' }, [
        h('span', { class: 'w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-fuchsia-500' }),
        h('div', null, [
          h('p', { class: 'text-xs font-semibold text-gray-900 dark:text-white' }, 'Asistent · prevádzka'),
          h('p', { class: 'text-[10px] text-emerald-600 dark:text-emerald-400' }, '● online')
        ])
      ]),
      h('div', { class: 'flex justify-end' }, [
        h('div', { class: 'max-w-[78%] rounded-2xl rounded-br-md bg-gray-100 dark:bg-slate-800 px-3 py-1.5 text-xs text-gray-800 dark:text-slate-200' }, 'Sú voľné termíny tento týždeň?')
      ]),
      h('div', { class: 'flex' }, [
        h('div', { class: 'max-w-[80%] rounded-2xl rounded-bl-md bg-primary-50 dark:bg-primary-500/15 border border-primary-200/60 dark:border-primary-500/20 px-3 py-1.5 text-xs text-gray-800 dark:text-slate-100' }, [
          'Áno — voľné: ',
          h('strong', { class: 'text-primary-700 dark:text-primary-300' }, 'Štv 14:30'),
          ' a ',
          h('strong', { class: 'text-primary-700 dark:text-primary-300' }, 'Pia 11:00')
        ])
      ]),
      h('div', { class: 'mt-auto pt-3 border-t border-gray-100 dark:border-slate-800 grid grid-cols-3 text-center' }, [
        h('div', null, [
          h('p', { class: 'text-base font-display font-bold text-gray-900 dark:text-white' }, '−68 %'),
          h('p', { class: 'text-[9px] uppercase tracking-wider text-gray-500 dark:text-slate-500' }, 'čas odpovede')
        ]),
        h('div', null, [
          h('p', { class: 'text-base font-display font-bold text-gray-900 dark:text-white' }, '24/7'),
          h('p', { class: 'text-[9px] uppercase tracking-wider text-gray-500 dark:text-slate-500' }, 'prvý kontakt')
        ]),
        h('div', null, [
          h('p', { class: 'text-base font-display font-bold text-gray-900 dark:text-white' }, '3 kanály'),
          h('p', { class: 'text-[9px] uppercase tracking-wider text-gray-500 dark:text-slate-500' }, 'v 1 mieste')
        ])
      ])
    ])
  }
}

const PipelinePreview = {
  render() {
    return h('div', { class: 'w-full h-full bg-bone-50 dark:bg-anthracite-elev p-5 flex flex-col gap-2.5 relative', style: 'background-image: radial-gradient(ellipse at 88% 12%, rgba(216,148,34,0.18) 0px, transparent 55%);' }, [
      h('div', { class: 'flex items-center justify-between mb-1' }, [
        h('p', { class: 'text-xs font-semibold text-gray-900 dark:text-white' }, 'Lead pipeline · tento týždeň'),
        h('span', { class: 'text-[10px] font-mono text-gray-400 dark:text-slate-500' }, '24 nových')
      ]),
      ...['Email · vážny dopyt', 'Web formulár · cenník', 'Instagram · termín', 'Email · zvedavec'].map((label, i) =>
        h('div', { class: 'flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900/70 border border-gray-100 dark:border-slate-800' }, [
          h('span', { class: ['w-2 h-2 rounded-full flex-shrink-0', i === 3 ? 'bg-gray-300' : 'bg-emerald-500'].join(' ') }),
          h('p', { class: 'text-xs text-gray-700 dark:text-slate-300 flex-1' }, label),
          h('span', { class: ['text-[10px] px-2 py-0.5 rounded-full font-medium', i === 3 ? 'bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'].join(' ') }, i === 3 ? 'low' : 'follow-up')
        ])
      ),
      h('div', { class: 'mt-auto pt-2 flex items-center justify-between text-[11px] text-gray-500 dark:text-slate-500' }, [
        h('span', null, 'Auto-follow-up po 48 h'),
        h('span', { class: 'text-emerald-600 dark:text-emerald-400' }, '↗ +34 % týždeň')
      ])
    ])
  }
}

const DashboardPreview = {
  render() {
    return h('div', { class: 'w-full h-full bg-bone-50 dark:bg-anthracite-elev p-5 flex flex-col gap-3 relative', style: 'background-image: radial-gradient(ellipse at 12% 88%, rgba(110,130,102,0.20) 0px, transparent 55%);' }, [
      h('div', { class: 'flex items-center justify-between' }, [
        h('p', { class: 'text-xs font-semibold text-gray-900 dark:text-white' }, 'Prehľad firmy · marec'),
        h('div', { class: 'flex gap-1' }, [
          h('span', { class: 'w-2 h-2 rounded-full bg-red-400/70' }),
          h('span', { class: 'w-2 h-2 rounded-full bg-amber-400/70' }),
          h('span', { class: 'w-2 h-2 rounded-full bg-emerald-400/70' })
        ])
      ]),
      h('div', { class: 'grid grid-cols-3 gap-2' }, [
        ...[
          { v: '142', l: 'leadov' },
          { v: '€48k', l: 'pipeline' },
          { v: '94 %', l: 'on-time' }
        ].map(m => h('div', { class: 'rounded-lg bg-white dark:bg-slate-900/70 border border-gray-100 dark:border-slate-800 p-2.5' }, [
          h('p', { class: 'text-base font-display font-bold text-gray-900 dark:text-white' }, m.v),
          h('p', { class: 'text-[9px] uppercase tracking-wider text-gray-500 dark:text-slate-500' }, m.l)
        ]))
      ]),
      h('div', { class: 'flex-1 rounded-xl bg-white dark:bg-slate-900/70 border border-gray-100 dark:border-slate-800 p-3 flex flex-col' }, [
        h('p', { class: 'text-[10px] uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-2' }, 'Predaj · 7 dní'),
        h('svg', { viewBox: '0 0 100 30', class: 'w-full h-full', preserveAspectRatio: 'none' }, [
          h('path', { d: 'M0 24 L14 18 L28 22 L42 12 L56 16 L70 6 L86 9 L100 4', stroke: '#DC2F1A', 'stroke-width': '1.5', fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
          h('path', { d: 'M0 24 L14 18 L28 22 L42 12 L56 16 L70 6 L86 9 L100 4 L100 30 L0 30 Z', fill: 'url(#g1)', opacity: '0.18' }),
          h('defs', null, [
            h('linearGradient', { id: 'g1', x1: '0', x2: '0', y1: '0', y2: '1' }, [
              h('stop', { offset: '0%', 'stop-color': '#DC2F1A' }),
              h('stop', { offset: '100%', 'stop-color': '#DC2F1A', 'stop-opacity': '0' })
            ])
          ])
        ])
      ])
    ])
  }
}

const projects: Project[] = [
  {
    title: 'AI asistent pre prvý kontakt',
    category: 'AI · Komunikácia',
    description: 'Pokrýva prvý kontakt 24/7. Odpovedá na opakujúce sa otázky, ostatné odovzdá človeku s kontextom.',
    fullDescription:
      'Webový AI asistent navrhnutý tak, aby pokryl prvý kontakt mimo pracovných hodín, odpovedal na opakujúce sa otázky a zbieral kvalifikované dopyty. Učí sa zo zdrojov, ktoré dodáte (FAQ, web, dokumenty).',
    before: 'Zákazníci píšu po pracovnej dobe a v pondelok ráno — kým príde odpoveď, časť ide ku konkurencii.',
    after: 'Chatbot odpovie sám na 60–80 % bežných otázok, ostatné odovzdá s kontextom človeku.',
    features: [
      'Trénovaný na firemných zdrojoch (FAQ, web, dokumenty)',
      'Eskalácia na človeka so zhrnutím konverzácie',
      'Notifikácie do emailu, Slacku alebo Telegramu',
      'Logy pre ďalšie ladenie'
    ],
    tags: ['OpenAI', 'Vue / Nuxt widget', 'Edge functions', 'Webhooks'],
    palette: '1',
    numberLabel: '01',
    device: 'browser',
    url: 'asistent.vasa-firma.sk',
    preview: ChatPreview
  },
  {
    title: 'Lead follow-up automatika',
    category: 'AI · Sales',
    description: 'Dopyty z formulára a emailu na jednom mieste. Auto-follow-up keď nikto nereagoval.',
    fullDescription:
      'Centralizácia leadov z webu, sociálnych sietí a emailu do jedného prehľadu. Automatické potvrdenia, jemné pripomienky a reporty pre majiteľa. Napojí sa na Pipedrive, HubSpot alebo Notion.',
    before: 'Dopyty padajú do troch schránok, väčšina sa nedostane k odpovedi do 48 h.',
    after: 'Každý lead má vlastný stav, automatické potvrdenie a follow-up po 48 h. Týždenný report sa generuje sám.',
    features: [
      'Zber dopytov z formulára, e-mailu a sociálnych sietí',
      'Automatické potvrdenie a follow-up sekvencie',
      'Napojenie na CRM (Pipedrive, HubSpot, Notion, Airtable)',
      'Týždenný report do schránky majiteľa'
    ],
    tags: ['Nuxt', 'PostgreSQL', 'n8n / Make', 'OpenAI'],
    palette: '2',
    numberLabel: '02',
    device: 'browser',
    url: 'pipeline.vasa-firma.sk',
    preview: PipelinePreview
  },
  {
    title: 'Interný dashboard pre majiteľa',
    category: 'Web · BI',
    description: 'Predaje, sklad, leady — v jednom prehľade. Bez ručného Excelovania reportov.',
    fullDescription:
      'Vlastný interný dashboard, ktorý spojí dáta z účtovníctva, e-shopu, CRM alebo formulárov do jedného prehľadu. Bez závislosti na rigidných šablónach BI nástrojov.',
    before: 'Týždenné reporty si majiteľ skladá z 3 Excelov a SQL exportu. 2–3 hodiny týždenne.',
    after: 'Dashboard so živým prehľadom, alerty pri odchýlkach, export do PDF jedným klikom.',
    features: [
      'Karty metrík podľa potrieb majiteľa',
      'Pravidelný import dát z účtovníctva, e-shopu alebo CRM',
      'Alerty pri odchýlkach',
      'Roly a prístupy pre tím'
    ],
    tags: ['Nuxt 3', 'PostgreSQL', 'Chart.js', 'Auth'],
    palette: '3',
    numberLabel: '03',
    device: 'browser',
    url: 'dashboard.vasa-firma.sk',
    preview: DashboardPreview
  }
]

const selectedProject = ref<Project | null>(null)

function openProject(p: Project) {
  selectedProject.value = p
  if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
}

function closeProject() {
  selectedProject.value = null
  if (typeof document !== 'undefined') document.body.style.overflow = ''
}

onUnmounted(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important }
}
</style>
