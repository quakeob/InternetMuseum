import React from 'react';
import './Exhibit.css';

const Exhibit = ({ artifact }) => {
  return (
    <div className="exhibit">
      <div className="exhibit-content">
        <img 
          src={artifact.imageUrl} 
          alt={artifact.title} 
          className="exhibit-image"
        />
        <div className="exhibit-info">
          <h2>{artifact.title}</h2>
          <p className="exhibit-date">{artifact.date}</p>
          <p className="exhibit-description">{artifact.description}</p>
          <div className="exhibit-context">
            <h3>Historical Context</h3>
            <p>{artifact.context}</p>
          </div>
          <div className="exhibit-tags">
            {artifact.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibit; 