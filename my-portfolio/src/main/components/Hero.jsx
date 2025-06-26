import React from "react";
import "./Hero.css"; 

function Hero() {
    return (
      <div className="hero-section">
        <h3 className="hero-subhead">Welcome to my internet bubble, I'm</h3>
        <p className="hero-text">Y<span className="style-a">a</span>HY<span className="style-a">a</span></p>
        <p className="hero-card">Im an passionate high-school student and aspiring engineer. I enjoy web development, electronics, photography, and gaming.</p>
        <div className="scroll-div">
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="#000" d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2zM7 14v2h2v-2zm0 0v-2H5v2zm10 0v2h-2v-2zm0 0v-2h2v2z"></path>
          </svg>
          <div className="hero-scroll-prompt">Scroll down to discover</div>
        </div>
      </div>
    );
  }

export default Hero;