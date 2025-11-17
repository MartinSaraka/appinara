<template>
  <section id="contact" class="relative py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Info -->
          <div v-motion-fade-visible>
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white text-gray-900">
              Poďme rásť
              <span class="gradient-text block">spolu</span>
            </h2>
            <p class="text-xl dark:text-slate-200 text-gray-700 mb-8 leading-relaxed">
              Máte otázku alebo konkrétny projekt? Napíšte mi a do 24 hodín sa vám ozvem s návrhom riešenia. Prvá konzultácia je vždy zdarma.
            </p>
            
            <!-- Contact Info -->
            <div class="space-y-6">
              <div 
                v-for="contact in contactInfo" 
                :key="contact.label"
                class="flex items-center gap-4"
              >
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component :is="contact.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <div class="text-sm dark:text-slate-400 text-gray-600">{{ contact.label }}</div>
                  <a :href="contact.href" class="dark:text-white text-gray-900 font-medium dark:hover:text-primary-400 hover:text-primary-600 transition-colors">
                    {{ contact.value }}
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="flex gap-4 mt-8">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-6 h-6 dark:text-slate-300 text-gray-600" />
              </a>
            </div>
          </div>
          
          <!-- Right Side - Contact Form -->
          <div v-motion-fade-visible :delay="200">
            <form @submit.prevent="handleSubmit" class="glass-effect rounded-2xl p-8 space-y-6" novalidate>
              <div>
                <label for="name" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-2">
                  Meno
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border-gray-300 rounded-xl dark:text-white text-gray-900 dark:placeholder-slate-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Vaše meno"
                  aria-label="Vaše meno"
                />
                <p class="text-xs dark:text-slate-400 text-gray-600 mt-1">Ako sa k vám mám oslovovať</p>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-2">
                  Email <span class="dark:text-slate-500 text-gray-500">(aspoň email alebo telefón)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  @blur="validateEmail"
                  type="email"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border-gray-300 rounded-xl dark:text-white text-gray-900 dark:placeholder-slate-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 focus:ring-red-500': emailError || (validationError && !form.email && !form.phone), 'border-green-500': emailValid }"
                  placeholder="vas@email.com"
                  aria-label="Váš email"
                  aria-describedby="email-helper"
                />
                <p id="email-helper" class="text-xs mt-1" :class="emailError ? 'text-red-400' : emailValid ? 'text-green-400' : 'dark:text-slate-400 text-gray-600'">
                  {{ emailError || (emailValid ? '✓ Email je platný' : 'Pre spätnú komunikáciu') }}
                </p>
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-2">
                  Telefón <span class="dark:text-slate-500 text-gray-500">(voliteľné)</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border-gray-300 rounded-xl dark:text-white text-gray-900 dark:placeholder-slate-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 focus:ring-red-500': validationError && !form.email && !form.phone }"
                  placeholder="+421 XXX XXX XXX"
                  aria-label="Váš telefón"
                  aria-describedby="phone-helper"
                />
                <p id="phone-helper" class="text-xs dark:text-slate-400 text-gray-600 mt-1">
                  {{ validationError && !form.email && !form.phone ? '⚠️ Vyplňte aspoň email alebo telefón' : 'Pre rýchlejší kontakt' }}
                </p>
              </div>
              
              <div>
                <label for="project" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-2">
                  Typ projektu <span class="text-red-400">*</span>
                </label>
                <select
                  id="project"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border-gray-300 rounded-xl dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 focus:ring-red-500': projectTypeError }"
                  aria-label="Typ projektu"
                  aria-describedby="project-helper"
                >
                  <option value="">Vyberte typ projektu</option>
                  <option value="ai-integration">AI Integrácia & Chatbot</option>
                  <option value="web-app">Webová stránka / Aplikácia</option>
                  <option value="ecommerce">E-shop / E-commerce</option>
                  <option value="business-tool">Business nástroj / Dashboard</option>
                  <option value="other">Iné</option>
                </select>
                <p id="project-helper" class="text-xs mt-1" :class="projectTypeError ? 'text-red-400' : 'dark:text-slate-400 text-gray-600'">
                  {{ projectTypeError || 'Pomôže mi pripraviť lepšiu ponuku' }}
                </p>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-2">
                  Správa <span class="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border-gray-300 rounded-xl dark:text-white text-gray-900 dark:placeholder-slate-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  :class="{ 'border-red-500 focus:ring-red-500': messageError }"
                  placeholder="Povedzte mi viac o vašom projekte..."
                  aria-label="Vaša správa"
                  aria-describedby="message-helper"
                  maxlength="1000"
                ></textarea>
                <p id="message-helper" class="text-xs mt-1 flex justify-between" :class="messageError ? 'text-red-400' : 'dark:text-slate-400 text-gray-600'">
                  <span>{{ messageError || 'Čím viac detailov, tým lepšie' }}</span>
                  <span>{{ form.message.length }}/1000</span>
                </p>
              </div>
              
              <button
                type="submit"
                class="w-full btn-primary text-center"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Odosielam...' : 'Odoslať správu' }}
              </button>
              
              <p v-if="submitMessage" class="text-center text-sm" :class="submitSuccess ? 'text-green-400' : 'text-red-400'">
                {{ submitMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import emailjs from '@emailjs/browser'

const EmailIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])

const PhoneIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
])

const LocationIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
])

const LinkedInIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const contactInfo = [
  {
    label: 'Email',
    value: 'appinarasolutions@gmail.com',
    href: 'mailto:appinarasolutions@gmail.com',
    icon: EmailIcon
  },
  {
    label: 'Telefón',
    value: '+421 917 566 722',
    href: 'tel:+421917566722',
    icon: PhoneIcon
  },
  {
    label: 'Lokácia',
    value: 'Slovensko',
    href: '#',
    icon: LocationIcon
  }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/appinara/', icon: LinkedInIcon }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const validationError = ref(false)
const emailError = ref('')
const emailValid = ref(false)
const projectTypeError = ref('')
const messageError = ref('')

const validateEmail = () => {
  if (!form.value.email) {
    emailError.value = ''
    emailValid.value = false
    return
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    emailError.value = '⚠️ Neplatná emailová adresa'
    emailValid.value = false
  } else {
    emailError.value = ''
    emailValid.value = true
  }
}

const handleSubmit = async () => {
  // Reset errors
  validationError.value = false
  emailError.value = ''
  projectTypeError.value = ''
  messageError.value = ''
  
  // Validácia: aspoň email alebo telefón musí byť vyplnený
  if (!form.value.email && !form.value.phone) {
    validationError.value = true
    submitMessage.value = '⚠️ Vyplňte prosím aspoň email alebo telefónne číslo'
    submitSuccess.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    return
  }
  
  // Validácia emailu ak je vyplnený
  if (form.value.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      emailError.value = '⚠️ Neplatná emailová adresa'
      submitMessage.value = '⚠️ Skontrolujte vyplnené údaje'
      submitSuccess.value = false
      return
    }
  }
  
  // Validácia typu projektu
  if (!form.value.projectType) {
    projectTypeError.value = '⚠️ Vyberte typ projektu'
    submitMessage.value = '⚠️ Skontrolujte vyplnené údaje'
    submitSuccess.value = false
    return
  }
  
  // Validácia správy
  if (!form.value.message || form.value.message.trim().length < 10) {
    messageError.value = '⚠️ Správa musí mať aspoň 10 znakov'
    submitMessage.value = '⚠️ Skontrolujte vyplnené údaje'
    submitSuccess.value = false
    return
  }
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // EmailJS configuration
    const serviceId = 'service_is1zj0v'
    const templateId = 'template_xjtb39p'
    const publicKey = 'OkHjN5RiYSgxDL-5S'
    
    // Prepare template parameters
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      phone: form.value.phone,
      project_type: form.value.projectType,
      message: form.value.message,
      to_email: 'appinarasolutions@gmail.com'
    }
    
    // Send email via EmailJS
    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    
    // Success
    isSubmitting.value = false
    submitSuccess.value = true
    validationError.value = false
    emailError.value = ''
    emailValid.value = false
    projectTypeError.value = ''
    messageError.value = ''
    submitMessage.value = '✅ Správa bola úspešne odoslaná! Ozvem sa vám čoskoro.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    // Error handling
    console.error('EmailJS Error:', error)
    isSubmitting.value = false
    submitSuccess.value = false
    submitMessage.value = '❌ Nepodarilo sa odoslať správu. Skúste to prosím znova alebo nás kontaktujte priamo na email.'
    
    // Clear error message after 7 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 7000)
  }
}
</script>
