import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      year: "1969",
      title: "ARPANET",
      description: "The first packet-switched computer network, the precursor to the modern internet, is created by the U.S. Department of Defense."
    },
    {
      year: "1971",
      title: "First Email",
      description: "Ray Tomlinson sends the first email between computers on ARPANET, using the @ symbol to separate user and host names."
    },
    {
      year: "1983",
      title: "TCP/IP Protocol",
      description: "ARPANET adopts TCP/IP as its standard protocol, becoming the foundation of the modern internet."
    },
    {
      year: "1989",
      title: "World Wide Web",
      description: "Tim Berners-Lee invents the World Wide Web while working at CERN, creating the first web browser and server."
    },
    {
      year: "1993",
      title: "Mosaic Browser",
      description: "The first popular web browser, Mosaic, is released, making the web accessible to the general public."
    },
    {
      year: "1995",
      title: "Commercial Internet",
      description: "The internet becomes commercialized with the launch of major companies like Amazon and eBay."
    },
    {
      year: "2004",
      title: "Web 2.0",
      description: "The rise of social media and user-generated content marks the beginning of Web 2.0."
    },
    {
      year: "2007",
      title: "iPhone",
      description: "The release of the iPhone revolutionizes mobile internet access and app development."
    }
  ];

  return (
    <div className="timeline-page">
      <h1>Internet Timeline</h1>
      <p className="page-description">
        A chronological journey through the key moments that shaped the internet as we know it today.
      </p>
      
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="year">{event.year}</div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 