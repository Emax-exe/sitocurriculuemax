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

- `index.html` — home page. Only page with IT/EN switching: bilingual content is duplicated in elements with class `lang` and `data-lang="it|en"`; `setLanguage()` toggles visibility. When editing home text, update both language variants.
- `curriculum.html` — full CV (Italian only). Links to `CV Emanuele Gramisci.pdf` for download; keep the PDF in sync when CV content changes.
- `studenti.html` — student area (Google Classroom instructions); `noindex` and disallowed in `robots.txt`. `materiale/` holds teaching PDFs, also disallowed.
- `cookie-policy.html` — cookie policy.
- `google8f1a32685035c3f6.html` — Google Search Console verification file; do not remove or rename.

## Styling and theming

- `stile.css` is the shared design system (CSS variables on `:root`: bordeaux palette, radii, shadows, transitions). Each subpage also has a large page-specific inline `<style>` block.
- Dark/light theme is set via JS by writing CSS variables on `document.documentElement`, persisted in `localStorage('theme')`. The toggle lives only on `index.html`; `curriculum.html` and `studenti.html` contain a duplicated inline script with the same theme maps to apply the saved theme. If theme colors change, update `index.html` **and** those inline copies.
- External deps: Google Fonts (Inter) and Font Awesome 6.5.0 from cdnjs.

## SEO

`index.html` contains Schema.org JSON-LD (Person) plus Open Graph/canonical tags; `curriculum.html` has its own meta/canonical. When adding or changing public pages, update `sitemap.xml` (incl. `lastmod`) and `robots.txt` as needed, and keep personal data in JSON-LD consistent with visible content.
