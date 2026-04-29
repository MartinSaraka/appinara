<template>
  <div class="relative overflow-hidden dark:bg-anthracite bg-bone">
    <Navigation />
    
    <article class="relative pt-32 pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <nav class="mb-8 text-sm">
            <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Domov</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Blog</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <span class="dark:text-slate-300 text-gray-700">Automatizácia pre začiatočníkov</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              Automatizácia
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 7 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 3. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Automatizácia pre <span class="gradient-text">začiatočníkov</span>: Kde začať?
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Ako automatizovať vaše prvé procesy vo firme bez programovania. 5 jednoduchých nástrojov a automatizácií, ktoré môžete použiť dnes a ušetriť 10+ hodín týždenne.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              ⚙️
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-cyan-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">⚡ Čo je automatizácia (jednoducho)?</h3>
              <p class="dark:text-slate-300 text-gray-700">
                Automatizácia = keď software robí nudné, opakujúce sa úlohy za vás. Napríklad: Keď niekto vyplní formulár, automaticky dostane email + pridá sa do tabuľky + oznámenie vám. <strong>Bez toho aby ste museli čokoľvek robiť.</strong>
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">5 najjednoduchších automatizácií na začiatok</h2>

            <div class="space-y-8 mb-12">
              <!-- Auto 1 -->
              <div class="glass-effect rounded-2xl p-8 border-l-4 border-blue-500">
                <div class="flex items-start gap-4 mb-4">
                  <div class="text-4xl">1️⃣</div>
                  <div>
                    <h3 class="text-2xl font-bold dark:text-white text-gray-900">Email automatické odpovede</h3>
                    <p class="dark:text-slate-400 text-gray-600 text-sm">Náročnosť: ⭐ (5 minút) | Nástroj: Gmail/Outlook</p>
                  </div>
                </div>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Čo to robí:</strong> Automaticky odpovedá na bežné emaily (cenník, opening hours, FAQ)
                </p>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Ako nastaviť:</strong>
                </p>
                <ol class="list-decimal list-inside space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                  <li>Gmail → Settings → "Canned responses" (Templates)</li>
                  <li>Vytvorte template pre bežné otázky</li>
                  <li>Nastavte filter: Ak email obsahuje "cenník" → pošli template</li>
                </ol>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p class="text-green-400 font-bold text-sm">💰 Úspora: 30-60 minút denne</p>
                </div>
              </div>

              <!-- Auto 2 -->
              <div class="glass-effect rounded-2xl p-8 border-l-4 border-purple-500">
                <div class="flex items-start gap-4 mb-4">
                  <div class="text-4xl">2️⃣</div>
                  <div>
                    <h3 class="text-2xl font-bold dark:text-white text-gray-900">Social media scheduling</h3>
                    <p class="dark:text-slate-400 text-gray-600 text-sm">Náročnosť: ⭐ (15 minút) | Nástroj: Buffer/Later (free)</p>
                  </div>
                </div>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Čo to robí:</strong> Automaticky postuje na Instagram/Facebook v optimálnom čase
                </p>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Ako nastaviť:</strong>
                </p>
                <ol class="list-decimal list-inside space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                  <li>Zaregistrujte sa na Buffer.com (free 3 účty)</li>
                  <li>Pripojte Instagram/Facebook</li>
                  <li>Vytvorte 10 postov naraz (1x týždenne)</li>
                  <li>Naplánujte posty na celý týždeň</li>
                </ol>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p class="text-green-400 font-bold text-sm">💰 Úspora: 2-3 hodiny týždenne</p>
                </div>
              </div>

              <!-- Auto 3 -->
              <div class="glass-effect rounded-2xl p-8 border-l-4 border-green-500">
                <div class="flex items-start gap-4 mb-4">
                  <div class="text-4xl">3️⃣</div>
                  <div>
                    <h3 class="text-2xl font-bold dark:text-white text-gray-900">Automatické faktúry & pripomienky</h3>
                    <p class="dark:text-slate-400 text-gray-600 text-sm">Náročnosť: ⭐⭐ (30 minút) | Nástroj: Superfaktura.sk</p>
                  </div>
                </div>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Čo to robí:</strong> Automaticky vystaví faktúry, pošle klientom, pripomenie pred splatnosťou
                </p>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Ako nastaviť:</strong>
                </p>
                <ol class="list-decimal list-inside space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                  <li>Vytvorte účet na Superfaktura.sk</li>
                  <li>Nastavte recurring faktúry pre pravidelných klientov</li>
                  <li>Zapnite automatické pripomienky (3 dni pred splatnosťou)</li>
                  <li>Nastavte follow-up pre neplatičov</li>
                </ol>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p class="text-green-400 font-bold text-sm">💰 Úspora: 3-5 hodín mesačne + rýchlejšie platby</p>
                </div>
              </div>

              <!-- Auto 4 -->
              <div class="glass-effect rounded-2xl p-8 border-l-4 border-yellow-500">
                <div class="flex items-start gap-4 mb-4">
                  <div class="text-4xl">4️⃣</div>
                  <div>
                    <h3 class="text-2xl font-bold dark:text-white text-gray-900">Zap

