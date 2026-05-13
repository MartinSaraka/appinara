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
          <span class="dark:text-slate-300 text-gray-700">Ochrana údajov</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">Právny dokument · Posledná aktualizácia: {{ currentDate }}</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            Ochrana
            <span class="italic font-medium gradient-text">osobných údajov.</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Ako spracovávame a chránime vaše údaje pri návšteve webu a počas spolupráce na projektoch. Krátko, bez paragrafu navyše.
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <h2>1. Úvod</h2>
          <p>
            Spoločnosť <strong>Appinara s.r.o.</strong> (ďalej len „my", „nás" alebo „naša spoločnosť") rešpektuje vaše súkromie a zaväzuje sa chrániť vaše osobné údaje. Tento dokument vás informuje o tom, ako spracovávame osobné údaje pri návšteve nášho webu a používaní našich služieb.
          </p>

          <h2>2. Aké údaje zbierame</h2>
          <p>
            Môžeme zbierať, používať, uchovávať a prenášať rôzne druhy osobných údajov o vás, ktoré sme zoskupili nasledovne:
          </p>
          <ul>
            <li><strong>Identifikačné údaje:</strong> meno, priezvisko, e-mailová adresa, telefónne číslo.</li>
            <li><strong>Kontaktné údaje:</strong> fakturačná adresa, e-mailová adresa, telefónne čísla.</li>
            <li><strong>Technické údaje:</strong> IP adresa, typ a verzia prehliadača, časové pásmo, operačný systém a platforma.</li>
            <li><strong>Údaje o používaní:</strong> informácie o tom, ako používate náš web a naše služby.</li>
            <li><strong>Marketingové a komunikačné údaje:</strong> vaše preferencie pri prijímaní marketingu od nás.</li>
          </ul>

          <h2>3. Ako používame vaše údaje</h2>
          <p>
            Vaše osobné údaje používame na nasledujúce účely:
          </p>
          <ul>
            <li>Poskytovanie a správa našich služieb.</li>
            <li>Spracovanie a plnenie vašich objednávok.</li>
            <li>Komunikácia s vami o našich službách.</li>
            <li>Zlepšovanie našich služieb a webovej stránky.</li>
            <li>Zasielanie marketingových oznámení (len s vaším súhlasom).</li>
            <li>Dodržiavanie právnych povinností.</li>
          </ul>

          <h2>4. Zdieľanie vašich údajov</h2>
          <p>
            Vaše osobné údaje nepredávame, nevymieňame ani inak neprenášame tretím stranám bez vášho súhlasu — okrem prípadov, keď je to potrebné na poskytnutie služby (napr. platobné brány, hosting) alebo keď nás k tomu zaväzuje zákon.
          </p>

          <h2>5. Bezpečnosť údajov</h2>
          <p>
            Implementujeme vhodné bezpečnostné opatrenia, aby sme zabránili strate, neoprávnenému použitiu alebo prístupu k vašim osobným údajom. Prístup k údajom je obmedzený len na osoby, ktoré ich potrebujú na výkon svojej práce.
          </p>

          <h2>6. Vaše práva</h2>
          <p>
            Podľa GDPR máte nasledujúce práva:
          </p>
          <ul>
            <li><strong>Právo na prístup</strong> — máte právo požiadať o kópie svojich osobných údajov.</li>
            <li><strong>Právo na opravu</strong> — máte právo požiadať o opravu nepresných údajov.</li>
            <li><strong>Právo na vymazanie</strong> — máte právo požiadať o vymazanie svojich údajov.</li>
            <li><strong>Právo namietať proti spracovaniu</strong> — máte právo namietať proti spracovaniu vašich údajov.</li>
            <li><strong>Právo na prenositeľnosť údajov</strong> — máte právo požiadať o prenos údajov inému správcovi.</li>
            <li><strong>Právo odvolať súhlas</strong> — máte právo kedykoľvek odvolať svoj súhlas.</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Náš web používa cookies na zlepšenie vašej skúsenosti. Cookies sú malé textové súbory uložené vo vašom zariadení. Môžete nastaviť svoj prehliadač tak, aby odmietol všetky alebo niektoré cookies, alebo aby vás upozornil, keď web cookies používa.
          </p>

          <h2>8. Zmeny tejto politiky</h2>
          <p>
            Vyhradzujeme si právo kedykoľvek aktualizovať túto politiku. O zmenách informujeme zverejnením novej verzie na tejto stránke a aktualizáciou dátumu „Posledná aktualizácia" v úvode.
          </p>

          <h2>9. Kontaktujte nás</h2>
          <p>
            Ak máte otázky k tejto politike alebo k spracovaniu vašich osobných údajov, kontaktujte nás:
          </p>
          <ul>
            <li><strong>Prevádzkovateľ:</strong> Appinara s.r.o.</li>
            <li><strong>IČO:</strong> 57 623 252</li>
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
  title: 'Ochrana osobných údajov | Appinara',
  meta: [
    { name: 'description', content: 'Politika ochrany osobných údajov spoločnosti Appinara s.r.o. Ako spracovávame a chránime vaše osobné údaje podľa GDPR.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})

const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>
