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
            <span class="dark:text-slate-300 text-gray-700">Koľko stojí webová stránka</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              Pricing Guide
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 10 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 12. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Koľko stojí webová stránka v roku <span class="gradient-text">2025</span>?
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Transparentný prehľad cien webových stránok na Slovensku. Prečo niektoré weby stoja 300€ a iné 3000€? Rozložíme si to s reálnymi príkladmi.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              💰
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">💡 Rýchla odpoveď</h3>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700">
                <li><strong>Jednoduchá prezentačná stránka:</strong> 300-800€</li>
                <li><strong>Profesionálny web pre firmu:</strong> 800-2000€</li>
                <li><strong>E-shop/E-commerce:</strong> 1500-5000€</li>
                <li><strong>Webová aplikácia/SaaS:</strong> 3000-15000€+</li>
                <li><strong>Enterprise riešenie:</strong> 10000-50000€+</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Prečo je taký rozdiel v cenách?</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Možno ste videli ponuky od 200€ až po 10000€ a pýtate sa: "Prečo taký rozdiel?" Odpoveď nie je jednoduchá. Cena webu závisí od mnohých faktorov, podobne ako pri aute - Škoda aj Porsche vás dovezú z bodu A do B, ale rozdiel je v kvalite, výkone a funkciách.
            </p>

            <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-4">🎯 Hlavné faktory ovplyvňujúce cenu:</h3>
            
            <div class="space-y-6 my-8">
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-xl font-bold text-primary-400 mb-3">1. Dizajn</h4>
                <div class="space-y-3 dark:text-slate-300 text-gray-700">
                  <p><strong>Šablóna (WordPress téma):</strong> 0-100€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Vyzerá genericky, tisíce rovnakých webov</span></p>
                  
                  <p><strong>Upravená šablóna:</strong> 200-500€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Základná personalizácia (farby, logo, obsah)</span></p>
                  
                  <p><strong>Vlastný dizajn:</strong> 800-2000€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Unique vzhľad presne pre vašu firmu</span></p>
                  
                  <p><strong>Premium custom dizajn:</strong> 2000-5000€+<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Komplexné UX/UI, animácie, brand identity</span></p>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-xl font-bold text-purple-400 mb-3">2. Funkcionalita</h4>
                <div class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <p>✓ <strong>Základná stránka</strong> (O nás, Služby, Kontakt): +0€</p>
                  <p>✓ <strong>Kontaktný formulár:</strong> +50-150€</p>
                  <p>✓ <strong>Blog/Novinky:</strong> +100-300€</p>
                  <p>✓ <strong>Multilanguage:</strong> +200-500€</p>
                  <p>✓ <strong>Online rezervácie:</strong> +300-800€</p>
                  <p>✓ <strong>E-shop základný:</strong> +800-2000€</p>
                  <p>✓ <strong>E-shop pokročilý:</strong> +2000-5000€</p>
                  <p>✓ <strong>AI chatbot:</strong> +400-1500€</p>
                  <p>✓ <strong>CRM integrácia:</strong> +500-1500€</p>
                  <p>✓ <strong>Custom funkcie:</strong> +800-5000€+</p>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-xl font-bold text-blue-400 mb-3">3. Technológia</h4>
                <div class="grid md:grid-cols-2 gap-4 dark:text-slate-300 text-gray-700 text-sm">
                  <div>
                    <p class="font-bold dark:text-white text-gray-900 mb-2">Budget riešenia:</p>
                    <ul class="space-y-1 dark:text-slate-400 text-gray-600">
                      <li>• Wix, Squarespace</li>
                      <li>• WordPress s témou</li>
                      <li>• Page buildery</li>
                      <li>• Obmedzené možnosti</li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-bold dark:text-white text-gray-900 mb-2">Premium riešenia:</p>
                    <ul class="space-y-1 dark:text-slate-400 text-gray-600">
                      <li>• React, Vue, Nuxt</li>
                      <li>• Custom backend</li>
                      <li>• Škálovateľné</li>
                      <li>• Rýchle, bezpečné</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-xl font-bold text-green-400 mb-3">4. Kto to robí</h4>
                <div class="space-y-3 dark:text-slate-300 text-gray-700">
                  <p><strong>Študent/Začiatočník:</strong> 200-600€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Nízka cena, ale môže chýbať skúsenosť</span></p>
                  
                  <p><strong>Freelancer (junior):</strong> 500-1500€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Základné skúsenosti, nižšie ceny</span></p>
                  
                  <p><strong>Freelancer (senior):</strong> 1500-5000€<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Profesionál s portfóliom, kvalita zaručená</span></p>
                  
                  <p><strong>Web agentúra:</strong> 3000-15000€+<br/>
                  <span class="text-sm dark:text-slate-400 text-gray-600">→ Tím špecialistov, procesy, garancia</span></p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Detailný cenník podľa typov webov</h2>

            <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-4">💼 1. Jednoduchá prezentačná stránka</h3>
            
            <div class="glass-effect rounded-xl p-6 mb-6">
              <p class="text-3xl font-bold text-green-400 mb-4">300-800€</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4"><strong>Pre koho:</strong> Malé firmy, živnostníci, jednoduché služby</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Čo obsahuje:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ 3-5 podstránok (Domov, O nás, Služby, Cenník, Kontakt)</li>
                <li>✓ Responzívny dizajn (mobil, tablet)</li>
                <li>✓ Kontaktný formulár</li>
                <li>✓ Základné SEO</li>
                <li>✓ Integrácia Google Maps</li>
                <li>✓ Social media linky</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Technológia:</strong> WordPress, Wix, alebo základný HTML/CSS</p>
              
              <p class="dark:text-slate-300 text-gray-700"><strong>Čas realizácie:</strong> 1-2 týždne</p>
            </div>

            <div class="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-8">
              <p class="text-orange-400 font-bold mb-2">⚠️ Pozor na "weby za 200€"</p>
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                Často ide o automaticky vygenerované stránky z šablón bez akejkoľvek personalizácie. Vyzerajú ako tisícky iných webov a nebudú vás reprezentovať profesionálne.
              </p>
            </div>

            <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-4">🏢 2. Profesionálny firemný web</h3>
            
            <div class="glass-effect rounded-xl p-6 mb-6">
              <p class="text-3xl font-bold text-blue-400 mb-4">800-2500€</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4"><strong>Pre koho:</strong> Stredné firmy, profesionálne služby, B2B</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Čo obsahuje:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ 8-15 podstránok</li>
                <li>✓ Vlastný custom dizajn</li>
                <li>✓ Blog sekcia</li>
                <li>✓ Galéria/Portfólio</li>
                <li>✓ Pokročilé SEO</li>
                <li>✓ Newsletter integrácia</li>
                <li>✓ Analytics tracking</li>
                <li>✓ CMS pre správu obsahu</li>
                <li>✓ Performance optimalizácia</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Technológia:</strong> Moderné frameworky (Nuxt, Next.js), custom WordPress</p>
              
              <p class="dark:text-slate-300 text-gray-700"><strong>Čas realizácie:</strong> 3-6 týždňov</p>
            </div>

            <div class="glass-effect rounded-xl p-6 mb-8">
              <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-3">💡 Reálny príklad - Law Firm</h4>
              <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                <strong>Cena:</strong> 1800€ jednorazovo + 50€/mes hosting
              </p>
              <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                <strong>Obsahuje:</strong> 12 podstránok, blog, kontaktný formulár, multilingual (SK/EN), SEO optimalizácia
              </p>
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                <strong>Výsledok:</strong> 3x viac kontaktov zo webu, top 5 na Google pre hlavné keywords za 4 mesiace
              </p>
            </div>

            <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-4">🛒 3. E-shop / E-commerce</h3>
            
            <div class="glass-effect rounded-xl p-6 mb-6">
              <p class="text-3xl font-bold text-purple-400 mb-4">1500-5000€</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4"><strong>Pre koho:</strong> Online obchody, retail, distribútori</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Základný e-shop (1500-2500€):</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Katalóg produktov (do 100 položiek)</li>
                <li>✓ Košík a checkout</li>
                <li>✓ Platobná brána (karta, prevodom)</li>
                <li>✓ Správa objednávok</li>
                <li>✓ Základný sklad</li>
                <li>✓ Email notifikácie</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Pokročilý e-shop (2500-5000€):</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ Všetko zo základného +</li>
                <li>✓ Neobmedzený počet produktov</li>
                <li>✓ Varianty produktov (veľkosť, farba)</li>
                <li>✓ Pokročilý sklad management</li>
                <li>✓ Integrácia s dopravcami (GLS, DPD)</li>
                <li>✓ Zľavové kupóny a akcie</li>
                <li>✓ Wishlist, porovnanie produktov</li>
                <li>✓ Product reviews</li>
                <li>✓ Multi-warehouse</li>
                <li>✓ ERP integrácia</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Technológia:</strong> WooCommerce, Shopify, alebo custom (Next.js + Stripe)</p>
              
              <p class="dark:text-slate-300 text-gray-700"><strong>Čas realizácie:</strong> 4-12 týždňov</p>
            </div>

            <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
              <p class="text-green-400 font-bold mb-2">💰 Návratnosť investície</p>
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                Kvalitný e-shop s priemerným obratom 5000€/mes sa vráti za 3-6 mesiacov. Ak máte existujúci biznis, online obchod zvýši predaje o 40-100%.
              </p>
            </div>

            <h3 class="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-4">⚡ 4. Webová aplikácia / SaaS</h3>
            
            <div class="glass-effect rounded-xl p-6 mb-6">
              <p class="text-3xl font-bold text-pink-400 mb-4">3000-15000€+</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-4"><strong>Pre koho:</strong> Startupy, SaaS, komplexné interné systémy</p>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Príklady:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>• CRM systémy (3000-8000€)</li>
                <li>• Project management tools (4000-10000€)</li>
                <li>• Booking/Reservation systems (2000-5000€)</li>
                <li>• Social platforms (8000-20000€+)</li>
                <li>• Marketplace (10000-30000€+)</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Obsahuje:</strong></p>
              <ul class="space-y-2 dark:text-slate-300 text-gray-700 mb-4">
                <li>✓ User authentication (login, registrácia)</li>
                <li>✓ User dashboard</li>
                <li>✓ Database architecture</li>
                <li>✓ API development</li>
                <li>✓ Real-time features</li>
                <li>✓ Payment processing</li>
                <li>✓ Admin panel</li>
                <li>✓ Security & GDPR compliance</li>
              </ul>
              
              <p class="dark:text-slate-300 text-gray-700 mb-3"><strong>Technológia:</strong> React/Vue/Nuxt, Node.js/Python, PostgreSQL/MongoDB, AWS/Vercel</p>
              
              <p class="dark:text-slate-300 text-gray-700"><strong>Čas realizácie:</strong> 2-6 mesiacov</p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Skryté náklady - Na čo nezabudnúť</h2>
            
            <div class="space-y-4 my-8">
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-3">🌐 Hosting & Doména</h4>
                <div class="dark:text-slate-300 text-gray-700 text-sm space-y-2">
                  <p><strong>Doména (.sk, .com):</strong> 10-30€/rok</p>
                  <p><strong>Basic hosting:</strong> 3-10€/mes (malé weby)</p>
                  <p><strong>VPS hosting:</strong> 15-50€/mes (stredné weby)</p>
                  <p><strong>Cloud hosting (AWS/Vercel):</strong> 20-200€/mes (aplikácie)</p>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-3">📧 Email & Služby</h4>
                <div class="dark:text-slate-300 text-gray-700 text-sm space-y-2">
                  <p><strong>Profesionálny email:</strong> 5-15€/mes (Google Workspace, Microsoft 365)</p>
                  <p><strong>Email marketing:</strong> 10-50€/mes (Mailchimp, SendGrid)</p>
                  <p><strong>Analytics tools:</strong> 0-100€/mes (Google Analytics free, Hotjar paid)</p>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-3">🔧 Údržba & Podpora</h4>
                <div class="dark:text-slate-300 text-gray-700 text-sm space-y-2">
                  <p><strong>Základná údržba:</strong> 0-50€/mes (WordPress updates, bezpečnosť)</p>
                  <p><strong>Obsahové zmeny:</strong> 30-100€/hod (ak robíte často)</p>
                  <p><strong>Mesačná podpora:</strong> 100-500€/mes (garantovaná podpora, monitoring)</p>
                  <p><strong>Unič changes/features:</strong> 50-150€/hod</p>
                </div>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-3">📸 Obsah & Texty</h4>
                <div class="dark:text-slate-300 text-gray-700 text-sm space-y-2">
                  <p><strong>Copywriting:</strong> 30-80€/stránka</p>
                  <p><strong>Fotografie (stock):</strong> 10-50€/fotka</p>
                  <p><strong>Profesionálne foto:</strong> 300-1000€/shooting</p>
                  <p><strong>Video:</strong> 500-3000€ (závisí od zložitosti)</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako ušetriť (bez straty kvality)</h2>
            
            <div class="grid md:grid-cols-2 gap-6 my-8">
              <div class="glass-effect rounded-xl p-6 border-l-4 border-green-500">
                <h4 class="text-xl font-bold text-green-400 mb-3">✅ Smart tipy</h4>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <li>✓ Pripravte si obsah vopred (texty, fotky)</li>
                  <li>✓ Začnite s MVP, features pridávajte postupne</li>
                  <li>✓ Použite kvalitné stock fotky namiesto custom</li>
                  <li>✓ Zvážte senior freelancera namiesto agentúry</li>
                  <li>✓ Investujte do dobrého dizajnu - dlhodobo sa oplatí</li>
                  <li>✓ Nauč sa základnú správu webu (WordPress admin)</li>
                </ul>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-red-500">
                <h4 class="text-xl font-bold text-red-400 mb-3">❌ Čomu sa vyhnúť</h4>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <li>✗ Najlacnejšia ponuka nie je najlepšia ponuka</li>
                  <li>✗ "Kamarát čo vie robiť weby" často končí zle</li>
                  <li>✗ Šablóny bez customizácie = generický vzhľad</li>
                  <li>✗ Zabudnuté SEO = nikto vás nenájde</li>
                  <li>✗ Neoptimalizované obrázky = pomalý web</li>
                  <li>✗ Bez mobilnej verzie v 2024 = strata 70% návštev</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Časté otázky</h2>
            
            <div class="space-y-4 my-8">
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Prečo je web od agentúry 3x drahší než od freelancera?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Agentúra má vyššie náklady (kancelárie, zamestnanci, DPH), ale dostávate tím špecialistov (dizajnér, developer, copywriter, SEO), garantovanú kvalitu, procesy a po-predajnú podporu. Freelancer je lacnejší, ale je to jedna osoba - môže byť menej dostupný a nemá tak široké portfólio skills.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Môžem použiť Wix alebo Squarespace namiesto vlastného webu?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Áno, pre úplne základné stránky môžu byť OK (náklady 10-20€/mes). Ale majú limitácie: pomalšie loading, horšie SEO, obmedzené možnosti customizácie, uviaznutosť na platforme. Pre seriózny biznis odporúčam vlastné riešenie.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Koľko stojí údržba webu ročne?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Základná údržba (hosting, doména, updates): 200-500€/rok. Ak chcete garantovanú podporu, obsahové zmeny a monitoring: 1000-3000€/rok. E-shopy a aplikácie: 2000-10000€/rok (závisí od zložitosti).
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Oplatí sa investovať do drahšieho webu?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Ak je web váš hlavný business nástroj (e-shop, lead generation), určite áno! Kvalitný web s dobrým UX a SEO môže zvýšiť konverzie o 50-200%. Web za 2000€, ktorý vám prinesie 5 klientov navyš mesačne, sa vráti za pár mesiacov.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold dark:text-white text-gray-900 mb-2">Ako dlho trvá vytvoriť web?</summary>
                <p class="dark:text-slate-300 text-gray-700 mt-4 text-sm">
                  Jednoduchá stránka: 1-2 týždne. Firemný web: 3-6 týždňov. E-shop: 1-3 mesiace. Webová aplikácia: 2-6 mesiacov. Závisí aj od vás - ako rýchlo poskytnete obsah, feedback, schválenia.
                </p>
              </details>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Chcete cenovú kalkuláciu pre váš projekt?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Pošlite nám pár základných info o tom, čo potrebujete, a do 24 hodín vám pošleme detailnú cenovú ponuku s časovým plánom.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Získať cenovú ponuku zdarma
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/kolko-stoji-webova-stranka-2024" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/kolko-stoji-webova-stranka-2024" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
  title: 'Koľko stojí webová stránka v roku 2025? Kompletný cenník | Appinara',
  meta: [
    { name: 'description', content: 'Transparentný prehľad cien webových stránok na Slovensku. Od 300€ po 15000€ - prečo je taký rozdiel? Reálne príklady a tips ako ušetriť.' },
    { name: 'keywords', content: 'cena webovej stránky, koľko stojí web, tvorba webu cena, web development cena slovensko, e-shop cena' },
    
    { property: 'og:title', content: 'Koľko stojí webová stránka v roku 2024? Kompletný cenník' },
    { property: 'og:description', content: 'Transparentný prehľad cien webových stránok. Prečo niektoré weby stoja 300€ a iné 3000€? Všetko vysvetlené.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/kolko-stoji-webova-stranka-2024' },
    
    { property: 'article:published_time', content: '2024-11-12T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'Web Development' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/kolko-stoji-webova-stranka-2024' }
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

