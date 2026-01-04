# CSTL Website — Project Structure

This document describes the folder structure and responsibilities for the CSTL public website frontend.

---

## Directory Tree

```txt
cstl-website/
├── app/                                  # Next.js App Router (root)
│   ├── globals.css                       # Tailwind + shadcn tokens + CSTL theme
│   ├── layout.tsx                        # Root layout (fonts, providers)
│   ├── page.tsx                          # Root home route (optional if you use route groups only)
│   ├── (public-pages)/                   # Public site route group (NOT in URL)
│   │   ├── layout.tsx                    # Public layout (Navbar + Footer)
│   │   ├── page.tsx                      # Home (/)
│   │   ├── about/
│   │   │   └── page.tsx                  # /about
│   │   ├── services/
│   │   │   ├── page.tsx                  # /services (overview)
│   │   │   ├── governance-structuring/
│   │   │   │   └── page.tsx              # /services/governance-structuring
│   │   │   ├── legaltech-compliance-systems/
│   │   │   │   └── page.tsx              # /services/legaltech-compliance-systems
│   │   │   ├── data-protection-privacy/
│   │   │   │   └── page.tsx              # /services/data-protection-privacy
│   │   │   ├── trademark-ip/
│   │   │   │   └── page.tsx              # /services/trademark-ip
│   │   │   └── cac-registry/
│   │   │       └── page.tsx              # /services/cac-registry
│   │   ├── companies/
│   │   │   ├── page.tsx                  # /companies (overview)
│   │   │   ├── coast-research-technology/
│   │   │   │   └── page.tsx              # /companies/coast-research-technology
│   │   │   ├── coastlink24/
│   │   │   │   └── page.tsx              # /companies/coastlink24
│   │   │   └── coast-infrastructure-systems/
│   │   │       └── page.tsx              # /companies/coast-infrastructure-systems
│   │   ├── packages/
│   │   │   └── page.tsx                  # /packages
│   │   ├── results/
│   │   │   └── page.tsx                  # /results
│   │   ├── insights/
│   │   │   ├── page.tsx                  # /insights (hub)
│   │   │   ├── founders-corner/
│   │   │   │   ├── page.tsx              # /insights/founders-corner (index)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx          # /insights/founders-corner/:slug
│   │   │   ├── articles/
│   │   │   │   ├── page.tsx              # /insights/articles (index)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx          # /insights/articles/:slug
│   │   │   └── faqs/
│   │   │       └── page.tsx              # /insights/faqs
│   │   ├── start/
│   │   │   ├── page.tsx                  # /start
│   │   │   └── start-project-form.tsx    # start form component (local route file)
│   │   ├── contact/
│   │   │   └── page.tsx                  # /contact
│   │   ├── privacy/
│   │   │   └── page.tsx                  # /privacy
│   │   ├── terms/
│   │   │   └── page.tsx                  # /terms
│   │   └── cookies/
│   │       └── page.tsx                  # /cookies
├── components/                           # Reusable UI components
│   ├── layout/
│   │   ├── navbar.tsx                    # Navbar (desktop + mobile)
│   │   └── footer.tsx                    # Footer (links + RC + contacts)
│   ├── forms/
│   │   ├── contact-form.tsx              # Contact form (frontend-only / later API)
│   │   └── start-project-form.tsx        # Optional shared form (if extracted later)
│   └── ui/                               # shadcn/ui components (auto-generated)
├── content/                              # Centralized site content configs
│   ├── site.ts                           # Brand constants (signature, contacts, RC)
│   ├── nav.ts                            # Menu + footer links
│   └── insights/                         # Insight content (recommended)
│       ├── founders-corner.ts            # Founder's Corner posts (metadata + content refs)
│       └── articles.ts                   # Articles posts (metadata + content refs)
├── lib/                                  # Helpers (formatters, SEO utilities, etc.)
│   ├── site-url.ts                       # BASE_URL helper
│   └── utils.ts
├── public/                               # Static assets (favicons, images, OG images)
│   ├── favicon.ico
│   ├── assets/
│   │   ├────brand/
|   |   |    └──logos/                      # Main logo (and variants)
|   |   |       ├──cstl-logo.png                      # Main logo (and variants)
|   |   |       └──cstl-logo-dark.png                      # Main logo (and variants)
│   │   ├────icons/
│   │   └────images/
|   |        ├──home/
|   |        ├──about/
|   |        ├──services/
|   |        ├──packages/
|   |        └──insights/
|   |
│   └── og/                               # (optional) social share images
├── docs/                                 # Documentation
│   └── PROJECT_STRUCTURE.md              # This file
├── next.config.js                        # Next.js config
├── package.json                          # Dependencies + scripts
├── tailwind.config.ts                    # Tailwind config
├── tsconfig.json                         # TypeScript config
├── .env.local                            # Enviroment variable
└── README.md                             # Project documentation
