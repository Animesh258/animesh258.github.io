import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../../data/blogs.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const SingleBlog = () => {
  const { blogId } = useParams();
  const blog = blogsData.find((p) => p.id === parseInt(blogId));

  const extractPostId = (url) => {
    const match = url?.match(/activity-(\d+)/);
    return match ? `urn:li:activity:${match[1]}` : null;
  };

  const postId = extractPostId(blog?.link);

  if (!blog) {
    return (
      <div className="pt-36 text-center min-h-screen">
        <h2 className="text-xl font-heading">Insight Article Not Found</h2>
        <Link to="/blogs" className="mt-4 block">
          <FaArrowLeft size={16} className="inline-block" /> Go to All Insights
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header: image + title + summary + CTA --- */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
          {/* Image */}
          {blog.banner && (
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <img
                src={blog.banner}
                alt={blog.title}
                className="w-auto max-h-[350px] rounded-xl shadow-2xl object-contain"
              />
            </div>
          )}

          {/* Title + summary + CTA */}
          <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl font-display font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.summary && (
              <div className="text-lg text-neutral-dark mb-6">
                <ReactMarkdown>{blog.summary}</ReactMarkdown>
              </div>
            )}

            {/* --- CTA: View on LinkedIn --- */}
            {blog.link && (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-[var(--color-accent)] hover:underline"
              >
                View on LinkedIn <FaArrowRight size={14} />
              </a>
            )}
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="prose dark:prose-invert max-w-none">
          {/* ✅ Responsive LinkedIn embed */}
          {postId ? (
            <div className="linkedin-embed mb-10 aspect-[16/9] w-full max-w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/${postId}`}
                style={{
                  border: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
                allowFullScreen
                title="LinkedIn post"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          ) : (
            <p className="text-support-muted italic mb-10">
              LinkedIn post embed unavailable.
            </p>
          )}

          {/* --- Key Topics --- */}
          {blog.tags?.length > 0 && (
            <>
              <h3 className="text-2xl font-heading my-8">Topics</h3>
              <ul className="flex flex-wrap gap-3">
                {blog.tags.map((topic, index) => (
                  <li
                    key={index}
                    className="bg-support-muted/20 px-4 py-2 rounded-lg text-sm"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
