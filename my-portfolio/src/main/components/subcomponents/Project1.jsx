

import React from "react";
import "./Project1.css"; 
import imgpro1 from '../../../assets/pic-of-me.JPG';

function Project1() {
    return (
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
    );
}

export default Project1;
