# Rafli Kurnia Nugroho — Portfolio

Personal portfolio website for **Rafli Kurnia Nugroho** — IT & Digital Transformation Professional
(Manufacturing · Industrial IoT · Data · AI).

## Tech Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** — dark theme with a modern red accent
- **Three.js** via `@react-three/fiber` + `@react-three/drei` — interactive 3D hero background
- **Framer Motion** — scroll reveals & React Bits-style animated UI components (custom-built:
  `AnimatedText`, `SpotlightCard`, `GradientText`, `MagneticButton`)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/   # Reusable UI (Navbar, Footer, SpotlightCard, AnimatedText, ...)
  sections/     # Page sections (Hero, About, Timeline, Skills, Projects, Credentials, Contact)
  three/        # React Three Fiber scene (particle field + wireframe core)
  data/         # Portfolio content (profile, timeline, skills, projects, credentials)
  hooks/        # Custom hooks (scroll spy, reduced-motion)
  lib/          # Small utilities
```

## Development Checkpoints

See [CHECKPOINTS.md](./CHECKPOINTS.md) for the phased development plan and progress tracking.

## Deployment

Built with `npm run build`, output in `dist/`. Suitable for GitHub Pages, Vercel, or Netlify.
