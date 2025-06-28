
import React from "react";
import "./Project3.css"; 
import imgpro3 from '../../../assets/pic-of-me.JPG';

function Projectthree() {
    return (
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
    );
}

export default Projectthree;
