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

<section class="hero relative min-h-screen flex justify-center items-center overflow-hidden top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient">

  <div class="content relative z-10 p-8 perspective-1000">
    <div class="card bg-card-gradient p-16 rounded-md shadow-custom-card transform rotate-x-5deg rotate-y--5deg transition-all duration-300 ease group hover:rotate-x-0 hover:rotate-y-0 hover:shadow-custom-card-hover">
      <div class="hero-image-container mb-16 flex justify-center">
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

      <div class="hero-text text-center mt-4">
        <h1 class="font-orbitron text-5xl mb-4 bg-gradient-to-r from-custom-gray-3F to-custom-accent bg-clip-text text-transparent tracking-widest moving-gradient-text">
          Luciano Almeida
        </h1>
        <div class="holographic-line"></div>
        <p class="text-lg md:text-xl mb-8 text-custom-text">
          AI Development | Data & Prompt Engineering
        </p>
        <div class="social-links flex flex-wrap justify-center gap-4 mt-6">
          {#each socialLinks as link}
            <a
              href="{link.href}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="{link.label}"
              class="social-link relative inline-flex items-center justify-center w-12 h-12 bg-custom-bg rounded-full transition-transform duration-300 ease hover:scale-110 hover:shadow-custom-button-hover group-hover:rotate-[360deg]"
              style="--hover-color: {link.hoverColor};"
            >
              <FontAwesomeIcon icon="{link.icon}" class="text-2xl md:text-3xl text-custom-accent transition-colors duration-300 ease-in-out" />
              <span class="sr-only">{link.label}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Orbitron:wght@400;700&display=swap');

  /* Flip Animation */
  .flip-container {
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .flip-container:hover .flipper {
    transform: rotateY(180deg);
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
    backface-visibility: hidden;
    border-radius: 50%;
  }

  .back {
    transform: rotateY(180deg);
  }

  /* Pulsate Animation */
  .pulsate {
    animation: pulsate 3s infinite ease-in-out;
  }

  @keyframes pulsate {
    0% {
      transform: scale(1);
      box-shadow: 0 0 10px #00FF80;
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px #00FF80;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 10px #00FF80;
    }
  }

  /* Moving Gradient Animation */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  .moving-gradient-text {
    background: linear-gradient(90deg, #00FF80, #00CC66, #C0C0C0, #00FF80);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 5s linear infinite;
  }

  /* Holographic Line */
  .holographic-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00FF80, #00CC66, #00FF80, transparent);
    margin: 1rem auto;
    position: relative;
    overflow: hidden;
  }

  /* Social Links */
  .social-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 0%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s ease;
    z-index: 0;
  }

  .social-link:hover::before {
    width: 200%;
    height: 200%;
  }

  .social-link svg {
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 5px rgba(0, 255, 128, 0.5));
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  /* Ensuring the card has a smooth transition */
  .card {
    transition: all 0.3s ease;
    padding: 6rem;
  }

  /* Rotating Background Effect */
  .hero-rotating-bg {
    background: radial-gradient(circle, rgba(0, 255, 128, 0.03) 0%, rgba(31, 31, 31, 0) 70%);
    animation: rotate 20s linear infinite;
  }
</style>
