import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { FaMagnifyingGlassChart  } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { IoMdChatbubbles } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidUserBadge } from "react-icons/bi";
import { CiGrid42 } from "react-icons/ci";

export const navMapping = {
  "/": {
    navItems: [
      { name: "Home", href: "#home", icon: FaHome},
      { name: "Projects", href: "#featured-projects", icon: FaMagnifyingGlassChart },
      { name: "Insights", href: "#latest-insights", icon: TbBulbFilled },
      { name: "About", href: "#about", icon: BiSolidUserBadge },
      { name: "Contact", href: "#contact", icon: IoMdChatbubbles },
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
    singlePageNavItems: [
      { name: "Home", href: "/", icon: FaHome },
      { name: "Project Gallery", href: "/projects", icon: CiGrid42 },
    ]
  }
};

{/* Add more social icons as needed */}
export const socialLinks = [
  { icon: SiGmail, href: "mailto:maity.animesh157@gmail.com", label: "maity.animesh157@gmail.com" },
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
