import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

// The Context and Hook
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme from local storage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    // Check system preference if no stored theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Function to toggle the theme
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  // Effect to manage theme class on <html> element and local storage
  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

  }, [theme]); // Re-run whenever theme state changes

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
