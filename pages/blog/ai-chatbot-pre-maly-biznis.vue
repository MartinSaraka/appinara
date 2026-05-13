<template>
  <BlogArticleLayout
    breadcrumb="Chatbot pre malý biznis"
    category="AI v praxi"
    read-time="8 min"
    date="16. november 2024"
    title="AI chatbot pre malý biznis:"
    title-accent="najprv otázka, čo má prestať robiť človek."
    intro="Chatbot nie je dekorácia na web. Má znížiť opakovanú prácu, lepšie zachytiť dopyt alebo pomôcť človeku dostať sa k správnej odpovedi. Ak neviete pomenovať úlohu, bot bude len ďalšie okno na stránke."
    cta-title="Najprv overme, či chatbot dáva zmysel"
    cta-text="Pozrieme sa na otázky zákazníkov, dáta, ktoré máte, a spôsob odovzdania na človeka. Až potom má zmysel riešiť model alebo widget."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
    secondary-label="Kontakt"
    secondary-to="/#contact"
  >
    <p>
      Najlepší kandidát na chatbota má veľa podobných otázok. Sklad, cenník, dostupnosť termínov, postup služby, základná kvalifikácia leadu. Najhorší kandidát je firma, kde je každá odpoveď úplne individuálna a vyžaduje osobný odhad.
    </p>

    <h2>Kedy bot pomôže</h2>

    <ul>
      <li>Keď máte katalóg služieb alebo produktov.</li>
      <li>Keď sa zákazníci pýtajú tie isté otázky dokola.</li>
      <li>Keď viete povedať, kedy má bot prestať a zavolať človeka.</li>
    </ul>

    <h2>Čo musí byť pripravené</h2>

    <p>
      Knowledge base, pravidlá eskalácie, meranie konverzií a jasné hranice. Bot, ktorý si vymýšľa odpovede, je horší než žiadny bot. Preto má vedieť priznať neistotu a poslať dopyt človeku.
    </p>

    <h2>Začať menšie</h2>

    <p>
      Namiesto „bot vyrieši support“ skúste cieľ „bot odpovie na 20 najčastejších otázok a zachytí kontakt“. To je merateľné, lacnejšie a rýchlejšie opraviteľné.
    </p>

    <p>
      Konkrétne skúsenosti nájdete v článku <NuxtLink to="/blog/co-som-sa-naucil-z-troch-ai-chatbotov">z prvých troch AI chatbotov</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'AI chatbot pre malý biznis: kedy dáva zmysel | Appinara',
  meta: [
    { name: 'description', content: 'Kedy sa AI chatbot oplatí malému biznisu, čo musí mať pripravené a prečo je eskalácia na človeka dôležitejšia než pekné demo.' },
    { name: 'keywords', content: 'AI chatbot pre firmu, chatbot malý biznis, automatizácia supportu' }
  ]
})
</script>
