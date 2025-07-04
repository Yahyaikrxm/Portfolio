import React from "react";
import "./Hero.css";
import { useScroll, useTransform, motion } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const y = useTransform(scrollY, [0, 350], [0, -40]);

  return (
    <div className="hero-section">
      <h3 className="hero-subhead">Welcome to my corner on the internet, I'm</h3>
      <p className="hero-text">YAHYA</p>
      <p className="hero-card">
        I'm a passionate high-school student and aspiring engineer. I enjoy web development, electronics, photography, and gaming.
      </p>
      <motion.div className="scroll-div" style={{ opacity, y }}>
        <motion.div
          animate={{ y: [-4, 6] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2zM7 14v2h2v-2zm0 0v-2H5v2zm10 0v2h-2v-2zm0 0v-2h2v2z"
            ></path>
          </svg>
        </motion.div>
        <div className="hero-scroll-prompt">Scroll down to discover</div>
      </motion.div>
    </div>
  );
}

export default Hero;