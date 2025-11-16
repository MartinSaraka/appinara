<template>
  <div class="relative overflow-hidden bg-slate-950">
    <Navigation />
    
    <article class="relative pt-32 pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <nav class="mb-8 text-sm">
            <NuxtLink to="/" class="text-slate-400 hover:text-primary-400">Domov</NuxtLink>
            <span class="text-slate-600 mx-2">/</span>
            <NuxtLink to="/blog" class="text-slate-400 hover:text-primary-400">Blog</NuxtLink>
            <span class="text-slate-600 mx-2">/</span>
            <span class="text-slate-300">E-shop vs Marketplace</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
              E-commerce Guide
            </span>
            <span class="text-slate-400">📖 9 min čítania</span>
            <span class="text-slate-400">📅 5. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Vlastný e-shop vs. <span class="gradient-text">Marketplace</span>: Čo sa oplatí viac?
          </h1>
          
          <p class="text-xl text-slate-300 mb-12 leading-relaxed">
            Predávate produkty online? Toto rozhodnutie ovplyvní vaše zisky, náklady a budúcnosť biznisu. Porovnanie s reálnymi číslami a príkladmi zo Slovenska.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              🛒
            </div>
          </div>
          
          <div class="prose prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-orange-500">
              <h3 class="text-2xl font-bold text-white mb-4">⚡ TL;DR</h3>
              <p class="text-slate-300 mb-3"><strong>Marketplace (Amazon, Allegro):</strong></p>
              <ul class="space-y-1 text-slate-300 text-sm mb-4">
                <li>✅ Rýchly štart, veľké publikum</li>
                <li>❌ Vysoké poplatky (15-30%), žiadna kontrola</li>
              </ul>
              <p class="text-slate-300 mb-3"><strong>Vlastný e-shop:</strong></p>
              <ul class="space-y-1 text-slate-300 text-sm">
                <li>✅ Plná kontrola, vyššie marže, brand building</li>
                <li>❌ Vyššia počiatočná investícia, potrebujete traffic</li>
              </ul>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Porovnanie: Side-by-Side</h2>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="glass-effect rounded-2xl p-6 border-2 border-blue-500/30">
                <h3 class="text-2xl font-bold text-blue-400 mb-4">🏪 Marketplace</h3>
                <p class="text-slate-400 text-sm mb-4">Amazon, eBay, Allegro, Heureka, Alza Marketplace</p>
                
                <div class="space-y-4">
                  <div>
                    <p class="text-green-400 font-bold mb-2">✅ Výhody:</p>
                    <ul class="text-slate-300 text-sm space-y-1">
                      <li>• Milióny návštevníkov denne</li>
                      <li>• Dôveryhodnosť established brand</li>
                      <li>• Rýchly setup (hodiny)</li>
                      <li>• Built-in platby, logistika</li>
                      <li>• Žiadny marketing na začiatku</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p class="text-red-400 font-bold mb-2">❌ Nevýhody:</p>
                    <ul class="text-slate-300 text-sm space-y-1">
                      <li>• Poplatky 15-30% z predaja</li>
                      <li>• Veľká konkurencia</li>
                      <li>• Žiadny brand building</li>
                      <li>• Obmedzená customizácia</li>
                      <li>• Závislý od platformy</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="glass-effect rounded-2xl p-6 border-2 border-green-500/30">
                <h3 class="text-2xl font-bold text-green-400 mb-4">🏬 Vlastný e-shop</h3>
                <p class="text-slate-400 text-sm mb-4">Shopify, WooCommerce, vlastné riešenie</p>
                
                <div class="space-y-4">
                  <div>
                    <p class="text-green-400 font-bold mb-2">✅ Výhody:</p>
                    <ul class="text-slate-300 text-sm space-y-1">
                      <li>• Plná kontrola nad všetkým</li>
                      <li>• Vyššie profit marže</li>
                      <li>• Budujete svoj brand</li>
                      <li>• Customer data sú vaše</li>
                      <li>• Škálovateľné dlhodobo</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p class="text-red-400 font-bold mb-2">❌ Nevýhody:</p>
                    <ul class="text-slate-300 text-sm space-y-1">
                      <li>• Vyššia počiatočná investícia</li>
                      <li>• Potrebujete vlastný traffic</li>
                      <li>• Marketing náklady</li>
                      <li>• Dlhší čas na profitabilitu</li>
                      <li>• Technická údržba</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Porovnanie nákladov (reálne čísla)</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <h3 class="text-xl font-bold text-white mb-6">Príklad: Predaj 100 produktov/mes za 50€</h3>
              <p class="text-slate-400 text-sm mb-6">Obrat: 5000€/mes | 60,000€/rok</p>
              
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 class="text-lg font-bold text-blue-400 mb-4">Marketplace (Amazon)</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between text-slate-300">
                      <span>Obrat:</span>
                      <span>5000€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Poplatky (15%):</span>
                      <span>-750€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Fulfillment:</span>
                      <span>-200€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Advertising:</span>
                      <span>-300€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Náklady produktu:</span>
                      <span>-2500€</span>
                    </div>
                    <div class="border-t border-slate-700 my-3"></div>
                    <div class="flex justify-between text-white font-bold text-lg">
                      <span>Čistý zisk:</span>
                      <span>1250€</span>
                    </div>
                    <p class="text-slate-400 text-xs mt-2">Marža: 25%</p>
                  </div>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-green-400 mb-4">Vlastný e-shop</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between text-slate-300">
                      <span>Obrat:</span>
                      <span>5000€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Hosting/Shopify:</span>
                      <span>-50€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Platobná brána (2%):</span>
                      <span>-100€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Marketing/SEO:</span>
                      <span>-500€</span>
                    </div>
                    <div class="flex justify-between text-red-400">
                      <span>- Náklady produktu:</span>
                      <span>-2500€</span>
                    </div>
                    <div class="border-t border-slate-700 my-3"></div>
                    <div class="flex justify-between text-white font-bold text-lg">
                      <span>Čistý zisk:</span>
                      <span>1850€</span>
                    </div>
                    <p class="text-slate-400 text-xs mt-2">Marža: 37%</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-6 border-t border-slate-700">
                <p class="text-green-400 font-bold text-center">
                  Vlastný e-shop: +600€/mes = +7200€/rok viac zisku! 💰
                </p>
                <p class="text-slate-400 text-xs text-center mt-2">
                  Pri 60k€ obratu ročne
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Kedy ktoré riešenie?</h2>
            
            <div class="space-y-6 mb-8">
              <div class="glass-effect rounded-xl p-6 border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-400 mb-3">📦 Marketplace je pre vás ak:</h3>
                <ul class="space-y-2 text-slate-300 text-sm">
                  <li>✓ Ste úplný začiatočník v e-commerce</li>
                  <li>✓ Chcete testovať produkt/trh rýchlo</li>
                  <li>✓ Nemáte rozpočet na marketing</li>
                  <li>✓ Predávate commodity produkty (electronics, knihy)</li>
                  <li>✓ Máte nízke marže a potrebujete objem</li>
                  <li>✓ Chcete side hustle, nie full biznis</li>
                </ul>
              </div>
              
              <div class="glass-effect rounded-xl p-6 border-l-4 border-green-500">
                <h3 class="text-xl font-bold text-green-400 mb-3">🏬 Vlastný e-shop je pre vás ak:</h3>
                <ul class="space-y-2 text-slate-300 text-sm">
                  <li>✓ Chcete budovať brand a lojalitu</li>
                  <li>✓ Máte unique/premium produkty</li>
                  <li>✓ Chcete vyššie marže</li>
                  <li>✓ Plánujete dlhodobý biznis</li>
                  <li>✓ Potrebujete kontrolu nad customer experience</li>
                  <li>✓ Chcete vlastniť customer data</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Hybrid stratégia (najlepšie z oboch svetov)</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-2 border-purple-500/30">
              <h3 class="text-2xl font-bold gradient-text mb-4">💡 Pro tip: Multi-channel predaj</h3>
              
              <p class="text-slate-300 mb-4">
                Najúspešnejší predajcovia používajú <strong>obe platformy súčasne</strong>:
              </p>
              
              <div class="space-y-4">
                <div class="bg-slate-800 rounded-lg p-4">
                  <p class="text-white font-bold mb-2">1️⃣ Fáza (0-6 mesiacov)</p>
                  <p class="text-slate-300 text-sm">Začnite na marketplace → testujte produkty, získajte prvé predaje a reviews</p>
                </div>
                
                <div class="bg-slate-800 rounded-lg p-4">
                  <p class="text-white font-bold mb-2">2️⃣ Fáza (6-12 mesiacov)</p>
                  <p class="text-slate-300 text-sm">Spustite vlastný e-shop → investujte zisky z marketplace do vlastnej platformy</p>
                </div>
                
                <div class="bg-slate-800 rounded-lg p-4">
                  <p class="text-white font-bold mb-2">3️⃣ Fáza (12+ mesiacov)</p>
                  <p class="text-slate-300 text-sm">Oba channely súčasne → marketplace pre objem, e-shop pre marže a brand</p>
                </div>
              </div>
              
              <div class="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p class="text-purple-400 font-bold mb-2">📊 Výsledok:</p>
                <ul class="text-slate-300 text-sm space-y-1">
                  <li>• Marketplace: 60% predajov, nízka marža</li>
                  <li>• Vlastný shop: 40% predajov, vysoká marža</li>
                  <li>• Celková profitabilita: +50% vyššia</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Reálne príklady (slovenský trh)</h2>
            
            <div class="space-y-6 mb-8">
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold text-white mb-3">📚 Príklad 1: Knihy a media</h4>
                <p class="text-slate-300 text-sm mb-2">
                  <strong>Stratégia:</strong> Predávajú na Martinus Marketplace + vlastný web
                </p>
                <p class="text-slate-300 text-sm mb-2">
                  <strong>Výsledok:</strong> Marketplace = 70% objemu, vlastný web = 30%, ale 50% zisku z vlastného webu
                </p>
                <p class="text-green-400 text-sm font-bold">→ Hybrid funguje perfektne!</p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <h4 class="text-lg font-bold text-white mb-3">👕 Príklad 2: Fashion brand</h4>
                <p class="text-slate-300 text-sm mb-2">
                  <strong>Stratégia:</strong> Začali na Instagram Shop, po roku vlastný e-shop
                </p>
                <p class="text-slate-300 text-sm mb-2">
                  <strong>Výsledok:</strong> Instagram stále používajú na marketing, ale 90% predajov cez vlastný shop
                </p>
                <p class="text-green-400 text-sm font-bold">→ Vlastný shop vybudoval brand!</p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">FAQ</h2>
            
            <div class="space-y-4 mb-8">
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold text-white mb-2">Koľko stojí spustiť vlastný e-shop?</summary>
                <p class="text-slate-300 mt-4 text-sm">
                  Závisí od platformy: Shopify (29€/mes + 2% fees), WooCommerce (hosting 10€/mes + plugins 50-200€), vlastné riešenie (1500-5000€ setup). Plus marketing budget 300-1000€/mes na začiatku.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold text-white mb-2">Ako dlho trvá, kým e-shop začne zarábať?</summary>
                <p class="text-slate-300 mt-4 text-sm">
                  Marketplace: 1-3 mesiace. Vlastný e-shop: 3-6 mesiacov (závisí od marketingu a produktu). Investícia do SEO sa vráti za 6-12 mesiacov.
                </p>
              </details>
              
              <details class="glass-effect rounded-xl p-6 cursor-pointer">
                <summary class="text-lg font-bold text-white mb-2">Môžem používať obe platformy súčasne?</summary>
                <p class="text-slate-300 mt-4 text-sm">
                  Áno! To je často najlepšia stratégia. Marketplace pre objem a reach, vlastný shop pre marže a brand building. Nástroje ako Shopify majú integrácie pre sync inventory.
                </p>
              </details>
            </div>

            <h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">Záver: Čo odporúčame</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <p class="text-slate-300 leading-relaxed mb-4">
                <strong>Pre úplných začiatočníkov:</strong> Začnite na marketplace (Amazon/Allegro) → validujte produkt a naučte sa basics. Investícia: 0-500€
              </p>
              
              <p class="text-slate-300 leading-relaxed mb-4">
                <strong>Pre serious podnikateľov:</strong> Hybrid od začiatku → marketplace pre traffic, vlastný shop pre brand. Investícia: 2000-5000€
              </p>
              
              <p class="text-slate-300 leading-relaxed">
                <strong>Pre established brands:</strong> Vlastný e-shop ako primary, marketplace ako secondary. Investícia: 5000-15000€
              </p>
            </div>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold text-white mb-4">
                Chcete spustiť vlastný e-shop?
              </h3>
              <p class="text-slate-300 mb-8 max-w-2xl mx-auto">
                Pomôžeme vám vybrať správnu platformu, nastaviť e-shop a spustiť prvé kampane. Prvá konzultácia zdarma.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Chcem bezplatnú konzultáciu
                <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>

            <div class="glass-effect rounded-2xl p-6 mt-12 flex items-center justify-between">
              <div>
                <div class="text-sm text-slate-400 mb-1">Autor článku</div>
                <div class="text-white font-semibold">Martin Saraka - Appinara</div>
              </div>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/eshop-vs-marketplace" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/eshop-vs-marketplace" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
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
  title: 'Vlastný e-shop vs. Marketplace: Čo sa oplatí viac? | Appinara',
  meta: [
    { name: 'description', content: 'Porovnanie vlastného e-shopu a marketplace (Amazon, Allegro). Reálne náklady, zisky a stratégie. Ktoré riešenie je pre váš biznis?' },
    { name: 'keywords', content: 'eshop vs marketplace, vlastný eshop, amazon slovensko, e-commerce, online predaj' },
    
    { property: 'og:title', content: 'Vlastný e-shop vs. Marketplace: Čo sa oplatí viac?' },
    { property: 'og:description', content: 'Porovnanie s reálnymi číslami. Vlastný eshop = +7200€/rok viac zisku pri 60k€ obratu!' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/eshop-vs-marketplace' },
    
    { property: 'article:published_time', content: '2024-11-05T10:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'E-commerce' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/eshop-vs-marketplace' }
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

