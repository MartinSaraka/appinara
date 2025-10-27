<template>
  <div>
    <QuickInfoBar />
    <Navigation />
    <HeroSection />
    <ProcessSection />
    <ServicesSection />
    <StatsSection />
    <BeforeAfterSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'ArtHair Studio - Futuristické Kaderníctvo & Art',
  meta: [
    { name: 'description', content: 'Futuristické kaderníctvo kde sa stretáva umenie s technikou. Experimentálne farby, artistické strihy, vizuálne zážitky. Rezervujte si termín online.' },
    { property: 'og:title', content: 'ArtHair Studio - Futuristické Kaderníctvo' },
    { property: 'og:description', content: 'Umelecké kaderníctvo s futuristickým dizajnom. Neonové farby, holografické efekty a artistické strihy.' },
    { property: 'og:type', content: 'website' },
    { name: 'keywords', content: 'kaderníctvo, salon, hair, art, futuristické, neonové farby, artistické strihy, bratislava' }
  ]
})
</script>

