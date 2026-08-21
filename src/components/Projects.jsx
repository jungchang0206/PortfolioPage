import React, { useState } from 'react';
import '../styles/main.css';
import { ProjectsIcon } from './Icons';

const projects = [
  {
    title: 'AI Snake',
    command: './ai_snake',
    stack: 'Python, Machine Learning, Reinforcement Learning, AI',
    details: [
      'Built an AI agent that learns how to play the classic Snake game.',
      'Implemented a machine learning approach that improves gameplay decisions through training.',
      'Developed the game environment and logic used to train and evaluate the AI agent.'
    ]
  },

  {
    title: 'Infinite Stairs',
    command: './infinite_stairs',
    stack: 'Unity, C#',
    details: [
      'Developed an interactive game inspired by the Bastion Stairs gameplay concept.',
      'Built core gameplay mechanics and game logic using C# in Unity.',
      'Implemented player movement, progression mechanics, and gameplay systems.'
    ]
  },

  {
    title: 'Algorithm Visualizer',
    command: './algorithm_visualizer',
    stack: 'JavaScript, HTML5, CSS3, SVG, DOM API',
    details: [
      'Built an interactive web platform visualizing 20+ algorithms across 5 categories.',
      'Designed a modular component architecture that reduced code duplication by 40%.',
      'Implemented real-time animation rendering and live metric tracking.'
    ]
  },

  {
    title: 'Automatic License Plate Recognition',
    command: './license_plate_ai',
    stack: 'Python, OpenCV, YOLOv8, EasyOCR, CLAHE, Pandas',
    details: [
      'Built an end-to-end automatic license plate recognition pipeline using YOLOv8 and EasyOCR.',
      'Achieved 85.3% precision and 70.8% IoU on a 433-image dataset.',
      'Improved low-light OCR accuracy using CLAHE preprocessing.'
    ]
  },

  {
    title: 'Calorie Tracker',
    command: './calorie_tracker',
    stack: 'JavaScript, Node.js, Express.js, REST APIs, AWS Amplify',
    details: [
      'Built a full-stack calorie tracking application.',
      'Integrated real-time food search across 350K+ food items.',
      'Implemented a Node.js and Express backend proxy and deployed the application using AWS Amplify.'
    ]
  },

  {
    title: 'Stock Research Tool',
    command: './stock_research',
    stack: 'Python, Flask, Pandas, Matplotlib, Plotly, SEC EDGAR XBRL API',
    details: [
      'Developed a full-stack application for retrieving and analyzing company financial data.',
      'Processed SEC EDGAR XBRL data to calculate financial metrics and visualize company performance.',
      'Implemented validation and error handling for incomplete or inconsistent financial records.'
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="section">
      <div className="panel-tag">
        <ProjectsIcon className="panel-icon" />
        <span className="panel-label">projects</span>
        <span className="panel-pulse"></span>
      </div>

      <h2 className="section-title">$ projects</h2>

      <div className="project-terminal">
        <div className="project-terminal-header">
          <span>jung@portfolio:~/projects</span>
          <span>{projects.length} PROJECTS</span>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const isOpen = activeProject === index;

            return (
              <div
                className={`terminal-project ${
                  isOpen ? 'project-open' : ''
                }`}
                key={project.title}
              >
                <button
                  className="project-command"
                  onClick={() => toggleProject(index)}
                >
                  <span className="project-arrow">
                    {isOpen ? '▼' : '▶'}
                  </span>

                  <span>$ {project.command}</span>
                </button>

                {isOpen && (
                  <div className="project-output">
                    <h3>{project.title}</h3>

                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="project-stack">
                      <span>STACK ::</span>
                      {project.stack}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;