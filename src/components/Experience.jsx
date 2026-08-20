import React from 'react';
import '../styles/main.css';
import { ExperienceIcon } from './Icons';

const Experience = () => {
  const experiences = [
    {
      number: '01',
      title: 'Software Engineer Intern',
      company: 'AGINT',
      date: 'January 2026 - April 2026',
      location: 'Remote',
      status: 'COMPLETED',
      tags: ['LANGCHAIN', 'LANGGRAPH', 'MCP', 'CLOUDFLARE'],
      details: [
        'Designed and deployed AI agents using LangChain, LangGraph, and Cloudflare Workers, reducing manual workflow time by 60%.',
        'Optimized an intent-routing/classification system across 500+ test queries through iterative testing and refinement, improving accuracy by 18%.',
        'Integrated MCP (Model Context Protocol) and A2A agent endpoints via Streamable HTTP, resolving 10+ protocol-level issues and improving inter-agent reliability.',
        'Collaborated on backend API design and orchestration logic with senior engineers, reducing inter-service latency by 25%.',
        'Built a data pipeline to process 10,480 agent records from GoDaddy ANS, generating 152 validated manifests and increasing coverage 3x.'
      ]
    },
    {
      number: '02',
      title: 'Front Desk / IT Support',
      company: 'Progressive Urgent & Primary Care',
      date: 'August 2023 - May 2026',
      location: 'Annandale, Virginia',
      status: 'COMPLETED',
      tags: ['IT SUPPORT', 'NETWORKING', 'MICROSOFT 365', 'TROUBLESHOOTING'],
      details: [
        'Provided IT support by troubleshooting workstations, printers, and network connectivity for staff across the clinic.',
        'Digitized patient records using a cloud-based document system, reducing retrieval time by 40%.',
        'Optimized front-desk scheduling workflows using Microsoft 365 tools, contributing to a 20% reduction in appointment errors and improved staff efficiency.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="panel-tag">
        <ExperienceIcon className="panel-icon" />
        <span className="panel-label">experience</span>
        <span className="panel-pulse"></span>
      </div>

      <h2 className="section-title">$ experience</h2>

      <div className="experience-log">
        <div className="experience-log-header">
          <span>jung@portfolio:~/experience</span>
          <span>{experiences.length} RECORDS_FOUND</span>
        </div>

        <div className="experience-log-content">
          {experiences.map((experience) => (
            <article
              className="experience-record"
              key={experience.number}
            >
              <div className="experience-record-top">
                <div className="experience-number">
                  [{experience.number}]
                </div>

                <span className="experience-record-status">
                  <span className="record-status-dot"></span>
                  {experience.status}
                </span>
              </div>

              <div className="experience-role">
                <span className="experience-command">&gt;_</span>
                <h3>{experience.title}</h3>
              </div>

              <div className="experience-company-line">
                <span>COMPANY</span>
                <strong>{experience.company}</strong>
              </div>

              <div className="experience-meta-grid">
                <div>
                  <span>PERIOD</span>
                  <p>{experience.date}</p>
                </div>

                <div>
                  <span>LOCATION</span>
                  <p>{experience.location}</p>
                </div>
              </div>

              <div className="experience-divider"></div>

              <ul className="experience-details experience-log-details">
                {experience.details.map((detail, index) => (
                  <li key={index}>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="experience-tech">
                <span className="experience-tech-label">
                  STACK ::
                </span>

                <div className="experience-tech-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="experience-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;