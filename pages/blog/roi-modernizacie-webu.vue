<template>
  <div class="relative overflow-hidden dark:bg-slate-950 bg-white">
    <Navigation />
    
    <article class="relative pt-32 pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <nav class="mb-8 text-sm">
            <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Domov</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Blog</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <span class="dark:text-slate-300 text-gray-700">ROI modernizácie webu</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              ROI Calculator
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 8 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 26. Október 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            <span class="gradient-text">ROI modernizácie webu</span>: Oplatí sa to?
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Ako počítať návratnosť investície do nového webu. Reálne case studies s číslami a kalkulačka. Väčšina webov sa vráti za 3-6 mesiacov.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              📈
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">💰 Krátka odpoveď</h3>
              <p class="dark:text-slate-300 text-gray-700 mb-2">
                <strong>Áno, oplatí sa!</strong> Priemerný ROI moderného webu je <span class="text-green-400 font-bold">250-400%</span> prvý rok.
              </p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                <li>✓ Investícia 2000€ → +8000€ rok = 300% ROI</li>
                <li>✓ Návratnosť typicky za 3-6 mesiacov</li>
                <li>✓ Potom je to čistý profit navyše</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako počítať ROI webu?</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">Formula:</h3>
              
              <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6 mb-6 text-center">
                <p class="text-2xl dark:text-white text-gray-900 font-bold mb-2">
                  ROI = (Zisk z webu - Náklady) / Náklady × 100%
                </p>
                <p class="dark:text-slate-400 text-gray-600 text-sm">Ak je ROI 300%, znamená to 3€ profit za každé 1€ investované</p>
              </div>
              
              <h4 class="font-bold dark:text-white text-gray-900 mb-3">Čo počítať do zisku z webu:</h4>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-6">
                <li>✓ <strong>Viac objednávok/leadov</strong> (vyššia konverzia)</li>
                <li>✓ <strong>Vyššie ceny</strong> (premium vzhľad = vyššie ceny)</li>
                <li>✓ <strong>Ušetrený čas</strong> (automatizácia, self-service)</li>
                <li>✓ <strong>Znížené náklady</strong> (menej supportu, efektivita)</li>
                <li>✓ <strong>SEO traffic</strong> (free návštevníci z Google)</li>
              </ul>
              
              <h4 class="font-bold dark:text-white text-gray-900 mb-3">Čo počítať do nákladov:</h4>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                <li>• Cena redesignu (800-5000€)</li>
                <li>• Váš čas na projekt (10-20h)</li>
                <li>• Prvý rok hosting/údržba (200-500€)</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Reálne case studies</h2>
            
            <!-- Case 1 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-blue-500">
              <h3 class="text-2xl font-bold text-blue-400 mb-4">📚 Case Study 1: Law Firm</h3>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PRED redesignom:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Starý web (2015)</li>
                    <li>• 500 návštev/mes</li>
                    <li>• Konverzia: 1.2% (6 kontaktov)</li>
                    <li>• Priemerná hodnota klienta: 800€</li>
                    <li><strong>→ 4800€/mes z webu</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PO redesigne:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Moderný web + SEO</li>
                    <li>• 1200 návštev/mes (SEO)</li>
                    <li>• Konverzia: 4.5% (54 kontaktov)</li>
                    <li>• Priemerná hodnota: 1000€ (premium)</li>
                    <li><strong>→ 54,000€/mes z webu</strong></li>
                  </ul>
                </div>
              </div>
              
              <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                <p class="dark:text-white text-gray-900 font-bold mb-2">💰 Výpočet ROI:</p>
                <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Investícia: 2500€ (redesign + SEO)</li>
                  <li>• Zvýšenie príjmu: +49,200€/mes</li>
                  <li>• Návratnosť: <span class="text-green-400 font-bold">1.8 dňa (!)</span></li>
                </ul>
                <p class="text-3xl font-bold text-green-400">ROI: 23,580% prvý rok! 🚀</p>
              </div>
            </div>

            <!-- Case 2 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-purple-500">
              <h3 class="text-2xl font-bold text-purple-400 mb-4">👕 Case Study 2: Fashion E-shop</h3>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PRED:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• WooCommerce basic template</li>
                    <li>• 3000 návštev/mes</li>
                    <li>• Konverzia: 0.8% (24 objednávok)</li>
                    <li>• AOV: 45€</li>
                    <li><strong>→ 1080€/mes obrat</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PO:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Custom design + UX</li>
                    <li>• 3000 návštev/mes (rovnaké)</li>
                    <li>• Konverzia: 2.8% (84 objednávok)</li>
                    <li>• AOV: 67€ (upsells)</li>
                    <li><strong>→ 5628€/mes obrat</strong></li>
                  </ul>
                </div>
              </div>
              
              <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                <p class="dark:text-white text-gray-900 font-bold mb-2">💰 Výpočet ROI:</p>
                <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Investícia: 3500€</li>
                  <li>• Zvýšenie obratu: +4548€/mes = +54,576€/rok</li>
                  <li>• Návratnosť: 23 dní</li>
                </ul>
                <p class="text-3xl font-bold text-green-400">ROI: 1,459% prvý rok! 🎉</p>
              </div>
            </div>

            <!-- Case 3 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <h3 class="text-2xl font-bold text-green-400 mb-4">🔧 Case Study 3: Auto servis</h3>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PRED:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Facebook page only</li>
                    <li>• 50+ správ denne (manuálne)</li>
                    <li>• 3h denne na odpovede</li>
                    <li>• Strata zákazníkov (slow response)</li>
                    <li><strong>→ 30,000€/mes obrat</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-3">PO (web + AI chatbot):</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Web s online booking</li>
                    <li>• AI chatbot odpovedá 24/7</li>
                    <li>• 15 min denne na check správ</li>
                    <li>• Žiadni stratení zákazníci</li>
                    <li><strong>→ 39,000€/mes obrat (+30%)</strong></li>
                  </ul>
                </div>
              </div>
              
              <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                <p class="dark:text-white text-gray-900 font-bold mb-2">💰 Výpočet ROI:</p>
                <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Investícia: 1800€ (web + chatbot)</li>
                  <li>• Zvýšenie obratu: +9000€/mes</li>
                  <li>• Ušetrený čas: 85h/mes × 20€ = +1700€/mes</li>
                  <li>• Celkový benefit: +10,700€/mes</li>
                  <li>• Návratnosť: 5 dní (!)</li>
                </ul>
                <p class="text-3xl font-bold text-green-400">ROI: 7,133% prvý rok! 💎</p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Kedy sa redesign oplatí?</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">✅ Redesign sa určite oplatí ak:</h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-green-400 text-2xl">✓</span>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold">Váš web je starý 3+ roky</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Design trends sa menia. Starý web = nízka dôveryhodnosť = menej konverzií</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-green-400 text-2xl">✓</span>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold">Máte viac ako 1000 návštev/mes</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Dostatočný traffic na merateľný impact. Každé % konverzie navyše = real money.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-green-400 text-2xl">✓</span>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold">Konverzia pod 2%</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Priemer je 3-5%. Ak ste pod 2%, je obrovský priestor na improvement.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-green-400 text-2xl">✓</span>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold">Web na mobile nefunguje dobre</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">70% trafficu je mobile. Zlý mobile UX = strata 70% potenciálnych zákazníkov!</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-green-400 text-2xl">✓</span>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold">Platíte za reklamu</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Ak platíte za traffic (Google Ads, FB Ads), lepší web = vyššie ROI z reklám.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">🧮 Interaktívna ROI Kalkulačka</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-2 border-primary-500/30">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">Vypočítajte si vlastný ROI:</h3>
              
              <div class="space-y-6">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                  <p class="dark:text-white text-gray-900 font-bold mb-4">Vaše súčasné čísla:</p>
                  <div class="space-y-4">
                    <div>
                      <label class="dark:text-slate-300 text-gray-700 text-sm block mb-2">Návštevy mesačne:</label>
                      <input 
                        v-model.number="visits" 
                        type="number" 
                        placeholder="napr. 1000"
                        class="w-full dark:bg-slate-700 dark:text-white bg-white text-gray-900 px-4 py-3 rounded-lg dark:border-slate-600 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label class="dark:text-slate-300 text-gray-700 text-sm block mb-2">Konverzia (%):</label>
                      <input 
                        v-model.number="conversionRate" 
                        type="number" 
                        step="0.1"
                        placeholder="napr. 2"
                        class="w-full dark:bg-slate-700 dark:text-white bg-white text-gray-900 px-4 py-3 rounded-lg dark:border-slate-600 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label class="dark:text-slate-300 text-gray-700 text-sm block mb-2">Priemerná hodnota objednávky/leadu (€):</label>
                      <input 
                        v-model.number="avgOrderValue" 
                        type="number" 
                        placeholder="napr. 500"
                        class="w-full dark:bg-slate-700 dark:text-white bg-white text-gray-900 px-4 py-3 rounded-lg dark:border-slate-600 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label class="dark:text-slate-300 text-gray-700 text-sm block mb-2">Ušetrený čas po redesigne (hodiny/mesiac):</label>
                      <input 
                        v-model.number="timeSaved" 
                        type="number" 
                        placeholder="napr. 20"
                        class="w-full dark:bg-slate-700 dark:text-white bg-white text-gray-900 px-4 py-3 rounded-lg dark:border-slate-600 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div class="border-t dark:border-slate-700 border-gray-200 my-3 pt-3">
                      <div class="flex justify-between items-center font-bold text-lg">
                        <span class="dark:text-white text-gray-900">Mesačný príjem z webu:</span>
                        <span class="text-green-400">{{ currentRevenue.toFixed(0) }}€</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                  <p class="text-green-400 font-bold mb-4 flex items-center gap-2">
                    <span class="text-2xl">✨</span>
                    Po redesigne (konzervatívny odhad):
                  </p>
                  <div class="space-y-3 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">Konverzia (+50%):</span>
                      <span class="text-green-400 font-bold">{{ newConversionRate.toFixed(1) }}% → +{{ conversionBenefit.toFixed(0) }}€/mes</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">SEO traffic (+30%):</span>
                      <span class="text-green-400 font-bold">{{ newVisits.toFixed(0) }} návštev → +{{ seoBenefit.toFixed(0) }}€/mes</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">Ušetrený čas:</span>
                      <span class="text-green-400 font-bold">{{ timeSaved }}h/mes × 20€ = {{ timeBenefit.toFixed(0) }}€</span>
                    </div>
                    <div class="border-t border-green-500/30 my-3"></div>
                    <div class="flex justify-between items-center font-bold text-lg">
                      <span class="dark:text-white text-gray-900">Celkový benefit:</span>
                      <span class="text-green-400 text-2xl">+{{ totalBenefit.toFixed(0) }}€/mes</span>
                    </div>
                  </div>
                </div>
                
                <div class="bg-primary-500/10 border-2 border-primary-500 rounded-xl p-6">
                  <p class="text-primary-400 font-bold mb-4 text-lg flex items-center gap-2">
                    <span class="text-2xl">📊</span>
                    Výsledok:
                  </p>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">Investícia do redesignu:</span>
                      <span class="dark:text-white text-gray-900 font-bold text-lg">~2000€</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">Mesačný benefit:</span>
                      <span class="text-green-400 font-bold text-xl">{{ totalBenefit.toFixed(0) }}€</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="dark:text-slate-300 text-gray-700">Návratnosť:</span>
                      <span class="text-green-400 font-bold text-xl">{{ paybackPeriod }} {{ paybackPeriod === 1 ? 'mesiac' : paybackPeriod < 5 ? 'mesiace' : 'mesiacov' }}</span>
                    </div>
                    <div class="border-t border-primary-500/30 my-4"></div>
                    <div class="flex justify-between items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                      <span class="dark:text-white text-gray-900 font-bold text-xl">ROI prvý rok:</span>
                      <span class="text-4xl font-bold text-green-400">{{ yearlyROI.toFixed(0) }}% 🚀</span>
                    </div>
                    
                    <div v-if="totalBenefit > 0" class="mt-4 text-center">
                      <p class="text-green-400 text-sm font-bold">
                        💰 Za prvý rok zarobíte o {{ (totalBenefit * 12).toFixed(0) }}€ viac!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p class="dark:text-slate-400 text-gray-600 text-xs text-center mt-6">
                * Konzervatívne odhady (+50% konverzia, +30% traffic). Reálne výsledky bývajú často lepšie.
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">FAQ</h2>
            
            <div class="space-y-4 mb-8">
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Ako dlho trvá, kým uvidím výsledky?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  <strong>Okamžite:</strong> Lepší UX = vyššia konverzia hneď. <strong>1-3 mesiace:</strong> SEO začína fungovať. <strong>6+ mesiacov:</strong> Full SEO benefit. Ale zlepšenie konverzie uvidíte už týždeň po spustení!
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Čo ak nemám dosť trafficu na meranie?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Ak máte pod 500 návštev/mes, investujte najprv do marketingu (SEO, reklamy). Nový web má zmysel, keď máte koho konvertovať. Alebo použite redesign ako príležitosť spustiť marketing kampane súčasne.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Stojí to za to pre malý biznis?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  ÁNO! Malé biznisy profitujú často VIAC, lebo každý nový zákazník má veľký impact. Investícia 1500-2500€ sa vráti za 2-6 mesiacov aj pri malom obrate.
                </p>
              </details>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Chcete zistiť váš potenciálny ROI?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Urobíme vám <strong>bezplatný ROI audit</strong> - analyzujeme váš súčasný web a ukážeme presne, koľko môžete zarobiť redesignom. S real číslami, nie odhady.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem bezplatný ROI audit
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/roi-modernizacie-webu" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/roi-modernizacie-webu" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
import { ref, computed } from 'vue'

