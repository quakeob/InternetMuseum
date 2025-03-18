import React, { useState } from 'react';
import './Upload.css';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div className="upload">
      <h2>Upload Image</h2>
      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="file-input"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="upload-button"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload; 