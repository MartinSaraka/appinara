<template>
  <div class="relative overflow-hidden min-h-screen dark:bg-anthracite bg-bone">
    <Navigation />
    <main id="main-content" class="relative pt-28 pb-24 px-6">
      <div class="absolute -top-24 right-0 w-[480px] h-[480px] mesh-1 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div class="container mx-auto max-w-3xl relative">
        <header class="mb-10 text-center md:text-left space-y-6">
          <div>
            <p class="eyebrow mb-3">
              Zdarma · 3–4 minúty · 5 krokov
            </p>
            <h1 class="text-display-lg font-display font-bold dark:text-white text-gray-900 mb-4 text-balance leading-[1.05]">
              Krátky <span class="italic font-medium gradient-text">AI audit.</span>
            </h1>
            <p class="text-base md:text-lg dark:text-slate-300 text-gray-700 max-w-xl text-pretty">
              Odpovedzte na pár otázok — na konci dostanete
              <strong class="text-gray-900 dark:text-white font-semibold">odporúčenie smeru</strong>
              (chatbot, lead follow-up, web alebo interný nástroj).
            </p>
          </div>

          <div class="glass-effect rounded-2xl p-6 border border-gray-200/40 dark:border-white/10 text-left">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-3">
              Čo získate
            </h2>
            <ul class="space-y-2 text-sm dark:text-slate-300 text-gray-700 list-disc list-inside">
              <li>stručné <strong class="text-gray-900 dark:text-white">odporúčenie ďalšieho kroku</strong> podľa vašich odpovedí,</li>
              <li><strong class="text-gray-900 dark:text-white">kvalifikovaný kontakt</strong> pre mňa — namiesto všeobecnej „napíšte nám“,</li>
              <li>jasnejší vstup do rozhovoru o AI riešeniach alebo webe na mieru.</li>
            </ul>
            <p class="mt-4 text-xs text-gray-600 dark:text-slate-500">
              Vhodné pre firmy, ktoré riešia dopyty, emaily alebo chcú zistiť, či má zmysel chatbot alebo automatizácia.
              Podrobnejší prehľad riešení nájdete na
              <NuxtLink to="/riesenia" class="text-primary-600 dark:text-primary-400 font-medium hover:underline">stránke Riešenia</NuxtLink>
              . Otázky môžete položiť aj v
              <span class="text-primary-600 dark:text-primary-400 font-medium">chate vpravo dole</span> na webe.
            </p>
          </div>
        </header>

        <AiAuditWizard />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'AI audit | Appinara — AI automatizácie a digitálne riešenia',
  meta: [
    {
      name: 'description',
      content:
        'Bezplatný AI audit pre firmy (5 krokov, 3–4 min): kvalifikácia potrieb, odporúčenie smeru — AI chatbot, lead follow-up, web alebo interný nástroj. Konzultácia a ďalší krok po audite.'
    },
    { property: 'og:title', content: 'AI audit | Appinara' },
    {
      property: 'og:description',
      content:
        'Vyplňte krátky audit a získajte odporúčanie pre AI automatizácie, weby alebo interné nástroje.'
    },
    { property: 'og:url', content: 'https://appinara.sk/ai-audit' }
  ],
  link: [{ rel: 'canonical', href: 'https://appinara.sk/ai-audit' }]
})
</script>
