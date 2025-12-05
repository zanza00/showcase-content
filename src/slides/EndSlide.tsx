import React from 'react';

const EndSlide: React.FC = () => {
  return (
    <div className="slide slide-center">
      <h1 className="slide-title">Questions?</h1>
      <h2 className="slide-subtitle">Thank you!</h2>
      
      <div className="slide-section" style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
        <h3 className="section-title">Key Resources</h3>
        <ul className="bullet-list">
          <li>
            <a href="https://single-spa.js.org/" target="_blank" rel="noopener noreferrer" className="highlight">
              Single-SPA Documentation
            </a>
          </li>
          <li>
            <a href="https://github.com/single-spa/single-spa-react" target="_blank" rel="noopener noreferrer" className="highlight">
              single-spa-react
            </a> - React integration helper
          </li>
          <li>
            <a href="https://github.com/single-spa/import-map-overrides" target="_blank" rel="noopener noreferrer" className="highlight">
              Import Map Overrides
            </a> - Development tool
          </li>
          <li>
            <a href="https://github.com/WICG/import-maps" target="_blank" rel="noopener noreferrer" className="highlight">
              Import Maps Specification
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EndSlide;
