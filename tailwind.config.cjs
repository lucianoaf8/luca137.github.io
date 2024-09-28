/** @type {import('tailwindcss').Config} */
module.exports = {
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
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
};
