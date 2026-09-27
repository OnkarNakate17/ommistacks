# OmmiStacks

Personal technology brand website for **Onkar Nakate** — a premium, dark-first
developer portfolio and content hub, built as a fully static, multi-page
React app for GitHub Pages.

## Tech stack

- React + TypeScript + Vite
- React Router (`HashRouter`) for client-side page navigation — Home, About,
  Skills, Projects, Content, Experience and Contact are separate pages
- Tailwind CSS v4
- Framer Motion (respects `prefers-reduced-motion`)
- lucide-react icons (three brand icons — GitHub/LinkedIn/YouTube — are
  hand-drawn in `src/components/BrandIcons.tsx` since lucide-react no longer
  ships third-party brand marks)
- No backend, no database, no auth, no admin panel — 100% static. All content
  is bundled at build time from `src/data/`.

## Folder structure

```
├── public/                 # Static assets copied as-is (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── assets/              # Images — logo icon, hero/profile art
│   ├── components/          # Shared, reusable UI components
│   ├── data/                 # All site content (projects, skills, experience, etc.)
│   ├── hooks/                 # useTheme, useReveal
│   ├── lib/                    # useContent (static passthrough — see below)
│   ├── pages/                  # One file per route: Home, About, Skills, Projects,
│   │                            ContentPage, Experience, Contact
│   └── sections/               # One file per page section, reused across pages
├── .github/workflows/deploy.yml
├── index.html
└── vite.config.ts
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173/OmmiStacks/
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Pages & navigation

The navbar links to real routes, not in-page anchors:

| Route | Sections rendered |
|---|---|
| `/` | Hero (brand identity) + "What you get from OmmiStacks" |
| `/about` | Stats + About |
| `/skills` | Tech stack |
| `/projects` | Projects + System design + GitHub repos |
| `/content` | Content (videos) + Philosophy |
| `/experience` | Professional experience |
| `/contact` | Contact |

Routing uses `HashRouter` (URLs look like `/#/projects`) so it works out of
the box on GitHub Pages with no server-side rewrite rules needed.

## Content: currently static, built to go dynamic later

Every section reads from the bundled defaults in `src/data/` via the
`useContent(fileName, fallback)` hook in `src/lib/useContent.ts`. Right now
that hook just returns `fallback` — nothing is fetched at runtime, so the
site is fully static and has no moving parts.

The `content/*.json` files mirror `src/data/` and are kept around for when
you're ready to make this dynamic (e.g. reading from a CMS or your own API).
At that point, swap the body of `useContent` for a fetch against your
content source and every section will pick it up automatically — no other
code changes needed.

## Your photo

The hero's profile panel currently uses a placeholder graphic at
`src/assets/profile-placeholder.png` (styled in the brand colors). Replace
that file with a real photo of yourself — same aspect ratio (9:10) works
best — to finish the hero section.

## Customizing static defaults

| File | What it controls |
|---|---|
| `src/data/site.ts` | Brand name/description, SEO keywords, social links, GitHub repos |
| `src/data/experience.ts` | Professional experience timeline |
| `index.html` | Page `<title>`, meta description, Open Graph/Twitter tags, canonical URL |
| `public/favicon.png` | Favicon (generated from the OmmiStacks logo mark) |
| `public/robots.txt`, `public/sitemap.xml` | SEO files — update the domain if you fork this |
| `src/data/architecture.ts` | The "System Design" section's request-flow nodes |
| `src/index.css` | Theme colors (`--color-ommi-yellow`, `--color-ommi-blue`, `--color-ommi-blue-light`, `--ommi-word`) — currently set to the logo's mint-green/teal and blue palette |

**Files you may still want to personalize:**

- `content/social.json`, `content/github-repos.json`, `content/projects.json`,
  `content/videos.json` — replace placeholder URLs, or edit the matching
  files under `src/data/` directly (they're the ones actually bundled)
- `index.html` — canonical URL, OG/Twitter image URL
- `public/robots.txt`, `public/sitemap.xml` — your real domain
- `vite.config.ts` / `.github/workflows/deploy.yml` — `VITE_BASE_PATH` if
  your repo name isn't `OmmiStacks`, or is a user/org page (`/`)

## GitHub repository setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/OmmiStacks.git
git push -u origin main
```

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
to GitHub Pages automatically on every push to `main`.

One-time setup on GitHub:

1. Push this repo to GitHub (see above).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab) —
   the site publishes to `https://<your-username>.github.io/OmmiStacks/`.

If you rename the repository or deploy it as a user/organization page
(`<user>.github.io`), update `VITE_BASE_PATH` in
`.github/workflows/deploy.yml` and the default `base` in `vite.config.ts`
(use `/` for a user/org page), and update the hardcoded `/OmmiStacks/` paths
in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

### Manual deploy (alternative)

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch using the
`gh-pages` package — use this only if you're not using the Actions workflow.

## Pre-flight checklist

- [ ] `npm install && npm run build` compiles with no errors
- [ ] Replace `src/assets/profile-placeholder.png` with your real photo
- [ ] Replace every placeholder URL (see the personalization list above)
- [ ] Confirm mobile responsiveness and theme switching in your browser
- [ ] When ready to go dynamic, swap `useContent`'s body for a real fetch

---

© 2026 OmmiStacks. Built by Onkar Nakate.
