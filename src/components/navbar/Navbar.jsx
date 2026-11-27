import React, { useState } from 'react';
import { navbarLinks } from '../../config/navbarConfig';
import { useActiveNavbarSection } from '../../hooks/useActiveNavbarSection';
import { NavbarMenu } from './NavbarMenu';
import { NavbarMobileToggle } from './NavbarMobileToggle';
import { NavbarMobileMenu } from './NavbarMobileMenu';
import './navbar.css';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveNavbarSection(navbarLinks.map(l => l.id));

  function handleItemClick() {
    setMobileOpen(false);
  }

  return (
    <nav className="portfolio-navbar py-3 px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between justify-content-md-center">
        <a href="#landing" className="d-md-none text-warning fw-bold text-decoration-none">
          JP // SYSTEM
        </a>
        <NavbarMenu links={navbarLinks} activeId={activeId} onItemClick={handleItemClick} />
        <NavbarMobileToggle isOpen={mobileOpen} onClick={() => setMobileOpen(prev => !prev)} />
      </div>
      <NavbarMobileMenu
        isOpen={mobileOpen}
        links={navbarLinks}
        activeId={activeId}
        onItemClick={handleItemClick}
      />
    </nav>
  );
}

export default Navbar;
