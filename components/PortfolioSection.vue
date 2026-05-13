<template>
  <section id="portfolio" class="relative py-32 bg-slate-950">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 
          v-motion-fade-visible
          class="text-4xl md:text-6xl font-display font-bold mb-6"
        >
          Ukážky <span class="gradient-text">mojej práce</span>
        </h2>
        <p 
          v-motion-fade-visible
          :delay="200"
          class="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Reálne projekty, ktoré priniesli výsledky a posunuli biznis klientov vpred
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          v-motion-fade-visible
          :delay="index * 100"
          @click="openProject(project)"
          class="group relative surface rounded-2xl overflow-hidden card-hover cursor-pointer"
        >
          <!-- Project Image with Gradient -->
          <div class="relative h-64 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 overflow-hidden">
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-30">
              <div class="absolute inset-0 grid-pattern"></div>
            </div>
            
            <!-- Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-8xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                {{ project.emoji }}
              </div>
            </div>
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white font-bold text-xl animate-pulse">Zobraziť detail →</div>
            </div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/30">
                {{ project.category }}
              </span>
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-display font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Results -->
            <div class="flex items-center gap-2 mb-4 text-green-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span class="text-sm font-semibold">{{ project.result }}</span>
            </div>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Detail Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="selectedProject"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          @click="closeProject"
        >
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-if="selectedProject"
              @click.stop
              class="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl shadow-2xl"
            >
              <!-- Close Button -->
              <button 
                @click="closeProject"
                class="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-xl"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <!-- Header Image -->
              <div class="relative h-80 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 overflow-hidden">
                <div class="absolute inset-0 grid-pattern opacity-30"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-9xl opacity-60 animate-float">
                    {{ selectedProject.emoji }}
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8">
                  <div class="max-w-4xl mx-auto">
                    <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/30 mb-4">
                      {{ selectedProject.category }}
                    </span>
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                      {{ selectedProject.title }}
                    </h2>
                  </div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 md:p-12">
                <div class="max-w-4xl mx-auto space-y-8">
                  <!-- Description -->
                  <div>
                    <p class="text-xl text-slate-300 leading-relaxed">
                      {{ selectedProject.fullDescription }}
                    </p>
                  </div>
                  
                  <!-- Key Results -->
                  <div class="surface rounded-2xl p-8">
                    <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                      <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Dosiahnuté výsledky
                    </h3>
                    <div class="grid md:grid-cols-3 gap-6">
                      <div 
                        v-for="metric in selectedProject.metrics" 
                        :key="metric.label"
                        class="text-center"
                      >
                        <div class="text-4xl font-bold gradient-text mb-2">{{ metric.value }}</div>
                        <div class="text-slate-400">{{ metric.label }}</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Features -->
                  <div>
                    <h3 class="text-2xl font-display font-bold text-white mb-6">Kľúčové funkcie</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div 
                        v-for="feature in selectedProject.features" 
                        :key="feature"
                        class="flex items-start gap-3 surface rounded-xl p-4"
                      >
                        <svg class="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span class="text-slate-300">{{ feature }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Technologies -->
                  <div>
                    <h3 class="text-2xl font-display font-bold text-white mb-6">Použité technológie</h3>
                    <div class="flex flex-wrap gap-3">
                      <span 
                        v-for="tag in selectedProject.tags" 
                        :key="tag"
                        class="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 text-primary-300 rounded-full text-sm font-medium"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Client Quote (if exists) -->
                  <div v-if="selectedProject.clientQuote" class="relative">
                    <div class="surface rounded-2xl p-8 border-l-4 border-primary-500">
                      <svg class="w-12 h-12 text-primary-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p class="text-lg text-slate-300 italic mb-4">
                        "{{ selectedProject.clientQuote }}"
                      </p>
                      <p class="text-primary-400 font-semibold">{{ selectedProject.clientName }}</p>
                    </div>
                  </div>
                  
                  <!-- CTA -->
                  <div class="text-center pt-8">
                    <a href="#contact" @click="closeProject" class="btn-primary inline-block">
                      Chcem podobný projekt
                      <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
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
import { ref } from 'vue'

