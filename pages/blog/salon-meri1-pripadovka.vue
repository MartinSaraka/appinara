<template>
  <BlogArticleLayout
    breadcrumb="Web pre kaderníctvo za dva týždne"
    category="Prípadovka"
    read-time="6 min"
    date="14. apríl 2026"
    title="Web pre kaderníctvo"
    title-accent="za dva týždne."
    intro="Konkrétny projekt: zadanie v stredu, online o trinásť dní neskôr. Čo ostalo, čo sa škrtlo a prečo bol jednoduchý rozsah lepší než ambiciózny chaos."
    cta-title="Spravím vám podobný web?"
    cta-text="Tento typ projektu sedí do balíčka Web Štart: fixný rozsah, rozumný deadline a žiadna snaha tváriť sa, že malý web je produktová platforma."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Toto nebola vlajková loď ani dizajnové ocenenie. Bol to obchodne použiteľný web pre lokálnu prevádzku, ktorá potrebovala jasne ukázať služby, ceny, fotky a dostať ľudí k rezervácii.
    </p>

    <h2>Východisko</h2>

    <p>
      Klientka mala starú stránku, ktorá sa na mobile čítala zle, kontakty neboli aktuálne a rezervačný odkaz smeroval na nefunkčný email. Potreba bola jednoduchá: moderný web, ktorý funguje na mobile a nezdržuje ju technikou.
    </p>

    <h2>Scope po prvom hovore</h2>

    <ul>
      <li>Jednostránkový web: služby, cenník, galéria, o nás, kontakt.</li>
      <li>Rezervačný formulár, ktorý pošle email namiesto plného kalendára.</li>
      <li>Základné SEO, sitemap, Google Business prepojenie a rýchle načítanie.</li>
    </ul>

    <p>
      Cena bola 850 €. Hosting bežal na free tieri, doménu mala klientka vlastnú. Najväčšie rozhodnutie bolo nepridať kalendár v prvej verzii. Vtedy by zjedol neprimeranú časť rozpočtu.
    </p>

    <h2>Čo sa po spustení ukázalo</h2>

    <p>
      Prvý týždeň prišlo 14 rezervačných dotazov cez formulár. Klientka mala všetko v inboxe a nemusela loviť správy medzi Messengerom, telefonátmi a pamäťou.
    </p>

    <h2>Čo by som dnes zmenil</h2>

    <p>
      Dnes by som rovno pridal jednoduché CMS na akcie a ceny, lebo Decap už viem nastaviť rýchlo. Pri rezervácii by som zvážil Cal.com alebo Bookio embed, ak by bol rozpočet o pár hodín vyšší.
    </p>

    <p>
      Ak chcete podobný rozsah porovnať s inými úrovňami webu, pozrite <NuxtLink to="/blog/realny-cennik-webov-na-slovensku">reálny cenník webov</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Web pre kaderníctvo za dva týždne — prípadovka | Appinara',
  meta: [
    { name: 'description', content: 'Reálny prípad webu pre lokálnu prevádzku: rozsah, cena, rezervácie, SEO a čo by som dnes urobil inak.' },
    { name: 'keywords', content: 'web pre kaderníctvo, prípadová štúdia, lokálny web Slovensko' }
  ]
})
</script>
