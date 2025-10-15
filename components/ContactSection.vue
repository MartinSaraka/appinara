<template>
  <section id="contact" class="relative py-32 bg-slate-950">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Info -->
          <div v-motion-fade-visible>
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
              Poďme rásť
              <span class="gradient-text block">spolu</span>
            </h2>
            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
              Máte otázku alebo konkrétny projekt? Napíšte mi a do 24 hodín sa vám ozveme s návrhom riešenia. Prvá konzultácia je vždy zdarma.
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
                  <div class="text-sm text-slate-400">{{ contact.label }}</div>
                  <a :href="contact.href" class="text-white font-medium hover:text-primary-400 transition-colors">
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
                class="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-6 h-6 text-slate-300" />
              </a>
            </div>
          </div>
          
          <!-- Right Side - Contact Form -->
          <div v-motion-fade-visible :delay="200">
            <form @submit.prevent="handleSubmit" class="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
                  Meno
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Vaše meno"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
                  Email <span class="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="vas@email.com"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-slate-300 mb-2">
                  Telefón <span class="text-red-400">*</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+421 XXX XXX XXX"
                />
              </div>
              
              <div>
                <label for="project" class="block text-sm font-medium text-slate-300 mb-2">
                  Typ projektu <span class="text-red-400">*</span>
                </label>
                <select
                  id="project"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Vyberte typ projektu</option>
                  <option value="ai-integration">AI Integrácia</option>
                  <option value="web-app">Webová aplikácia</option>
                  <option value="ecommerce">E-shop</option>
                  <option value="enterprise">Firemná aplikácia</option>
                  <option value="other">Iné</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
                  Správa
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="3"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Povedzte mi viac o vašom projekte..."
                ></textarea>
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

const GithubIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })
])

const LinkedInIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const TwitterIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' })
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
  { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon }
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

const handleSubmit = async () => {
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
    submitMessage.value = '✅ Správa bola úspešne odoslaná! Ozveme sa vám čoskoro.'
    
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
