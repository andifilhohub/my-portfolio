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
                src="/media/profileme/profile.jpg" 
                alt="Professional Portrait" 
                class="w-64 h-64 object-cover rounded-3xl border-4 border-border shadow-xl relative"
              />
            </div>
          </div>
          
          <div class="md:w-2/3 md:pl-12">
            <h3 class="text-3xl font-semibold mb-6 text-white">Senior Full-Stack Developer & Tech Consultant</h3>
            <p class="mb-1 leading-relaxed">
I’m a software developer with a strong focus on turning ideas into well-crafted, scalable digital products. I started coding in 2015 by automating spreadsheets for clients and quickly evolved into building full-stack systems — including websites, mobile and web apps, and SaaS platforms for businesses across different industries. </p>
<p class="mb-1 leading-relaxed">
I approach development with a problem-solving mindset: I like to understand the real need, design efficient architectures, and deliver solutions that are clean, maintainable, and scalable. I’m hands-on, pragmatic, and always committed to quality. </p>
<p class="mb-1 leading-relaxed">
As a freelancer, I’ve worked directly with clients, led development cycles, and managed everything from backend logic to cloud infrastructure and deployment. I’m used to working autonomously, adapting to different workflows, and communicating effectively in remote environments.            </p>
            <p class="mb-8 leading-relaxed">
I’m currently pursuing a degree in Computer Engineering at a leading public university in Brazil, and I continue to blend academic knowledge with practical experience. I see technology as a tool to solve real-world problems — and that’s the mindset I bring to every collaboration.            </p>
            
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
  { title: 'Experience', value: '9+ Years', icon: Briefcase },
  { title: 'Projects', value: '50+ Completed', icon: CheckCircle },
  { title: 'Clients', value: '30+ Worldwide', icon: Users },
  { title: 'Awards', value: '2 Industry Awards', icon: Award }
];

const experience = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'DrBen',
    period: '2023 - Present',
    description: 'Lead developer for enterprise-level web applications, managing a team of developers and architecting scalable solutions for clients across fintech, healthcare, and e-commerce sectors.',
    technologies: ['Vue.js', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Freelance Software Engineer',
    company: 'Self-employed',
    period: '2015 - Present',
    description: 'Designed, developed, and deployed custom digital solutions for clients across a variety of industries, including healthcare, education, e-commerce, and logistics. Projects ranged from static websites to scalable SaaS platforms and mobile applications. Also handled infrastructure, CI/CD, and cloud deployments.',
    technologies: ['JavaScript', 'Node.js', 'Vue.js', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Firebase']
  },
  {
    title: 'Lead Developer – Custom ERP for Logistics Company',
    company: 'Freelance Project',
    period: '2022 - 2023',
    description: 'Architected and developed a complete ERP system to manage fleet logistics, client invoicing, and delivery routes. The system improved operational efficiency and reduced manual processes by over 60%.',
    technologies: ['Vue 3', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    title: 'Full-Stack Developer – E-learning Platform',
    company: 'Freelance Project',
    period: '2021',
    description: 'Built a fully responsive e-learning platform with user management, progress tracking, video streaming, and admin dashboards. The platform supported over 5,000 users and included custom CMS features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe']
  },
  {
    title: 'DevOps Consultant – SaaS Startup',
    company: 'Freelance Contract',
    period: '2020',
    description: 'Set up infrastructure-as-code for a startup’s SaaS platform. Implemented CI/CD pipelines, containerized services with Docker, and managed production deployments using Kubernetes and AWS.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform']
  }
];

const education = [
  {
    degree: 'Bachelor’s Degree in Computer Engineering',
    institution: 'Federal University of Uberlândia (UFU)',
    year: 'Ongoing',
    description: 'Comprehensive training in computer systems, electronics, and software engineering, with a strong focus on solving real-world problems through technology.'
  },
  {
    degree: 'Full Stack Web Development Certification',
    institution: 'Rocketseat',
    year: '2022',
    description: 'Intensive bootcamp focused on modern web development using JavaScript, Node.js, React, and DevOps best practices.'
  },
  {
    degree: 'Software Architecture Specialization',
    institution: 'Alura',
    year: '2023',
    description: 'Training in scalable software design, SOLID principles, microservices, and continuous integration strategies.'
  },
  {
    degree: 'DevOps & Cloud Computing Program',
    institution: 'Digital Innovation One (DIO)',
    year: '2021',
    description: 'Hands-on training in containerization with Docker, orchestration using Kubernetes, and cloud deployment on AWS and GCP.'
  }
];

</script>