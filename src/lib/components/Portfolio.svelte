<script>
  import FlipCard from './FlipCard.svelte';
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import {
    faRobot,
    faDatabase,
    faCode,
    faMoneyCheckAlt,
    faFileInvoiceDollar,
    faFileCode,
    faCogs
  } from '@fortawesome/free-solid-svg-icons';

  // Sample data for projects
  const projects = [
    {
      title: 'Finance Deep Analysis',
      link: 'https://github.com/lucianoaf8/finance-deep-analysis',
      description: 'A comprehensive analysis tool for financial data.',
      technologies: 'Python, Pandas',
      icon: faMoneyCheckAlt,
    },
    {
      title: 'Plaid Finance Fetcher',
      link: 'https://github.com/lucianoaf8/plaid-finance-fetcher',
      description: 'Fetch and process financial data using the Plaid API.',
      technologies: 'JavaScript, Plaid API',
      icon: faFileInvoiceDollar,
    },
    {
      title: 'MBNA Statement Import',
      link: 'https://github.com/lucianoaf8/mbna-statement-import',
      description: 'Automate the import of MBNA statements using Selenium.',
      technologies: 'Python, Selenium',
      icon: faFileCode,
    },
    {
      title: 'Screen Scrape',
      link: 'https://github.com/lucianoaf8/screen-scrape',
      description: 'A tool to scrape and process screen data efficiently.',
      technologies: 'Python, BeautifulSoup',
      icon: faCogs,
    },
  ];

  // Sample data for GPTs
  const gpts = [
    {
      title: 'FeatureEng-GPT',
      link: 'https://chatgpt.com/g/g-KPwV9XZGv-featureeng-gpt',
      description: 'Friendly feature engineering bot.',
      technologies: 'GPT-3, Python',
      icon: faRobot,
    },
    {
      title: 'AI-GPT',
      link: 'https://chatgpt.com/g/g-vPeMWbO2f-ai-gpt',
      description: 'Helps create AI models and projects with expert guidance.',
      technologies: 'GPT-3, Python',
      icon: faRobot,
    },
    {
      title: 'MysqlGPT',
      link: 'https://chatgpt.com/g/g-Vo23uO3jp-mysqlgpt',
      description: 'User-friendly MySQL 8 expert offering database design, query creation, and optimization solutions.',
      technologies: 'MySQL, Python',
      icon: faDatabase,
    },
    {
      title: 'PythonGPT',
      link: 'https://chatgpt.com/g/g-UoHNGZJqK-pythongpt',
      description: 'Python coding expert providing comprehensive solutions and project structure guidance.',
      technologies: 'Python, GPT-3',
      icon: faCode,
    },
  ];

  function initializePortfolio() {
    console.log('Portfolio component initialized');
  }

  onMount(() => {
    initializePortfolio();
  });
</script>

<section id="portfolio" class="py-20 bg-hero-gradient text-custom-text relative overflow-hidden top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient">
  <!-- Rotating Radial Gradient Overlay -->
  <div class="absolute inset-0 bg-radial-gradient"></div>

  <div class="container mx-auto relative z-10 ">
    <h2 class="text-5xl font-orbitron text-center mb-16 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
      Portfolio
    </h2>
    <div class="flex flex-col lg:flex-row gap-16">
      <!-- Projects Section -->
      <div class="projects-section w-full lg:w-1/2">
        <h3 class="text-3xl font-orbitron mb-8 text-center lg:text-left bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
          Projects
        </h3>
        <div class="project-list grid grid-cols-1 sm:grid-cols-2 gap-8">
          {#each projects as project}
            <FlipCard class="shadow-custom-card rotate-x-5deg rotate-y--5deg hover:rotate-x-0 hover:rotate-y-0 hover:shadow-custom-card-hover transition-transform duration-500 aspect-w-1 aspect-h-1 h-[300px]">
              <div slot="front" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center relative">
                <FontAwesomeIcon icon={project.icon} class="text-4xl mb-4 drop-shadow-custom-icon transition-transform duration-500 hover:animate-rotate360" />
                <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
              </div>
              <div slot="back" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
                <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
                <p class="mb-2"><strong>Description:</strong> {project.description}</p>
                <p class="mb-4"><strong>Technologies:</strong> {project.technologies}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-button-gradient text-custom-bg font-semibold rounded-md shadow-custom-button-hover transition-all duration-300 hover:translate-y-[-3px]">
                  View on GitHub
                </a>
              </div>
            </FlipCard>
          {/each}
        </div>
      </div>

      <!-- GPTs Section -->
      <div class="gpts-section w-full lg:w-1/2">
        <h3 class="text-3xl font-orbitron mb-8 text-center lg:text-left bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
          GPTs
        </h3>
        <div class="gpt-list grid grid-cols-1 sm:grid-cols-2 gap-8">
          {#each gpts as gpt}
            <FlipCard class="shadow-custom-card rotate-x-5deg rotate-y--5deg hover:rotate-x-0 hover:rotate-y-0 hover:shadow-custom-card-hover transition-transform duration-500 aspect-w-1 aspect-h-1 h-[300px]">
              <div slot="front" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center relative">
                <FontAwesomeIcon icon={gpt.icon} class="text-4xl mb-4 drop-shadow-custom-icon transition-transform duration-500 hover:animate-rotate360" />
                <h4 class="text-xl font-bold mb-2">{gpt.title}</h4>
                <p class="mb-4 text-center">{gpt.description}</p>
              </div>
              <div slot="back" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
                <h4 class="text-xl font-bold mb-2">{gpt.title}</h4>
                <p class="mb-2"><strong>Description:</strong> {gpt.description}</p>
                <p class="mb-4"><strong>Technologies:</strong> {gpt.technologies}</p>
                <a href={gpt.link} target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-button-gradient text-custom-bg font-semibold rounded-md shadow-custom-button-hover transition-all duration-300 hover:translate-y-[-3px]">
                  Try it out
                </a>
              </div>
            </FlipCard>
          {/each}
        </div>
      </div>
    </div>
    <!-- Optional: Additional Content -->
    <div id="model-viewer" class="mt-12">
      <!-- Insert any model viewer or additional content here -->
    </div>
  </div>
</section>

<style>
  /* Portfolio Component Specific Styles */

  /* Ensure perspective for 3D effects */
  #portfolio {
    perspective: 1000px;
  }
</style>
