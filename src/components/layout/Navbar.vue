<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300" 
    :class="{ 'bg-background/90 backdrop-blur-md shadow-md border-b border-border/50': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-white flex items-center">
          <span class="bg-primary text-white p-2 rounded-xl mr-2 flex items-center justify-center">
            <Code class="w-5 h-5" />
          </span>
          <span>Dev Anderson Filho </span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="nav-link"
            :class="{ 'active': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-content-secondary hover:text-content"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-10 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-10 opacity-0"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pt-4 pb-2">
          <div class="flex flex-col space-y-3">
            <router-link 
              v-for="item in navItems" 
              :key="item.path" 
              :to="item.path" 
              class="px-3 py-2 rounded-lg hover:bg-surface"
              :class="{ 'bg-surface text-white': isActive(item.path) }"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Code, Menu, X } from 'lucide-vue-next';

const route = useRoute();
const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const isActive = (path: string) => {
  return route.path === path;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>