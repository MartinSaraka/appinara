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
            <span class="dark:text-slate-300 text-gray-700">Prečo potrebuje moja firma AI</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              AI Business
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 8 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 8. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Prečo potrebuje moja firma <span class="gradient-text">AI</span>?<br/>(A prečo práve teraz)
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            5 konkrétnych príkladov, ako AI pomáha slovenským firmám šetriť náklady, zvyšovať predaje a predbehávať konkurenciu. Bez zbytočnej teórie - len fakty a reálne čísla.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              🧠
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-blue-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">⚡ Rýchla odpoveď</h3>
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Potrebujete AI ak:</strong>
              </p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700">
                <li>✓ Máte opakujúce sa úlohy, ktoré žerú čas</li>
                <li>✓ Prichádzate o zákazníkov kvôli pomalej reakcii</li>
                <li>✓ Konkurencia je rýchlejšia/efektívnejšia</li>
                <li>✓ Chcete rásť bez 10x väčšieho tímu</li>
                <li>✓ Chcete ušetriť 20-40% prevádzkových nákladov</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">AI nie je sci-fi. Je to nástroj. Ako Excel v 90-tych.</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Pamätáte sa keď firmy robili účtovníctvo na papieri? Potom prišiel Excel a revolucionizoval to. Firmy, ktoré sa naučili Excel používať, prosperovali. Tie, čo nie... no, už neexistujú.
            </p>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              <strong>AI je dnes to isté.</strong> Nie je to o robotoch, ktorí vám vezmú prácu. Je to o automatizácii nudných úloh, aby ste sa mohli venovať tomu, čo vás baví a zarába peniaze.
            </p>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">5 konkrétnych spôsobov, ako AI pomôže VAŠEJ firme</h2>

            <!-- Use Case 1 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">1️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Zákaznícky servis 24/7 (bez nonstop zamestnancov)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Zákazníci píšu otázky o 22:00. Ráno máte 15 správ. Pol dňa odpovedáte namiesto práce.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>AI riešenie:</strong> Chatbot, ktorý odpovedá okamžite, 24/7:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ "Koľko to stojí?" → Okamžitá odpoveď s cenníkom</li>
                <li>✓ "Máte voľno zajtra o 14:00?" → Pozrie kalendár, rezervuje termín</li>
                <li>✓ "Kde sa nachádzate?" → Pošle mapu a opening hours</li>
                <li>✓ Zložité otázky? → Oznámi "Odpoviem zajtra ráno"</li>
              </ul>
              
              <div class="glass-effect rounded-xl p-6 dark:bg-slate-800 bg-gray-100">
                <p class="dark:text-white text-gray-900 font-bold mb-2">📊 Reálny príklad - Barber shop Košice</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                  <strong>Pred AI:</strong> 3-4 hodiny denne odpovedanie na Messenger/Instagram (100+ správ denne)
                </p>
                <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                  <strong>Po AI:</strong> Chatbot odpovie na 85% správ automaticky
                </p>
                <p class="text-green-400 font-bold text-sm">
                  = 22 hodín týždenne ušetrených × 15€/hod = 330€/týždeň = 1320€/mes ušetrených! 💰
                </p>
              </div>
            </div>

            <!-- Use Case 2 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-blue-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">2️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Marketing obsah za zlomok ceny</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Potrebujete content pre social media, blog, emaily... Copywriter stojí 50-100€/hod.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>AI riešenie:</strong> AI content generation tools vytvárajú kvalitný obsah za minúty:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Instagram posty (kaptions, hashtags)</li>
                <li>✓ Blog články (outline → full article)</li>
                <li>✓ Email kampane (subject lines, content)</li>
                <li>✓ Product descriptions pre e-shop</li>
                <li>✓ Facebook reklamy (variácie na A/B testing)</li>
              </ul>
              
              <div class="glass-effect rounded-xl p-6 dark:bg-slate-800 bg-gray-100">
                <p class="dark:text-white text-gray-900 font-bold mb-2">📊 Úspora nákladov:</p>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p class="dark:text-slate-400 text-gray-600 mb-1">Bez AI:</p>
                    <ul class="dark:text-slate-300 text-gray-700 space-y-1">
                      <li>• 10 IG postov: 500€</li>
                      <li>• 1 blog článok: 200€</li>
                      <li>• Email kampaň: 300€</li>
                      <li class="font-bold dark:text-white text-gray-900">= 1000€/mes</li>
                    </ul>
                  </div>
                  <div>
                    <p class="dark:text-slate-400 text-gray-600 mb-1">S AI:</p>
                    <ul class="dark:text-slate-300 text-gray-700 space-y-1">
                      <li>• AI tool: 50€/mes</li>
                      <li>• Vaš čas: 5h × 20€ = 100€</li>
                      <li>• Review/edit: 2h × 30€ = 60€</li>
                      <li class="font-bold text-green-400">= 210€/mes</li>
                    </ul>
                  </div>
                </div>
                <p class="text-green-400 font-bold text-sm mt-4">
                  ÚSPORA: 790€/mes = 9480€/rok! 🚀
                </p>
              </div>
              
              <div class="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mt-4">
                <p class="text-orange-400 font-bold mb-2">⚠️ Pozor:</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  AI content potrebuje review a edit človekom. Nechajte AI urobiť 80% práce, vy dajte final touch.
                </p>
              </div>
            </div>

            <!-- Use Case 3 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-purple-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">3️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Predikcie a insights z dát</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Máte tisícky riadkov dát (predaje, zákazníci, sklad), ale nevie čo s tým.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>AI riešenie:</strong> AI analyzuje data a dá vám actionable insights:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ "Tento produkt sa bude predávať 30% viac budúci mesiac" → Navýšte sklad</li>
                <li>✓ "Zákazníci, ktorí kupujú X, často kupujú aj Y" → Cross-selling</li>
                <li>✓ "80% objednávok prichádza v utorok večer" → Plánujte zamestnancov</li>
                <li>✓ "Tento klient má 75% šancu churnu" → Preventívny kontakt</li>
              </ul>
              
              <div class="glass-effect rounded-xl p-6 dark:bg-slate-800 bg-gray-100">
                <p class="dark:text-white text-gray-900 font-bold mb-2">📊 Reálny príklad - E-shop s módou</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                  AI analyzovalo nákupné vzorce a zistilo:
                </p>
                <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1 mb-2">
                  <li>• Ľudia, čo kupujú rifle, kupujú aj tričká v 65% prípadoch</li>
                  <li>• Implementovali "Často kupované spolu" funkciu</li>
                  <li>• Average order value (AOV) vzrástla z 45€ na 67€</li>
                </ul>
                <p class="text-green-400 font-bold text-sm">
                  = +48% vyšší AOV = +15k€ mesačne navyše! 💰
                </p>
              </div>
            </div>

            <!-- Use Case 4 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-yellow-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">4️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Automatizácia nudných úloh</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Denne robíte tie isté veci: data entry, triedenie emailov, faktúry...
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>AI riešenie:</strong> Automatizujte všetko, čo sa opakuje:
              </p>
              
              <div class="space-y-4 mb-4">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">📧 Email management</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">AI triedi emaily, odpovedá na bežné otázky, eskaluje dôležité</p>
                  <p class="text-green-400 text-xs">Úspora: 1-2h denne</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">📄 Spracovanie faktúr</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">AI číta faktúry, extrahuje dáta, zapisuje do systému</p>
                  <p class="text-green-400 text-xs">Úspora: 5-10h týždenne</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">📊 Reporty</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">AI automaticky generuje týždenné/mesačné reporty</p>
                  <p class="text-green-400 text-xs">Úspora: 3-5h mesačne</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">👥 Lead qualification</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">AI hodnotí leady, triedi cold/warm/hot, prioritizuje</p>
                  <p class="text-green-400 text-xs">Úspora: 2-3h denne + vyššia conversion</p>
                </div>
              </div>
              
              <p class="text-green-400 font-bold">
                Celková úspora: 15-25 hodín týždenne = 1 full-time zamestnanec! 🎯
              </p>
            </div>

            <!-- Use Case 5 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-pink-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">5️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Personalizácia = vyššie predaje</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Fakt:</strong> Personalizované ponuky majú 3-5x vyššiu conversion rate než generické.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>AI riešenie:</strong> AI sleduje správanie zákazníkov a personalizuje:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ <strong>Product recommendations:</strong> "Odporúčame vám..." (ako Netflix/Amazon)</li>
                <li>✓ <strong>Email kampane:</strong> Každý zákazník dostane iný content na základe záujmov</li>
                <li>✓ <strong>Dynamic pricing:</strong> Optimálna cena pre max profit</li>
                <li>✓ <strong>Website content:</strong> Každý vidí iný homepage na základe preferencií</li>
              </ul>
              
              <div class="glass-effect rounded-xl p-6 dark:bg-slate-800 bg-gray-100">
                <p class="dark:text-white text-gray-900 font-bold mb-2">📊 Netflix case study (pre inšpiráciu)</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                  80% sledovaného obsahu na Netflix prichádza z AI odporúčaní. Bez personalizácie by Netflix stratil <strong>$1 miliardu ročne</strong> na churn rate.
                </p>
                <p class="text-blue-400 text-sm mt-3">
                  💡 Rovnakú technológiu môžete použiť vo vašom e-shope/službe!
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">"Ale AI je drahé, nie?"</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Najväčší mýtus! Pozrime sa na reálne čísla:
            </p>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-6">💰 ROI kalkulácia</h3>
              
              <div class="space-y-6">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6">
                  <p class="dark:text-white text-gray-900 font-bold mb-3">Scenár: Malá firma (5-10 zamestnancov)</p>
                  
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <p class="text-red-400 font-bold mb-2">Náklady:</p>
                      <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                        <li>• AI chatbot setup: 800€ jednorazovo</li>
                        <li>• Mesačný poplatok: 100€/mes</li>
                        <li>• AI content tools: 50€/mes</li>
                        <li>• Automatizácie: 200€ jednorazovo</li>
                        <li class="font-bold dark:text-white text-gray-900 pt-2">Rok 1 celkom: 2800€</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p class="text-green-400 font-bold mb-2">Úspory/Príjmy:</p>
                      <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                        <li>• Ušetrený čas: 20h/týždeň × 15€ = 300€/týždeň</li>
                        <li>• = 1200€/mes = 14400€/rok</li>
                        <li>• Zvýšené konverzie: +20% = +3000€/rok</li>
                        <li>• Znížené chyby: +1000€/rok</li>
                        <li class="font-bold text-green-400 pt-2">Rok 1 benefit: 18400€</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="mt-6 pt-6 border-t dark:border-slate-700 border-gray-200">
                    <p class="text-3xl font-bold gradient-text text-center">
                      ROI: 557% 🚀
                    </p>
                    <p class="dark:text-slate-400 text-gray-600 text-sm text-center mt-2">
                      Investícia 2800€ → Return 18400€ = Čistý profit 15600€
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">"Znie to dobre, ale..."</h2>
            
            <div class="space-y-4 mb-8">
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">❓ "AI mi vezme prácu?"</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Nie. AI vezme nudné, opakujúce sa úlohy. Vy sa môžete venovať tvorivej práci, stratégii, komunikácii s klientmi - veciam, ktoré AI nevie. Firmy, ktoré používajú AI, najímajú VIAC ľudí, lebo rastú rýchlejšie.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">❓ "Je to príliš komplikované?"</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Moderné AI tools sú user-friendly. Nepotrebujete byť programátor. Väčšinu vecí nastavíte kliknutím. A ak potrebujete pomoc, existujú firmy (ako my), ktoré to urobia za vás.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">❓ "Moja firma je príliš malá na AI?"</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Práve naopak! Malé firmy profitujú najviac, lebo nemajú veľké tímy. AI vám dá superschopnosti - budete konkurovať firmám 5x väčším s 1/5 ľudí.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">❓ "Môžem počkať rok-dva?"</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Technicky áno, ale... Vaša konkurencia už začína. O rok budú mať náskok. Predstavte si, že ste v 2000 povedali "S internetom počkám". Kde by ste dnes boli? AI je to isté.
                </p>
              </details>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako začať (bez overwhelm)</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-2xl font-bold gradient-text mb-6">Jednoduchý 4-krokový plán:</h3>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-2">Identifikujte "pain points"</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Čo vás najviac štve? Odpovede na emaily? Data entry? Začnite tam.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-2">Pilot projekt</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Začnite s JEDNOU vecou. Napr. AI chatbot. Testujte 1-2 mesiace.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-2">Meranie výsledkov</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Sledujte metriky: ušetrený čas, náklady, spokojnosť. Ak funguje → scale.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <p class="dark:text-white text-gray-900 font-bold mb-2">Postupné rozširovanie</p>
                    <p class="dark:text-slate-300 text-gray-700 text-sm">Keď jeden use case funguje, pridajte ďalší. Build momentum.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Záver: Otázka nie je "Či AI", ale "Kedy"</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              AI nie je budúcnosť. Je prítomnosť. Firmy, ktoré to pochopia teraz, budú mať obrovský náskok o 2-3 roky.
            </p>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Nie je to o tom, že musíte byť tech giant. Malé firmy profitujú často VIAC, lebo AI im dá schopnosti konkurovať veľkým hráčom.
            </p>
            
            <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
              <p class="text-blue-400 font-bold mb-3">💡 Remember:</p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                <li>• AI ušetrí 20-40 hodín týždenne</li>
                <li>• ROI typicky 300-600% prvý rok</li>
                <li>• Implementácia trvá 1-4 týždne</li>
                <li>• Nie je to raketa - je to tool, ako Excel</li>
                <li>• Konkurencia už začala - nebuďte pozadu</li>
              </ul>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Pripravení začať s AI?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Ponúkame <strong>bezplatnú konzultáciu</strong> (45 min) kde analyzujeme váš biznis a ukážeme konkrétne príležitosti pre AI. Žiadny sales pitch, len real value.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem bezplatnú AI konzultáciu
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/preco-potrebuje-moja-firma-ai" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/preco-potrebuje-moja-firma-ai" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
  title: 'Prečo potrebuje moja firma AI? (A prečo práve teraz) | Appinara',
  meta: [
    { name: 'description', content: '5 konkrétnych príkladov, ako AI pomáha slovenským firmám šetriť náklady, zvyšovať predaje a predbehávať konkurenciu. Reálne čísla, žiadna teória.' },
    { name: 'keywords', content: 'AI pre firmy, AI riešenia slovensko, automatizácia firmy, AI chatbot, ai nástroje biznis, prečo ai' },
    
    { property: 'og:title', content: 'Prečo potrebuje moja firma AI? (A prečo práve teraz)' },
    { property: 'og:description', content: '5 príkladov ako AI pomáha firmám šetriť náklady, zvyšovať predaje. ROI 300-600% prvý rok!' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/preco-potrebuje-moja-firma-ai' },
    
    { property: 'article:published_time', content: '2024-11-08T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'AI Business' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/preco-potrebuje-moja-firma-ai' }
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

