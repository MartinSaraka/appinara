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
          <span class="dark:text-slate-300 text-gray-700">AI chatbot pre malý biznis</span>
        </nav>

        <header class="mb-12">
          <p class="eyebrow mb-5">AI · 7 min čítania · 15. november 2024</p>

          <h1 class="text-display-xl font-display font-bold mb-6 leading-[1.0] dark:text-white text-gray-900 text-balance">
            AI chatbot pre malý biznis —
            <span class="italic font-medium gradient-text">kedy má a kedy nemá zmysel.</span>
          </h1>

          <p class="text-xl dark:text-slate-300 text-gray-700 leading-relaxed text-pretty">
            Chatbot nie je univerzálne riešenie. V niektorých firmách ušetrí desiatky hodín mesačne, v iných je to len ďalší support kanál, ktorý treba spravovať. Tu je realistický pohľad na to, kedy sa oplatí — a kedy radšej vyhodiť pár tisíc inde.
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <p>
            Posledné dva roky sa o chatbotoch píše akoby boli novou elektrinou. V praxi vidím spektrum výsledkov — od „nahradil jednu pracovnú silu na inboxe" po „zdvojnásobil prácu, lebo teraz musíme kontrolovať, čo zákazníkom napísal". Rozhodujúce nie je, aký model použijete, ale či vaša firma spadá do scenárov, kde chatbot reálne pomáha.
          </p>

          <h2>Tri otázky, ktoré rozhodnú</h2>

          <p>
            Pred tým, než platíte za vývoj alebo za nejakú „SaaS chatbot platformu", odpovedzte si na toto:
          </p>

          <h3>1. Dostávate aspoň 30–50 podobných otázok mesačne?</h3>

          <p>
            Chatbot dáva zmysel pri opakujúcich sa dopytoch — otváracie hodiny, ceny, dostupnosť, ako rezervovať, čo robiť pri probléme. Ak vám zákazníci píšu zriedkavo a vždy s niečím iným, chatbot vám len pridá medzivrstvu, ktorou si treba prejsť, kým sa dostanú k vám.
          </p>

          <h3>2. Máte stabilný obsah, na ktorý môže odpovedať?</h3>

          <p>
            Bot je len tak dobrý, ako dobre štruktúrovaný obsah, z ktorého čerpá. Ak váš cenník mení sa každé dva týždne a dostupnosť sa eviduje v hlave človeka pri pulte, žiaden chatbot to nedohonia. Najprv usporiadajte informácie, potom riešte automatizáciu.
          </p>

          <h3>3. Je rozumný kompromis akceptovateľný pre vašu značku?</h3>

          <p>
            Bot povie z času na čas niečo nepresne. Pre lokálny food truck je to OK. Pre právnu kanceláriu, ktorá pracuje s presnosťou, je to riziko. Otázku „ako reagujem, keď bot povie hlúposť" treba mať vyriešenú vopred.
          </p>

          <h2>Kde chatbot reálne sedí</h2>

          <p>
            Tieto scenáre vidím opakovane fungovať:
          </p>

          <ul>
            <li><strong>E-shopy</strong> — typicky 60–80 % otázok sa točí okolo dostupnosti, dodávky a vrátenia tovaru. Bot s napojením na sklad odpovedá v sekunde.</li>
            <li><strong>Prevádzky s rezerváciami</strong> — kaderníctva, kozmetika, fyzioterapia. Bot pošle voľné termíny a zachytí kontakt, kým si majiteľ stíha venovať klientovi pri kresle.</li>
            <li><strong>B2B firmy s kvalifikáciou leadov</strong> — bot sa pýta typ firmy, veľkosť, rozpočtový rámec. Filtrované leady idú obchodníkovi, zvyšok dostane šablónu.</li>
            <li><strong>FAQ pri zložitých produktoch</strong> — softvér, finančné služby, poistenia. Bot odpovedá na 70 % bežných otázok bez rušenia tímu.</li>
          </ul>

          <h2>Kde chatbot nesedí</h2>

          <ul>
            <li><strong>Servisy a remeslá s individuálnym ocenením</strong> — vždy treba diagnostiku alebo obhliadku. Bot vás len oddialený od skutočnej konverzácie.</li>
            <li><strong>Veľmi malý objem dopytov</strong> — pod 20 mesačne. Náklady na vývoj a údržbu sa nezaplatia.</li>
            <li><strong>Highly regulovaný biznis</strong> — zdravotnícke služby, právne poradenstvo, finančné poradenstvo. Riziko presahuje benefit.</li>
            <li><strong>Brand, kde je osobný kontakt hodnotou</strong> — prémiové butiky, gastronómia, niektoré agentúry. Chatbot tam šliape na to, za čo si platíte.</li>
          </ul>

          <h2>Náklady a očakávania</h2>

          <p>
            Pre kontext: jednoduchý FAQ chatbot napojený na obsah vašej stránky vyjde na 400–800 € jednorazovo a 30–80 €/mesiac (API cena podľa objemu konverzácií). Chatbot s integráciou do CRM, skladu alebo rezervačného systému je 1 200–2 500 € jednorazovo a 80–200 €/mesiac.
          </p>

          <p>
            Hrubá orientácia: ak chatbot vyrieši 50 otázok mesačne, ktoré by inak stáli 3–5 minút človeka, pri sadzbe 15 €/h to je úspora 40–60 €/mesiac. Pri menšom objeme matematika nesedí — preto ten 30+ otázok mesačne benchmark vyššie.
          </p>

          <h2>Ako to overiť bez veľkej investície</h2>

          <p>
            Nepotrebujete hneď platiť za custom vývoj. Skúste tento postup:
          </p>

          <ol>
            <li>Týždeň si zaznamenávajte všetky otázky, ktoré dostanete cez email, formulár, Messenger, Instagram. Bez výnimky.</li>
            <li>Po týždni ich prejdite a označte: ktoré sa opakujú, ktoré majú jednoznačnú odpoveď, ktoré vyžadujú človeka.</li>
            <li>Ak je „opakujú sa + jednoznačná odpoveď" pod 40 % všetkých dopytov, chatbot vám pravdepodobne neuľaví. Riešte iný problém.</li>
            <li>Ak je nad 60 %, postavte si jednoduchý prototyp v <a href="https://chatbot.com" target="_blank" rel="noopener noreferrer">no-code nástroji</a> alebo cez ChatGPT custom GPT a otestujte mesiac. Ak to fungovalo, máte dáta na rozhodnutie o serióznom riešení.</li>
          </ol>

          <p>
            Tento prieskum vás bude stáť pár hodín času, nie pár tisíc eur. A na konci budete vedieť, či má vaša firma chatbot v tej kategórii „šetrí čas", alebo „znie dobre v marketingu, ale neuľaví".
          </p>

          <div class="not-prose mt-12 rounded-2xl border border-cinnabar-500/40 dark:border-cinnabar-glow/40 bg-cinnabar-soft/50 dark:bg-cinnabar-glow/10 p-7 md:p-8">
            <p class="eyebrow mb-3">Ďalší krok</p>
            <p class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-3">
              Neviete, či chatbot u vás dáva zmysel?
            </p>
            <p class="dark:text-slate-300 text-gray-700 mb-5 leading-relaxed">
              5 otázok, 3–4 minúty. AI audit prejde vašu situáciu a vráti odporúčaný smer — alebo poviem, že to nie je dobrý fit.
            </p>
            <div class="flex flex-wrap gap-3">
              <NuxtLink to="/ai-audit" class="btn-primary">Spustiť AI audit</NuxtLink>
              <NuxtLink to="/balicky#ai" class="btn-secondary">AI balíčky</NuxtLink>
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
  title: 'AI chatbot pre malý biznis — kedy má a nemá zmysel | Appinara',
  meta: [
    { name: 'description', content: 'Bez „revolúcie zákazníckeho servisu". Realistický pohľad na to, kedy chatbot ušetrí čas a kedy je len ďalší support kanál.' },
    { name: 'keywords', content: 'AI chatbot, chatbot pre malú firmu, AI asistent Slovensko, chatbot cena, chatbot kedy sa oplatí' }
  ]
})
</script>
