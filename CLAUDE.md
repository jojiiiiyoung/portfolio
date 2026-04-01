# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite dev server)
- **Build:** `npm run build` (tsc + vite build, output to build/)
- **Preview:** `npm run preview` (preview production build)
- **Deploy:** `npm run deploy` (builds then deploys to GitHub Pages via gh-pages)

## Architecture

Personal portfolio site (jojiiiiyoung.me) built with React 18 + TypeScript 5 + Vite 6. Dark theme design inspired by Brittany Chiang's portfolio.

### Tech Stack
- React 18.3 with createRoot + React.lazy code splitting
- TypeScript 5.6 (strict mode, bundler resolution)
- Vite 6 for build tooling
- CSS Modules for component-scoped styling
- lottie-react for animations
- Firebase 10 (modular API) for analytics

### Project Structure
```
src/
├── data/          # JSON data files (navigation, hero, about, projects, contact)
├── types/         # TypeScript interfaces
├── hooks/         # Custom hooks (useSiteData, useVisibility, useHash)
├── context/       # AppContext (hash-based navigation state)
├── utils/         # Firebase analytics (modular v10), env helpers
├── styles/        # Global CSS with design system variables
├── components/    # Feature components with co-located CSS Modules
│   ├── main/      # Hero section + HelloAnimation (Lottie)
│   ├── header/    # Sticky nav with scroll progress indicator
│   ├── about/     # Company cards + philosophy banner
│   ├── projects/  # Project showcase grid
│   ├── contact/   # Contact links with Lottie animations
│   └── common/    # Badge, Loading shared components
└── main.tsx       # Entry point (createRoot)
```

### Key Patterns
- **Data layer**: All content lives in `src/data/*.json`, loaded via `useSiteData` hooks. Components never hardcode content.
- **AppContext**: Manages current hash (active section) for navigation highlighting.
- **useVisibility**: IntersectionObserver hook for scroll-triggered animations.
- **useHash**: Combines visibility with AppContext + Firebase Analytics screen tracking.
- **Design system**: CSS custom properties in `src/styles/global.css` define colors, typography, spacing. All-dark theme with cyan (#22d3ee) accent.
- **CSS Modules**: Each component has a `.module.css` file. Global utility classes (sectionNumber, slide animations) in global.css.

### Environment Variables (Vite)
Firebase config uses `VITE_FB_*` prefix:
- `VITE_FB_API_KEY`, `VITE_FB_AUTH_DOMAIN`, `VITE_FB_PROJECT_ID`, etc.
