<template>
  <div class="relative overflow-hidden">
    <Navigation />

    <main id="main-content">
      <HeroSection />
      <PortfolioSection />
      <CollaborationStepsSection />
      <FaqSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const siteUrl = computed(() =>
  String(config.public.siteUrl || 'https://appinara.sk').replace(/\/$/, '')
)

const sameAs = computed(() => {
  const li = String(config.public.linkedinUrl || '').trim()
  return li ? [li] : []
})

const organizationJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Appinara',
    url: siteUrl.value,
    logo: `${siteUrl.value}/logo.svg`,
    description:
      'Digitálne riešenia pre firmy: AI, weby a vlastné nástroje. Jasne, na mieru, s ľudskou komunikáciou.',
    address: { '@type': 'PostalAddress', addressCountry: 'SK' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Slovak', 'Czech', 'English']
    },
    sameAs: sameAs.value,
    offers: {
      '@type': 'Offer',
      itemOffered: [
        { '@type': 'Service', name: 'AI Integrácie', description: 'AI chatboty, automatizácia a inteligentné riešenia prispôsobené vášmu biznisu' },
        { '@type': 'Service', name: 'Webové Stránky', description: 'Rýchle, moderné weby postavené na overených technológiách' },
        { '@type': 'Service', name: 'Vlastné Aplikácie', description: 'Webové a interné aplikácie presne podľa vašich procesov' }
      ]
    }
  })
)

useHead(() => ({
  script: [{ type: 'application/ld+json', children: organizationJsonLd.value }]
}))
</script>
