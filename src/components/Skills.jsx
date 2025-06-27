import React from 'react';
import '../styles/main.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>R</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>MATLAB</li>
          </ul>
        </div>
        
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Matplotlib</li>
            <li>EasyOCR</li>
            <li>BeautifulSoup</li>
            <li>JUnit</li>
            <li>JavaFX</li>
          </ul>
        </div>
        
        <div className="skills-category">
          <h3>Development Processes</h3>
          <ul>
            <li>Agile</li>
            <li>Scrum</li>
            <li>Waterfall</li>
            <li>Kanban</li>
            <li>CI/CD</li>
            <li>Test-Driven Development (TDD)</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>
        
        <div className="skills-category">
          <h3>Development Tools & Platforms</h3>
          <ul>
            <li>Visual Studio</li>
            <li>Eclipse</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Anaconda</li>
            <li>Jupyter Notebook</li>
            <li>Bash</li>
            <li>Linux</li>
            <li>Windows</li>
          </ul>
        </div>
        
        <div className="skills-category">
          <h3>Project & Collaboration Tools</h3>
          <ul>
            <li>Jira</li>
            <li>Notion</li>
            <li>Slack</li>
            <li>Microsoft Office Suites</li>
            <li>Google Suites</li>
          </ul>
        </div>
        
        <div className="skills-category">
          <h3>Soft Skills/Languages</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Conflict Resolution</li>
            <li>English (Fluent)</li>
            <li>Mandarin Chinese (Native)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;