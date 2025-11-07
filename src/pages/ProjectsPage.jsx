// src/pages/ProjectsPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AllProjects from "../components/sections/AllProjects";
import SingleProject from "../components/sections/SingleProject";
import { guidelinesFilePath, resumeFilePath } from "../configs/staticConfigs";

const ProjectsPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const projectId = queryParams.get("projectId");
    
    return (
        <div className="app-container font-body transition-colors duration-500 fade-in">
            <Header 
                useSinglePageNav={projectId}
            />

            <main className="space-y-24 fade-in">
            { !projectId &&  <AllProjects projectId={projectId}/> }
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
