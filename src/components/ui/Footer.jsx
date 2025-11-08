import React from "react";
import { Link } from "react-router-dom";
import { navMapping, safeNavItems, socialLinks } from "../../configs/staticConfigs";
import { useLocation } from "react-router-dom";
import Tooltip from "../common/Tooltip";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const basePath = location.pathname;

  const currentMapping = navMapping[basePath] || {};
  const showFooterNavs = currentMapping.showFooterNavs;
  const navItems = showFooterNavs ? (currentMapping.navItems || safeNavItems) : safeNavItems;  

  const handleNavClick = (href) => {

    if (href.startsWith("#")) {
      // If same-page anchor — smooth scroll and update hash manually
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash manually (so it appears in the address bar)
        window.location.hash = href;
      }
    } else {
      // If navigating to a different page
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-accent-primary/30 text-[var(--color-text-primary)] py-10 mt-20 transition-colors duration-500">
      <div
        className="
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          flex flex-col items-center space-y-10
          lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0
          text-center lg:text-left
        "
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start justify-center h-36">
          {/* Full logo for small screens */}
          <img
            src="/assets/brand-assets/logos/AM-Logo-Hyb-Full-Dark-On-Light.svg"
            alt="Animesh Maity Logo (full - light theme)"
            className="
              block lg:hidden dark:hidden h-full w-auto transition-transform duration-300 hover:scale-105
              border-b border-support-muted/20 pb-4
            "
          />
          <img
            src="/assets/brand-assets/logos/AM-Logo-Hyb-Full-Light-On-Dark.svg"
            alt="Animesh Maity Logo (full - dark theme)"
            className="
              hidden lg:hidden dark:block lg:dark:hidden h-full w-auto transition-transform duration-300 hover:scale-105
              border-b border-support-muted/20 pb-4
            "
          />

          {/* Icon logo for md+ */}
          <img
            src="/assets/brand-assets/logos/AM-Logo-Vert-Tag-Dark-On-Light.svg"
            alt="Animesh Maity Icon (light theme)"
            className="hidden lg:block dark:hidden h-full w-auto transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/assets/brand-assets/logos/AM-Logo-Vert-Tag-Light-On-Dark.svg"
            alt="Animesh Maity Icon (dark theme)"
            className="hidden lg:dark:block h-full w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation — hidden on small screens */}
        <div className="hidden lg:block">
          <h3 className="font-heading mb-3 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => {
              // Only render an item if it has either 'href' or 'to' defined
              if (!item.href && !item.to) return null;

              const linkProps = item.href 
                ? { onClick: () => handleNavClick(`${item.href}`) } 
                : { to: item.to };

              return (
                <li key={item.name.toLowerCase()}>
                  <Link
                    {...linkProps} // Spreads either onClick or to prop
                    className="hover:text-accent-secondary transition-colors duration-300"
                  >
                    {item.icon && <item.icon className="inline-block mr-2 w-4 h-4" />}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Brand Resources — hidden on small screens */}
        <div className="hidden lg:block">
          <h3 className="font-heading mb-3 text-lg">Documents</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={props.guidelinesFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-secondary transition-colors duration-300"
              >
                Identity Kit
              </a>
            </li>
            <li>
              <a
                href={props.resumeFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-secondary transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-heading mb-3 text-lg">Connect</h3>
          <div className="flex justify-center lg:justify-start gap-5 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <Tooltip key={idx} label={label} side="bottom">
                <a
                  key={idx}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  area-label={label}
                  className="hover:text-accent-secondary transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-accent-primary/20 mt-8 pt-4 text-center text-xs">
        © {currentYear} Animesh Maity. Built with React, Vite, and Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
