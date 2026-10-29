export type Lang = "es" | "en"

export const LANGS: Lang[] = ["en", "es"]

// El sitio inicia en inglés
export const LANG_PATH: Record<Lang, string> = {
  en: "/",
  es: "/es/",
}

export const LINKS = {
  email: "joseadrianhernandez07@gmail.com",
  mailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=joseadrianhernandez07@gmail.com",
  github: "https://github.com/jox7z",
  linkedin: "https://www.linkedin.com/in/jose-adri%C3%A1n-hern%C3%A1ndez-mel%C3%A9ndez-3b1b84325/",
  instagram: "https://www.instagram.com/joxphysique/",
}

export interface Project {
  id: string
  title: string
  year: string
  role?: string
  tags: string[]
  status?: string
  summary: string
  context: string
  highlights: string[]
  stack: string[]
  github: string
}

interface TimelineItem {
  kind: string
  date: string
  title: string
  company: string
  points: string[]
  skills: string[]
}

interface Content {
  meta: { title: string; description: string }
  nav: { id: string; label: string }[]
  ui: {
    switchLang: string
    switchLangLabel: string
    theme: string
    progress: string
    viewCode: string
    cv: string
    cvSoon: string
    context: string
    howItWorks: string
    stack: string
    opensNewTab: string
  }
  hero: {
    greeting: string
    role: string
    openTo: string
    roles: string[]
    learning: string
    intro: string
    ctaPrimary: string
    terminal: { command: string; output: string; live?: boolean }[]
  }
  about: {
    index: string
    label: string
    title: string
    paragraphs: string[]
  }
  experience: { index: string; label: string; title: string; items: TimelineItem[] }
  projects: { index: string; label: string; title: string; intro: string; items: Project[] }
  approach: {
    index: string
    label: string
    title: string
    highlight: string
    intro: string
    steps: { icon: "isolate" | "inspect" | "resolve"; title: string; text: string; detail: string }[]
  }
  contact: { index: string; label: string; title: string; text: string; cta: string }
  footer: { built: string }
}

const STACKS = {
  gmo: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "React Query", "Zustand", "Jest"],
  finity: ["React", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "JWT"],
  galeria: ["Oracle Database", "PL/SQL", "Triggers", "Stored procedures", "Azure DevOps", "Scrum"],
  rd360: ["C# .NET", "Windows Forms", "Entity Framework", "SQL Server", "ZeroTier VPN"],
  limes: ["React", "Vite", "GSAP", "WebGL / OGL"],
  hm: ["React", "Vite", "Tailwind CSS"],
  mediakit: ["HTML", "CSS"],
}

const GITHUB = {
  gmo: "https://github.com/jox7z/Gmo-training-app",
  finity: "https://github.com/jnzhng444/Finity",
  galeria: "https://github.com/jox7z/Galeria_De_Arte",
  rd360: "https://github.com/jox7z/Registro-Docente-360",
  limes: "https://github.com/brema026/LimesDev",
  hm: "https://github.com/jox7z/ReparacionesHM",
  mediakit: "https://github.com/jox7z/MediaKit",
}

