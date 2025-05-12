<template>
  <button 
    @click="scrollToTop" 
    class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-md z-40 flex items-center justify-center transition-all duration-300"
    :class="{ 'opacity-0 invisible': !showButton, 'opacity-100 visible': showButton }"
  >
    <ChevronUp class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>