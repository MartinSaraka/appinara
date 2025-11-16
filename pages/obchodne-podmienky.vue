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
          Obchodné <span class="gradient-text">podmienky</span>
        </h1>
        <p class="text-slate-400 mb-12">Posledná aktualizácia: {{ currentDate }}</p>
        
        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-none">
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">1. Základné ustanovenia</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Tieto obchodné podmienky upravujú vzťahy medzi poskytovateľom služieb:
            </p>
            <div class="text-slate-300 mb-4">
              <p><strong>Obchodné meno:</strong> Appinara</p>
              <p><strong>Email:</strong> appinarasolutions@gmail.com</p>
              <p><strong>Telefón:</strong> +421 917 566 722</p>
            </div>
            <p class="text-slate-300 leading-relaxed">
              a objednávateľom služieb (ďalej len "klient") pri poskytovaní služieb v oblasti vývoja webových aplikácií, AI integrácií a súvisiacich digitálnych riešení.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">2. Predmet zmluvy</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Predmetom zmluvy je poskytovanie nasledujúcich služieb:
            </p>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li>Vývoj webových aplikácií a webových stránok</li>
              <li>Integrácia AI riešení do existujúcich systémov</li>
              <li>Vývoj vlastných AI nástrojov a chatbotov</li>
              <li>Tvorba e-commerce riešení</li>
              <li>Vývoj firemných aplikácií (CRM, ERP, dashboardy)</li>
              <li>Konzultačné a poradenské služby v oblasti IT</li>
              <li>Údržba a podpora existujúcich aplikácií</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">3. Proces objednávky a realizácie</h2>
            <h3 class="text-xl font-semibold text-white mb-3">3.1 Objednávka</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Proces začína kontaktovaním poskytovateľa prostredníctvom kontaktného formulára, emailu alebo telefónu. Po prvotnej konzultácii poskytovateľ vypracuje návrh riešenia a cenovú ponuku.
            </p>
            <h3 class="text-xl font-semibold text-white mb-3">3.2 Akceptácia ponuky</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Zmluva vzniká akceptáciou cenovej ponuky klientom a uhradením zálohy (ak je vyžadovaná). Akceptácia môže byť vyjadrená písomne (email) alebo platbou zálohy.
            </p>
            <h3 class="text-xl font-semibold text-white mb-3">3.3 Realizácia</h3>
            <p class="text-slate-300 leading-relaxed">
              Poskytovateľ sa zaväzuje realizovať projekt v dohodnutom termíne. Termín realizácie môže byť predĺžený v prípade nepredvídateľných okolností alebo zmien požiadaviek klientom.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">4. Cena a platobné podmienky</h2>
            <h3 class="text-xl font-semibold text-white mb-3">4.1 Cena</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Cena za služby je stanovená v cenovej ponuke. Všetky ceny sú uvedené bez DPH (poskytovateľ nie je platiteľom DPH).
            </p>
            <h3 class="text-xl font-semibold text-white mb-3">4.2 Platobné podmienky</h3>
            <ul class="text-slate-300 space-y-2 ml-6 mb-4">
              <li>Pri projektoch do €2000: platba po dokončení</li>
              <li>Pri projektoch nad €2000: 50% záloha, 50% po dokončení</li>
              <li>Pri projektoch nad €5000: možnosť rozdelenia na milestones</li>
              <li>Splatnosť faktúry: 14 dní od vystavenia</li>
            </ul>
            <h3 class="text-xl font-semibold text-white mb-3">4.3 Omeškanie s platbou</h3>
            <p class="text-slate-300 leading-relaxed">
              V prípade omeškania s platbou si poskytovateľ vyhradzuje právo na úrok z omeškania vo výške 0,05% z dlžnej sumy za každý deň omeškania.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">5. Práva a povinnosti poskytovateľa</h2>
            <h3 class="text-xl font-semibold text-white mb-3">5.1 Poskytovateľ sa zaväzuje:</h3>
            <ul class="text-slate-300 space-y-2 ml-6 mb-4">
              <li>Poskytovať služby odborne a kvalitne</li>
              <li>Dodržiavať dohodnuté termíny</li>
              <li>Informovať klienta o priebehu projektu</li>
              <li>Chrániť dôverné informácie klienta</li>
              <li>Poskytovať základnú podporu po dokončení projektu</li>
            </ul>
            <h3 class="text-xl font-semibold text-white mb-3">5.2 Poskytovateľ má právo:</h3>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li>Požadovať od klienta potrebné podklady a informácie</li>
              <li>Odmietnuť zmeny mimo pôvodného rozsahu projektu</li>
              <li>Použiť subkontraktorov pre špecializované časti projektu</li>
              <li>Uviesť projekt vo svojom portfóliu (s povolením klienta)</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">6. Práva a povinnosti klienta</h2>
            <h3 class="text-xl font-semibold text-white mb-3">6.1 Klient sa zaväzuje:</h3>
            <ul class="text-slate-300 space-y-2 ml-6 mb-4">
              <li>Poskytnúť všetky potrebné podklady a informácie</li>
              <li>Uhradiť dohodnutú cenu v stanovených termínoch</li>
              <li>Včas sa vyjadrovať k prezentovaným návrhom</li>
              <li>Rešpektovať autorské práva poskytovateľa</li>
            </ul>
            <h3 class="text-xl font-semibold text-white mb-3">6.2 Klient má právo:</h3>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li>Na pravidelnú informovanosť o stave projektu</li>
              <li>Na kvalitné vyhotovenie služby podľa špecifikácie</li>
              <li>Požadovať opravu chýb v záručnej lehote</li>
              <li>Na zdrojové kódy po úplnom zaplatení projektu</li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">7. Autorské práva</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Autorské práva k vytvorenému dielu zostávajú poskytovateľovi až do úplného zaplatenia dohodnutej ceny. Po úplnom zaplatení prechádzajú všetky práva na klienta, okrem práva poskytovateľa použiť projekt vo svojom portfóliu.
            </p>
            <p class="text-slate-300 leading-relaxed">
              Poskytovateľ môže použiť vlastné knižnice, frameworky a nástroje, ktoré zostávajú jeho vlastníctvom.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">8. Záruka a reklamácie</h2>
            <h3 class="text-xl font-semibold text-white mb-3">8.1 Záruka</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Poskytovateľ poskytuje záruku na funkčnosť vytvoreného riešenia po dobu 3 mesiacov od odovzdania. Záruka sa nevzťahuje na chyby spôsobené nesprávnym používaním alebo zásahmi tretích strán.
            </p>
            <h3 class="text-xl font-semibold text-white mb-3">8.2 Reklamácie</h3>
            <p class="text-slate-300 leading-relaxed">
              Reklamácie je potrebné uplatniť písomne na email poskytovateľa s popisom problému. Poskytovateľ sa zaväzuje odpovedať do 48 hodín a vyriešiť oprávnenú reklamáciu do 14 dní.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">9. Ukončenie zmluvy</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Zmluva môže byť ukončená:
            </p>
            <ul class="text-slate-300 space-y-2 ml-6">
              <li>Dohodou oboch strán</li>
              <li>Odstúpením pri podstatnom porušení zmluvy druhou stranou</li>
              <li>Výpoveďou s 30-dňovou výpovednou lehotou (pred začatím realizácie)</li>
            </ul>
            <p class="text-slate-300 leading-relaxed mt-4">
              Pri predčasnom ukončení zmluvy má poskytovateľ právo na úhradu za doteraz vykonanú prácu.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">10. Ochrana osobných údajov</h2>
            <p class="text-slate-300 leading-relaxed">
              Spracovanie osobných údajov sa riadi samostatnou Politikou ochrany osobných údajov, ktorá je dostupná na našej webovej stránke. Poskytovateľ sa zaväzuje spracovávať osobné údaje v súlade s nariadením GDPR.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">11. Záverečné ustanovenia</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              Tieto obchodné podmienky sú platné a účinné od dátumu uvedeného na začiatku tohto dokumentu. Poskytovateľ si vyhradzuje právo tieto podmienky meniť. Zmeny nadobúdajú účinnosť dňom ich zverejnenia na webovej stránke.
            </p>
            <p class="text-slate-300 leading-relaxed mb-4">
              Vzťahy neupravené týmito obchodnými podmienkami sa riadia príslušnými ustanoveniami Obchodného zákonníka a Občianskeho zákonníka Slovenskej republiky.
            </p>
            <p class="text-slate-300 leading-relaxed">
              Prípadné spory budú riešené prednostne dohodou. Ak sa nedosiahne dohoda, spory budú riešené príslušným súdom Slovenskej republiky.
            </p>
          </div>
          
          <div class="glass-effect rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-4">12. Kontakt</h2>
            <p class="text-slate-300 leading-relaxed mb-4">
              V prípade akýchkoľvek otázok týkajúcich sa týchto obchodných podmienok nás kontaktujte:
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
  title: 'Obchodné podmienky | Appinara',
  meta: [
    { name: 'description', content: 'Obchodné podmienky spoločnosti Appinara. Podmienky poskytovania služieb v oblasti vývoja webových aplikácií a AI integrácií.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})

const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

