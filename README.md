# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
## Import publications from Google Scholar (BibTeX)

You can convert your Google Scholar publications into site content files under `src/content/publications/` using a BibTeX export.

Steps:

1. Export BibTeX from Google Scholar (My Citations → select works → Export → BibTeX).
2. Save the file as `scholar.bib` in the project root.
3. Run:

   ```bash
   node scripts/import-scholar-bibtex.mjs scholar.bib
   ```

   Use `--overwrite` to regenerate files if some already exist:

   ```bash
   node scripts/import-scholar-bibtex.mjs scholar.bib --overwrite
   ```

The script maps `@article` → `journal`, `@inproceedings` → `conference`, and fills fields: `title`, `authors`, `journal/booktitle`, `year`, `volume`, `pages`, `doi`, `projectPage`, `abstract`. Files are named `slug-year.md` and written to `src/content/publications/`.
