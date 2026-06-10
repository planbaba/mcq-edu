# Kids MCQ Adventure Learning Platform

A fully static AstroJS educational gaming website for children aged 8–14. It uses Markdown + YAML frontmatter content collections to generate subjects, chapters, notes, videos, quizzes, explanations, a world map, leaderboard, and progress dashboard.

## Highlights

- AstroJS static generation (`output: "static"`)
- TypeScript content schemas
- Tailwind CSS Neo Brutalist comic design
- Touch-first tablet layout with sticky bottom navigation
- Markdown-driven subjects, chapters, quizzes, notes, and videos
- Gamified quiz UI with timer, XP meter, coins, stars, streaks, and explanations
- Static leaderboard, progress, achievements, and world map mock data

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content

Add content in `src/content/*` using Markdown frontmatter. Dynamic routes use `getStaticPaths()` so the whole site can deploy to Cloudflare Pages, Netlify, Vercel Static, GitHub Pages, or any static host.
