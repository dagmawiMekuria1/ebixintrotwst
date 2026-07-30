# ebixIntro — Codi's Development Instructions

## Project Overview
A static internal reference site for insurance newcomers. 7 HTML pages, 1 CSS file, 1 JS file, 1 SVG logo. No build step. No dependencies.

## How to Serve Locally
Open `index.html` directly in a browser, or use any static file server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## File Creation Order
Build files in this exact order to manage dependencies:

1. **`assets/logo.svg`** — The logo SVG. A geometric blue "e" mark followed by "ebixIntro" text. Colors: `#0047AB` for the mark, `#1A1A2E` for text. Keep it under 2KB.

2. **`assets/site.css`** — Complete stylesheet. Structure it in this exact order:
   - CSS custom properties (`:root { ... }`)
   - Reset / base styles (box-sizing, margins, typography)
   - Utility classes (`.sr-only`, `.container`, `.content-narrow`, `.animate-on-scroll`)
   - Typography base (h1–h3, p, a, strong, ul, dl)
   - Skip link (`.skip-link`)
   - Navigation component (`.nav`, `.nav__inner`, `.nav__logo`, `.nav__links`, `.nav__hamburger`)
   - Hero component (`.hero`, `.hero__title`, `.hero__subtitle`, `.hero__accent`)
   - Card component (`.card`, `.card__icon`, `.card__title`, `.card__desc`, `.card__link`)
   - Card grid layouts (`.card-grid`, `.card-grid--wide`)
   - Content sections (`.section`, `.section--alt`)
   - Breadcrumb (`.breadcrumb`)
   - Title area (`.title-accent`)
   - Callout box (`.callout`, `.callout__label`, `.callout__text`)
   - Prev/next navigation (`.page-nav`, `.page-nav__link`)
   - Glossary-specific (`.glossary-search`, `.glossary-search__icon`, `.glossary-list`, `.glossary-letter`, `.glossary-term`, `.glossary-term--hidden`, `.glossary-no-results`)
   - Contact-specific (`.contact-grid`, `.contact-card`, `.contact-avatar`, `.contact-name`, `.contact-title`, `.contact-tags`, `.contact-tag`, `.contact-info`)
   - Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
   - Footer (`.footer`)
   - Keyframe animations (`@keyframes fade-in-up`, `accent-line-grow`, `accent-line-grow-left`, `card-enter`, `underline-grow`, `shimmer`)
   - Media query: Tablet (`min-width: 640px`)
   - Media query: Desktop (`min-width: 1024px`)
   - Reduced motion (`prefers-reduced-motion: reduce`)
   - Print styles (`@media print`)

3. **`assets/site.js`** — All interactive behavior:
   - `toggleMobileNav()` — hamburger menu show/hide with aria-expanded toggle
   - `highlightActiveNav()` — add `nav__link--active` class based on current page filename
   - `filterGlossary()` — live search/filter on glossary.html, shows/hides letter headers
   - `initScrollAnimations()` — IntersectionObserver for `.animate-on-scroll` elements
   - `handleNavScroll()` — add `.nav--scrolled` class when scrolled past 10px
   - Initialize all on `DOMContentLoaded`

4. **`index.html`** — Home page. Include:
   - Skip-to-content link
   - Nav bar with logo SVG (`<img src="assets/logo.svg">`) and all page links
   - Hero section with heading "Insurance at ebix" and subtitle
   - 4-card grid: Life, Health, Annuities, Property (each links to its page)
   - 2-card wide row: Glossary, Contacts
   - Footer

5. **`life.html`** — Life insurance explainer page
6. **`health.html`** — Health insurance explainer page
7. **`annuities.html`** — Annuities explainer page
8. **`property.html`** — Property & casualty explainer page
9. **`glossary.html`** — Searchable glossary of ~25–30 insurance terms
10. **`contacts.html`** — Internal directory with 6–8 fake contacts

## Shared Page Template
Every HTML page must follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Name — ebixIntro</title>
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <nav class="nav">
    <div class="nav__inner container">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo.svg" alt="ebixIntro" height="32">
      </a>
      <button class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links">
        <li><a href="life.html" class="nav__link">Life</a></li>
        <li><a href="health.html" class="nav__link">Health</a></li>
        <li><a href="annuities.html" class="nav__link">Annuities</a></li>
        <li><a href="property.html" class="nav__link">Property</a></li>
        <li><a href="glossary.html" class="nav__link">Glossary</a></li>
        <li><a href="contacts.html" class="nav__link">Contacts</a></li>
      </ul>
    </div>
  </nav>

  <main id="main">
    <!-- Page-specific content here -->
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 ebixIntro &middot; Internal use only</p>
    </div>
  </footer>

  <script src="assets/site.js"></script>
