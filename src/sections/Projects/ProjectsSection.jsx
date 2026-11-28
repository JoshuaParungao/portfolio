import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetails } from './ProjectDetails';
import { portfolioConfig } from '../../config/portfolioConfig';
import './projects.css';

export function ProjectsSection() {
  const [activeModal, setActiveModal] = useState(null);
  const { flagships } = portfolioConfig;

  return (
    <section id="projects" className="projects-section">
      <h2 className="mb-4">Projects</h2>

      {/* Arunafeltz / POSynctify Featured Card */}
      <ProjectCard
        badge="⭐ FEATURED SYSTEM"
        secondaryBadges={[
          { text: 'PROPRIETARY CLIENT SYSTEM', class: 'bg-danger text-white fw-bold' },
          { text: '● ACTIVE PRODUCTION', class: 'bg-success text-white fw-bold' },
          { text: 'Multi-Branch Cloud POS', class: 'bg-secondary' }
        ]}
        title={flagships.arunafeltz.title}
        description={flagships.arunafeltz.description}
        imageSrc="/src/assets/images/projects/arunafeltz/banner.jpg"
        imageAlt="POSynctify Cloud POS & Business Management System"
        tags={flagships.arunafeltz.stack}
        actionBtnText="Explore Full Specs & Architecture"
        onActionClick={() => setActiveModal('arunafeltz')}
        liveDemoLink="http://i41hiagpd95rj79rh3habdao.187.77.131.56.sslip.io/?fbclid=IwY2xjawVz4clleHRuA2FlbQIxMABwZG9mBWJyaWQRMU1maDVQeGhWUHM0THUxRVpzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEfGVMCciOB3Rv_8_DvLZvzVHWoOlqPAR48qTPXHbv9HH-jdL0cE06pzmwydiU_aem_XfZ-dxvXPPA5GOyx2bE6rA#flexibility"
        liveDemoText="Live Demo ↗"
        externalLink="https://arunafeltzcomputerpos.cloud/"
        externalLinkText="Production Portal ↗"
        variant="warning"
      />

      {/* MedC Featured Card */}
      <ProjectCard
        badge="⭐ FEATURED CLIENT SYSTEM"
        secondaryBadges={[
          { text: 'PROPRIETARY CLIENT SYSTEM', class: 'bg-danger text-white fw-bold' },
          { text: '● ON-PREMISE PRODUCTION', class: 'bg-success text-white fw-bold' },
          { text: '3-App Desktop LAN Suite', class: 'bg-secondary' }
        ]}
        title={flagships.medc.title}
        description={flagships.medc.description}
        imageSrc="/src/assets/images/projects/medc/logo.png"
        imageAlt="MedC Drugstore LAN POS Suite"
        tags={flagships.medc.stack}
        actionBtnText="Explore Full Specs & 3 LAN Apps"
        onActionClick={() => setActiveModal('medc')}
        secondaryActionBtnText="Client On-Premise LAN Only"
        variant="info"
      />

      {/* Systems Card */}
      <ProjectCard
        badge="ACADEMIC & CAPSTONE"
        title="Software & System Development (Capstone & Projects)"
        description="Here's a summary of my software engineering systems, database projects, and Capstone project."
        imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
        imageAlt="Systems Project"
        tags={['Full-Stack', 'Systems Engineering', 'Database Design']}
        actionBtnText="View Project"
        onActionClick={() => setActiveModal('systems')}
        variant="warning"
      />

      {/* Design Portfolio Card */}
      <ProjectCard
        badge="CREATIVE LEADERSHIP"
        title="Comprehensive Profile in Editing, Design, and Photography"
        description="Here's a professional summary you can use for your project skills in editing, advertising, design, and photography."
        imageSrc="/src/assets/images/projects/work/shot.jpg"
        imageAlt="Design & Photography Portfolio"
        tags={['Photoshop', 'Illustrator', 'CorelDRAW', 'Premiere Pro']}
        actionBtnText="View Project"
        onActionClick={() => setActiveModal('design')}
        variant="warning"
      />

      {/* Architectural Modal Renderer */}
      <ProjectDetails activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}

export default ProjectsSection;
