// src/lib/stores/language.js
import { writable } from 'svelte/store';
import { locale, getLocaleFromNavigator } from 'svelte-i18n';

const language = writable('en');

// Initialize language from localStorage or navigator
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    language.set(savedLanguage);
  } else {
    language.set(getLocaleFromNavigator());
  }
}

// Subscribe to changes in the store and update the locale accordingly
language.subscribe((value) => {
  locale.set(value);
  // Persist the language preference in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', value);
  }
});

export default language;
