import React, { useState } from 'react';
import '../styles/main.css';
import { ProjectsIcon } from './Icons';

const projects = [
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
      'Built an end-to-end ALPR pipeline using YOLOv8 and EasyOCR.',
      'Achieved 85.3% precision and 70.8% IoU on a 433-image dataset.',
      'Improved low-light OCR accuracy using CLAHE preprocessing.'
    ]
  },

  {
    title: 'Calorie Tracker Pro',
    command: './calorie_tracker',
    stack: 'JavaScript, Node.js, Express.js, REST APIs, AWS Amplify',
    details: [
      'Built a full-stack calorie tracking application.',
      'Integrated real-time search across 350K+ food items.',
      'Implemented a Node.js and Express proxy layer and deployed using AWS Amplify.'
    ]
  },

  {
    title: 'Stock Research Tool',
    command: './stock_research_tool',
    stack: 'Python, Flask, Pandas, Matplotlib, Plotly, SEC EDGAR XBRL API',
    details: [
      'Developed a full-stack application for retrieving and processing financial data.',
      'Added robust error handling for incomplete records.',
      'Used structured data validation and Pandas to calculate financial metrics.'
    ]
  }
];


const Projects = () => {

  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
    setActiveProject(
      activeProject === index ? null : index
    );
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

                  <span>
                    $ {project.command}
                  </span>

                </button>


                {isOpen && (

                  <div className="project-output">

                    <h3>{project.title}</h3>

                    <ul>

                      {project.details.map((detail) => (
                        <li key={detail}>
                          {detail}
                        </li>
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