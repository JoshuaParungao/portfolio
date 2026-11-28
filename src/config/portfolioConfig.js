export const portfolioConfig = {
  author: {
    name: 'Joshua Parungao',
    title: 'Full-Stack Software Developer & Enterprise Systems Architect',
    bio: 'Specializing in mission-critical Cloud ERPs, multi-branch POS architecture, strict serialized inventory tracking, and relational database integrity.',
    extendedBio: 'I am a hardworking and persistent Full-Stack Software Developer and IT student specializing in modern web development, database architecture, and enterprise cloud systems. With a strong foundation in both software engineering (React, Node.js, PostgreSQL, Prisma) and 5+ years of freelance creative leadership, I design and build robust, high-performance applications that solve complex real-world business challenges.',
    location: 'Pampanga, Philippines',
    education: {
      institution: 'University of the Assumption',
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      status: 'Incoming 3rd year IT student',
      description: 'Developing high-level proficiencies in enterprise software development, distributed computer networking, relational database engineering (PostgreSQL/MySQL), and IT systems operations.'
    },
    experience: {
      title: 'Freelance Graphic Artist & Creative Team Leader',
      duration: '5+ Years Industry Experience',
      description: 'Managed commercial brand designs, advertising campaigns, and multimedia deliverables utilizing Adobe Photoshop, Illustrator, CorelDRAW, Premiere Pro, and Lightroom.'
    }
  },
  flagships: {
    arunafeltz: {
      title: 'POSynctify (Arunafeltz) — Multi-Branch Cloud POS, Serial Lifecycle & Business Management System',
      subtitle: 'Production Client System • Multi-Branch Cloud POS',
      stack: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'IndexedDB', 'PayMongo QR Ph', 'Docker'],
      description: 'Full-stack production Point of Sale and Business Management System engineered for computer hardware retailers, wholesalers, and diagnostic service centers. Features an offline-first IndexedDB engine with automatic PostgreSQL background synchronization, PayMongo QR Ph integration, automated warranty e-receipt dispatch, double-entry customer AR ledger with configurable financing interest, and granular Six-Layer financial reports.'
    },
    medc: {
      title: 'MedC — Enterprise LAN-Based Drugstore POS, Expiry Tracking & Inventory ERP',
      subtitle: 'On-Premise Production • 3-App Desktop LAN Suite',
      stack: ['Electron', 'React 18', 'Vite', 'Express', 'SQLite WAL', 'NSIS Installers'],
      description: 'Mission-critical, offline-first desktop POS and pharmacy management suite engineered for high-volume retail drugstores and medical supply enterprises. Architected as a 3-tier distributed LAN ecosystem (MEDC.S Server Controller, MEDC.CSM Cashier, and MEDC.SASM Store Admin) communicating across on-premise workstations with zero internet lag. Features dynamic PCS/BOX unit matrix, Batch FIFO expiry tracking, 1-click expired disposal, and high-concurrency SQLite WAL engine.'
    }
  },
  tools: [
    { name: 'React.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'MySQL', icon: '/src/assets/images/logos/MYSQL.png' },
    { name: 'JavaScript', icon: '/src/assets/images/logos/JS.png' },
    { name: 'HTML5', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
    { name: 'Lightroom', icon: '/src/assets/images/logos/LR.png' },
    { name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
    { name: 'CorelDRAW', icon: '/src/assets/images/logos/COREL.png' },
    { name: 'MS Excel', icon: '/src/assets/images/logos/EXCEL.png' },
    { name: 'MS Word', icon: '/src/assets/images/logos/WORD.png' }
  ]
};
