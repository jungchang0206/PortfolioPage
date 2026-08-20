import React from 'react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-prompt">
          $ echo &quot;© {new Date().getFullYear()} Jung Chang — all rights reserved&quot;<span className="cursor-blink">_</span>
        </p>
        <div className="footer-links">
          <a href="#about">./about</a>
          <a href="#education">./education</a>
          <a href="#skills">./skills</a>
          <a href="#experience">./experience</a>
          <a href="#projects">./projects</a>
          <a href="#now">./now</a>
          <a href="#contact">./contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
