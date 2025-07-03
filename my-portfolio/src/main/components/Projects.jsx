import React from "react";
import { useScroll, useTransform, easeIn, motion } from "framer-motion";
import "./Projects.css"; 
import imgpro1 from '../../assets/pic-of-me.JPG';
import imgpro2 from '../../assets/pic-of-me.JPG';
import imgpro3 from '../../assets/pic-of-me.JPG';

function Projects() {
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 600], [0, -50]);
    const y2 = useTransform(scrollY, [0, 600], [0, -50]);
    const y3 = useTransform(scrollY, [0, 600], [0, -50]);

    const scale1 = useTransform(scrollY, [900, 1500], [1, 0.8]);
    const scale2 = useTransform(scrollY, [1250, 1850], [1, 0.8]);
    const scale3 = useTransform(scrollY, [1600, 2200], [1, 0.8]);

    const opacity1 = useTransform(scrollY, [900, 1500], [1, 0.0]);
    const opacity2 = useTransform(scrollY, [1250, 1850], [1, 0.0]);
    const opacity3 = useTransform(scrollY, [1600, 2200], [1, 0.0]);    

  return (
    <div className="project-section">
      <h1 className="projects-heading">PROJECTS</h1>
      <div className="project-cards">

        {/* Project card 1 */}
        <motion.div
            className="project-card-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ 
                duration: 0.2,
                ease: "easeInOut" }}
            style={{ y: y1, scale: scale1, opacity: opacity1}}>

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
        </motion.div>

        <motion.div
            className="project-card-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ 
                duration: 0.2,
                ease: "easeInOut" }}
            style={{ y: y2, scale: scale2, opacity: opacity2 }}>

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
          </motion.div>

        {/* Project card 3 */}
        <motion.div
    className="project-card-3"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.8 }}
    transition={{ 
        duration: 0.2, 
        ease: "easeInOut" 
    }}
    style={{ y: y3, scale: scale3, opacity: opacity3 }}
>
  <div className="project-pic-div">
    <img src={imgpro3} alt="Me" className="project-pic3"/>  
  </div>
  <div className="project-card-right">  
    <div className="project-card-right-1">
        
      <h2 className="project-card-head">ARDUINO FLIP CLOCK</h2>
      <h3 className="project-card-subhead">AutoCAD | React.JS | SwiftOS | 3D Printing</h3>
      <p className="project-card-text">I’ve been doing photography as a hobby on and off and I find lots of fun in capturing the moment and I do my best to edit them. I love doing photography and wish to continue more in the future...</p>
    </div> 
    <div className="project-card-right-2">
      <button className="read-more-btn-3">READ MORE</button>
    </div>
  </div>
</motion.div>
</div>
</div>
  );
}

export default Projects;