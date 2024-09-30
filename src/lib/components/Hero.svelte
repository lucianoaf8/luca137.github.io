<!-- src/lib/components/Hero.svelte -->
<script>
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import {
    faLinkedin,
    faGithub,
    faDiscord,
    faReddit,
    faXbox
  } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  // Function to initialize any hero-specific JavaScript logic
  function initializeHero() {
    console.log('Hero component initialized');
    // Add any additional initialization logic here
  }

  onMount(() => {
    initializeHero();
  });

  // Social media links data
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/lucianoaf8/',
      icon: faLinkedin,
      label: 'LinkedIn',
      hoverColor: '#0077B5',
    },
    {
      href: 'https://github.com/lucianoaf8',
      icon: faGithub,
      label: 'GitHub',
      hoverColor: '#4078c0',
    },
    {
      href: 'mailto:luciano@luca137.com',
      icon: faEnvelope,
      label: 'Email',
      hoverColor: '#D44638',
    },
    {
      href: 'https://discord.com/users/tribore8817',
      icon: faDiscord,
      label: 'Discord',
      hoverColor: '#5865F2',
    },
    {
      href: 'https://www.reddit.com/user/lucianoaf8/',
      icon: faReddit,
      label: 'Reddit',
      hoverColor: '#FF4500',
    },
    {
      href: 'https://www.xbox.com/en-CA/play/user/Tribore9015',
      icon: faXbox,
      label: 'Xbox',
      hoverColor: '#107C10',
    },
  ];
</script>

<section id="home" class="py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <!-- Info Card with Border and Shadow -->
    <div class="info-card border-2 border-custom-text rounded-lg shadow-2xl pt-20 pb-24 px-40 bg-black bg-opacity-40 hover:animate-wiggle">
      <!-- Hero Image with Flip Effect -->
      <div class="hero-image-container mb-8 flex justify-center">
        <div class="hero-image relative w-48 h-48 perspective">
          <div class="flip-container w-full h-full">
            <div class="flipper w-full h-full">
              <div class="front absolute w-full h-full backface-hidden">
                <img
                  src="/images/profile_image.jpeg"
                  alt="Luca in Profile"
                  class="w-full h-full object-cover rounded-full pulsate transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                />
              </div>
              <div class="back absolute w-full h-full backface-hidden rotate-y-180">
                <img
                  src="/images/bot-profile.png"
                  alt="Bot Profile"
                  class="w-full h-full object-cover rounded-full pulsate transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Text -->
      <div class="hero-text text-center">
        <h1 class="text-5xl font-bold mb-2 hover:text-[#4CE5D8] transform hover:scale-105 transition duration-300 ease-in-out">
          Luciano Almeida
        </h1>
        <div class="separator w-3/4 h-1 bg-[#4CE5D8] mx-auto mb-4"></div>
        <p class="text-xl mb-4">AI Development, Data & Prompt Engineering</p>
        <!-- Social Links -->
        <div class="social-links flex justify-center gap-4">
          {#each socialLinks as link}
            <a
              href="{link.href}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="{link.label}"
              class="social-link"
              style="--hover-color: {link.hoverColor};"
            >
              <FontAwesomeIcon icon="{link.icon}" class="text-3xl" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Hero Component Specific Styles */

  /* Flip Animation */
  .perspective {
    perspective: 1000px;
  }

  .flip-container {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 50%;
  }

  .front {
    z-index: 2;
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(180deg);
  }

  /* Trigger flip on hover */
  .hero-image-container:hover .flipper {
    transform: rotateY(180deg);
  }

  /* Pulsate Animation */
  @keyframes pulsate {
    0% {
      transform: scale(1);
      box-shadow: 0 0 10px #4CE5D8;
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px #4CE5D8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 10px #4CE5D8;
    }
  }

  .pulsate {
    animation: pulsate 3s infinite ease-in-out;
  }

  /* Social Links Styles */
  .social-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .social-link {
    color: #4CE5D8;
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .social-link:hover {
    transform: scale(1.3);
    /* Removed color: #ffffff to allow icon color to override */
  }

  /* Apply hover color to SVG icons using :global */
  :global(.social-link:hover svg) {
    color: var(--hover-color);
  }

  /* Ensure SVG icons inherit color from parent */
  :global(.social-link svg) {
    color: inherit;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    /* If you have responsive styles specific to Hero component, add them here */
  }

  /* Separator Line */
  .separator {
    border: none;
    height: 2px;
    background-color: #4CE5D8;
  }

</style>
