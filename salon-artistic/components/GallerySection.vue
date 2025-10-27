<template>
  <section id="galeria" class="section-container bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden">
    <!-- Curved Top Divider -->
    <div class="absolute top-0 left-0 right-0 h-24">
      <svg class="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,0 Q300,80 600,40 T1200,0 L1200,100 L0,100 Z" fill="#F9F1E3" opacity="0.5" />
      </svg>
    </div>

    <!-- Artistic Shapes -->
    <ArtisticShapes />

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header - Creative Layout -->
      <div class="mb-20">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <!-- Left - Title -->
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-block relative mb-6">
              <span class="handwritten text-6xl text-art-turquoise">Portfolio</span>
              <!-- Hand-drawn circle -->
              <svg class="absolute -top-4 -right-4 w-24 h-24 opacity-30 animate-spin" style="animation-duration: 30s;" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#4ECDC4" stroke-width="2" stroke-dasharray="8,8" />
              </svg>
            </div>
            <h2 class="text-6xl md:text-7xl font-artistic font-bold text-gradient mb-6">
              Galéria
            </h2>
            <p class="text-xl text-gray-600 font-modern leading-relaxed max-w-xl">
              Každá hlava je <span class="highlight-marker font-semibold">plátno</span>, 
              každý strih je naše <span class="highlight-marker font-semibold">umelecké dielo</span>
            </p>
          </div>

          <!-- Right - Stats Cards -->
          <div class="flex gap-4">
            <div class="card-colorful-pink w-32 h-32 flex flex-col items-center justify-center hover-bounce">
              <div class="text-4xl font-artistic font-bold text-art-pink">500+</div>
              <div class="text-sm text-gray-600 font-modern text-center">Krásnych prác</div>
            </div>
            <div class="card-colorful-lavender w-32 h-32 flex flex-col items-center justify-center hover-bounce">
              <div class="text-4xl font-artistic font-bold text-art-lavender">★★★★★</div>
              <div class="text-sm text-gray-600 font-modern text-center">Hodnotenie</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Category Filter - Better UX -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-3 rounded-full font-modern font-semibold transition-all duration-300 flex items-center space-x-2',
            selectedCategory === category
              ? 'bg-gradient-sunset text-white shadow-xl scale-105'
              : 'bg-white text-gray-700 hover:bg-cream-50 shadow-md hover:shadow-lg'
          ]"
        >
          <Icon 
            :name="getCategoryIcon(category)" 
            class="text-lg"
          />
          <span>{{ category }}</span>
          <span 
            v-if="selectedCategory === category"
            class="ml-2 px-2 py-0.5 bg-white/30 rounded-full text-xs font-bold"
          >
            {{ filteredGallery.length }}
          </span>
        </button>
      </div>

      <!-- Masonry Grid Layout -->
      <div class="mb-16">
        <!-- CSS Grid Masonry Effect -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in filteredGallery"
            :key="index"
            class="group relative overflow-hidden rounded-3xl glass-card-light p-0 animate-scale-in cursor-pointer hover:-translate-y-3 shadow-colorful-hover transition-all duration-500"
            :style="`animation-delay: ${index * 0.05}s; ${index % 3 === 0 ? 'grid-row: span 2;' : ''}`"
            @click="openLightbox(item)"
          >
            <!-- Real Image with Overlay -->
            <div 
              :class="['relative overflow-hidden rounded-3xl', index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square']"
            >
              <!-- Real Hair Salon Image -->
              <img 
                :src="item.image" 
                :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <!-- Content Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span :class="[
                    'inline-block badge-colorful text-sm mb-3',
                    `bg-art-${item.colorClass}`
                  ]">
                    {{ item.category }}
                  </span>
                  <h3 class="text-3xl md:text-4xl font-artistic font-bold mb-3 text-white">
                    {{ item.title }}
                  </h3>
                  <p class="text-white/90 font-modern leading-relaxed text-lg mb-4">
                    {{ item.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <Icon name="ph:heart-fill" class="text-2xl text-white" />
                    <Icon name="ph:magnifying-glass-plus" class="text-3xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Instagram CTA - Creative Card -->
      <div class="max-w-5xl mx-auto">
        <div class="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-bloom shadow-3xl">
          <!-- Decorative elements -->
          <div class="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 text-center text-white">
            <div class="inline-block mb-8">
              <Icon name="ph:instagram-logo-fill" class="text-8xl animate-pulse-color" />
            </div>
            <h3 class="text-5xl md:text-6xl font-artistic font-bold mb-6">
              Sledujte nás na Instagrame
            </h3>
            <div class="w-32 h-1 bg-white/50 rounded-full mx-auto mb-8"></div>
            <p class="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto font-modern">
              Denne zdieľame naše najnovšie umelecké diela, inšpirácie a transformácie. 
              <span class="font-handwritten text-3xl">Pridajte sa k nám!</span>
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank"
              class="inline-flex items-center space-x-3 px-12 py-6 bg-white text-art-purple font-artistic font-bold text-2xl rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <Icon name="ph:instagram-logo" class="text-3xl" />
              <span>@arthair.studio</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Curved Bottom Divider -->
    <div class="absolute bottom-0 left-0 right-0 h-24">
      <svg class="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,100 Q300,20 600,60 T1200,100 L1200,0 L0,0 Z" fill="#F9F1E3" opacity="0.5" />
      </svg>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="lightboxItem"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-2xl p-4"
          @click="closeLightbox"
        >
          <div class="relative max-w-5xl w-full glass-card-light shadow-3xl" @click.stop>
            <!-- Close Button -->
            <button
              @click="closeLightbox"
              class="absolute -top-6 -right-6 w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-2xl"
            >
              <Icon name="ph:x" class="text-3xl text-white" />
            </button>

            <!-- Image -->
            <div 
              class="aspect-video rounded-2xl mb-8 relative overflow-hidden"
            >
              <img 
                :src="lightboxItem.image" 
                :alt="lightboxItem.title"
                class="w-full h-full object-cover"
              />
              <!-- Decorative corners -->
              <div class="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/50 rounded-tl-2xl"></div>
              <div class="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-white/50 rounded-br-2xl"></div>
            </div>

            <!-- Content -->
            <div class="text-center">
              <span :class="[
                'inline-block badge-colorful text-lg mb-6',
                `bg-art-${lightboxItem.colorClass}`
              ]">
                {{ lightboxItem.category }}
              </span>
              <h3 class="text-5xl font-artistic font-bold mb-6" :class="`text-art-${lightboxItem.colorClass}`">
                {{ lightboxItem.title }}
              </h3>
              <div class="w-32 h-1 rounded-full mx-auto mb-6"
                   :style="`background: linear-gradient(90deg, var(--art-${lightboxItem.colorClass}), transparent)`"></div>
              <p class="text-gray-700 font-modern text-2xl leading-relaxed max-w-3xl mx-auto">
                {{ lightboxItem.description }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref('Všetko')
const lightboxItem = ref<any>(null)

const categories = ['Všetko', 'Farebné', 'Strihy', 'Styling', 'Špeciálne']

const gallery = [
  {
    title: 'Sunset Balayage',
    description: 'Teplé slnečné tóny s plynulými prechodmi',
    category: 'Farebné',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop',
    colorClass: 'coral'
  },
  {
    title: 'Modern Bob',
    description: 'Klasický bob s moderným twist',
    category: 'Strihy',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    colorClass: 'turquoise'
  },
  {
    title: 'Rainbow Dreams',
    description: 'Dúhové farby pre odvážne osobnosti',
    category: 'Farebné',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop',
    colorClass: 'pink'
  },
  {
    title: 'Pixie Perfection',
    description: 'Krátky strih plný osobnosti',
    category: 'Strihy',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop',
    colorClass: 'lavender'
  },
  {
    title: 'Peach & Rose',
    description: 'Jemné pastelové odtiene',
    category: 'Farebné',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop',
    colorClass: 'peach'
  },
  {
    title: 'Boho Waves',
    description: 'Romantické vlny pre každú príležitosť',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop',
    colorClass: 'mint'
  },
  {
    title: 'Platinum Blonde',
    description: 'Ľadová blond pre moderné ženy',
    category: 'Farebné',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop',
    colorClass: 'coral'
  },
  {
    title: 'Textured Layers',
    description: 'Vrstvený strih s pohybom',
    category: 'Strihy',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    colorClass: 'pink'
  },
  {
    title: 'Elegant Updo',
    description: 'Sofistikovaný účes pre špeciálne príležitosti',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=600&fit=crop',
    colorClass: 'lavender'
  }
]

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'Všetko') {
    return gallery
  }
  return gallery.filter(item => item.category === selectedCategory.value)
})

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    'Všetko': 'ph:squares-four',
    'Farebné': 'ph:palette',
    'Strihy': 'ph:scissors',
    'Styling': 'ph:sparkle',
    'Špeciálne': 'ph:star'
  }
  return icons[category] || 'ph:circle'
}

const openLightbox = (item: any) => {
  lightboxItem.value = item
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxItem.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
