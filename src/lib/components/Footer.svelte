<!-- src/lib/components/Footer.svelte -->
<script>
  import { t } from 'svelte-i18n'; // Import the `t` function from svelte-i18n
  import '../../i18n.js'; // Initialize i18n (adjust the path if necessary)
</script>

<footer class="py-10 bg-hero-gradient text-custom-text relative overflow-hidden">
  <!-- Rotating Radial Gradient Overlay -->
  <div class="absolute inset-0 top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient"></div>

  <div class="container mx-auto relative z-10">
    <div class="footer-content font-exo text-lg flex flex-col items-center space-y-4">
      <p class="hover:text-custom-accent-dark transition-colors duration-300">
        { $t('footer.copyright') }
      </p>
      <p class="hover:text-custom-accent-dark transition-colors duration-300">
        { $t('footer.designedWith') }
      </p>
    </div>
  </div>
</footer>

<style>
  /* Footer Component Specific Styles */

  /* Additional customizations if needed */
</style>
