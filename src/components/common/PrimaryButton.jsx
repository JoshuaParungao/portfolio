import React from 'react';
import './common.css';

export function PrimaryButton({ children, onClick, href, className = '', ...props }) {
  if (href) {
    return (
      <a href={href} className={`btn btn-gold ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`btn btn-gold ${className}`} {...props}>
      {children}
    </button>
  );
}
