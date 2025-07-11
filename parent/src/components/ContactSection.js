import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:asrtech95@gmail.com">asrtech95@gmail.com</a></p>
        <p><strong>Phone:</strong> (469) 422‑4522</p>
      </div>
    </section>
  );
};

export default ContactSection;
