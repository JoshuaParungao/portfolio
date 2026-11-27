import React from 'react';
import { ExperienceDetails } from './ExperienceDetails';
import { ExperienceCard } from './ExperienceCard';
import './work-experience.css';

export function WorkExperienceSection() {
  return (
    <section id="pastwork" className="work-experience-section">
      <h2 className="mb-3">Work Experience</h2>
      <ExperienceDetails />
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <ExperienceCard
            title="Lead Software Engineer & Systems Architect"
            company="Arunafeltz &amp; MedC Production Deployments"
            duration="Active 2024 - Present"
            description="Designed full-scale Cloud POS & ERP with PostgreSQL, Prisma ACID interactive transactions, and 3-App LAN desktop pharmacy suite using Electron and SQLite WAL."
            tags={['Cloud POS', 'Desktop LAN', 'PostgreSQL', 'SQLite WAL']}
          />
        </div>
        <div className="col-md-6">
          <ExperienceCard
            title="Freelance Graphic Artist & Creative Team Leader"
            company="Commercial Multimedia & Advertising"
            duration="5+ Years Experience"
            description="Supervised visual campaigns, product branding packaging, digital artwork, and photo/video editing across Photoshop, Illustrator, CorelDRAW, and Premiere Pro."
            tags={['Photoshop', 'Illustrator', 'CorelDRAW', 'Leadership']}
          />
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;
