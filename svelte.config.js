// svelte.config.js
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html',  // Enables SPA mode with a fallback page
      // The following options use default values suitable for GitHub Pages
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH  // Ensures base path is root
    }
  }
};

export default config;
