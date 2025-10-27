<template>
  <section id="sluzby" class="section-container bg-white watercolor-bg relative">
    <!-- Diagonal Background Divider -->
    <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-cream-100 to-transparent transform -skew-y-2"></div>
    
    <!-- Artistic Shapes -->
    <ArtisticShapes />

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header - Clearer -->
      <div class="max-w-5xl mx-auto mb-16 text-center">
        <div class="inline-block mb-3">
          <span class="text-sm font-modern font-semibold text-art-coral uppercase tracking-wider">Naše služby</span>
        </div>
        <h2 class="text-5xl md:text-6xl font-artistic font-bold text-gray-800 mb-6">
          Čo pre vás vytvoríme
        </h2>
        <p class="text-xl text-gray-600 font-modern leading-relaxed max-w-2xl mx-auto">
          Profesionálne služby prispôsobené vašim potrebám a predstavám
        </p>
      </div>

      <!-- Bento Box / Masonry Grid Layout -->
      <div class="max-w-7xl mx-auto mb-20">
        <!-- Grid s rôznymi veľkosťami -->
        <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto">
          <!-- Service 1 - Large Horizontal with Image -->
          <div class="md:col-span-6 lg:col-span-8 h-auto hover-bounce overflow-hidden rounded-3xl shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop" 
              alt="Artistický strih"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-art-coral/95 to-art-coral/70"></div>
            <div class="relative z-10 p-8 flex flex-col md:flex-row gap-6 h-full">
              <div class="flex-shrink-0">
                <div class="icon-wrapper bg-white/20 backdrop-blur-sm w-24 h-24">
                  <Icon name="ph:scissors-fill" class="text-5xl text-white" />
                </div>
              </div>
              <div class="flex-1 text-white">
                <h3 class="text-4xl font-artistic font-bold mb-4">
                  Artistický strih
                </h3>
                <p class="mb-4 leading-relaxed text-lg opacity-95">
                  Jedinečný strih navrhnutý špeciálne pre vás
                </p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center">
                    <Icon name="ph:check-circle-fill" class="mr-2 text-xl" />
                    <span>Osobná konzultácia</span>
                  </li>
                  <li class="flex items-center">
                    <Icon name="ph:check-circle-fill" class="mr-2 text-xl" />
                    <span>Tvarový dizajn</span>
                  </li>
                </ul>
                <div class="flex items-center justify-between">
                  <div class="text-4xl font-artistic font-bold">45€</div>
                  <div class="font-modern">90 min</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2 - Tall with Image -->
          <div class="md:col-span-3 lg:col-span-4 md:row-span-2 h-auto hover-bounce overflow-hidden rounded-3xl shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=800&fit=crop" 
              alt="Umelecké farbenie"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-art-peach/95 via-art-peach/80 to-transparent"></div>
            <div class="relative z-10 h-full flex flex-col p-8 text-white">
              <div class="icon-wrapper bg-white/20 backdrop-blur-sm w-20 h-20 mx-auto mb-6">
                <Icon name="ph:palette-fill" class="text-4xl" />
              </div>
              <h3 class="text-3xl font-artistic font-bold mb-4 text-center">
                Umelecké farbenie
              </h3>
              <p class="mb-6 text-center leading-relaxed flex-grow opacity-95">
                Farebná paleta ladená na vašu osobnosť
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-sm">
                  <Icon name="ph:check-circle-fill" class="mr-2 text-lg" />
                  <span>Farebná konzultácia</span>
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="ph:check-circle-fill" class="mr-2 text-lg" />
                  <span>Prémiové farby</span>
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="ph:check-circle-fill" class="mr-2 text-lg" />
                  <span>Kreativné techniky</span>
                </li>
              </ul>
              <div class="mt-auto pt-6 border-t-2 border-white/30">
                <div class="flex items-center justify-between">
                  <div class="text-4xl font-artistic font-bold">85€</div>
                  <div class="font-modern">180 min</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 3 - Square -->
          <div class="md:col-span-3 lg:col-span-4 card-colorful-mint h-auto hover-bounce">
            <div class="text-center">
              <div class="icon-wrapper bg-gradient-to-br from-art-mint to-art-turquoise w-20 h-20 mx-auto mb-4">
                <Icon name="ph:sparkle-fill" class="text-4xl text-white" />
              </div>
              <h3 class="text-2xl font-artistic font-bold text-art-mint mb-3">
                Balayage & Ombré
              </h3>
              <p class="text-gray-600 font-modern mb-4 text-sm">
                Prírodné prechody farieb
              </p>
              <div class="text-3xl font-artistic font-bold text-art-mint mb-1">95€</div>
              <div class="text-gray-600 font-modern text-sm">150 min</div>
            </div>
          </div>

          <!-- Service 4 - Wide -->
          <div class="md:col-span-6 lg:col-span-8 card-colorful-turquoise h-auto hover-bounce">
            <div class="flex flex-col sm:flex-row items-center gap-6">
              <div class="icon-wrapper bg-gradient-ocean w-24 h-24 flex-shrink-0">
                <Icon name="ph:magic-wand-fill" class="text-5xl text-white" />
              </div>
              <div class="flex-1 text-center sm:text-left">
                <h3 class="text-3xl font-artistic font-bold text-art-turquoise mb-3">
                  Keratínová regenerácia
                </h3>
                <p class="text-gray-600 font-modern mb-4">
                  Intenzívna starostlivosť o vaše vlasy • Hĺbková regenerácia • Hydratácia
                </p>
              </div>
              <div class="text-right flex-shrink-0">
                <div class="text-4xl font-artistic font-bold text-art-turquoise">75€</div>
                <div class="text-gray-600 font-modern">120 min</div>
              </div>
            </div>
          </div>

          <!-- Service 5 - Medium -->
          <div class="md:col-span-3 lg:col-span-4 card-colorful-lavender h-auto hover-bounce">
            <div class="icon-wrapper bg-gradient-bloom w-20 h-20 mx-auto mb-4">
              <Icon name="ph:crown-fill" class="text-4xl text-white" />
            </div>
            <h3 class="text-2xl font-artistic font-bold text-art-lavender mb-3 text-center">
              Svadobné účesy
            </h3>
            <p class="text-gray-600 font-modern text-center mb-4 text-sm">
              Romantické účesy pre váš výnimočný deň
            </p>
            <div class="flex items-center justify-between pt-4 border-t-2 border-art-lavender/20">
              <div class="text-3xl font-artistic font-bold text-art-lavender">120€</div>
              <div class="text-gray-600 font-modern">180 min</div>
            </div>
          </div>

          <!-- Service 6 - Large Feature -->
          <div class="md:col-span-6 lg:col-span-8 card-colorful-pink h-auto hover-bounce relative overflow-hidden">
            <!-- Decorative Background -->
            <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-bloom opacity-10 rounded-full blur-3xl"></div>
            
            <div class="relative z-10">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="flex-1">
                  <div class="inline-block mb-4">
                    <span class="badge-colorful bg-art-pink text-sm">⭐ Najpopulárnejší</span>
                  </div>
                  <h3 class="text-4xl md:text-5xl font-artistic font-bold text-art-pink mb-4">
                    VIP Balíček
                  </h3>
                  <p class="text-gray-600 font-modern text-lg mb-6 leading-relaxed">
                    Kompletná premena s luxusným zážitkom. Všetky služby, súkromný salón, občerstvenie a darčeky.
                  </p>
                  <div class="flex flex-wrap gap-3 mb-6">
                    <div class="badge-colorful bg-art-coral text-sm">Všetky služby</div>
                    <div class="badge-colorful bg-art-turquoise text-sm">Súkromný priestor</div>
                    <div class="badge-colorful bg-art-lavender text-sm">Darčeky</div>
                  </div>
                </div>
                <div class="flex-shrink-0 text-center">
                  <div class="icon-wrapper bg-gradient-bloom w-32 h-32 mx-auto mb-4">
                    <Icon name="ph:gift-fill" class="text-6xl text-white" />
                  </div>
                  <div class="text-5xl font-artistic font-bold text-art-pink mb-2">250€</div>
                  <div class="text-gray-600 font-modern text-lg">300 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Special Offers - Creative Layout -->
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <div class="handwritten text-4xl text-art-turquoise mb-2">Darčeky pre vás</div>
          <h3 class="text-5xl font-artistic font-bold text-gradient">
            Špeciálne ponuky
          </h3>
          <div class="divider-artistic"></div>
        </div>

        <!-- Asymmetric Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(special, index) in specialOffers" :key="index"
               class="glass-card-light hover-bounce shadow-colorful-hover cursor-pointer group"
               :class="index === 0 ? 'lg:col-span-2' : ''">
            <div class="flex flex-col items-center text-center">
              <div class="icon-wrapper mb-4 group-hover:scale-110 transition-transform"
                   :style="`background: ${special.gradient}`">
                <Icon :name="special.icon" class="text-4xl text-white" />
              </div>
              <h4 class="font-artistic font-bold text-2xl mb-3" :class="`text-art-${special.colorClass}`">
                {{ special.title }}
              </h4>
              <p class="text-gray-600 font-modern mb-4 leading-relaxed">
                {{ special.description }}
              </p>
              <div :class="`text-3xl font-artistic font-bold text-art-${special.colorClass}`">
                {{ special.price }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-20">
        <div class="inline-block relative">
          <!-- Decorative arrows -->
          <svg class="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 opacity-40 hidden lg:block" viewBox="0 0 100 100">
            <path d="M80,50 L20,50 M35,35 L20,50 L35,65" stroke="#FF6B6B" stroke-width="4" fill="none" stroke-linecap="round" />
          </svg>
          <svg class="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-16 opacity-40 hidden lg:block" viewBox="0 0 100 100">
            <path d="M20,50 L80,50 M65,35 L80,50 L65,65" stroke="#FF6B6B" stroke-width="4" fill="none" stroke-linecap="round" />
          </svg>
          
          <p class="text-3xl text-gray-700 font-artistic mb-8">
            Pripravení na <span class="text-gradient handwritten text-4xl">premenu</span>?
          </p>
          <NuxtLink to="/rezervacia" class="btn-artistic text-xl">
            <span>🎨 Rezervovať teraz</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Diagonal Bottom Divider -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-tl from-cream-50 to-transparent transform skew-y-2"></div>
  </section>
</template>

<script setup lang="ts">
const specialOffers = [
  {
    icon: 'ph:users-three-fill',
    title: 'Duo balíček',
    description: 'Príďte s kamarátkou a získajte 20% zľavu na obe služby',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)',
    colorClass: 'coral',
    price: '-20%'
  },
  {
    icon: 'ph:star-fill',
    title: 'Prvá návšteva',
    description: 'Pre nových klientov špeciálna zľava',
    gradient: 'linear-gradient(135deg, #6BCB77, #4ECDC4)',
    colorClass: 'mint',
    price: '-15%'
  },
  {
    icon: 'ph:confetti-fill',
    title: 'Narodeniny',
    description: 'Osláv narodeniny s darčekom od nás',
    gradient: 'linear-gradient(135deg, #A78BFA, #9D4EDD)',
    colorClass: 'lavender',
    price: 'Darček'
  },
  {
    icon: 'ph:student-fill',
    title: 'Študent',
    description: 'Špeciálne ceny pre študentov',
    gradient: 'linear-gradient(135deg, #FF6FB5, #C77DFF)',
    colorClass: 'pink',
    price: '-10%'
  }
]
</script>
