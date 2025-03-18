import React from 'react';
import './DigitalArtifacts.css';

const DigitalArtifacts = () => {
  const artifactCategories = [
    {
      title: "Software & Applications",
      description: "Historical software, applications, and tools that shaped the digital landscape.",
      examples: [
        {
          name: "Netscape Navigator",
          year: "1994",
          description: "The first widely-used web browser that popularized the World Wide Web."
        },
        {
          name: "Winamp",
          year: "1997",
          description: "Revolutionary media player that defined the MP3 era."
        },
        {
          name: "ICQ",
          year: "1996",
          description: "One of the first instant messaging programs."
        }
      ]
    },
    {
      title: "Websites & Platforms",
      description: "Landmark websites and platforms that influenced internet culture.",
      examples: [
        {
          name: "GeoCities",
          year: "1994",
          description: "Early web hosting service that enabled personal web pages."
        },
        {
          name: "Napster",
          year: "1999",
          description: "Pioneering peer-to-peer file sharing service."
        },
        {
          name: "Friendster",
          year: "2002",
          description: "One of the first social networking sites."
        }
      ]
    },
    {
      title: "Digital Media",
      description: "Significant digital media content and formats.",
      examples: [
        {
          name: "First YouTube Video",
          year: "2005",
          description: "Me at the zoo, the first video uploaded to YouTube."
        },
        {
          name: "First GIF",
          year: "1987",
          description: "The first animated GIF image created."
        },
        {
          name: "First MP3",
          year: "1993",
          description: "The first MP3 file created using the new compression format."
        }
      ]
    }
  ];

  return (
    <div className="digital-artifacts-page">
      <h1>Digital Artifacts</h1>
      <p className="page-description">
        Explore our collection of significant digital artifacts that have shaped the internet and digital culture.
      </p>

      <div className="artifact-categories">
        {artifactCategories.map((category, index) => (
          <div key={index} className="artifact-category">
            <h2>{category.title}</h2>
            <p className="category-description">{category.description}</p>
            
            <div className="artifact-examples">
              {category.examples.map((example, exampleIndex) => (
                <div key={exampleIndex} className="artifact-example">
                  <div className="artifact-header">
                    <h3>{example.name}</h3>
                    <span className="year">{example.year}</span>
                  </div>
                  <p>{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalArtifacts; 