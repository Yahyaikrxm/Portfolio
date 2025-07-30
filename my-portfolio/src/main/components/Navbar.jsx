import React from "react";
import "./Navbar.css"; 
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Icon top right nav */}
        <li className="nav-icon">
           <svg width="35" height="35" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.3573" cy="20.084" r="19.8111" fill="url(#paint0_linear_159_18)"/>
              <path d="M17.9692 23.3L10.6332 11.092H15.5612L20.2372 18.988L24.8852 11.092H29.7852L22.3652 23.412V31.084H17.9692V23.3Z" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_159_18" x1="20.3573" y1="0.272888" x2="20.3573" y2="39.8951" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00125A"/>
              <stop offset="1" stop-color="#0023AD" stop-opacity="0.866667"/>
              </linearGradient>
              </defs>
          </svg>
        </li>
        {/* end of icon svg */}
        <div className="mainLinks">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#about">ABOUT ME</a></li>
          </div>
          <li><a href="#contact" className="contactLink">CONTACT</a></li>
          
        </ul>
    </nav>
  );
};


export default Navbar;
