# Requirements Driven Development — Website

Marketing and blog site for the RDD project. Built with [Astro](https://astro.build), Tailwind CSS v4, React, and MDX.

**Live site:** https://oalahurikar.github.io/ReqSystemEng-docs/

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321/ReqSystemEng-docs/`

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  blog/          # Blog posts (markdown/MDX)
  components/    # Astro components (Header, Footer, BlogCard)
  layouts/       # Page layouts (BaseLayout, BlogPost)
  pages/         # Routes (index, blog/index, blog/[slug])
  styles/        # Global CSS
public/          # Static assets
```

## Deployment

Pushes to `main` trigger GitHub Actions deploy to GitHub Pages automatically.
