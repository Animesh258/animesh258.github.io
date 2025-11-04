import React, { useState, useMemo } from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "../ui/ProjectCard";

const getUniqueCategories = (data) => {
    const categories = new Set(data.map(p => p.category));
    return ["All Work", ...Array.from(categories)];
};

const AllProjects = () => {
    const categories = useMemo(() => getUniqueCategories(projectsData), []);
    const [activeFilter, setActiveFilter] = useState("All Work");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All Work") {
            return projectsData;
        }
        return projectsData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header and Back Link */}
                <div className="mb-10 flex justify-between items-center">
                    <h2 className="text-4xl font-display font-bold">
                        The Full Arc Gallery
                    </h2>
                    <a href="/#projects" className="transition-colors">
                        &larr; Back to Home
                    </a>
                </div>

                {/* Filtering Tabs */}
                <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-700 pb-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeFilter === category
                                    ? "bg-accent-primary text-white shadow-md"
                                    : "bg-[var(--color-bg-secondary)] hover:bg-gray-700/50 text-[var(--color-text-primary)]"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid (Flexible Height/Masonry Style) 
                    NOTE: Using standard Tailwind grid here; a true masonry layout 
                    might require a library or custom CSS columns, but this is a good start.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} isFixed={false} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;