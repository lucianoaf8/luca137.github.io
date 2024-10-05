<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

  let isMenuOpen = false;

  // Reactive declaration using Svelte's $ prefix
  $: isDarkMode = $theme === 'dark';

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleClickOutside(event) {
    if (!event.target.closest('#header') && isMenuOpen) {
      isMenuOpen = false;
    }
  }

  function toggleTheme() {
    theme.setTheme(isDarkMode ? 'light' : 'dark');
  }

  onMount(() => {
    window.addEventListener('click', handleClickOutside);
    theme.initialize();
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header id="header" class="bg-secondary-bg text-primary-text fixed w-full z-50 shadow-lg shadow-green-glow bg-radial-gradient">
  <nav class="container mx-auto flex items-center justify-between p-4 top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient">
    <!-- Brand Name with Shadow and Depth -->
    <a href="#home" class="text-2xl font-orbitron text-accent hover:text-accent-light transition-colors duration-300 shadow-lg">
      Luca137
    </a>

    <!-- Navigation Menu -->
    <ul class={`menu flex flex-col md:flex-row md:items-center transition-all duration-300 ease-in-out ${
      isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:opacity-100 md:max-h-none'
    } md:flex md:space-x-0`}>
      <li>
        <a href="#home" class="menu-link group relative">
          Home
        </a>
      </li>
      <li>
        <a href="#portfolio" class="menu-link group relative">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#skills" class="menu-link group relative">
          Skills
        </a>
      </li>
      <li>
        <a href="#contact" class="menu-link group relative">
          Contact
        </a>
      </li>
      <li class="md:ml-4">
        <a href="https://blog.luca137.com" target="_blank" rel="noopener noreferrer" class="external-link">
          Blog
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </li>
      <li class="md:ml-2">
        <a href="https://newsletter.luca137.com" target="_blank" rel="noopener noreferrer" class="external-link">
          Newsletter
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </li>
      <li>
        <!-- Theme Toggle Button -->
        <button on:click={toggleTheme} class="relative inline-flex items-center p-1 rounded-full w-14 h-8 transition-colors duration-300 focus:outline-none bg-accent" aria-label="Toggle theme">
          <span class="sr-only">Toggle theme</span>
          <span class={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 transform ${isDarkMode ? 'translate-x-6 bg-primary-bg' : 'bg-secondary-bg'}`}></span>
          
          <!-- Conditionally Render Icons -->
          {#if isDarkMode}
            <FontAwesomeIcon icon={faMoon} class="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-primary-bg" />
          {:else}
            <FontAwesomeIcon icon={faSun} class="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-secondary-bg" />
          {/if}
        </button>
      </li>
    </ul>

    <!-- Hamburger Menu Icon -->
    <button
      id="hamburger-menu"
      class="hamburger-menu md:hidden flex flex-col space-y-1 cursor-pointer focus:outline-none"
      on:click={toggleMenu}
      aria-label="Toggle Menu"
      type="button"
    >
      <div
        class={`hamburger-line w-6 h-0.5 bg-primary-text transform transition-transform duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></div>
      <div
        class={`hamburger-line w-6 h-0.5 bg-primary-text transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        class={`hamburger-line w-6 h-0.5 bg-primary-text transform transition-transform duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></div>
    </button>
  </nav>
</header>

<!-- Spacer to prevent content from being hidden behind the fixed header -->
<div class="h-16 md:h-20"></div>

<style>
  /* Header Component Specific Styles */

  /* Menu Link Styles with Custom Hover Effect */
  .menu-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: transparent;
    color: #00FF80; /* accent */
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
    position: relative;
    overflow: hidden;
  }

  .menu-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #00FF80; /* accent */
    transition: all 0.3s ease;
    z-index: -1;
  }

  .menu-link:hover::before {
    left: 0;
  }

  .menu-link:hover {
    color: #1F1F1F; /* primary-bg */
  }

  /* External Link Styles */
  .external-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: transparent;
    color: #00FF80; /* accent */
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
    position: relative;
    overflow: hidden;
  }

  .external-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #00FF80; /* accent */
    transition: all 0.3s ease;
    z-index: -1;
  }

  .external-link:hover::before {
    left: 0;
  }

  .external-link:hover {
    color: #1F1F1F; /* primary-bg */
  }

  /* Hamburger Menu Transitions */
  .hamburger-line {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .menu {
      flex-direction: column;
      align-items: center;
      background-color: #2F2F2F; /* secondary-bg */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 0;
    }

    .menu-link,
    .external-link {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

    .external-link {
      margin-top: 1rem;
    }
  }

  /* Sheen Effect for Navigation Links */
  .menu-link::after,
  .external-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #00FF80; /* accent */
    transition: width 0.3s ease;
  }

  .menu-link:hover::after,
  .external-link:hover::after {
    width: 100%;
  }

  /* Custom Font for Brand Name with Shadow */
  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 255, 128, 0.5);
  }

  /* Accent Light for Brand Hover */
  .hover\:text-accent-light:hover {
    color: #00CC66; /* Slightly darker accent on hover */
  }
</style>
