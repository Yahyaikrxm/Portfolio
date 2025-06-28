import React from "react";
import "./Projects.css"; 
import Project1 from "./subcomponents/Project1"

function Projects() {
    return (
        <div>
            <h1 className="projects-heading">PROJECTS</h1>
            <Project1 />
        </div>
    );
}

export default Projects;
