/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#1F1F1F',
        'custom-bg-gradient-start': '#1F1F1F',
        'custom-bg-gradient-end': '#2F2F2F',
        'custom-text': '#C0C0C0',
        'custom-accent': '#00FF80',
        'custom-accent-dark': '#00CC66',
        'custom-shadow-dark': '#1A1A1A',
        'custom-shadow-light': '#242424',
        'custom-gray-2F': '#2F2F2F',
        'custom-gray-3F': '#3F3F3F',
        'custom-button-gradient-dark': '#00CC66',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        holographicFlow: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        rotate: 'rotate 20s linear infinite',
        rotate360: 'rotate360 1s linear forwards',
        holographicFlow: 'holographicFlow 5s linear infinite',
      },
      boxShadow: {
        'custom-card': '20px 20px 60px #1A1A1A, -20px -20px 60px #242424',
        'custom-card-hover': '0 10px 30px rgba(0, 255, 128, 0.1)',
        'custom-button-hover': '0 0 20px rgba(0, 255, 128, 0.5)',
      },
      backgroundImage: theme => ({
        'hero-gradient': 'linear-gradient(135deg, #1F1F1F 0%, #2F2F2F 100%)',
        'card-gradient': 'linear-gradient(145deg, #2F2F2F, #3F3F3F)',
        'button-gradient': 'linear-gradient(145deg, #00FF80, #00CC66)',
        'button-gradient-dark': 'linear-gradient(145deg, #00CC66, #00FF80)',
        'holographic-line': 'linear-gradient(90deg, transparent, #00FF80, #00CC66, #00FF80, transparent)',
        'radial-gradient': 'radial-gradient(circle, rgba(0, 255, 128, 0.03) 0%, rgba(31, 31, 31, 0) 70%)',
      }),
      dropShadow: {
        'custom-icon': '0 0 5px rgba(0, 255, 128, 0.5)',
      },
      letterSpacing: {
        'extra-wide': '2px',
      },
      spacing: {
        '3px': '3px', // For translate-y-[-3px]
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      dropShadow: ['hover', 'focus'],
      rotate: ['hover', 'group-hover'],
      translate: ['hover'],
      animation: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rotate-x-5deg': {
          transform: 'rotateX(5deg)',
        },
        '.rotate-y--5deg': {
          transform: 'rotateY(-5deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.holographic-line::before': {
          content: "''",
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)',
          animation: 'holographicFlow 5s linear infinite',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
