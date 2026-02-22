import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Full Portfolio
import App from "./App";

// Sections (FROM sections folder)
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* Home – Full Portfolio */}
        <Route path="/" element={<App />} />

        {/* Individual Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
