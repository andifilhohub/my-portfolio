<template>
  <main>
    <section class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="What I Can Offer to Your Business"
        />

        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-4 py-2 rounded-full border transition-colors',
              activeCategory === category 
                ? 'bg-primary border-primary text-white' 
                : 'bg-surface border-border text-content-secondary hover:bg-surface-hover'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="index" 
            class="card card-hover group relative overflow-hidden"
          >
            <!-- Project Image with Hover Overlay -->
            <div class="relative h-60 bg-surface">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
                <span class="px-3 py-1 bg-surface rounded-full text-content-secondary text-sm">
                  {{ project.type }}
                </span>
              </div>

              <p class="mb-6 text-content-secondary">{{ project.description }}</p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="techIndex" 
                  class="skill-pill bg-surface text-content-secondary hover:text-primary text-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Links -->
              <div class="flex gap-4 border-t border-border pt-4">
                <a 
                  v-if="project.links.github" 
                  :href="project.links.github" 
                  class="flex items-center text-content-secondary hover:text-primary transition"
                  target="_blank"
                >
                  <Github class="w-5 h-5 mr-2" />
                  Repository
                </a>
                <a 
                  v-if="project.links.demo" 
                  :href="project.links.demo" 
                  class="flex items-center text-content-secondary hover:text-primary transition"
                  target="_blank"
                >
                  <ExternalLink class="w-5 h-5 mr-2" />
                  Live Demo
                </a>
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
import { Github, ExternalLink } from 'lucide-vue-next';
import SectionTitle from '../components/layout/SectionTitle.vue';
import Footer from '../components/layout/Footer.vue';
import { ref, computed } from 'vue';


const categories = ['All', 'Websites', 'SaaS', 'APIs', 'Mobile', 'Data Science'];


const activeCategory = ref('All');


