/** @type {import('tailwindcss').Config} */
import Color from "color"

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Brand core
        'accent-primary': '#008080',   // Deep Teal
        'accent-secondary': '#40E0D0', // Turquoise

        // 🧱 Neutral system
        'neutral-dark': '#333333', // Used as text in light mode / background in dark mode
        'neutral-light': '#F8F8F8', // Used as background in light mode / text in dark mode

        // 🧩 Supportive palette
        'support-muted': '#A9A9A9',  // Gridlines, dividers, disabled states
        'support-warning': '#E8746B', // Alerts / errors
        'support-tertiary': '#6A5ACD', // Deep purple — tertiary accents
        'support-gold': '#CC9900',     // Comparison or baseline
      },

      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },

      backgroundImage: {
        'hero-light': "url('/assets/images/AM-Hero-Section-Banner-For-Light-Theme.png')",
        'hero-dark': "url('/assets/images/AM-Hero-Section-Banner-Background-For-Dark-Theme.png')",
      },
    },
  },
  plugins: [
    // 🌗 Dynamic Link System Plugin
    function ({ addBase, theme }) {
      const primaryHex = theme('colors.accent-primary');
      const secondaryHex = theme('colors.accent-secondary');
      const errorHex = theme('colors.support-warning');
      const infoHex = theme('colors.support-tertiary');
      const warningHex = theme('colors.support-gold');

      // Ensure they're parsed into Color objects
      const primary = Color(primaryHex);
      const secondary = Color(secondaryHex);

      // --- Light Mode: Deep Teal base (contrast-safe on #F8F8F8)
      const lightLink = primary.darken(0.1).saturate(0.2).hex();
      const lightHover = primary.darken(0.25).saturate(0.3).hex();
      const lightVisited = primary.mix(Color('#000'), 0.1).hex();

      // --- Dark Mode: Turquoise base (contrast-safe on #333333)
      const darkLink = secondary.lighten(0.1).saturate(0.15).hex();
      const darkHover = secondary.lighten(0.25).hex();
      const darkVisited = secondary.darken(0.1).desaturate(0.05).hex();

      addBase({
        ':root': {
          /* 🌞 Light Theme Defaults */
          '--color-bg-primary': theme('colors.neutral-light'),
          '--color-text-primary': theme('colors.neutral-dark'),
          '--color-link': lightLink,
          '--color-link-hover': lightHover,
          '--color-link-visited': lightVisited,
          '--color-scroll-primary': primaryHex,
          '--color-scroll-secondary': secondaryHex,
          '--color-toast-success': secondaryHex,
          '--color-toast-error': errorHex,
          '--color-toast-warning': warningHex,
          '--color-toast-info': infoHex,
        },
        '.dark': {
          /* 🌙 Dark Theme Overrides */
          '--color-bg-primary': theme('colors.neutral-dark'),
          '--color-text-primary': theme('colors.neutral-light'),
          '--color-link': darkLink,
          '--color-link-hover': darkHover,
          '--color-link-visited': darkVisited,
          '--color-scroll-primary': secondaryHex,
          '--color-scroll-secondary': primaryHex,
          '--color-toast-success': secondaryHex,
          '--color-toast-error': errorHex,
          '--color-toast-warning': warningHex,
          '--color-toast-info': infoHex,
        },
      });
    },
  ],
}
