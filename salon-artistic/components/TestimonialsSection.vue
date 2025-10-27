<template>
  <section class="section-container bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 pattern-dots opacity-30"></div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-sm font-modern font-semibold text-art-mint uppercase tracking-wider">Recenzie</span>
        <h2 class="text-5xl md:text-6xl font-artistic font-bold text-gray-800 mt-3 mb-6">
          Čo hovoria naši klienti
        </h2>
        <p class="text-xl text-gray-600 font-modern max-w-2xl mx-auto">
          Reálne skúsenosti od spokojných zákazníkov
        </p>
      </div>

      <!-- Testimonials Masonry Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :class="[
            'glass-card-light p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl',
            index % 3 === 0 ? 'lg:row-span-2' : ''
          ]"
        >
          <!-- Rating Stars -->
          <div class="flex items-center space-x-1 mb-4">
            <Icon 
              v-for="star in 5" 
              :key="star" 
              name="ph:star-fill" 
              :class="star <= testimonial.rating ? 'text-art-yellow' : 'text-gray-300'"
              class="text-xl"
            />
          </div>

          <!-- Quote -->
          <p class="text-gray-700 font-modern leading-relaxed mb-6 text-lg italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center space-x-4">
            <div 
              class="w-14 h-14 rounded-full flex items-center justify-center font-artistic font-bold text-white text-xl"
              :style="`background: ${testimonial.gradient}`"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-artistic font-bold text-gray-800 text-lg">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-gray-500 font-modern">
                {{ testimonial.service }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overall Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="text-center p-6 bg-gradient-sunset rounded-2xl text-white shadow-xl">
          <div class="text-4xl font-artistic font-bold mb-2">500+</div>
          <div class="text-sm font-modern opacity-90">Spokojných klientov</div>
        </div>
        <div class="text-center p-6 bg-gradient-ocean rounded-2xl text-white shadow-xl">
          <div class="text-4xl font-artistic font-bold mb-2">4.9</div>
          <div class="text-sm font-modern opacity-90">Priemerné hodnotenie</div>
        </div>
        <div class="text-center p-6 bg-gradient-bloom rounded-2xl text-white shadow-xl">
          <div class="text-4xl font-artistic font-bold mb-2">100%</div>
          <div class="text-sm font-modern opacity-90">Spokojnosť</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-art-mint to-art-turquoise rounded-2xl text-white shadow-xl">
          <div class="text-4xl font-artistic font-bold mb-2">5+</div>
          <div class="text-sm font-modern opacity-90">Rokov skúseností</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Lucia K.',
    initials: 'LK',
    rating: 5,
    quote: 'Najlepšie kaderníctvo v Bratislave! Mária mi vytvorila presne to, čo som chcela. Atmosféra je úžasná a výsledok je dokonalý.',
    service: 'Balayage + Strih',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)'
  },
  {
    name: 'Andrea M.',
    initials: 'AM',
    rating: 5,
    quote: 'Konečne salón, kde ma pochopili! Super profesionálny prístup a krásne prostredie.',
    service: 'Artistický strih',
    gradient: 'linear-gradient(135deg, #4ECDC4, #45B7D1)'
  },
  {
    name: 'Zuzana P.',
    initials: 'ZP',
    rating: 5,
    quote: 'Moje vlasy vyzerajú úžasne! Farba je presne taká, akú som chcela. Odporúčam každému, kto hľadá kvalitu.',
    service: 'Umelecké farbenie',
    gradient: 'linear-gradient(135deg, #A78BFA, #9D4EDD)'
  },
  {
    name: 'Martina S.',
    initials: 'MS',
    rating: 5,
    quote: 'Úžasný tím! Cítila som sa ako celebrita. Online rezervácia je super pohodlná.',
    service: 'VIP Balíček',
    gradient: 'linear-gradient(135deg, #FF6FB5, #C77DFF)'
  },
  {
    name: 'Petra V.',
    initials: 'PV',
    rating: 5,
    quote: 'Svadobný účes bol nad moje očakávania. Vydržal celý deň a vyzerala som nádherné. Ďakujem!',
    service: 'Svadobné účesy',
    gradient: 'linear-gradient(135deg, #6BCB77, #4ECDC4)'
  },
  {
    name: 'Simona L.',
    initials: 'SL',
    rating: 5,
    quote: 'Najlepšia investícia do seba! Cítim sa ako nový človek. Určite sa vrátim.',
    service: 'Keratínové ošetrenie',
    gradient: 'linear-gradient(135deg, #FFB347, #FFD93D)'
  }
]
</script>

