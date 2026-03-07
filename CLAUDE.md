# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:4321/ReqSystemEng-docs/
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

No test runner or linter is configured.

## Architecture

Astro 5 static site with Tailwind CSS v4, React, and MDX. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

**Base path:** All routes are prefixed with `/ReqSystemEng-docs/` (configured in `astro.config.mjs`). Use `import.meta.env.BASE_URL` for internal links — never hardcode the base path.

**App link:** The actual product app runs at `https://reqsystemeng-production.up.railway.app`. CTA buttons on the landing page link to this.

### Key files

- `src/pages/index.astro` — Landing page (hero, problem, how-it-works, artifacts, differentiator, pricing, footer CTA)
- `src/layouts/BaseLayout.astro` — Shell layout (head, header, footer) used by all pages
- `src/layouts/BlogPost.astro` — Blog post layout
- `src/styles/global.css` — Design tokens as CSS custom properties, global base styles
- `src/content.config.ts` — Blog collection schema with validated tags from `src/data/tags.json`
- `dev_docs/Messaging.md` — Source of truth for all landing page copy, value propositions, tone rules, and promise boundaries

### Design system and style guide

Light minimal theme (white background, near-black text). All colors are CSS custom properties defined in `global.css` under `@layer base`. Key tokens: `--color-bg` (#fff), `--color-surface` (#f5f5f5), `--color-text` (#1a1a1a), `--color-text-muted` (#6b6b6b), `--color-accent` (#1a1a1a), `--color-btn-text` (#fff).

**CSS specificity rule:** Global styles MUST be inside `@layer base` so Tailwind utility classes can override them. Unlayered CSS beats `@layer utilities` in Tailwind v4 — this caused invisible button text previously.

**Spacing rules — keep the page tight and scannable:**
- Section padding: `py-6` (24px each side). Never use `py-12` or larger for content sections.
- Hero top padding: `pt-12`. No section should exceed this.
- Heading bottom margin: `mb-4` to `mb-6` max. Never `mb-8` or larger.
- Between paragraphs: `mt-3` or `mt-4`. Never `mt-6` or larger.
- Between cards/list items: `gap-3` or `space-y-3`. Never `gap-6` or larger.
- Inner card padding: `p-4` or `p-5`. Never `p-6` or larger.
- The goal is a dense, information-rich page like Linear's marketing — not a spacious SaaS template with hero-sized gaps between sections.

**Typography:**
- H1: `text-4xl sm:text-5xl font-bold tracking-tight`
- H2 (section headings): `text-3xl font-bold tracking-tight`
- H3 (card/item headings): `text-lg font-semibold` or `font-semibold` (base size)
- Body: base size with `text-[var(--color-text-muted)]` for secondary content
- Small/labels: `text-sm` or `text-xs`

**Buttons:**
- Primary: `bg-[var(--color-accent)] text-[var(--color-btn-text)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)]`
- Dark button on white page. White text on near-black background.
- CTA sizing: `px-8 py-3 text-lg` for hero/primary, `px-4 py-2 text-sm` for nav

**Layout:**
- Max content width: `max-w-3xl` for sections, `max-w-2xl` for text-heavy sections, `max-w-lg` for pricing
- Always `px-6` horizontal padding
- Cards: `rounded-lg border border-[var(--color-border)]`

### Blog system

Blog posts live in `src/blog/` as markdown/MDX files. Tags are centrally managed in `src/data/tags.json` and validated at build time via Zod enum in `content.config.ts`. To add a new tag, add it to `tags.json` first.

Routes: `/blog/` (index), `/blog/{slug}/` (post), `/blog/tags/{tag}/` (tag filter).

### Landing page content

Copy and messaging are grounded in `dev_docs/Messaging.md`. Key constraints from that doc:
- **Tone rule:** Flags are awareness, not assertions ("typically needs X — verify against your datasheet" not "You're missing X")
- **Promise boundary:** V1 catches conflicts, missing parameters, ambiguity. Does NOT do physics computation or silicon-specific edge cases.
- **Value hierarchy:** Catching > Artifacts > Compliance

### Components

- `ConvoBlock.astro` — Renders conversation excerpts (user/copilot messages) with role-based styling. Used on landing page for demo conversations.
- `Header.astro` / `Footer.astro` — Site-wide nav and footer
- `BlogCard.astro` / `TagList.astro` — Blog listing components
