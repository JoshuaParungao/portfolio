import React from 'react';

export function CertificateCard({ title, description, imageSrc, imageAlt, onOpenModal }) {
  return (
    <div className="card mb-4">
      <div className="row g-0 align-items-stretch">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-warning fw-bold">{title}</h5>
            <p className="card-text text-light small mb-3">{description}</p>
            <button type="button" className="btn btn-primary" onClick={onOpenModal}>
              View Certificates
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="img-fluid rounded-end w-100 h-100 certificate-card-img"
          />
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
