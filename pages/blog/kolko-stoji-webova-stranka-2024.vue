<template>
  <div class="relative dark:bg-anthracite bg-bone min-h-screen">
    <Navigation />

    <article class="relative pt-32 md:pt-40 pb-20">
      <div class="container mx-auto px-6 max-w-3xl">
        <!-- Breadcrumbs -->
        <nav class="mb-10 text-sm" aria-label="Drobky">
          <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">Domov</NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 hover:text-cinnabar-500 dark:hover:text-cinnabar-glow">Blog</NuxtLink>
          <span class="dark:text-slate-600 text-gray-400 mx-2" aria-hidden="true">/</span>
          <span class="dark:text-slate-300 text-gray-700">Koľko stojí web</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">Cenník · 8 min čítania · 12. november 2024</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            Koľko stojí webová stránka
            <span class="italic font-medium gradient-text">v roku 2025?</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Otázku „koľko to stojí" dostávam najčastejšie zo všetkých. Krátka odpoveď neexistuje, ale viem vám povedať, čím sa rozdiel medzi 500 € a 5 000 € skladá — a kde je v skutočnosti hranica medzi „lacno" a „lacne".
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <p>
            Ceny na slovenskom trhu sa pohybujú od pár stoviek po desaťtisíce eur, a oba extrémy majú svojich kupcov. Tento článok nie je o tom, ktorá cena je správna — je o tom, čo presne za peniaze v každom rozsahu dostávate, aby ste vedeli, kedy je ponuka férová a kedy si idete kúpiť mačku vo vreci.
          </p>

          <h2>Z čoho sa skladá cena webu</h2>

          <p>
            Keď niekto dostane ponuku „web za 800 €" a iný „web za 4 200 €", rozdiel takmer nikdy nie je v hodinách kódovania. Je v štyroch veciach:
          </p>

          <ul>
            <li><strong>Rozsah obsahu</strong> — jednostránkový web vs. desať podstránok s blogom a kariérnou sekciou.</li>
            <li><strong>Customizácia dizajnu</strong> — šablóna upravená farbami vs. dizajn na mieru s vlastnou typografiou a komponentami.</li>
            <li><strong>Funkcionalita</strong> — statický web vs. rezervačný systém, e-shop, integrácie, multi-jazyk.</li>
            <li><strong>Kto to robí</strong> — junior z fakulty vs. studio s 5-ročnou praxou vs. agentúra s account managerom.</li>
          </ul>

          <p>
            Ak ponuka neukazuje rozdiel aspoň v týchto štyroch osiach, je to hmlistá cenovka — s veľkým priestorom na „doplnkové práce" potom.
          </p>

          <h2>Reálne pásma cien</h2>

          <h3>500 – 1 200 € · jednostránkový web</h3>

          <p>
            Sem patrí klasická landing page pre prevádzku alebo malú firmu — kontakt, služby, krátka galéria, formulár. Postavená na šablóne (alebo lehko prerobenej), na hostingu typu Vercel/Netlify, dodávka 1–2 týždne.
          </p>

          <p>
            Pre koho dáva zmysel: lokálne prevádzky (kaderníctvo, autoservis, kaviareň), malé B2B firmy, ktoré len potrebujú „existovať na webe", testovacie projekty pred väčšou investíciou.
          </p>

          <p>
            Čo v tomto rozsahu typicky <em>nedostanete</em>: rezervačný systém s notifikáciami, viacjazyčnosť, custom design, CMS na samosprávu obsahu, SEO audit a copywriting nad rámec preposlaných textov.
          </p>

          <h3>1 200 – 2 500 € · viacstránkový web s CMS</h3>

          <p>
            Päť až sedem podstránok, jednoduchý CMS (zvyčajne Sanity, Strapi alebo Decap), kde si vy alebo váš asistent dokážete sami pridávať blogy a meniť texty. Zákazka šitá viac na mieru, dizajn nemusí byť úplne unikátny, ale nie je to už kópia šablóny zo ThemeForestu.
          </p>

          <p>
            V tomto rozsahu sa zmestí jednoduchý rezervačný formulár, integrácia s Mailchimpom alebo HubSpotom, blog so správou kategórií a SEO basics (sitemap, meta, schema markup).
          </p>

          <p>
            Pre koho: rastúce firmy, ktoré majú obsah a chcú ho aktualizovať bez developera; B2B firmy, ktoré potrebujú reprezentovať profesionálne a chcú ich vyhľadávať; menšie agentúry a studio.
          </p>

          <h3>2 500 – 5 000 € · custom web s integráciami</h3>

          <p>
            Dizajn na mieru, vlastný komponentový systém, multi-jazyk, API integrácie (CRM, fakturačný systém, email automation), pokročilejší CMS, technická SEO optimalizácia. Stredné e-shopy do 50 produktov sa pohybujú v hornej polovici tohto pásma.
          </p>

          <p>
            Tu sa už väčšinou nestrieda jeden človek — robí to dvojica/tím (developer + dizajnér), alebo jeden senior s viacnásobnou praxou. Trvá to 3–6 týždňov a očakávajte 1–2 reviewné kolá.
          </p>

          <h3>5 000 € a viac · platforma alebo náročný projekt</h3>

          <p>
            Vlastné business systémy, multi-tenant SaaS, e-shopy s pokročilým skladom a integráciami, weby pre značky, ktoré potrebujú „brand experience" — animácie, video, zložitý dizajn. Aj na 15 000 € ponuku sa dá natrafiť, ak je to platforma s niekoľkými user role-mi a custom backend logikou.
          </p>

          <p>
            Tieto projekty bežne trvajú 6–12 týždňov a viac sa podobajú softvérovému vývoju než „web dizajn".
          </p>

          <h2>Skryté náklady, na ktoré sa zabúda</h2>

          <p>
            Cenovka projektu nie je celý príbeh. Toto sú náklady, ktoré sa do prvotnej ponuky často nedostanú a klient ich potom rieši dodatočne:
          </p>

          <ul>
            <li><strong>Hosting</strong> — od 0 € (Vercel free tier) po 30 €/mesiac (klasický VPS s e-shopom).</li>
            <li><strong>Doména</strong> — 10–25 € ročne.</li>
            <li><strong>Fotky a vizuál</strong> — vlastný fotograf 200–600 €, alebo licencie na stockové fotky 50–200 €.</li>
            <li><strong>Texty</strong> — ak ich neviete napísať sami, copywriter si pýta 0,08–0,15 €/slovo, čiže 200–600 € za základný web.</li>
            <li><strong>Údržba</strong> — 30–80 €/mesiac, ak chcete priebežné aktualizácie a malé úpravy bez separátneho rozpočtu.</li>
            <li><strong>SSL, GDPR cookie banner, analytics</strong> — väčšinou v cene, niekedy doplnok.</li>
          </ul>

          <h2>Ako rozumieť cenovke</h2>

          <p>
            Keď dostanete ponuku, pýtajte sa nie „prečo je to tak veľa", ale tieto štyri konkrétne otázky:
          </p>

          <ol>
            <li><strong>Čo presne je v cene a čo už nie?</strong> Mimo scope by malo byť jasné — nie len „dohodneme sa".</li>
            <li><strong>Koľko revíznych kôl je zahrnutých?</strong> Štandard je 1–2; každé ďalšie je príplatok.</li>
            <li><strong>Komu patrí hotový kód a dáta?</strong> Vlastníte zdroj, alebo iba „licenciu na používanie"?</li>
            <li><strong>Ako vyzerá údržba a kontakt po dodaní?</strong> Mesačný paušál? Hodinová sadzba? Mlčanie?</li>
          </ol>

          <p>
            Férová ponuka na všetky štyri odpovie písomne. Ak nie — to nie je o cenovke, to je o tom, ako bude vyzerať spolupráca.
          </p>

          <h2>Tip na záver</h2>

          <p>
            Najčastejšia chyba pri výbere webu nie je „príliš drahé" alebo „príliš lacné". Je to <em>nesprávny scope</em>. Ľudia si platia 800-eurový jednoduchý web vtedy, keď v skutočnosti potrebovali 2 200-eurový web s CMS — a o pol roka platia dvakrát, lebo prerábajú. Alebo si platia 4 000-eurový custom projekt, keď im stačila šablóna za 800 €, ale „nech to vyzerá draho".
          </p>

          <p>
            Pred vyberaním cenovky si ujasnite: koľko podstránok, aký obsah, kto bude meniť veci, aké integrácie, kedy a čo sa bude mať škálovať. To zúži ponuky, ktoré naozaj porovnávate.
          </p>

          <div class="not-prose mt-12 rounded-2xl border border-cinnabar-500/40 dark:border-cinnabar-glow/40 bg-cinnabar-soft/50 dark:bg-cinnabar-glow/10 p-7 md:p-8">
            <p class="eyebrow mb-3">Ďalší krok</p>
            <p class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-3">
              Pripravil som tri pevné balíčky podľa toho rozdelenia.
            </p>
            <p class="dark:text-slate-300 text-gray-700 mb-5 leading-relaxed">
              Štart, Štandard a Premium — s konkrétnym scope, fixnou cenou a deadlinom. Plus custom variant, ak sa to nezmestí.
            </p>
            <NuxtLink to="/balicky" class="btn-primary">
              Pozrieť balíčky
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Koľko stojí webová stránka v roku 2025? | Appinara',
  meta: [
    { name: 'description', content: 'Z čoho sa skladá cena webu v 2025 — pásma 500–5000 €+, skryté náklady, čo sa pýtať dodávateľa. Bez fluffu, s konkrétnymi číslami.' },
    { name: 'keywords', content: 'cena webu, koľko stojí web, web cenník Slovensko, cenník web stránok' }
  ]
})
</script>
