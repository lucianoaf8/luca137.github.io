// src/i18n.js
import { register, init } from 'svelte-i18n';

// Register the available locales
register('en', () => import('./i18n/en.json'));
register('pt', () => import('./i18n/pt.json'));

// Initialize the i18n settings
init({
  fallbackLocale: 'en',
  initialLocale: 'en', // Default to English; will be overridden in +layout.svelte
});
