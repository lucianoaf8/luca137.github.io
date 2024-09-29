<!-- src/components/ProjectCard.svelte -->
<script>
    export let project;
  </script>
  
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
      <p class="text-gray-600 mb-4">{project.description}</p>
      <a href={project.link} class="text-blue-500 hover:underline">View Project</a>
    </div>
  </div>
  