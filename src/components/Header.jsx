import React from 'react';
import '../styles/main.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Jung Chang</h1>
        <h2>Computer Science Student</h2>
        <p>George Mason University · Fairfax, VA · Expected Graduation 2026</p>
        <div className="contact-info">
          <span>jungchang02062004@gmail.com</span>
          <span>571-274-4944</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;