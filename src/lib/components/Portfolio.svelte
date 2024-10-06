<!-- src/lib/components/Portfolio.svelte -->
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
  import { t } from 'svelte-i18n'; // Import the `t` function from svelte-i18n
  import '../../i18n.js'; // Initialize i18n

  // Function to initialize any portfolio-specific logic
  function initializePortfolio() {
    console.log('Portfolio component initialized');
  }

  onMount(() => {
    initializePortfolio();
  });

  // Define projects with translation keys, links, and icons
  const projects = [
    {
      key: 'portfolioSection.projects.financeDeepAnalysis',
      link: 'https://github.com/lucianoaf8/finance-deep-analysis',
      icon: faMoneyCheckAlt,
    },
    {
      key: 'portfolioSection.projects.plaidFinanceFetcher',
      link: 'https://github.com/lucianoaf8/plaid-finance-fetcher',
      icon: faFileInvoiceDollar,
    },
    {
      key: 'portfolioSection.projects.mbnaStatementImport',
      link: 'https://github.com/lucianoaf8/mbna-statement-import',
      icon: faFileCode,
    },
    {
      key: 'portfolioSection.projects.screenScrape',
      link: 'https://github.com/lucianoaf8/screen-scrape',
      icon: faCogs,
    },
  ];

  // Define GPTs with translation keys, links, and icons
  const gpts = [
    {
      key: 'portfolioSection.gpts.featureEngGPT',
      link: 'https://chatgpt.com/g/g-KPwV9XZGv-featureeng-gpt',
      icon: faRobot,
    },
    {
      key: 'portfolioSection.gpts.aiGPT',
      link: 'https://chatgpt.com/g/g-vPeMWbO2f-ai-gpt',
      icon: faRobot,
    },
    {
      key: 'portfolioSection.gpts.mysqlGPT',
      link: 'https://chatgpt.com/g/g-Vo23uO3jp-mysqlgpt',
      icon: faDatabase,
    },
    {
      key: 'portfolioSection.gpts.pythonGPT',
      link: 'https://chatgpt.com/g/g-UoHNGZJqK-pythongpt',
      icon: faCode,
    },
  ];
</script>

<section id="portfolio" class="py-20 bg-hero-gradient text-custom-text relative overflow-hidden">
  <!-- Rotating Radial Gradient Overlay -->
  <div class="absolute inset-0 bg-radial-gradient"></div>

  <div class="container mx-auto relative z-10">
    <h2 class="text-5xl font-orbitron text-center mb-16 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
      { $t('portfolioSection.title') }
    </h2>
    <div class="flex flex-col lg:flex-row gap-16">
      <!-- Projects Section -->
      <div class="projects-section w-full lg:w-1/2">
        <h3 class="text-3xl font-orbitron mb-8 text-center lg:text-left bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
          { $t('portfolioSection.projectsTitle') }
        </h3>
        <div class="project-list grid grid-cols-1 sm:grid-cols-2 gap-8">
          {#each projects as project}
            <FlipCard class="shadow-custom-card rotate-x-5deg rotate-y--5deg hover:rotate-x-0 hover:rotate-y-0 hover:shadow-custom-card-hover transition-transform duration-500 aspect-w-1 aspect-h-1 h-[300px]">
              <div slot="front" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center relative">
                <FontAwesomeIcon icon={project.icon} class="text-4xl mb-4 drop-shadow-custom-icon transition-transform duration-500 hover:animate-rotate360" />
                <h3 class="text-2xl font-bold mb-2">{ $t(`${project.key}.title`) }</h3>
              </div>
              <div slot="back" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
                <h3 class="text-2xl font-bold mb-2">{ $t(`${project.key}.title`) }</h3>
                <p class="mb-2"><strong>{ $t('portfolioSection.description') }:</strong> { $t(`${project.key}.description`) }</p>
                <p class="mb-4"><strong>{ $t('portfolioSection.technologies') }:</strong> { $t(`${project.key}.technologies`) }</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-button-gradient text-custom-bg font-semibold rounded-md shadow-custom-button-hover transition-all duration-300 hover:translate-y-[-3px]">
                  { $t('portfolioSection.viewOnGithub') }
                </a>
              </div>
            </FlipCard>
          {/each}
        </div>
      </div>

      <!-- GPTs Section -->
      <div class="gpts-section w-full lg:w-1/2">
        <h3 class="text-3xl font-orbitron mb-8 text-center lg:text-left bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
          { $t('portfolioSection.gptsTitle') }
        </h3>
        <div class="gpt-list grid grid-cols-1 sm:grid-cols-2 gap-8">
          {#each gpts as gpt}
            <FlipCard class="shadow-custom-card rotate-x-5deg rotate-y--5deg hover:rotate-x-0 hover:rotate-y-0 hover:shadow-custom-card-hover transition-transform duration-500 aspect-w-1 aspect-h-1 h-[300px]">
              <div slot="front" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center relative">
                <FontAwesomeIcon icon={gpt.icon} class="text-4xl mb-4 drop-shadow-custom-icon transition-transform duration-500 hover:animate-rotate360" />
                <h4 class="text-xl font-bold mb-2">{ $t(`${gpt.key}.title`) }</h4>
                <p class="mb-4 text-center">{ $t(`${gpt.key}.description`) }</p>
              </div>
              <div slot="back" class="bg-card-gradient rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
                <h4 class="text-xl font-bold mb-2">{ $t(`${gpt.key}.title`) }</h4>
                <p class="mb-2"><strong>{ $t('portfolioSection.description') }:</strong> { $t(`${gpt.key}.description`) }</p>
                <p class="mb-4"><strong>{ $t('portfolioSection.technologies') }:</strong> { $t(`${gpt.key}.technologies`) }</p>
                <a href={gpt.link} target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-button-gradient text-custom-bg font-semibold rounded-md shadow-custom-button-hover transition-all duration-300 hover:translate-y-[-3px]">
                  { $t('portfolioSection.tryItOut') }
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

  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
