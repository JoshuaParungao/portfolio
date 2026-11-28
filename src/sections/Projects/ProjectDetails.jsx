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
                {activeModal === 'arunafeltz' && 'POSynctify (Arunafeltz) — Multi-Branch Cloud POS, Serial Lifecycle & Business Management'}
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
                {/* Live Interactive Production Demo Banner */}
                <div className="p-3 mb-4 rounded bg-dark border border-warning shadow-sm">
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                        <span className="badge bg-warning text-dark fw-bold">
                          <i className="bi bi-broadcast me-1"></i>LIVE INTERACTIVE PRODUCTION DEMO
                        </span>
                        <span className="badge bg-success text-white fw-bold">● ONLINE / READY</span>
                        <span className="badge bg-dark border border-secondary text-secondary">Evaluator Preset Accounts Available</span>
                      </div>
                      <h5 className="text-warning fw-bold mb-1">POSynctify Live Cloud POS Demo</h5>
                      <p className="small text-white-50 mb-0">
                        Experience the live system showcase featuring offline-first IndexedDB resilience, PayMongo QR Ph payment checkout, customer AR credit ledger, customizable financing interest rates, and granular six-layer executive financial analytics.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="http://i41hiagpd95rj79rh3habdao.187.77.131.56.sslip.io/?fbclid=IwY2xjawVz4clleHRuA2FlbQIxMABwZG9mBWJyaWQRMU1maDVQeGhWUHM0THUxRVpzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEfGVMCciOB3Rv_8_DvLZvzVHWoOlqPAR48qTPXHbv9HH-jdL0cE06pzmwydiU_aem_XfZ-dxvXPPA5GOyx2bE6rA#flexibility"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-warning fw-bold text-dark d-inline-flex align-items-center gap-2 px-3 py-2 text-nowrap shadow"
                      >
                        <i className="bi bi-play-circle-fill"></i>
                        <span>Launch Live Demo ↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                <ProjectGallery id="arunafeltzCarousel" images={arunafeltzImages} />
                <div className="row g-3 mb-4">
                  <div className="col-md-8">
                    <h5 className="text-warning fw-bold">Project Summary</h5>
                    <p className="text-white-50 small mb-2">
                      <strong>POSynctify (formerly Arunafeltz)</strong> is a production-grade Cloud Point of Sale (POS) and Business Management System engineered for computer hardware retailers, custom PC builders, and tech service repair shops.
                    </p>
                    <p className="text-white-50 small mb-0">
                      The platform manages the complete retail and service lifecycle: supplier purchase receiving, serialized barcode allocations, offline-first IndexedDB counter sales, dynamic wholesale markups, customer AR ledger financing with customizable interest %, technician job orders, and shift auditing.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-dark border border-secondary">
                      <h6 className="text-warning fw-bold mb-2">Tech Stack</h6>
                      <ul className="list-unstyled small mb-0 text-secondary">
                        <li><strong className="text-light">Frontend:</strong> React 19, Vite, Tailwind CSS</li>
                        <li><strong className="text-light">Backend:</strong> Node.js, Express.js, REST API</li>
                        <li><strong className="text-light">Database:</strong> PostgreSQL, Prisma ORM</li>
                        <li><strong className="text-light">Integrations:</strong> IndexedDB, PayMongo, Gmail SMTP</li>
                        <li><strong className="text-light">DevOps:</strong> Docker, Coolify Linux VPS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'medc' && (
              <div>
                <ProjectGallery id="medcCarousel" images={medcImages} />

                {/* Physical Production Storefront & Identity Banner */}
                <div className="mb-4 text-center">
                  <div
                    className="position-relative overflow-hidden rounded-3 border border-info shadow d-inline-block w-100"
                    style={{ maxWidth: '760px', backgroundColor: '#050b14' }}
                  >
                    <div className="p-4 d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4">
                      <img
                        src="/src/assets/images/projects/medc/logo.png"
                        className="img-fluid rounded"
                        style={{ maxHeight: '180px', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(13, 202, 240, 0.35))' }}
                        alt="MedC Drugstore and Medical Supplies"
                      />
                      <div className="text-start">
                        <span className="badge bg-info text-dark fw-bold mb-2">COMMERCIAL ON-PREMISE PRODUCTION</span>
                        <h4 className="text-white fw-bold mb-1">MedC Drugstore &amp; Medical Supplies</h4>
                        <div className="text-info small fw-bold mb-2">
                          <i className="bi bi-geo-alt-fill me-1"></i>McArthur Highway, Dolores, City of San Fernando, Pampanga
                        </div>
                        <p className="text-white-50 small mb-0">
                          High-throughput pharmaceutical retail hub operating mission-critical inventory, batch expiry quarantine, and rapid cashier counters across physical store terminals.
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-center bg-dark border-top border-secondary">
                      <span className="text-info small fw-bold">
                        <i className="bi bi-hdd-network me-1"></i>On-Premise LAN Multi-Terminal Deployment: Central Store Server • Cashier Terminal • Pharmacist Admin Station
                      </span>
                    </div>
                  </div>
                </div>

                {/* Commercial Client Turnover & Data Privacy Notice */}
                <div className="p-3 mb-4 rounded bg-dark border border-info shadow-sm">
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                        <span className="badge bg-danger text-white fw-bold">
                          <i className="bi bi-file-earmark-lock-fill me-1"></i>COMMERCIAL TURNOVER &amp; STRICT NDA
                        </span>
                        <span className="badge bg-dark border border-secondary text-secondary">Location: Dolores, CSFP</span>
                        <span className="badge bg-info text-dark fw-bold">
                          <i className="bi bi-shield-shaded me-1"></i>AIR-GAPPED LAN SECURITY
                        </span>
                      </div>
                      <h6 className="text-info fw-bold mb-1">Active Client Production System &amp; Data Confidentiality Notice</h6>
                      <p className="small text-white-50 mb-0">
                        This custom enterprise pharmaceutical ERP and POS system is in continuous active operation on client premises under a formal commercial turnover agreement. In compliance with strict pharmaceutical client privacy, patient prescription data protection, and commercial non-disclosure terms, the system is <strong>strictly deployed on-premise over an isolated local area network (LAN)</strong> without public web endpoints. Complete architectural workflows, database migrations, unit conversion algorithms, and source code modules are demonstrated via technical presentations and portfolio review sessions.
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-1 flex-shrink-0 align-items-md-end">
                      <div className="btn btn-outline-info fw-bold text-nowrap d-inline-flex align-items-center gap-1 shadow-sm px-3 py-2 disabled" style={{ opacity: 0.9, cursor: 'default' }}>
                        <i className="bi bi-shield-check"></i><span>100% On-Premise LAN</span>
                      </div>
                      <span className="text-secondary" style={{ fontSize: '0.72rem' }}>
                        <i className="bi bi-hdd-fill me-1"></i>Zero Cloud Outage Risk
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architectural Rationale & Why LAN-Based */}
                <div className="row g-3 mb-4">
                  <div className="col-lg-6">
                    <div className="p-3 rounded bg-dark border border-secondary h-100">
                      <h5 className="text-info fw-bold mb-2">
                        <i className="bi bi-cpu-fill me-2"></i>Engineering Rationale: Why an Offline-First LAN Suite?
                      </h5>
                      <p className="text-white-50 small mb-2">
                        Unlike traditional web-based retail systems, retail drugstores require <strong>zero-downtime fault tolerance</strong>. Internet service outages (ISP drops, DNS failures, latency spikes) immediately halt customer checkouts, leading to lost revenue and customer frustration.
                      </p>
                      <p className="text-white-50 small mb-2">
                        <strong>The Engineering Solution:</strong> MedC was engineered as an <em>on-premise distributed LAN suite</em>. The central backend server, high-speed SQLite database engine, and frontend Electron workstations run entirely within the physical building's Gigabit network.
                      </p>
                      <div className="p-2 rounded bg-black border border-secondary small">
                        <div className="text-info fw-bold mb-1"><i className="bi bi-check2-circle me-1"></i>Key Architectural Advantages:</div>
                        <div className="text-white-50">• <strong>Microsecond Barcode Response:</strong> Immediate barcode lookup with zero internet round-trip ping.</div>
                        <div className="text-white-50">• <strong>Zero Cloud Overhead:</strong> Eliminates perpetual monthly cloud hosting bills and third-party SaaS vendor lock-in.</div>
                        <div className="text-white-50">• <strong>Data Sovereignty:</strong> All customer ledgers, daily sales, and supplier costs remain securely inside store premises.</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-3 rounded bg-dark border border-secondary h-100">
                      <h6 className="text-info fw-bold mb-2">
                        <i className="bi bi-gear-wide-connected me-2"></i>Full Technical Specifications
                      </h6>
                      <div className="row g-2 small">
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Desktop Runtime:</strong> Electron (Chromium &amp; Node.js IPC), NSIS Password Installers</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Frontend Core:</strong> React 18 SPA, Vite, Modular CSS, Lucide Icons</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Backend API:</strong> Express.js REST Core, Custom Migration Runner, Log Rotator</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Database:</strong> SQLite with WAL Mode (Concurrent Read/Write), Automated Backups</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Networking:</strong> Cross-Subnet LAN Binding (0.0.0.0:3000), Local Static IP Routing</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Search Engine:</strong> 1-Char Sub-Second Multi-Column OmniSearch (Name, SKU, Barcode)</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Hardware/Peripherals:</strong> Direct ESC/POS Thermal Receipt (80mm/58mm), Laser Scanners</div>
                        </div>
                        <div className="col-sm-6">
                          <div className="text-secondary"><strong className="text-light">Document Exports:</strong> Styled Excel (.xlsx via ExcelJS), Vector PDF, DOCX Engine</div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 rounded bg-black border border-info small">
                        <span className="text-info fw-bold">Package Security:</span> Built with custom NSIS installer authorization gates preventing unauthorized extraction and ensuring dedicated hardware binding during client deployment.
                      </div>
                    </div>
                  </div>
                </div>

                {/* OFFICIAL ENTERPRISE DESKTOP RELEASE PACKAGES (VERIFIED EXEs - NOT DOWNLOADABLE) */}
                <div className="p-3 mb-4 rounded bg-dark border border-warning shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                        <span className="badge bg-warning text-dark fw-bold"><i className="bi bi-shield-lock-fill me-1"></i>PROPRIETARY CLIENT PACKAGES</span>
                        <span className="badge bg-danger text-white fw-bold">● NOT PUBLICLY DOWNLOADABLE</span>
                        <span className="badge bg-dark border border-secondary text-secondary">v2.1.1 Production Release Binaries</span>
                      </div>
                      <h5 className="text-warning fw-bold mb-0">
                        <i className="bi bi-file-earmark-binary-fill me-2"></i>Official Enterprise Desktop Executable Packages (3 LAN Apps)
                      </h5>
                      <span className="text-white-50 small">Production-ready Windows x64 NSIS installers with password authorization gates and client hardware binding.</span>
                    </div>
                    <span className="badge bg-black border border-warning text-warning px-3 py-2">
                      <i className="bi bi-lock-fill me-1"></i>Licensed Client Deliverables
                    </span>
                  </div>

                  <div className="row g-3 mb-3">
                    {/* EXE 1: MEDC.S-Server-Setup-2.1.1.exe */}
                    <div className="col-md-4">
                      <div className="p-3 rounded bg-black border border-secondary h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="badge bg-info text-dark fw-bold">SERVER DAEMON</span>
                            <span className="text-secondary small font-monospace">114.8 MB</span>
                          </div>
                          <h6 className="text-white fw-bold mb-1 font-monospace text-break" style={{ fontSize: '0.88rem' }}>
                            <i className="bi bi-filetype-exe text-info me-1"></i>MEDC.S-Server-Setup-2.1.1.exe
                          </h6>
                          <div className="text-white-50 small mb-2">Central Express REST Server, SQLite WAL Engine &amp; Desktop Tray Controller</div>
                          <div className="p-2 rounded bg-dark border border-secondary mb-3 small font-monospace text-secondary" style={{ fontSize: '0.72rem', wordBreak: 'break-all' }}>
                            <div className="text-white-50 fw-bold">SHA-256 Checksum:</div>
                            392440aebb2f358fc75a3b51d79dd903...
                          </div>
                        </div>
                        <div>
                          <button type="button" className="btn btn-outline-secondary btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-1" disabled style={{ cursor: 'not-allowed', opacity: 0.75 }}>
                            <i className="bi bi-lock-fill text-warning"></i><span>Download Restricted (NDA)</span>
                          </button>
                          <div className="text-center text-secondary mt-1" style={{ fontSize: '0.68rem' }}>Authorized Store Server Workstation Only</div>
                        </div>
                      </div>
                    </div>

                    {/* EXE 2: MEDC.CSM-Cashier-Setup-2.1.1.exe */}
                    <div className="col-md-4">
                      <div className="p-3 rounded bg-black border border-secondary h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="badge bg-warning text-dark fw-bold">CASHIER POS</span>
                            <span className="text-secondary small font-monospace">99.5 MB</span>
                          </div>
                          <h6 className="text-white fw-bold mb-1 font-monospace text-break" style={{ fontSize: '0.88rem' }}>
                            <i className="bi bi-filetype-exe text-warning me-1"></i>MEDC.CSM-Cashier-Setup-2.1.1.exe
                          </h6>
                          <div className="text-white-50 small mb-2">High-Speed POS Counter Client, Hardware Barcode Scanner &amp; ESC/POS Receipt Engine</div>
                          <div className="p-2 rounded bg-dark border border-secondary mb-3 small font-monospace text-secondary" style={{ fontSize: '0.72rem', wordBreak: 'break-all' }}>
                            <div className="text-white-50 fw-bold">SHA-256 Checksum:</div>
                            62323907a8601fc13ac66c3bb3d3162e...
                          </div>
                        </div>
                        <div>
                          <button type="button" className="btn btn-outline-secondary btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-1" disabled style={{ cursor: 'not-allowed', opacity: 0.75 }}>
                            <i className="bi bi-lock-fill text-warning"></i><span>Download Restricted (NDA)</span>
                          </button>
                          <div className="text-center text-secondary mt-1" style={{ fontSize: '0.68rem' }}>Dedicated Register Counter Workstation Only</div>
                        </div>
                      </div>
                    </div>

                    {/* EXE 3: MEDC.SASM-Store-Admin-Setup-2.1.1.exe */}
                    <div className="col-md-4">
                      <div className="p-3 rounded bg-black border border-secondary h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="badge bg-success text-white fw-bold">STORE ADMIN &amp; ERP</span>
                            <span className="text-secondary small font-monospace">114.6 MB</span>
                          </div>
                          <h6 className="text-white fw-bold mb-1 font-monospace text-break" style={{ fontSize: '0.88rem' }}>
                            <i className="bi bi-filetype-exe text-success me-1"></i>MEDC.SASM-Store-Admin-Setup-2.1.1.exe
                          </h6>
                          <div className="text-white-50 small mb-2">Pharmacy Operations Console, Batch FIFO Expiry Quarantine &amp; Excel Reporting</div>
                          <div className="p-2 rounded bg-dark border border-secondary mb-3 small font-monospace text-secondary" style={{ fontSize: '0.72rem', wordBreak: 'break-all' }}>
                            <div className="text-white-50 fw-bold">SHA-256 Checksum:</div>
                            bb0edfa8ead317482a2e6c440c0c7856...
                          </div>
                        </div>
                        <div>
                          <button type="button" className="btn btn-outline-secondary btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-1" disabled style={{ cursor: 'not-allowed', opacity: 0.75 }}>
                            <i className="bi bi-lock-fill text-warning"></i><span>Download Restricted (NDA)</span>
                          </button>
                          <div className="text-center text-secondary mt-1" style={{ fontSize: '0.68rem' }}>Supervising Pharmacist Workstation Only</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security policy callout */}
                  <div className="p-2 rounded bg-black border border-secondary small text-white-50 d-flex align-items-start gap-2">
                    <i className="bi bi-info-circle-fill text-warning mt-1"></i>
                    <div>
                      <strong className="text-light">Security &amp; Non-Distribution Policy:</strong> In strict compliance with commercial client turnover agreements and pharmaceutical data security protocols, binary downloads are locked. Installers incorporate custom <strong>NSIS authorization password gates</strong> (<code>installer-password-page.nsh</code>) and are cryptographically verified for physical deployment on licensed store hardware only. Technical architecture, data models, and functional workflows are demonstrated during portfolio technical evaluations.
                    </div>
                  </div>
                </div>

                {/* THE 3 DEDICATED LAN APPLICATIONS BREAKDOWN */}
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                  <div>
                    <h5 className="text-info fw-bold mb-0">
                      <i className="bi bi-layers-fill me-2"></i>In-Depth Architecture of the 3 LAN Applications
                    </h5>
                    <span className="text-white-50 small">Distributed Native Executables Operating Across Dedicated Hardware Workstations</span>
                  </div>
                  <span className="badge bg-danger text-white fw-bold"><i className="bi bi-shield-check me-1"></i>3 DEDICATED DESKTOP APPS</span>
                </div>

                <div className="row g-3 mb-4">
                  {/* App 1: MEDC.S Server */}
                  <div className="col-lg-4">
                    <div className="p-3 rounded bg-dark border border-info h-100 d-flex flex-column justify-content-between shadow-sm">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="badge bg-info text-dark fw-bold">APP 1: CENTRAL CONTROLLER</span>
                          <span className="text-secondary small"><code>MEDC.S Server.exe</code></span>
                        </div>
                        <h5 className="text-warning fw-bold mb-2">MEDC.S — Server Desktop Controller</h5>
                        <p className="text-white-50 small mb-3">
                          The core coordinator and database host for the entire retail pharmacy. Engineered to run as an autonomous background daemon with an Electron desktop management GUI and Windows system tray persistence.
                        </p>
                        <ul className="text-light small ps-3 mb-3">
                          <li className="mb-2"><strong>First-Launch Database Selection Dialog:</strong> Automatically verifies existing operational SQLite V1 databases (<code>pos-database.sqlite</code>) and WAL states, offering safe database migration or clean installations.</li>
                          <li className="mb-2"><strong>Pre-Migration Snapshot Backups:</strong> Generates instant, byte-level safety archives before executing additive schema migrations, protecting historic financial records.</li>
                          <li className="mb-2"><strong>Multi-Interface LAN Binding:</strong> Binds to <code>0.0.0.0:3000</code> with auto-detected local static IPv4 resolution for cross-machine communication.</li>
                          <li className="mb-2"><strong>Process Watchdog &amp; Telemetry:</strong> Features real-time HTTP transaction telemetry, crash-recovery daemon restarts, and configurable daily backup scheduling.</li>
                          <li className="mb-2"><strong>Heartbeat &amp; Status APIs:</strong> Continuous health pinging for connected cashier and management client nodes.</li>
                        </ul>
                      </div>
                      <div className="p-2 rounded bg-black border border-secondary text-center small text-white-50">
                        <strong className="text-info">Host Role:</strong> Main Store Computer / Database Server Node
                      </div>
                    </div>
                  </div>

                  {/* App 2: MEDC.CSM Cashier */}
                  <div className="col-lg-4">
                    <div className="p-3 rounded bg-dark border border-warning h-100 d-flex flex-column justify-content-between shadow-sm">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="badge bg-warning text-dark fw-bold">APP 2: CASHIER TERMINAL</span>
                          <span className="text-secondary small"><code>MEDC.CSM Cashier.exe</code></span>
                        </div>
                        <h5 className="text-warning fw-bold mb-2">MEDC.CSM — Cashier Desktop POS</h5>
                        <p className="text-white-50 small mb-3">
                          High-throughput, frictionless point-of-sale interface optimized for fast customer turnaround and continuous retail checkout.
                        </p>
                        <ul className="text-light small ps-3 mb-3">
                          <li className="mb-2"><strong>1-Character Instant OmniSearch:</strong> Instant auto-complete search across generic medicine names, brand names, and barcodes with zero delay.</li>
                          <li className="mb-2"><strong>Dynamic PCS vs. BOX Cart Matrix:</strong> 1-click unit switcher inside cart items that dynamically recalculates pricing and converts box sales to base pieces upon checkout.</li>
                          <li className="mb-2"><strong>Unlisted Item Rapid Ingestion:</strong> <code>+ Add "[keyword]" as New / Cashier Item</code> categorizes items under <code>ADDED IN CASHIER</code> without stalling queues.</li>
                          <li className="mb-2"><strong>Touch Numpad with Backspace (⌫):</strong> Quick cash tender shortcuts, on-screen backspace key, and automated change calculations.</li>
                          <li className="mb-2"><strong>Integrated Quotation Studio:</strong> Multi-format quote generator with custom price adjustments, exporting to DOCX, XLSX via ExcelJS, and vector PDF with clean typography.</li>
                          <li className="mb-2"><strong>Direct Thermal ESC/POS Printing:</strong> Formatted receipts with store header, cashier ID, batch breakdowns, and automatic cash drawer trigger.</li>
                          <li className="mb-2"><strong>Idle Lock Security:</strong> Automatic idle locking timer to secure registers when cashiers step away from the counter.</li>
                        </ul>
                      </div>
                      <div className="p-2 rounded bg-black border border-secondary text-center small text-white-50">
                        <strong className="text-warning">Host Role:</strong> Front Cashier Checkout Counter Terminal
                      </div>
                    </div>
                  </div>

                  {/* App 3: MEDC.SASM Store Admin */}
                  <div className="col-lg-4">
                    <div className="p-3 rounded bg-dark border border-success h-100 d-flex flex-column justify-content-between shadow-sm">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="badge bg-success text-white fw-bold">APP 3: PHARMACY ADMIN</span>
                          <span className="text-secondary small"><code>MEDC.SASM Store Admin.exe</code></span>
                        </div>
                        <h5 className="text-warning fw-bold mb-2">MEDC.SASM — Store Admin &amp; ERP</h5>
                        <p className="text-white-50 small mb-3">
                          Comprehensive back-office management console for pharmacy owners, supervising pharmacists, and inventory custodians.
                        </p>
                        <ul className="text-light small ps-3 mb-3">
                          <li className="mb-2"><strong>Batch-Level FIFO Expiry Management:</strong> Tracks expiry dates per batch with color-coded warning badges and direct <strong>1-Click "Dispose Expired"</strong> action.</li>
                          <li className="mb-2"><strong>Packaging &amp; Pricing Governance:</strong> Enforces selling price per box validation, pieces-per-box configuration, and minimum stock safety thresholds.</li>
                          <li className="mb-2"><strong>Product Lifecycle &amp; Reactivation:</strong> Filter by <code>ACTIVE</code>, <code>INACTIVE</code>, or <code>ALL</code> with instant 1-click product reactivation.</li>
                          <li className="mb-2"><strong>Dual-Scroll Wide Table Navigation:</strong> Synchronized top and bottom horizontal scrollbars for seamless browsing of extensive inventory tables on wide monitors.</li>
                          <li className="mb-2"><strong>Full Supply Chain Ingestion:</strong> Supplier Purchase Receiving (PO), Physical Stock Audits, Stock Adjustments, and Supplier Returns.</li>
                          <li className="mb-2"><strong>Executive Excel &amp; Financial Analytics:</strong> Advanced <code>.xlsx</code> workbook exports with capital valuation, potential profit margins, and shift reconciliations.</li>
                        </ul>
                      </div>
                      <div className="p-2 rounded bg-black border border-secondary text-center small text-white-50">
                        <strong className="text-success">Host Role:</strong> Pharmacy Manager Station / Pharmacist Admin Terminal
                      </div>
                    </div>
                  </div>
                </div>

                {/* CORE PHARMACEUTICAL BUSINESS LOGIC & ENGINES */}
                <div className="mb-4">
                  <h5 className="text-info fw-bold mb-3"><i className="bi bi-gear-fill me-2"></i>Mission-Critical Pharmaceutical Business Logic &amp; Data Pipeline</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 rounded bg-dark border border-secondary h-100">
                        <h6 className="text-warning fw-bold mb-2"><i className="bi bi-box-seam me-2"></i>1. Dual-Unit Conversion Matrix (PCS ↔ BOX)</h6>
                        <p className="text-white-50 small mb-2">
                          Pharmacy products are purchased in bulk boxes but sold in either full boxes or individual blister pieces. MEDC implements an intelligent conversion matrix:
                        </p>
                        <div className="text-light small ps-2">
                          <div>• <strong>Box Price Governance:</strong> System validates that Selling Price per Box is strictly configured whenever box packaging is enabled.</div>
                          <div>• <strong>Cart Switching:</strong> Cashiers can switch selling units between <code>PCS</code> and <code>BOX</code> on the fly without re-scanning.</div>
                          <div>• <strong>Atomic Base Deduction:</strong> During checkout, box sales are converted atomically to base piece quantities, ensuring physical inventory counts remain 100% accurate.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded bg-dark border border-secondary h-100">
                        <h6 className="text-warning fw-bold mb-2"><i className="bi bi-calendar2-x me-2"></i>2. Batch-Level FIFO Expiry Quarantine</h6>
                        <p className="text-white-50 small mb-2">
                          Pharmaceutical regulations require rigorous expiry management. MEDC enforces First-In, First-Out (FIFO) stock deductions while maintaining granular batch visibility:
                        </p>
                        <div className="text-light small ps-2">
                          <div>• <strong>Real-time Expiry Status:</strong> Automatically flags batches as <code>VALID</code>, <code>EXPIRING_SOON</code>, or <code>EXPIRED</code>.</div>
                          <div>• <strong>Quarantine Protection:</strong> Expired batches are automatically locked and prevented from being dispensed at cashier counters.</div>
                          <div>• <strong>1-Click Quick Dispose:</strong> Pharmacists can dispose of expired stocks directly from the batch modal, creating an audited shrinkage log and resolving alert counters.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded bg-dark border border-secondary h-100">
                        <h6 className="text-warning fw-bold mb-2"><i className="bi bi-file-earmark-spreadsheet me-2"></i>3. Quotation Studio &amp; Multi-Format Export</h6>
                        <p className="text-white-50 small mb-2">
                          Medical supply distributors require frequent formal pricing quotations for clinics and wholesale buyers:
                        </p>
                        <div className="text-light small ps-2">
                          <div>• <strong>In-Line Price Overrides:</strong> Cashiers can customize negotiated prices and line-item quantities dynamically.</div>
                          <div>• <strong>Unlisted Line Items:</strong> Ability to quote custom non-inventory supplies and equipment directly.</div>
                          <div>• <strong>Triple-Format Exports:</strong> Generates Word (.docx), Vector PDF with clean typography, and formatted Excel (.xlsx via ExcelJS) with automated column widths and formulas.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded bg-dark border border-secondary h-100">
                        <h6 className="text-warning fw-bold mb-2"><i className="bi bi-cash-coin me-2"></i>4. Double-Entry Shift Balancing &amp; Auditing</h6>
                        <p className="text-white-50 small mb-2">
                          Guarantees total cashier accountability and cash drawer integrity across morning and afternoon shifts:
                        </p>
                        <div className="text-light small ps-2">
                          <div>• <strong>Cashier Shift Life Cycle:</strong> Open Shift starting cash, mid-shift cash-ins/cash-outs, and End-of-Shift drawer count.</div>
                          <div>• <strong>Overage / Shortage Calculation:</strong> Immediate comparison between expected register drawer cash and physical cash counts.</div>
                          <div>• <strong>Audit Trails:</strong> Automated security logging for every price edit, stock adjustment, voided sale, and user permission event.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NETWORK TOPOLOGY DIAGRAM */}
                <div className="p-3 mb-4 rounded bg-dark border border-info">
                  <h6 className="text-info fw-bold mb-2"><i className="bi bi-diagram-3-fill me-2"></i>On-Premise LAN Network Topology</h6>
                  <div className="p-3 rounded bg-black border border-secondary text-center">
                    <pre className="text-info small mb-0 font-monospace" style={{ lineHeight: 1.4, overflowX: 'auto', textAlign: 'left', display: 'inline-block' }}>
{`+---------------------------------------------------------------------------------------------------+
|                            MEDC PHARMACY ON-PREMISE LOCAL AREA NETWORK                            |
|                               (Isolated Gigabit Switch / Store Router)                            |
+---------------------------------------------------------------------------------------------------+
                                                  |
                         +------------------------+------------------------+
                         |                                                 |
                         v                                                 v
  +--------------------------------------------+    +--------------------------------------------+
  |        CENTRAL SERVER WORKSTATION          |    |          CASHIER TERMINAL (POS)            |
  |  Host: Dedicated Server Computer           |    |  Host: Front Checkout Workstation          |
  |  App:  MEDC.S Server.exe (v2.1.1)          |    |  App:  MEDC.CSM Cashier.exe (v2.1.1)       |
  |  Core: Node.js Express REST (0.0.0.0:3000) |    |  Core: React 18 SPA + Electron IPC         |
  |  DB:   SQLite WAL (Write-Ahead Logging)    |    |  IO:   Direct ESC/POS Thermal Receipt (80mm)|
  |  Task: Auto Backup & Migration Engine      |    |        USB Barcode Scanner & Cash Drawer   |
  +--------------------------------------------+    +--------------------------------------------+
                         |
                         v
  +--------------------------------------------+
  |         STORE ADMIN & PHARMACY STATION     |
  |  Host: Pharmacist Office Computer          |
  |  App:  MEDC.SASM Store Admin.exe (v2.1.1)  |
  |  Core: Inventory, Receiving & Expiry Mgmt  |
  |  Task: FIFO Disposals, Excel Export, Audit |
  +--------------------------------------------+`}
                    </pre>
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

          <div className="modal-footer border-top border-secondary d-flex justify-content-between align-items-center">
            {activeModal === 'arunafeltz' ? (
              <a
                href="http://i41hiagpd95rj79rh3habdao.187.77.131.56.sslip.io/?fbclid=IwY2xjawVz4clleHRuA2FlbQIxMABwZG9mBWJyaWQRMU1maDVQeGhWUHM0THUxRVpzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEfGVMCciOB3Rv_8_DvLZvzVHWoOlqPAR48qTPXHbv9HH-jdL0cE06pzmwydiU_aem_XfZ-dxvXPPA5GOyx2bE6rA#flexibility"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning fw-bold text-dark d-inline-flex align-items-center gap-1.5"
              >
                <i className="bi bi-play-circle-fill"></i>
                <span>Launch Live Demo ↗</span>
              </a>
            ) : <div />}
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
