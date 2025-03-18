import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Exhibit from './Exhibit';
import { artifacts } from '../data/exhibitData';

const Home = () => {
  // Get featured items for exhibits (first 3 items)
  const featuredArtifacts = artifacts.slice(0, 3);
  
  return (
    <div className="home">
      <aside className="side-nav">
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#exhibits">Exhibits</Link></li>
            <li><Link to="/#archive">Archive</Link></li>
            <li><Link to="/timeline">Internet Timeline</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/artifacts">Digital Artifacts</Link></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li><Link to="/about">About Museum</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </aside>
      
      <main className="main-content">
        <section id="welcome" className="welcome">
          <h1>Internet Museum</h1>
          <p className="subtitle">Preserving digital culture, one artifact at a time</p>
          
          <div className="quote-block">
            <blockquote>
              "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had."
            </blockquote>
            <cite>- Eric Schmidt</cite>
          </div>
        </section>

        <section id="exhibits" className="exhibits-section">
          <h2>Current Exhibits</h2>
          <p className="section-description">Curated presentations of significant internet artifacts and their cultural impact.</p>
          <div className="featured-grid">
            {featuredArtifacts.map(artifact => (
              <Exhibit key={artifact.id} artifact={artifact} featured={true} />
            ))}
          </div>
        </section>

        <section id="archive" className="archive-section">
          <h2>Complete Archive</h2>
          <p className="section-description">Browse our comprehensive collection of internet history artifacts.</p>
          <div className="archive-grid">
            {artifacts.map(artifact => (
              <Exhibit key={artifact.id} artifact={artifact} featured={false} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 