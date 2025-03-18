import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="side-nav">
        <nav>
          <ul>
            <li><Link to="/exhibits">Exhibits</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/contributions">Contributions</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h1 className="page-title">Internet Museum</h1>
        <div className="metadata">
          <p>Est. 2024</p>
          <p>Preserving Digital History</p>
        </div>
        
        <div className="quote-block">
          <blockquote>
            "The Internet is not just one thing, it's a collection of things – of numerous communications networks that all speak the same digital language."
          </blockquote>
          <p className="quote-author">- Charles R. Smith</p>
        </div>

        <section className="welcome-section">
          <h2>Welcome to the Internet Museum</h2>
          <p>
            Step into a digital time capsule that chronicles the evolution of the internet, 
            from its humble beginnings to its current role as the backbone of modern society. 
            Explore interactive exhibits, discover rare digital artifacts, and learn about the 
            pioneers who shaped the digital world we know today.
          </p>
        </section>

        <section className="featured-exhibits">
          <h2>Featured Exhibits</h2>
          <div className="exhibit-grid">
            <div className="exhibit-item">
              <h3>The Birth of the Web</h3>
              <p>Explore the origins of the World Wide Web and its creator, Tim Berners-Lee.</p>
            </div>
            <div className="exhibit-item">
              <h3>Social Media Evolution</h3>
              <p>Trace the development of social networking from early bulletin boards to modern platforms.</p>
            </div>
            <div className="exhibit-item">
              <h3>Digital Artifacts</h3>
              <p>View rare and significant digital artifacts from internet history.</p>
            </div>
          </div>
        </section>

        <section className="contribute-section">
          <h2>Contribute to History</h2>
          <p>
            The Internet Museum is a living archive that grows with community contributions. 
            Share your stories, artifacts, and memories of the internet's evolution.
          </p>
          <Link to="/contribute" className="contribute-button">Contribute</Link>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our exhibits? Want to contribute? We'd love to hear from you.
          </p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </section>

        <footer className="footer-links">
          <Link to="/exhibits">Browse Exhibits</Link>
          <Link to="/contribute">Contribute</Link>
        </footer>
      </div>
    </div>
  );
};

export default Home; 