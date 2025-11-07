// src/pages/ProjectsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AllProjects from "../components/sections/AllProjects";
import SingleProject from "../components/sections/SingleProject";
import { guidelinesFilePath, resumeFilePath } from "../configs/staticConfigs";

const ProjectsPage = () => {
    const { projectId } = useParams(); // Get ID from URL /projects/:projectId
    
    return (
        <div className="app-container font-body transition-colors duration-500 fade-in">
            <Header 
                useSinglePageNav={projectId}
            />

            <main className="space-y-24 fade-in">
            { !projectId &&  <AllProjects /> }
            { projectId && <SingleProject /> }
            </main>

            <Footer
                guidelinesFilePath={guidelinesFilePath}
                resumeFilePath={resumeFilePath}
            />
        </div>
    );
};

export default ProjectsPage;
