import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="hero-page" id="home">
      <Hero />
      </div>
      <div id="projects">
      <Projects />
      </div>
      <div id="about">
      <Aboutme />
      </div>
      <div id="contact">
      <Footer />
      </div>
    </div>
  );
}

export default App;

