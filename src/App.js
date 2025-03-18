import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Timeline from './components/pages/Timeline';
import Collections from './components/pages/Collections';
import DigitalArtifacts from './components/pages/DigitalArtifacts';
import Contribute from './components/pages/Contribute';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/artifacts" element={<DigitalArtifacts />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 