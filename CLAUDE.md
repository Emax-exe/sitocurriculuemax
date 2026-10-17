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

- `stile.css` is the shared design system (CSS variables on `:root`: bordeaux palette, radii, shadows, transitions) plus nav and home styles. Each subpage also has a page-specific inline `<style>` block.
- Dark/light theme: colors live in `stile.css` (`:root` and `:root[data-theme="dark"]`). `tema.js`, loaded in every page's `<head>`, sets `data-theme` from `localStorage('theme')`, defines `toggleTheme()` and wires every `.theme-toggle` button by event delegation (no per-page listener needed).
- Use `--accent` for backgrounds/borders (white text on it) and `--accent-text` for colored text and links — the latter is lightened in dark mode for contrast. `--line`, `--accent-soft` and `--nav-bg` are theme-aware helpers for borders, hover tints and the blurred bars.
- `stile.css` is mobile-first: base rules = phone, then a "TABLET" (≥ 700px) and a "DESKTOP" (≥ 1024px **and landscape**, so a portrait tablet such as iPad Pro gets the tablet layout) media query at the end; keep the same condition in `curriculum.html` and in the `desktopLayout` matchMedia in `index.html`. Mobile and desktop share the same design language (photo hero, cards with left-aligned titles and accent underline).
- Home (`body.home`): one `#site-nav` markup for all sizes. Outside the desktop query `#nav-panel` is a full-screen bordeaux menu opened by `#nav-toggle` (class `nav-open` on `<html>`; closes on link click/Escape); on desktop the same panel is the inline link row (the "CV completo" card and the social icons are mobile-only). `nav-scrolled` on `<html>` switches the bar to its solid style; an inline script marks the current section's link `.active`. Hero is full-screen `concerto-2025.jpg` (text at the bottom on mobile, on the right on desktop); `ritratto-2025.jpg` in "Chi sono".
- Logo: bordeaux badge with the guitar sound hole, rosette, six strings and the initials "EG" (Cormorant Garamond SemiBold, OFL, converted to paths so it never depends on fonts). The same SVG markup is `favicon.svg` and the inline `.nav-logo` in every page's `.nav-brand`; PNG copies `favicon-48/96/192.png` and `apple-touch-icon.png` (180px, full-bleed bordeaux) are linked in every page's `<head>`. If the logo changes, update all of these together.
- Subpages use a static `.topbar` (brand, "Home" pill, theme toggle) defined in `stile.css`.
- `curriculum.html` (`body.cv-page`, CSS in its inline `<style>`, desktop in its own ≥ 1024px landscape query): compact title header with PDF/contact buttons (no photo); `.cv-sidebar` is a sticky horizontal tab bar on mobile and a sticky sidebar with photo on desktop (active link set by an inline scroll script); photo gallery `galleria-2025-*.jpg` scrolls horizontally on mobile.
- External deps: Google Fonts (Inter) and Font Awesome 6.5.0 from cdnjs. Both are declared as third parties in `cookie-policy.html`; keep it updated if external resources or `localStorage` keys change.

## SEO

`index.html` contains Schema.org JSON-LD (Person) plus Open Graph/canonical tags; `curriculum.html` has its own meta/canonical. When adding or changing public pages, update `sitemap.xml` (incl. `lastmod`) and `robots.txt` as needed, and keep personal data in JSON-LD consistent with visible content.
