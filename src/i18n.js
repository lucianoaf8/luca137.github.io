// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register the available locales
register('en', () => import('./i18n/en.json'));
register('pt', () => import('./i18n/pt.json'));

// Initialize the i18n settings
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
