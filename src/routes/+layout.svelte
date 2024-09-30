<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { config } from '@fortawesome/fontawesome-svg-core';
  import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

  let currentTheme = 'dark';  // Set default to 'dark'

theme.subscribe(value => {
  currentTheme = value;
  if (typeof document !== 'undefined') {
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

onMount(() => {
  theme.initialize();
});

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
  <link rel="icon" href="/favicon.ico" />
  <!-- If you have multiple favicon formats, include them as well -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
</svelte:head>

<div class={currentTheme}>
  <slot />
</div>