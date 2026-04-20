<template>
  <div class="relative overflow-hidden">
    <Navigation />

    <main id="main-content">
      <HeroSection />
      <ServicesSection />
      <AudienceSection />
      <CollaborationStepsSection />
      <WhyChooseUsSection />
      <ClientOutcomesSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const faqEntities = [
  {
    '@type': 'Question',
    name: 'Pre koho sú tieto riešenia vhodné?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Najmä pre malé a stredné firmy, ktoré chcú zefektívniť komunikáciu, získavať viac dopytov alebo znížiť množstvo ručnej administratívy.'
    }
  },
  {
    '@type': 'Question',
    name: 'Potrebujem presne vedieť, čo chcem?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Nie. Stačí popísať váš problém alebo cieľ a navrhnem vhodný postup.'
    }
  },
  {
    '@type': 'Question',
    name: 'Viete riešenie napojiť na existujúce nástroje?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Ak to technicky dáva zmysel, riešenia viem navrhovať s ohľadom na existujúce procesy a nástroje.'
    }
  },
  {
    '@type': 'Question',
    name: 'Robíte aj weby a aplikácie mimo AI?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Áno. Okrem AI riešení realizujem aj weby, e-commerce, dashboardy a vlastné digitálne nástroje.'
    }
  }
]

useHead({
  title: 'Appinara | AI automatizácie, lead follow-up a digitálne riešenia',
  meta: [
    {
      name: 'description',
      content:
        'AI automatizácie a digitálne riešenia pre firmy na Slovensku: lead follow-up, chatboty, weby a interné nástroje. Praktické výsledky namiesto hype.'
    },
    {
      property: 'og:title',
      content: 'Appinara | AI automatizácie a digitálne riešenia'
    },
    {
      property: 'og:description',
      content:
        'Šetrite čas, získajte viac dopytov a dajte poriadok v komunikácii — AI audit, automatizácie a vývoj na mieru.'
    },
    { property: 'og:url', content: 'https://appinara.sk/' }
  ],
  link: [{ rel: 'canonical', href: 'https://appinara.sk/' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Appinara',
        url: 'https://appinara.sk',
        logo: 'https://appinara.sk/logo.svg',
        description:
          'AI automatizácie, lead follow-up, chatboty, weby a interné nástroje pre malé a stredné firmy na Slovensku.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SK'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: ['Slovak', 'Czech', 'English']
        },
        sameAs: ['https://www.linkedin.com/company/appinara/'],
        offers: {
          '@type': 'Offer',
          itemOffered: [
            {
              '@type': 'Service',
              name: 'AI lead follow-up',
              description: 'Automatizované spracovanie dopytov, kvalifikácia leadov a rýchlejšie prvé odpovede.'
            },
            {
              '@type': 'Service',
              name: 'AI chatbot a zákaznícka komunikácia',
              description: 'Chatboty a asistenčné riešenia pre web, FAQ a predkvalifikáciu zákazníkov.'
            },
            {
              '@type': 'Service',
              name: 'Weby, aplikácie a interné nástroje',
              description: 'Prezentačné weby, e-commerce, dashboardy a business systémy na mieru.'
            }
          ]
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities
      })
    }
  ]
})
</script>
