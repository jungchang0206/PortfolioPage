import React from 'react';
import '../styles/main.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-item">
        <h3>Computer Science</h3>
        <p className="institution">George Mason University · Fairfax, VA · 2026</p>
        <div className="coursework">
          <h4>Relevant Coursework:</h4>
          <ul className="course-list">
            <li>Public Speaking</li>
            <li>Software Engineering</li>
            <li>Data Structure and Algorithms</li>
            <li>Algorithm Analysis</li>
            <li>Object-Oriented Programming</li>
            <li>Computer Vision</li>
            <li>Machine Learning</li>
            <li>Operating Systems</li>
            <li>Computer Systems</li>
            <li>Database Systems</li>
            <li>Software Architecture and Design</li>
            <li>Probability Theory</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;