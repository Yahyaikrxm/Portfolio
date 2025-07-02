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
      <div className="hero-page">
      <Hero />
      </div>
      <Projects />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;

