# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website of Emanuele Gramisci (classical guitarist and teacher), served at `gramisciemanuele.it` via GitHub Pages (`CNAME`). Plain static HTML/CSS/vanilla JS — no build step, no package manager, no tests. Content is in Italian.

To preview locally, serve the folder statically, e.g.:

```bash
python3 -m http.server 8000
```

Deploy = push to `main`.

## Structure

- `index.html` — home page. Only page with IT/EN switching: bilingual content is duplicated in elements with class `lang` and `data-lang="it|en"`; visibility is driven by `<html lang>` via CSS in `stile.css` (an inline `<head>` script restores the saved language before render; `setLanguage()` switches it). When editing home text, update both language variants.
- `curriculum.html` — full CV (Italian only). Links to `CV Emanuele Gramisci.pdf` for download; keep the PDF in sync when CV content changes.
- `studenti.html` — student area (Google Classroom instructions); `noindex` (deliberately *not* disallowed in `robots.txt`, or crawlers couldn't read the noindex).
- `cookie-policy.html` — cookie policy.
- `google8f1a32685035c3f6.html` — Google Search Console verification file; do not remove or rename.
- `_config.yml` — only excludes repo-only files (e.g. this CLAUDE.md) from the GitHub Pages build; add new ones there.
- `foto nuove da aggiungere/` — local folder of original photos, git-ignored; publish only web-optimized copies in the root.

## Styling and theming

- `stile.css` is the shared design system (CSS variables on `:root`: bordeaux palette, radii, shadows, transitions). Each subpage also has a large page-specific inline `<style>` block.
- Dark/light theme: colors live in `stile.css` (`:root` and `:root[data-theme="dark"]`). `tema.js`, loaded in every page's `<head>`, sets `data-theme` from `localStorage('theme')` and defines `toggleTheme()` (the toggle button is only on `index.html`).
- Use `--accent` for backgrounds/borders (white text on it) and `--accent-text` for colored text and links — the latter is lightened in dark mode for contrast.
- Home desktop layout (`body.home`, ≥ 1024px) is a separate design: fixed top nav built from the same `#lang-menu-container`/`#hamburger-links` markup, full-bleed hero photo `concerto-2025.jpg` with text on the right (`ritratto-2025.jpg` in "Chi sono"; both web-optimized from `foto nuove da aggiungere/`), two-column grid. All of it lives in the "DESKTOP" media query at the end of `stile.css`; desktop-only markup uses class `desktop-only` (hidden by default). Below 1024px the original mobile layout must stay unchanged. `curriculum.html` follows the same rule (`body.cv-page`, desktop CSS in its inline `<style>`): compact title header without photo (deliberately different from the home hero), sticky sidebar with section nav (active link set by an inline scroll script), and a photo gallery (`galleria-2025-*.jpg`).
- External deps: Google Fonts (Inter) and Font Awesome 6.5.0 from cdnjs. Both are declared as third parties in `cookie-policy.html`; keep it updated if external resources or `localStorage` keys change.

## SEO

`index.html` contains Schema.org JSON-LD (Person) plus Open Graph/canonical tags; `curriculum.html` has its own meta/canonical. When adding or changing public pages, update `sitemap.xml` (incl. `lastmod`) and `robots.txt` as needed, and keep personal data in JSON-LD consistent with visible content.
