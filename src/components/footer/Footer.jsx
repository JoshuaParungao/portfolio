import React from 'react';
import './footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p className="mb-1 text-light">
          &copy; {currentYear} <span className="text-warning fw-bold">Joshua Parungao</span>. All rights reserved.
        </p>
        <p className="mb-0 text-secondary small">
          Engineered with React 18, Vite &amp; Enterprise Architecture Standards.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
