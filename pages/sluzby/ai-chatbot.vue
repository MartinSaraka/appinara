<template>
  <div class="relative overflow-hidden bg-bone dark:bg-anthracite">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 animated-gradient">
      <div class="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-semibold mb-6">
            AI Riešenie pre váš biznis
          </span>
          
          <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span class="gradient-text">AI Chatbot</span> pre slovenské firmy
          </h1>
          
          <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Automatizujte zákaznícky servis, ušetrite <strong>20-40 hodín týždenne</strong> a zvýšte predaje o 30%+
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#cennik" class="btn-primary">
              Zobraziť cenník
            </a>
            <a href="#contact" class="btn-secondary">
              Bezplatná konzultácia
            </a>
          </div>
          
          <!-- Social Proof -->
          <div class="flex items-center justify-center gap-8 text-slate-400 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>ROI za 2-4 mesiace</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>Funguje 24/7</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>Slovenský jazyk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="py-20 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Prečo potrebuje váš biznis <span class="gradient-text">AI chatbot</span>?
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="glass-effect rounded-2xl p-8 text-center">
              <div class="text-6xl mb-4">⏰</div>
              <h3 class="text-2xl font-bold text-white mb-3">Šetrite čas</h3>
              <p class="text-slate-300">
                Chatbot odpovie na <strong>70-90% bežných otázok</strong> automaticky. Vy sa môžete venovať dôležitejším úlohám.
              </p>
            </div>
            
            <div class="glass-effect rounded-2xl p-8 text-center">
              <div class="text-6xl mb-4">💰</div>
              <h3 class="text-2xl font-bold text-white mb-3">Zvýšte predaje</h3>
              <p class="text-slate-300">
                <strong>24/7 dostupnosť</strong> znamená viac konverzií. Zákazníci nekončia kvôli nevyzdvihnutému telefónu.
              </p>
            </div>
            
            <div class="glass-effect rounded-2xl p-8 text-center">
              <div class="text-6xl mb-4">😊</div>
              <h3 class="text-2xl font-bold text-white mb-3">Spokojní zákazníci</h3>
              <p class="text-slate-300">
                <strong>Okamžité odpovede</strong> namiesto čakania. Moderný, profesionálny dojem vašej firmy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Use Cases -->
    <section class="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Pre akú firmu je chatbot <span class="gradient-text">najlepší</span>?
          </h2>
          <p class="text-xl text-slate-400 text-center mb-16 max-w-3xl mx-auto">
            AI chatbot pomáha firmám v mnohých odvetviach. Tu sú tie, kde vidíme najlepšie výsledky:
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">💇</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Salóny & Wellness</h3>
                  <p class="text-slate-300 text-sm mb-3">Kaderníctva, nechtové štúdiá, barber shopy, masáže</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Rezervácie online 24/7</li>
                    <li>✓ Info o cenách a službách</li>
                    <li>✓ Pripomienky termínov</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🛒</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">E-shopy & Retail</h3>
                  <p class="text-slate-300 text-sm mb-3">Online obchody, predajne, distribútori</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Odpovede o produktoch</li>
                    <li>✓ Pomoc s objednávkou</li>
                    <li>✓ Tracking zásielok</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🔧</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Servisy & Opravy</h3>
                  <p class="text-slate-300 text-sm mb-3">Auto servisy, IT servisy, domáce opravy</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Zisťovanie porúch</li>
                    <li>✓ Cenové kalkulácie</li>
                    <li>✓ Objednanie servisov</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🏢</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">B2B & Služby</h3>
                  <p class="text-slate-300 text-sm mb-3">Poradenstvo, agentúry, SaaS, IT firmy</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Lead qualification</li>
                    <li>✓ FAQ a dokumentácia</li>
                    <li>✓ Booking konzultácií</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🏥</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Zdravotníctvo</h3>
                  <p class="text-slate-300 text-sm mb-3">Ambulancie, zubári, fyzioterapie, veterináre</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Objednávanie pacientov</li>
                    <li>✓ Info o vyšetreniach</li>
                    <li>✓ Pripomienky termínov</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover:scale-105 transition-transform">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🍕</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Gastro & Pohostinstvo</h3>
                  <p class="text-slate-300 text-sm mb-3">Reštaurácie, kaviarne, donášky jedla</p>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Menu a ceny</li>
                    <li>✓ Rezervácie stolov</li>
                    <li>✓ Objednávky online</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing Section -->
    <section id="cennik" class="py-20 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Transparentný <span class="gradient-text">cenník</span>
          </h2>
          <p class="text-xl text-slate-400 text-center mb-16">
            Žiadne skryté poplatky. Prvá konzultácia vždy zdarma.
          </p>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Starter -->
            <div class="glass-effect rounded-2xl p-8 border border-slate-700">
              <h3 class="text-2xl font-bold text-white mb-2">Starter</h3>
              <div class="text-4xl font-bold text-primary-400 mb-1">400€</div>
              <p class="text-slate-400 text-sm mb-6">jednorazovo + 50€/mes</p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chatbot na vašom webe</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tréning na vašich dátach</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>FAQ a základné otázky</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 mesiac podpora</span>
                </li>
              </ul>
              
              <a href="#contact" class="btn-secondary w-full text-center block">
                Vybrať balík
              </a>
            </div>
            
            <!-- Premium (Recommended) -->
            <div class="glass-effect rounded-2xl p-8 border-2 border-primary-500 relative transform scale-105">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-500 rounded-full text-white text-sm font-bold">
                NAJPOPULÁRNEJŠIE
              </div>
              
              <h3 class="text-2xl font-bold text-white mb-2">Premium</h3>
              <div class="text-4xl font-bold text-primary-400 mb-1">800€</div>
              <p class="text-slate-400 text-sm mb-6">jednorazovo + 100€/mes</p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Všetko zo Starter +</strong></span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Facebook/Instagram integrácia</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Online rezervačný systém</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pokročilé analytics</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 mesiace podpora</span>
                </li>
              </ul>
              
              <a href="#contact" class="btn-primary w-full text-center block">
                Vybrať balík
              </a>
            </div>
            
            <!-- Enterprise -->
            <div class="glass-effect rounded-2xl p-8 border border-slate-700">
              <h3 class="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div class="text-4xl font-bold text-primary-400 mb-1">1500€+</div>
              <p class="text-slate-400 text-sm mb-6">jednorazovo + 150-300€/mes</p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Všetko z Premium +</strong></span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CRM integrácia</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-jazyk (SK, CZ, EN...)</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom API integrácie</span>
                </li>
                <li class="flex items-start gap-2 text-slate-300">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>6 mesiacov podpora</span>
                </li>
              </ul>
              
              <a href="#contact" class="btn-secondary w-full text-center block">
                Kontaktovať
              </a>
            </div>
          </div>
          
          <p class="text-center text-slate-400 mt-12">
            💡 <strong>Prvých 5 klientov v novembri dostáva 30% zľavu!</strong> Neváhajte nás kontaktovať.
          </p>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
            Pripravení na <span class="gradient-text">vlastného AI asistenta</span>?
          </h2>
          <p class="text-xl text-slate-300 mb-8">
            Prvá konzultácia je zdarma. Povieme vám presne, aký návrat investície môžete očakávať.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/#contact" class="btn-primary">
              Chcem bezplatnú konzultáciu
            </NuxtLink>
            <NuxtLink to="/blog/ai-chatbot-pre-maly-biznis" class="btn-secondary">
              Prečítať si viac v blogu
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'AI Chatbot pre firmy na Slovensku | Appinara',
  meta: [
    { name: 'description', content: 'AI chatbot pre slovenské firmy. Automatizujte zákaznícky servis, ušetrite 20-40h týždenne, zvýšte predaje o 30%. ROI za 2-4 mesiace. Od 400€.' },
    { name: 'keywords', content: 'AI chatbot slovensko, chatbot pre firmu, AI asistent, automatizácia zákazníckeho servisu, chatbot cena, AI riešenia' },
    
    // Local Business Schema
    { property: 'og:title', content: 'AI Chatbot pre firmy na Slovensku | Appinara' },
    { property: 'og:description', content: 'AI chatbot, ktorý ušetrí 20-40h týždenne a zvýši predaje o 30%. ROI za 2-4 mesiace.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://appinara.sk/sluzby/ai-chatbot' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/sluzby/ai-chatbot' }
  ]
})
</script>

