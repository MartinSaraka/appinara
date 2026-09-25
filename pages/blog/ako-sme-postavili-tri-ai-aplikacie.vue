<template>
  <BlogArticleLayout
    breadcrumb="Tri AI aplikácie"
    category="Prípadová štúdia"
    read-time="10 min"
    date="25. september 2026"
    title="Ako sme postavili tri AI aplikácie:"
    title-accent="BecomeTen, MiraSkinLab a Dreamtangle."
    intro="Hodnotenie tváre, plán starostlivosti o pleť a výklad snov. Tri úplne rozdielne produkty s platbami, EÚ hostingom a viacerými jazykmi. Čo sme pri nich rozhodli, čo nás prekvapilo a čo by sme dnes spravili inak."
    cta-title="Máte nápad na AI aplikáciu?"
    cta-text="Presne takéto projekty robíme v balíku Rast: od prvej verzie cez platby až po spustenie. Napíšte, čo má aplikácia robiť, a do dvoch dní dostanete návrh rozsahu a ceny."
    primary-label="Napísať dopyt"
    primary-to="/#contact"
  >
    <p>
      Okrem webov pre firmy vyvíjame aj vlastné produkty. Nie ako hobby, ale ako skúšobný polygón: všetko, čo sa na nich naučíme o AI, platbách a súkromí, potom používame v projektoch pre klientov. Tu sú tri z nich.
    </p>

    <h2>Tri produkty v skratke</h2>

    <ul>
      <li><strong><a href="https://becometen.com" target="_blank" rel="noopener">BecomeTen</a></strong> hodnotí tvár z jednej fotky: skóre 0 – 100, viac ako 30 rysov a strop, ktorý sa dá dosiahnuť bez operácie, s plánom, ako k nemu.</li>
      <li><strong><a href="https://miraskinlab.com" target="_blank" rel="noopener">MiraSkinLab</a></strong> z deviatich otázok a selfie zostaví plán starostlivosti o pleť a vlasy, pri ktorom každý krok cituje štúdiu.</li>
      <li><strong><a href="https://dreamtangle.com" target="_blank" rel="noopener">Dreamtangle</a></strong> vykladá sny. Sen napíšete alebo nadiktujete a do pár sekúnd dostanete osobný výklad symbolov a emócií. Má slovník s vyše 340 symbolmi v siedmich jazykoch.</li>
    </ul>

    <p>
      Všetky tri fungujú rovnako: výsledok alebo jeho náhľad je zadarmo, platí sa až potom, čo človek vidí, že mu to dáva zmysel.
    </p>

    <h2>Rozhodnutie č. 1: čísla počíta kód, nie AI</h2>

    <p>
      Jazykový model vie krásne písať, ale nevie spoľahlivo počítať a rád si domýšľa. Preto má v každej aplikácii AI len jednu úlohu: <strong>vysvetliť výsledok</strong>. Samotný výsledok vzniká v kóde.
    </p>

    <p>
      V BecomeTen sa celkové skóre prepočítava z jednotlivých oblastí, aby si model nemohol protirečiť. Potenciál zlepšenia má pevné stropy podľa toho, čo sa dá reálne zmeniť, a ak by model sľúbil viac, server ho oreže. Rovnaký princíp používame aj pri klientskych chatbotoch: ceny, termíny a dostupnosť berie AI z databázy, nikdy z hlavy.
    </p>

    <h2>Rozhodnutie č. 2: odporúčania len z overených zdrojov</h2>

    <p>
      Pri pleti a zdraví je vymyslená citácia horšia než žiadna. MiraSkinLab aj BecomeTen preto môžu citovať iba zo zoznamu štúdií, ktoré sme ručne overili, s odkazom na PubMed. Model vráti len identifikátor zdroja a server k nemu doplní skutočnú citáciu. Ak zdroj v knižnici nie je, rada sa označí ako neoverená.
    </p>

    <p>
      Znie to ako detail, ale práve tu sa láme dôvera. A dôvera je pri platbe za digitálny produkt od neznámej značky to jediné, čo máte.
    </p>

    <h2>Rozhodnutie č. 3: výsledok skôr, otázky neskôr</h2>

    <p>
      Prvé verzie sa pýtali desať otázok ešte pred fotkou. Každá otázka navyše je bod, kde človek zavrie stránku. Po troch kolách testovania s reálnymi ľuďmi sa v BecomeTen dnes k skóre dostanete na tri ťuknutia a otázky prídu až vtedy, keď chcete plán na mieru.
    </p>

    <p>
      Rovnaké pravidlo platí pri weboch pre firmy: najprv ukážte hodnotu, až potom pýtajte údaje.
    </p>

    <h2>Čo nás prekvapilo: chyba, ktorú by nenašiel žiadny report</h2>

    <p>
      Pri jednom z auditov sme prešli celý proces ako bežný zákazník, klik po kliku. Ukázalo sa, že po poslednej otázke sa nedalo pokračovať ďalej. Chyba bola v dvoch riadkoch: jedna časť kódu počítala s deviatimi krokmi, druhá s desiatimi. Analytika by ukázala len to, že ľudia odchádzajú na deviatej otázke, a hľadali by sme problém v texte otázky.
    </p>

    <p>
      Odvtedy platí pravidlo: pred každým spustením kampane niekto prejde celý nákup naostro, až po platbu a e-mail s účtenkou. Rovnaký test robíme pri každom klientskom webe pred odovzdaním.
    </p>

    <h2>Súkromie a právne veci od prvého dňa</h2>

    <ul>
      <li><strong>Dáta v EÚ.</strong> Pri BecomeTen bežia databáza aj výpočty v Írsku a fotky sú šifrované v európskom úložisku.</li>
      <li><strong>Fotka z bezplatnej analýzy sa maže</strong> hneď po vyhodnotení. Na fotkách netrénujeme žiadne modely.</li>
      <li><strong>Jasný predajca.</strong> Firma, IČO, adresa, podmienky a pravidlá odstúpenia sú verejné, platby idú cez Stripe.</li>
      <li><strong>AI obrázky sú označené</strong> ako ilustrácia, nie predpoveď výsledku.</li>
    </ul>

    <p>
      Nie je to len formalita. Platobné brány aj obchody s aplikáciami sa na tieto veci pýtajú a bez nich sa produkt nespustí.
    </p>

    <h2>Jeden základ, dve značky</h2>

    <p>
      BecomeTen a MiraSkinLab zdieľajú rovnaké technické jadro: analýzu fotky, knižnicu štúdií, platby aj správu účtov. Navonok sú to však dva produkty s iným publikom, tónom aj cenou. Každé vylepšenie jadra tak prospeje obom a vývoj druhej značky stál zlomok prvej.
    </p>

    <h2>Čo z toho plynie pre váš projekt</h2>

    <ol>
      <li>AI nech vysvetľuje, nie rozhoduje. Fakty, ceny a výpočty patria do kódu a databázy.</li>
      <li>Ukážte hodnotu skôr, než pýtate údaje alebo peniaze.</li>
      <li>Pred spustením prejdite celý proces sami, až po platbu.</li>
      <li>Súkromie a právne náležitosti riešte od začiatku, dodatočne sú drahšie.</li>
      <li>Ak plánujete viac produktov, postavte spoločný základ.</li>
    </ol>

    <p>
      Porovnanie BecomeTen a MiraSkinLab s inými aplikáciami na trhu nájdete v článku <NuxtLink to="/blog/najlepsie-ai-aplikacie-na-tvar-a-plet">najlepšie AI aplikácie na tvár a pleť</NuxtLink>. A ak rozmýšľate nad vlastnou aplikáciou, pozrite si <NuxtLink to="/#baliky">naše balíky</NuxtLink>.
    </p>
  </BlogArticleLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Ako sme postavili tri AI aplikácie: BecomeTen, MiraSkinLab, Dreamtangle | Appinara',
  meta: [
    { name: 'description', content: 'Prípadová štúdia troch AI aplikácií: hodnotenie tváre, plán starostlivosti o pleť a výklad snov. Rozhodnutia o AI, platbách, súkromí a čo sme sa naučili.' },
    { name: 'keywords', content: 'vývoj AI aplikácie, AI aplikácia na mieru, prípadová štúdia, BecomeTen, MiraSkinLab, Dreamtangle' }
  ]
})
</script>
