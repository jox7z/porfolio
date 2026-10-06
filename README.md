# Jose Hernández — Portafolio

Portafolio personal de **Jose Hernández**, Computer Systems Engineer de San José, Costa Rica 🇨🇷.

Abierto a puestos de **Junior Software Developer**, **datos (SQL y bases de datos)** e **IT / redes y resolución de problemas**.

<div>

![Astro](https://img.shields.io/badge/Astro-FF5A35?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Bilingüe](https://img.shields.io/badge/i18n-ES%20%2F%20EN-33E6C9?style=flat)

</div>

---

## ✨ Características

- **Bilingüe (ES / EN):** español en `/` e inglés en `/en/`. Al cambiar de idioma se conserva la sección en la que estás.
- **Estética de desarrollador:** terminal animada en el hero, tipografía monoespaciada, retícula de fondo en toda la página y modo claro/oscuro.
- **Barra lateral de progreso:** un carril que se llena al hacer scroll, marca la sección activa y muestra el porcentaje leído. En móvil se convierte en una línea de progreso bajo la cabecera.
- **Proyectos sin capturas:** cada proyecto se explica con su contexto (por qué y cómo se hizo), cómo funciona por dentro y su stack.
- **Botón de CV automático:** aparece como "próximamente" hasta que se agrega el PDF. Ver [Agregar el CV](#-agregar-el-cv).
- **Accesible y ligero:** todo es HTML estático, las animaciones respetan `prefers-reduced-motion` y no hay frameworks de UI en el cliente.

## 🗂️ Secciones

| # | Sección | Contenido |
|---|---------|-----------|
| — | Hero | Rol, puestos a los que estoy abierto, lo que estoy aprendiendo y la terminal |
| 01 | Sobre mí | Perfil, datos clave y stack (dev · data · it) |
| 02 | Experiencia | Foundever — Capital One, universidad y técnico en redes |
| 03 | Proyectos | Gmo Training, Finity, Galería de Arte, Registro Docente 360, LimesDev, Reparaciones HM y Media Kit |
| 04 | Método | Cómo resuelvo problemas: aislar → inspeccionar → resolver y documentar |
| 05 | Contacto | Correo, GitHub, LinkedIn y CV |

## 🛠️ Tecnologías

- [Astro 4](https://astro.build/): sitio estático con View Transitions
- [Tailwind CSS 3](https://tailwindcss.com/): colores definidos como variables CSS para el tema claro y oscuro
- TypeScript
- Fuentes: Onest Variable y JetBrains Mono

## 🚀 Empezar

Requisitos: Node.js 18+ y [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev        # servidor local en http://localhost:4321
pnpm build      # astro check + build a dist/
pnpm preview    # previsualiza el build
```

## 📁 Estructura

```
src/
├── i18n/content.ts        # TODO el texto del sitio (ES y EN): perfil, experiencia, proyectos…
├── lib/cv.ts              # detección automática del CV
├── layouts/Layout.astro   # <head>, tema, fondo y animaciones de entrada
├── components/
│   ├── Home.astro         # arma la página completa para un idioma
│   ├── Hero.astro         # presentación + terminal animada
│   ├── ScrollRail.astro   # barra lateral de progreso
│   ├── Projects.astro     # lista de proyectos
│   ├── Approach.astro     # sección "Método"
│   └── …
└── pages/
    ├── index.astro        # español  (/)
    └── en/index.astro     # inglés   (/en/)
```

## ✏️ Editar el contenido

Todo el texto vive en **`src/i18n/content.ts`**, con un objeto `es` y otro `en` que tienen la misma estructura. Para cambiar un proyecto, una experiencia o un texto, edita ese archivo en ambos idiomas; no hace falta tocar los componentes.

Cada proyecto tiene esta forma:

```ts
{
  id: "gmo",
  title: "Gmo Training",
  year: "2026",
  role: "En equipo",          // opcional
  tags: ["App móvil"],
  status: "En desarrollo",    // opcional
  summary: "Qué es…",
  context: "Por qué y cómo se hizo…",
  highlights: ["Cómo funciona…"],
  stack: STACKS.gmo,
  github: GITHUB.gmo,
}
```

Los colores están en `src/layouts/Layout.astro` (variables `--c-*` para el tema claro y el oscuro) y se usan en Tailwind como `bg`, `ink`, `body`, `muted`, `line`, `accent` y `accent2`.

## 📄 Agregar el CV

Guarda el PDF en `src/assets/cv/` con uno o ambos nombres:

```
src/assets/cv/Jose-Hernandez-CV-ES.pdf
src/assets/cv/Jose-Hernandez-CV-EN.pdf
```

En el siguiente `pnpm build`, el botón cambia de "CV · próximamente" a "Descargar CV". Si solo existe una versión, se usa en ambos idiomas.

## 📬 Contacto

- Correo: joseadrianhernandez07@gmail.com
- GitHub: [@jox7z](https://github.com/jox7z)
- LinkedIn: [Jose Adrián Hernández Meléndez](https://www.linkedin.com/in/jose-adri%C3%A1n-hern%C3%A1ndez-mel%C3%A9ndez-3b1b84325/)

## 🙏 Créditos y licencia

Este proyecto parte de la plantilla [**porfolio.dev**](https://github.com/midudev/porfolio.dev) de [midudev](https://github.com/midudev) y sus contribuidores, y fue rediseñado y ampliado: diseño, sección bilingüe, barra de progreso, proyectos, sección de método y botón de CV.

Se distribuye bajo la licencia **Creative Commons Attribution-NonCommercial 4.0 International** ([LICENSE.md](./LICENSE.md)), igual que el proyecto original.
