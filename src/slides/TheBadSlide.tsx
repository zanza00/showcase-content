import React from 'react';

const TheBadSlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">The Bad</h1>
      <p className="slide-tagline">Challenges with solutions, but they create overhead</p>
      
      <div className="slide-section">
        <h3 className="section-title problem">Everything is at Runtime</h3>
        <ul className="bullet-list">
          <li>Runtime failures = blank pages with no error reporting</li>
          <li>Import map syntax errors, network failures, JS errors in bootstrap</li>
          <li>Requires robust error handling and monitoring</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title problem">Library Compatibility is Poor</h3>
        <ul className="bullet-list">
          <li>Sentry, analytics, React Query don't play nice with multiple MFE initialization</li>
          <li>Each MFE tries to initialize libraries independently</li>
          <li><strong>Solution:</strong> Infrastructure MFE for centralized initialization</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title problem">Environment Configuration Complexity</h3>
        <ul className="bullet-list">
          <li>15 configurations (5 sites × 3 envs) bundled to all MFEs</li>
          <li>Security concerns: MFEs know about environments they shouldn't</li>
          <li>Configuration complexity multiplies with each new site/environment</li>
        </ul>
      </div>
    </div>
  );
};

export default TheBadSlide;
