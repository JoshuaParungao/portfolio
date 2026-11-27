import React, { useState } from 'react';
import { CertificateCard } from './CertificateCard';
import { CertificateGallery } from './CertificateGallery';
import './certificates.css';

export function CertificatesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="mb-3">Certificates</h2>
      <CertificateCard
        title="DATABASES, CCNA, ACADEMIC AWARDS &amp; COE"
        description="Successfully completed comprehensive training in backend technologies. These achievements are supported by academic awards, certifications in databases, and CCNA for networking fundamentals, as well as verified work experience demonstrated through a Certificate of Employment."
        imageSrc="/src/assets/images/certificates/award.jpg"
        imageAlt="Certificates &amp; Awards"
        onOpenModal={() => setModalOpen(true)}
      />
      <CertificateGallery isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default CertificatesSection;
