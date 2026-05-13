<template>
  <BlogArticleLayout
    breadcrumb="Údržba webu"
    category="Prevádzka"
    read-time="9 min"
    date="27. apríl 2026"
    title="Údržba webu po prvom roku:"
    title-accent="čo reálne stojí čas alebo peniaze."
    intro="Veľa firiem počíta iba s faktúrou za spustenie. O rok neskôr príde zmena cien, expirácia domény, aktualizácia knižníc alebo nový formulár a zrazu je dobré vedieť, čo patrí do údržby a čo je nový projekt."
    cta-title="Chcete paušál alebo riešiť veci podľa potreby?"
    cta-text="Pošlite typ webu, technológiu a či máte CMS. Navrhnem jednoduchý model bez platenia služieb, ktoré nepotrebujete."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Statický web na Verceli nie je bez údržby v absolútnom zmysle. Je len jednoduchší na prevádzku než starý server. Závislosti majú verzie, formuláre používajú externé služby a domény vedia vypršať aj veľmi pekným webom.
    </p>

    <h2>Čo dávam do údržby</h2>

    <ul>
      <li>Kontrola dostupnosti, SSL a domény.</li>
      <li>Menšie bezpečnostné a frameworkové aktualizácie po rozumných intervaloch.</li>
      <li>Drobné textové opravy a malé zmeny obsahu, ak sú vopred ohraničené.</li>
    </ul>

    <p>
      Do údržby nepatrí nový jazyk, nová sekcia služieb, prepis celej ponuky ani redizajn hero sekcie. To sú projektové zmeny, lebo menia štruktúru a často aj SEO.
    </p>

    <h2>Hodinovka alebo paušál</h2>

    <p>
      Hodinovka je férová, ak sa ozvete trikrát ročne s balíkom zmien. Paušál dáva zmysel vtedy, keď chcete garantovanú odozvu a priebežné kontroly. Pre malé weby býva rozumné pásmo 40–80 € mesačne, ale iba ak je jasné, čo v tom je.
    </p>

    <h2>CMS nie je bezstarostnosť</h2>

    <p>
      CMS dá klientovi samostatnosť, no nezruší pravidlá. Príliš veľká fotka v hero, zmazané pole v štruktúre alebo rozbitý markdown stále vytvoria support ticket. To nie je chyba CMS, ale prevádzková realita.
    </p>

    <h2>Najčastejšia hlúpa chyba</h2>

    <p>
      Doména je kúpená na starý osobný email, ktorý už nikto nečíta. Keď vyprší, web „spadne“ rovnako bolestivo ako pri chybe v kóde. Preto má mať firma vlastný zoznam účtov a prístupov.
    </p>

    <p>
      Viac o tom, čo sa zvykne schovať mimo prvotnej ceny, je v článku <NuxtLink to="/blog/realny-cennik-webov-na-slovensku">reálny cenník webov</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Údržba webu po prvom roku: náklady a realita | Appinara',
  meta: [
    { name: 'description', content: 'Čo patrí do údržby webu, kedy dáva zmysel paušál a kedy hodinovka. Prakticky o CMS, doménach, aktualizáciách a supporte.' },
    { name: 'keywords', content: 'údržba webstránky, správa webu, podpora webu, náklady na web' }
  ]
})
</script>
