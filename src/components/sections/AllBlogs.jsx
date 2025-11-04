import React, { useState } from "react";
import blogsData from "../../data/blogs.json";
import BlogCard from "../ui/BlogCard";

const AllBlogs = () => {
    const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogsData.filter((blog) =>
    [blog.title, blog.tags, blog.summary]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-center mb-10">
          The Arc's Insights: My POV
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by title, keyword, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 border border-accent-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-secondary bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
          />
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-support-muted text-lg">
            No blogs found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;