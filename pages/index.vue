<template>
  <!-- overflow-x-clip (not overflow-hidden) — hidden would break position: sticky -->
  <div class="relative overflow-x-clip">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main id="main-content">
      <!-- Hero Section -->
      <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Showcase (scrollytelling) Section -->
    <ShowcaseSection />

    <!-- Portfolio — live demos -->
    <PortfolioSection />

    <!-- Manifesto — scroll-scrubbed statement -->
    <ManifestoSection />

    <!-- Why Choose Us Section -->
    <WhyChooseUsSection />
    
    <!-- FAQ Section -->
    <FaqSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [{ property: 'og:url', content: 'https://appinara.sk/' }],
  link: [{ rel: 'canonical', href: 'https://appinara.sk/' }]
})

// SEO Structured Data (JSON-LD)
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
        description: 'Pomáhame firmám rásť pomocou AI integrácií, moderných webov a vlastných aplikácií. Riešenia, ktoré skutočne fungujú a zarábajú.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SK'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: ['Slovak', 'Czech', 'English']
        },
        sameAs: [
          // Pridajte vaše sociálne siete ak máte
          // 'https://www.facebook.com/appinara',
          // 'https://www.linkedin.com/company/appinara'
        ],
        offers: {
          '@type': 'Offer',
          itemOffered: [
            {
              '@type': 'Service',
              name: 'AI Integrácie',
              description: 'Vlastné AI chatboty, automatizácia procesov, intelligentné riešenia pre váš biznis'
            },
            {
              '@type': 'Service',
              name: 'Webové Stránky',
              description: 'Moderné, rýchle webové stránky postavené na najnovších technológiách'
            },
            {
              '@type': 'Service',
              name: 'Vlastné Aplikácie',
              description: 'Mobilné a webové aplikácie presne na mieru vašim potrebám'
            }
          ]
        }
      })
    }
  ]
})
</script>
