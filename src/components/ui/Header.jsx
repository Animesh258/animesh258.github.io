import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { useLocation } from "react-router-dom";
import { navMapping, navigateToResume, getBasePath } from "../../configs/staticConfigs";
import Tooltip from "../common/Tooltip";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const basePath = getBasePath(location.pathname);



  const navItems = navMapping[basePath]?.navItems || [];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    closeMenu();
    if (href.startsWith("#")) {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // 🎨 Header background logic
  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all smooth duration-100
    ${
      isScrolled
        ? "bg-[var(--color-bg-primary)] shadow-md border-none"
        : "bg-transparent shadow-none border-none"
    }
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2"
        >
          {/* Horizontal Compact Logo - logomark + wordmark */}
          <img
            src={
              theme === "dark"
                ? "/assets/brand-assets/logos/AM-Logo-Hrz-Comp-Light-On-Dark.svg"
                : "/assets/brand-assets/logos/AM-Logo-Hrz-Comp-Dark-On-Light.svg"
            }
            alt="Animesh Maity Logo"
            className="h-16 lg:h-20 w-auto transition-transform duration-600 hover:scale-105"
          />
        </a>

        {/* Right section (Nav + Theme + Menu) */}
        <div className="flex items-center gap-12">
          {/* ------------------------------------------- */}
          {/* 1. Full Navigation (Visible on XL screens) */}
          {/* ------------------------------------------- */}
          <nav className="hidden xl:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-md px-2 font-medium text-[var(--color-text-primary)] hover:text-accent-secondary transition-colors duration-200 flex items-center gap-1"
              >
                {item.icon && <item.icon className="inline-block w-4 h-4" />}
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                navigateToResume();
                closeMenu();
              }}
              className="text-md font-medium flex items-center gap-1 text-[var(--color-text-primary)] hover:text-accent-secondary transition-colors duration-200"
            >
              <GiSkills className="w-4 h-6" /> Resume
            </button>
          </nav>

          {/* ------------------------------------------- */}
          {/* 2. Icon-Only Navigation (Visible on MD and LG screens) */}
          {/* ------------------------------------------- */}
          <nav className="hidden md:flex xl:hidden items-center space-x-2">
            {navItems.map((item) => (
              <Tooltip key={item.name} label={item.name} side="bottom">
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  // Apply the button styling for better hover effect on icons
                  className="p-2 rounded-full text-[var(--color-text-primary)] hover:text-accent-secondary hover:bg-support-muted/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  {/* Only show the icon */}
                  {item.icon && <item.icon className="w-6 h-6" />}
                </a>
              </Tooltip>
            ))}
            <Tooltip key="Resume" label="Resume" side="bottom">
              <button
                onClick={() => {
                  navigateToResume();
                  closeMenu();
                }}
                // Apply the button styling for better hover effect on icon
                className="p-2 rounded-full text-[var(--color-text-primary)] hover:text-accent-secondary hover:bg-support-muted/20 transition-colors duration-200"
                aria-label="Resume"
              >
                {/* Only show the Resume icon */}
                <GiSkills className="w-6 h-6" />
              </button>
            </Tooltip>
          </nav>

          {/* ------------------------------------------- */}
          {/* 3. Theme Toggle & Mobile Menu Button */}
          {/* ------------------------------------------- */}
          <ThemeToggle />
            <Tooltip key="Menu" label="Menu" side="bottom">
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-accent-primary hover:bg-accent-primary/10 transition duration-300"
              >
                {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
              </button>
            </Tooltip>
        </div>
      </div>

      {/* Mobile Menu (Visible on smaller screens: < md) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 flex flex-col gap-2 bg-[var(--color-bg-primary)] border-t border-accent-primary/20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="py-2 text-[var(--color-text-primary)] hover:text-accent-secondary transition-colors"
            >
              {item.icon && <item.icon className="inline-block mr-2 w-4 h-4" />}
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              navigateToResume();
              closeMenu();
            }}
            className="py-2 text-[var(--color-text-primary)] hover:text-accent-secondary transition-colors flex items-center gap-1"
          >
            <GiSkills className="w-4 h-6" /> Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;