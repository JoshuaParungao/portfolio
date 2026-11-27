import React from 'react';

export function SectionHeading({ children, subtitle, className = '' }) {
  return (
    <div className={`section-heading mb-4 ${className}`}>
      <h2 className="mb-1">{children}</h2>
      {subtitle && <p className="text-secondary small mb-0">{subtitle}</p>}
    </div>
  );
}
