import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </div>
    </nav>
  );
};

export default Navbar;
