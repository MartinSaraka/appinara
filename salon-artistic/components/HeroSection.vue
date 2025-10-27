<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-cream-50 to-white">
    <!-- Artistic Background Elements -->
    <ArtisticShapes />
    
    <!-- Large Paint Splashes -->
    <div class="blob w-[500px] h-[500px] bg-art-coral top-0 -right-32 opacity-15 animate-float" style="animation-delay: 0s;"></div>
    <div class="blob w-[400px] h-[400px] bg-art-turquoise bottom-0 -left-32 opacity-15 animate-float" style="animation-delay: 1.5s;"></div>
    <div class="blob w-[350px] h-[350px] bg-art-lavender top-1/3 left-1/4 opacity-10 animate-float" style="animation-delay: 0.7s;"></div>

    <!-- Content - Magazine Style Layout -->
    <div class="relative z-10 container mx-auto px-4 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Side - Text Content -->
        <div class="lg:col-span-6 animate-fade-in">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6">
            <Icon name="ph:star-fill" class="text-art-coral" />
            <span class="text-sm font-medium text-gray-700">Top kaderníctvo v Bratislave</span>
          </div>

          <!-- Main Title - Cleaner -->
          <div class="mb-8">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-artistic font-black leading-tight text-gray-800 mb-4">
              Kde je každý strih
              <span class="block text-gradient mt-2">umeleckým dielom</span>
            </h1>
          </div>

          <!-- Description - Clearer, Shorter -->
          <div class="mb-10 max-w-2xl">
            <p class="text-xl md:text-2xl text-gray-600 font-modern leading-relaxed">
              Profesionálne kaderníctvo s umeleckým prístupom. 
              <span class="text-gray-800 font-semibold">Tvoríme jedinečné strihy a farebné diela</span> pre vašu osobnosť.
            </p>
          </div>

          <!-- CTA Buttons - Clear Hierarchy -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <!-- Primary CTA -->
            <NuxtLink 
              to="/rezervacia" 
              class="group flex items-center justify-center space-x-3 px-8 py-5 bg-gradient-sunset text-white font-artistic font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Icon name="ph:calendar-check-fill" class="text-2xl group-hover:rotate-12 transition-transform" />
              <span>Rezervovať termín</span>
              <Icon name="ph:arrow-right" class="text-xl group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            
            <!-- Secondary CTA -->
            <a 
              href="#sluzby" 
              class="flex items-center justify-center space-x-2 px-8 py-5 bg-white border-2 border-art-coral text-art-coral font-modern font-semibold text-lg rounded-full hover:bg-art-coral hover:text-white transition-all duration-300"
            >
              <span>Pozrieť služby</span>
              <Icon name="ph:arrow-down" class="text-lg" />
            </a>
          </div>

          <!-- Trust Badges - More Compact -->
          <div class="flex flex-wrap gap-3">
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-700">
              <Icon name="ph:star-fill" class="text-art-coral" />
              <span>500+ klientov</span>
            </div>
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-700">
              <Icon name="ph:trophy-fill" class="text-art-mint" />
              <span>Ocenený salón</span>
            </div>
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-700">
              <Icon name="ph:heart-fill" class="text-art-lavender" />
              <span>100% spokojnosť</span>
            </div>
          </div>
        </div>

        <!-- Right Side - Magazine Style Images -->
        <div class="lg:col-span-6 relative">
          <!-- Magazine Grid -->
          <div class="relative h-[500px] lg:h-[600px]">
            <!-- Image 1 - Large -->
            <div class="absolute top-0 left-0 right-12 h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop" 
                alt="Kaderníctvo"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-art-coral/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white font-artistic text-2xl">Profesionálne strihy</p>
              </div>
            </div>

            <!-- Image 2 - Medium -->
            <div class="absolute top-8 right-0 w-48 h-64 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=400&fit=crop" 
                alt="Farbenie vlasov"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-art-turquoise/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p class="text-white font-artistic text-lg">Farebné umenie</p>
              </div>
            </div>

            <!-- Image 3 - Small -->
            <div class="absolute bottom-16 left-0 w-44 h-52 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=400&fit=crop" 
                alt="Styling"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-art-lavender/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p class="text-white font-artistic text-lg">Kreatívny styling</p>
              </div>
            </div>

            <!-- Card 4 - Info Card -->
            <div class="absolute bottom-0 left-16 right-0 h-48 card-colorful-pink hover:scale-105 transition-transform">
              <div class="flex items-center justify-between h-full">
                <div>
                  <h3 class="text-2xl font-artistic font-bold text-art-pink mb-3">
                    Online rezervácia 24/7
                  </h3>
                  <p class="text-gray-600 font-modern">
                    Rezervujte si termín kedykoľvek
                  </p>
                </div>
                <div class="icon-wrapper bg-gradient-bloom">
                  <Icon name="ph:calendar-check-fill" class="text-4xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator with Hand-drawn Arrow -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
      <svg class="w-16 h-16 mb-2" viewBox="0 0 100 100">
        <path d="M50,20 Q50,50 50,70" stroke="#FF6B6B" stroke-width="4" fill="none" stroke-linecap="round" />
        <path d="M35,60 L50,75 L65,60" stroke="#FF6B6B" stroke-width="4" fill="none" stroke-linecap="round" />
      </svg>
      <a href="#sluzby" class="text-sm font-handwritten text-art-coral hover:text-art-pink transition-colors text-xl">
        Objavte viac
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
