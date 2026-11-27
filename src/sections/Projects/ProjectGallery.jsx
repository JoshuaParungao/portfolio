import React from 'react';

export function ProjectGallery({ images = [], id = 'projectCarousel' }) {
  if (!images.length) return null;

  return (
    <div id={id} className="carousel slide project-carousel mb-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((img, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img src={img.src} className="d-block w-100" alt={img.alt || `Slide ${idx + 1}`} />
            {img.caption && (
              <div className="p-2 text-center bg-dark mt-1 rounded">
                <span className="text-warning fw-bold">{img.caption}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProjectGallery;
