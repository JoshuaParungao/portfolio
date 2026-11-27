import React from 'react';
import { AboutProfile } from './AboutProfile';
import { AboutSkills } from './AboutSkills';

export function AboutContent() {
  return (
    <div className="about-content">
      <AboutProfile />
      <AboutSkills />
    </div>
  );
}

export default AboutContent;
