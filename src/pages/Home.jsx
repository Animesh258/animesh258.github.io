import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import BlogsSection from "../components/sections/BlogsSection";
import ContactSection from "../components/sections/ContactSection";
import { guidelinesFilePath, resumeFilePath } from "../configs/staticConfigs";

const Home = () => {

  return (
    <div className="app-container font-body transition-colors duration-500">
      <Header />

      <main className="space-y-24 fade-in">
        <HeroSection />
        <ProjectsSection />
        <BlogsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer
        guidelinesFilePath={guidelinesFilePath}
        resumeFilePath={resumeFilePath}
      />
    </div>
  );
};

export default Home;
