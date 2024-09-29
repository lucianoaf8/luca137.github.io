<!-- src/components/SkillCard.svelte -->
<script>
    export let skill;
  </script>
  
  <div class="bg-gray-200 rounded-lg p-6 text-center">
    <h3 class="text-xl font-semibold mb-2">{skill.name}</h3>
    <p class="text-gray-700">{skill.level}</p>
  </div>
  