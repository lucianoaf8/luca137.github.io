// svelte.config.js
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Optional: specify adapter options here
      // pages: 'build',
      // assets: 'build',
      // fallback: null
    }),
    prerender: {
      default: true
    }
  }
};

export default config;
