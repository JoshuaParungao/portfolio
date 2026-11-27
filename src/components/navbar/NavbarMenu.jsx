import React from 'react';
import { NavbarMenuItem } from './NavbarMenuItem';

export function NavbarMenu({ links, activeId, onItemClick }) {
  return (
    <div className="d-none d-md-flex align-items-center justify-content-center">
      {links.map((link) => (
        <NavbarMenuItem
          key={link.id}
          item={link}
          isActive={activeId === link.id}
          onClick={() => onItemClick && onItemClick(link.id)}
        />
      ))}
    </div>
  );
}
