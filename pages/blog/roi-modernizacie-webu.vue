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
          <span class="dark:text-slate-300 text-gray-700">ROI modernizácie webu</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">Cenník · 7 min čítania · 26. október 2024</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            Oplatí sa modernizovať
            <span class="italic font-medium gradient-text">starý web?</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Niekto vám povie áno, niekto nie — väčšinou podľa toho, čo predáva. Tu je tri otázky, ktoré si treba zodpovedať predtým, než utratíte 2 000–5 000 € na nový web. Bez nich je „nový web" len kozmetika.
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <p>
            Mám klientov, ktorých nový web zarobil sám seba späť za tri mesiace. Mám aj takých, kde redizajn znamenal druhú faktúru za rok, lebo problém nebol vo vizuále. Rozdiel je v tom, či nový web rieši správny problém — nie či je peknejší.
          </p>

          <h2>Tri otázky pred rozhodnutím</h2>

          <h3>1. Vidím v dátach problém, ktorý nový web vyrieši?</h3>

          <p>
            Otvorte si Google Analytics (alebo akýkoľvek nástroj, ktorý máte) a pozrite sa na konkrétne čísla:
          </p>

          <ul>
            <li><strong>Bounce rate</strong> — koľko ľudí sa odhlási bez akcie? Ak je nad 70 % na hlavnej stránke a vy chcete dopyt, máte problém.</li>
            <li><strong>Conversion rate na formulári</strong> — z koľkých návštevníkov sa stane lead? Ak je pod 1 %, niečo dôležité nefunguje.</li>
            <li><strong>Mobile vs. desktop</strong> — koľko percent návštev je z mobilu a aký je tam bounce rate? Ak je mobil 60 % traffic-u a tam to padne, web je pravdepodobne neresponzívny alebo pomalý.</li>
            <li><strong>Page speed</strong> — Google PageSpeed Insights skóre. Pod 50 v mobile zvyšuje bounce rate dramaticky.</li>
          </ul>

          <p>
            Ak konkrétny problém nevidíte, redizajn ho nevyrieši. Iba premaľuje pekný obal okolo. Niekedy je správna odpoveď „web je OK, problém je inde — chýbajú referencie, chýba blog, chýba SEO, chýba inzerát na Googli".
          </p>

          <h3>2. Mení sa moja firma natoľko, že web mi škodí?</h3>

          <p>
            Niektoré redesigny sú o čo. Iné sú o tom, že firma za 4 roky úplne zmenila pozíciu — pridala služby, zmenila cieľovú skupinu, zdvihla cenovku — ale web stále hovorí o tom, kým bola na začiatku. To je dôvod meniť, aj keď web technicky funguje.
          </p>

          <p>
            Test: prečítajte si svoju domovskú stránku, akoby ste boli ideálny nový klient. Hovorí o vás súčasných alebo o vás spred troch rokov?
          </p>

          <h3>3. Mám rozpočet na to, čo nový web odhalí?</h3>

          <p>
            Toto je kontroverzná časť. Nový web takmer vždy odhalí ďalšie investície, ktoré klient pôvodne neplánoval:
          </p>

          <ul>
            <li><strong>Nové fotky</strong> — staré stockové už neladia s novým štýlom (200–800 €).</li>
            <li><strong>Nové texty</strong> — copywriting, ak nie ste písateľ (300–800 €).</li>
            <li><strong>SEO migrácia</strong> — bez nej môžete stratiť pozície v Google na 2–4 mesiace, kým sa to ustáli (200–500 € audit + opravy).</li>
            <li><strong>Reklamy/Google Ads</strong> — ak na ne chcete posielať traffic na nový web, treba landing pages dolaďovať (300 €/mes minimum).</li>
          </ul>

          <p>
            Ak toto nemáte v rozpočte, počítajte s tým, že nový web prvý kvartál neukáže lepšie čísla, len rovnaké — alebo na chvíľu horšie kvôli SEO migrácii.
          </p>

          <h2>Kedy sa redizajn vráti rýchlo</h2>

          <p>
            Z mojej skúsenosti sa nový web zaplatí do 6 mesiacov pri týchto situáciách:
          </p>

          <ul>
            <li><strong>Mobile fail</strong> — starý web nefunguje v mobile, pritom 60 %+ návštevnosti je mobilná. Toto je takmer vždy 30–50 % nárast leadov sám od seba.</li>
            <li><strong>Pomalý web</strong> — load time nad 4 sekundy. Skrátenie na 1–2 s typicky znamená 10–20 % menej bounce rate.</li>
            <li><strong>Chýba clear CTA</strong> — staré weby často nemajú jasný „kontaktujte nás" prvok nad fold-om. Pridanie samé osebe robí 15–30 % rozdiel.</li>
            <li><strong>Zastaraná dôveryhodnosť</strong> — chýbajú referencie, certifikáty, social proof. Toto pri B2B firmách robí veľký rozdiel.</li>
          </ul>

          <h2>Kedy sa redizajn nevráti</h2>

          <ul>
            <li><strong>Pre redizajn</strong> — „nepáči sa mi" je legitímny dôvod investície, ale nečakajte ROI. Investujete do svojej značky, nie do konverzií.</li>
            <li><strong>Pri webe, ktorý nikto nevidí</strong> — ak máte 200 návštev mesačne, žiaden web sa pri tomto trafficu nezaplatí. Najprv riešte traffic.</li>
            <li><strong>Pri biznise, kde web nie je hlavný kanál</strong> — ak vám 90 % zákazníkov chodí cez referrals, web je vizitka, nie predajný stroj. Investujte do referralov.</li>
          </ul>

          <h2>Mini-kalkulačka</h2>

          <p>
            Veľmi hrubo, na obrúsku:
          </p>

          <ul>
            <li>Mesačné návštevy <strong>×</strong> aktuálny conversion rate <strong>=</strong> aktuálne leady mesačne.</li>
            <li>Tie isté návštevy <strong>×</strong> realistický cieľový conversion rate (typicky 2–4×) <strong>=</strong> potenciálne leady.</li>
            <li>Rozdiel <strong>×</strong> close rate <strong>×</strong> priemerná hodnota klienta <strong>=</strong> dodatočný príjem mesačne.</li>
          </ul>

          <p>
            Ak je dodatočný príjem viac než 1/3 nákladov projektu, ROI je pod rok. Ak menej, premyslite si, či nemáte nájsť iné páky.
          </p>

          <div class="not-prose mt-12 rounded-2xl border border-cinnabar-500/40 dark:border-cinnabar-glow/40 bg-cinnabar-soft/50 dark:bg-cinnabar-glow/10 p-7 md:p-8">
            <p class="eyebrow mb-3">Ďalší krok</p>
            <p class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-3">
              Posúdim váš aktuálny web zdarma.
            </p>
            <p class="dark:text-slate-300 text-gray-700 mb-5 leading-relaxed">
              Pošlite link a krátky popis cieľov. Vrátim 3–5 konkrétnych pripomienok — bez ohľadu na to, či si u mňa redizajn objednáte. Niekedy stačia drobné úpravy.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/#contact" class="btn-primary">Posúdim môj web</a>
              <NuxtLink to="/balicky" class="btn-secondary">Cenník redizajnov</NuxtLink>
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
  title: 'Oplatí sa modernizovať starý web? Tri otázky pred rozhodnutím | Appinara',
  meta: [
    { name: 'description', content: 'Kedy nový web zarobí naspäť a kedy je to len redizajn pre redizajn. Tri otázky a mini-kalkulačka ROI.' },
    { name: 'keywords', content: 'redizajn webu, ROI nového webu, modernizácia webu, oplatí sa nový web' }
  ]
})
</script>
