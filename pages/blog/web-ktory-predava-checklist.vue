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
            <span class="dark:text-slate-300 text-gray-700">Web ktorý predáva</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              Checklist
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 9 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 10. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            10 vecí, ktoré <span class="gradient-text">musí mať web</span> aby skutočne predával
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Overený checklist zo stoviek projektov. Tieto elementy rozhodujú o tom, či váš web konvertuje návštevníkov na zákazníkov alebo nie. Stačí jedno z nich pokaziť a prichádzate o peniaze.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              ✅
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">🎯 Pre koho je tento článok?</h3>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700">
                <li>✓ Máte web, ale neprichádza z neho dosť objednávok/leadov</li>
                <li>✓ Chystáte sa vytvoriť nový web a chcete to spraviť správne</li>
                <li>✓ Platíte za reklamu, ale konverzie sú nízke</li>
                <li>✓ Chcete vedieť, čo skutočne funguje (nie teórie)</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Prečo väčšina webov NEpredáva?</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              95% slovenských firemných webov sú len "digitálne vizitky" - pekné na pohľad, ale neprinášajú peniaze. Prečo? Lebo ich tvorcovia sa zameriavali na dizajn namiesto na <strong>konverzie</strong>.
            </p>

            <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <p class="text-red-400 font-bold mb-3">⚠️ Varovné signály:</p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                <li>• "Máme 500 návštev mesačne, ale len 2 objednávky"</li>
                <li>• "Návštevníci odídu po 10 sekundách"</li>
                <li>• "Ľudia sa pýtajú na veci, ktoré sú na webe"</li>
                <li>• "Platíme za Google reklamy, ale návratnosť je slabá"</li>
              </ul>
              <p class="dark:text-slate-300 text-gray-700 text-sm mt-4">
                Ak ste povedali "áno" na čokoľvek vyššie, tento článok je pre vás. 👇
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Checklist: 10 vecí, ktoré MUSÍ mať web</h2>

            <!-- Item 1 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-primary-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">1️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Jasná value proposition (do 5 sekúnd)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Návštevník príde na web a nevie, čo robíte a prečo by mal ostať.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Riešenie:</strong> V prvých 5 sekundách musí byť krištáľovo jasné:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Čo ponúkate</li>
                <li>✓ Pre koho to je</li>
                <li>✓ Aký benefit to má</li>
              </ul>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p class="text-red-400 font-bold mb-2">❌ Zlý príklad:</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm italic">
                    "Vitajte v našej firme. Ponúkame kvalitné služby už od roku 2010..."
                  </p>
                  <p class="dark:text-slate-400 text-gray-600 text-xs mt-2">→ Nuda, žiadna špecifickosť</p>
                </div>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p class="text-green-400 font-bold mb-2">✅ Dobrý príklad:</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm italic">
                    "AI chatbot, ktorý ušetrí vašej firme 20 hodín týždenne. Prvých 5 klientov -50%."
                  </p>
                  <p class="dark:text-slate-400 text-gray-600 text-xs mt-2">→ Jasné čo, pre koho, benefit, urgencia</p>
                </div>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-purple-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">2️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Okamžite viditeľné CTA (Call-to-Action)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> Návštevník chce kúpiť/kontaktovať, ale nevie ako.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Riešenie:</strong> CTA tlačidlá musia byť viditeľné BEZ scrollovania:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Kontrastné farby (napr. zelená/oranžová na tmavom pozadí)</li>
                <li>✓ Akčný text: "Získať ponuku", "Objednať teraz", "Zavolať" (NIE "Kliknite tu")</li>
                <li>✓ Veľkosť minimálne 48x48px (ľahko klikateľné)</li>
                <li>✓ Opakované na stránke (každých 2-3 screeny)</li>
              </ul>
              
              <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p class="text-blue-400 font-bold mb-2">💡 Pro tip:</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Sticky (prilepené) CTA tlačidlo, ktoré zostáva viditeľné pri scrollovaní, zvyšuje konverzie o 15-30%. Skúste to!
                </p>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-pink-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">3️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Social proof (dôkazy, že to funguje)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Problém:</strong> "Prečo by som im mal veriť? Môžu mi nahovárať čokoľvek..."
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Riešenie:</strong> Ukážte, že iní vám dôverujú:
              </p>
              
              <ul class="space-y-3 dark:text-slate-300 text-gray-700 mb-4">
                <li><strong>Testimonials:</strong> "Zvýšili sme predaje o 40% za 2 mesiace" - Jana K., majiteľka e-shopu</li>
                <li><strong>Čísla:</strong> "500+ spokojných klientov", "98% spokojnosť", "15 rokov na trhu"</li>
                <li><strong>Logo klientov:</strong> Ak ste robili pre známe firmy</li>
                <li><strong>Case studies:</strong> Detailné príbehy úspechu</li>
                <li><strong>Reviews:</strong> Google reviews, Trustpilot</li>
                <li><strong>Certifikáty:</strong> Ak máte nejaké relevantné</li>
              </ul>
              
              <p class="text-green-400 font-bold text-sm">
                ⚡ Stránky so social proof majú o 40-60% vyššiu konverziu!
              </p>
            </div>

            <!-- Item 4 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">4️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Rýchle načítanie (pod 3 sekundy)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Šokujúca štatistika:</strong> 53% návštevníkov odíde, ak sa web načítava viac ako 3 sekundy.
              </p>
              
              <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                <p class="text-red-400 font-bold mb-2">💸 Koľko vás to stojí?</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Ak máte 1000 návštev/mes a konverzia 3% (30 objednávok) pri priemernej hodnote 50€ = 1500€ mesačne.<br/>
                  <br/>
                  <strong>Pomalý web (strata 40% návštevníkov):</strong> Len 600 návštev → 18 objednávok → 900€ mesačne.<br/>
                  <br/>
                  <span class="text-red-400 font-bold">= STRATA 600€ MESAČNE len kvôli rýchlosti! 🔥</span>
                </p>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Ako to napraviť:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm mb-4">
                <li>✓ Optimalizujte obrázky (WebP formát, komprimácia)</li>
                <li>✓ Použite CDN (Content Delivery Network)</li>
                <li>✓ Minimalizujte CSS/JavaScript</li>
                <li>✓ Lazy loading pre obrázky</li>
                <li>✓ Kvalitný hosting (nie najlacnejší za 3€/mes)</li>
              </ul>
              
              <p class="text-blue-400 text-sm">
                🔧 Otestujte svoj web: <strong>PageSpeed Insights</strong> (Google) - ZADARMO
              </p>
            </div>

            <!-- Item 5 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-orange-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">5️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Mobilná optimalizácia (KRITICKÉ!)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Fact:</strong> 70-80% návštevníkov prichádza z mobilu. Ak váš web na mobile nefunguje dobre, prichádzate o 70% potenciálnych zákazníkov!
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Checkboxes pre mobile:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Text čitateľný bez zoomovania (min 16px)</li>
                <li>✓ Tlačidlá dostatočne veľké na kliknutie prstom</li>
                <li>✓ Menu funkčné a ľahko dostupné</li>
                <li>✓ Formuláre jednoduché a krátke</li>
                <li>✓ Telefónne číslo klikateľné (automaticky zavolá)</li>
                <li>✓ Rýchle načítanie aj na pomalšom 4G</li>
              </ul>
              
              <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <p class="text-green-400 font-bold mb-2">✅ Ako otestovať:</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  1. Otvorte váš web na mobile<br/>
                  2. Skúste urobiť objednávku/kontakt<br/>
                  3. Ak je to frustrujúce pre vás, je to frustrujúce aj pre zákazníkov
                </p>
              </div>
            </div>

            <!-- Item 6 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-blue-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">6️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Jasná navigácia (3-klik rule)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Pravidlo:</strong> Návštevník by mal nájsť čokoľvek na webe max do 3 klikov.
              </p>
              
              <div class="grid md:grid-cols-2 gap-6 mb-4">
                <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p class="text-red-400 font-bold mb-2">❌ Zlá navigácia:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• 10+ položiek v menu</li>
                    <li>• Nejasné názvy ("Riešenia", "Nástroje")</li>
                    <li>• Viacúrovňové dropdown menu</li>
                    <li>• Skryté kontakty</li>
                  </ul>
                </div>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p class="text-green-400 font-bold mb-2">✅ Dobrá navigácia:</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Max 5-7 položiek v menu</li>
                    <li>• Jasné názvy ("Služby", "Cenník", "Kontakt")</li>
                    <li>• Viditeľný search (pre väčšie weby)</li>
                    <li>• Kontakt v headeri VŽDY</li>
                  </ul>
                </div>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                <strong>Test:</strong> Dajte vášmu kamarátovi, ktorý web nepozná, nájsť nejaký produkt/info. Ak to trvá dlhšie ako 30 sekúnd, máte problém.
              </p>
            </div>

            <!-- Item 7 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-yellow-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">7️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Transparentné ceny (ak je to možné)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Kontroverzia:</strong> "Mám dávať ceny na web alebo nie?"
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Odpoveď:</strong> Ak môžete, ÁNO! Tu prečo:
              </p>
              
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Filtruje nekvalitných leadov (ľudia, čo si to nemôžu dovoliť)</li>
                <li>✓ Buduje dôveru (transparentnosť)</li>
                <li>✓ Kvalifikuje leady (kto kontaktuje, už vie čo to stojí)</li>
                <li>✓ Zvyšuje konverzie o 20-40% (study z CXL Institute)</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Ako to urobiť:</strong></p>
              <div class="space-y-3">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-slate-300 text-gray-700 text-sm"><strong>Ak máte fixné ceny:</strong> Ukážte ich priamo (napr. SaaS, produkty)</p>
                </div>
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-slate-300 text-gray-700 text-sm"><strong>Ak to závisí:</strong> "Od 800€" alebo rozsah "800-2000€"</p>
                </div>
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="dark:text-slate-300 text-gray-700 text-sm"><strong>Ak je to komplexné:</strong> "Cenová kalkulačka" alebo 3 balíky (Basic, Premium, Enterprise)</p>
                </div>
              </div>
            </div>

            <!-- Item 8 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-teal-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">8️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Jednoduchý kontaktný formulár</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Každé pole vo formulári = -10% konverzia</strong>
              </p>
              
              <div class="grid md:grid-cols-2 gap-6 mb-4">
                <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p class="text-red-400 font-bold mb-2">❌ Zlý formulár (12 polí):</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Meno, Priezvisko</li>
                    <li>• Email, Telefón</li>
                    <li>• Firma, IČO, DIČ</li>
                    <li>• Adresa, Mesto, PSČ</li>
                    <li>• Správa</li>
                    <li>• Súhlas GDPR (2 checkboxy)</li>
                  </ul>
                  <p class="text-red-400 text-xs mt-2">→ Konverzia: 1-2%</p>
                </div>
                
                <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p class="text-green-400 font-bold mb-2">✅ Dobrý formulár (3-4 polia):</p>
                  <ul class="dark:text-slate-300 text-gray-700 text-sm space-y-1">
                    <li>• Meno</li>
                    <li>• Email ALEBO Telefón</li>
                    <li>• Správa (voliteľné)</li>
                    <li>• GDPR checkbox</li>
                  </ul>
                  <p class="text-green-400 text-xs mt-2">→ Konverzia: 5-8%</p>
                </div>
              </div>
              
              <p class="text-blue-400 text-sm">
                💡 Ak potrebujete viac info, zbierajte to potom cez email/telefón. Priorita #1: DOSTAŤ KONTAKT!
              </p>
            </div>

            <!-- Item 9 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-indigo-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">9️⃣</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Urgencia & FOMO (Fear of Missing Out)</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Psychológia:</strong> Ľudia odkladajú rozhodnutia. Dajte im dôvod konať TERAZ.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Osvedčené techniky:</strong></p>
              <ul class="space-y-3 dark:text-slate-300 text-gray-700 mb-4">
                <li><strong>Časová limitácia:</strong> "Ponuka platí do konca týždňa" ⏰</li>
                <li><strong>Množstvová limitácia:</strong> "Zostáva len 5 kusov na sklade" 📦</li>
                <li><strong>Exkluzivita:</strong> "Prvých 10 klientov -30%" 🎁</li>
                <li><strong>Social proof v reálnom čase:</strong> "Martin z Bratislavy práve objednal" 👥</li>
                <li><strong>Garancie:</strong> "14-dňová záruka vrátenia peňazí" ✅</li>
              </ul>
              
              <div class="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                <p class="text-orange-400 font-bold mb-2">⚠️ Dôležité:</p>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Urgencia musí byť PRAVDIVÁ! Falošné "zostávajú 2 kusy" (ktoré sú tam už 3 mesiace) ničí dôveru. Používajte len real urgentnosti.
                </p>
              </div>
            </div>

            <!-- Item 10 -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-red-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🔟</div>
                <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-2">Live chat alebo chatbot</h3>
              </div>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Štatistika:</strong> 44% online shoppers povedalo, že live chat počas nákupu je jedna z najdôležitejších funkcií.
              </p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4">
                <strong>Prečo to funguje:</strong>
              </p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Okamžité odpovede na otázky (menej abandonment)</li>
                <li>✓ Môžete zachytiť ľudí pred odchodom</li>
                <li>✓ Personal touch (zákazník nie je sám)</li>
                <li>✓ Zvyšuje konverzie o 15-40%</li>
              </ul>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="font-bold dark:text-white text-gray-900 mb-2">💬 Live chat (človek)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2"><strong>Výhody:</strong> Personal, kvalitné odpovede</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2"><strong>Nevýhody:</strong> Drahé, funguje len keď ste online</p>
                  <p class="dark:text-slate-400 text-gray-600 text-xs">Náklady: 50-200€/mes</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-4">
                  <p class="font-bold dark:text-white text-gray-900 mb-2">🤖 AI chatbot</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2"><strong>Výhody:</strong> 24/7, lacnejšie, škálovateľné</p>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2"><strong>Nevýhody:</strong> Menej personal, pri zložitých otázkach slabší</p>
                  <p class="dark:text-slate-400 text-gray-600 text-xs">Náklady: 50-100€/mes prevádzka</p>
                </div>
              </div>
              
              <p class="text-blue-400 text-sm mt-4">
                💡 Najlepšie: Hybrid - AI chatbot pre básické otázky + možnosť presmerovať na človeka
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako to všetko implementovať?</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-2xl font-bold gradient-text mb-6">Akčný plán (prioritizovaný)</h3>
              
              <div class="space-y-6">
                <div>
                  <p class="dark:text-white text-gray-900 font-bold mb-2">🔥 Tento týždeň (quick wins):</p>
                  <ol class="list-decimal list-inside space-y-1 dark:text-slate-300 text-gray-700 text-sm">
                    <li>Zmeňte headline na jasný value proposition</li>
                    <li>Pridajte viditeľné CTA tlačidlo</li>
                    <li>Otestujte web na mobile - opravte chyby</li>
                    <li>Zmeňte kontaktný formulár na max 3-4 polia</li>
                  </ol>
                </div>
                
                <div>
                  <p class="dark:text-white text-gray-900 font-bold mb-2">⚡ Tento mesiac (medium effort):</p>
                  <ol class="list-decimal list-inside space-y-1 dark:text-slate-300 text-gray-700 text-sm">
                    <li>Pridajte testimonials a social proof</li>
                    <li>Optimalizujte rýchlosť (PageSpeed Insights)</li>
                    <li>Zjednodušte navigáciu</li>
                    <li>Pridajte ceny (ak možno)</li>
                  </ol>
                </div>
                
                <div>
                  <p class="dark:text-white text-gray-900 font-bold mb-2">🚀 Tento kvartál (bigger projects):</p>
                  <ol class="list-decimal list-inside space-y-1 dark:text-slate-300 text-gray-700 text-sm">
                    <li>Implementujte AI chatbot alebo live chat</li>
                    <li>Pridajte urgentnosti a FOMO elementy</li>
                    <li>A/B testing - testujte čo funguje najlepšie</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Reálny príklad: Pred vs Po</h2>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="glass-effect rounded-xl p-6 border-2 border-red-500/30">
                <h4 class="text-xl font-bold text-red-400 mb-4">❌ PRED (konverzia 0.8%)</h4>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <li>• Generický headline: "Vitajte"</li>
                  <li>• CTA v footeri (invisible)</li>
                  <li>• Žiadne testimonials</li>
                  <li>• Loading 7 sekúnd</li>
                  <li>• Na mobile nečitateľné</li>
                  <li>• Formulár s 15 poliami</li>
                  <li>• Žiadne ceny</li>
                  <li>• Žiadny live chat</li>
                </ul>
                <p class="mt-4 text-red-400 font-bold">
                  1000 návštev → 8 konverzií
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-2 border-green-500/30">
                <h4 class="text-xl font-bold text-green-400 mb-4">✅ PO (konverzia 4.2%)</h4>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <li>• Jasný value prop: "Zvýšte predaje o 30%"</li>
                  <li>• CTA tlačidlo hneď viditeľné</li>
                  <li>• 5 testimonials s fotkami</li>
                  <li>• Loading 1.8 sekúnd</li>
                  <li>• Mobile-first dizajn</li>
                  <li>• Formulár: 3 polia</li>
                  <li>• Transparentné balíky a ceny</li>
                  <li>• AI chatbot 24/7</li>
                </ul>
                <p class="mt-4 text-green-400 font-bold">
                  1000 návštev → 42 konverzií
                </p>
              </div>
            </div>
            
            <div class="glass-effect rounded-2xl p-6 text-center">
              <p class="text-3xl font-bold gradient-text mb-2">+425% zvýšenie konverzií! 🚀</p>
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                = +34 zákazníkov mesačne × 50€ priemerná hodnota = <strong>+1700€ mesačne</strong>
              </p>
              <p class="dark:text-slate-400 text-gray-600 text-xs mt-2">
                Investícia do redesignu: 1500€ → Návratnosť za 1 mesiac!
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Záver</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Väčšina problémov s konverziami nie je o dizajne, ale o <strong>psychológii a user experience</strong>. Týchto 10 vecí sme overili na stovkách projektov a fungujú across the board.
            </p>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Nemusíte implementovať všetko naraz. Začnite s top 3-5 a sledujte výsledky. Často už malé zmeny prinesú veľké výsledky.
            </p>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Potrebujete pomoc s optimalizáciou?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Urobíme vám <strong>bezplatný audit</strong> vášho webu a povieme vám presne, čo treba zmeniť pre lepšie konverzie.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem bezplatný audit webu
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/web-ktory-predava-checklist" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/web-ktory-predava-checklist" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
  title: '10 vecí, ktoré musí mať web aby skutočne predával | Appinara',
  meta: [
    { name: 'description', content: 'Overený checklist zo stoviek projektov. Tieto elementy rozhodujú o tom, či váš web konvertuje návštevníkov na zákazníkov. Praktický návod krok za krokom.' },
    { name: 'keywords', content: 'web ktorý predáva, konverzie web, ako zvýšiť konverzie, optimalizácia webu, UX checklist, website conversions' },
    
    { property: 'og:title', content: '10 vecí, ktoré musí mať web aby skutočne predával' },
    { property: 'og:description', content: 'Checklist zo stoviek projektov. Stačí jedno z nich pokaziť a prichádzate o peniaze.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/web-ktory-predava-checklist' },
    
    { property: 'article:published_time', content: '2024-11-10T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'Conversion Optimization' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/web-ktory-predava-checklist' }
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

