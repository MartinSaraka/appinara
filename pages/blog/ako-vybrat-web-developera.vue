<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <article class="relative pt-32 md:pt-40 pb-20">
      <div class="container mx-auto px-6 max-w-3xl">
        <nav class="mb-10 text-sm" aria-label="Drobky">
          <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">Domov</NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">Blog</NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <span class="dark:text-slate-300 text-gray-700">Ako vybrať web developera</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">Hiring · 8 min čítania · 1. november 2024</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            Ako vybrať web developera,
            <span class="italic font-medium gradient-text">aby ste o pol roka neľutovali.</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Klienti za mnou prichádzajú často po neúspešnom prvom pokuse. Web sa nestihol, niekto zmizol, alebo „hotový web" sa ukázal ako neudržiavateľný. Tu je to, čo z týchto príbehov používam pri vyberaní vlastných dodávateľov.
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <p>
            Vybrať dodávateľa je z 80 % práca, ktorú robíte ešte pred podpisom. Nie počas projektu, nie na konci, ale pri prvom hovore a pri rozhodovaní medzi ponukami. Takmer všetky problémy, ktoré klienti neskôr riešia, sa dali zachytiť v tejto fáze — keby vedeli, čo sa pýtať.
          </p>

          <h2>Čo si overiť pred prvým hovorom</h2>

          <p>
            Skôr než si dohodnete call, prejdite si tri veci o dodávateľovi:
          </p>

          <h3>Vie ukázať aspoň 3 reálne live projekty</h3>

          <p>
            Nie skríny z Figmy. Nie „ukážky z behance.net". Skutočné domény, ktoré bežia a fungujú. Otvorte ich v mobile aj desktope, klikajte. Ak vám pošlú len screenshoty alebo „referenčné práce sú pod NDA pri všetkých 6 projektoch", je to červená.
          </p>

          <h3>Vie pomenovať, čo presne na projekte robil</h3>

          <p>
            Mnoho freelancerov v portfóliu má projekty agentúr, kde robili časť práce — ale prezentujú ich ako vlastné. Konkrétna otázka: „Ktorú časť tohto projektu si robil ty?" Odpoveď „celý" pri komplikovanejšom projekte je podozrivá.
          </p>

          <h3>Existuje ako firma alebo SZČO</h3>

          <p>
            Pre faktúrovanie a prípadný spor potrebujete druhú stranu, ktorá je dohľadateľná na finstat.sk alebo orsr.sk. Ak je to „kamarát kamaráta s aliase u Hetzneru", neviete čo robíte ak sa veci pokazia.
          </p>

          <h2>Štyri otázky na prvom hovore</h2>

          <p>
            Tieto otázky odhalia 90 % červených zástaviek. Položte ich priamo — dobrý dodávateľ na ne odpovie bez vykrúcania.
          </p>

          <h3>1. „Ako sa rozhoduje, čo je v cene a čo navyše?"</h3>

          <p>
            Odpoveď, ktorú chcete: <em>„Pred štartom napíšeme scope dokument so zoznamom konkrétnych položiek. Čo nie je v zozname, je príplatok. Príplatky vždy schvaľujete písomne."</em>
          </p>

          <p>
            Odpoveď, ktorú nechcete: <em>„Dohodneme sa za behu, sme flexibilní."</em> To znamená, že sa vám faktúra na konci roztiahne o 30–80 %.
          </p>

          <h3>2. „Ako často budem vidieť pokrok?"</h3>

          <p>
            Odpoveď, ktorú chcete: <em>„Každý týždeň update, demo prostredie kde si môžete kliknúť priebeh, krátke statusy."</em>
          </p>

          <p>
            Odpoveď, ktorú nechcete: <em>„Ozvem sa keď bude hotovo."</em> Mesiac ticha pri webovom projekte takmer vždy znamená, že sa nerobilo, alebo sa robilo niečo iné.
          </p>

          <h3>3. „Komu patrí kód a dáta?"</h3>

          <p>
            Štandard je, že vlastníte všetko — kód, dáta, doménu, hosting. Niektoré agentúry vám dajú „licenciu na používanie" alebo držia hosting u seba ako rukojemníka. Ak chcete o rok prejsť k inému dodávateľovi a oni vám odovzdanie spomalia, je to drahé.
          </p>

          <h3>4. „Čo sa deje keď zmizneš na dovolenku alebo ochorieš?"</h3>

          <p>
            Pre 1-osobové studio: odpoveď „mám záložné kontakty na kolegov, ktorí vedia projekt prevziať" je férová. Odpoveď „to sa nestane" je v poriadku len ak to platí. Pre agentúru: „pridelíme náhradníka" by mala mať konkrétne mená.
          </p>

          <h2>Tri červené zástavky</h2>

          <h3>Veľmi nízka cena (pod 400 € za web)</h3>

          <p>
            Toto je takmer vždy jeden zo: (a) student, ktorý sa učí na vašom projekte, (b) niekto, kto vám pošle skopírovaný template z internetu, (c) niekto, kto si vás zoberie ako pre 5 klientov naraz a žiaden z nich nedostane pozornosť, ktorú potrebuje.
          </p>

          <p>
            Niekedy to dopadne dobre. Často nie. Ak váš biznis závisí od webu, neoplatí sa to vyskúšať — náklad na zlý web je nielen tých 400 €, ale aj 2 mesiace strateného času, kým si nájdete nového dodávateľa, plus to, čo váš starý web medzitým nepredal.
          </p>

          <h3>Sľuby bez dôkazov</h3>

          <p>
            „Garantujeme prvé miesto v Google" — nikto vám to seriózne nesľubuje. „Konverzný pomer +50 %" — bez vedomosti vašej situácie nikto nevie. „Hotové do týždňa" pri 5-stránkovom webe s CMS — pravdepodobne nie. Ak sa cíti že vám niečo predáva, je to predaj, nie poradenstvo.
          </p>

          <h3>Žiadny dotaz späť pred ponukou</h3>

          <p>
            Dodávateľ, ktorý vám pošle ponuku do 24 hodín bez toho, aby sa pýtal na váš biznis, vašu cieľovú skupinu, vaše ciele a vaše obmedzenia — vám pošle generickú ponuku z templatu. Bude to lacné, ale dostanete generický web.
          </p>

          <h2>Pred podpisom zmluvy</h2>

          <p>
            Tri body, ktoré musí mať zmluva alebo objednávka. Bez nich nepodpisujte:
          </p>

          <ul>
            <li><strong>Konkrétny scope</strong> — zoznam stránok, funkcií, integrácií. Nie „web podľa briefu".</li>
            <li><strong>Termín a milestóny</strong> — kedy je čo hotové, kedy revízia, kedy odovzdanie. Sankcie ak sa to posunie z viny dodávateľa.</li>
            <li><strong>Vlastníctvo</strong> — explicitne napísané, že kód, dáta a prístupy sú vaše po zaplatení.</li>
          </ul>

          <p>
            Toto sú tri vety, ktoré si môžete dopísať aj do jednoduchej objednávky cez email — ak ich dodávateľ odmietne podpísať, je to červená.
          </p>

          <div class="not-prose mt-12 rounded-2xl border border-cinnabar-500/40 dark:border-cinnabar-glow/40 bg-cinnabar-soft/50 dark:bg-cinnabar-glow/10 p-7 md:p-8">
            <p class="eyebrow mb-3">Ďalší krok</p>
            <p class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-3">
              Toto sú zhruba moje pravidlá z opačnej strany.
            </p>
            <p class="dark:text-slate-300 text-gray-700 mb-5 leading-relaxed">
              Píšem to ako developer, nie ako kupujúci — preto píšem otvorene aj o veciach, ktoré inde nečítate. Ak hľadáte druhý pohľad na konkrétnu ponuku, ktorú máte na stole, napíšte. Posúdim ju nezávisle.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/#contact" class="btn-primary">Posúdim vašu ponuku</a>
              <NuxtLink to="/balicky" class="btn-secondary">Moje balíčky</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ako vybrať web developera — checklist a červené zástavky | Appinara',
  meta: [
    { name: 'description', content: 'Štyri otázky pre prvý hovor, tri červené zástavky a tri body, ktoré musia byť v zmluve. Z perspektívy developera, nie kupujúceho.' },
    { name: 'keywords', content: 'výber web developera, ako vybrať dodávateľa, web freelancer Slovensko, web vývoj zmluva' }
  ]
})
</script>