const es: Content = {
  meta: {
    title: "Jose Hernández — Ingeniero en Sistemas Computacionales",
    description:
      "Portafolio de Jose Hernández, ingeniero en sistemas computacionales de San José, Costa Rica. Técnico de soporte TI, abierto a puestos de Help Desk, soporte TI, Junior Software Developer y datos con SQL.",
  },
  nav: [
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "enfoque", label: "Método" },
    { id: "contacto", label: "Contacto" },
  ],
  ui: {
    switchLang: "EN",
    switchLangLabel: "View in English",
    theme: "Cambiar tema",
    progress: "Progreso de lectura",
    viewCode: "Ver código",
    cv: "Descargar CV",
    cvSoon: "CV · próximamente",
    context: "Contexto",
    howItWorks: "Cómo funciona",
    stack: "Tecnologías",
    opensNewTab: "se abre en otra pestaña",
  },
  hero: {
    greeting: "Hola, soy Jose Hernández",
    role: "Computer Systems Engineer",
    openTo: "Abierto a",
    roles: ["Soporte TI · Help Desk", "Junior Software Developer", "Datos · SQL y bases de datos"],
    learning: "Aprendiendo: ServiceNow, administración de Microsoft 365 y ciberseguridad",
    intro:
      "Reparo computadoras, atiendo usuarios en español e inglés y desarrollo software.",
    ctaPrimary: "Escríbeme",
    terminal: [
      { command: "whoami", output: "it-support-technician · systems-engineer" },
      { command: "cat open-to.txt", output: "help-desk · it-support · junior-dev" },
      { command: "cat learning.txt", output: "servicenow · m365-admin · cybersecurity" },
      { command: "date", output: "", live: true },
    ],
  },
  about: {
    index: "01",
    label: "Sobre mí",
    title: "Soporte TI con base de ingeniería",
    paragraphs: [
      "Soy <strong>Ingeniero en Sistemas Computacionales</strong> enfocado en <strong>soporte de TI</strong>. Diagnostico y resuelvo incidentes de hardware, software y conectividad, instalo y configuro Windows y macOS, y doy soporte a usuarios en sitio y de forma remota.",
      "En <strong>Capital One</strong> atendí entre 60 y 90 casos de fraude al día, en inglés, con estándares estrictos de calidad y seguridad. Hoy combino el soporte técnico con el desarrollo de software como cofundador de <strong>Limes Dev</strong>, y cuento con la certificación <strong>Fortinet Certified Fundamentals in Cybersecurity</strong>.",
    ],
  },
  experience: {
    index: "02",
    label: "Experiencia",
    title: "Experiencia y formación",
    items: [
      {
        kind: "Trabajo",
        date: "Jul 2026 — Hoy",
        title: "Técnico de Soporte TI",
        company: "Reparaciones HM · Independiente",
        points: [
          "Diagnóstico, reparación y mantenimiento de 4–10 equipos al mes.",
          "Instalación de Windows, macOS, controladores y aplicaciones.",
          "Puntos de venta Eleventa, impresoras Epson y soporte remoto con AnyDesk.",
        ],
        skills: ["Hardware", "Windows · macOS", "AnyDesk", "POS"],
      },
      {
        kind: "Startup",
        date: "Dic 2025 — Hoy",
        title: "Cofundador y Desarrollador Full-Stack",
        company: "Limes Dev",
        points: [
          "Con dos compañeros desarrollamos software y sitios web para negocios, como Finity, una plataforma SaaS contable.",
          "Lidero el equipo técnico, atiendo clientes y organizo los sprints en Jira.",
        ],
        skills: ["Liderazgo técnico", "Clientes", "Jira", "Full-stack"],
      },
      {
        kind: "Trabajo",
        date: "Ene 2024 — Mar 2025",
        title: "Fraud & Credit Specialist",
        company: "Foundever — Capital One",
        points: [
          "60–90 llamadas y chats diarios de fraude, 100 % en inglés.",
          "Restablecía accesos, documentaba y escalaba casos por Microsoft Teams.",
          "Top performer; mi trabajo se usó para capacitar a los nuevos agentes.",
        ],
        skills: ["Atención al usuario", "Escalamiento", "PCI DSS", "Inglés profesional"],
      },
      {
        kind: "Bootcamp",
        date: "Oct — Dic 2026",
        title: "Bootcamp de Soporte TI",
        company: "Generation Colombia · Remoto",
        points: ["Programa remoto de soporte de TI, en curso."],
        skills: ["Soporte TI", "Remoto"],
      },
      {
        kind: "Universidad",
        date: "2023 — 2026",
        title: "Ingeniería en Sistemas Computacionales",
        company: "Universidad Tecnológica Costarricense",
        points: [
          "Software, bases de datos, redes e infraestructura de TI.",
          "Un año estudiando y trabajando a tiempo completo a la vez.",
        ],
        skills: ["Desarrollo de software", "Bases de datos", "Redes"],
      },
      {
        kind: "Formación técnica",
        date: "2020 — 2022",
        title: "Técnico en Redes",
        company: "CTP Roberto Gamboa Valverde",
        points: [
          "Redes TCP/IP, DNS, DHCP, cableado y hardware (dos años cursados).",
        ],
        skills: ["TCP/IP", "DNS / DHCP", "Hardware"],
      },
    ],
  },
  projects: {
    index: "03",
    label: "Proyectos",
    title: "Lo que he construido",
    intro: "Personales, universitarios y en equipo. Abre cada uno para ver cómo funciona.",
    items: [
      {
        id: "gmo",
        title: "Gmo Training",
        year: "2026",
        tags: ["App móvil", "Full-stack"],
        status: "En desarrollo",
        summary:
          "App de gimnasio inspirada en Strava: registro de entrenamientos serie por serie, rachas semanales, un ranking de nueve niveles y un feed social.",
        context:
          "Ha sido desarrollada como experimento de vibe coding con Claude, para entender cómo funciona la IA en el desarrollo de software. Está pensada para lanzarse a producción en algún momento como proyecto personal.",
        highlights: [
          "Funciona sin conexión: los datos se guardan en el teléfono y se sincronizan con el servidor cuando vuelve la red.",
          "Sincronización segura ante reintentos mediante una función transaccional en PostgreSQL, sin duplicar entrenamientos.",
          "Feed social con paginación y actualizaciones optimistas, sin perder la posición del scroll.",
          "Privacidad por entrenamiento (público, seguidores o privado) aplicada en la propia base de datos con Row Level Security.",
          "Logros y mapa de volumen muscular calculados a partir del historial, con pruebas automatizadas en Jest.",
        ],
        stack: STACKS.gmo,
        github: GITHUB.gmo,
      },
      {
        id: "finity",
        title: "Finity",
        year: "2025 — 2026",
        role: "En equipo",
        tags: ["Web · SaaS", "Fintech"],
        status: "En mantenimiento",
        summary:
          "Plataforma de control financiero para empresas: ventas, gastos, inventario, bancos y contabilidad en un solo sistema, por suscripción.",
        context:
          "Proyecto en equipo y producto principal de LimesDev. Fue mi primer sistema grande con varias empresas, roles y contabilidad real.",
        highlights: [
          "Varias empresas en la misma plataforma, cada usuario con su rol y permisos validados en cada ruta del servidor.",
          "Inicio de sesión con JWT y verificación en dos pasos (código QR y códigos de respaldo).",
          "Contabilidad de partida doble: catálogo de cuentas, diario, mayor general y cierre de periodos.",
          "Cuentas por cobrar y por pagar, inventario, conciliación bancaria y bitácora de auditoría.",
          "Facturas en PDF y exportación a Excel; base de datos PostgreSQL con migraciones de Prisma en Docker.",
        ],
        stack: STACKS.finity,
        github: GITHUB.finity,
      },
      {
        id: "galeria",
        title: "Galería de Arte",
        year: "2025",
        role: "Scrum Master",
        tags: ["Base de datos", "PL/SQL"],
        status: "Académico",
        summary:
          "Base de datos para administrar una galería de arte: artistas, obras, clientes, inventario, mantenimiento de obras, ventas y visitantes.",
        context:
          "Proyecto académico en equipo en el que fui Scrum Master: planifiqué y di seguimiento a los sprints en Azure DevOps (backlog, tareas y revisiones). El reto técnico era que toda la lógica del negocio viviera dentro de la base de datos, no en una aplicación.",
        highlights: [
          "Roles (administrador, gerente, vendedor, curador) y permisos validados dentro de cada procedimiento almacenado.",
          "Bitácora de auditoría con triggers que registra qué usuario hizo cada cambio.",
          "Ventas procesadas en un solo procedimiento: IVA del 13 %, validación del pago, cálculo del vuelto y alertas de stock bajo.",
          "Contraseñas con hash SHA-256, vistas para reportes y un script de instalación con prueba de humo.",
        ],
        stack: STACKS.galeria,
        github: GITHUB.galeria,
      },
      {
        id: "rd360",
        title: "Registro Docente 360",
        year: "2025",
        tags: ["App de escritorio"],
        status: "Académico",
        summary:
          "Sistema para docentes: estudiantes, asistencia, horarios, eventos de calendario y alertas, accesible de forma remota.",
        context:
          "Proyecto de la universidad. Además del software, tuve que resolver cómo acceder a la base de datos desde otra red sin exponerla a internet.",
        highlights: [
          "Arquitectura por capas (vistas, controladores y modelos) con Entity Framework sobre SQL Server.",
          "Usuarios con roles, manejo de sesión y recuperación de contraseña por correo.",
          "Acceso remoto a la base de datos a través de una VPN privada con ZeroTier.",
        ],
        stack: STACKS.rd360,
        github: GITHUB.rd360,
      },
      {
        id: "limes",
        title: "LimesDev",
        year: "2026",
        role: "En equipo",
        tags: ["Sitio web", "Animación"],
        summary: "Sitio web de LimesDev, un estudio de software que crea sistemas empresariales como Finity.",
        context: "Proyecto en equipo para presentar los servicios, el proceso de trabajo y los productos del estudio.",
        highlights: [
          "Fondo de aurora animado en WebGL con shaders de OGL.",
          "Títulos que aparecen palabra por palabra con GSAP al hacer scroll.",
          "Componentes reutilizables para los efectos de cada sección.",
        ],
        stack: STACKS.limes,
        github: GITHUB.limes,
      },
      {
        id: "hm",
        title: "Reparaciones HM",
        year: "2026",
        tags: ["Landing page"],
        summary: "Página para un servicio técnico a domicilio: línea blanca, pantallas e instalaciones eléctricas.",
        context: "Pensada para que un negocio pequeño consiga clientes sin necesitar un backend ni pagar un sistema.",
        highlights: [
          "Formulario que abre WhatsApp con el mensaje del cliente ya escrito, incluido el servicio que necesita.",
          "Contenido orientado a dar confianza: servicios, experiencia, garantía y llamada a la acción.",
          "Diseño responsive pensado primero para celular.",
        ],
        stack: STACKS.hm,
        github: GITHUB.hm,
      },
      {
        id: "mediakit",
        title: "Jox Physique — Media Kit",
        year: "2026",
        tags: ["Sitio web", "Marca personal"],
        summary: "Media kit de mi marca de contenido fitness: perfil, estadísticas de redes y formatos de colaboración.",
        context: "Lo hice para presentarme ante marcas como creador de contenido. Es mi proyecto personal fuera del mundo dev.",
        highlights: [
          "Un único archivo HTML, sin dependencias: fácil de enviar o publicar en cualquier lado.",
          "Todas las estadísticas en un solo bloque de datos para actualizarlas en segundos.",
        ],
        stack: STACKS.mediakit,
        github: GITHUB.mediakit,
      },
    ],
  },
  approach: {
    index: "04",
    label: "Método",
    title: "Pienso en sistemas,",
    highlight: "del hardware al código",
    intro: "Un sistema computacional son capas que dependen entre sí. Resuelvo problemas siguiéndolos a través de cada una.",
    steps: [
      {
        icon: "isolate",
        title: "Modelar el sistema",
        text: "Identifico las capas involucradas: hardware, sistema operativo, red, aplicación y datos, y cómo se conectan.",
        detail: "$ hardware → so → red → app → datos",
      },
      {
        icon: "inspect",
        title: "Rastrear la falla",
        text: "Sigo el problema capa por capa y pruebo una hipótesis a la vez hasta dar con la causa raíz.",
        detail: "$ síntoma → capa → causa raíz",
      },
      {
        icon: "resolve",
        title: "Corregir y mejorar",
        text: "Lo corrijo en la capa correcta, lo verifico de punta a punta y lo documento para que el sistema sea más confiable.",
        detail: "$ corregir → verificar → documentar",
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contacto",
    title: "Hablemos",
    text: "Busco mi siguiente paso en Help Desk, soporte TI o como Junior Developer. Si encaja con tu equipo, escríbeme.",
    cta: "Escríbeme",
  },
  footer: { built: "Hecho con Astro y Tailwind CSS" },
}

const en: Content = {
  meta: {
    title: "Jose Hernández — Computer Systems Engineer",
    description:
      "Portfolio of Jose Hernández, Computer Systems Engineer from San José, Costa Rica. IT Support Technician open to Help Desk, IT support, Junior Software Developer and SQL data roles.",
  },
  nav: [
    { id: "sobre-mi", label: "About" },
    { id: "experiencia", label: "Experience" },
    { id: "proyectos", label: "Projects" },
    { id: "enfoque", label: "Method" },
    { id: "contacto", label: "Contact" },
  ],
  ui: {
    switchLang: "ES",
    switchLangLabel: "Ver en español",
    theme: "Toggle theme",
    progress: "Reading progress",
    viewCode: "View code",
    cv: "Download CV",
    cvSoon: "CV · coming soon",
    context: "Context",
    howItWorks: "How it works",
    stack: "Technologies",
    opensNewTab: "opens in a new tab",
  },
  hero: {
    greeting: "Hi, I'm Jose Hernández",
    role: "Computer Systems Engineer",
    openTo: "Open to",
    roles: ["IT Support · Help Desk", "Junior Software Developer", "Data · SQL & databases"],
    learning: "Learning: ServiceNow, Microsoft 365 administration and cybersecurity",
    intro:
      "I fix computers, support users in English and Spanish, and build software.",
    ctaPrimary: "Get in touch",
    terminal: [
      { command: "whoami", output: "it-support-technician · systems-engineer" },
      { command: "cat open-to.txt", output: "help-desk · it-support · junior-dev" },
      { command: "cat learning.txt", output: "servicenow · m365-admin · cybersecurity" },
      { command: "date", output: "", live: true },
    ],
  },
  about: {
    index: "01",
    label: "About",
    title: "IT support with an engineering foundation",
    paragraphs: [
      "I'm a <strong>Computer Systems Engineer</strong> focused on <strong>IT support</strong>. I diagnose and resolve hardware, software and connectivity issues, deploy and configure Windows and macOS, and support users on site and remotely.",
      "At <strong>Capital One</strong> I handled 60 to 90 fraud cases a day in English, under strict quality and security standards. Today I combine hands-on support with software development as co-founder of <strong>Limes Dev</strong>, and I hold the <strong>Fortinet Certified Fundamentals in Cybersecurity</strong> certification.",
    ],
  },
  experience: {
    index: "02",
    label: "Experience",
    title: "Experience and education",
    items: [
      {
        kind: "Work",
        date: "Jul 2026 — Now",
        title: "IT Support Technician",
        company: "Reparaciones HM · Self-employed",
        points: [
          "Diagnose, repair and maintain 4–10 computers a month.",
          "Install Windows, macOS, drivers and applications.",
          "Set up Eleventa POS and Epson printers; remote support with AnyDesk.",
        ],
        skills: ["Hardware", "Windows · macOS", "AnyDesk", "POS"],
      },
      {
        kind: "Startup",
        date: "Dec 2025 — Now",
        title: "Co-Founder & Full-Stack Developer",
        company: "Limes Dev",
        points: [
          "With two classmates, we build software and websites for businesses, such as Finity, a SaaS accounting platform.",
          "Lead the technical team, meet clients and run our sprints in Jira.",
        ],
        skills: ["Technical lead", "Clients", "Jira", "Full-stack"],
      },
      {
        kind: "Work",
        date: "Jan 2024 — Mar 2025",
        title: "Fraud & Credit Specialist",
        company: "Foundever — Capital One",
        points: [
          "60–90 fraud calls and chats a day, 100% in English.",
          "Restored account access, documented and escalated cases through Microsoft Teams.",
          "Top performer; my calls were used to train new hires.",
        ],
        skills: ["User support", "Escalation", "PCI DSS", "Professional English"],
      },
      {
        kind: "Bootcamp",
        date: "Oct — Dec 2026",
        title: "IT Support Bootcamp",
        company: "Generation Colombia · Remote",
        points: ["Remote IT support program, in progress."],
        skills: ["IT support", "Remote"],
      },
      {
        kind: "University",
        date: "2023 — 2026",
        title: "Computer Systems Engineering",
        company: "Universidad Tecnológica Costarricense",
        points: [
          "Software, databases, networking and IT infrastructure.",
          "A year of studying and working full time at once.",
        ],
        skills: ["Software development", "Databases", "Networking"],
      },
      {
        kind: "Technical training",
        date: "2020 — 2022",
        title: "Network Technician",
        company: "CTP Roberto Gamboa Valverde",
        points: [
          "TCP/IP networking, DNS, DHCP, cabling and hardware (two years completed).",
        ],
        skills: ["TCP/IP", "DNS / DHCP", "Hardware"],
      },
    ],
  },
  projects: {
    index: "03",
    label: "Projects",
    title: "Things I've built",
    intro: "Personal, university and team projects. Open any of them to see how it works.",
    items: [
      {
        id: "gmo",
        title: "Gmo Training",
        year: "2026",
        tags: ["Mobile app", "Full-stack"],
        status: "In development",
        summary:
          "A Strava-inspired gym app: log workouts set by set, keep weekly streaks, climb a nine-tier ranking and share sessions in a social feed.",
        context:
          "Built as a vibe coding experiment with Claude, to understand how AI works in software development. It's planned to go to production at some point as a personal project.",
        highlights: [
          "Works offline: data is stored on the phone and synced with the server once the connection is back.",
          "Retry-safe sync through a transactional PostgreSQL function, so workouts are never duplicated.",
          "Social feed with paging and optimistic updates that keep your scroll position.",
          "Per-workout privacy (public, followers or private) enforced in the database itself with Row Level Security.",
          "Achievements and a muscle-volume map calculated from your history, with automated Jest tests.",
        ],
        stack: STACKS.gmo,
        github: GITHUB.gmo,
      },
      {
        id: "finity",
        title: "Finity",
        year: "2025 — 2026",
        role: "Team",
        tags: ["Web · SaaS", "Fintech"],
        status: "In maintenance",
        summary:
          "Financial control platform for companies: sales, expenses, inventory, banking and accounting in one system, sold by subscription.",
        context:
          "A team project and LimesDev's main product. My first large system with multiple companies, roles and real accounting.",
        highlights: [
          "Several companies on one platform, each user with a role and permissions checked on every server route.",
          "JWT sign-in with two-step verification (QR code and backup codes).",
          "Double-entry accounting: chart of accounts, journal, general ledger and period closing.",
          "Receivables and payables, inventory, bank reconciliation and an audit log.",
          "PDF invoices and Excel exports; PostgreSQL database with Prisma migrations in Docker.",
        ],
        stack: STACKS.finity,
        github: GITHUB.finity,
      },
      {
        id: "galeria",
        title: "Art Gallery",
        year: "2025",
        role: "Scrum Master",
        tags: ["Database", "PL/SQL"],
        status: "Academic",
        summary:
          "A database to run an art gallery: artists, artworks, clients, inventory, artwork maintenance, sales and visitors.",
        context:
          "An academic team project where I was the Scrum Master: I planned and tracked the sprints in Azure DevOps (backlog, tasks and reviews). The technical challenge was keeping all business logic inside the database instead of an application.",
        highlights: [
          "Roles (admin, manager, seller, curator) and permissions checked inside every stored procedure.",
          "Audit log written by triggers that records which user made each change.",
          "Sales processed in a single procedure: 13% VAT, payment validation, change calculation and low-stock alerts.",
          "SHA-256 password hashing, reporting views and an install script with a smoke test.",
        ],
        stack: STACKS.galeria,
        github: GITHUB.galeria,
      },
      {
        id: "rd360",
        title: "Registro Docente 360",
        year: "2025",
        tags: ["Desktop app"],
        status: "Academic",
        summary:
          "A system for teachers: students, attendance, schedules, calendar events and alerts, reachable remotely.",
        context:
          "A university project. Beyond the software, I had to work out how to reach the database from another network without exposing it to the internet.",
        highlights: [
          "Layered architecture (views, controllers and models) with Entity Framework over SQL Server.",
          "Role-based users, session handling and password recovery by email.",
          "Remote database access through a private ZeroTier VPN.",
        ],
        stack: STACKS.rd360,
        github: GITHUB.rd360,
      },
      {
        id: "limes",
        title: "LimesDev",
        year: "2026",
        role: "Team",
        tags: ["Website", "Motion"],
        summary: "Website for LimesDev, a software studio that builds business systems such as Finity.",
        context: "A team project to present the studio's services, process and products.",
        highlights: [
          "Animated aurora background rendered in WebGL with OGL shaders.",
          "Headings revealed word by word with GSAP as you scroll.",
          "Reusable components for each section's effects.",
        ],
        stack: STACKS.limes,
        github: GITHUB.limes,
      },
      {
        id: "hm",
        title: "Reparaciones HM",
        year: "2026",
        tags: ["Landing page"],
        summary: "A page for an on-site repair service: appliances, TVs and electrical installations.",
        context: "Designed so a small business can get customers without needing a backend or paying for a system.",
        highlights: [
          "A form that opens WhatsApp with the customer's message already written, including the service they need.",
          "Trust-oriented content: services, experience, warranty and a clear call to action.",
          "Responsive design built mobile-first.",
        ],
        stack: STACKS.hm,
        github: GITHUB.hm,
      },
      {
        id: "mediakit",
        title: "Jox Physique — Media Kit",
        year: "2026",
        tags: ["Website", "Personal brand"],
        summary: "Media kit for my fitness content brand: profile, social stats and collaboration formats.",
        context: "Built to pitch myself to brands as a content creator — my personal project outside of dev.",
        highlights: [
          "A single HTML file with no dependencies: easy to send or publish anywhere.",
          "All stats in one data block so they can be updated in seconds.",
        ],
        stack: STACKS.mediakit,
        github: GITHUB.mediakit,
      },
    ],
  },
  approach: {
    index: "04",
    label: "Method",
    title: "Thinking in systems,",
    highlight: "from hardware to code",
    intro: "A computer system is layers that depend on each other. I solve problems by tracing them through every one.",
    steps: [
      {
        icon: "isolate",
        title: "Model the system",
        text: "I map the layers involved: hardware, operating system, network, application and data, and how they connect.",
        detail: "$ hardware → os → network → app → data",
      },
      {
        icon: "inspect",
        title: "Trace the failure",
        text: "I follow the problem layer by layer, testing one hypothesis at a time until I find the root cause.",
        detail: "$ symptom → layer → root cause",
      },
      {
        icon: "resolve",
        title: "Fix & improve",
        text: "I fix it at the right layer, verify it end to end and document it so the system becomes more reliable.",
        detail: "$ fix → verify → document",
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contact",
    title: "Let's talk",
    text: "I'm looking for my next step in Help Desk, IT support or as a Junior Developer. If that fits your team, reach out.",
    cta: "Get in touch",
  },
  footer: { built: "Built with Astro and Tailwind CSS" },
}

export const CONTENT: Record<Lang, Content> = { es, en }
