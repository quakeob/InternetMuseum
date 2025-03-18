import React, { useState } from 'react';
import './Archive.css';
import { archiveData } from '../data/archiveData';

function Archive() {
  const [votes, setVotes] = useState({});

  const handleVote = (itemId, voteType) => {
    setVotes(prevVotes => {
      const currentVote = prevVotes[itemId] || 0;
      const currentDirection = prevVotes[`${itemId}_direction`] || null;
      
      // If clicking the same direction again, remove the vote
      if (currentDirection === voteType) {
        return {
          ...prevVotes,
          [itemId]: 0,
          [`${itemId}_direction`]: null
        };
      }
      
      // If changing vote direction
      if (currentDirection) {
        return {
          ...prevVotes,
          [itemId]: voteType === 'up' ? 1 : -1,
          [`${itemId}_direction`]: voteType
        };
      }
      
      // New vote
      return {
        ...prevVotes,
        [itemId]: voteType === 'up' ? 1 : -1,
        [`${itemId}_direction`]: voteType
      };
    });
  };

  return (
    <div className="archive">
      {archiveData.map((item) => {
        const voteDirection = votes[`${item.id}_direction`];
        return (
          <div key={item.id} className="archive-item">
            <div className="archive-item-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.date && <div className="archive-date">{item.date}</div>}
              <div className="vote-container">
                <button 
                  className={`vote-button upvote ${voteDirection === 'up' ? 'active' : ''}`}
                  onClick={() => handleVote(item.id, 'up')}
                  aria-label="Upvote"
                >
                  ↑
                </button>
                <span className="vote-count">{votes[item.id] || 0}</span>
                <button 
                  className={`vote-button downvote ${voteDirection === 'down' ? 'active' : ''}`}
                  onClick={() => handleVote(item.id, 'down')}
                  aria-label="Downvote"
                >
                  ↓
                </button>
              </div>
            </div>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.title} />
            ) : (
              <video
                controls
                src={item.url}
                title={item.title}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Archive; 