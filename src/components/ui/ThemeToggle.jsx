import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Correct path from src/components/ui to src/context
import { MdSunny } from "react-icons/md";
import { BiSolidMoon } from "react-icons/bi";
import Tooltip from '../common/Tooltip';

/**
 * ThemeToggle component renders a button to switch between light and dark themes.
 * It uses the theme state and toggle function from ThemeContext.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Tooltip key="Theme" label="Change Theme" side="bottom">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className="
          p-2 rounded-full transition-colors duration-300 
        
          /* Base Opacity Classes */
          bg-support-light bg-opacity-80 dark:bg-neutral-dark dark:bg-opacity-80 
          
          /* Text Color */
          text-neutral-dark dark:text-support-gold 
          
          /* CORRECTED Hover State Opacity */
          hover:bg-support-light hover:bg-opacity-40 
          dark:hover:bg-neutral-dark dark:hover:bg-opacity-40 
          
          /* Focus/Ring */
          focus:outline-none focus:ring-2 focus:ring-accent-primary"
      >
        {isDark ? (
          <MdSunny className="h-5 w-5 fill-support-gold stroke-support-gold transition-transform duration-300 hover:rotate-45" />
        ) : (
          <BiSolidMoon className="h-5 w-5 fill-neutral-dark stroke-neutral-dark transition-transform duration-300 hover:rotate-45" />
        )}
      </button>
    </Tooltip>
  );
};

export default ThemeToggle;
