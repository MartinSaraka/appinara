<template>
  <footer class="relative bg-gradient-to-br from-cream-100 via-cream-50 to-white border-t-4 border-art-coral overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 pattern-stripes opacity-30"></div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-14 h-14 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-xl">
              <Icon name="ph:scissors-fill" class="text-3xl text-white" />
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-artistic font-bold text-gradient">
                ArtHair
              </span>
              <span class="text-xs font-handwritten text-art-coral -mt-1">Studio</span>
            </div>
          </div>
          <p class="text-gray-600 font-modern mb-6 leading-relaxed">
            Umelecké kaderníctvo kde sa stretáva kreativita s technikou. Každý strih je originálne dielo.
          </p>
          <div class="flex space-x-3">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              :style="`background: ${social.gradient}`"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="text-2xl text-white" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-artistic font-bold text-xl text-art-coral mb-6">Rýchle odkazy</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-gray-700 font-modern hover:text-art-coral transition-colors flex items-center group"
              >
                <Icon name="ph:arrow-right" class="mr-2 group-hover:translate-x-1 transition-transform text-art-coral" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-artistic font-bold text-xl text-art-turquoise mb-6">Služby</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a href="#sluzby" class="text-gray-700 font-modern hover:text-art-turquoise transition-colors flex items-center group">
                <Icon name="ph:palette-fill" class="mr-2 text-art-turquoise group-hover:scale-110 transition-transform" />
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-artistic font-bold text-xl text-art-lavender mb-6">Kontakt</h3>
          <ul class="space-y-4">
            <li class="flex items-start text-gray-700 font-modern">
              <Icon name="ph:map-pin-fill" class="mr-3 text-art-coral text-2xl flex-shrink-0 mt-1" />
              <span>Umelecká 42<br />811 01 Bratislava</span>
            </li>
            <li class="flex items-center text-gray-700 font-modern">
              <Icon name="ph:phone-fill" class="mr-3 text-art-turquoise text-2xl flex-shrink-0" />
              <a href="tel:+421900000000" class="hover:text-art-turquoise transition-colors">
                +421 900 000 000
              </a>
            </li>
            <li class="flex items-center text-gray-700 font-modern">
              <Icon name="ph:envelope-fill" class="mr-3 text-art-lavender text-2xl flex-shrink-0" />
              <a href="mailto:info@arthair.sk" class="hover:text-art-lavender transition-colors">
                info@arthair.sk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="glass-card-light max-w-4xl mx-auto mb-12 shadow-colorful">
        <div class="text-center mb-6">
          <h3 class="text-3xl font-artistic font-bold text-gradient mb-2">
            Newsletter
          </h3>
          <div class="divider-artistic"></div>
          <p class="text-gray-600 font-modern mt-4">
            Získajte exkluzívne ponuky a tipy pre starostlivosť o vlasy
          </p>
        </div>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            v-model="newsletterEmail"
            type="email"
            required
            placeholder="Váš email..."
            class="input-artistic flex-1"
          />
          <button type="submit" class="btn-artistic whitespace-nowrap">
            <span>Prihlásiť sa</span>
          </button>
        </form>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t-2 border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-600 font-modern">
            © {{ currentYear }} ArtHair Studio. Všetky práva vyhradené.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink to="/ochrana-udajov" class="text-gray-600 font-modern hover:text-art-coral transition-colors">
              Ochrana údajov
            </NuxtLink>
            <NuxtLink to="/obchodne-podmienky" class="text-gray-600 font-modern hover:text-art-coral transition-colors">
              Obchodné podmienky
            </NuxtLink>
            <a href="#" class="text-gray-600 font-modern hover:text-art-coral transition-colors">
              Cookie politika
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Blobs -->
    <div class="blob w-96 h-96 bg-art-pink -bottom-48 -left-48 opacity-20"></div>
    <div class="blob w-80 h-80 bg-art-lavender -bottom-40 -right-40 opacity-20"></div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const newsletterEmail = ref('')
const currentYear = computed(() => new Date().getFullYear())

const socialMedia = [
  { name: 'Instagram', icon: 'ph:instagram-logo-fill', url: 'https://instagram.com', gradient: 'linear-gradient(135deg, #FF6FB5, #C77DFF)' },
  { name: 'Facebook', icon: 'ph:facebook-logo-fill', url: 'https://facebook.com', gradient: 'linear-gradient(135deg, #4ECDC4, #45B7D1)' },
  { name: 'TikTok', icon: 'ph:tiktok-logo-fill', url: 'https://tiktok.com', gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)' },
  { name: 'YouTube', icon: 'ph:youtube-logo-fill', url: 'https://youtube.com', gradient: 'linear-gradient(135deg, #FFB347, #FFD93D)' },
]

const quickLinks = [
  { label: 'Domov', path: '/' },
  { label: 'Služby', path: '/#sluzby' },
  { label: 'Galéria', path: '/#galeria' },
  { label: 'Rezervácia', path: '/rezervacia' },
  { label: 'Kontakt', path: '/#kontakt' },
]

const services = [
  'Artistický strih',
  'Umelecké farbenie',
  'Balayage & Ombré',
  'Keratínová regenerácia',
  'VIP Balíček',
]

const subscribeNewsletter = () => {
  console.log('Newsletter subscription:', newsletterEmail.value)
  alert('Ďakujeme za prihlásenie!')
  newsletterEmail.value = ''
}
</script>
