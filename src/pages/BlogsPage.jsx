// src/pages/BlogsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AllBlogs from "../components/sections/AllBlogs";
import SingleBlog from "../components/sections/SingleBlog";
import { guidelinesFilePath, resumeFilePath } from "../configs/staticConfigs";

const BlogsPage = () => {
  const { blogId } = useParams(); // Get ID from URL /blogs/:blogId

  return (
    <div className="app-container font-body transition-colors duration-500 fade-in">
      <Header
        useSinglePageNav={blogId}
      />

      <main className="space-y-24 fade-in">
        { !blogId &&  <AllBlogs /> }
        { blogId && <SingleBlog /> }
      </main>


      <Footer
        guidelinesFilePath={guidelinesFilePath}
        resumeFilePath={resumeFilePath}
      />
    </div>
  );
};

export default BlogsPage;
