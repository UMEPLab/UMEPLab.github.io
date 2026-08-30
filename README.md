# UMEP Lab Website

Static Astro website for the Urban Mobility and Environmental Perception Laboratory.

## Local development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321/` by default.

## Production build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. The configured public URL is
`https://umeplab.github.io/`.

## Content

- News: `src/content/news/`
- Publications: `src/content/publications/`
- Team page: `src/pages/people.astro`
- Research page: `src/pages/research.astro`
- Openings page: `src/pages/openings.astro`

News image metadata should include `image`, `imageWidth`, and `imageHeight` so
the browser can reserve the correct space before an image loads. Prefer WebP
assets sized for the web and place them in `public/`.

## Before publishing

1. Run `npm run build` and resolve all build errors.
2. Check the home, people, research, openings, and news routes on desktop and mobile.
3. Verify external publication links and recruitment details.
4. Confirm `git status` contains only the intended changes.
