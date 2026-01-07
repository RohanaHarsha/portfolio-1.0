import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";


import "./CSS/App.css";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}