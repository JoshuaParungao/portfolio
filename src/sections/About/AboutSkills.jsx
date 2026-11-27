import React from 'react';
import { portfolioConfig } from '../../config/portfolioConfig';

export function AboutSkills() {
  const { tools } = portfolioConfig;

  return (
    <div className="tools-section my-5">
      <h3 className="text-center mb-4 text-dark" style={{ textShadow: 'none' }}>
        My Tools &amp; Technologies
      </h3>
      <div className="tools-slider">
        <div className="tools-track">
          {/* First set */}
          {tools.map((t, idx) => (
            <div key={`tool-1-${idx}`} className="tool-card">
              <img src={t.icon} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}

          {/* Duplicated set for infinite seamless loop */}
          {tools.map((t, idx) => (
            <div key={`tool-2-${idx}`} className="tool-card">
              <img src={t.icon} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;
