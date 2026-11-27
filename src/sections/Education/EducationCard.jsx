import React from 'react';

export function EducationCard({ institution, degree, status, description }) {
  return (
    <div className="card p-3 mb-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
        <h5 className="card-title mb-0">{institution}</h5>
        <span className="badge bg-warning text-dark fw-bold">{status}</span>
      </div>
      <div className="text-light fw-bold mb-1">{degree}</div>
      <p className="card-text text-white-50 small mb-0">{description}</p>
    </div>
  );
}

export default EducationCard;
