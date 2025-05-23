<template>
  <main>
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center pt-20">
      <div class="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0">
          <h1 class="mb-6 leading-tight text-white">
            Building <span class="gradient-text">Digital</span> 
            <br>Experiences That <span class="text-accent">Matter</span>
          </h1>
          <p class="text-xl mb-8 max-w-lg">
            Senior full-stack developer specializing in creating elegant, high-performance web applications for forward-thinking companies.
          </p>
          <div class="flex space-x-4">
            <router-link to="/contact" class="btn btn-primary">
              Get In Touch
            </router-link>
            <router-link to="/projects" class="btn btn-outline">
              View Work
            </router-link>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] gradient-bg absolute -z-10 top-6 left-6 opacity-50 blur-md"></div>
            <div class="w-72 h-72 md:w-96 md:h-96 bg-surface border-4 border-border rounded-[2.5rem] shadow-2xl shadow-primary/20 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Portrait" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-secondary">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="What I Do" 
          subtitle="Specialized services to elevate your digital presence"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="card card-hover">
            <div class="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">{{ service.title }}</h3>
            <p class="mb-6">{{ service.description }}</p>
            <a href="#" class="text-primary flex items-center font-medium hover:text-accent transition-colors">
              Learn more
              <ChevronRight class="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Some of my recent work that showcases my expertise"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" class="card card-hover overflow-hidden">
            <div class="h-60 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <component :is="project.icon" class="w-16 h-16 text-white opacity-80" />
            </div>
            <div class="px-2">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
                <span class="px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-medium">
                  {{ project.category }}
                </span>
              </div>
              <p class="mb-6">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <a href="#" class="text-primary flex items-center font-medium hover:text-accent transition-colors">
                  View Details
                  <ArrowRight class="w-4 h-4 ml-1" />
                </a>
                <div class="flex space-x-2">
                  <a href="#" class="w-8 h-8 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Github class="w-4 h-4" />
                  </a>
                  <a href="#" class="w-8 h-8 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <ExternalLink class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/projects" class="btn btn-outline inline-flex items-center">
            View All Projects
            <ArrowRight class="w-5 h-5 ml-2" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-secondary">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What others say about working with me"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="card card-hover">
            <div class="flex mb-6">
              <Star v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-500" :fill="i <= testimonial.rating ? '#F59E0B' : 'none'" />
            </div>
            <p class="mb-6 italic">{{ testimonial.text }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-surface overflow-hidden mr-4">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-medium text-white">{{ testimonial.name }}</h4>
                <p class="text-sm">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-background relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="bg-surface p-12 rounded-3xl shadow-xl border border-border">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-2/3 mb-8 md:mb-0">
              <h2 class="text-3xl font-bold mb-4">Ready to start your next project?</h2>
              <p class="text-lg">Let's discuss how we can create something amazing together.</p>
            </div>
            <router-link to="/contact" class="btn btn-primary">
              Get in Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { Code, Database, Palette,Globe, Layout, ChevronRight, ArrowRight, Github, ExternalLink, Star, Layers, Server, Briefcase, Smartphone, FileText, Calendar } from 'lucide-vue-next';
import SectionTitle from '../components/layout/SectionTitle.vue';
import Footer from '../components/layout/Footer.vue';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Complete development of web and mobile applications, from intuitive frontends to robust and scalable backends.',
    icon: Code
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailor-made platforms and SaaS products built to match specific business needs, with focus on performance and maintainability.',
    icon: Layers
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    description: 'Deployment automation, containerization, and infrastructure management with Docker, Kubernetes, and cloud providers.',
    icon: Server
  },
  {
    title: 'Freelance Tech Consulting',
    description: 'Strategic support for startups and companies, helping define technical paths, MVP scope, and system architecture.',
    icon: Briefcase
  }
];


const featuredProjects = [
  {
    title: 'Financial Dashboard',
    category: 'Vue.js + Node.js',
    description: 'Real-time dashboard for financial analytics and KPI tracking, with data visualization and multi-user access.',
    icon: Layout
  },
  {
    title: 'E-commerce Platform',
    category: 'Next.js + Strapi',
    description: 'Headless e-commerce with CMS integration, advanced filtering, and AI-powered search and product recommendations.',
    icon: Database
  },
  {
    title: 'Mobile App for Logistics',
    category: 'React Native',
    description: 'Cross-platform mobile app for fleet tracking and delivery route optimization, synced with backend in real-time.',
    icon: Smartphone
  },
  {
    title: 'Custom CMS for Marketing Agency',
    category: 'Ruby on Rails',
    description: 'Tailor-made content management system for landing pages, SEO-friendly, with user role management.',
    icon: FileText
  },
  {
    title: 'SaaS for Online Bookings',
    category: 'Vue.js + Firebase',
    description: 'Booking system for service providers with calendar sync, payment gateway, and automated notifications.',
    icon: Calendar
  },
  {
    title: 'Institutional Website for Law Firm',
    category: 'React.js + Node.js',
    description: 'Corporate website with custom layout, blog integration, and optimized performance for SEO.',
    icon: Globe
  }
];


const testimonials = [
  {
    name: 'Rafael Martins',
    position: 'CTO, AgroTech Solutions',
    avatar: 'https://www.gravatar.com/avatar/?d=mp',
    text: 'High technical standards and a strong focus on what really matters. The project was delivered with excellence and exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Lívia Andrade',
    position: 'Co-founder, VidaDigital',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'Extremely committed, brought practical solutions from day one. Our app came to life much faster than we expected.',
    rating: 4
  },
  {
    name: 'Scripter',
    position: 'Music Producer, Scripter Music',
    avatar: '/media/testimonials/scripter.jpeg',
    text: 'Anderson was an excellent professional. He helped a lot with building the website and always responded quickly. I highly recommend him.',
    rating: 5
  }
];

</script>