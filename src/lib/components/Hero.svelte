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

  function initializeHero() {
    console.log('Hero component initialized');
  }

  onMount(() => {
    initializeHero();
  });

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

<section id="home" class="py-10 md:py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto px-4 flex flex-col items-center justify-center">
    <div class="info-card border-2 border-custom-text rounded-lg shadow-2xl py-10 px-6 md:pt-20 md:pb-24 md:px-40 bg-black bg-opacity-40 hover:animate-wiggle w-full max-w-3xl">
      <div class="hero-image-container mb-8 flex justify-center">
        <div class="hero-image relative w-32 h-32 md:w-48 md:h-48 perspective">
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

      <div class="hero-text text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-2 hover:text-[#4CE5D8] transform hover:scale-105 transition duration-300 ease-in-out">
          Luciano Almeida
        </h1>
        <div class="separator w-3/4 h-1 bg-[#4CE5D8] mx-auto mb-4"></div>
        <p class="text-lg md:text-xl mb-4">AI Development, Data & Prompt Engineering</p>
        <div class="social-links flex flex-wrap justify-center gap-4">
          {#each socialLinks as link}
            <a
              href="{link.href}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="{link.label}"
              class="social-link"
              style="--hover-color: {link.hoverColor};"
            >
              <FontAwesomeIcon icon="{link.icon}" class="text-2xl md:text-3xl" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .perspective {
    perspective: 1000px;
  }

  .flip-container {
    position: relative;
    width: 100%;
    height: 100%;
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

  .hero-image-container:hover .flipper {
    transform: rotateY(180deg);
  }

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

  .social-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .social-link {
    color: #4CE5D8;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .social-link:hover {
    transform: scale(1.3);
  }

  :global(.social-link:hover svg) {
    color: var(--hover-color);
  }

  :global(.social-link svg) {
    color: inherit;
  }

  .separator {
    border: none;
    height: 2px;
    background-color: #4CE5D8;
  }

  @media (max-width: 640px) {
    .info-card {
      padding: 1.5rem;
    }

    .hero-image-container {
      margin-bottom: 1rem;
    }

    .social-links {
      gap: 0.75rem;
    }
  }
</style>