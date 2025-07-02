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
      <Hero />
      <Projects />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;

