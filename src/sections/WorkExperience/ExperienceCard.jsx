import React from 'react';

export function ExperienceCard({ title, duration, company, description, tags = [] }) {
  return (
    <div className="card mb-3 p-3">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
        <div>
          <h5 className="card-title mb-0">{title}</h5>
          {company && <span className="text-secondary small">{company}</span>}
        </div>
        {duration && <span className="badge bg-warning text-dark fw-bold">{duration}</span>}
      </div>
      <p className="card-text text-light small mb-2">{description}</p>
      {tags.length > 0 && (
        <div className="d-flex flex-wrap gap-1">
          {tags.map((t, i) => (
            <span key={i} className="badge bg-black border border-secondary text-secondary small">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
