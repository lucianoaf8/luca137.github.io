<script>
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faCode, faChartBar, faRobot, faDatabase, faBrain, faCogs, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

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
  ];
</script>

<section id="skills" class="py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>
    <ul class="skills-list flex flex-wrap justify-center gap-6">
      {#each skills as skill}
        <li class="flex items-center bg-[#0D1F26] border border-[#4CE5D8] rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:bg-[#253D52]">
          <FontAwesomeIcon icon={skill.icon} class="mr-3 text-2xl" />
          <span class="text-lg">{skill.label}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* No additional styles needed as Tailwind handles most styling */
</style>
