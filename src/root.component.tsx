import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArchitectureSlide from './slides/ArchitectureSlide';
import TheGoodSlide from './slides/TheGoodSlide';
import TheBadSlide from './slides/TheBadSlide';
import TheUglySlide from './slides/TheUglySlide';
import EndSlide from './slides/EndSlide';
import './slides.css';

export default function Root() {
  return (
    <Router>
      <div className="slide-container">
        <Routes>
          {/* Content section */}
          <Route path="/content" element={<ArchitectureSlide />} />
          <Route path="/content/good" element={<TheGoodSlide />} />
          <Route path="/content/bad" element={<TheBadSlide />} />
          <Route path="/content/ugly" element={<TheUglySlide />} />
          <Route path="/content/end" element={<EndSlide />} />
        </Routes>
      </div>
    </Router>
  );
}
