<template>
  <section id="rezervacia" class="section-container bg-white watercolor-bg relative overflow-hidden">
    <!-- Artistic Shapes -->
    <ArtisticShapes />
    
    <!-- Background Blobs -->
    <div class="blob w-96 h-96 bg-art-lavender top-20 right-10"></div>
    <div class="blob w-80 h-80 bg-art-mint bottom-20 left-10"></div>

    <!-- Wavy Top Divider -->
    <div class="absolute top-0 left-0 right-0 h-24">
      <svg class="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,0 Q300,60 600,30 T1200,0 L1200,100 L0,100 Z" fill="#F9F1E3" opacity="0.6" />
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-20 animate-fade-in">
        <div class="inline-block relative mb-6">
          <span class="handwritten text-6xl text-art-pink">Zarezervujte si</span>
          <!-- Hand-drawn arrow -->
          <svg class="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 opacity-50 hidden lg:block" viewBox="0 0 100 100">
            <path d="M10,50 L70,50 M55,35 L70,50 L55,65" stroke="#FF6FB5" stroke-width="4" fill="none" stroke-linecap="round" />
          </svg>
        </div>
        <h2 class="section-title">Online rezervácia</h2>
        <div class="divider-artistic"></div>
        <p class="section-subtitle mt-6">
          Jednoduchá rezervácia vášho <span class="highlight-marker font-semibold">umeleckého zážitku</span>
        </p>
      </div>

      <div class="max-w-4xl mx-auto glass-card-light shadow-colorful">
        <!-- Progress Steps -->
        <div class="mb-10">
          <div class="flex items-center justify-between max-w-2xl mx-auto">
            <div v-for="(step, index) in steps" :key="index" class="flex items-center flex-1">
              <div class="flex flex-col items-center flex-1">
                <div 
                  :class="[
                    'w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300',
                    currentStep >= index + 1 ? 'bg-gradient-sunset text-white shadow-lg' : 'bg-gray-200 text-gray-500'
                  ]"
                >
                  <Icon v-if="currentStep > index + 1" name="ph:check-bold" class="text-xl" />
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <span class="mt-2 text-xs font-medium text-gray-600 text-center">{{ step }}</span>
              </div>
              <div 
                v-if="index < steps.length - 1"
                :class="[
                  'h-1 flex-1 transition-all duration-300',
                  currentStep > index + 1 ? 'bg-gradient-sunset' : 'bg-gray-200'
                ]"
              ></div>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Name and Phone -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
                Meno a priezvisko *
              </label>
              <input
                v-model="formData.name"
                type="text"
                required
                placeholder="Vaše celé meno"
                class="input-artistic"
              />
            </div>
            <div>
              <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
                Telefón *
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                required
                placeholder="+421 XXX XXX XXX"
                class="input-artistic"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
              Email *
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              placeholder="vas@email.com"
              class="input-artistic"
            />
          </div>

          <!-- Service Selection -->
          <div>
            <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
              Vyberte službu *
            </label>
            <select v-model="formData.service" required class="select-artistic">
              <option value="" disabled>Vyberte službu...</option>
              <option value="artisticky-strih">Artistický strih - 45€</option>
              <option value="umelecke-farbenie">Umelecké farbenie - 85€</option>
              <option value="balayage-ombre">Balayage & Ombré - 95€</option>
              <option value="keratinova-regeneracia">Keratínová regenerácia - 75€</option>
              <option value="svadobne-ucesy">Svadobné účesy - 120€</option>
              <option value="vip-balicek">VIP Balíček - 250€</option>
            </select>
          </div>

          <!-- Date and Time -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
                Dátum *
              </label>
              <input
                v-model="formData.date"
                type="date"
                required
                :min="minDate"
                class="input-artistic"
              />
            </div>
            <div>
              <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
                Čas *
              </label>
              <select v-model="formData.time" required class="select-artistic">
                <option value="" disabled>Vyberte čas...</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-modern font-semibold text-gray-700 mb-3">
              Správa (voliteľné)
            </label>
            <textarea
              v-model="formData.message"
              rows="4"
              placeholder="Napíšte nám o vašich predstavách a požiadavkách..."
              class="input-artistic resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center pt-6">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-artistic disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Potvrdiť rezerváciu</span>
              <span v-else class="flex items-center justify-center">
                <Icon name="ph:circle-notch" class="animate-spin mr-2" />
                Odosielam...
              </span>
            </button>
          </div>

          <!-- Success/Error Messages -->
          <Transition name="fade">
            <div v-if="submitMessage" :class="[
              'p-6 rounded-2xl text-center font-modern text-lg',
              submitStatus === 'success' ? 'bg-art-mint/20 text-art-mint border-2 border-art-mint' : 'bg-red-100 text-red-600 border-2 border-red-300'
            ]">
              {{ submitMessage }}
            </div>
          </Transition>
        </form>

        <!-- Info Box -->
        <div class="mt-12 pt-10 border-t-2 border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="flex flex-col items-center">
              <div class="icon-wrapper mb-4" style="background: linear-gradient(135deg, #FF6B6B, #FFB347)">
                <Icon name="ph:clock-fill" class="text-4xl text-white" />
              </div>
              <h4 class="font-artistic font-bold text-xl text-art-coral mb-2">Rýchle potvrdenie</h4>
              <p class="text-gray-600 font-modern">Potvrdíme do 2 hodín</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="icon-wrapper mb-4" style="background: linear-gradient(135deg, #A78BFA, #9D4EDD)">
                <Icon name="ph:gift-fill" class="text-4xl text-white" />
              </div>
              <h4 class="font-artistic font-bold text-xl text-art-lavender mb-2">Prvá návšteva</h4>
              <p class="text-gray-600 font-modern">15% zľava na prvú službu</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="icon-wrapper mb-4" style="background: linear-gradient(135deg, #6BCB77, #4ECDC4)">
                <Icon name="ph:shield-check-fill" class="text-4xl text-white" />
              </div>
              <h4 class="font-artistic font-bold text-xl text-art-mint mb-2">Bezpečnosť</h4>
              <p class="text-gray-600 font-modern">Vaše údaje sú chránené</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const steps = ['Kontakt', 'Služba', 'Termín', 'Potvrdenie']
const currentStep = ref(1)

const formData = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const submitMessage = ref('')

// Update step based on form completion
const updateStep = () => {
  if (formData.value.name && formData.value.phone && formData.value.email) {
    currentStep.value = Math.max(currentStep.value, 2)
  }
  if (formData.value.service) {
    currentStep.value = Math.max(currentStep.value, 3)
  }
  if (formData.value.date && formData.value.time) {
    currentStep.value = Math.max(currentStep.value, 4)
  }
}

// Watch form changes
import { watch } from 'vue'
watch(formData, updateStep, { deep: true })

const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  submitMessage.value = ''

  // Simulate API call
  setTimeout(() => {
    submitStatus.value = 'success'
    submitMessage.value = '✨ Rezervácia bola úspešne odoslaná! Čoskoro vás budeme kontaktovať.'
    isSubmitting.value = false
    
    // Reset form after 3 seconds
    setTimeout(() => {
      formData.value = {
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      }
      submitMessage.value = ''
    }, 3000)
  }, 1500)
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
