<template>
  <div class="min-h-screen bg-slate-950">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Content -->
    <div class="container mx-auto px-6 py-32">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <NuxtLink 
          to="/"
          class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Späť na hlavnú stránku
        </NuxtLink>
        
        <!-- Header -->
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">
          Ochrana <span class="gradient-text">osobných údajov</span>
        </h1>
        <p class="text-slate-400 mb-12">Posledná aktualizácia: {{ currentDate }}</p>
        
        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-none">
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">1. Úvod</h2>
            <p class="text-slate-300 leading-relaxed">
              Spoločnosť Appinara (ďalej len "my", "nás" alebo "naša spoločnosť") rešpektuje vaše súkromie a zaväzuje sa chrániť vaše osobné údaje. Táto politika ochrany osobných údajov vás informuje o tom, ako spracovávame vaše osobné údaje pri návšteve našej webovej stránky a používaní našich služieb.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">2. Aké údaje zbierame</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Môžeme zbierať, používať, uchovávať a prenášať rôzne druhy osobných údajov o vás, ktoré sme zoskupili nasledovne:
            </p>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li><strong>Identifikačné údaje:</strong> meno, priezvisko, e-mailová adresa, telefónne číslo</li>
              <li><strong>Kontaktné údaje:</strong> fakturačná adresa, e-mailová adresa, telefónne čísla</li>
              <li><strong>Technické údaje:</strong> IP adresa, typ a verzia prehliadača, časové pásmo, typy a verzie pluginov prehliadača, operačný systém a platforma</li>
              <li><strong>Údaje o používaní:</strong> informácie o tom, ako používate našu webovú stránku a služby</li>
              <li><strong>Marketingové a komunikačné údaje:</strong> vaše preferencie pri prijímaní marketingu od nás</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">3. Ako používame vaše údaje</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Vaše osobné údaje používame na nasledujúce účely:
            </p>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li>Poskytovanie a správa našich služieb</li>
              <li>Spracovanie a plnenie vašich objednávok</li>
              <li>Komunikácia s vami o našich službách</li>
              <li>Zlepšovanie našich služieb a webovej stránky</li>
              <li>Zasielanie marketingových oznámení (len s vaším súhlasom)</li>
              <li>Dodržiavanie právnych povinností</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">4. Zdieľanie vašich údajov</h2>
            <p class="text-slate-300 leading-relaxed">
              Vaše osobné údaje nepredávame, nevymieňame ani inak neprenášame tretím stranám bez vášho súhlasu, okrem prípadov, keď je to potrebné na poskytnutie služby (napr. platobné brány, hosting) alebo keď nás k tomu zaväzuje zákon.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">5. Bezpečnosť údajov</h2>
            <p class="text-slate-300 leading-relaxed">
              Implementovali sme vhodné bezpečnostné opatrenia, aby sme zabránili náhodnému strateniu, použitiu alebo prístupu k vašim osobným údajom neoprávneným spôsobom. Prístup k vašim osobným údajom je obmedzený len na zamestnancov, ktorí ho potrebujú na výkon svojej práce.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">6. Vaše práva</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Podľa GDPR máte nasledujúce práva:
            </p>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li><strong>Právo na prístup</strong> - máte právo požiadať o kópie svojich osobných údajov</li>
              <li><strong>Právo na opravu</strong> - máte právo požiadať o opravu nepresných údajov</li>
              <li><strong>Právo na vymazanie</strong> - máte právo požiadať o vymazanie svojich údajov</li>
              <li><strong>Právo namietať proti zpracovaniu</strong> - máte právo namietať proti spracovaniu vašich údajov</li>
              <li><strong>Právo na prenositeľnosť údajov</strong> - máte právo požiadať o prenos údajov inému správcovi</li>
              <li><strong>Právo odvolať súhlas</strong> - máte právo kedykoľvek odvolať svoj súhlas</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p class="text-slate-300 leading-relaxed">
              Naša webová stránka používa cookies na zlepšenie vašej skúsenosti. Cookies sú malé textové súbory uložené vo vašom zariadení. Môžete nastaviť svoj prehliadač tak, aby odmietol všetky alebo niektoré cookies, alebo aby vás upozornil, keď webové stránky nastavujú alebo pristupujú k cookies.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">8. Zmeny tejto politiky</h2>
            <p class="text-slate-300 leading-relaxed">
              Vyhradzujeme si právo kedykoľvek aktualizovať túto politiku ochrany osobných údajov. O akýchkoľvek zmenách vás budeme informovať zverejnením novej politiky na tejto stránke a aktualizáciou dátumu "Posledná aktualizácia" na začiatku tejto politiky.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-4">9. Kontaktujte nás</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Ak máte akékolVek otázky týkajúce sa tejto politiky ochrany osobných údajov alebo nášho spracovania vašich osobných údajov, kontaktujte nás na:
            </p>
            <div class="text-slate-300">
              <p><strong>Email:</strong> appinarasolutions@gmail.com</p>
              <p><strong>Telefón:</strong> +421 917 566 722</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useHead({
  title: 'Ochrana osobných údajov | Appinara',
  meta: [
    { name: 'description', content: 'Politika ochrany osobných údajov spoločnosti Appinara. Informácie o tom, ako spracovávame a chránime vaše osobné údaje.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})

const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

