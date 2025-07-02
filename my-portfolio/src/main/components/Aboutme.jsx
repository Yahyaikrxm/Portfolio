import React from "react";
import "./Aboutme.css"; 
import pic from '../../assets/pic-of-me.JPG';
import { motion } from "framer-motion";

function Aboutme() {
    return (
        <div className="about-me-main">      
            <div className="about-card-and-photo">
            <h1 className="about-title">ABOUT ME</h1>
            <div className="about-me-card">
                <p className="about-text">Im an passionate high-school student and aspiring engineer, I enjoy web development, electronics, photography, and gaming. When im nto soing that i like F1 and wathcing soccer, I find the most joy in math and just vibing I love story games and stuff like that, you know what i mena so yeah thats me and thats more about me in highshcoo currently and working towards universty</p>
            <img src={pic} alt="Me" className="pic-of-me"/>
            </div>
            </div>
            </div>
    );
}

export default Aboutme;