# Patil Arena

Company website for Patil Arena, built with **React 19 + Vite 8**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

## Cinematic scroll experience

Every page section reveals as it enters the viewport and softly hides as it leaves, in both scroll directions.

| Layer | File | Effect |
| --- | --- | --- |
| Section transition | `src/components/Section.jsx` | Scroll-linked scale + fade in/out per section (scales from the top edge so `#anchor` nav stays exact) |
| Content reveal | `src/components/Reveal.jsx` | Staggered fade-up with blur-to-sharp for inner blocks |
| Progress bar | `src/pages/Home.jsx` | Spring-smoothed green reading-progress bar pinned to the top |

Usage: wrap any section in `Home.jsx`.

```jsx
<Section><About /></Section>
```

Tuning lives in `Section.jsx`: the `offset` windows control when the transition starts/ends, and the `useTransform` lines control opacity and scale strength. Users with `prefers-reduced-motion` get no section animation.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
