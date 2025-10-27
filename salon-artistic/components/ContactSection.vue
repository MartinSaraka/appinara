<template>
  <section id="kontakt" class="section-container bg-gradient-to-br from-cream-50 via-white to-cream-100 pattern-dots relative overflow-hidden">
    <!-- Artistic Shapes -->
    <ArtisticShapes />
    
    <!-- Wave Divider Top -->
    <div class="absolute top-0 left-0 right-0 h-32">
      <svg class="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,50 Q200,10 400,50 T800,50 T1200,50 L1200,0 L0,0 Z" fill="white" />
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-20 animate-fade-in">
        <div class="inline-block relative mb-6">
          <span class="handwritten text-6xl text-art-turquoise">Poďte nás navštíviť</span>
          <!-- Decorative scribble -->
          <svg class="absolute -bottom-4 left-0 right-0 h-6 opacity-40" viewBox="0 0 400 20" preserveAspectRatio="none">
            <path d="M0,10 Q100,5 200,15 T400,10" stroke="#4ECDC4" stroke-width="3" fill="none" stroke-linecap="round" />
          </svg>
        </div>
        <h2 class="section-title">Kontakt</h2>
        <div class="divider-artistic"></div>
        <p class="section-subtitle mt-6">
          Nájdite nás v <span class="highlight-marker font-semibold">srdci mesta</span> 
          alebo nás kontaktujte online
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-6">
          <!-- Address -->
          <div class="card-colorful-coral hover-bounce">
            <div class="flex items-start space-x-6">
              <div class="icon-wrapper bg-gradient-sunset">
                <Icon name="ph:map-pin-fill" class="text-4xl text-white" />
              </div>
              <div>
                <h3 class="font-artistic font-bold text-2xl text-art-coral mb-3">Adresa</h3>
                <p class="text-gray-700 font-modern text-lg leading-relaxed">
                  Umelecká 42<br />
                  811 01 Bratislava<br />
                  Slovensko
                </p>
              </div>
            </div>
          </div>

          <!-- Phone -->
          <div class="card-colorful-turquoise hover-bounce">
            <div class="flex items-start space-x-6">
              <div class="icon-wrapper bg-gradient-ocean">
                <Icon name="ph:phone-fill" class="text-4xl text-white" />
              </div>
              <div>
                <h3 class="font-artistic font-bold text-2xl text-art-turquoise mb-3">Telefón</h3>
                <a href="tel:+421900000000" class="text-gray-700 font-modern text-lg hover:text-art-turquoise transition-colors">
                  +421 900 000 000
                </a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="card-colorful-lavender hover-bounce">
            <div class="flex items-start space-x-6">
              <div class="icon-wrapper bg-gradient-bloom">
                <Icon name="ph:envelope-fill" class="text-4xl text-white" />
              </div>
              <div>
                <h3 class="font-artistic font-bold text-2xl text-art-lavender mb-3">Email</h3>
                <a href="mailto:info@arthair.sk" class="text-gray-700 font-modern text-lg hover:text-art-lavender transition-colors">
                  info@arthair.sk
                </a>
              </div>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="card-colorful-mint">
            <div class="flex items-start space-x-6">
              <div class="icon-wrapper" style="background: linear-gradient(135deg, #6BCB77, #4ECDC4)">
                <Icon name="ph:clock-fill" class="text-4xl text-white" />
              </div>
              <div class="flex-1">
                <h3 class="font-artistic font-bold text-2xl text-art-mint mb-4">Otváracie hodiny</h3>
                <div class="space-y-3 font-modern text-gray-700 text-lg">
                  <div class="flex justify-between items-center">
                    <span class="font-medium">Pondelok - Piatok</span>
                    <span class="text-art-mint font-bold">09:00 - 19:00</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="font-medium">Sobota</span>
                    <span class="text-art-mint font-bold">10:00 - 16:00</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="font-medium">Nedeľa</span>
                    <span class="text-gray-400">Zatvorené</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="glass-card-light shadow-colorful">
            <h3 class="font-artistic font-bold text-2xl text-gradient text-center mb-8">
              Sledujte nás
            </h3>
            <div class="flex justify-center space-x-4">
              <a
                v-for="social in socialMedia"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="w-16 h-16 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                :style="`background: ${social.gradient}`"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" class="text-3xl text-white" />
              </a>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="glass-card-light p-0 overflow-hidden group shadow-colorful">
          <div class="relative aspect-square lg:aspect-auto lg:h-full min-h-[500px] bg-gradient-ocean flex items-center justify-center">
            <div class="text-center p-8">
              <Icon name="ph:map-trifold-fill" class="text-9xl text-white/40 mb-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 class="text-3xl font-artistic font-bold text-white mb-4">
                Nájdite nás
              </h3>
              <p class="text-white/90 font-modern text-lg mb-8">
                V centre Bratislavy na Umeleckej ulici
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                class="inline-flex items-center space-x-2 px-8 py-4 bg-white text-art-turquoise font-artistic font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-xl"
              >
                <Icon name="ph:navigation-arrow-fill" class="text-xl" />
                <span>Otvoriť mapu</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Contact Form -->
      <div class="mt-20 max-w-3xl mx-auto glass-card-light shadow-colorful">
        <div class="text-center mb-8">
          <div class="handwritten text-art-pink mb-2">Máte otázku?</div>
          <h3 class="text-4xl font-artistic font-bold text-gradient">
            Rýchly kontakt
          </h3>
          <div class="divider-artistic"></div>
        </div>
        <form @submit.prevent="sendQuickMessage" class="space-y-6 mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              v-model="quickForm.name"
              type="text"
              required
              placeholder="Vaše meno"
              class="input-artistic"
            />
            <input
              v-model="quickForm.email"
              type="email"
              required
              placeholder="Váš email"
              class="input-artistic"
            />
          </div>
          <textarea
            v-model="quickForm.message"
            rows="4"
            required
            placeholder="Vaša správa..."
            class="input-artistic resize-none"
          ></textarea>
          <div class="text-center">
            <button type="submit" class="btn-artistic">
              <span>Odoslať správu</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const quickForm = ref({
  name: '',
  email: '',
  message: ''
})

const socialMedia = [
  { name: 'Instagram', icon: 'ph:instagram-logo-fill', url: 'https://instagram.com', gradient: 'linear-gradient(135deg, #FF6FB5, #C77DFF)' },
  { name: 'Facebook', icon: 'ph:facebook-logo-fill', url: 'https://facebook.com', gradient: 'linear-gradient(135deg, #4ECDC4, #45B7D1)' },
  { name: 'TikTok', icon: 'ph:tiktok-logo-fill', url: 'https://tiktok.com', gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)' },
  { name: 'YouTube', icon: 'ph:youtube-logo-fill', url: 'https://youtube.com', gradient: 'linear-gradient(135deg, #FFB347, #FFD93D)' },
]

const sendQuickMessage = () => {
  // Handle form submission
  console.log('Quick message sent:', quickForm.value)
  alert('Správa bola odoslaná!')
  quickForm.value = { name: '', email: '', message: '' }
}
</script>
