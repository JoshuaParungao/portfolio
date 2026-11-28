import React from 'react';

export function ProjectCard({
  badge,
  secondaryBadges = [],
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  actionBtnText,
  onActionClick,
  externalLink,
  externalLinkText,
  liveDemoLink,
  liveDemoText,
  secondaryActionBtnText,
  variant = 'warning'
}) {
  const isCyan = variant === 'info';
  const borderClass = isCyan ? 'border-info' : 'border-warning';
  const glowStyle = isCyan
    ? { boxShadow: '0 0 15px rgba(13, 202, 240, 0.35)' }
    : { boxShadow: '0 0 15px rgba(244, 201, 0, 0.35)' };
  const titleClass = isCyan ? 'text-info' : 'text-warning';
  const btnClass = isCyan ? 'btn btn-info text-dark fw-bold' : 'btn btn-primary';

  return (
    <div className={`card mb-4 border ${borderClass}`} style={glowStyle}>
      <div className="row g-0 align-items-stretch">
        <div className="col-md-5 bg-black d-flex flex-column align-items-center justify-content-center p-3 text-center border-end border-secondary">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="img-fluid rounded"
            style={{
              objectFit: 'contain',
              maxHeight: '230px',
              filter: isCyan ? 'drop-shadow(0 0 15px rgba(13, 202, 240, 0.3))' : 'none'
            }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
              {badge && <span className={`badge ${isCyan ? 'bg-info text-dark' : 'bg-warning text-dark'} fw-bold`}>{badge}</span>}
              {secondaryBadges.map((b, i) => (
                <span key={i} className={`badge ${b.class || 'bg-secondary'}`}>
                  {b.text}
                </span>
              ))}
            </div>

            <h5 className={`card-title ${titleClass} fw-bold mb-2`}>{title}</h5>
            <p className="card-text text-light small mb-3">{description}</p>

            <div className="d-flex flex-wrap gap-1 mb-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="badge bg-black border border-secondary text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="d-flex gap-2 flex-wrap">
              {actionBtnText && (
                <button type="button" className={btnClass} onClick={onActionClick}>
                  {actionBtnText}
                </button>
              )}
              {liveDemoLink && (
                <a
                  href={liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary fw-bold text-white shadow-sm d-inline-flex align-items-center gap-1"
                >
                  <i className="bi bi-play-circle-fill"></i>
                  <span>{liveDemoText || 'Live Demo ↗'}</span>
                </a>
              )}
              {externalLink && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${isCyan ? 'btn-outline-info' : 'btn-outline-warning'} fw-bold`}
                >
                  {externalLinkText || 'View Live ↗'}
                </a>
              )}
              {secondaryActionBtnText && (
                <button
                  type="button"
                  className="btn btn-outline-secondary fw-bold"
                  disabled
                  style={{ cursor: 'not-allowed', opacity: 0.85 }}
                >
                  <i className="bi bi-hdd-network-fill me-1 text-info"></i>{secondaryActionBtnText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
