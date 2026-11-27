import React from 'react';

export function NavbarMobileToggle({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className="mobile-nav-toggle d-md-none"
      onClick={onClick}
      aria-label="Toggle navigation"
    >
      <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.25rem' }} />
    </button>
  );
}
