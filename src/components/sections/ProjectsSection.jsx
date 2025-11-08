import React from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "../ui/ProjectCard";
import { useNavigate } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";

const ProjectsSection = () => {
    const navigate = useNavigate();

    // Strategy: Showcase the top 3-4 projects, ensuring they are Data & Insights focused
    const featuredProjects = projectsData
        .filter(p => p.isFeatured) // Assuming a boolean 'isFeatured' flag in JSON
        .slice(0, 4); // Limit to 4 cards

    return (
        <section
            id="featured-projects"
            className="bg-surface-primary-light dark:bg-surface-primary-dark/95 pt-36 pb-20 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-display font-bold mb-10 text-center">
                    The Arc's Featured Projects
                </h2>
                
                {/* Project Grid - Fixed Height for visual balance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} isFixedHeight={true} />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <button
                        className="btn-primary text-lg px-8 py-3"
                        onClick={() => navigate("/projects")}
                    >
                        {/* <CiGrid42 size={20} className="inline-block items-center"/>  */}
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;