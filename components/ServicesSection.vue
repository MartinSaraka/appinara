<template>
  <section id="services" class="relative py-32 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 bg-gradient-to-b from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 
          v-motion-fade-visible
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Ako vám môžeme <span class="gradient-text">pomôcť</span>
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
          
          <div class="relative surface rounded-2xl p-10 h-full card-hover">
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
const services = [
  {
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
