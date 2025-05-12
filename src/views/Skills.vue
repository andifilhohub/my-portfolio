<template>
    <main>

    
  <section class="pt-32 pb-20 bg-background">
    <div class="max-w-7xl mx-auto px-6">
      <SectionTitle
        title="My Skills"
        subtitle="Core technologies and tools I work with"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="card card-hover p-6 bg-surface rounded-2xl shadow-md hover:shadow-glow transition-shadow"
        >
          <div class="flex items-center mb-4">
            <component
              :is="skill.icon"
              class="w-6 h-6 text-primary mr-3 animate-pulse-slow"
            />
            <h4 class="text-white font-semibold text-lg">{{ skill.name }}</h4>
          </div>
          <div class="w-full bg-border rounded-full h-2">
            <div
              class="h-2 rounded-full bg-primary transition-all duration-500"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <span class="text-xs text-primary">0%</span>
            <span class="text-xs text-green-500 font-bold">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  </main>
</template>

<script setup lang="ts">
import { Code, Database, Server, Settings, TerminalSquare, Atom, Gem, Github, Braces, Container,ShipWheel, Rabbit, FileJson } from 'lucide-vue-next';
import SectionTitle from '../components/layout/SectionTitle.vue';
import Footer from '../components/layout/Footer.vue';

const skills = [
  { name: 'JavaScript', level: 90, icon: FileJson },
  { name: 'Vue', level: 85, icon: FileJson },
  { name: 'React', level: 80, icon: Atom },
  { name: 'Node.js', level: 85, icon: Server },
  { name: 'Rails on Ruby', level: 75, icon: Gem },
  { name: 'Python', level: 80, icon: Code },
  { name: 'Java', level: 70, icon: Code },
  { name: 'PostgreSQL', level: 80, icon: Database },
  { name: 'MySQL', level: 75, icon: Database },
  { name: 'Redis', level: 70, icon: Database },
  { name: 'Docker', level: 75, icon: Container },
  { name: 'Kubernetes', level: 65, icon: ShipWheel },
  { name: 'Cloud & DevOps', level: 70, icon: TerminalSquare },
  { name: 'Git', level: 90, icon: Github },
  { name: 'Tailwind', level: 85, icon: Code },
  { name: 'Bootstrap', level: 70, icon: Braces },
  { name: 'C / C++ / C#', level: 65, icon: Code },
  { name: 'Nuxt.js', level: 80, icon: FileJson },
  { name: 'RabbitMQ', level: 65, icon: Rabbit },
  { name: 'TypeScript', level: 80, icon: FileJson }
];
</script>
