<template>
  <main>
    <section class="pt-32 pb-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="Have a project in mind or want to discuss opportunities?"
        />
        
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-content-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="input"
                    placeholder="Your name"
                    :class="{ 'border-error focus:ring-error': errors.name }"
                  >
                  <p v-if="errors.name" class="text-error text-sm mt-1">{{ errors.name }}</p>
                </div>
                <div>
                  <label for="email" class="block text-content-secondary mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="input"
                    placeholder="your.email@example.com"
                    :class="{ 'border-error focus:ring-error': errors.email }"
                  >
                  <p v-if="errors.email" class="text-error text-sm mt-1">{{ errors.email }}</p>
                </div>
              </div>
              <div>
                <label for="subject" class="block text-content-secondary mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  class="input"
                  placeholder="Project inquiry" 
                  :class="{ 'border-error focus:ring-error': errors.subject }"
                >
                <p v-if="errors.subject" class="text-error text-sm mt-1">{{ errors.subject }}</p>
              </div>
              <div>
                <label for="message" class="block text-content-secondary mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  v-model="form.message"
                  class="input"
                  placeholder="Tell me about your project..."
                  :class="{ 'border-error focus:ring-error': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="text-error text-sm mt-1">{{ errors.message }}</p>
              </div>
              <button 
                type="submit" 
                class="btn btn-primary w-full flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <Loader2 v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" />
                <span v-else>Send Message</span>
                <SendHorizontal v-if="!isSubmitting" class="w-5 h-5 ml-2" />
              </button>
            </form>
            
            <!-- Success Message -->
            <transition 
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-4 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-4 opacity-0"
            >
              <div v-if="formSubmitted" class="mt-6 bg-success/10 border border-success/30 rounded-xl p-4 flex items-center">
                <CheckCircle class="w-5 h-5 text-success mr-3 flex-shrink-0" />
                <p class="text-success">Your message has been sent successfully! I'll get back to you soon.</p>
              </div>
            </transition>
          </div>
          
          <div class="lg:w-1/2">
            <div class="bg-surface p-8 rounded-3xl h-full border border-border">
              <h3 class="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <p class="text-content-secondary mb-8">
                Feel free to reach out for collaborations or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mr-4">
                    <Mail class="text-primary" />
                  </div>
                  <div>
                    <h4 class="font-medium text-white">Email</h4>
                    <a href="mailto:contact@portfolio.com" class="text-content-secondary hover:text-primary transition-colors">
                      contact@portfolio.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mr-4">
                    <Phone class="text-primary" />
                  </div>
                  <div>
                    <h4 class="font-medium text-white">Phone</h4>
                    <a href="tel:+1234567890" class="text-content-secondary hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mr-4">
                    <MapPin class="text-primary" />
                  </div>
                  <div>
                    <h4 class="font-medium text-white">Location</h4>
                    <p class="text-content-secondary">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-10">
                <h4 class="font-medium mb-4 text-white">Connect With Me</h4>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Linkedin />
                  </a>
                  <a href="#" class="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                    <Twitter />
                  </a>
                  <a href="#" class="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors">
                    <Github />
                  </a>
                  <a href="#" class="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 bg-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="bg-surface p-8 md:p-12 rounded-3xl shadow-xl border border-border">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p class="text-content-secondary max-w-2xl mx-auto">Answers to some commonly asked questions about my services and process</p>
          </div>
          
          <div class="max-w-3xl mx-auto space-y-6">
            <div v-for="(faq, index) in faqs" :key="index" class="border border-border rounded-xl overflow-hidden">
              <button 
                @click="toggleFaq(index)"
                class="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                :class="{ 'bg-surface': activeFaq !== index, 'bg-primary-light': activeFaq === index }"
              >
                <h3 
                  class="font-medium" 
                  :class="{ 'text-white': activeFaq !== index, 'text-primary': activeFaq === index }"
                >
                  {{ faq.question }}
                </h3>
                <ChevronDown 
                  class="w-5 h-5 transition-transform duration-300" 
                  :class="{ 'transform rotate-180': activeFaq === index }"
                />
              </button>
              <div 
                class="bg-tertiary overflow-hidden transition-all duration-300"
                :class="{ 'max-h-0': activeFaq !== index, 'max-h-96': activeFaq === index }"
              >
                <p class="p-4">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, CheckCircle, SendHorizontal, ChevronDown, Loader2 } from 'lucide-vue-next';
import SectionTitle from '../components/layout/SectionTitle.vue';
import Footer from '../components/layout/Footer.vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const activeFaq = ref(null);

const validateForm = () => {
  let isValid = true;
  errors.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (!form.value.subject.trim()) {
    errors.value.subject = 'Subject is required';
    isValid = false;
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  } else if (form.value.message.length < 20) {
    errors.value.message = 'Message should be at least 20 characters';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a range of services including web development, mobile app development, UI/UX design, technical consulting, and software architecture. I specialize in building full-stack applications using modern technologies.'
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'Each project is unique, so pricing depends on scope, complexity, timeline, and specific requirements. I offer both fixed-price quotes for defined projects and hourly rates for ongoing work. Contact me with your project details for a customized quote.'
  },
  {
    question: 'What is your typical development process?',
    answer: 'My process typically includes discovery and requirements gathering, planning and architecture, design, development, testing, deployment, and post-launch support. I maintain regular communication throughout and provide access to project management tools to track progress.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A small website might take 3-4 weeks, while a comprehensive web application could take 2-6 months. I work with clients to establish realistic timelines and maintain transparent communication about progress.'
  },
  {
    question: 'Do you offer maintenance and support after launch?',
    answer: 'Yes, I offer ongoing maintenance and support services for all projects. This can include bug fixes, security updates, performance optimization, and feature enhancements. I offer flexible maintenance packages tailored to each client\'s needs.'
  }
];
</script>