export type Lang = "es" | "en"

export const LANGS: Lang[] = ["es", "en"]

export const LANG_PATH: Record<Lang, string> = {
  es: "/",
  en: "/en/",
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
    status: string
    greeting: string
    role: string
    openTo: string
    roles: string[]
    learning: string
    intro: string
    ctaPrimary: string
    scroll: string
    terminal: { command: string; output: string; live?: boolean }[]
  }
  about: {
    index: string
    label: string
    title: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
    techTitle: string
    tech: { group: string; items: string[] }[]
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

const TECH_DEV = ["TypeScript", "JavaScript", "C# .NET", "React", "React Native", "Node.js", "Git", "Azure DevOps", "Scrum"]
const TECH_DATA = ["SQL", "PostgreSQL", "SQL Server", "Oracle PL/SQL", "Supabase", "Prisma"]
const TECH_IT = ["TCP/IP", "DNS", "DHCP", "VPN", "Linux", "Windows Server", "Hardware", "Docker"]

const es: Content = {
  meta: {
    title: "Jose Hernández — Ingeniero en Sistemas Computacionales",
    description:
      "Portafolio de Jose Hernández, ingeniero en sistemas computacionales de San José, Costa Rica. Abierto a puestos de Junior Software Developer, datos con SQL y bases de datos, y soporte de TI y redes.",
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
    status: "Disponible para trabajar",
    greeting: "Hola, soy Jose Hernández",
    role: "Computer Systems Engineer",
    openTo: "Abierto a",
    roles: ["Junior Software Developer", "Datos · SQL y bases de datos", "IT · Redes y resolución de problemas"],
    learning: "Aprendiendo: seguridad de endpoints y ciberseguridad",
    intro:
      "Desarrollo software, diseño bases de datos y resuelvo problemas de TI y redes. Me gusta entender cómo fallan los sistemas para construirlos mejor.",
    ctaPrimary: "Escríbeme",
    scroll: "scroll para ver mi trabajo",
    terminal: [
      { command: "whoami", output: "computer-systems-engineer" },
      { command: "cat open-to.txt", output: "junior-dev · data/sql · it-support" },
      { command: "cat learning.txt", output: "endpoint-security · cybersecurity" },
      { command: "date", output: "", live: true },
    ],
  },
  about: {
    index: "01",
    label: "Sobre mí",
    title: "Software, datos, redes y resolución de problemas",
    paragraphs: [
      "Soy <strong>ingeniero en sistemas computacionales</strong>, graduado en 2026. Disfruto llevar una idea desde cero hasta algo que funciona, y entender a fondo por qué algo falla.",
      "He trabajado con <strong>bases de datos</strong> en PostgreSQL, SQL Server y Oracle, y he construido apps web, móviles y de escritorio. También tengo base en <strong>redes e infraestructura</strong>: TCP/IP, DNS, DHCP, Linux, Windows Server y hardware, gracias a la universidad y a mi formación técnica en redes.",
      "Vengo de <strong>prevención de fraude y respuesta a incidentes</strong> para Capital One, trabajando 100 % en inglés. Hoy estoy aprendiendo <strong>seguridad de endpoints y ciberseguridad</strong>.",
    ],
    facts: [
      { label: "Busco", value: "Junior Dev · Data · IT" },
      { label: "Fuerte en", value: "SQL y diagnóstico" },
      { label: "Aprendiendo", value: "Endpoints y ciberseguridad" },
      { label: "Idiomas", value: "Español · Inglés profesional" },
    ],
    techTitle: "stack",
    tech: [
      { group: "dev", items: TECH_DEV },
      { group: "data", items: TECH_DATA },
      { group: "it", items: TECH_IT },
    ],
  },
  experience: {
    index: "02",
    label: "Experiencia",
    title: "Experiencia y formación",
    items: [
      {
        kind: "Trabajo",
        date: "2024 — 2025",
        title: "Analista de ciberseguridad, prevención de fraude",
        company: "Foundever — Capital One",
        points: [
          "Detectaba patrones de fraude y protegía cuentas de clientes con las herramientas de seguridad de Capital One.",
          "Resolvía incidentes críticos cuidando datos financieros sensibles bajo cumplimiento PCI.",
          "Toda la comunicación fue 100 % en inglés, tanto con clientes como con mi equipo de trabajo.",
          "Superé de forma constante los SLA y métricas; reconocido como top performer.",
        ],
        skills: ["Detección de fraude", "Respuesta a incidentes", "PCI DSS", "Inglés profesional"],
      },
      {
        kind: "Universidad",
        date: "2023 — 2026",
        title: "Ingeniería en Sistemas Computacionales",
        company: "Universidad Tecnológica Costarricense",
        points: [
          "Desarrollo de software, bases de datos, redes e infraestructura de TI.",
          "Varios de los proyectos de abajo nacieron como cursos y proyectos finales en equipo.",
        ],
        skills: ["Desarrollo de software", "Bases de datos", "Redes"],
      },
      {
        kind: "Formación técnica",
        date: "2020 — 2022",
        title: "Técnico en Redes",
        company: "CTP Roberto Gamboa Valverde",
        points: [
          "Cursé el programa durante dos años; me faltó medio año para completarlo.",
          "Redes TCP/IP, direccionamiento, DNS y DHCP, cableado y hardware de red.",
        ],
        skills: ["TCP/IP", "DNS / DHCP", "Hardware"],
      },
    ],
  },
  projects: {
    index: "03",
    label: "Proyectos",
    title: "Lo que he construido",
    intro: "Proyectos personales, de la universidad y en equipo: qué son, por qué los hice y cómo funcionan por dentro.",
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
    title: "Diagnóstico de incidentes reales,",
    highlight: "aplicado al software",
    intro:
      "La respuesta a incidentes y mi formación en redes me enseñaron a diagnosticar con información incompleta, sistemas que dependen entre sí, usuarios afectados y tiempos de respuesta definidos. Aplico esa misma disciplina al desarrollo y al soporte.",
    steps: [
      {
        icon: "isolate",
        title: "Aislar",
        text: "Separo las variables de dispositivo, red, servicio y aplicación, y reproduzco la falla con la prueba mínima que la demuestre.",
        detail: "$ síntoma → capa → causa raíz",
      },
      {
        icon: "inspect",
        title: "Inspeccionar",
        text: "Verifico configuración TCP/IP, DNS y DHCP, conectividad y VPN, logs, estado de los servicios y los datos en la base de datos.",
        detail: "$ red → servicio → base de datos → app",
      },
      {
        icon: "resolve",
        title: "Resolver y documentar",
        text: "Registro evidencia, impacto y pasos de reproducción; resuelvo el problema o lo escalo con el contexto que el equipo necesita.",
        detail: "$ reproducir → resolver → prevenir",
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contacto",
    title: "Hablemos",
    text: "Busco mi siguiente paso como Junior Software Developer, en un puesto de datos con SQL y bases de datos, o en IT y redes resolviendo problemas. Si tu equipo necesita a alguien que aprende rápido y no suelta un problema hasta resolverlo, escríbeme.",
    cta: "Escríbeme",
  },
  footer: { built: "Hecho con Astro y Tailwind CSS" },
}

const en: Content = {
  meta: {
    title: "Jose Hernández — Computer Systems Engineer",
    description:
      "Portfolio of Jose Hernández, Computer Systems Engineer from San José, Costa Rica. Open to Junior Software Developer, data (SQL and databases) and IT / networking roles.",
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
    status: "Available for work",
    greeting: "Hi, I'm Jose Hernández",
    role: "Computer Systems Engineer",
    openTo: "Open to",
    roles: ["Junior Software Developer", "Data · SQL & databases", "IT · Networking & troubleshooting"],
    learning: "Learning: endpoint security and cybersecurity",
    intro:
      "I build software, design databases and solve IT and networking problems. I like understanding how systems fail so I can build them better.",
    ctaPrimary: "Get in touch",
    scroll: "scroll to see my work",
    terminal: [
      { command: "whoami", output: "computer-systems-engineer" },
      { command: "cat open-to.txt", output: "junior-dev · data/sql · it-support" },
      { command: "cat learning.txt", output: "endpoint-security · cybersecurity" },
      { command: "date", output: "", live: true },
    ],
  },
  about: {
    index: "01",
    label: "About",
    title: "Software, data, networking and problem solving",
    paragraphs: [
      "I'm a <strong>Computer Systems Engineer</strong>, graduated in 2026. I enjoy taking an idea from zero to something that works, and digging in until I understand exactly why something breaks.",
      "I've worked with <strong>databases</strong> in PostgreSQL, SQL Server and Oracle, and built web, mobile and desktop apps. I also have a foundation in <strong>networking and infrastructure</strong> — TCP/IP, DNS, DHCP, Linux, Windows Server and hardware — from university and my network technician training.",
      "I come from <strong>fraud prevention and incident response</strong> for Capital One, working 100% in English. Right now I'm learning <strong>endpoint security and cybersecurity</strong>.",
    ],
    facts: [
      { label: "Looking for", value: "Junior Dev · Data · IT" },
      { label: "Strong in", value: "SQL & diagnostics" },
      { label: "Learning", value: "Endpoints & cybersecurity" },
      { label: "Languages", value: "Spanish · Professional English" },
    ],
    techTitle: "stack",
    tech: [
      { group: "dev", items: TECH_DEV },
      { group: "data", items: TECH_DATA },
      { group: "it", items: TECH_IT },
    ],
  },
  experience: {
    index: "02",
    label: "Experience",
    title: "Experience and education",
    items: [
      {
        kind: "Work",
        date: "2024 — 2025",
        title: "Cybersecurity Analyst, Fraud Prevention",
        company: "Foundever — Capital One",
        points: [
          "Detected fraud patterns and protected customer accounts using Capital One's security tools.",
          "Resolved critical incidents while protecting sensitive financial data under PCI compliance.",
          "All communication was 100% in English, with customers and with my own team.",
          "Consistently exceeded SLAs and metrics; recognized as a top performer.",
        ],
        skills: ["Fraud detection", "Incident response", "PCI DSS", "Professional English"],
      },
      {
        kind: "University",
        date: "2023 — 2026",
        title: "Computer Systems Engineering",
        company: "Universidad Tecnológica Costarricense",
        points: [
          "Software development, databases, networking and IT infrastructure.",
          "Several of the projects below started as coursework and team capstones.",
        ],
        skills: ["Software development", "Databases", "Networking"],
      },
      {
        kind: "Technical training",
        date: "2020 — 2022",
        title: "Network Technician",
        company: "CTP Roberto Gamboa Valverde",
        points: [
          "Studied the program for two years; half a year short of completing it.",
          "TCP/IP networking, addressing, DNS and DHCP, cabling and network hardware.",
        ],
        skills: ["TCP/IP", "DNS / DHCP", "Hardware"],
      },
    ],
  },
  projects: {
    index: "03",
    label: "Projects",
    title: "Things I've built",
    intro: "Personal, university and team projects: what they are, why I built them and how they work under the hood.",
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
    title: "Real-world incident diagnosis,",
    highlight: "applied to software",
    intro:
      "Incident response and my networking training taught me to diagnose with incomplete information, interdependent systems, affected users and defined response times. I apply that same discipline to development and support.",
    steps: [
      {
        icon: "isolate",
        title: "Isolate",
        text: "I separate device, network, service and application variables, then reproduce the failure with the smallest test that proves it.",
        detail: "$ symptom → layer → root cause",
      },
      {
        icon: "inspect",
        title: "Inspect",
        text: "I verify TCP/IP configuration, DNS and DHCP, connectivity and VPN, logs, service state and the data in the database.",
        detail: "$ network → service → database → app",
      },
      {
        icon: "resolve",
        title: "Resolve & document",
        text: "I record evidence, impact and reproduction steps, then fix the issue or escalate it with the context the team needs.",
        detail: "$ reproduce → resolve → prevent",
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contact",
    title: "Let's talk",
    text: "I'm looking for my next step as a Junior Software Developer, in a data role working with SQL and databases, or in IT and networking solving problems. If your team needs someone who learns fast and doesn't let go of a problem until it's solved, reach out.",
    cta: "Get in touch",
  },
  footer: { built: "Built with Astro and Tailwind CSS" },
}

export const CONTENT: Record<Lang, Content> = { es, en }
