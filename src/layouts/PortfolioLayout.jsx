import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

export function PortfolioLayout({ children }) {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PortfolioLayout;
