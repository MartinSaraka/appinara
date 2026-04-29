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
            <span class="dark:text-slate-300 text-gray-700">Ako vybrať web developera</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              Hiring Guide
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 8 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 1. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Ako vybrať správneho <span class="gradient-text">web developera</span>?
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Checklist, otázky a red flags. Ako neprísť o peniaze a čas výberom zlého developera. Na základe 100+ projektov.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              👨‍💻
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <h3 class="text-xl font-bold text-red-400 mb-4">🚨 Najčastejšie chyby pri výbere</h3>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                <li>❌ Vybrali najlacnejšiu ponuku → web nefungoval, neodpovedá</li>
                <li>❌ "Kamarát zná programovanie" → projekt nikdy nedokončený</li>
                <li>❌ Neoverili portfólio → copy-paste z internetu</li>
                <li>❌ Bez zmluvy → developer zmizol po platbe</li>
                <li>❌ Nezaplatili escrow → žiadne garancie</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">🚩 Red flags - Vyhýbajte sa developerom, ktorí...</h2>
            
            <div class="space-y-4 mb-8">
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-400 mb-2">1. Nemajú žiadne portfólio</h4>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Každý seriózny developer má aspoň 3-5 projektov na ukážku. Ak nemajú, sú buď úplní začiatočníci alebo fake.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-400 mb-2">2. Ponúkajú "web za 200€ za 2 dni"</h4>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Kvalitný web trvá minimálne 1-2 týždne. Ak sľubujú zázraky za babku, dostanete template z internetu.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-400 mb-2">3. Žiadajú 100% platbu vopred</h4>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Štandardne: 30-50% vopred, zvyšok po dodaní. 100% vopred = vysoké riziko.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-400 mb-2">4. Bez písomnej zmluvy/dohody</h4>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Aj s freelancerom musíte mať písomnú dohodu: scope, deadline, cena, vlastníctvo kódu.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-400 mb-2">5. Nekomunikujú jasne a v\u010das</h4>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Ak už pri prvom kontakte trvá 3 dni než odpovedia, počas projektu to bude horšie.
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">✅ Otázky, ktoré MUSÍTE položiť</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">Checklist pred výberom:</h3>
              
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-primary-400 mb-3">📂 O portfóliu:</h4>
                  <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                    <li>□ "Môžem vidieť 3-5 podobných projektov, čo ste robili?"</li>
                    <li>□ "Sú tieto weby stále live? Môžem ich navštíviť?"</li>
                    <li>□ "Môžem kontaktovať vašich predošlých klientov?"</li>
                    <li>□ "Aké technológie použijete pre môj projekt a prečo?"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-purple-400 mb-3">⏰ O procese:</h4>
                  <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                    <li>□ "Aký je timeline projektu? Kedy bude hotovo?"</li>
                    <li>□ "Ako často budeme komunikovať? (daily/weekly updates?)"</li>
                    <li>□ "Čo sa stane ak dôjde k delay? Garancie?"</li>
                    <li>□ "Budem vidieť progress počas vývoja?"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-green-400 mb-3">💰 O platbe:</h4>
                  <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                    <li>□ "Aký je payment schedule? (30/70, 50/50?)"</li>
                    <li>□ "Čo presne zahŕňa cena? (dizajn, content, SEO?)"</li>
                    <li>□ "Aké sú extra náklady? (domain, hosting, údržba?)"</li>
                    <li>□ "Máte garanciu vrátenia peňazí ak nebudeme spokojní?"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-blue-400 mb-3">🔧 Po spustení:</h4>
                  <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                    <li>□ "Ako dlho trvá post-launch podpora? Je free?"</li>
                    <li>□ "Kto bude vlastniť kód a doménu?"</li>
                    <li>□ "Naučíte ma spravovať web? (CMS training?)"</li>
                    <li>□ "Čo sa stane ak niečo prestane fungovať?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Freelancer vs Agentúra: Čo vybrať?</h2>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="glass-effect rounded-2xl p-6">
                <h3 class="text-2xl font-bold text-blue-400 mb-4">👤 Freelancer</h3>
                
                <div class="mb-4">
                  <p class="text-green-400 font-bold mb-2 text-sm">✅ Výhody:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Nižšia cena (30-50% lacnejšie)</li>
                    <li>• Priama komunikácia</li>
                    <li>• Flexibilita</li>
                    <li>• Personal touch</li>
                  </ul>
                </div>
                
                <div>
                  <p class="text-red-400 font-bold mb-2 text-sm">❌ Nevýhody:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Jedna osoba = obmedzené skills</li>
                    <li>• Môže mať delay (choroba, iné projekty)</li>
                    <li>• Menšie garancie</li>
                    <li>• Riziko zmiznutia</li>
                  </ul>
                </div>
                
                <div class="mt-4 pt-4 border-t border-slate-700">
                  <p class="text-blue-400 font-bold text-sm">💡 Najlepšie pre:</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Malé projekty (do 2000€), prezentačné weby, jasný scope</p>
                </div>
              </div>
              
              <div class="glass-effect rounded-2xl p-6">
                <h3 class="text-2xl font-bold text-purple-400 mb-4">🏢 Agentúra</h3>
                
                <div class="mb-4">
                  <p class="text-green-400 font-bold mb-2 text-sm">✅ Výhody:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Tím špecialistov (dizajn, dev, SEO)</li>
                    <li>• Garancie a SLA</li>
                    <li>• Procesy a PM</li>
                    <li>• Backup ak niekto odíde</li>
                  </ul>
                </div>
                
                <div>
                  <p class="text-red-400 font-bold mb-2 text-sm">❌ Nevýhody:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Vyššia cena (2-3x viac)</li>
                    <li>• Menej personal</li>
                    <li>• Dlhšie onboarding</li>
                    <li>• Možné byrokracie</li>
                  </ul>
                </div>
                
                <div class="mt-4 pt-4 border-t border-slate-700">
                  <p class="text-purple-400 font-bold text-sm">💡 Najlepšie pre:</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Veľké projekty (5000€+), e-commerce, aplikácie, enterprise</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako overiť kvalitu portfólia</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-6">🔍 5-minútový audit portfólia:</h3>
              
              <div class="space-y-4">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">1. Otvorte weby na mobile</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">Funguje dobre? Rýchlo? Tlačidlá sú klikateľné? 70% trafficu je z mobilu!</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">2. Test rýchlosti (PageSpeed Insights)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">Score pod 50 = zlý developer. Score 80+ = dobrý developer.</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">3. Skúste nájsť chyby</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">Kliknite všade, vyplňte formuláre. Funguje všetko? Alebo broken links?</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">4. Google "názov_webu reviews"</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">Nájdite klienta na LinkedIn a opýtajte sa na skúsenosť.</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-white text-gray-900 font-bold mb-2">5. Reverse image search</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm">Upload screenshot do Google Images → overíte či to nie je ukradnuté.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Zmluva: Čo MUSÍ obsahovať</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <ul class="space-y-3 dark:text-slate-300 text-gray-700">
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Presný scope:</span> Zoznam všetkého čo bude urobené (stránky, funkcie)
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Timeline & milestones:</span> Kedy čo bude hotové
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Platobné podmienky:</span> Kedy a koľko platíte
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Revízie:</span> Koľko zmien je included (typicky 2-3 rundy)
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Vlastníctvo:</span> Kto vlastní kód, dizajn, doménu po dokončení
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Podpora:</span> Ako dlho free podpora, čo zahŕňa
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 text-xl">✓</span>
                  <div>
                    <span class="font-bold dark:text-white text-gray-900">Penále:</span> Čo sa stane pri delay / nedodaní
                  </div>
                </li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Cenové rozdiely a prečo</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <p class="dark:text-slate-300 text-gray-700 mb-6">Ten istý web môže stáť 500€ alebo 5000€. Prečo?</p>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-2">Developer za 500€:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Študent/začiatočník</li>
                    <li>• WordPress template</li>
                    <li>• Základná funkcionalita</li>
                    <li>• Žiadne SEO</li>
                    <li>• Support: "keď budem mať čas"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-2">Developer za 2000€:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Senior freelancer</li>
                    <li>• Custom dizajn</li>
                    <li>• Všetky funkcie fungujú</li>
                    <li>• Basic SEO included</li>
                    <li>• 1-3 mesiace support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold dark:text-white text-gray-900 mb-2">Agentúra za 5000€:</h4>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Tím špecialistov</li>
                    <li>• Premium custom riešenie</li>
                    <li>• Pokročilé funkcie & integrácie</li>
                    <li>• Full SEO & marketing</li>
                    <li>• 6-12 mesiacov support & SLA</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Hľadáte spolahlivého developera?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Máme overené portfólio, transparentné ceny a spokojných klientov. Prvá konzultácia zdarma - povieme vám presne čo potrebujete a koľko to bude stáť.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem cenovú ponuku
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/ako-vybrat-web-developera" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/ako-vybrat-web-developera" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
  title: 'Ako vybrať správneho web developera? Kompletný guide | Appinara',
  meta: [
    { name: 'description', content: 'Checklist, otázky, red flags. Ako neprísť o peniaze výberom zlého developera. Freelancer vs agentúra. Na základe 100+ projektov.' },
    { name: 'keywords', content: 'výber developera, web developer slovensko, freelancer vs agentúra, ako vybrať programátora' },
    
    { property: 'og:title', content: 'Ako vybrať správneho web developera? Kompletný guide' },
    { property: 'og:description', content: 'Red flags, otázky a checklist. Neprídete o peniaze ani čas!' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/ako-vybrat-web-developera' },
    
    { property: 'article:published_time', content: '2024-11-01T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'Hiring Guide' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/ako-vybrat-web-developera' }
  ]
})
</script>

