<template>
  <section class="section-container bg-gradient-to-br from-cream-50 to-white relative">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-sm font-modern font-semibold text-art-pink uppercase tracking-wider">Ako to funguje</span>
        <h2 class="text-5xl md:text-6xl font-artistic font-bold text-gray-800 mt-3 mb-6">
          Váš zážitok v 4 krokoch
        </h2>
        <p class="text-xl text-gray-600 font-modern max-w-2xl mx-auto">
          Od rezervácie po dokonalý výsledok
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-5xl mx-auto relative">
        <!-- Connecting Line -->
        <div class="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-sunset opacity-20"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative"
          >
            <!-- Step Card -->
            <div class="text-center">
              <!-- Step Number with Icon -->
              <div class="relative inline-block mb-6">
                <div 
                  class="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10 group-hover:scale-110 transition-transform"
                  :style="`background: ${step.gradient}`"
                >
                  <Icon :name="step.icon" class="text-4xl text-white" />
                </div>
                <!-- Step Number Badge -->
                <div class="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-artistic font-bold text-gray-800 shadow-lg border-4 border-white">
                  {{ index + 1 }}
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-artistic font-bold text-gray-800 mb-3">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 font-modern leading-relaxed">
                {{ step.description }}
              </p>

              <!-- Optional Badge -->
              <div v-if="step.badge" class="mt-4">
                <span class="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md" :class="`text-art-${step.colorClass}`">
                  {{ step.badge }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink 
          to="/rezervacia"
          class="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-sunset text-white font-artistic font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
        >
          <Icon name="ph:calendar-check-fill" class="text-2xl" />
          <span>Začať teraz</span>
          <Icon name="ph:arrow-right" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: 'ph:calendar-check-fill',
    title: 'Rezervácia',
    description: 'Online rezervácia 24/7. Vyberte si službu, dátum a čas podľa vašich preferencií.',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)',
    colorClass: 'coral',
    badge: '2 min'
  },
  {
    icon: 'ph:chat-circle-dots-fill',
    title: 'Konzultácia',
    description: 'Prediskutujeme vaše predstavy a navrhneme najlepšie riešenie pre váš typ vlasov.',
    gradient: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
    colorClass: 'turquoise',
    badge: '15 min'
  },
  {
    icon: 'ph:sparkle-fill',
    title: 'Premena',
    description: 'Náš tím vytvorí vaše vysnívanú premenu s použitím prémiových produktov.',
    gradient: 'linear-gradient(135deg, #A78BFA, #9D4EDD)',
    colorClass: 'lavender',
    badge: '1-4 hod'
  },
  {
    icon: 'ph:heart-fill',
    title: 'Výsledok',
    description: 'Odchádzate s úžasným vzhľadom a tipmi na domácu starostlivosť.',
    gradient: 'linear-gradient(135deg, #FF6FB5, #C77DFF)',
    colorClass: 'pink',
    badge: '100% spokojnosť'
  }
]
</script>

