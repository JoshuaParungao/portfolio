import React from 'react';
import './common.css';

export function SecondaryButton({ children, onClick, href, className = '', ...props }) {
  if (href) {
    return (
      <a href={href} className={`btn btn-outline-gold ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`btn btn-outline-gold ${className}`} {...props}>
      {children}
    </button>
  );
}
