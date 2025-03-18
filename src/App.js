import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Archive from './components/Archive';
import Upload from './components/Upload';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/archive" className="nav-link">Archive</Link>
          <Link to="/upload" className="nav-link">Upload</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-link nav-link-login">Login</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 