import React from 'react';
import { EducationDetails } from './EducationDetails';
import { EducationCard } from './EducationCard';
import { portfolioConfig } from '../../config/portfolioConfig';
import './education.css';

export function EducationSection() {
  const { education } = portfolioConfig.author;

  return (
    <section id="education">
      <h2 className="mb-3">Education</h2>
      <EducationCard
        institution={education.institution}
        degree={education.degree}
        status={education.status}
        description={education.description}
      />
      <EducationDetails />
    </section>
  );
}

export default EducationSection;
