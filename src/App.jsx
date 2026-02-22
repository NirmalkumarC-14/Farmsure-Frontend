import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NCC from "./sections/NCC";
import Certificates from "./sections/Cetficates";
import Education from "./sections/Education";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Certificates Section */}
      <Certificates />

      {/* Skills Section */}
      <Skills />

      {/* NCC Section */}  
      <NCC />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;