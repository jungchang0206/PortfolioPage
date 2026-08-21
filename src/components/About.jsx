import React, { useState } from 'react';
import '../styles/main.css';
import { AboutIcon } from './Icons';

const About = () => {
  const [showEgg, setShowEgg] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  const handleGMUClick = () => {
    setShowEgg(true);

    window.open(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="about" className="section about-section">
      <div className="panel-tag">
        <AboutIcon className="panel-icon" />
        <span className="panel-label">about_me</span>
        <span className="panel-pulse"></span>
      </div>

      <h2 className="section-title">$ about</h2>

      <div className="about-layout">

        {/* LEFT SIDE */}
        <div className="about-intro">
          <div className="about-command">
            jung@portfolio:~$ <span>whoami</span>
          </div>

          <h3>
            Hey, I'm <span>Jung.</span>
          </h3>

          <div className="about-role">
            SOFTWARE ENGINEER()
            <span className="cursor-blink">_</span>
          </div>

          <p>
            I'm a Computer Science student at{' '}
            <button
              className="about-gmu"
              onClick={handleGMUClick}
              title="Definitely not an easter egg..."
            >
              George Mason University
            </button>
            , graduating in May 2026.
          </p>

          <p>
            I enjoy building software that solves real problems. My interests
            range from full-stack development and backend systems to data
            pipelines and AI agents.
          </p>

          <p>
            Most recently, I worked as a Software Engineer Intern at AGINT,
            where I built AI agent systems using LangChain and LangGraph,
            integrated MCP and A2A protocols, and developed pipelines for
            processing thousands of agent records.
          </p>

          <div className="about-actions">
            <a
              href="/PortfolioPage/ChangJungResume.pdf"
              download
              className="about-primary-btn"
            >
              ↓ DOWNLOAD RESUME
            </a>

            <a
              href="#contact"
              className="about-secondary-btn"
            >
              LET'S TALK →
            </a>
          </div>

          {showEgg && (
            <div className="about-egg-message">
              🥚 Achievement unlocked: curiosity.exe
            </div>
          )}
        </div>

        {/* RIGHT SIDE TERMINAL */}
        <div className="about-terminal-card">

          <div className="about-terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-magenta"></span>
              <span className="dot dot-amber"></span>
              <span className="dot dot-cyan"></span>
            </div>

            <span>jung.config</span>

            <button
              className="about-secret-btn"
              onClick={() => setSecretUnlocked(!secretUnlocked)}
              title="?"
            >
              •
            </button>
          </div>

          <div className="about-terminal-content">

            <div className="about-terminal-entry">
              <span className="about-terminal-key">role</span>
              <span className="about-terminal-value">
                Software Engineer(Hopefully)
              </span>
            </div>

            <div className="about-terminal-entry">
              <span className="about-terminal-key">education</span>
              <span className="about-terminal-value">
                B.S. Computer Science
              </span>
            </div>

            <div className="about-terminal-entry">
              <span className="about-terminal-key">graduation</span>
              <span className="about-terminal-value">
                May 2026
              </span>
            </div>

            <div className="about-terminal-entry">
              <span className="about-terminal-key">location</span>
              <span className="about-terminal-value">
                Fairfax, VA
              </span>
            </div>

            <div className="about-terminal-entry">
              <span className="about-terminal-key">status</span>
              <span className="about-terminal-value status-online">
                ● Open to opportunities
              </span>
            </div>

            <div className="about-terminal-divider"></div>

            <div className="about-terminal-focus">
              <span className="about-terminal-key">
                currently.focused_on
              </span>

              <div className="about-focus-tags">
                <span>AI Agents</span>
                <span>Full Stack</span>
                <span>Backend</span>
                <span>Building Things</span>
              </div>
            </div>

            {secretUnlocked && (
              <div className="about-secret-message">
                <span>ACCESS GRANTED</span>
                <p>
                  You found the hidden terminal command 👀
                </p>
              </div>
            )}

          </div>

          <div className="about-terminal-footer">
            <span className="online-indicator"></span>
            SYSTEM ONLINE
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;