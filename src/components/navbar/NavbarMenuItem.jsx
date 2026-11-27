import React from 'react';

export function NavbarMenuItem({ item, isActive, onClick }) {
  return (
    <a
      href={item.href}
      className={`portfolio-nav-link ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {item.label}
    </a>
  );
}
