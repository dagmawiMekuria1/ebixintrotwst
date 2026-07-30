# ebixIntro — Requirements Context (for Reqi)

## Project Type
Internal reference / knowledge-base website for insurance industry newcomers.

## Business Context
- **Company:** Ebix (insurance technology company)
- **Audience:** New employees, interns, or anyone unfamiliar with insurance basics
- **Purpose:** Provide plain-English explanations of core insurance concepts
- **Status:** This is a **fake/test site** to evaluate accuracy and completeness

## Functional Requirements

### FR-1: Home Page
- Displays an overview of available topics
- Provides clear navigation to all 4 insurance type pages, glossary, and contacts
- Must load with zero external dependencies

### FR-2: Insurance Explainer Pages (4 pages)
- **Life Insurance** (`life.html`): term vs whole, who needs it, how premiums work
- **Health Insurance** (`health.html`): plan types (HMO/PPO/EPO), deductibles, copays, networks
- **Annuities** (`annuities.html`): fixed vs variable, accumulation vs payout phases
- **Property & Casualty** (`property.html`): homeowners, renters, auto, liability coverage
- Each page must be self-contained, written in plain English, 8th-grade reading level
- Each page must include a "key takeaway" summary
- Each page must link to prev/next pages for sequential reading

### FR-3: Glossary Page
- Alphabetically sorted list of at least 25 insurance terms
- Each term has a plain-English definition (1–2 sentences)
- Real-time search/filter: typing in the search box immediately filters visible terms
- No page reload required for filtering

### FR-4: Contacts Page
- Directory of 6–8 fictional internal contacts
- Each entry shows: name, title, area of expertise, phone extension, email
- Organized in a scannable card/grid layout
- Clearly indicates who handles what type of question

### FR-5: Navigation
- Consistent top navigation bar on every page
- Current page is visually indicated (active state)
- Mobile-responsive hamburger menu for screens < 640px
- Logo links back to home page

## Non-Functional Requirements

### NFR-1: Performance
- All pages must load instantly (no network requests)
- Total site weight should be under 100KB

### NFR-2: Accessibility
- WCAG 2.1 AA color contrast compliance
- Semantic HTML structure
- Keyboard-navigable
- Screen reader compatible (proper headings, alt text, ARIA labels)

### NFR-3: Compatibility
- Must work in modern browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)
- Must work when opened via `file://` protocol (no server required)
- Must work under strict Content-Security-Policy (no external requests)

### NFR-4: Maintainability
- Clean, well-commented code
- Single CSS file, single JS file
- Easy to add new glossary terms or contact entries

## Content Accuracy Note
This is a **test site for accuracy evaluation**. All insurance content should be factually correct
and representative of real insurance concepts, even though the site itself is fake. Definitions
and explanations will be checked for accuracy.

## Out of Scope
- User authentication
- Database or server-side logic
- Forms or data submission
- Analytics or tracking
- Print stylesheets (nice to have, not required)