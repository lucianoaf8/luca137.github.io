/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*',
  ],
  theme: {
    colors: {
      'custom-bg': '#0D1F26',
      'custom-text': '#4CE5D8',
      'custom-hover': '#7CEFFF',
    },
    scale: {
      '130': '1.3',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out 1', // Reduced duration to 0.3s and it runs only once
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
};
