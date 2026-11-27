import React from 'react';
import { portfolioConfig } from '../../config/portfolioConfig';

export function AboutProfile() {
  const { author } = portfolioConfig;

  return (
    <div className="about-profile mb-4">
      <h2 className="mb-3">About Me</h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#222' }}>
        {author.extendedBio}
      </p>
    </div>
  );
}

export default AboutProfile;
