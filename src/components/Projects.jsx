import React from 'react';
import '../styles/main.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p>
        View more on my {' '}
        <a
          href="https://github.com/jungchang0206"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 16 16"
            fill="currentColor"
            style={{ verticalAlign: 'middle' }}
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
        .
      </p>

      <div className="project-item">
        <h3>Automatic License Plate Recognition System</h3>
        <ul className="project-details">
          <li>Developed end-to-end ALPR system using YOLOvs for license plate detection and EasyOCR for character recognition.</li>
          <li>Achieved 85.3% precision and 70.8% average IoU on 433-image dataset through optimized model performance.</li>
          <li>Implemented custom preprocessing pipeline with CLAHE enhancement and geometric validation filters.</li>
          <li>Built comprehensive evaluation framework with precision, recall, F1-score, and IoU metrics analysis.</li>
          <li>Deployed real-time processing capabilities suitable for traffic monitoring and parking management applications.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Daily Calorie Tracker Pro</h3>
        <p>
          <a
            href="https://dailycaloriestracker.d3bkolygt1cuvs.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3498db', fontWeight: 600, textDecoration: 'underline' }}
          >
            Visit Live Website
          </a>
        </p>
        <ul className="project-details">
          <li>Developed full-stack calorie tracking application with real-time USDA food database integration using JavaScript/HTML/CSS.</li>
          <li>Implemented responsive UI with animated progress tracking for calories and macronutrients (protein, carbs, fat).</li>
          <li>Designed algorithm for automatic macro-nutrient goal calculation based on user's calorie target (30% protein, 45% carbs, 25% fat).</li>
          <li>Built food logging system with quantity adjustment and nutritional value calculation per serving.</li>
          <li>Integrated Harris-Benedict equation calculator for personalized daily calorie needs estimation.</li>
          <li>Deployed with secure environment variable management for API keys and sensitive configuration.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;