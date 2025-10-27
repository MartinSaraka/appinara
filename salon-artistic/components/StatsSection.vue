<template>
  <section class="section-container bg-gray-900 text-white relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="blob w-96 h-96 bg-art-coral top-0 right-0 animate-float"></div>
      <div class="blob w-80 h-80 bg-art-turquoise bottom-0 left-0 animate-float" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center group"
        >
          <!-- Icon -->
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-sunset mb-6 group-hover:scale-110 transition-transform shadow-2xl">
            <Icon :name="stat.icon" class="text-4xl" />
          </div>

          <!-- Number with Animation -->
          <div class="text-5xl md:text-6xl font-artistic font-black mb-3 text-gradient">
            {{ stat.number }}
          </div>

          <!-- Label -->
          <div class="text-base md:text-lg font-modern text-gray-300">
            {{ stat.label }}
          </div>

          <!-- Optional Sublabel -->
          <div v-if="stat.sublabel" class="text-sm text-gray-500 mt-2 font-modern">
            {{ stat.sublabel }}
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div class="mt-20 text-center max-w-3xl mx-auto">
        <p class="text-2xl md:text-3xl font-artistic italic text-gray-300 mb-6">
          "Každý klient je pre nás umelecké plátno, kde tvoríme majstrovské diela"
        </p>
        <div class="flex items-center justify-center space-x-3">
          <div class="w-12 h-12 rounded-full bg-gradient-bloom"></div>
          <div class="text-left">
            <div class="font-artistic font-bold text-lg">Mária Nováková</div>
            <div class="text-sm text-gray-400 font-modern">Majiteľka & Art Director</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    icon: 'ph:users-three-fill',
    number: '2500+',
    label: 'Spokojných klientov',
    sublabel: 'Za posledný rok'
  },
  {
    icon: 'ph:star-fill',
    number: '4.9',
    label: 'Priemerné hodnotenie',
    sublabel: 'Z 500+ recenzií'
  },
  {
    icon: 'ph:scissors-fill',
    number: '10K+',
    label: 'Úspešných strihov',
    sublabel: 'Od založenia'
  },
  {
    icon: 'ph:trophy-fill',
    number: '15+',
    label: 'Ocenení',
    sublabel: 'V salónovom priemysle'
  }
]
</script>

