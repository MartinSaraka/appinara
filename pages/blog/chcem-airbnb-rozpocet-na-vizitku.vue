<template>
  <BlogArticleLayout
    breadcrumb="Airbnb vs. rozpočet"
    category="Scope"
    read-time="8 min"
    date="28. apríl 2026"
    title="Keď niekto chce"
    title-accent="„ako Airbnb“, ale rozpočet je na vizitku."
    intro="Nič proti veľkým ambíciám. Problém vzniká vtedy, keď sa názov referenčného produktu použije ako zadanie, ale v rozpočte stále ostane jednostránkový web od šablóny."
    cta-title="Potrebujete vizitku, alebo produkt?"
    cta-text="Napíšte mi tri vety: čo má používateľ dokončiť, čo má byť uložené a čo sa má stať po odoslaní. Podľa toho viem povedať, či ide o web, aplikáciu alebo trhovisko."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Stáva sa mi to párkrát do roka. Firma príde s vetou: „Chceme rezervácie ako Airbnb, hodnotenia, platby a nech je to v troch jazykoch.“ Potom príde otázka na cenu a v hlave je číslo okolo tisíc eur, lebo niekde počuli, že weby sa dnes dajú spraviť lacno.
    </p>

    <p>
      Airbnb nie je web. Je to produkt so skladaním ponuky, účtami, reputáciou, platbami, spormi, bezpečnosťou a roky budovanou prevádzkou. Aj „malá verzia“ má viac rizík než prezentačná stránka.
    </p>

    <h2>Tri úrovne, ktoré treba pomenovať</h2>

    <p>
      <strong>Vizitka</strong> je stránka, ktorá vysvetlí ponuku a pošle človeka na kontakt, formulár alebo externú rezerváciu. <strong>Web aplikácia</strong> už drží používateľské dáta, stav objednávky a vlastnú logiku. <strong>Trhovisko</strong> rieši dve strany trhu, provízie, spory a dôveru medzi cudzími ľuďmi.
    </p>

    <p>
      Každá úroveň môže byť dobrý nápad. Len nemôže mať rovnaký rozpočet, termín a mieru zodpovednosti.
    </p>

    <h2>Čo sa dá spraviť rozumne v malom rozpočte</h2>

    <ul>
      <li>Jednoduchý rezervačný formulár, ktorý pošle email a termín potvrdíte ručne.</li>
      <li>Vloženie hotového nástroja ako Bookio, Cal.com alebo Calendly namiesto vlastného kalendára.</li>
      <li>Katalóg služieb s jasným CTA a jedným merateľným cieľom.</li>
    </ul>

    <p>
      Najhoršie dopadne projekt, ktorý sa začne ako trhovisko, ale rozpočet má ako digitálna vizitka. Vznikne polovičné prihlasovanie, polovičné platby a kalendár, ktorý zlyhá v najhoršom možnom čase.
    </p>

    <h2>Kedy už nejde o web</h2>

    <p>
      Ak potrebujete účty používateľov, platby, správu objednávok a notifikácie medzi viacerými stranami, neobjednávate si „stránku“. Objednávate si prvú verziu produktu. Vtedy má zmysel začať MVP, overiť flow a až potom riešiť robustnejšiu architektúru.
    </p>

    <p>
      Súvisiaci kontext je v článku <NuxtLink to="/blog/realny-cennik-webov-na-slovensku">čo dostanete za 500, 1 500 a 5 000 € web</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: '„Ako Airbnb“ vs. rozpočet na vizitku | Appinara',
  meta: [
    { name: 'description', content: 'Kde končí prezentačný web a začína produkt. Rezervácie, účty, platby a trhovisko bez marketingového zahmlievania.' },
    { name: 'keywords', content: 'scope webového projektu, MVP, rezervačný systém, web aplikácia' }
  ]
})
</script>
