import React from 'react';
import '../styles/main.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <h3>Front Desk</h3>
        <p className="company">Progressive Urgent & Primary Care</p>
        <ul className="experience-details">
          <li>Managed front desk operations serving 50+ daily visitors and handling multi-line phone systems.</li>
          <li>Coordinated appointment schedules and provided information services to clients and visitors.</li>
          <li>Maintained organized reception areas and managed incoming mail distribution.</li>
          <li>Delivered professional customer service while managing multiple concurrent tasks.</li>
          <li>Performed administrative support including data entry, filing, and basic IT troubleshooting.</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <h3>Substitute Teacher</h3>
        <p className="company">Fairfax County Public School</p>
        <ul className="experience-details">
          <li>Implemented curriculum-based lessons for diverse student populations while maintaining classroom management.</li>
          <li>Provided targeted academic assistance and individualized support to students across various subjects.</li>
          <li>Established positive learning environments through effective behavior management and disciplinary strategies.</li>
          <li>Facilitated clear communication with permanent teachers and administration regarding student progress and classroom dynamics.</li>
          <li>Demonstrated multitasking and time management abilities.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;