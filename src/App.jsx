import React from 'react';
import { PortfolioLayout } from './layouts/PortfolioLayout';
import { HomeSection } from './sections/Home';
import { AboutSection } from './sections/About';
import { WorkExperienceSection } from './sections/WorkExperience';
import { EducationSection } from './sections/Education';
import { ProjectsSection } from './sections/Projects';
import { CertificatesSection } from './sections/Certificates';
import { ContactSection } from './sections/Contact';

export function App() {
  return (
    <PortfolioLayout>
      <HomeSection />
      <AboutSection />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </PortfolioLayout>
  );
}

export default App;
