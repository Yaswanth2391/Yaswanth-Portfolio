# Yaswanth Pemmadi — Dynamic Portfolio v2

This is the corrected, fully populated portfolio build. It is a React + Vite multi-page application with reusable components and separate page files.

## Pages
- Home
- About
- Skills
- Projects
- Project Details (`/projects/:slug`)
- Experience
- Education
- Contact
- 404

## Key architecture
`src/components/` contains reusable Layout, ProjectCard, PageHeader, SectionTitle, Reveal and ScrollTop components.

`src/pages/` contains the actual page implementations. Nothing is intentionally left empty.

`src/data/projects.js` is the single project data source. Add/edit projects there and the Projects page, Home featured section and project detail routes update from the same data.

## Live project behavior
The portfolio's **Original Live Site** buttons open the deployed projects themselves. The portfolio does not copy their home pages.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Notes
- Replace the placeholder GitHub and LinkedIn profile URLs in `src/components/Layout.jsx` and `src/pages/Contact.jsx` with your real profiles.
- The contact form currently opens the user's email client. It can later be connected to a backend/email service.
- The professional portrait is included under `public/assets/`.

## Fix in v2.1
The ScrollTop effect was corrected so its callback does not implicitly return `window.scrollTo(...)`. React effects may only return a cleanup function or `undefined`.
