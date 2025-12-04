import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroSlide from './slides/IntroSlide';
import AboutSlide from './slides/AboutSlide';
import SetupSlide from './slides/SetupSlide';
import SpoilersSlide from './slides/SpoilersSlide';
import './slides.css';

export default function Root() {
  return (
    <Router>
      <div className="slide-container">
        <Routes>
          <Route path="/" element={<IntroSlide />} />
          <Route path="/about" element={<AboutSlide />} />
          <Route path="/setup" element={<SetupSlide />} />
          <Route path="/spoilers" element={<SpoilersSlide />} />
          {/* Placeholder routes for other sections */}
          <Route path="/architecture" element={<div className="slide">Architecture (Coming soon)</div>} />
          <Route path="/good" element={<div className="slide">The Good (Coming soon)</div>} />
          <Route path="/bad" element={<div className="slide">The Bad (Coming soon)</div>} />
          <Route path="/ugly" element={<div className="slide">The Ugly (Coming soon)</div>} />
          <Route path="/end" element={<div className="slide">Questions? (Coming soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}
