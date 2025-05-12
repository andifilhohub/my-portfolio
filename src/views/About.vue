<template>
  <main>
    <section class="pt-32 pb-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Professional background and personal journey"
        />
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div class="relative">
              <div class="w-64 h-64 rounded-3xl bg-primary opacity-10 absolute -top-4 -left-4"></div>
              <div class="w-64 h-64 rounded-3xl bg-accent opacity-10 absolute -bottom-4 -right-4"></div>
              <img 
                src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Portrait" 
                class="w-64 h-64 object-cover rounded-3xl border-4 border-border shadow-xl relative"
              />
            </div>
          </div>
          
          <div class="md:w-2/3 md:pl-12">
            <h3 class="text-3xl font-semibold mb-6 text-white">Senior Full-Stack Developer & Tech Consultant</h3>
            <p class="mb-6 leading-relaxed">
              With over 8 years of experience in the tech industry, I've had the privilege of working with startups and Fortune 500 companies to build scalable, performant web applications that drive business growth. My approach combines technical excellence with strategic thinking to deliver solutions that are both innovative and practical.
            </p>
            <p class="mb-8 leading-relaxed">
              I specialize in JavaScript ecosystems, particularly Vue and Node.js, but I'm passionate about learning new technologies that can help solve complex problems. When I'm not coding, you can find me mentoring junior developers, speaking at tech conferences, or exploring the latest in AI and machine learning.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(stat, index) in stats" :key="index" class="flex items-center">
                <div class="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mr-4">
                  <component :is="stat.icon" class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-white">{{ stat.title }}</h4>
                  <p class="text-content-secondary">{{ stat.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience Section -->
    <section class="py-20 bg-secondary">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="Career journey and key roles"
        />
        
        <div class="space-y-12">
          <div v-for="(job, index) in experience" :key="index" class="relative">
            <!-- Timeline dot and line -->
            <div class="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-border"></div>
            <div class="hidden md:block absolute left-[-4px] top-7 w-[9px] h-[9px] rounded-full bg-primary"></div>
            
            <div class="md:ml-10">
              <div class="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-semibold text-white">{{ job.title }}</h3>
                  <p class="text-primary font-medium">{{ job.company }}</p>
                </div>
                <div class="mt-2 md:mt-0">
                  <span class="px-4 py-1 bg-surface rounded-full text-content-secondary text-sm">
                    {{ job.period }}
                  </span>
                </div>
              </div>
              
              <p class="mb-6">{{ job.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, techIndex) in job.technologies" 
                  :key="techIndex" 
                  class="skill-pill bg-surface text-content-secondary hover:text-primary"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Education Section -->
    <section class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="Academic background and professional qualifications"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(edu, index) in education" :key="index" class="card card-hover">
            <div class="flex justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold text-white">{{ edu.degree }}</h3>
                <p class="text-primary">{{ edu.institution }}</p>
              </div>
              <span class="px-3 py-1 bg-surface rounded-full text-content-secondary text-sm self-start">
                {{ edu.year }}
              </span>
            </div>
            <p>{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { Briefcase, Users, Award, CheckCircle } from 'lucide-vue-next';
import SectionTitle from '../components/layout/SectionTitle.vue';
import Footer from '../components/layout/Footer.vue';

const stats = [
  { title: 'Experience', value: '8+ Years', icon: Briefcase },
  { title: 'Projects', value: '50+ Completed', icon: CheckCircle },
  { title: 'Clients', value: '30+ Worldwide', icon: Users },
  { title: 'Awards', value: '5 Industry Awards', icon: Award }
];

const experience = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechNova Solutions',
    period: '2020 - Present',
    description: 'Lead developer for enterprise-level web applications, managing a team of developers and architecting scalable solutions for clients across fintech, healthcare, and e-commerce sectors.',
    technologies: ['Vue.js', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Innovations',
    period: '2017 - 2020',
    description: 'Developed and maintained web applications for multiple clients, focusing on performance optimization and integration with third-party APIs.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'CircleCI']
  },
  {
    title: 'Frontend Developer',
    company: 'WebCraft Studios',
    period: '2015 - 2017',
    description: 'Created responsive and accessible user interfaces for various web applications, collaborating closely with designers and backend developers.',
    technologies: ['Angular', 'Sass', 'JavaScript', 'HTML5', 'CSS3']
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    year: '2015',
    description: 'Specialized in web technologies and distributed systems, with a thesis on scalable real-time web applications.'
  },
  {
    degree: 'Bachelor of Engineering in Software Engineering',
    institution: 'MIT',
    year: '2013',
    description: 'Focus on software architecture, data structures, and algorithms. Graduated with honors.'
  },
  {
    degree: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    year: '2019',
    description: 'Professional certification for designing distributed systems on AWS.'
  },
  {
    degree: 'Google Cloud Certified Professional',
    institution: 'Google Cloud Platform',
    year: '2021',
    description: 'Expert-level recognition for cloud architecture and deployment.'
  }
];
</script>