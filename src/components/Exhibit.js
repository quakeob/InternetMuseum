import React from 'react';
import './Exhibit.css';

const Exhibit = ({ artifact, featured }) => {
  return (
    <article className={`exhibit ${featured ? 'featured' : ''}`}>
      <img src={artifact.imageUrl} alt={artifact.title} />
      <h3>{artifact.title}</h3>
      <div className="metadata">
        <span className="date">{artifact.date}</span>
      </div>
      {featured ? (
        <>
          <p className="description">{artifact.description}</p>
          <p className="context">{artifact.context}</p>
          <div className="tags">
            {artifact.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </>
      ) : (
        <p className="description">{artifact.description}</p>
      )}
    </article>
  );
};

export default Exhibit; 