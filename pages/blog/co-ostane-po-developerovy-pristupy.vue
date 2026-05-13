<template>
  <BlogArticleLayout
    breadcrumb="Po developérovi"
    category="Prevzatie projektu"
    read-time="8 min"
    date="24. apríl 2026"
    title="Čo ostane vo firme, keď freelancer skončí"
    title-accent="— a čo nemusíte chápať do hĺbky vy."
    intro="Ak po odovzdaní projektu držíte len odkaz na live web, závislosť na dodávateľovi neskončila. Nemusíte vedieť programovať, ale musíte vedieť, kde sú kľúče."
    cta-title="Nový vývoj alebo prevzatie projektu"
    cta-text="Pošlite, čo máte: repo, prístupy, doménu alebo len odkazy. Rýchlo zistíme, či ide o hodinový audit alebo väčší poriadok."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Nemusíte čítať diff v Gite. Stačí vedieť, kde žije kód, kto vie pridať používateľa a či máte zoznam služieb, ktoré web používa. Ak je odpoveď „to má bývalý developer“, projekt nie je odovzdaný.
    </p>

    <h2>Minimum, ktoré má ostať firme</h2>

    <ul>
      <li>Git repozitár vo firemnej organizácii, nie iba pod osobným účtom dodávateľa.</li>
      <li>Hosting a deploy účet, do ktorého má prístup firma.</li>
      <li>Doména, DNS a informácia, kto vie pridať TXT alebo CNAME záznam.</li>
      <li>API kľúče a env premenné uložené vo vault-e, nie v starom chate.</li>
      <li>Stripe, mailer, analytika a CMS pod firemným vlastníctvom.</li>
    </ul>

    <h2>Dokumentácia nemusí byť román</h2>

    <p>
      Stačí jeden dokument: kde je repo, ako sa spúšťa lokálne, kde sa robí deploy, aké služby sú napojené a kto je admin. Päť strán dobrej dokumentácie vie ušetriť päť hodín paniky pri prvom probléme.
    </p>

    <h2>Čo kontrolovať pred poslednou faktúrou</h2>

    <p>
      Overte, že sa viete prihlásiť do hostingu, domény, CMS a repozitára. Ak dodávateľ tvrdí, že všetko drží u seba „aby to bolo jednoduchšie“, nech je jasné, či je to servisná dohoda alebo závislosť bez dohody.
    </p>

    <p>
      Súvisiace red flags rieši článok <NuxtLink to="/blog/ako-vybrat-web-developera">ako vybrať web developera</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Čo ostane vo firme po freelancerovi: repo, účty, doména | Appinara',
  meta: [
    { name: 'description', content: 'Checklist vlastníctva po odovzdaní webu alebo aplikácie: GitHub, hosting, DNS, env premenné, Stripe, mailer a dokumentácia.' },
    { name: 'keywords', content: 'prevzatie projektu, vlastníctvo kódu, GitHub, DNS, web developer' }
  ]
})
</script>
