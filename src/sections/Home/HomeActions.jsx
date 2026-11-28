import React, { useState, useRef, useEffect } from 'react';

export function HomeActions() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandLog, setCommandLog] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const initialTelemetry = (
    <div key="init-telemetry">
      <div className="mb-2">
        <span className="text-warning fw-bold">parungao@system-core:~$</span>{' '}
        <span className="text-light">./system-profile --inspect --flagships</span>
      </div>
      <div className="text-white-50 mb-2">================ ENTERPRISE SYSTEM TELEMETRY ================</div>
      <div className="mb-2">
        <div><strong className="text-warning">[FLAGSHIP 1]</strong> Arunafeltz Multi-Branch Cloud POS &amp; ERP (Active Production)</div>
        <div className="text-white-50 small ps-2">React 18 • Vite • Tailwind • Node.js • PostgreSQL (Prisma ACID) • Serialized PO &amp; Repair</div>
      </div>
      <div>
        <div><strong className="text-info">[FLAGSHIP 2]</strong> MedC Enterprise 3-App LAN Drugstore POS &amp; ERP (Active On-Premise)</div>
        <div className="text-white-50 small ps-2">Electron • React 18 • Express • SQLite WAL • PCS/BOX Unit Matrix • Batch FIFO Expiry • 3 Desktop Apps</div>
      </div>
      <div className="text-white-50 mt-2 mb-2">=============================================================</div>
    </div>
  );

  const commands = {
    help: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold mb-1">Available System Commands:</div>
        <div><span className="text-warning fw-bold">projects</span> - Inspect Arunafeltz Cloud ERP &amp; MedC 3-App LAN POS Suite</div>
        <div><span className="text-warning fw-bold">stack</span> - Full engineering breakdown: DB, Backend, Frontend</div>
        <div><span className="text-warning fw-bold">about</span> - IT background &amp; core engineering philosophy</div>
        <div><span className="text-warning fw-bold">experience</span> - 5+ years graphic industry leadership &amp; dev work</div>
        <div><span className="text-warning fw-bold">education</span> - BS in Information Technology (University of the Assumption)</div>
        <div><span className="text-warning fw-bold">contact</span> - Direct contact info &amp; socials</div>
        <div><span className="text-warning fw-bold">status</span> - Re-run enterprise production telemetry</div>
        <div><span className="text-warning fw-bold">whoami</span> - Display current authenticated operator</div>
        <div><span className="text-warning fw-bold">clear</span> - Clear terminal buffer</div>
      </div>
    ),
    projects: () => (
      <div className="my-1">
        <div className="p-2 border border-warning rounded my-1 bg-black">
          <div className="text-warning fw-bold">★ FLAGSHIP 1: Arunafeltz Enterprise Cloud POS &amp; ERP</div>
          <div className="text-white small mb-1">Production multi-branch system for computer hardware retailers &amp; service hubs.</div>
          <div className="text-white-50 small mb-2">• Serialized Barcodes • 5-Tier RBAC • Split Payments • Quotation Engine</div>
          <div className="d-flex gap-2 flex-wrap">
            <a
              href="http://i41hiagpd95rj79rh3habdao.187.77.131.56.sslip.io/?fbclid=IwY2xjawVz4clleHRuA2FlbQIxMABwZG9mBWJyaWQRMU1maDVQeGhWUHM0THUxRVpzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEfGVMCciOB3Rv_8_DvLZvzVHWoOlqPAR48qTPXHbv9HH-jdL0cE06pzmwydiU_aem_XfZ-dxvXPPA5GOyx2bE6rA#flexibility"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary py-0 px-2 fw-bold text-white"
            >
              Live Demo ↗
            </a>
            <a href="#projects" className="btn btn-sm btn-outline-warning py-0 px-2">Jump to Projects Section ↓</a>
          </div>
        </div>
        <div className="p-2 border border-info rounded my-1 bg-black">
          <div className="text-info fw-bold">★ FLAGSHIP 2: MedC Enterprise 3-App LAN Drugstore POS &amp; ERP</div>
          <div className="text-white small mb-1">Mission-critical 3-app desktop LAN suite (Server, Cashier POS, Store Admin) in Dolores, CSFP.</div>
          <div className="text-white-50 small mb-2">• PCS/BOX Conversion • Batch FIFO Expiry • 1-Char OmniSearch • SQLite WAL</div>
          <div>
            <a href="#projects" className="btn btn-sm btn-outline-info py-0 px-2">Jump to Projects Section ↓</a>
          </div>
        </div>
      </div>
    ),
    stack: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold mb-1">Enterprise Tech Stack:</div>
        <div><strong className="text-light">Desktop LAN Apps :</strong> Electron, React 18, Vite, NSIS Multi-App Installers</div>
        <div><strong className="text-light">Backend &amp; API :</strong> Node.js, Express.js, RESTful Architecture, SQLite WAL Engine</div>
        <div><strong className="text-light">Database &amp; ORM:</strong> PostgreSQL, Prisma ORM (ACID Transactions), SQLite, MySQL</div>
        <div><strong className="text-light">Frontend Core :</strong> React 18, Vite, Tailwind CSS, JavaScript (ES6+), Bootstrap 5</div>
        <div><strong className="text-light">Hardware/Ops :</strong> ESC/POS Thermal Printing, Barcode Scanners, Git, Postman, VS Code</div>
        <div><strong className="text-light">Creative Suite:</strong> Photoshop, Illustrator, Premiere Pro, CorelDRAW, Figma</div>
      </div>
    ),
    about: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold">Joshua Parungao</div>
        <div className="text-white-50">Full-Stack Software Developer &amp; Enterprise Systems Architect.</div>
        <div className="text-light small mt-1">Specialized in architecting high-performance cloud ERPs, offline-first LAN desktop applications, and transactional databases.</div>
      </div>
    ),
    experience: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold">Work Experience &amp; Leadership:</div>
        <div>• <strong>Lead Full-Stack Developer:</strong> Arunafeltz Cloud POS &amp; MedC Drugstore LAN Suite</div>
        <div>• <strong>Freelance Graphic Artist &amp; Team Leader:</strong> 5 Years managing commercial design, branding &amp; multimedia production.</div>
      </div>
    ),
    education: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold">University of the Assumption</div>
        <div>Bachelor of Science in Information Technology (BSIT)</div>
        <div className="text-white-50 small">Specialization in Software Development, Database Administration, and Network Systems.</div>
      </div>
    ),
    contact: () => (
      <div className="ps-2">
        <div className="text-warning fw-bold">Communication Channels:</div>
        <div>• Location: Pampanga, Philippines</div>
        <div>• Facebook: <a href="https://www.facebook.com/parungao.joshua.ople" target="_blank" rel="noreferrer" className="text-warning text-decoration-underline">fb.com/parungao.joshua.ople</a></div>
        <div>• Instagram: <a href="https://www.instagram.com/joshua.parungao/" target="_blank" rel="noreferrer" className="text-warning text-decoration-underline">@joshua.parungao</a></div>
        <div>• Jump to section: <a href="#contact" className="text-warning text-decoration-underline">#contact</a></div>
      </div>
    ),
    whoami: () => <div className="text-warning">parungao (Joshua Parungao — Enterprise Systems Architect &amp; Full-Stack Developer)</div>,
    date: () => <div>{new Date().toString()}</div>,
    sudo: () => <div className="text-danger">[SECURITY] User &apos;parungao&apos; already possesses unrestricted schema &amp; root execution privileges.</div>,
    status: () => initialTelemetry
  };

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(prev => prev + 1);

    if (trimmed === 'clear') {
      setCommandLog([]);
      setInputVal('');
      return;
    }

    let outputElement = null;
    if (commands[trimmed]) {
      outputElement = commands[trimmed]();
    } else {
      outputElement = (
        <div className="text-danger small mb-2">
          command not found: <span className="text-white">{rawCmd}</span>. Type <span className="text-warning fw-bold">help</span> to view available system commands.
        </div>
      );
    }

    setCommandLog(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        cmd: rawCmd,
        output: outputElement
      }
    ]);

    setInputVal('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIndex = historyIndex > 0 ? historyIndex - 1 : 0;
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex] || '');
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex] || '');
      } else {
        setHistoryIndex(history.length);
        setInputVal('');
      }
      e.preventDefault();
    }
  }

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [commandLog]);

  return (
    <div className="col-lg-7">
      <div
        className="terminal-window"
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        <div className="terminal-header">
          <div className="d-flex align-items-center gap-2">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
          </div>
          <span className="terminal-title">parungao@system-core: ~ (bash)</span>
          <span className="badge bg-success text-black small fw-bold" style={{ fontSize: '0.68rem', letterSpacing: '0.5px' }}>
            SYSTEM ONLINE
          </span>
        </div>

        <div className="terminal-body" ref={terminalBodyRef}>
          {commandLog.length === 0 ? initialTelemetry : null}

          {commandLog.map(item => (
            <div key={item.id} className="mb-2">
              <div className="mb-1">
                <span className="text-warning fw-bold">parungao@system-core:~$</span>{' '}
                <span className="text-light">{item.cmd}</span>
              </div>
              <div className="terminal-cmd-res text-light small mb-2">{item.output}</div>
            </div>
          ))}

          <div className="terminal-input-line">
            <span className="text-warning fw-bold text-nowrap">parungao@system-core:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              placeholder="type 'help' or click commands below..."
            />
          </div>
        </div>

        <div className="terminal-footer d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex flex-wrap align-items-center gap-1">
            <span className="text-secondary small me-1" style={{ fontSize: '0.75rem' }}>Commands:</span>
            {['help', 'projects', 'stack', 'experience', 'education', 'contact', 'clear'].map(cmd => (
              <button
                key={cmd}
                type="button"
                className="btn btn-sm terminal-btn py-0 px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="text-secondary small font-monospace d-none d-sm-inline" style={{ fontSize: '0.72rem' }}>
            Press Enter ↵
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeActions;
