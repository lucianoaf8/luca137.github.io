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
    <!-- Brand Name with Enhanced Styles -->
    <a href="#home" class="brand-name-gradient text-transparent bg-clip-text bg-gradient-to-r from-[#00FF80] via-[#00CC66] to-[#00FF80] hover:from-[#00FF80] hover:via-[#00CC66] hover:to-[#00FF80] transition-colors duration-300 shadow-lg">
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

  /* Optimized Gradient Text */
  .brand-name-gradient {
    font-size: 2.5rem; /* Maintain increased font size */
    font-weight: 800; /* Maintain boldness */
    font-family: 'Orbitron', sans-serif; /* Maintain custom font */
    text-shadow: 0 0 10px rgba(0, 255, 128, 0.7), 0 0 0 rgba(0, 255, 128, 0.5); /* Retain text shadow */
  }

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

    .brand-decorated::before,
    .brand-decorated::after {
      display: none; /* Hide decorative lines on smaller screens */
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

  /* Accent Light for Brand Hover */
  .hover\:text-accent-light:hover {
    color: #00CC66; /* Slightly darker accent on hover */
  }
</style>
