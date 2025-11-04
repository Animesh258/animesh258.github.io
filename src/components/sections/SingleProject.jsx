import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";
import { projectBannerBasePath, defaultBannerImage } from "../../configs/staticConfigs";
import { FaArrowRight } from "react-icons/fa";

// Helper function to resolve the image path from the public folder
const getPublicImagePath = (imageName) => {
    if (!imageName) return defaultBannerImage; // Fallback image
    return `${projectBannerBasePath}${imageName}`;
};

const SingleProject = () => {
    const { projectId } = useParams(); // Get ID from URL /projects/:projectId
    const project = projectsData.find(p => p.id === parseInt(projectId));

    if (!project) {
        return (
            <div className="pt-36 text-center min-h-screen">
                <h2 className="text-3xl font-heading">Project Not Found</h2>
                <a href="/projects" className="mt-4 block">
                    &larr; Go to All Projects
                </a>
            </div>
        );
    }
    
    // Assuming a 'longDescription' and 'fullImageName' exist in the JSON for the case study
    const fullImagePath = getPublicImagePath(project.fullImageName || project.bannerImageName);

    return (
        <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Navigation */}
                <div className="mb-10 flex justify-between items-center text-sm">
                    <a href="/projects" className="text-accent-secondary hover:text-accent-primary transition-colors">
                        &larr; Back to All Projects
                    </a>
                    <a href="/" className="text-accent-secondary hover:text-accent-primary transition-colors">
                        Home
                    </a>
                </div>
                
                {/* Project Header */}
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
                    {project.title}
                </h1>
                <p className="text-xl text-neutral-dark mb-6">
                    {project.summary}
                </p>

                {/* Case Study Banner Image */}
                <img 
                    src={fullImagePath} 
                    alt={project.title} 
                    className="w-full h-auto rounded-xl shadow-2xl mb-10"
                />

                {/* Project Details (Simulated Case Study Content) */}
                <div className="prose dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-heading">The Ani-Lytic Arc: Process & Metamorphosis</h2>
                    <p>
                        This is where the detailed storytelling, covering the **problem statement, data cleaning ('Raw to Bronze'), analytical methods, design challenges, and final impact** will be documented. This section highlights the **'how'**—the crucial element recruiters look for.
                    </p>
                    
                    {/* Placeholder for long description content */}
                    <p>{project.longDescription || "Full case study content to be populated here. Focus on: Problem, Data Sources, Methodology, Tools Used (Python/Power BI), Design Choices, and Measurable Impact."}</p>
                    
                    {/* Key Metrics/Skills section */}
                    <h3 className="text-2xl font-heading mt-8">Skills & Technology</h3>
                    <ul>
                        {project.techStack?.map((skill, index) => (
                            <li key={index}><strong>{skill}</strong></li>
                        ))}
                        <li><strong>Core Competency:</strong> {project.category}</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex space-x-4 border-t pt-6 border-gray-700/50">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-lg">
                            View Code on GitHub <FaArrowRight size={16} className="inline-block" />
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SingleProject;