const projects = [
  {
    title: 'Evolution API',
    type: 'APIs',
    category: 'WhatsApp Messages',
    description: 'Evolution API began as a WhatsApp controller API based on CodeChat, which in turn implemented the Baileys library.',
    technologies: ['TypeScript', 'Others'],
    image: '/media/projects/evolution.png',
    links: {
      github: '#',
      demo: 'https://doc.evolution-api.com/v1/en/get-started/introduction'
    }
  },
  {
    title: 'Izing',
    type: 'SaaS',
    category: 'Productivity',
    description: 'Izing is a modern web application focused on enhancing productivity through intuitive task management and collaboration tools.',
    technologies: ['JavaScript', 'TypeScript', 'Vue', 'Sass', 'CSS', 'HTML', 'Other'],
    image: '/media/projects/izing.png',  
    links: {
      github: 'https://github.com/ldurans/izing.open.io.git',
      demo: 'https://izing.io/'
    }
  },
  {
    title: 'ERPNext',
    type: 'SaaS',
    category: 'Enterprise Resource Planning',
    description: 'ERPNext is an open-source, comprehensive ERP solution designed to manage all core business processes including accounting, inventory, sales, purchase, and human resources.',
    technologies: ['Python', 'JavaScript', 'MariaDB', 'HTML'],
    image: '/media/projects/erpnext.png',  
    links: {
      github: 'https://github.com/frappe/erpnext',
      demo: 'https://erpnext-demo.frappe.cloud/api/method/erpnext_demo.erpnext_demo.auth.login_demo'
    }
  },
  {
    title: 'Lettuce Greenhouse Management System',
    type: 'SaaS',
    category: 'Enterprise',
    description: 'A simple web application to manage a lettuce greenhouse. It includes features for tracking raw material purchases, recording sales, managing product inventory, and visualizing the financial performance of the business.',
    technologies: ['Vue 3', 'Node.js', 'PostgreSQL', 'Redis', 'Mapbox', 'Docker'],
    image: '/media/projects/dashboardSys.jpeg',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Landing Page Beats 3',
    type: 'Websites',
    category: 'Landing Page',
    description: 'Página responsiva para fones Beats com design moderno e foco em conversão.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/projects/beats3.png',
    links: {
      github: 'https://github.com/andifilhohub/Landing-page-Beats-3',
      demo: 'https://headphone.hybware.com.br	'
    }
  },
  {
    title: 'Landing Page Advogada',
    type: 'Websites',
    category: 'Landing Page',
    description: 'Página institucional elegante e responsiva para advogada ou escritório de advocacia.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/projects/advsite.png',
    links: {
      github: '#',
      demo: 'https://advtemplate.hybware.com.br'
    }
  },
  {
    title: 'Scripter Music Portfolio',
    type: 'Websites',
    category: 'Landing Page',
    description: 'Portfólio responsivo e moderno para artista musical, com foco em apresentação de trabalhos e contato.',
    technologies: ['Vue 3', 'TypeScript.js', 'CSS', 'JavaScript'],
    image: '/media/projects/scriptermusic.png',
    links: {
      github: 'https://github.com/andifilhohub/scriptermusic-website.git',
      demo: 'https://scriptermusic.com/'
    }
  },
  {
  title: "Pasta Cosi Restaurant",
  type: "Websites",
  category: "Restaurante Italiano",
  description: "Website completo para restaurante italiano premium, com sistema de reservas, menu interativo e galeria de fotos.",
  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "SwiperJS"],
  image: "/media/projects/pastacosi.png",
  links: {
    github: "https://github.com/andifilhohub/Pasta-Cosi-Restaurant-Website.git",
    demo: "https://corsi.hybware.com.br	"
  }
},
{
  title: "MediCare System",
  type: "SaaS",
  category: "Sistema Clínico",
  description: "Sistema completo de gestão para clínicas médicas com módulos de agendamento, prontuário eletrônico, controle financeiro e gestão de estoque.",
  technologies: [
    "vue 3",
    "Tailwind CSS",
    "JavaScript",
    "Font Awesome"
  ],
  image: "/media/projects/medicare.png",
  links: {
    github: "#",
    demo: "#"
  }
},
  {
    title: 'Hospital Website',
    type: 'Websites',
    category: 'Institucional',
    description: 'Website moderno e completo para hospitais ou clínicas, com seções informativas e formulário de contato.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    image: '/media/projects/doctorcares.png',
    links: {
      github: '#',
      demo: 'https://cares.hybware.com.br'
    }
  },
  {
    title: 'Grilli Template',
    type: 'Websites',
    category: 'Restaurante',
    description: 'Template responsivo para restaurantes, com menu digital e layout premium.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/projects/grilli.png',
    links: {
      github: '#',
      demo: 'https://grilli.hybware.com.br	'
    }
  },
  {
    title: 'GourmetPrime Template',
    type: 'Websites',
    category: 'Restaurante Premium',
    description: 'Site premium para restaurantes de alto padrão com foco em acessibilidade e design refinado.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/projects/gourmet.png',
    links: {
      github: '#',
      demo: 'https://gourmetprime.hybware.com.br'
    }
  },
  {
  title: "RainyRoof Restaurant and cafe",
  type: "Websites",
  category: "Restaurante Premium",
  description: "Site premium para restaurantes de alto padrão com serviço de delivery, combinando design refinado e acessibilidade para uma experiência gastronômica exclusiva.",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "/media/projects/food.png",
  links: {
    github: "#",
    demo: "https://restaurant.hybware.com.br"
  }
},
  {
    title: 'E-commerce de Roupas e Acessórios',
    type: 'Websites',
    category: 'E-commerce',
    description: 'Loja online moderna e responsiva para venda de roupas, com foco em experiência do usuário.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/projects/anon.png',
    links: {
      github: '#',
      demo: 'https://ecommerce.hybware.com.br	'
    }
  
  }
];

const filteredProjects = computed(() => {
  return activeCategory.value === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeCategory.value);
});
</script>

<style scoped>
.card {
  @apply bg-surface rounded-xl border border-border transition-all;
}

.card-hover {
  @apply transform transition duration-300 ease-in-out;
}

.card-hover:hover {
  @apply translate-y-[-5px] shadow-xl;
}

.skill-pill {
  @apply px-3 py-1 rounded-full transition-colors duration-200;
}

/* Transition for category filter */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>  