ier workflows (no-code automatizácia)</h3>
                    <p class="dark:text-slate-400 text-gray-600 text-sm">Náročnosť: ⭐⭐ (20 minút) | Nástroj: Zapier.com</p>
                  </div>
                </div>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Čo to robí:</strong> Spája rôzne appky a automatizuje procesy medzi nimi
                </p>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Príklady "Zapov":</strong>
                </p>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                  <li>• Nový email → pridaj do Google Sheets</li>
                  <li>• Kontaktný formulár → Slack notifikácia + email</li>
                  <li>• Nový follower na IG → pridaj do CRM</li>
                  <li>• Gmail príloha → uloň do Google Drive</li>
                </ul>
                
                <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p class="text-blue-400 font-bold text-sm mb-2">💡 Začnite s template:</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Zapier má tisícky ready-made templates. Stačí kliknúť "Use template" a je to hotové!</p>
                </div>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p class="text-green-400 font-bold text-sm">💰 Úspora: 5-10 hodín týždenne</p>
                </div>
              </div>

              <!-- Auto 5 -->
              <div class="glass-effect rounded-2xl p-8 border-l-4 border-pink-500">
                <div class="flex items-start gap-4 mb-4">
                  <div class="text-4xl">5️⃣</div>
                  <div>
                    <h3 class="text-2xl font-bold dark:text-white text-gray-900">Chatbot pre zákaznícke otázky</h3>
                    <p class="dark:text-slate-400 text-gray-600 text-sm">Náročnosť: ⭐⭐⭐ (1-2 hodiny) | Nástroj: Tidio/ManyChat</p>
                  </div>
                </div>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Čo to robí:</strong> Odpovedá na bežné otázky zákazníkov 24/7
                </p>
                
                <p class="dark:text-slate-300 text-gray-700 mb-4">
                  <strong>Ako nastaviť (Tidio - free verzia):</strong>
                </p>
                <ol class="list-decimal list-inside space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                  <li>Zaregistrujte sa na Tidio.com</li>
                  <li>Pridajte widget na váš web (copy-paste kód)</li>
                  <li>Nastavte auto-replies pre bežné otázky</li>
                  <li>Zapnite notifikácie na mobil pre komplexné otázky</li>
                </ol>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p class="text-green-400 font-bold text-sm">💰 Úspora: 10-20 hodín týždenne</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Porovnanie nástrojov</h2>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b dark:border-slate-700 border-gray-200">
                    <th class="text-left dark:text-white text-gray-900 py-3 px-4">Nástroj</th>
                    <th class="text-left dark:text-white text-gray-900 py-3 px-4">Použitie</th>
                    <th class="text-left dark:text-white text-gray-900 py-3 px-4">Cena</th>
                    <th class="text-left dark:text-white text-gray-900 py-3 px-4">Náročnosť</th>
                  </tr>
                </thead>
                <tbody class="dark:text-slate-300 text-gray-700">
                  <tr class="border-b border-slate-800">
                    <td class="py-3 px-4 font-bold">Zapier</td>
                    <td class="py-3 px-4">Spájanie appiek</td>
                    <td class="py-3 px-4">0-20€/mes</td>
                    <td class="py-3 px-4">⭐⭐</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="py-3 px-4 font-bold">Buffer</td>
                    <td class="py-3 px-4">Social media</td>
                    <td class="py-3 px-4">0-6€/mes</td>
                    <td class="py-3 px-4">⭐</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="py-3 px-4 font-bold">Tidio</td>
                    <td class="py-3 px-4">Chatbot</td>
                    <td class="py-3 px-4">0-18€/mes</td>
                    <td class="py-3 px-4">⭐⭐</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="py-3 px-4 font-bold">Superfaktura</td>
                    <td class="py-3 px-4">Faktúry</td>
                    <td class="py-3 px-4">0-10€/mes</td>
                    <td class="py-3 px-4">⭐</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 font-bold">IFTTT</td>
                    <td class="py-3 px-4">Jednoduché if-then</td>
                    <td class="py-3 px-4">0€</td>
                    <td class="py-3 px-4">⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">ROI kalkulácia</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">Koľko ušetríte automatizáciou?</h3>
              
              <div class="space-y-4 mb-6">
                <div class="flex justify-between items-center py-2 border-b dark:border-slate-700 border-gray-200">
                  <span class="dark:text-slate-300 text-gray-700">Email auto-replies</span>
                  <span class="text-green-400 font-bold">0.5h/deň × 20€ = 10€/deň</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b dark:border-slate-700 border-gray-200">
                  <span class="dark:text-slate-300 text-gray-700">Social media scheduling</span>
                  <span class="text-green-400 font-bold">2h/týždeň × 20€ = 40€/týždeň</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b dark:border-slate-700 border-gray-200">
                  <span class="dark:text-slate-300 text-gray-700">Faktúry automatizácia</span>
                  <span class="text-green-400 font-bold">5h/mes × 20€ = 100€/mes</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b dark:border-slate-700 border-gray-200">
                  <span class="dark:text-slate-300 text-gray-700">Zapier workflows</span>
                  <span class="text-green-400 font-bold">1h/deň × 20€ = 20€/deň</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b dark:border-slate-700 border-gray-200">
                  <span class="dark:text-slate-300 text-gray-700">Chatbot</span>
                  <span class="text-green-400 font-bold">2h/deň × 20€ = 40€/deň</span>
                </div>
              </div>
              
              <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="dark:text-white text-gray-900 font-bold">Celková úspora mesačne:</span>
                  <span class="text-3xl font-bold gradient-text">1580€</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                  <span class="dark:text-slate-400 text-gray-600 text-sm">Náklady na nástroje:</span>
                  <span class="text-red-400">-50€</span>
                </div>
                <div class="border-t dark:border-slate-700 border-gray-200 pt-4">
                  <div class="flex justify-between items-center">
                    <span class="dark:text-white text-gray-900 font-bold text-lg">Čistá úspora:</span>
                    <span class="text-4xl font-bold text-green-400">1530€/mes</span>
                  </div>
                  <p class="dark:text-slate-400 text-gray-600 text-xs mt-2 text-right">= 18,360€/rok! 🚀</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako začať (action plan)</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center dark:text-white text-gray-900 font-bold">1</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-1">Tento týždeň</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Nastavte 1-2 najjednoduchšie automatizácie (email templates, social scheduling)</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center dark:text-white text-gray-900 font-bold">2</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-1">Tento mesiac</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Pridajte Zapier workflow a chatbot. Meranie: koľko času ste ušetrili?</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center dark:text-white text-gray-900 font-bold">3</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-1">Tento kvartál</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Pokročilé automatizácie (AI, custom integrácie). Reinvestujte ušetrený čas do rastu.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Potrebujete pomoc s automatizáciou?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Nastavíme vám custom automatizácie šité na mieru vášmu biznisu. Ušetrite 20+ hodín týždenne.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem konzultáciu
                <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>

            <div class="glass-effect rounded-2xl p-6 mt-12 flex items-center justify-between">
              <div>
                <div class="text-sm dark:text-slate-400 text-gray-600 mb-1">Autor článku</div>
                <div class="dark:text-white text-gray-900 font-semibold">Martin Saraka - Appinara</div>
              </div>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/automatizacia-pre-zaciatocnikov" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/automatizacia-pre-zaciatocnikov" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na LinkedIne</span>
                  💼
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </article>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Automatizácia pre začiatočníkov: Kde začať? | Appinara',
  meta: [
    { name: 'description', content: '5 jednoduchých automatizácií, ktoré môžete použiť dnes. Ušetrite 10+ hodín týždenne bez programovania. Zapier, Buffer, chatboty a viac.' },
    { name: 'keywords', content: 'automatizácia, workflow, zapier, no-code, chatbot, produktivita' },
    
    { property: 'og:title', content: 'Automatizácia pre začiatočníkov: Kde začať?' },
    { property: 'og:description', content: '5 automatizácií = úspora 1530€/mes. Bez programovania, setup za 1 deň!' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/automatizacia-pre-zaciatocnikov' },
    
    { property: 'article:published_time', content: '2024-11-03T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'Automatizácia' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/automatizacia-pre-zaciatocnikov' }
  ]
})
</script>

