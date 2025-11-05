// src/pages/BlogsPage.jsx
import React, { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AllBlogs from "../components/sections/AllBlogs";
import { guidelinesFilePath, resumeFilePath } from "../configs/staticConfigs";

const BlogsPage = () => {
  return (
    <div className="app-container font-body transition-colors duration-500 fade-in">
      <Header />

      <main className="space-y-24 fade-in">
        <AllBlogs />
      </main>

      <Footer
        guidelinesFilePath={guidelinesFilePath}
        resumeFilePath={resumeFilePath}
      />
    </div>
  );
};

export default BlogsPage;
