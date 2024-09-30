<!-- src/lib/components/Header.svelte -->
<script>
  import { onMount } from 'svelte';

  // Reactive variable to manage the menu state
  let isMenuOpen = false;

  // Function to toggle the menu state
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Optional: Close the menu when clicking outside
  function handleClickOutside(event) {
    if (!event.target.closest('#header') && isMenuOpen) {
      isMenuOpen = false;
    }
  }

  onMount(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header id="header" class="bg-[#0A171E] text-[#4CE5D8] fixed w-full z-50 shadow-lg">
  <nav class="container mx-auto flex items-center justify-between p-4">
    <!-- Logo or Brand Name -->
    <a href="#home" class="text-2xl font-extrabold font-exo hover:text-[#7CEFFF] transition-colors duration-300">
      Luca137
    </a>

    <!-- Navigation Menu -->
    <ul
      class={`menu flex flex-col md:flex-row md:items-center transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:opacity-100 md:max-h-none'
      } md:flex md:space-x-6`}
    >
      <li>
        <a href="#home" class="menu-link group relative">
          Home
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7CEFFF] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#portfolio" class="menu-link group relative">
          Portfolio
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7CEFFF] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#skills" class="menu-link group relative">
          Skills
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7CEFFF] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#contact" class="menu-link group relative">
          Contact
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7CEFFF] transition-all duration-300 group-hover:w-full"></span>
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
        class={`hamburger-line w-6 h-0.5 bg-[#4CE5D8] transform transition-transform duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></div>
      <div
        class={`hamburger-line w-6 h-0.5 bg-[#4CE5D8] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        class={`hamburger-line w-6 h-0.5 bg-[#4CE5D8] transform transition-transform duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></div>
    </button>
  </nav>
</header>

<!-- Optional: Spacer to prevent content from being hidden behind the fixed header -->
<div class="h-16 md:h-20"></div>

<style>
  /* Header Component Specific Styles */

  /* Menu Link Styles with Underline Animation */
  .menu-link {
    position: relative;
    text-decoration: none;
    color: #4CE5D8;
    font-size: 1.2rem;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-block;
    padding: 0.25rem 0;
    overflow: visible;
  }

  .menu-link:hover {
    color: #7CEFFF;
    transform: scale(1.05);
  }

  /* External Link Styles */
  .external-link {
    color: #7CEFFF;
    font-size: 1.1rem;
    font-weight: 600;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: rgba(124, 239, 255, 0.1);
  }

  .external-link:hover {
    color: #4CE5D8;
    transform: scale(1.05);
    background-color: rgba(124, 239, 255, 0.2);
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
      background-color: #0A171E;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 0;
    }

    .menu-link, .external-link {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

    .external-link {
      margin-top: 1rem;
    }
  }

  /* Custom Font for Brand Name */
  .font-exo {
    font-family: 'Exo 2', sans-serif;
  }
</style>