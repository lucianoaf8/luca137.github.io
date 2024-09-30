import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set } = writable('dark');  // Set default to 'dark'

  return {
    subscribe,
    setTheme: (theme) => {
      set(theme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    },
    initialize: () => {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          set(storedTheme);
        } else {
          // If no theme is stored, default to dark
          set('dark');
          localStorage.setItem('theme', 'dark');
        }
      }
    }
  };
}

export const theme = createThemeStore();