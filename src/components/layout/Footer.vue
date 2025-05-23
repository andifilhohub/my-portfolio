<template>
  <footer class="bg-secondary text-content-secondary pt-16 pb-8 border-t border-border">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <router-link to="/" class="text-2xl font-bold text-white flex items-center">
            <span class="bg-primary text-white p-2 rounded-xl mr-2 flex items-center justify-center">
              <Code class="w-5 h-5" />
            </span>
            <span>Dev Anderson Filho </span>
          </router-link>
          <p class="mt-4 max-w-md">
            Building innovative digital experiences that push boundaries and deliver exceptional value.
          </p>
          <div class="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/anderson-filho-103a1a254/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSbzV7oAYT%2F6Kd7QPe09yVA%3D%3D" class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Linkedin class="w-5 h-5" />
            </a>
            <a href="https://github.com/andifilhohub" class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Github class="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/andim.js/" class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="mailto:andersonfilho.contato@outlook.com" class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-medium mb-4 text-white">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.name">
              <router-link :to="item.path" class="hover:text-white transition-colors">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-medium mb-4 text-white">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a href="#" class="hover:text-white transition-colors">{{ service }}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
        <p>© {{ new Date().getFullYear() }} Dev Anderson Filho . All rights reserved.</p>
        
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Code, Linkedin, Github, Instagram, Mail,  } from 'lucide-vue-next';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  'Web Development',
  'Mobile Applications',
  'UI/UX Design',
  'Technical Consulting',
  'Cloud Solutions'
];
</script>