</body>
</html>
```

## Content Pages (life, health, annuities, property) Pattern
Each explainer page should include:
- Breadcrumb: `Home > Page Name`
- H1 with the page title
- A short blue accent line under the title (use a `<div class="title-accent"></div>`)
- 3–4 sections with H2 headings (What is it?, Who needs it?, Types, etc.)
- At least 1 callout/takeaway box using the `.callout` component
- Bottom prev/next navigation linking to adjacent pages

The page order for prev/next navigation is:
1. Life → 2. Health → 3. Annuities → 4. Property

So life.html has no "previous" but links next to health.html; property.html links previous to annuities.html but has no "next".

## Callout Box Structure

```html
<div class="callout animate-on-scroll animate-on-scroll--left">
  <span class="callout__label">Key Takeaway</span>
  <p class="callout__text">Summary sentence goes here.</p>
</div>
```

## Glossary Data Structure
Each term should use a `<dl>` wrapper with individual term divs:

```html
<dl class="glossary-list">
  <h3 class="glossary-letter">A</h3>
  <div class="glossary-term" data-term="actuary">
    <dt>Actuary</dt>
    <dd>A professional who uses math and statistics to assess risk in the insurance industry.</dd>
  </div>
  <div class="glossary-term" data-term="annuitant">
    <dt>Annuitant</dt>
    <dd>The person who receives payments from an annuity contract.</dd>
  </div>
  <!-- more terms... -->
  <h3 class="glossary-letter">B</h3>
  <div class="glossary-term" data-term="beneficiary">
    <dt>Beneficiary</dt>
    <dd>The person designated to receive the proceeds of an insurance policy.</dd>
  </div>
  <!-- etc. -->
</dl>
```

The `data-term` attribute (lowercase) is used by the JS `filterGlossary()` function to match against the user's search input. The function should also search within the `<dd>` text content, not just the term name.

Include at least 25 terms covering all four insurance types (life, health, annuities, property) plus general insurance terms.

## Glossary Search Structure

```html
<div class="glossary-search">
  <label for="glossary-input" class="sr-only">Search glossary terms</label>
  <svg class="glossary-search__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="12" x2="16.5" y2="16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <input type="text" id="glossary-input" class="glossary-search__input" placeholder="Search terms..." aria-label="Search glossary terms">
</div>
```

## No Results State
When filtering results in zero matches, show:

```html
<div class="glossary-no-results" style="display: none;">
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="30" x2="42" y2="42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <line x1="15" y1="15" x2="25" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="15" x2="15" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <p class="glossary-no-results__title">No terms match "<span class="glossary-no-results__query"></span>"</p>
  <p class="glossary-no-results__sub">Try a different search term</p>
</div>
```

The JS function should toggle this element's display and fill in the query span.

## Contact Data Structure
Include 6–8 fake people. Each contact card should have:

```html
<div class="contact-card animate-on-scroll">
  <div class="contact-avatar">JD</div>
  <h3 class="contact-name">Jane Doe</h3>
  <p class="contact-title">Senior Underwriter</p>
  <div class="contact-tags">
    <span class="contact-tag">Life Insurance</span>
    <span class="contact-tag">Annuities</span>
  </div>
  <div class="contact-info">
    <p>Ext. <span class="mono">4201</span></p>
    <p><a href="mailto:jdoe@ebix.internal">jdoe@ebix.internal</a></p>
  </div>
</div>
```

Use staggered `transition-delay` values (via inline style attributes) for the scroll animation on each card:
- Card 1: `style="transition-delay: 0ms"`
- Card 2: `style="transition-delay: 80ms"`
- Card 3: `style="transition-delay: 160ms"`
- etc.

Maximum stagger delay: 400ms.

## Prev/Next Navigation Structure

```html
<nav class="page-nav" aria-label="Page navigation">
  <a href="life.html" class="page-nav__link page-nav__link--prev">
    <span class="page-nav__direction">&larr; Previous</span>
    <span class="page-nav__title">Life Insurance</span>
  </a>
  <a href="annuities.html" class="page-nav__link page-nav__link--next">
    <span class="page-nav__direction">Next &rarr;</span>
    <span class="page-nav__title">Annuities</span>
  </a>
</nav>
```

When there is no previous or next page, simply omit that link. Use a spacer or let flexbox `justify-content: space-between` handle the positioning.

## Card Icons
Use emoji for card icons on the home page. Each card's icon sits inside a `.card__icon` container:
- Life Insurance: 🛡️
- Health Insurance: ❤️
- Annuities: 💰
- Property & Casualty: 🏠
- Glossary: 📖
- Contacts: 📞

## CSS Custom Properties Reference
All colors, fonts, spacing, shadows, radii, and transitions are defined as CSS custom properties in `:root`. Refer to the design spec for the complete list. Key values:

### Colors