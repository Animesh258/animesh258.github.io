import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { FaMagnifyingGlassChart  } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { IoMdChatbubbles } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { matchPath } from 'react-router-dom';

export const navMapping = {
  "/": {
    navItems: [
      { name: "Home", href: "#home", icon: FaHome},
      { name: "About", href: "#about", icon: FaInfoCircle},
      { name: "Projects", href: "#projects", icon: FaMagnifyingGlassChart},
      { name: "Insights", href: "#blogs", icon: TbBulbFilled },
      { name: "Contact", href: "#contact", icon: IoMdChatbubbles},
    ],
    showFooterNavs: true,
  },
  "/blogs": {
    navItems: [
      { name: "Home", href: "/", icon: FaHome },
    ],
    showFooterNavs: false,
  },
  "/projects": {
    navItems: [
      { name: "Home", href: "/", icon: FaHome },
    ],
    showFooterNavs: false,
  }
};

export const pathPatterns = {
  "/projects/:projectId": "/projects"
};

export const getBasePath = (initialPath) => {
    // 1. Declare and initialize the variable we will modify.
    let pathnameToCheck = initialPath;

    // 2. Iterate directly over the keys of pathPatterns (the path patterns).
    for (const pathPattern of Object.keys(pathPatterns)) {
        
        // 3. Check for a match using the external function.
        const isMatch = matchPath(pathPattern, pathnameToCheck);
        
        // 4. If a match is found, update the path to the base path defined in the map.
        if (isMatch) {
            pathnameToCheck = pathPatterns[pathPattern];
            // Since we found a match, we can stop and return immediately.
            return pathnameToCheck; 
        }
    }

    // 5. If no pattern matched, return the original path.
    return pathnameToCheck;
};

{/* Add more social icons as needed */}
export const socialLinks = [
  { icon: SiGmail, href: "mailto:maity.animesh157@gmail.com", label: "Email" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/animesh-maity-5ab563376/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Animesh258", label: "GitHub" },
];

export const guidelinesFilePath = "/assets/brand-assets/docs/AM-Anilytic-Arc-Brand-Guidelines.pdf";
export const resumeFilePath = "/assets/docs/AM-Resume-Animesh-Maity.pdf";

export const navigateToGuideline = () => window.open(guidelinesFilePath, "_blank");
export const navigateToResume = () => window.open(resumeFilePath, "_blank");

export const safeNavItems = [{ name: "Home", href: "/" }];

export const projectBannerBasePath = "/assets/images/project-banners/";
export const blogBannerBasePath = "/assets/images/blog-banners/";
export const defaultBannerImage = "/assets/images/AM-Default-Banner.png";
