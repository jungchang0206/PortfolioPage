import React from 'react';
import '../styles/main.css';
import { EducationIcon } from './Icons';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="panel-tag">
        <EducationIcon className="panel-icon" />
        <span className="panel-label">education</span>
        <span className="panel-pulse"></span>
      </div>
      <h2 className="section-title">$ education</h2>
      <div className="education-item">
        <h3>Bachelor of Science in Computer Science</h3>
        <p className="institution">George Mason University · Fairfax, VA · May 2026</p>
        <div className="coursework">
          <h4>Relevant Coursework</h4>
          <ul className="course-list">
            <li>Algorithms & Data Structures</li>
            <li>Database Systems</li>
            <li>Operating Systems</li>
            <li>Computer Vision</li>
            <li>Mobile Development</li>
            <li>Object-Oriented Programming</li>
            <li>Secure Programming & Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;