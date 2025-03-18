import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="home">
      <nav className={`side-nav ${isNavCollapsed ? 'collapsed' : ''}`}>
        <button 
          className="toggle-nav"
          onClick={toggleNav}
          aria-label={isNavCollapsed ? "Expand navigation" : "Collapse navigation"}
        >
          {isNavCollapsed ? "→" : "←"}
        </button>
        <ul>
          <li><a href="#archive">Archive</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#featured">Featured Works</a></li>
          <li><a href="#recent">Recent Additions</a></li>
          <li><a href="#contribute">Contribute</a></li>
          <li><a href="#guidelines">Guidelines</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <h1 className="page-title">About The Archive</h1>
        
        <div className="metadata">
          <span className="date">2024-03-21</span>
          <span className="status">ongoing</span>
          <span className="certainty">high confidence</span>
        </div>

        <div className="quote-block">
          <blockquote>
            "Photography is the story I fail to put into words."
            <footer>— Destin Sparks</footer>
          </blockquote>
        </div>

        <section id="archive">
          <h2>Archive</h2>
          <section id="collections">
            <h3>Collections</h3>
            <p>Our carefully curated collections showcase various themes and styles, from contemporary photography to historical archives.</p>
          </section>

          <section id="featured">
            <h3>Featured Works</h3>
            <p>Selected pieces that exemplify exceptional quality, unique perspectives, or historical significance.</p>
          </section>

          <section id="recent">
            <h3>Recent Additions</h3>
            <p>Latest contributions to our growing collection, updated regularly to showcase new perspectives.</p>
          </section>
        </section>

        <section id="contribute">
          <h2>Contribute</h2>
          <section id="guidelines">
            <h3>Submission Guidelines</h3>
            <p>We welcome contributions that align with our purpose. All submissions are reviewed for quality and relevance.</p>
          </section>

          <section id="contact">
            <h3>Contact</h3>
            <p>For inquiries about submissions or collaboration, please reach out through our contact form.</p>
          </section>
        </section>

        <div className="footer-links">
          <Link to="/archive">Browse Archive</Link>
          <span className="separator">•</span>
          <Link to="/upload">Submit Work</Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 