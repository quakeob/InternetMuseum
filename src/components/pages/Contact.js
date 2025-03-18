import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="page-description">
        Get in touch with us for questions, collaborations, or to learn more about our work.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <section className="info-section">
            <h2>Get in Touch</h2>
            <p>
              We welcome inquiries about our collection, collaboration opportunities, and general questions about internet history.
            </p>
          </section>

          <section className="info-section">
            <h2>Visit Us</h2>
            <p>
              While our collection is primarily digital, we occasionally host physical exhibitions and events.
            </p>
            <div className="address">
              <p>Internet Museum</p>
              <p>Digital History Center</p>
              <p>123 Web Street</p>
              <p>Internet City, IC 12345</p>
            </div>
          </section>

          <section className="info-section">
            <h2>Connect With Us</h2>
            <div className="social-links">
              <a href="https://twitter.com/internetmuseums" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com/internetmuseums" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/internetmuseums" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </section>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="contribution">Artifact Contribution</option>
              <option value="collaboration">Collaboration</option>
              <option value="research">Research Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 