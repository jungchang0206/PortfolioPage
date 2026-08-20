import React from 'react';
import '../styles/main.css';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Header = () => {
  return (
    <header className="header">
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="dot dot-magenta"></span>
          <span className="dot dot-amber"></span>
          <span className="dot dot-cyan"></span>
        </div>
        <span className="terminal-path">jung@portfolio:~</span>
      </div>
      <div className="header-content">
        <p className="eyebrow">// software_engineer.init()</p>
        <h1>Jung Chang<span className="cursor-blink">_</span></h1>
        <h2>Computer Science Student · Aspiring Software Engineer</h2>
        <p className="header-meta">George Mason University · Fairfax, VA · Graduation May 2026</p>
        <div className="contact-info">
          <a className="tag-chip" href="mailto:jungchang02062004@gmail.com">jungchang02062004@gmail.com</a>
          <span className="tag-chip">571-274-4944</span>
        </div>
        <div className="social-links">
          <a href="https://github.com/jungchang0206" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <GitHubIcon className="social-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/jung-chang-936839370/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
            <LinkedInIcon className="social-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        <nav className="nav-links">
          <a href="#about">./about</a>
          <a href="#education">./education</a>
          <a href="#skills">./skills</a>
          <a href="#experience">./experience</a>
          <a href="#projects">./projects</a>
          <a href="#now">./now</a>
          <a href="#contact">./contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
