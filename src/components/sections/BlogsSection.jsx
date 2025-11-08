// src/components/sections/BlogsSection.jsx
import React from "react";
import blogsData from "../../data/blogs.json";
import BlogCard from "../ui/BlogCard";
import { useNavigate } from "react-router-dom";

const BlogsSection = () => {
  const navigate = useNavigate();
  const featuredBlogs = blogsData.slice(0, 3); // only first 3 shown

  return (
    <section
      id="latest-insights"
      className="bg-surface-primary-light dark:bg-surface-primary-dark/95 pt-36 pb-20 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold mb-10">
          The Arc's Insights
        </h2>

        {/* Grid of Featured Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View All Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="btn-primary text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default BlogsSection;
