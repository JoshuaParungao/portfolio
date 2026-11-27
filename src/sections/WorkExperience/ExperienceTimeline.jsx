import React from 'react';

export function ExperienceTimeline({ items = [] }) {
  return (
    <div className="experience-timeline">
      {items.map((item, idx) => (
        <div key={idx} className="timeline-item mb-3">
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="badge bg-warning text-dark fw-bold">{item.period}</span>
            <strong className="text-light">{item.role}</strong>
          </div>
          <p className="text-white-50 small mb-0">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
