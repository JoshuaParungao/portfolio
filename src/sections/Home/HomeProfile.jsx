import React from 'react';
import { portfolioConfig } from '../../config/portfolioConfig';

export function HomeProfile() {
  const { author } = portfolioConfig;

  return (
    <div className="col-lg-5 text-center text-lg-start">
      <div className="mb-3">
        <img
          src="/src/assets/images/profile/profile.jpg"
          alt={`${author.name} Portrait`}
          className="hero-avatar"
          onError={(e) => {
            e.currentTarget.src = './image/profile.jpg';
          }}
        />
      </div>
      <h1 className="mb-1" style={{ fontSize: '2.3rem' }}>{author.name}</h1>
      <div className="text-warning fw-bold mb-2" style={{ fontSize: '1.15rem', letterSpacing: '0.5px' }}>
        {author.title}
      </div>
      <p className="text-white-50 small mb-3" style={{ lineHeight: '1.55' }}>
        {author.bio}
      </p>
      <div className="d-flex flex-wrap gap-1 justify-content-center justify-content-lg-start">
        <span className="badge bg-black border border-warning text-warning">Enterprise ERP</span>
        <span className="badge bg-dark border border-secondary text-light">PostgreSQL</span>
        <span className="badge bg-dark border border-secondary text-light">Prisma ORM</span>
        <span className="badge bg-dark border border-secondary text-light">React 18</span>
        <span className="badge bg-dark border border-secondary text-light">Node.js</span>
        <span className="badge bg-dark border border-secondary text-light">POS Hardware</span>
      </div>
    </div>
  );
}

export default HomeProfile;
