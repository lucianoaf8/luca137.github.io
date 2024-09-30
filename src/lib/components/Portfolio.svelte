<script>
  import FlipCard from './FlipCard.svelte';
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faSearchDollar, faRobot, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'; // For GPTs
  import { faMoneyCheckAlt, faFileInvoiceDollar, faFileCode, faCogs } from '@fortawesome/free-solid-svg-icons'; // For Projects

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

<section id="portfolio" class="py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-12 hover:text-[#7CEFFF] transition-colors duration-300">
      Portfolio
    </h2>
    <div class="flex flex-col lg:flex-row gap-12">
      <!-- Projects Section -->
      <div class="projects-section w-full lg:w-1/2">
        <h3 class="text-2xl font-semibold mb-6 hover:text-[#7CEFFF] transition-colors duration-300">
          Projects
        </h3>
        <div class="project-list grid grid-cols-1 sm:grid-cols-2 gap-6">
          {#each projects as project}
            <FlipCard class="aspect-w-1 aspect-h-1" height="300px">
              <div slot="front" class="bg-[#0D1F26] rounded-lg p-4 h-full flex flex-col justify-center items-center text-center">
                <FontAwesomeIcon icon={project.icon} class="text-3xl mb-4" />
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-[#7CEFFF] hover:text-white transition-colors duration-300">
                  View on GitHub
                </a>
              </div>
              <div slot="back" class="bg-[#0D1F26] rounded-lg p-4 h-full flex flex-col justify-center items-center text-center">
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <p class="mb-2"><strong>Description:</strong> {project.description}</p>
                <p class="mb-4"><strong>Technologies:</strong> {project.technologies}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-[#7CE5D8] hover:text-white transition-colors duration-300">
                  View on GitHub
                </a>
              </div>
            </FlipCard>
          {/each}
        </div>
      </div>

      <!-- GPTs Section -->
      <div class="gpts-section w-full lg:w-1/2">
        <h3 class="text-2xl font-semibold mb-6 hover:text-[#7CEFFF] transition-colors duration-300">
          GPTs
        </h3>
        <div class="gpt-list grid grid-cols-1 sm:grid-cols-2 gap-6">
          {#each gpts as gpt}
            <FlipCard class="aspect-w-1 aspect-h-1" height="300px">
              <div slot="front" class="bg-[#0D1F26] rounded-lg p-4 h-full flex flex-col justify-center items-center text-center">
                <FontAwesomeIcon icon={gpt.icon} class="text-3xl mb-4" />
                <h4 class="text-lg font-bold mb-2">{gpt.title}</h4>
                <p class="mb-4">{gpt.description}</p>
                <a href={gpt.link} target="_blank" rel="noopener noreferrer" class="text-[#7CE5D8] hover:text-white transition-colors duration-300">
                  Try it out
                </a>
              </div>
              <div slot="back" class="bg-[#0D1F26] rounded-lg p-4 h-full flex flex-col justify-center items-center text-center">
                <h4 class="text-lg font-bold mb-2">{gpt.title}</h4>
                <p class="mb-2"><strong>Description:</strong> {gpt.description}</p>
                <p class="mb-4"><strong>Technologies:</strong> {gpt.technologies}</p>
                <a href={gpt.link} target="_blank" rel="noopener noreferrer" class="text-[#7CE5D8] hover:text-white transition-colors duration-300">
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

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .projects-section,
    .gpts-section {
      max-width: 100%;
    }
  }

  /* Optional: Additional animations or hover effects can be added here */
</style>
