import React from 'react';
import { ProjectGallery } from './ProjectGallery';

export function ProjectDetails({ activeModal, onClose }) {
  if (!activeModal) return null;

  const arunafeltzImages = [
    { src: '/src/assets/images/projects/arunafeltz/banner.jpg', alt: 'Arunafeltz Banner', caption: 'Cloud POS Cashiering & Store Operations Dashboard' },
    { src: '/src/assets/images/projects/arunafeltz/logo.png', alt: 'Arunafeltz Logo', caption: 'Arunafeltz Cloud Computer POS & Business Monitoring ERP' },
    { src: '/src/assets/images/projects/arunafeltz/receipt.png', alt: 'Arunafeltz Receipt', caption: 'Automated Receipts, Warranty Slips & Statement Exports' }
  ];

  const medcImages = [
    { src: '/src/assets/images/projects/medc/banner.png', alt: 'MedC Suite Banner', caption: 'MedC Enterprise 3-App LAN Suite Dashboard' },
    { src: '/src/assets/images/projects/medc/logo.png', alt: 'MedC Logo', caption: 'On-Premise Drugstore POS, Expiry & Stock Controller' }
  ];

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1055 }}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content bg-black text-light border border-warning shadow-lg">
          <div className="modal-header border-bottom border-secondary d-flex justify-content-between align-items-center">
            <div>
              <span className="badge bg-warning text-dark fw-bold mb-1">ENTERPRISE SYSTEM ARCHITECTURE</span>
              <h4 className="modal-title text-warning fw-bold mb-0">
                {activeModal === 'arunafeltz' && 'Arunafeltz — Enterprise Multi-Branch Cloud POS, Inventory & Service ERP'}
                {activeModal === 'medc' && 'MedC — Enterprise LAN-Based Drugstore POS, Expiry Tracking & Inventory ERP'}
                {activeModal === 'systems' && 'Software & System Development (Capstone & Projects)'}
                {activeModal === 'design' && 'Comprehensive Profile in Editing, Design, and Photography'}
              </h4>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close" />
          </div>

          <div className="modal-body p-4">
            {activeModal === 'arunafeltz' && (
              <div>
                <ProjectGallery id="arunafeltzCarousel" images={arunafeltzImages} />
                <div className="row g-3 mb-4">
                  <div className="col-md-8">
                    <h5 className="text-warning fw-bold">Project Summary</h5>
                    <p className="text-white-50 small mb-2">
                      <strong>Arunafeltz</strong> is a custom, production-grade cloud Enterprise Resource Planning (ERP) and multi-branch Point of Sale (POS) system engineered for computer hardware retailers, custom PC builders, and tech service repair shops.
                    </p>
                    <p className="text-white-50 small mb-0">
                      The platform manages the complete retail lifecycle: supplier purchase receiving, serialized barcode allocations, real-time counter sales, multi-tier pricing formulas, repair job orders, and shift auditing.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-dark border border-secondary">
                      <h6 className="text-warning fw-bold mb-2">Tech Stack</h6>
                      <ul className="list-unstyled small mb-0 text-secondary">
                        <li><strong className="text-light">Frontend:</strong> React 18, Vite, Tailwind CSS</li>
                        <li><strong className="text-light">Backend:</strong> Node.js, Express.js, REST API</li>
                        <li><strong className="text-light">Database:</strong> PostgreSQL, Prisma ORM</li>
                        <li><strong className="text-light">Security:</strong> 5-Tier RBAC, Atomic Transactions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'medc' && (
              <div>
                <ProjectGallery id="medcCarousel" images={medcImages} />
                <div className="row g-3 mb-4">
                  <div className="col-md-8">
                    <h5 className="text-info fw-bold">MedC 3-App LAN Architecture</h5>
                    <p className="text-white-50 small mb-2">
                      Engineered for high-volume pharmacies with zero cloud latency. Distributed as 3 independent Windows executables: <strong>MEDC.S Server.exe</strong> (central SQLite WAL controller), <strong>MEDC.CSM Cashier.exe</strong> (frontline POS with thermal ESC/POS receipt generation), and <strong>MEDC.SASM Store Admin.exe</strong> (inventory, batch FIFO expiry &amp; reporting).
                    </p>
                    <div className="p-3 bg-black border border-secondary rounded">
                      <pre className="text-info small mb-0 font-monospace" style={{ lineHeight: 1.35, overflowX: 'auto' }}>
{`+---------------------------------------------------------------------------------+
|                    MEDC PHARMACY ON-PREMISE LOCAL AREA NETWORK                  |
|                       (Isolated Gigabit Switch / Store Router)                  |
+---------------------------------------------------------------------------------+
                                         |
                +------------------------+------------------------+
                |                                                 |
+-------------------------------+                 +-------------------------------+
|   CENTRAL SERVER WORKSTATION  |                 |     CASHIER TERMINAL (POS)    |
| App: MEDC.S Server.exe        |                 | App: MEDC.CSM Cashier.exe     |
| DB:  SQLite WAL Mode Engine   |                 | IO:  Thermal 80mm ESC/POS     |
+-------------------------------+                 +-------------------------------+
                |
+-------------------------------+
|  STORE ADMIN & PHARMACY DESK  |
| App: MEDC.SASM Store Admin.exe|
| Task: FIFO Expiry & Disposal  |
+-------------------------------+`}
                      </pre>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-dark border border-secondary">
                      <h6 className="text-info fw-bold mb-2">LAN Tech Specs</h6>
                      <ul className="list-unstyled small mb-0 text-secondary">
                        <li><strong className="text-light">Framework:</strong> Electron + React 18 + Vite</li>
                        <li><strong className="text-light">Engine:</strong> Node.js + Express REST</li>
                        <li><strong className="text-light">Database:</strong> SQLite WAL (Write-Ahead Log)</li>
                        <li><strong className="text-light">Printing:</strong> Raw ESC/POS Thermal Commands</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'systems' && (
              <div>
                <h5 className="text-warning fw-bold mb-2">Software &amp; System Development (Capstone &amp; Projects)</h5>
                <p className="text-white-50 small mb-3">
                  Comprehensive breakdown of custom software architectures, distributed client-server applications, relational database schemas, and academic capstone engineering achievements.
                </p>
                <div className="p-3 rounded bg-dark border border-secondary">
                  <h6 className="text-warning fw-bold">Engineering Disciplines:</h6>
                  <p className="text-light small mb-0">
                    Full-Stack Web Applications, LAN Desktop Systems, Real-Time Hardware Interfacing, and Enterprise Database Administration.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'design' && (
              <div>
                <h5 className="text-warning fw-bold mb-2">Comprehensive Profile in Editing, Design, and Photography</h5>
                <p className="text-white-50 small mb-3">
                  5+ years of freelance graphic design leadership, professional photo/video editing, corporate brand identity systems, packaging designs, and multimedia advertising solutions.
                </p>
                <div className="p-3 rounded bg-dark border border-secondary">
                  <h6 className="text-warning fw-bold">Creative Suite:</h6>
                  <p className="text-light small mb-0">
                    Adobe Photoshop, Illustrator, Lightroom, Premiere Pro, CorelDRAW, and Figma.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer border-top border-secondary">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
