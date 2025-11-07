import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projects.json";
import { projectBannerBasePath, defaultBannerImage } from "../../configs/staticConfigs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

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
                <h2 className="text-xl font-heading">Project Not Found</h2>
                <Link to="/projects" className="mt-4 block">
                    <FaArrowLeft size={16} className="inline-block" /> Go to All Projects
                </Link>
            </div>
        );
    }
    
    // Assuming a 'longDescription' and 'fullImageName' exist in the JSON for the case study
    const fullImagePath = getPublicImagePath(project.fullImageName || project.bannerImageName);

    return (
        <section className="pt-36 pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Project Header */}
                <h1 className="text-xl md:text-5xl font-display font-bold mb-10">
                    {project.title}
                </h1>
                <div className="text-lg text-neutral-dark mb-6">
                    <ReactMarkdown>{project.summary}</ReactMarkdown>
                </div>

                {/* Case Study Banner Image */}
                <img 
                    src={fullImagePath} 
                    alt={project.title} 
                    className="w-full h-auto rounded-xl shadow-2xl mb-10"
                />

                {/* Project Details (Case Study Content) */}
                <div className="prose dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-heading">The Ani-Lytic Arc: Process & Metamorphosis</h2>
                    <span>
                        <ReactMarkdown>{project.summary}</ReactMarkdown>
                    </span>
                    {/* Placeholder for long description content */}
                    <span>
                        <ReactMarkdown>{project.longDescription}</ReactMarkdown>
                    </span>
                    
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