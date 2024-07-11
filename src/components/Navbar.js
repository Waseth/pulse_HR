import { useNavigate } from "react-router-dom";
import React from "react";

const NavBar = ({ onSectionClick }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/LoginPage");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <p className="logo-text" onClick={() => onSectionClick("home")}>
            Pulse_HR
          </p>
        </div>
        <ul>
          <li>
            <a onClick={() => onSectionClick("home")} href="#home-page">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => onSectionClick("about")} href="#about">
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => onSectionClick("workplace-guidelines")}
              href="#workplace-guidelines"
            >
              Workplace Guidelines
            </a>
          </li>
          <li>
            <a onClick={() => onSectionClick("contact")} href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              onClick={handleLoginClick}
              href="#check-in"
              className="login-btn"
            >
              Check In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;