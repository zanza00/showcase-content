import React from 'react';

const TheUglySlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">The Ugly</h1>
      <p className="slide-tagline">Harsh realities and unavoidable trade-offs at scale</p>
      
      <div className="slide-section">
        <h3 className="section-title problem">Backward Compatibility is Sacred</h3>
        <ul className="bullet-list">
          <li>Breaking shared functions = production disasters across 40+ MFEs</li>
          <li>Never break shared functions between MFEs</li>
          <li><strong>Pattern:</strong> Version your exports (v1, v2, v3) instead of changing</li>
          <li>Add usage tracking to deprecated functions for migration planning</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title problem">Hidden Dependencies Problem</h3>
        <ul className="bullet-list">
          <li>Import maps make MFE relationships invisible</li>
          <li>Dependencies surface unexpectedly when creating new sites</li>
          <li>Deploy order matters but isn't enforced</li>
          <li>Runtime resolution makes relationships invisible at dev time</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title problem">Automation Becomes Essential</h3>
        <ul className="bullet-list">
          <li>40+ MFEs need coordinated updates for every shared change</li>
          <li>Custom CLI for upgrades, validation, and promotion</li>
          <li>Multi-deploy orchestration site for coordinated deployments</li>
          <li><strong className="highlight">Investment:</strong> Dedicated infrastructure team + ongoing maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default TheUglySlide;
