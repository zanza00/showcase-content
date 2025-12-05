import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './slides.css';

export default function Root() {
  return (
    <Router>
      <div className="slide-container">
        <Routes>
          {/* Content section */}
          <Route path="/content" element={<div className="slide">Architecture (Coming soon)</div>} />
          <Route path="/content/good" element={<div className="slide">The Good (Coming soon)</div>} />
          <Route path="/content/bad" element={<div className="slide">The Bad (Coming soon)</div>} />
          <Route path="/content/ugly" element={<div className="slide">The Ugly (Coming soon)</div>} />
          <Route path="/content/end" element={<div className="slide">Questions? (Coming soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}
