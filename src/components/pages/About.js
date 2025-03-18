import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About the Museum</h1>
      <p className="page-description">
        Dedicated to preserving and showcasing the rich history of the internet and digital culture.
      </p>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            The Internet Museum is dedicated to preserving, documenting, and celebrating the history of the internet and digital culture. We believe that understanding our digital past is crucial for shaping our digital future.
          </p>
        </section>

        <section className="history-section">
          <h2>Our History</h2>
          <p>
            Founded in 2024, the Internet Museum emerged from a growing need to preserve the rapidly evolving landscape of internet culture and technology. What started as a personal collection of digital artifacts has grown into a comprehensive archive of internet history.
          </p>
        </section>

        <section className="collection-section">
          <h2>Our Collection</h2>
          <p>
            Our collection spans the entire history of the internet, from early protocols and first websites to modern social media and digital culture. We curate artifacts that represent significant moments in internet history, ensuring they are preserved for future generations.
          </p>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Curators</h3>
              <p>Our team of digital historians and curators work to preserve and present internet history.</p>
            </div>
            <div className="team-member">
              <h3>Researchers</h3>
              <p>Dedicated researchers document and verify the historical significance of artifacts.</p>
            </div>
            <div className="team-member">
              <h3>Community</h3>
              <p>We work with a global community of contributors who help expand our collection.</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Preservation</h3>
              <p>Ensuring digital artifacts are preserved for future generations.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>Making internet history accessible to everyone.</p>
            </div>
            <div className="value-item">
              <h3>Accuracy</h3>
              <p>Maintaining high standards of historical accuracy and documentation.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Fostering a community of contributors and researchers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 