<template>
  <div class="relative overflow-hidden" style="background: var(--color-bg); color: var(--color-fg);">
    <Navigation />

    <main id="main-content" class="relative z-10">
      <HeroSection />
      <MarqueeStrip />
      <AudienceSection />
      <ServicesSection />
      <ClientOutcomesSection />
      <CollaborationStepsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Appinara',
        url: 'https://appinara.sk',
        logo: 'https://appinara.sk/logo.svg',
        description: 'Freelance studio Martina Saraku. AI integrácie, weby a interné nástroje pre menšie a stredné firmy na Slovensku.',
        founder: {
          '@type': 'Person',
          name: 'Martin Saraka'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SK'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'appinarasolutions@gmail.com',
          telephone: '+421 917 566 722',
          availableLanguage: ['Slovak', 'Czech', 'English']
        },
        sameAs: [
          'https://www.linkedin.com/company/appinara/'
        ],
        offers: {
          '@type': 'Offer',
          itemOffered: [
            {
              '@type': 'Service',
              name: 'AI integrácie a chatboty',
              description: 'AI chatboty, lead qualifier, automatizácia opakujúcich sa procesov.'
            },
            {
              '@type': 'Service',
              name: 'Weby a landing pages',
              description: 'Editorial weby na Nuxt 3 / Vue 3, rýchle načítanie, SEO basics, CMS na požiadanie.'
            },
            {
              '@type': 'Service',
              name: 'E-shopy',
              description: 'Menšie e-shopy s napojením na Stripe, GoPay a Packetu.'
            },
            {
              '@type': 'Service',
              name: 'Interné nástroje',
              description: 'Dashboardy, mini-CRM, evidencia projektov, reporty zo Stripe / Shoptetu.'
            }
          ]
        }
      })
    }
  ]
})
</script>
