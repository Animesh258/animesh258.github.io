import React, { useState, useMemo } from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "../ui/ProjectCard";
import { FaSearchPlus } from "react-icons/fa";

const getUniqueCategories = (data) => {
  const categories = new Set(data.map((p) => p.category));
  return ["All Work", ...Array.from(categories)];
};

const AllProjects = () => {
  const categories = useMemo(() => getUniqueCategories(projectsData), []);
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter by category and search term
  const filteredProjects = useMemo(() => {
    let result =
      activeFilter === "All Work"
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter);

    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter((p) =>
        [p.title, p.category, p.summary, p.longDescription]
          .join(" ")
          .toLowerCase()
          .includes(lowerSearch)
      );
    }

    return result;
  }, [activeFilter, searchTerm]);

  return (
    <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl font-display font-bold">
            The Arc's Project Gallery
          </h2>

          {/* 🔍 Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full px-4 py-2 rounded-lg
                bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]
                placeholder-[var(--color-text-primary)]/50
                border border-[var(--color-border-muted)]/50 focus:border-accent-primary
                focus:ring-2 focus:ring-accent-primary/50 focus:outline-none
                transition-all duration-300
              "
            />
            <span className="absolute right-3 top-2.5 text-accent-primary/50">
              <FaSearchPlus className="text-lg"/>
            </span>
          </div>
        </div>

        {/* Filtering Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-[var(--color-border-muted)] pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-accent-primary text-white shadow-md"
                  : "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-text-primary)]/10 text-[var(--color-text-primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFixed={true} />
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--color-text-primary)] mt-10 text-lg">
            No projects found matching your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
