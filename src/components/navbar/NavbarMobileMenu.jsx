import React from 'react';
import { NavbarMenuItem } from './NavbarMenuItem';

export function NavbarMobileMenu({ isOpen, links, activeId, onItemClick }) {
  if (!isOpen) return null;

  return (
    <div className="d-md-none bg-black border-top border-secondary py-3 px-4 d-flex flex-column gap-2 text-center">
      {links.map((link) => (
        <NavbarMenuItem
          key={link.id}
          item={link}
          isActive={activeId === link.id}
          onClick={() => {
            if (onItemClick) onItemClick(link.id);
          }}
        />
      ))}
    </div>
  );
}
