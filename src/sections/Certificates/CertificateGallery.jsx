import React from 'react';

export function CertificateGallery({ isOpen, onClose }) {
  if (!isOpen) return null;

  const certificates = [
    { src: '/src/assets/images/certificates/award.jpg', caption: 'Academic & Professional Excellence Award' },
    { src: '/src/assets/images/certificates/DATABASES-CERTIFICATE_page-0001.jpg', caption: 'Enterprise Database Administration Certificate' },
    { src: '/src/assets/images/certificates/Presidential Lister.jpg', caption: 'Presidential Lister Academic Honors' },
    { src: '/src/assets/images/certificates/quiz bee.jpg', caption: 'IT Quiz Bee Championship Recognition' }
  ];

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1055 }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-black text-light border border-warning shadow-lg">
          <div className="modal-header border-bottom border-secondary d-flex justify-content-between align-items-center">
            <h5 className="modal-title text-warning fw-bold mb-0">Certificates &amp; Awards Gallery</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close" />
          </div>
          <div className="modal-body p-4 text-center">
            <div id="certCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#certCarousel"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Certificate ${i + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-inner">
                {certificates.map((c, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img
                      src={c.src}
                      className="d-block w-100 rounded"
                      style={{ maxHeight: '480px', objectFit: 'contain', background: '#090909' }}
                      alt={c.caption}
                    />
                    <div className="p-2 text-center bg-dark mt-2 rounded">
                      <span className="text-warning fw-bold small">{c.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#certCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#certCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
          <div className="modal-footer border-top border-secondary">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateGallery;
