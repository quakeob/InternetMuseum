import React from 'react';
import './Home.css';
import Exhibit from './Exhibit';
import { exhibits } from '../data/exhibitData';

const Home = () => {
  return (
    <div className="home">
      <div className="side-nav">
        <h2>Internet Museum</h2>
        <nav>
          <ul>
            <li><a href="#exhibits">Current Exhibits</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#timeline">Internet Timeline</a></li>
            <li><a href="#contribute">Contribute</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="main-content">
        <section className="welcome">
          <h1>Welcome to the Internet Museum</h1>
          <p className="subtitle">Preserving digital culture, one artifact at a time.</p>
          
          <div className="quote-block">
            <blockquote>
              "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had."
            </blockquote>
            <cite>- Eric Schmidt</cite>
          </div>
        </section>

        <section id="exhibits" className="exhibits-section">
          <h2>Featured Exhibits</h2>
          {exhibits.map(exhibit => (
            <Exhibit key={exhibit.id} artifact={exhibit} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home; 