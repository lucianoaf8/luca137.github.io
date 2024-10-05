<!-- src/lib/components/Hero.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
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

  // Tilt Effect Variables
  let card;
  let rotationX = 0;
  let rotationY = 0;

  const handleMouseMove = (event) => {
    const cardRect = card.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;
    const centerX = cardRect.left + cardWidth / 2;
    const centerY = cardRect.top + cardHeight / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (+15 * mouseY) / (cardHeight / 2);
    const rotateY = (-15 * mouseX) / (cardWidth / 2);

    rotationX = Math.max(-15, Math.min(15, rotateX));
    rotationY = Math.max(-15, Math.min(15, rotateY));

    card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  const handleMouseEnter = () => {
    card.style.transition = 'transform 0.1s ease';
    isHovered = true;
    startRain();
  };

  const handleMouseLeave = () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    isHovered = false;
    stopRain();
  };

  // Digital Rain Variables
  let canvas;
  let ctx;
  let animationId;
  let columns;
  let drops;
  const fontSize = 14; // Reduced font size for less density
  let numColumns;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-/~{[|`]}';

  let isHovered = false;

  const startRain = () => {
    if (canvas) {
      canvas.width = card.clientWidth;
      canvas.height = card.clientHeight;
      ctx = canvas.getContext('2d');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      numColumns = Math.floor(canvas.width / fontSize);
      columns = [];
      for (let x = 0; x < numColumns; x++) {
        columns[x] = 1;
      }

      drops = [];
      for (let x = 0; x < numColumns; x++) {
        drops[x] = 0;
      }

      animationId = requestAnimationFrame(draw);
    }
  };

  const stopRain = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const draw = () => {
    if (!ctx || !isHovered) return;

    // Semi-transparent background for trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green color with higher transparency
    ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Reset drop position randomly to reduce density
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) { // Increased threshold
        drops[i] = 0;
      }

      drops[i]++;
    }

    animationId = requestAnimationFrame(draw);
  };

  onDestroy(() => {
    stopRain();
  });
</script>

<section class="hero relative min-h-screen flex justify-center items-center overflow-hidden bg-radial-gradient">

  <div class="content relative z-10 p-8 perspective-1000">
    <div
      bind:this={card}
      class="card bg-card-gradient p-16 rounded-md shadow-custom-card transform rotate-x-5deg rotate-y--5deg transition-all duration-300 ease group"
      on:mousemove={handleMouseMove}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >
      <!-- Canvas for Digital Rain -->
      <canvas
        bind:this={canvas}
        class="digital-rain absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      <div class="hero-image-container mb-16 flex justify-center relative z-10">
        <div class="hero-image relative w-32 h-32 md:w-48 md:h-48 perspective">
          <img
            src="/images/profile_image.jpeg"
            alt="Luca in Profile"
            class="w-full h-full object-cover rounded-full pulsate transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
          />
        </div>
      </div>

      <div class="hero-text text-center mt-4 relative z-10">
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

  /* Content */
  .content {
    perspective: 1000px;
  }

  /* Card Styles with Tilt and Digital Rain Effect */
  .card {
    position: relative;
    background: linear-gradient(145deg, #2F2F2F, #3F3F3F);
    padding: 3rem;
    border-radius: 0.375rem;
    box-shadow: 20px 20px 60px #1a1a1a, -20px -20px 60px #242424;
    transform: rotateX(5deg) rotateY(-5deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
    overflow: hidden;
  }

  .card:hover {
    box-shadow: 0 10px 30px rgba(0, 255, 128, 0.1);
  }

  /* Canvas for Digital Rain */
  .digital-rain {
    pointer-events: none;
    z-index: 1; /* Lower than content */
    opacity: 0.6; /* Reduced opacity */
    
  }

  /* Hero Image */
  .hero-image {
    transition: transform 0.3s ease;
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
</style>
