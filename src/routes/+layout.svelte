<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css";

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { config } from '@fortawesome/fontawesome-svg-core';
  import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

  // Prevent Font Awesome from adding its CSS since we did it manually above
  config.autoAddCss = false;

  // Add all icons to the library (you can add only specific icons to reduce bundle size)
  library.add(fab, fas);

</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3M4K8Q1D10"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3M4K8Q1D10');
  </script>

  <!-- Google Fonts -->
  <!-- Orbitron -->
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <!-- Exo 2 -->
  <link
    href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;800&display=swap"
    rel="stylesheet"
  />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>

<slot />
