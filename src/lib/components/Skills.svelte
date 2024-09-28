<!-- src/lib/components/Skills.svelte -->
<script>
  import { onMount } from 'svelte';

  // Function to initialize any skills-specific logic
  function initializeSkills() {
    console.log('Skills component initialized');
    // Add any additional initialization logic here if needed
  }

  onMount(() => {
    initializeSkills();
  });

  // Define skills as an array of objects with icon and label
  const skills = [
    { icon: 'fas fa-code', label: 'Python Programming' },
    { icon: 'fas fa-chart-bar', label: 'Data Analysis & Visualization' },
    { icon: 'fas fa-robot', label: 'Prompt Engineering' },
    { icon: 'fas fa-database', label: 'SQL & Database Management' },
    { icon: 'fas fa-brain', label: 'AI Application Development' },
    { icon: 'fas fa-cogs', label: 'Data Processing & Automation' },
    { icon: 'fas fa-balance-scale', label: 'Ethical Decision Making & Data Privacy' },
  ];
</script>

<section id="skills" class="py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>
    <ul class="skills-list flex flex-wrap justify-center gap-6">
      {#each skills as skill}
        <li class="flex items-center bg-[#0D1F26] border border-[#4CE5D8] rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:bg-[#253D52]">
          <i class="{skill.icon} mr-3 text-2xl"></i>
          <span class="text-lg">{skill.label}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* No additional styles needed as Tailwind handles most styling */
</style>
