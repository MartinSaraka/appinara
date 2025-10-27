<template>
  <section class="section-container bg-gradient-to-br from-white via-cream-50 to-white relative overflow-hidden">
    <!-- Wave Divider -->
    <div class="absolute top-0 left-0 right-0 h-24">
      <svg class="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,30 Q300,80 600,30 T1200,30 L1200,0 L0,0 Z" fill="white" />
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-sm font-modern font-semibold text-art-lavender uppercase tracking-wider">Transformácie</span>
        <h2 class="text-5xl md:text-6xl font-artistic font-bold text-gray-800 mt-3 mb-6">
          Pred & Po
        </h2>
        <p class="text-xl text-gray-600 font-modern max-w-2xl mx-auto">
          Pozrite sa na neuveriteľné premeny našich klientov
        </p>
      </div>

      <!-- Before/After Slider Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div 
          v-for="(item, index) in transformations" 
          :key="index"
          class="group"
        >
          <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
            <!-- Before/After Images -->
            <div class="grid grid-cols-2 gap-1">
              <div class="relative aspect-[3/4] overflow-hidden">
                <img 
                  :src="item.before" 
                  :alt="`Before - ${item.title}`"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-white font-bold rounded-full text-sm">
                  PRED
                </div>
              </div>
              <div class="relative aspect-[3/4] overflow-hidden">
                <img 
                  :src="item.after" 
                  :alt="`After - ${item.title}`"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 px-4 py-2 bg-gradient-sunset text-white font-bold rounded-full text-sm shadow-lg">
                  PO
                </div>
              </div>
            </div>
            
            <!-- Divider Line -->
            <div class="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-xl"></div>
          </div>

          <!-- Description -->
          <div class="text-center">
            <h3 class="text-2xl font-artistic font-bold mb-2" :class="`text-art-${item.colorClass}`">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 font-modern mb-3">
              {{ item.description }}
            </p>
            <div class="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span class="flex items-center space-x-1">
                <Icon name="ph:clock-fill" />
                <span>{{ item.duration }}</span>
              </span>
              <span>•</span>
              <span class="flex items-center space-x-1">
                <Icon name="ph:scissors-fill" />
                <span>{{ item.service }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-600 mb-6 font-modern">
          Chcete podobnú premenu?
        </p>
        <NuxtLink 
          to="/rezervacia"
          class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-sunset text-white font-artistic font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          <span>Začať moju premenu</span>
          <Icon name="ph:arrow-right" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const transformations = [
  {
    title: 'Platinum Transformation',
    description: 'Z tmavej na ľadovú blond - kompletná premena',
    before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=600&fit=crop',
    duration: '4 hodiny',
    service: 'Farbenie + Strih',
    colorClass: 'coral'
  },
  {
    title: 'Dramatic Cut',
    description: 'Z dlhých vlasov na moderný bob',
    before: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=600&fit=crop',
    duration: '2 hodiny',
    service: 'Strih + Styling',
    colorClass: 'lavender'
  }
]
</script>

