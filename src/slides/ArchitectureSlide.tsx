import React from 'react';

const ArchitectureSlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">Technical Architecture</h1>
      
      <div className="slide-section">
        <h3 className="section-title">Webpack Externals Strategy</h3>
        <ul className="bullet-list">
          <li>Shared dependencies loaded once, avoiding multiple React instance conflicts</li>
          <li>Enables cross imports between packages at runtime</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title">Import Map as Dependency Registry</h3>
        <ul className="bullet-list">
          <li>JSON configuration mapping module names to URLs for runtime resolution</li>
          <li>Change versions by updating JSON, no code changes needed</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title">Root Config</h3>
        <ul className="bullet-list">
          <li>Acts as the orchestrator - loads and manages all microfrontends</li>
          <li>Loads, mounts, and unmounts based on URL changes</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title">Different Types</h3>
        <ul className="bullet-list">
          <li><strong className="highlight">Apps</strong> = routed pages</li>
          <li><strong className="highlight">Libs</strong> = shared utilities</li>
          <li><strong className="highlight">Parcels</strong> = mountable components</li>
        </ul>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
