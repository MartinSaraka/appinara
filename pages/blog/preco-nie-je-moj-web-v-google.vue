<template>
  <BlogArticleLayout
    breadcrumb="Web nie je v Google"
    category="SEO"
    read-time="9 min"
    date="9. august 2026"
    title="Prečo môj web nie je v Google"
    title-accent="a čo s tým viete spraviť."
    intro="Väčšinou to nie je preto, že by ste mali málo obsahu alebo slabé kľúčové slová. Býva to jedna technická vec, ktorá Googlu tichým spôsobom hovorí, že stránku nemá zaradiť. Nižšie je poradie, v akom to overiť."
    cta-title="Neviete zistiť, kde sa to láme?"
    cta-text="Pošlite adresu webu. Pozrieme robots.txt, kanonické značky, sitemapu a Search Console a napíšeme konkrétne, čo bráni indexácii a čo je len šum."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Otázka „prečo nie sme v Google“ takmer vždy znamená jednu z dvoch úplne odlišných vecí. Buď stránka naozaj nie je v indexe a Google o nej nevie, alebo v indexe je, ale na dopyty, ktoré vás zaujímajú, sa zobrazuje niekto iný. Sú to iné problémy s inými riešeniami, takže sa oplatí najprv zistiť, ktorý z nich riešite.
    </p>

    <h2>Najprv overte, či web v indexe naozaj nie je</h2>

    <p>
      Do vyhľadávania napíšte <code>site:vasadomena.sk</code>. Google vypíše stránky z vašej domény, o ktorých vie. Ak sa neukáže nič, máte problém s indexáciou. Ak sa ukážu desiatky adries, index je v poriadku a riešite viditeľnosť.
    </p>

    <p>
      Presnejšiu odpoveď dá <strong>Google Search Console</strong>. Je zadarmo a je to jediné miesto, kde vám Google priamo povie, čo si o konkrétnej adrese myslí. Vo funkcii Kontrola URL vložíte adresu a dostanete stav: indexovaná, prehľadaná ale neindexovaná, vylúčená značkou, presmerovaná. Bez tohto nástroja len hádate.
    </p>

    <h2>Päť dôvodov, ktoré to spôsobujú najčastejšie</h2>

    <h3>1. Robots.txt blokuje viac, než mal</h3>

    <p>
      Súbor <code>robots.txt</code> na adrese vasadomena.sk/robots.txt hovorí vyhľadávačom, kam nesmú. Klasická chyba je riadok <code>Disallow: /</code>, ktorý ostal z vývoja a zablokoval celý web. Menej zjavná, ale rovnako škodlivá je blokácia priečinka s JavaScriptom a CSS. Moderný web sa bez nich nevyrenderuje a Google potom vidí prázdnu stránku, ktorú nemá prečo zaradiť.
    </p>

    <h3>2. Na stránke ostala značka noindex</h3>

    <p>
      Jeden riadok v HTML hlavičke vie stránku úplne stiahnuť z indexu. Vývojárske prostredia ho mávajú zapnutý zámerne a pri spustení sa naň zabudne. V zdrojovom kóde stránky hľadajte <code>noindex</code>. Ak tam je a stránka má byť verejná, toto je celá príčina.
    </p>

    <h3>3. Kanonická značka ukazuje inam</h3>

    <p>
      Kanonická značka hovorí Googlu, ktorá adresa je originál, keď existuje viac verzií toho istého obsahu. Je užitočná a väčšina webov ju potrebuje. Problém nastane vtedy, keď je nastavená globálne pre celý web namiesto pre každú stránku zvlášť. Vtedy každá podstránka tvrdí, že originál je úvodná stránka, a Google podstránky poslušne vynechá z indexu.
    </p>

    <p>
      Je to najtichšia z chýb v tomto zozname. Web vyzerá úplne v poriadku, nič nehlási chybu, stránky sa normálne načítajú. Len sa neobjavujú vo výsledkoch.
    </p>

    <h3>4. Sitemapa neexistuje alebo klame</h3>

    <p>
      Sitemapa je zoznam adries, ktoré chcete mať v indexe. Nie je povinná, ale výrazne pomáha, hlavne pri novom webe. Dve veci pri nej stoja za kontrolu: či obsahuje všetky stránky, ktoré existujú, a či dátum <code>lastmod</code> pri každej adrese zodpovedá skutočnosti.
    </p>

    <p>
      Druhá vec sa podceňuje. Google podľa <code>lastmod</code> rozhoduje, či sa oplatí stránku znova prehľadať. Ak sitemapa tvrdí, že článok sa naposledy menil pred dvomi rokmi, hoci ste ho minulý mesiac prepísali, sami si brzdíte opätovné prehľadanie. Ručne udržiavané sitemapy sa takto rozídu s realitou takmer vždy. Oplatí sa ich generovať z dát webu, nie prepisovať v editore.
    </p>

    <h3>5. Web je nový a nikto naň neodkazuje</h3>

    <p>
      Ak je doména mesiac stará, nemá žiadne odkazy zvonku a nie je pridaná v Search Console, Google o nej jednoducho nemusí vedieť. Toto nie je chyba, len čas. Pomôže pridanie do Search Console, odoslanie sitemapy a aspoň zopár skutočných odkazov z miest, kde už firma existuje: Google profil, odborné katalógy, sociálne siete, partnerské weby.
    </p>

    <h2>Čo sme našli, keď sme si prešli vlastný web</h2>

    <p>
      Nedávno sme si spravili poriadok na appinara.sk a stálo za to. Search Console hlásila duplicitné stránky a stránky, ktoré Google prehľadal, ale nezaradil. Príčinou bola presne tretia položka z tohto zoznamu: kanonická značka bola nastavená globálne v konfigurácii, takže každý článok na blogu hlásil ako originál úvodnú stránku.
    </p>

    <p>
      K tomu sa pridali dve menšie veci. Robots.txt blokoval priečinok s JavaScriptom, čo Googlu sťažovalo vyrenderovanie stránok. A sitemapa bola písaná ručne, takže polovica článkov mala <code>lastmod</code> starý dva roky a Google nemal dôvod sa k nim vracať.
    </p>

    <p>
      Ani jedna z tých vecí nebola vidieť na webe. Stránky sa načítavali rýchlo, obsah bol v poriadku, dizajn fungoval. Preto sa oplatí kontrolovať priamo tie súbory a značky, nie sa spoliehať na dojem z prehliadača.
    </p>

    <h2>Keď ste v indexe, ale aj tak nikto nepríde</h2>

    <p>
      Ak <code>site:</code> vypíše vaše stránky, technicky je všetko v poriadku a riešite iný problém. Najčastejšie jeden z týchto:
    </p>

    <ul>
      <li>Web nemá stránku na to, čo ľudia naozaj hľadajú. Zoznam služieb nie je odpoveď na otázku „koľko to stojí“.</li>
      <li>Titulok a popis vo výsledkoch vyhľadávania nedávajú dôvod kliknúť. Sú to dve vety, ktoré rozhodujú o návšteve.</li>
      <li>Konkurencia na daný dopyt má obsah, ktorý odpovedá konkrétnejšie. Pri lokálnych službách to často nie je o rozpočte, ale o presnosti.</li>
      <li>Dopyt, na ktorý cielite, takmer nikto nehľadá. To sa dá overiť skôr, než sa naň napíše článok.</li>
    </ul>

    <p>
      Pri lokálnej prevádzke navyše veľkú časť viditeľnosti nerieši web, ale Google profil. Sú to dve rôzne veci, ktoré sa dopĺňajú.
    </p>

    <h2>Poradie, v ktorom to riešiť</h2>

    <ol>
      <li>Pridajte web do Google Search Console a overte vlastníctvo domény.</li>
      <li>Skontrolujte <code>robots.txt</code>, či neblokuje viac, než má.</li>
      <li>V zdrojovom kóde overte, že na verejných stránkach nie je <code>noindex</code>.</li>
      <li>Overte, že každá stránka kanonizuje sama na seba, nie na úvodnú stránku.</li>
      <li>Odošlite sitemapu a skontrolujte, že dátumy v nej zodpovedajú realite.</li>
      <li>Cez Kontrolu URL požiadajte o indexovanie najdôležitejších stránok.</li>
      <li>Až potom riešte obsah, titulky a kľúčové slová.</li>
    </ol>

    <p>
      Prvých šesť krokov je práca na pár hodín a bez nich nemá zmysel investovať do obsahu. Po oprave počítajte s tým, že Google potrebuje čas. Opätovné prehľadanie a prepočítanie indexu trvá dni až týždne, nie hodiny.
    </p>

    <h2>Čo nepomôže</h2>

    <p>
      Nakupovanie odkazov, napchávanie kľúčových slov do päty a služby, ktoré sľubujú prvé miesto do týždňa. Ak je príčinou zlá kanonická značka, žiadne množstvo obsahu ani odkazov to neprebije, pretože Google dostáva priamy pokyn stránku nezaraďovať. Najprv sa opravuje technika, potom sa stavia obsah.
    </p>

    <p>
      Ako lokálna firma dopĺňa web Google profilom, rozoberáme v článku <NuxtLink to="/blog/google-business-profajl-vs-web-sk">Google Business profil a web</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Prečo môj web nie je v Google a čo s tým | Appinara',
  meta: [
    { name: 'description', content: 'Praktický postup, keď web nie je vo vyhľadávaní: robots.txt, noindex, kanonické značky, sitemapa a Search Console. Vrátane toho, čo sme našli na vlastnom webe.' },
    { name: 'keywords', content: 'web nie je v Google, indexácia webu, Google Search Console, robots.txt, kanonická značka, sitemapa' }
  ]
})
</script>
