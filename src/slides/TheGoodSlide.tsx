import React from 'react';

const TheGoodSlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">The Good</h1>
      <p className="slide-tagline">What actually works well in microfrontend land</p>
      
      <div className="slide-section">
        <h3 className="section-title solution">Import Maps Are Really Powerful</h3>
        <ul className="bullet-list">
          <li>Dynamic configuration: static file or serve from server for runtime updates</li>
          <li>Dynamic bundle loading: load bundles from PRs for preview in staging/prod</li>
          <li>Version testing: test new versions by overriding import map locally</li>
          <li>Independent deployments: deploy MFEs completely independently</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title solution">Cross-MFE Integration</h3>
        <ul className="bullet-list">
          <li>Shared React hooks and utilities work seamlessly across MFEs</li>
          <li>React component libraries provide design consistency</li>
          <li>Cross-team code reuse and standardization</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title solution">Import Map Overrider</h3>
        <ul className="bullet-list">
          <li><code>npm start</code> → navigate to staging/prod → override your App</li>
          <li>Your local code runs with <strong className="highlight">real APIs and data</strong></li>
          <li>No complex local backend setup needed</li>
        </ul>
      </div>
    </div>
  );
};

export default TheGoodSlide;
