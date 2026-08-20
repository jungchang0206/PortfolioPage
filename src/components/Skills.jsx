import React from 'react';
import '../styles/main.css';
import { SkillsIcon } from './Icons';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="panel-tag">
        <SkillsIcon className="panel-icon" />
        <span className="panel-label">skills</span>
        <span className="panel-pulse"></span>
      </div>
      <h2 className="section-title">$ skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
            <li>MATLAB</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Flask</li>
            <li>LangChain</li>
            <li>LangGraph</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>AI & Data</h3>
          <ul>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>OpenCV</li>
            <li>YOLOv8</li>
            <li>EasyOCR</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Platforms</h3>
          <ul>
            <li>Docker</li>
            <li>AWS (Amplify)</li>
            <li>Cloudflare Workers</li>
            <li>Git</li>
            <li>Bash</li>
            <li>Jupyter Notebook</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Concepts</h3>
          <ul>
            <li>REST APIs</li>
            <li>MCP/A2A Protocols</li>
            <li>Agile/Scrum</li>
            <li>CI/CD</li>
            <li>Full-Stack Development</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Certifications</h3>
          <ul>
            <li>CompTIA A+</li>
            <li>CompTIA Network+ (In Progress)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;