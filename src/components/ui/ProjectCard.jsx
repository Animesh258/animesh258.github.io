import React from "react";
import { Link } from "react-router-dom";
import { projectBannerBasePath, defaultBannerImage } from "../../configs/staticConfigs";
import BadgeTag from "../ui/BadgeTag";
import TechIcon from "./TechIcon";

// Helper function to resolve the image path from the public folder
const getPublicImagePath = (imageName) => {
    // This assumes banner images are stored in public/images/projects/
    if (!imageName) return { defaultBannerImage }; // Fallback image
    return `${projectBannerBasePath}${imageName}`;
};

const ProjectCard = ({ project, isFixedHeight = false }) => {

    const bannerPath = getPublicImagePath(project.bannerImageName);

    // Conditional styling for height
    // Fixed height (h-[28rem]) for featured projects (lg:grid-cols-3 layout), h-auto for gallery to respect image aspect ratio.
    const heightClasses = isFixedHeight
        ? 'h-[22rem] w-full' // Fixed height/width for featured projects
        : 'h-auto'; // Flexible height to maintain image aspect ratio

    return (
        <div
            // Base Card Styles
            className={`
                group relative overflow-hidden rounded-2xl shadow-xl
                bg-accent-primary dark:bg-accent-primary transition-transform
                hover:scale-[1.02] duration-300 transform
                ${heightClasses}
            `}
        >
            {/* 1. Project Banner Image and Title (Visible by default) */}

            <div  className="w-full h-full overflow-hidden flex flex-col p-2">
                {/* Title */}
                <h3 className="
                    text-lg font-heading font-bold leading-snug
                    py-4 px-2 text-neutral-light dark:text-neutral-light
                    h-[25%] flex items-center
                ">
                    {project.title}
                </h3>
                <img
                    src={bannerPath}
                    alt={`Banner image for ${project.title}`}
                    className="w-full h-[75%] rounded-md object-cover object-left transition-opacity duration-700 group-hover:opacity-30"
                    loading="lazy"
                />
            </div>

            {/* 2. Hover Overlay (The "Swipe Up" layer) */}
            
            <div
                className={`
                    absolute inset-0 flex flex-col justify-end p-6 md:p-8
                    bg-gradient-to-t from-neutral-dark to-transparent font-body
                    transition-transform duration-500 ease-in-out
                    transform translate-y-full group-hover:translate-y-0 dark
                `}
            >
                {/* Content Area */}
                <div className="space-y-4">
                    {/* Category & Tech Stack */}
                    <BadgeTag
                        badgeLabel = {`🏷️ ${project.category}`}
                        badgeType="custom"
                        customClasses="text-[var(--color-text-primary)] bg-[var(--color-bg-primary)]"
                    />
                    <div className="hidden md:flex md:flex-row sm:items-center justify-start gap-4">                        
                        {project.techStack.map((tech) => (
                            <TechIcon key={tech} name={tech} size={20} />
                        ))}
                    </div>

                    {/* CTAs - Side-by-side using flex-row and flex-1 */}
                    <div className="flex flex-row gap-3 pt-4 font-body">
                        {/* 1. Read Case Study */}
                        <Link
                            to={`/projects/${project.id}`}
                            // Added flex-1 and inline-flex for proper alignment
                            className="flex-1 inline-flex items-center justify-center space-x-2 text-sm"
                            aria-label={`Read the case study for ${project.title}`}
                        >
                            🕮 Read Case Study
                        </Link>
                        {/* 2. View in repo </> */}
                        {project.githubUrl && <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center space-x-2 text-sm"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            View in Repo ➜
                        </a>}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProjectCard;
