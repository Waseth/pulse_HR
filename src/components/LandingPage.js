

import React, { useState } from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import WorkplaceGuidelines from "./WorkplaceGuidelines";
import Contact from "./Contact";
import "./LandingPage.css";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="landing-page">
      <Navbar onSectionClick={handleSectionClick} />
      <div className={`section ${activeSection === "home" ? "active" : ""}`}>
        <HomePage />
      </div>
      <div className={`section ${activeSection === "about" ? "active" : ""}`}>
        <About />
      </div>
      <div className={`section ${activeSection === "workplace-guidelines" ? "active" : ""}`}>
        <WorkplaceGuidelines />
      </div>
      <div className={`section ${activeSection === "contact" ? "active" : ""}`}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;