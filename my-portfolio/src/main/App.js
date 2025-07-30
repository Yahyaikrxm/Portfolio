import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Projectone from "./components/Projectone";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* homepage */}
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />

        {/* project page 1 route */}
        <Route
          path="/arduino-flip-clock"
          element={
            <> 
            <Projectone />
            </>
          }
           />
      </Routes>
    </Router>
  );
}

export default App;
