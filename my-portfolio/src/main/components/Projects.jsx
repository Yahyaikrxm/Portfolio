import React from "react";
import "./Projects.css"; 
import imgpro1 from '../../assets/pic-of-me.JPG';
import imgpro2 from '../../assets/pic-of-me.JPG';
import imgpro3 from '../../assets/pic-of-me.JPG';

function Projects() {
  return (
    <div>
      <h1 className="projects-heading">PROJECTS</h1>
      <div className="project-cards">

        {/* Project card 1 */}
        <div className="project-card-1">
          <div className="project-pic-div">
            <img src={imgpro1} alt="Me" className="project-pic1"/>  
          </div>
          <div className="project-card-right">  
            <div className="project-card-right-1">
              <h2 className="project-card-head">ARDUINO FLIP CLOCK</h2>
              <h3 className="project-card-subhead">AutoCAD | React.JS | SwiftOS | 3D Printing</h3>
              <p className="project-card-text">I’ve been doing photography as a hobby on and off and i find lots of fun in capturing the moment and I do my best to edit them - i find the most enjoyment in that. I love doing photography and wish to continue to more in the future . . .</p>
            </div> 
            <div className="project-card-right-2">
              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Project card 2 */}
        <div className="project-card-2">
          <div className="project-pic-div">
            <img src={imgpro2} alt="Me" className="project-pic2"/>  
          </div>
          <div className="project-card-right">  
            <div className="project-card-right-1">
              <h2 className="project-card-head">ARDUINO FLIP CLOCK</h2>
              <h3 className="project-card-subhead">AutoCAD | React.JS | SwiftOS | 3D Printing</h3>
              <p className="project-card-text">I’ve been doing photography as a hobby on and off and i find lots of fun in capturing the moment and I do my best to edit them - i find the most enjoyment in that. I love doing photography and wish to continue to more in the future . . .</p>
            </div> 
            <div className="project-card-right-2">
              <button className="read-more-btn-2">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Project card 3 */}
        <div className="project-card-3">
          <div className="project-pic-div">
            <img src={imgpro3} alt="Me" className="project-pic3"/>  
          </div>
          <div className="project-card-right">  
            <div className="project-card-right-1">
              <h2 className="project-card-head">ARDUINO FLIP CLOCK</h2>
              <h3 className="project-card-subhead">AutoCAD | React.JS | SwiftOS | 3D Printing</h3>
              <p className="project-card-text">I’ve been doing photography as a hobby on and off and i find lots of fun in capturing the moment and I do my best to edit them - i find the most enjoyment in that. I love doing photography and wish to continue to more in the future . . .</p>
            </div> 
            <div className="project-card-right-2">
              <button className="read-more-btn-3">READ MORE</button>
            </div>
          </div>
        </div>

        </div>
    </div>
  );
}

export default Projects;