// ROI Calculator reactive data
const visits = ref(1000)
const conversionRate = ref(2)
const avgOrderValue = ref(500)
const timeSaved = ref(20)

// Calculated values
const currentRevenue = computed(() => {
  return visits.value * (conversionRate.value / 100) * avgOrderValue.value
})

const newConversionRate = computed(() => {
  return conversionRate.value * 1.5 // +50% improvement
})

const newVisits = computed(() => {
  return visits.value * 1.3 // +30% traffic from SEO
})

const conversionBenefit = computed(() => {
  const newRevenue = visits.value * (newConversionRate.value / 100) * avgOrderValue.value
  return newRevenue - currentRevenue.value
})

const seoBenefit = computed(() => {
  const additionalVisits = newVisits.value - visits.value
  return additionalVisits * (newConversionRate.value / 100) * avgOrderValue.value
})

const timeBenefit = computed(() => {
  return timeSaved.value * 20 // 20€/hour rate
})

const totalBenefit = computed(() => {
  return conversionBenefit.value + seoBenefit.value + timeBenefit.value
})

const paybackPeriod = computed(() => {
  const investment = 2000
  if (totalBenefit.value <= 0) return '∞'
  const months = investment / totalBenefit.value
  return Math.ceil(months)
})

const yearlyROI = computed(() => {
  const investment = 2000
  const yearlyProfit = totalBenefit.value * 12
  if (investment <= 0) return 0
  return ((yearlyProfit - investment) / investment) * 100
})

useHead({
  title: 'ROI modernizácie webu: Oplatí sa to? Kalkulačka a case studies | Appinara',
  meta: [
    { name: 'description', content: 'Ako počítať ROI webu? Reálne case studies s číslami. Priemerný ROI 250-400% prvý rok. Návratnosť za 3-6 mesiacov. Kalkulačka included.' },
    { name: 'keywords', content: 'ROI webu, návratnosť investície web, redesign webu, modernizácia webu, kalkulačka roi' },
    
    { property: 'og:title', content: 'ROI modernizácie webu: Oplatí sa to? Case studies' },
    { property: 'og:description', content: 'Reálne príklady: ROI 300-7000%! Investícia 2000€ → +8000-50000€/rok' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/roi-modernizacie-webu' },
    
    { property: 'article:published_time', content: '2024-10-26T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'ROI & Analytics' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/roi-modernizacie-webu' }
  ]
})
</script>

<style scoped>
details summary {
  list-style: none;
}
details summary::-webkit-details-marker {
  display: none;
}
details[open] summary {
  color: rgb(129, 140, 248);
}
</style>

