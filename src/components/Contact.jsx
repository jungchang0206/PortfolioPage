import React from 'react';
import '../styles/main.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <p>Feel free to reach out for opportunities or collaborations!</p>
        <div className="contact-methods">
          <div className="contact-method">
            <span className="contact-icon">📧</span>
            <a href="mailto:jungchang02062004@gmail.com">jungchang02062004@gmail.com</a>
          </div>
          <div className="contact-method">
            <span className="contact-icon">📱</span>
            <span>571-274-4944</span>
          </div>
          <div className="contact-method">
            <span className="contact-icon">📍</span>
            <span>Fairfax, Virginia, United States</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;