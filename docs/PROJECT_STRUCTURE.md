# CSTL Website — Project Structure

This document describes the folder structure and responsibilities for the CSTL public website frontend.

---

## Directory Tree

```txt
coast-system-technologies-limited/
├── app/                                  # Next.js App Router (root)
│   ├── globals.css                       # Tailwind + shadcn tokens + CSTL theme
│   ├── layout.tsx                        # Root layout (fonts, providers)
│   └── (public-pages)/                   # Public site route group (NOT in URL)
│       ├── layout.tsx                    # Public layout (Navbar + Footer)
│       ├── page.tsx                      # Home (/)
│       ├── about/
│       │   └── page.tsx                  # /about
│       ├── services/
│       │   ├── page.tsx                  # /services
│       │   ├── governance-structuring/
│       │   │   └── page.tsx              # /services/governance-structuring
│       │   ├── legaltech-compliance-systems/
│       │   │   └── page.tsx              # /services/legaltech-compliance-systems
│       │   ├── data-protection-privacy/
│       │   │   └── page.tsx              # /services/data-protection-privacy
│       │   ├── trademark-ip/
│       │   │   └── page.tsx              # /services/trademark-ip
│       │   └── cac-registry/
│       │       └── page.tsx              # /services/cac-registry
│       ├── companies/
│       │   ├── page.tsx                  # /companies
│       │   ├── coast-research-technology/
│       │   │   └── page.tsx              # /companies/coast-research-technology
│       │   ├── coastlink24/
│       │   │   └── page.tsx              # /companies/coastlink24
│       │   └── coast-infrastructure-systems/
│       │       └── page.tsx              # /companies/coast-infrastructure-systems
│       ├── packages/
│       │   └── page.tsx                  # /packages
│       ├── results/
│       │   └── page.tsx                  # /results
│       ├── insights/
│       │   ├── page.tsx                  # /insights
│       │   ├── founders-corner/
│       │   │   └── page.tsx              # /insights/founders-corner
│       │   ├── articles/
│       │   │   └── page.tsx              # /insights/articles
│       │   └── faqs/
│       │       └── page.tsx              # /insights/faqs
│       ├── start/
│       │   └── page.tsx                  # /start
│       ├── contact/
│       │   └── page.tsx                  # /contact
│       ├── privacy/
│       │   └── page.tsx                  # /privacy
│       ├── terms/
│       │   └── page.tsx                  # /terms
│       └── cookies/
│           └── page.tsx                  # /cookies
├── components/                           # Reusable UI components
│   ├── layout/
│   │   ├── navbar.tsx                    # Navbar (desktop + mobile)
│   │   └── footer.tsx                    # Footer (links + RC + contacts)
│   └── ui/                               # shadcn/ui components (auto-generated)
├── content/                              # Centralized site content configs
│   ├── site.ts                           # Brand constants (signature, contacts, RC)
│   └── nav.ts                            # Menu + footer link config
├── lib/                                  # Helpers (formatters, SEO utilities, etc.)
│   └── utils.ts
├── public/                               # Static assets (favicons, images, OG images)
│   ├── favicon.ico
│   └── og/                               # (optional) social share images
├── docs/                                 # Documentation
│   └── PROJECT_STRUCTURE.md              # This file
├── next.config.js                        # Next.js config
├── package.json                          # Dependencies + scripts
├── tailwind.config.ts                    # Tailwind config
├── tsconfig.json                         # TypeScript config
├── .env.local                            # Enviroment variable
└── README.md                             # Project documentation
