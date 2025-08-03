# Gen AI Global Website

This repository contains a mobile-first, investor-grade landing site. The interface is built with [Tailwind CSS](https://tailwindcss.com/) and all page content is sourced from a JSON configuration so that the site is CMS-ready.

## Architecture
- **`index.html`** loads `head-section.html` and `top-panel.html` using `w3.js` for simple templating.
- **`site-data.json`** holds all navigation links, text, and media URLs.
- **`main.js`** fetches the JSON and populates the DOM, adding graceful fallbacks when fields are missing.
- Tailwind is configured for the Gen AI Global palette (maroon `#750014`, gray `#8B959E`, purple `#B74EF7`) and dark‑mode support.

## Running Locally
No build step is required. Launch a static server and open `index.html`:

```bash
npx serve .
```

or simply open the file in a modern browser.

## Performance Testing
Lighthouse can be used to benchmark performance:

```bash
npx lighthouse http://localhost:3000/index.html --view
```

> The container environment blocked `npm install -g lighthouse`, so metrics could not be recorded here.

## Before/After Summary
- Replaced custom CSS with tree-shakable Tailwind via CDN.
- Navigation, hero text, mission, features, video and footer now load from `site-data.json` with fallbacks.
- Added dark‑mode toggle, lazy-loaded assets and micro-animations on feature cards.
