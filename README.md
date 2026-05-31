# Whistle's Website

A responsive marketing landing page for **Whistle and Smile** — an invisible dental aligner brand. The page captures leads, highlights a partnership with Clove Dental clinics, and promotes a free 3D teeth-scan offer.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 (with StrictMode) |
| Build tool | Vite 8 + `@vitejs/plugin-react` |
| Styling | Plain CSS (no framework) |
| Fonts | Montserrat 800 (headings), Instrument Sans 500/700 (body/UI) — loaded via Google Fonts |
| Linting | ESLint 10 + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |

---

## Project Structure

```
whistle's website/
├── index.html            # HTML shell — loads fonts, mounts #root
├── vite.config.js        # Vite config (React plugin only)
├── package.json
├── src/
│   ├── main.jsx          # Entry point — renders <App /> in StrictMode
│   ├── App.jsx           # Root component — composes all page sections
│   ├── Header.jsx        # Navbar + promotional price banner
│   ├── Hero.jsx          # Hero section — headline + patient image
│   ├── BookingForm.jsx   # Lead-capture form (name, phone, consent)
│   ├── CloveSection.jsx  # Partner-clinic card (Clove Dental)
│   ├── TickerBanner.jsx  # Infinite-scroll promotional strip
│   ├── index.css         # Global design tokens + base typography
│   ├── App.css           # All component styles (one file, sectioned)
│   └── assets/
│       ├── Logo.png           # Whistle and Smile brand logo
│       ├── AI-Expand-Pranav.png  # Hero patient image
│       ├── Clove-Dental.png   # Clove Dental partner logo
│       └── Contact.png        # Contact asset (reserved)
└── dist/                 # Vite build output
    ├── favicon.svg
    └── icons.svg
```

---

## Architecture

### Page Layout (top → bottom)

```
┌─────────────────────────────────────┐
│  Header                             │
│  ├── Navbar  (logo + call button)   │
│  └── PromoBanner  (price strip)     │
├─────────────────────────────────────┤
│  Hero                               │
│  ├── Headline + subtext             │
│  └── Patient image                  │
├─────────────────────────────────────┤
│  BookingForm                        │
│  ├── Teeth-gap radio buttons        │
│  ├── Full Name input (floating label│
│  ├── Mobile input (+91 prefix)      │
│  ├── Consent checkbox               │
│  └── "Book a Free Scan" submit btn  │
├─────────────────────────────────────┤
│  CloveSection                       │
│  └── Partner card (logo + CTA)      │
├─────────────────────────────────────┤
│  TickerBanner                       │
│  └── Infinite-scroll offer strip    │
└─────────────────────────────────────┘
```

### Component Responsibilities

**`App.jsx`** — Flat composition root. Imports and renders the five sections in order. No routing, no global state.

**`Header.jsx`** — Two-part header:
- `navbar`: logo on the left, circular call-button (inline SVG phone icon) on the right.
- `promo-banner`: gradient strip showing a crossed-out old price and highlighted new price.

**`Hero.jsx`** — Full-bleed `#F6F3FC` section using CSS Grid (60/40 columns on desktop, absolute positioning for pixel-perfect overlap). Contains the main H1 headline and a purple-accented subtext line.

**`BookingForm.jsx`** — Stateful lead-capture component (local `useState` for `teeth`, `name`, `mobile`, `consent`). Uses a floating-label pattern (CSS `:not(:placeholder-shown)`) and a custom-styled phone-prefix field. Form submission is currently a no-op (`handleSubmit` prevents default only).

**`CloveSection.jsx`** — Stateless card advertising the Clove Dental partnership. Contains the partner logo and a "Find Clinic" ghost button with a chevron SVG.

**`TickerBanner.jsx`** — Infinite marquee using pure CSS `@keyframes ticker-scroll`. Renders four `TickerSet` copies so the loop is seamless; only the first set is visible to screen readers (`aria-hidden` on the rest).

---

## Styling Architecture

| File | Purpose |
|---|---|
| `index.css` | CSS custom properties (design tokens), dark-mode overrides, base `body`/`h1`/`h2`/`p` resets |
| `App.css` | All component-level rules, organized by section with comment banners |

### Design Tokens (from `index.css`)

| Token | Light value | Role |
|---|---|---|
| `--accent` | `#aa3bff` | Brand purple (buttons, highlights) |
| `--text` | `#6b6375` | Body text |
| `--text-h` | `#08060d` | Headings |
| `--bg` | `#fff` | Page background |
| `--border` | `#e5e4e7` | Dividers |

Component styles use hard-coded hex values that match the brand purple (`#8F62D4`) rather than the token, indicating the design-token layer is partially adopted and can be unified in a future pass.

### Responsive Breakpoints

| Range | Behavior |
|---|---|
| `> 1100px` | Fixed-width layouts (hero absolute positioning, form 1040 px wide) |
| `901 – 1100px` | Booking form goes full-width; fields stack |
| `601 – 900px` | Tablet: hero goes flex side-by-side; clove card stays row |
| `≤ 600px` | Mobile: hero uses absolute overlap at smaller sizes; all form fields stack; clove card goes column |

---

## APIs Used

| Section | API | Endpoint |
|---|---|---|
| FAQ | JSONPlaceholder | `https://jsonplaceholder.typicode.com/posts?_limit=5` |
| Why Whistle | DummyJSON | `https://dummyjson.com/products?limit=4` |

Both endpoints are called inside `useEffect` with `useState`-managed `loading`, `error`, and data states. Errors are surfaced as user-friendly messages rather than blank screens.

---

## Approach

The page is built as a flat composition of single-responsibility functional components — each section owns its own markup, styles, and (where needed) data-fetching logic with no shared global state. Styling uses a single plain-CSS file (`App.css`) sectioned by component, keeping the design tokens (brand purple `#8F62D4`, card background `#F0F9FF`) consistent throughout. Responsive behaviour is handled with four explicit breakpoints (≤600 px, 601–900 px, 901–1100 px, >1100 px) covering stacked mobile layouts, a two-column tablet view, and the full desktop grid.

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server → http://localhost:5173
npm run dev

# 3. Lint
npm run lint

# 4. Production build → dist/
npm run build

# 5. Preview production build locally
npm run preview
```

> **Node requirement:** Node 18 or later recommended (Vite 6 / React 19).

---

