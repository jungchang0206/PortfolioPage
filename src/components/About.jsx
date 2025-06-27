import React, { useState } from 'react';
import '../styles/main.css';

const About = () => {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          Motivated and responsible Computer Science student at{' '}
          <span
            className="easter-egg-name"
            onClick={() => {
              setShowEgg(!showEgg);
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
                "_blank",
                "noopener noreferrer"
              );
            }}
            style={{ cursor: 'pointer', color: '#61dafb', fontWeight: 600 }}
            title="Click me!"
          >
            George Mason University
          </span>
          {' '}with a strong foundation in programming,
          data structures, and software development. Experienced in Python, Java, C, and JavaScript, with proficiency in modern
          frameworks like React, Node.js, and TensorFlow.
        </p>
        <p>
          Skilled in problem-solving and critical thinking, with a proven ability to manage multiple tasks effectively through
          academic projects and work experience. Passionate about collaborating with cross-functional teams to achieve impactful
          outcomes.
        </p>
        <p>
          Seeking a part-time software engineering role or internship to apply my skills and contribute to innovative technical solutions.
        </p>
        <a
          href="/ChangJungResume.pdf"
          download
          className="resume-download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        {showEgg && (
          <div className="easter-egg-message">
            🥚 Thanks for exploring my site! 🥚
          </div>
        )}
      </div>
    </section>
  );
};

export default About;