import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
        <p style={{ marginTop: '1rem' }}>{status}</p>
      </form>
    </section>
  );
};

export default ContactSection;
