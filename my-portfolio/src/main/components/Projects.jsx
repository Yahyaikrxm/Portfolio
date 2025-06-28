import React from "react";
import "./Projects.css"; 
import Projectone from "./subcomponents/Projectone"
import Projecttwo from "./subcomponents/Projecttwo"
import Projectthree from "./subcomponents/Projectthree"

function Projects() {
    return (
        <div>
            <h1 className="projects-heading">PROJECTS</h1>
            <Projectone />
            <Projecttwo />
            <Projectthree />
        </div>
    );
}

export default Projects;
