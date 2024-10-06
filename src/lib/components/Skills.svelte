<script>
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faCode, faChartBar, faRobot, faDatabase, faBrain, faCogs, faBalanceScale, faDesktop, faServer, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

  // Function to initialize any skills-specific logic
  function initializeSkills() {
    console.log('Skills component initialized');
  }

  onMount(() => {
    initializeSkills();
  });

  // Define skills as an array of objects with FontAwesome icons and labels
  const skills = [
    { icon: faCode, label: 'Python Programming' },
    { icon: faChartBar, label: 'Data Analysis & Visualization' },
    { icon: faRobot, label: 'Prompt Engineering' },
    { icon: faDatabase, label: 'SQL & Database Management' },
    { icon: faBrain, label: 'AI Application Development' },
    { icon: faCogs, label: 'Data Processing & Automation' },
    { icon: faBalanceScale, label: 'Ethical Decision Making & Data Privacy' },
    { icon: faDesktop, label: 'Front-End Development' },
    { icon: faServer, label: 'VPS (Server) Managing' },
    { icon: faPuzzlePiece, label: 'Problem Solving' },
  ];
</script>

<section id="skills" class="py-20 bg-hero-gradient text-custom-text relative overflow-hidden">
  <!-- Rotating Radial Gradient Overlay -->
  <div class="absolute inset-0 top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient"></div>

  <div class="container mx-auto relative z-10">
    <h2 class="text-5xl font-orbitron text-center mb-16 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
      Skills
    </h2>
    <ul class="skills-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      {#each skills as skill}
        <li class="flex flex-col items-center bg-card-gradient border border-custom-accent-dark rounded-lg p-6 shadow-custom-card transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-custom-card-hover">
          <FontAwesomeIcon icon={skill.icon} class="text-4xl mb-4 drop-shadow-custom-icon transition-transform duration-500 hover:animate-rotate360" />
          <span class="text-lg font-lato font-semibold text-center">{skill.label}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* Skills Component Specific Styles */

  /* Ensure perspective for potential future 3D effects */
  #skills {
    perspective: 1000px;
  }
</style>