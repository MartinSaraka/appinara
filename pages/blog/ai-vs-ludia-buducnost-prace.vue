<template>
  <BlogArticleLayout
    breadcrumb="AI a práca"
    category="Budúcnosť práce"
    read-time="8 min"
    date="16. november 2024"
    title="AI nevezme všetku prácu."
    title-accent="Zmení najmä tú opakovateľnú a zle popísanú."
    intro="Debata o tom, či AI nahradí ľudí, je príliš hrubá. Užitočnejšia otázka znie: ktoré časti práce sú opakovateľné, textové, merateľné a bez jasného vlastníka kvality? Tam sa zmena deje najrýchlejšie."
    cta-title="Chcete zistiť, čo automatizovať vo firme?"
    cta-text="Pozrieme sa na konkrétne procesy, nie na veľké predpovede. Výsledkom má byť zoznam úloh, ktoré sa oplatí zrýchliť, a úloh, kde má zostať človek."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
    secondary-label="Kontakt"
    secondary-to="/#contact"
  >
    <p>
      Najviac ohrozené nie sú povolania ako názvy na vizitke. Ohrozené sú úlohy: prepisovanie, sumarizovanie, triedenie, prvé drafty, jednoduchý support, reporting bez interpretácie. Človek môže mať stále rovnakú pracovnú pozíciu, ale tretina jeho dňa sa zmení.
    </p>

    <h2>Kde AI vstupuje najľahšie</h2>

    <ul>
      <li>Textové výstupy s jasným vzorom: emaily, popisy, interné zápisy.</li>
      <li>Vyhľadávanie a sumarizácia v dokumentoch.</li>
      <li>Prvá verzia kódu, tabuliek alebo reportov pod dohľadom človeka.</li>
    </ul>

    <h2>Kde je výmena ťažšia</h2>

    <p>
      Tam, kde treba dôveru, zodpovednosť a rozhodnutie v neúplnom kontexte. Predajca, konzultant, technik alebo majiteľ prevádzky nerobí iba textové odpovede. Vníma situáciu, riziko, vzťah a následky.
    </p>

    <h2>Čo má spraviť malá firma</h2>

    <p>
      Nepíšte stratégiu „budeme používať AI“. Spíšte päť úloh, ktoré sa opakujú každý týždeň, trvajú veľa času a majú jasné kritérium kvality. Tam testujte. Ostatné nechajte zatiaľ tak.
    </p>

    <p>
      Pre tímové licencie a návratnosť je praktickejší článok <NuxtLink to="/blog/ai-nastroj-pre-cely-tim-ma-to-zmysel">AI nástroj pre celý tím</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'AI a budúcnosť práce bez paniky | Appinara',
  meta: [
    { name: 'description', content: 'Ktoré pracovné úlohy AI mení najrýchlejšie a ako sa na to pozerať prakticky v malej firme bez paniky a prehnaných sľubov.' },
    { name: 'keywords', content: 'AI a práca, automatizácia práce, budúcnosť práce, malé firmy' }
  ]
})
</script>
