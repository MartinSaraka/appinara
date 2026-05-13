<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <article class="relative pt-32 md:pt-40 pb-20">
      <div class="container mx-auto px-6 max-w-3xl">
        <nav class="mb-10 text-sm" aria-label="Drobky">
          <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">
            Domov
          </NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <span class="dark:text-slate-300 text-gray-700">Obchodné podmienky</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">Právny dokument · Posledná aktualizácia: {{ currentDate }}</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            Obchodné
            <span class="italic font-medium gradient-text">podmienky.</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Pravidlá, podľa ktorých spolupracujeme: rozsah služieb, platby, autorské práva a ukončenie. Čítajte pred objednávkou.
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <h2>1. Základné ustanovenia</h2>
          <p>
            Tieto obchodné podmienky upravujú vzťahy medzi poskytovateľom služieb:
          </p>
          <ul>
            <li><strong>Obchodné meno:</strong> Appinara s.r.o.</li>
            <li><strong>IČO:</strong> 57 623 252</li>
            <li><strong>Email:</strong> appinarasolutions@gmail.com</li>
            <li><strong>Telefón:</strong> +421 917 566 722</li>
          </ul>
          <p>
            a objednávateľom služieb (ďalej len „klient") pri poskytovaní služieb v oblasti vývoja webových aplikácií, AI integrácií a súvisiacich digitálnych riešení.
          </p>

          <h2>2. Predmet zmluvy</h2>
          <p>
            Predmetom zmluvy je poskytovanie nasledujúcich služieb:
          </p>
          <ul>
            <li>Vývoj webových aplikácií a webových stránok.</li>
            <li>Integrácia AI riešení do existujúcich systémov.</li>
            <li>Vývoj vlastných AI nástrojov a chatbotov.</li>
            <li>Tvorba e-commerce riešení.</li>
            <li>Vývoj firemných aplikácií (CRM, ERP, dashboardy).</li>
            <li>Konzultačné a poradenské služby v oblasti IT.</li>
            <li>Údržba a podpora existujúcich aplikácií.</li>
          </ul>

          <h2>3. Proces objednávky a realizácie</h2>
          <h3>3.1 Objednávka</h3>
          <p>
            Proces začína kontaktovaním poskytovateľa prostredníctvom kontaktného formulára, emailu alebo telefónu. Po prvotnej konzultácii poskytovateľ vypracuje návrh riešenia a cenovú ponuku.
          </p>
          <h3>3.2 Akceptácia ponuky</h3>
          <p>
            Zmluva vzniká akceptáciou cenovej ponuky klientom a uhradením zálohy (ak je vyžadovaná). Akceptácia môže byť vyjadrená písomne (email) alebo platbou zálohy.
          </p>
          <h3>3.3 Realizácia</h3>
          <p>
            Poskytovateľ sa zaväzuje realizovať projekt v dohodnutom termíne. Termín realizácie môže byť predĺžený v prípade nepredvídateľných okolností alebo zmien požiadaviek klientom.
          </p>

          <h2>4. Cena a platobné podmienky</h2>
          <h3>4.1 Cena</h3>
          <p>
            Cena za služby je stanovená v cenovej ponuke. Všetky ceny sú uvedené bez DPH (poskytovateľ nie je platiteľom DPH).
          </p>
          <h3>4.2 Platobné podmienky</h3>
          <ul>
            <li>Pri projektoch do 2 000 €: platba po dokončení.</li>
            <li>Pri projektoch nad 2 000 €: 50 % záloha, 50 % po dokončení.</li>
            <li>Pri projektoch nad 5 000 €: možnosť rozdelenia na milestones.</li>
            <li>Splatnosť faktúry: 14 dní od vystavenia.</li>
          </ul>
          <h3>4.3 Omeškanie s platbou</h3>
          <p>
            V prípade omeškania s platbou si poskytovateľ vyhradzuje právo na úrok z omeškania vo výške 0,05 % z dlžnej sumy za každý deň omeškania.
          </p>

          <h2>5. Práva a povinnosti poskytovateľa</h2>
          <h3>5.1 Poskytovateľ sa zaväzuje:</h3>
          <ul>
            <li>Poskytovať služby odborne a kvalitne.</li>
            <li>Dodržiavať dohodnuté termíny.</li>
            <li>Informovať klienta o priebehu projektu.</li>
            <li>Chrániť dôverné informácie klienta.</li>
            <li>Poskytovať základnú podporu po dokončení projektu.</li>
          </ul>
          <h3>5.2 Poskytovateľ má právo:</h3>
          <ul>
            <li>Požadovať od klienta potrebné podklady a informácie.</li>
            <li>Odmietnuť zmeny mimo pôvodného rozsahu projektu.</li>
            <li>Použiť subkontraktorov pre špecializované časti projektu.</li>
            <li>Uviesť projekt vo svojom portfóliu (s povolením klienta).</li>
          </ul>

          <h2>6. Práva a povinnosti klienta</h2>
          <h3>6.1 Klient sa zaväzuje:</h3>
          <ul>
            <li>Poskytnúť všetky potrebné podklady a informácie.</li>
            <li>Uhradiť dohodnutú cenu v stanovených termínoch.</li>
            <li>Včas sa vyjadrovať k prezentovaným návrhom.</li>
            <li>Rešpektovať autorské práva poskytovateľa.</li>
          </ul>
          <h3>6.2 Klient má právo:</h3>
          <ul>
            <li>Na pravidelnú informovanosť o stave projektu.</li>
            <li>Na kvalitné vyhotovenie služby podľa špecifikácie.</li>
            <li>Požadovať opravu chýb v záručnej lehote.</li>
            <li>Na zdrojové kódy po úplnom zaplatení projektu.</li>
          </ul>

          <h2>7. Autorské práva</h2>
          <p>
            Autorské práva k vytvorenému dielu zostávajú poskytovateľovi až do úplného zaplatenia dohodnutej ceny. Po úplnom zaplatení prechádzajú všetky práva na klienta, okrem práva poskytovateľa použiť projekt vo svojom portfóliu.
          </p>
          <p>
            Poskytovateľ môže použiť vlastné knižnice, frameworky a nástroje, ktoré zostávajú jeho vlastníctvom.
          </p>

          <h2>8. Záruka a reklamácie</h2>
          <h3>8.1 Záruka</h3>
          <p>
            Poskytovateľ poskytuje záruku na funkčnosť vytvoreného riešenia po dobu 3 mesiacov od odovzdania. Záruka sa nevzťahuje na chyby spôsobené nesprávnym používaním alebo zásahmi tretích strán.
          </p>
          <h3>8.2 Reklamácie</h3>
          <p>
            Reklamácie je potrebné uplatniť písomne na email poskytovateľa s popisom problému. Poskytovateľ sa zaväzuje odpovedať do 48 hodín a vyriešiť oprávnenú reklamáciu do 14 dní.
          </p>

          <h2>9. Ukončenie zmluvy</h2>
          <p>
            Zmluva môže byť ukončená:
          </p>
          <ul>
            <li>Dohodou oboch strán.</li>
            <li>Odstúpením pri podstatnom porušení zmluvy druhou stranou.</li>
            <li>Výpoveďou s 30-dňovou výpovednou lehotou (pred začatím realizácie).</li>
          </ul>
          <p>
            Pri predčasnom ukončení zmluvy má poskytovateľ právo na úhradu za doteraz vykonanú prácu.
          </p>

          <h2>10. Ochrana osobných údajov</h2>
          <p>
            Spracovanie osobných údajov sa riadi samostatnou <NuxtLink to="/ochrana-udajov">Politikou ochrany osobných údajov</NuxtLink>, ktorá je dostupná na našom webe. Poskytovateľ sa zaväzuje spracovávať osobné údaje v súlade s nariadením GDPR.
          </p>

          <h2>11. Záverečné ustanovenia</h2>
          <p>
            Tieto obchodné podmienky sú platné a účinné od dátumu uvedeného v úvode dokumentu. Poskytovateľ si vyhradzuje právo tieto podmienky meniť. Zmeny nadobúdajú účinnosť dňom ich zverejnenia na webe.
          </p>
          <p>
            Vzťahy neupravené týmito obchodnými podmienkami sa riadia príslušnými ustanoveniami Obchodného zákonníka a Občianskeho zákonníka Slovenskej republiky.
          </p>
          <p>
            Prípadné spory budú riešené prednostne dohodou. Ak sa nedosiahne dohoda, spory budú riešené príslušným súdom Slovenskej republiky.
          </p>

          <h2>12. Kontakt</h2>
          <p>
            V prípade akýchkoľvek otázok k týmto obchodným podmienkam nás kontaktujte:
          </p>
          <ul>
            <li><strong>Email:</strong> appinarasolutions@gmail.com</li>
            <li><strong>Telefón:</strong> +421 917 566 722</li>
          </ul>
        </div>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useHead({
  title: 'Obchodné podmienky | Appinara',
  meta: [
    { name: 'description', content: 'Obchodné podmienky spoločnosti Appinara s.r.o. Podmienky poskytovania služieb v oblasti vývoja webových aplikácií a AI integrácií.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})

const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>