const selectedProject = ref<typeof projects[0] | null>(null)

const openProject = (project: typeof projects[0]) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProject = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

const projects = [
  {
    title: 'AI Chatbot pre E-commerce',
    description: 'Inteligentný chatbot s GPT-4 pre automatizáciu zákazníckeho servisu a zvýšenie predaja.',
    fullDescription: 'Implementoval som pokročilý AI chatbot systém pre stredne veľký e-shop, ktorý dokáže odpovedať na otázky zákazníkov 24/7, odporúčať produkty na základe ich preferencií a spracovať objednávky. Systém využíva GPT-4 pre prirodzenú konverzáciu a je integrovaný s interným skladovým systémom pre real-time informácie o dostupnosti.',
    category: 'AI Riešenie',
    emoji: '🤖',
    result: '40 hodín/týždeň ušetrených',
    tags: ['OpenAI GPT-4', 'Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    features: [
      'Automatické odpovede na otázky zákazníkov',
      'Inteligentné odporúčanie produktov',
      'Spracovanie objednávok cez chat',
      'Multilingual podpora (SK, CZ, EN)',
      'Integrácia so skladovým systémom',
      'Analytics a reporting pre majiteľa'
    ],
    metrics: [
      { value: '+35%', label: 'Konverzný pomer' },
      { value: '40h/týždeň', label: 'Ušetrený čas na support' },
      { value: '4.8/5', label: 'Spokojnosť zákazníkov' }
    ],
    clientQuote: 'Chatbot nám ušetril desiatky hodín týždenne a zákazníci sú spokojnejší. ROI sa vrátilo za 3 mesiace.',
    clientName: 'Majiteľ e-shopu s elektronikou'
  },
  {
    title: 'Real-time Business Dashboard',
    description: 'Komplexný dashboard pre vizualizáciu business metrík v reálnom čase s predikciami.',
    fullDescription: 'Vytvoril som pokročilý business intelligence dashboard pre rastúcu firmu, ktorý poskytuje real-time prehľad o predajoch, zákazníckych metrikách a finančnom zdraví firmy. Systém zahŕňa AI predikcie trendov a automatické reporty.',
    category: 'Business Intelligence',
    emoji: '📊',
    result: '8 hodín/týždeň ušetrených na reporty',
    tags: ['Nuxt 3', 'WebSocket', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
    features: [
      'Real-time monitoring kľúčových metrík',
      'AI predikcie predajov a trendov',
      'Automatické generovanie reportov',
      'Vizualizácie a grafy',
      'Multi-user prístup s rolami',
      'Export dát do PDF/Excel'
    ],
    metrics: [
      { value: '8h/týždeň', label: 'Ušetrený čas na reporty' },
      { value: '15 min', label: 'Priemerný čas na analýzu' },
      { value: '100%', label: 'Real-time presnosť dát' }
    ],
    clientQuote: 'Konečne vidíme všetky dôležité čísla na jednom mieste v reálnom čase. Game changer pre náš biznis.',
    clientName: 'CEO logistickej firmy'
  },
  {
    title: 'Premium E-shop s AI',
    description: 'Výkonná e-commerce platforma s AI odporúčaniami a automatizovaným inventory managementom.',
    fullDescription: 'Komplexný e-shop systém postavený od nuly s dôrazom na user experience a konverzie. Zahŕňa AI-powered vyhľadávanie, personalizované odporúčania, automatický inventory management a integrácie s platobnými bránami a prepravcami.',
    category: 'E-commerce',
    emoji: '🛍️',
    result: '+€45k mesačný obrat',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AI Recommendations'],
    features: [
      'AI-powered vyhľadávanie a filtre',
      'Personalizované odporúčania produktov',
      'Automatický inventory management',
      'Multi-channel predaj (web, social)',
      'Integrácie s dopravcami',
      'Loyalty program a kupóny'
    ],
    metrics: [
      { value: '+€45k', label: 'Mesačný obrat navyše' },
      { value: '+42%', label: 'Konverzný pomer' },
      { value: '4.8/5', label: 'Hodnotenie zákazníkov' }
    ],
    clientQuote: 'Predaje nám vzrástli viac než dvojnásobne a zákazníci milujú nový web. Najlepšia investícia.',
    clientName: 'Majiteľka fashion e-shopu'
  },
  {
    title: 'Firemný CRM Systém',
    description: 'Vlastný CRM systém s automatizáciou workflow a pokročilými integráciami.',
    fullDescription: 'Navrhol a implementoval som custom CRM systém prispôsobený špecifickým potrebám rastúcej B2B firmy. Systém automatizuje sales proces, spravuje kontakty a príležitosti, a poskytuje detailné analytics pre management.',
    category: 'Enterprise SaaS',
    emoji: '💼',
    result: '12 hodín/týždeň ušetrených',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Kompletný lead a contact management',
      'Sales pipeline s automatizáciou',
      'Email integrácie a tracking',
      'Task management a reminders',
      'Pokročilé reporting a analytics',
      'API integrácie so službami'
    ],
    metrics: [
      { value: '12h/týždeň', label: 'Ušetrený čas sales tímu' },
      { value: '-8 dní', label: 'Rýchlejšie uzatváranie dealov' },
      { value: '50+', label: 'Aktívnych používateľov' }
    ],
    clientQuote: 'Náš sales tím je teraz oveľa efektívnejší. Všetko je na jednom mieste a nič sa nestratí.',
    clientName: 'Sales Director IT firmy'
  },
  {
    title: 'AI Content Generator',
    description: 'Aplikácia na generovanie marketingového obsahu s AI a zachovaním brand voice.',
    fullDescription: 'Vytvoril som nástroj pre marketing tímy, ktorý využíva AI na generovanie high-quality content pre rôzne platformy. Systém sa učí brand voice firmy a dokáže vytvárať blog posty, social media content, email kampane a viac.',
    category: 'AI Marketing Tool',
    emoji: '✍️',
    result: '20 hodín/týždeň ušetrených',
    tags: ['Vue 3', 'OpenAI', 'LangChain', 'Pinecone', 'Python'],
    features: [
      'Generovanie obsahu pre všetky platformy',
      'Zachovanie brand voice a tónu',
      'SEO optimalizácia content',
      'Multi-jazyková podpora',
      'Content calendar a plánovanie',
      'A/B testing návrhov'
    ],
    metrics: [
      { value: '20h/týždeň', label: 'Ušetrený čas na tvorbu' },
      { value: '€2k/mesiac', label: 'Ušetrené náklady' },
      { value: '50+ článkov', label: 'Mesačná produkcia' }
    ],
    clientQuote: 'Tento nástroj nám úplně zmenil spôsob práce. Teraz zvládneme 10x viac content.',
    clientName: 'Marketing Manager SaaS firmy'
  },
  {
    title: 'Project Management Platform',
    description: 'Moderný nástroj na riadenie projektov s real-time kolaboráciou a AI asistentom.',
    fullDescription: 'Komplexná project management platforma určená pre malé a stredné firmy. Zahŕňa Kanban boards, Gantt charts, time tracking, resource management a AI asistenta, ktorý pomáha s plánovať a optimalizovať projekty.',
    category: 'SaaS Platform',
    emoji: '📋',
    result: '15 hodín/týždeň ušetrených',
    tags: ['Nuxt 3', 'Supabase', 'TypeScript', 'Tailwind', 'OpenAI'],
    features: [
      'Kanban boards a Gantt charts',
      'Time tracking a reporting',
      'AI asistent pre plánovanie',
      'Real-time kolaborácia',
      'Resource management',
      'Integrácie (Slack, Google, etc.)'
    ],
    metrics: [
      { value: '15h/týždeň', label: 'Ušetrený čas na meetings' },
      { value: '95%', label: 'On-time delivery projektov' },
      { value: '8 tímov', label: 'Aktívne používa' }
    ],
    clientQuote: 'Najlepší project management tool, aký sme použili. Jednoduché, výkonné a funguje.',
    clientName: 'CEO digitálnej agentúry'
  }
]
</script>