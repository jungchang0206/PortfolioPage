import React from 'react';
import '../styles/main.css';
import { ContactIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="panel-tag">
        <ContactIcon className="panel-icon" />
        <span className="panel-label">contact</span>
        <span className="panel-pulse"></span>
      </div>

      <h2 className="section-title">$ contact</h2>

      <div className="contact-terminal">

        <div className="contact-terminal-header">
          <span>jung@portfolio:~/contact</span>

          <span className="connection-status">
            <span></span>
            READY
          </span>
        </div>


        <div className="contact-terminal-body">

          <div className="contact-message">
            <span className="contact-prompt">&gt;_</span>

            <div>
              <h3>Let's build something.</h3>

              <p>
                Have an opportunity, project, or idea? I'm always open to
                connecting with interesting people and teams.
              </p>
            </div>
          </div>


          <div className="contact-grid">

            <a
              href="mailto:jungchang02062004@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                @
              </div>

              <div className="contact-card-content">
                <span className="contact-card-label">
                  EMAIL
                </span>

                <strong>
                  jungchang02062004@gmail.com
                </strong>
              </div>

              <span className="contact-arrow">
                →
              </span>
            </a>


            <a
              href="tel:5712744944"
              className="contact-card"
            >
              <div className="contact-card-icon">
                #
              </div>

              <div className="contact-card-content">
                <span className="contact-card-label">
                  PHONE
                </span>

                <strong>
                  571-274-4944
                </strong>
              </div>

              <span className="contact-arrow">
                →
              </span>
            </a>


            <div className="contact-card contact-location">
              <div className="contact-card-icon">
                /
              </div>

              <div className="contact-card-content">
                <span className="contact-card-label">
                  LOCATION
                </span>

                <strong>
                  Fairfax, Virginia
                </strong>
              </div>
            </div>

          </div>


          <div className="contact-footer-line">
            <span>
              CONNECTION_STATUS:
            </span>

            <strong>
              AVAILABLE_FOR_NEW_OPPORTUNITIES
            </strong>

            <span className="cursor-blink">
              _
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;