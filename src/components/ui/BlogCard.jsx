import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <article
      className="bg-surface-secondary-light dark:bg-surface-secondary-dark/90 
                 border border-accent-primary/30 rounded-2xl shadow-sm 
                 hover:shadow-md transition-all duration-300 overflow-hidden 
                 flex flex-col h-[360px]"  // Fixed height for uniformity
    >
      {/* Banner */}
      <div className="w-full h-36 overflow-hidden p-2">
        <img
          src={blog.banner}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-neutral-dark dark:text-neutral-light text-sm mb-3 line-clamp-3">
            {blog.summary}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm mt-auto">
          <span className="text-xs text-neutral-muted">{blog.date}</span>
          <a
            href={blog.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-accent-primary hover:text-accent-secondary transition-colors font-medium"
          >
            Read More <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
