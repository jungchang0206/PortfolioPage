import React from 'react';
import '../styles/main.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-item">
        <h3>Front Desk</h3>
        <p className="company">
          Progressive Urgent &amp; Primary Care<br />
          <span className="experience-date-location">August 2023 - Present, Annandale, Virginia</span>
        </p>
        <ul className="experience-details">
          <li>
            Managed front desk operations for 50+ daily visitors by coordinating appointments, resolving multi-line phone system inquiries, and providing real-time IT support (Wi-Fi, device setup), maintaining 95% customer satisfaction and reducing scheduling errors by 20%.
          </li>
          <li>
            Coordinated appointment schedules and provided information services to clients and visitors.
          </li>
          <li>
            Digitized mail management by implementing a scanned document system with cloud storage, accelerating retrieval time and reducing physical filing by 40%.
          </li>
          <li>
            Delivered professional customer service while managing multiple concurrent tasks, achieving consistent positive feedback from clients and staff.
          </li>
          <li>
            Maintained office technology through routine updates, printer/server troubleshooting, and inventory tracking.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Substitute Teacher</h3>
        <p className="company">
          Fairfax County Public School<br />
          <span className="experience-date-location">September 2023 - Present, Annandale, Virginia</span>
        </p>
        <ul className="experience-details">
          <li>
            Implemented curriculum-based lessons for diverse student populations by adapting instructional strategies to meet varying learning needs, resulting in improved student engagement and comprehension.
          </li>
          <li>
            Provided targeted academic assistance and individualized support by assessing student strengths and weaknesses, leading to measurable progress in core subject areas.
          </li>
          <li>
            Established positive learning environments through consistent behavior management techniques and proactive disciplinary strategies, reducing classroom disruptions.
          </li>
          <li>
            Facilitated clear communication with teachers and administration by maintaining detailed progress reports and timely updates, ensuring alignment on student development goals.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;