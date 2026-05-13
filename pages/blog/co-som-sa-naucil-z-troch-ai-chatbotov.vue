<template>
  <BlogArticleLayout
    breadcrumb="Z troch AI chatbotov"
    category="Z praxe"
    read-time="8 min"
    date="7. apríl 2026"
    title="Čo som sa naučil"
    title-accent="z prvých troch AI chatbotov."
    intro="Tri firmy, tri rôzne problémy. Dva chatboty sa zaplatili, jeden je dnes vypnutý. Rozdiel nebol v modeli, ale v tom, či firma mala opakovateľné dáta a jasný proces eskalácie."
    cta-title="Chatbot má riešiť konkrétnu prácu"
    cta-text="Ak máte opakujúce sa otázky, sklad, katalóg alebo kvalifikačný flow, dá sa navrhnúť rozumný bot. Ak je každá odpoveď unikátna, možno je lepší formulár a človek."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
    secondary-label="Napísať priamo"
    secondary-to="/#contact"
  >
    <p>
      Prvý bot bol pre e-shop s autodoplnkami. Mal produktovú databázu a veľa opakovaných otázok o skladovosti a kompatibilite. Po napojení na real-time dáta riešil väčšinu jednoduchých dopytov bez majiteľa.
    </p>

    <p>
      Druhý bol pre B2B službu, kde chatbot kvalifikoval leady pred rezerváciou dema. Neriešil všetko. Len zistil typ firmy, veľkosť a poslal človeka správnym smerom. To stačilo na lepšie leady pre sales tím.
    </p>

    <p>
      Tretí bol pre remeselnú dielňu. Tam sme narazili. Každá zákazka bola iná a bot len pridával medzistanicu medzi zákazníka a majstra. Po polroku sme ho vypli.
    </p>

    <h2>Vzorec je jednoduchší než marketing</h2>

    <p>
      Chatbot funguje, keď má z čoho odpovedať: produkty, ceny, sklad, služby, postupy, termíny. Keď má iba všeobecné texty a každá situácia je individuálna, skôr zvyšuje trenie.
    </p>

    <h2>Najdrahšie nie je AI, ale napojenie</h2>

    <p>
      Rozdiel medzi peknou demoverziou a použiteľným botom je v dátach. Sklad, dostupnosť, ceny a objednávky musia byť aktuálne. Inak bot povie niečo sebavedomo a zle.
    </p>

    <h2>Eskalácia musí byť normálna</h2>

    <p>
      Bot má vedieť povedať „neviem“ a odovzdať človeka ďalej. Toto neznie dobre v predajnom texte, ale v prevádzke je to rozdiel medzi dôverou a prvou reklamáciou.
    </p>

    <p>
      Pre širší pohľad na firemné AI nástroje je tu článok <NuxtLink to="/blog/ai-nastroj-pre-cely-tim-ma-to-zmysel">AI nástroj pre celý tím</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Čo som sa naučil z prvých troch AI chatbotov | Appinara',
  meta: [
    { name: 'description', content: 'Praktické zistenia z troch produkčných AI chatbotov: kde fungujú, kde zlyhávajú a prečo rozhodujú dáta a eskalácia.' },
    { name: 'keywords', content: 'AI chatbot, chatbot pre firmu, zákaznícka podpora, automatizácia' }
  ]
})
</script>
