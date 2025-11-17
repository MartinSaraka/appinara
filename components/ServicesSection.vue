<template>
  <section id="services" class="relative py-32 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 bg-gradient-to-b from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 
          v-motion-fade-visible
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Ako vám môžem <span class="gradient-text">pomôcť</span>
        </h2>
        <p 
          v-motion-fade-visible
          :delay="200"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Riešenia, ktoré prinesú vášmu biznisu reálne výsledky a návratnosť investície
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          v-motion-fade-visible
          :delay="index * 100"
          class="group relative"
        >
          <!-- Gradient border effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
          
          <div class="relative glass-effect rounded-2xl p-10 h-full card-hover hover:bg-gray-50 dark:hover:bg-white/5">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Content -->
            <h3 class="text-2xl font-display font-bold mb-4 dark:text-white text-gray-900">
              {{ service.title }}
            </h3>
            <p class="dark:text-slate-300 text-gray-700 mb-6 leading-relaxed">
              {{ service.description }}
            </p>
            
            <!-- Features -->
            <ul class="space-y-2">
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const SparklesIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

const CodeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
])

const DeviceIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])

const DatabaseIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
])

const ShoppingIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' })
])

const BriefcaseIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])

const services = [
  {
    title: 'AI Integrácie & Chatboty',
    description: 'Automatizujte opakujúce sa úlohy, ušetrite čas a znížte náklady pomocou inteligentných AI riešení šitých na mieru vášmu biznisu.',
    icon: SparklesIcon,
    features: [
      'AI chatboti pre zákaznícky servis 24/7',
      'Automatizácia e-mailovej komunikácie',
      'Inteligentné spracovanie dokumentov',
      'Predikcie a business analytics',
      'Integrácia s vašimi systémami'
    ]
  },
  {
    title: 'Webové stránky & Aplikácie',
    description: 'Moderné webové stránky a aplikácie s dokonalým dizajnom a UX, ktoré premieňajú návštevníkov na zákazníkov. Od landing pages po komplexné platformy.',
    icon: CodeIcon,
    features: [
      'Responzívny dizajn pre všetky zariadenia',
      'Vysoká konverzná optimalizácia',
      'SEO optimalizácia pre vyhľadávače',
      'Rýchle načítanie a moderný tech stack',
      'Bezpečnosť a škálovateľnosť'
    ]
  },
  {
    title: 'E-commerce & Online predaj',
    description: 'Výkonný online obchod, ktorý predáva 24/7. S AI odporúčaniami produktov, automatickým skladom, platobnými bránami a prepojením na dopravu.',
    icon: ShoppingIcon,
    features: [
      'AI odporúčania pre zvýšené predaje',
      'Platobné brány a faktúry',
      'Automatická správa skladu',
      'Prepojenie s dopravcami',
      'Marketing a loyalty programy'
    ]
  },
  {
    title: 'Business nástroje & Dashboardy',
    description: 'Vlastné firemné systémy pre efektívnejšiu prácu. CRM, dashboardy, project management a automatizácie pre váš rast.',
    icon: DatabaseIcon,
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
