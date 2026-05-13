<template>
  <BlogArticleLayout
    breadcrumb="Výber web developera"
    category="Výber dodávateľa"
    read-time="8 min"
    date="1. november 2024"
    title="Ako vybrať web developera:"
    title-accent="nehľadajte len pekné portfólio."
    intro="Dobrý developer nevie iba písať kód. Vie ohraničiť rozsah, povedať nie, vysvetliť vlastníctvo projektu a nechať po sebe poriadok. Pri malom webe to rozhoduje viac než použitý framework."
    cta-title="Chcete druhý názor na ponuku?"
    cta-text="Ak už máte cenovú ponuku alebo brief, viem prejsť rozsah a upozorniť na veci, ktoré sa zvyknú zabudnúť: CMS, hosting, prístupy, údržba a vlastníctvo."
    primary-label="Kontakt"
    primary-to="/#contact"
    secondary-label="Cenník"
    secondary-to="/blog/realny-cennik-webov-na-slovensku"
  >
    <p>
      Najlacnejšia ponuka často nie je lacná. Len neobsahuje veci, ktoré budete riešiť neskôr: obsah, migráciu domény, SEO, formuláre, meranie alebo prístupy.
    </p>

    <h2>Otázky pred spoluprácou</h2>

    <ul>
      <li>Čo presne je v rozsahu a čo už nie?</li>
      <li>Kto dodáva texty, fotky a podklady?</li>
      <li>Kde bude kód, hosting a doména?</li>
      <li>Čo sa stane po spustení pri chybe alebo úprave?</li>
    </ul>

    <h2>Red flags</h2>

    <p>
      Dodávateľ nevie vysvetliť proces, nechce riešiť vlastníctvo účtov, sľubuje custom všetko za cenu šablóny alebo tlačí technológiu bez toho, aby rozumel biznisu. To nemusí znamenať zlý úmysel, ale znamená riziko.
    </p>

    <h2>Čo má dobrý developer povedať</h2>

    <p>
      Niekedy aj „toto v tomto rozpočte nedáva zmysel“. Táto veta je často lepšia než sľub, ktorý sa neskôr zaplatí kvalitou.
    </p>

    <p>
      Po odovzdaní projektu si skontrolujte aj <NuxtLink to="/blog/co-ostane-po-developerovy-pristupy">čo má ostať vo firme, keď freelancer skončí</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Ako vybrať web developera bez zlého prekvapenia | Appinara',
  meta: [
    { name: 'description', content: 'Praktické otázky a red flags pri výbere web developera: rozsah, vlastníctvo, hosting, údržba a proces spolupráce.' },
    { name: 'keywords', content: 'ako vybrať web developera, web dodávateľ, freelance developer' }
  ]
})
</script>
