import React, { useState } from 'react';
import './Contribute.css';

const Contribute = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    category: '',
    imageUrl: '',
    context: '',
    tags: '',
    contributorName: '',
    contributorEmail: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contribute-page">
      <h1>Contribute</h1>
      <p className="page-description">
        Help us preserve internet history by contributing artifacts to our collection.
      </p>

      <div className="contribute-content">
        <div className="contribute-info">
          <h2>Submission Guidelines</h2>
          <ul>
            <li>Artifacts should be historically significant to internet culture</li>
            <li>Include clear documentation and context</li>
            <li>Provide high-quality images or media when possible</li>
            <li>Ensure you have rights to share the content</li>
            <li>Include relevant tags for categorization</li>
          </ul>

          <h2>Accepted Categories</h2>
          <ul>
            <li>Software & Applications</li>
            <li>Websites & Platforms</li>
            <li>Digital Media</li>
            <li>Social Media</li>
            <li>E-commerce</li>
            <li>Internet Culture</li>
          </ul>
        </div>

        <form className="contribute-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Artifact Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="software">Software & Applications</option>
                <option value="websites">Websites & Platforms</option>
                <option value="media">Digital Media</option>
                <option value="social">Social Media</option>
                <option value="ecommerce">E-commerce</option>
                <option value="culture">Internet Culture</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="context">Historical Context</label>
            <textarea
              id="context"
              name="context"
              value={formData.context}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contributorName">Your Name</label>
              <input
                type="text"
                id="contributorName"
                name="contributorName"
                value={formData.contributorName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contributorEmail">Your Email</label>
              <input
                type="email"
                id="contributorEmail"
                name="contributorEmail"
                value={formData.contributorEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">Submit Artifact</button>
        </form>
      </div>
    </div>
  );
};

export default Contribute; 