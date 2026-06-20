# Elua — website

The presentation & open-source site for **Elua**, a 4D game about the quiet
dignity of keeping a vast, half-understood machine alive.

Built with [Astro](https://astro.build). Static output, no external font/CDN
calls (fonts are bundled), deployed on **Netlify**.

## Pages

| Route                     | What it is                                                  |
|---------------------------|-------------------------------------------------------------|
| `/`                       | The game as it will be — world, loop, where we are & headed |
| `/open`                   | Open source: the concept and how contributions get in       |
| `/dimension`              | Four dimensions? — articles + dev journal                   |
| `/dimension/<slug>`       | An individual article (from `src/content/4d/`)              |

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build (what Netlify runs)

```bash
npm run build      # → dist/
npm run preview    # serve the built dist/ locally
```

## Adding a 4D article

Drop a Markdown file into `src/content/4d/`. Frontmatter:

```yaml
---
title: Your title
subtitle: One-line hook (optional)
date: 2026-01-31
kind: Primer        # Primer | Curiosities | Dev journal
order: 5            # lower = earlier in the reading list
readingMin: 6
draft: false
---
```

It appears automatically on `/dimension`, sorted by `order` then `date`.

## Adding real game screenshots

The "Where we are" gallery on the front page shows placeholder tiles until real
frames exist. Drop PNG/JPGs into `src/assets/screens/` named:

`corridor.png` · `turn-and-face.png` · `leap.png` · `plane-4d.png` ·
`forest-fetch.png` · `maze.png`

They replace the matching placeholders automatically (Astro optimizes them).
See `../new/SCREENSHOTS_FOR_WEBSITE.md` for what each should show and the small
CLI addition that would let these be captured automatically.

## Deploy to Netlify

`netlify.toml` is already configured (`npm run build` → publish `dist/`,
Node 20).

**Option A — from Git (recommended):**

1. `git init` this folder (or the whole repo) and push to GitHub/GitLab.
2. In Netlify: *Add new site → Import an existing project* → pick the repo.
   Astro is auto-detected; the `netlify.toml` settings apply.

**Option B — Netlify CLI:**

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Before launch — replace placeholders

Search for `← replace` / `example` and fill in:

- `astro.config.mjs` — `site:` real domain
- `public/robots.txt` — sitemap host
- `src/components/Footer.astro` & `src/pages/open.astro` — `REPO_URL` (GitHub)
