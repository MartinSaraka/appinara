<template>
  <div>
    <Navigation />
    
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-cream-50 via-white to-cream-100 overflow-hidden">
      <div class="absolute inset-0 pattern-dots opacity-30"></div>
      <div class="blob w-96 h-96 bg-art-pink top-10 -right-20"></div>
      <div class="blob w-80 h-80 bg-art-lavender top-20 -left-20"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="handwritten text-art-coral mb-4">Začnite svoju premenu</div>
        <h1 class="text-5xl md:text-7xl font-artistic font-black text-gradient mb-6 animate-fade-in">
          Rezervácia
        </h1>
        <div class="divider-artistic"></div>
        <p class="text-xl md:text-2xl text-gray-600 font-modern max-w-3xl mx-auto animate-fade-in mt-6">
          Zarezervujte si svoj umelecký zážitok
        </p>
      </div>
    </section>

    <BookingSection />
    
    <!-- FAQ Section -->
    <section class="section-container bg-white pattern-stripes">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="handwritten text-art-mint mb-4">Časté otázky</div>
          <h2 class="text-4xl md:text-5xl font-artistic font-bold text-gradient mb-4">
            FAQ
          </h2>
          <div class="divider-artistic"></div>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="glass-card-light cursor-pointer hover:shadow-colorful transition-all"
            @click="toggleFaq(index)"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-artistic font-bold text-xl text-gray-800 pr-4">
                {{ faq.question }}
              </h3>
              <Icon
                name="ph:caret-down"
                :class="['text-3xl text-art-coral transition-transform flex-shrink-0', openFaq === index ? 'rotate-180' : '']"
              />
            </div>
            <Transition name="expand">
              <p v-if="openFaq === index" class="mt-4 text-gray-600 font-modern leading-relaxed text-lg">
                {{ faq.answer }}
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Rezervácia - ArtHair Studio',
  meta: [
    { name: 'description', content: 'Zarezervujte si termín v ArtHair Studio. Online rezervácie dostupné 24/7. Rýchle potvrdenie do 2 hodín.' }
  ]
})

const openFaq = ref<number | null>(null)

const faqs = [
  {
    question: 'Ako dlho vopred si mám rezervovať termín?',
    answer: 'Odporúčame rezervovať si termín aspoň 3-7 dní vopred, najmä na víkendy a večerné hodiny. Pre špeciálne služby ako VIP Experience odporúčame rezerváciu 2 týždne vopred.'
  },
  {
    question: 'Môžem zrušiť alebo presunúť rezerváciu?',
    answer: 'Áno, rezerváciu môžete zrušiť alebo presunúť najneskôr 24 hodín pred plánovaným termínom. Kontaktujte nás telefonicky alebo emailom.'
  },
  {
    question: 'Koľko času potrebujem vyhradiť na návštevu?',
    answer: 'Čas sa líši podľa zvolenej služby - od 90 minút pre základný strih až po 5 hodín pre VIP Total Experience. Pri rezervácii vám presný čas potvrdíme.'
  },
  {
    question: 'Aké platobné metódy prijímate?',
    answer: 'Prijímame hotovosť, platobné karty (Visa, Mastercard), a online platby. Platba sa uskutočňuje po dokončení služby.'
  },
  {
    question: 'Ponúkate konzultáciu pred službou?',
    answer: 'Áno, každá služba začína osobnou konzultáciou, kde prediskutujeme vaše predstavy a navrhneme najlepšie riešenie pre váš typ vlasov.'
  }
]

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>

