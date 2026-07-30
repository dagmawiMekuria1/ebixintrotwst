# ebixIntro — Style Guide & Coding Conventions

## General Principles
- This is a **static, no-build site**. No npm, no bundlers, no frameworks.
- All CSS lives in `assets/site.css`. All JS lives in `assets/site.js`.
- All paths must be **relative** (e.g., `assets/site.css`, not `/assets/site.css`).
- **Zero external requests.** No CDNs, no Google Fonts, no remote images, no fetch/XHR.

## HTML Conventions
- Use semantic HTML5 elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Every page must include `<!DOCTYPE html>`, `<html lang="en">`, proper `<meta charset>` and `<meta viewport>`.
- Page titles follow pattern: `"Page Name — ebixIntro"`.
- Use consistent `id` attributes for sections to enable anchor links from nav.
- Indent with 2 spaces.
- Every `<img>` must have an `alt` attribute (though we use inline SVG, not images).
- All icon/illustration content is inline SVG or CSS — never external image files.

## CSS Conventions
- Use CSS custom properties (variables) defined in `:root` for all colors, fonts, spacing.
- Class naming: BEM-lite — `.block__element--modifier` (e.g., `.card__title`, `.nav__link--active`).
- No `!important` unless absolutely unavoidable.
- Mobile-first media queries: base styles are mobile, use `min-width` breakpoints to scale up.
- Breakpoints: `640px` (tablet), `1024px` (desktop).
- Transitions: use `transition: all 0.2s ease` for hover effects. Keep animations subtle.
- Box model: use `box-sizing: border-box` globally.
- Max content width: `1120px` centered with `margin: 0 auto`.
- Readable text max-width: `720px` for long-form content pages.

## JavaScript Conventions
- Vanilla JS only. No jQuery, no libraries.
- Use `const` and `let` — never `var`.
- Use `document.addEventListener('DOMContentLoaded', ...)` to initialize.
- Use `document.querySelector` / `querySelectorAll` for DOM access.
- Functions should be named descriptively: `toggleMobileNav()`, `filterGlossary()`.
- Comment each function with a one-line description of what it does.
- No inline `onclick` handlers in HTML — bind events in JS.

## File Naming
- All lowercase, hyphens for multi-word: `site.css`, `site.js`, `logo.svg`.
- HTML pages are single-word or short: `life.html`, `health.html`, `glossary.html`, `contacts.html`.

## Content Guidelines
- Write insurance explanations at a **plain English, 8th-grade reading level**.
- Use short paragraphs (2–3 sentences max).
- Use bullet points for lists of types/options.
- Define jargon inline or link to the glossary.
- All content is **fake/example data** — this is a test/demo site.

## Accessibility
- Sufficient color contrast (blue on white passes WCAG AA).
- Focus styles on interactive elements (buttons, links, inputs).
- Skip-to-content link as first element in `<body>`.
- ARIA labels on the hamburger menu button.
- Semantic heading hierarchy: one `<h1>` per page, then `<h2>`, `<h3>`.