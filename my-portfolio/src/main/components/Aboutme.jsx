import React from "react";
import "./Aboutme.css"; 
import pic from '../../assets/pic-of-me.JPG';
import { motion, useScroll, useTransform } from "framer-motion";

const Aboutme = () => {
    const { scrollYProgress } = useScroll();

    // left box
    const leftTop = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const leftDown = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    // right box
    const rightTop = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const rightDown = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <div className="about-me-main" style={{ height: "200vh" }}>
            <div className="about-card-and-photo">
                <div className="about-me-text-div">

                    {/* left box */}
                    <motion.svg
                        width="90"
                        height="121"
                        viewBox="0 0 205 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M5 5 L200 5" // left to right
                            stroke="#0023AD"
                            strokeWidth="10"
                            strokeLinecap="round"
                            style={{ pathLength: leftTop }}
                        />
                        <motion.path
                            d="M5 5 L5 115" // down
                            stroke="#0023AD"
                            strokeWidth="10"
                            strokeLinecap="round"
                            style={{ pathLength: leftDown }}
                        />
                    </motion.svg>

                    <h1 className="about-title">ABOUT ME</h1>

                    {/* right box */}
                    <motion.svg
                        width="90"
                        height="121"
                        viewBox="0 0 205 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M200 5 L5 5" // right to left
                            stroke="#0023AD"
                            strokeWidth="10"
                            strokeLinecap="round"
                            style={{ pathLength: rightTop }}
                        />
                        <motion.path
                            d="M200 5 L200 115" // down
                            stroke="#0023AD"
                            strokeWidth="10"
                            strokeLinecap="round"
                            style={{ pathLength: rightDown }}
                        />
                    </motion.svg>
                </div>

                <div className="about-me-card">
                    <p className="about-text">
                        Im a passionate high-school student and aspiring engineer. I enjoy web development, electronics, photography, and gaming. 
                        When I’m not doing that I like F1 and watching soccer. I find the most joy in math and just vibing. 
                        I love story games and stuff like that, you know what I mean — so yeah that’s me, currently in high school and working towards university.
                    </p>
                    <img src={pic} alt="Me" className="pic-of-me" />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
