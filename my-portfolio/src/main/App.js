import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
