import React from 'react';
import './Collections.css';

const Collections = () => {
  const collections = [
    {
      title: "Early Internet",
      description: "Artifacts from the dawn of the internet, including early protocols, first websites, and pioneering technologies.",
      items: ["ARPANET", "First Email", "TCP/IP Protocol", "First Web Browser"],
      imageUrl: "/images/collections/early-internet.jpg"
    },
    {
      title: "Social Media Evolution",
      description: "The rise and evolution of social networking platforms, from early forums to modern social media giants.",
      items: ["BBS Systems", "MySpace", "Facebook", "Twitter"],
      imageUrl: "/images/collections/social-media.jpg"
    },
    {
      title: "Digital Culture",
      description: "Memes, viral content, and cultural phenomena that shaped internet culture.",
      items: ["Early Memes", "Viral Videos", "Internet Challenges", "Digital Art"],
      imageUrl: "/images/collections/digital-culture.jpg"
    },
    {
      title: "E-commerce Revolution",
      description: "The transformation of online shopping and digital commerce.",
      items: ["First Online Store", "Payment Systems", "Marketplaces", "Digital Goods"],
      imageUrl: "/images/collections/ecommerce.jpg"
    }
  ];

  return (
    <div className="collections-page">
      <h1>Collections</h1>
      <p className="page-description">
        Explore our curated collections of internet history artifacts, organized by theme and era.
      </p>

      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <div className="collection-image">
              <img src={collection.imageUrl} alt={collection.title} />
            </div>
            <div className="collection-content">
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
              <ul className="collection-items">
                {collection.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <button className="view-collection">View Collection</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections; 