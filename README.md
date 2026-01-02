# Coast System & Technologies Limited (CSTL) — Official Website (Frontend)

Public-facing website for **Coast System & Technologies Limited**.

**Brand signature:** ORDER • STRATEGY • LEGACY  
**Positioning line:** The Structure Behind Great Companies.

---

## Tech Stack

- **Next.js (App Router) + TypeScript**
- **TailwindCSS**
- **shadcn/ui** (Radix UI)
- Icons: **lucide-react**
- Fonts (Next.js Google Fonts):
  - Headings: **Cormorant Garamond**
  - Body/UI: **Manrope**

---

## Brand Theme Tokens (Core Palette)

- Primary: `#1e1b4b`
- Accent gold (seal lines/icons): `#C9A227`
- Background: `#F7F7F2`
- Border grey: `#E5E7EB`

These are implemented as shadcn CSS tokens in `app/globals.css`.

---

## Getting Started

### 1) Install dependencies

```bash
npm install
````

### 2) Run dev server

```bash
npm run dev
```

Open: `http://localhost:3000`

### 3) Build for production

```bash
npm run build
npm run start
```

---

## Tailwind Animations (Important)

This project imports `tw-animate-css` in `app/globals.css`. If you see:

> Can't resolve 'tw-animate-css'

Install it:

```bash
npm i -D tw-animate-css
```

---

## shadcn/ui Setup

Initialize shadcn (once per repo):

```bash
npx shadcn@latest init
```

Add required components:

```bash
npx shadcn@latest add button navigation-menu sheet separator accordion
```

> shadcn components live in `components/ui`.

---

## Routing Notes

We use Next.js **Route Groups**:

* Public pages live in: `app/(public-pages)/...`

Because the folder is wrapped in parentheses, it **does not appear in the URL**.

Example:

* `app/(public-pages)/about/page.tsx` → `/about`

---

## Navigation + Site Config

We keep reusable site constants and navigation structure centralized:

* `content/site.ts` → brand name, signature, contact, RC number, socials
* `content/nav.ts` → menu + footer links

This prevents duplication across Navbar/Footer/SEO and keeps changes controlled.

---

## Page Coverage

Core routes included:

* `/` (Home)
* `/about`
* `/services` + pillar pages
* `/companies` + company pages
* `/packages`
* `/results`
* `/insights` + `/insights/founders-corner` + `/insights/articles` + `/insights/faqs`
* `/start`
* `/contact`
* `/privacy` `/terms` `/cookies`

---

## UI/UX Principles (CSTL Vibe)

* Executive, minimal, premium
* Strong typography hierarchy (Cormorant headings)
* Warm paper background (`#F7F7F2`) across the site
* White cards for clarity and “document” feel
* Subtle grid + glow effects (order + systems), never flashy

---

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

© Coast System & Technologies Limited. All rights reserved.

```

