// app/(public-pages)/companies/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Cpu,
  Landmark,
  Network,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";

import Reveal, { RevealItem } from "@/components/motion/reveal";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

const PAGE_PATH = "/companies";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/assets/og/our-companies.webp`;

export const metadata: Metadata = {
  title: "Our Companies | Coast System & Technologies Limited",
  description:
    "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
  keywords: [
    "Coast Group companies",
    "Coast System and Technologies Limited",
    "CSTL",
    "Coast Research Technology",
    "CRT",
    "CoastLink24",
    "CISL",
    "software engineering Nigeria",
    "fintech infrastructure Nigeria",
    "lending APIs",
    "repayment workflows",
    "solar installation Nigeria",
    "CCTV installation Nigeria",
    "networking",
    "procurement",
    "shared services",
    "governance",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Our Companies | Coast System & Technologies Limited",
    description:
      "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Our Companies | Coast System & Technologies Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Companies | Coast System & Technologies Limited",
    description:
      "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
    images: [OG_IMAGE],
  },
};

type Company = {
  id: "crt" | "coastlink24" | "cisl";
  name: string;
  href: string;
  icon: any;
  tags: string[];
  description: string;
  bullets: string[];
  siteUrl?: string;
  logoUrl?: string;
};

const COMPANIES: readonly Company[] = [
  {
    id: "crt",
    name: "Coast Research Technology (CRT)",
    href: "/companies/coast-research-technology",
    icon: Cpu,
    tags: ["Software engineering", "Product delivery", "App maintenance", "Tech training"],
    description:
      "Coast Research Technology build real-world software products and systems—and provide ongoing application support for stability and continuity. We also run structured tech training led by industry-expert instructors.",
    bullets: ["Build & ship products", "Maintain & support systems", "Tech training"],
    siteUrl: "https://www.coastresearchtechnology.com",
    logoUrl: "https://www.coastresearchtechnology.com/assets/crt_logo.webp",
  },
  {
    id: "coastlink24",
    name: "CoastLink24 Intelligent Systems Limited",
    href: "/companies/coastlink24",
    icon: Landmark,
    tags: [
      "Fintech infrastructure",
      "Lending APIs",
      "Payment workflows",
      "Risk controls",
      "Financial analysis",
      "Financial reporting",
    ],
    description:
      "Fintech Infrastructure for lenders and operators—mandates, repayment workflows, automation, and integrations. We also deliver intelligent financial analysis and reporting services.",
    bullets: [
      "Asset lending infrastructure",
      "Repayment automation",
      "Integrations & risk controls",
      "Financial analysis",
      "Financial reporting",
    ],
    siteUrl: "https://www.coastlink24.com.ng",
  },
  {
    id: "cisl",
    name: "Coast Infrastructure Systems Limited (CISL)",
    href: "/companies/coast-infrastructure-systems",
    icon: Network,
    tags: ["Infrastructure systems", "CCTV & networking", "Solar", "Procurement"],
    description:
      "Coast Infrastructure Systems Limited deliver infrastructure systems and facilities that power operations—installation, configuration, and reliable execution on-ground.",
    bullets: ["Solar + power systems", "CCTV + networking", "Procurement & deployment"],
  },
] as const;

/** ---------- JSON-LD helpers (consistent IDs) ---------- */
const normalizeUrl = (u: string) => u.trim().replace(/\/+$/, "");

const companyPageUrl = (c: Company) => `${BASE_URL}${c.href}`;
const companyWebPageId = (c: Company) => `${companyPageUrl(c)}#webpage`;

const companyOrgId = (c: Company) =>
  c.siteUrl ? `${normalizeUrl(c.siteUrl)}/#organization` : `${companyPageUrl(c)}#organization`;

const COMPANY_ORG_NODES = COMPANIES.map((c) => {
  const orgUrl = c.siteUrl ? normalizeUrl(c.siteUrl) : companyPageUrl(c);

  return {
    "@type": "Organization",
    "@id": companyOrgId(c),
    name: c.name,
    url: orgUrl,
    description: c.description,
    knowsAbout: c.tags,
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
    ...(c.logoUrl
      ? {
          logo: {
            "@type": "ImageObject",
            "@id": `${orgUrl}/#logo`,
            url: c.logoUrl,
          },
        }
      : {}),
  };
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: `${BASE_URL}/`,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-NG",
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.name,
      alternateName: SITE.shortName,
      url: `${BASE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/assets/logo.png`,
      },
      email: SITE.contact.email,
      telephone: SITE.contact.phoneTel,
      identifier: {
        "@type": "PropertyValue",
        name: "RC Number",
        value: SITE.trust.rc,
      },
      sameAs: SITE.socials.facebook ? [SITE.socials.facebook] : undefined,
      subOrganization: COMPANIES.map((c) => ({ "@id": companyOrgId(c) })),
    },
    ...COMPANY_ORG_NODES,
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: `Our Companies | ${SITE.name}`,
      description:
        "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumbs` },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-NG",
      mainEntity: {
        "@type": "ItemList",
        name: "Coast Group operating companies",
        numberOfItems: COMPANIES.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: COMPANIES.map((c, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "WebPage",
            "@id": companyWebPageId(c),
            url: companyPageUrl(c),
            name: c.name,
            isPartOf: { "@id": `${BASE_URL}/#website` },
            about: { "@id": companyOrgId(c) },
          },
        })),
      },
      hasPart: COMPANIES.map((c) => ({ "@id": companyWebPageId(c) })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Companies", item: PAGE_URL },
      ],
    },
  ],
};

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </p>
      ) : null}

      <h1
        id="companies-title"
        className="mt-2 font-heading text-3xl sm:text-4xl text-[color:var(--primary)]"
      >
        {title}
      </h1>

      {description ? (
        <p id="companies-lead" className="mt-3 text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CompanyCard({
  id,
  name,
  href,
  icon: Icon,
  tags,
  description,
  bullets,
  index,
}: (typeof COMPANIES)[number] & { index: number }) {
  const titleId = `company-${id}-title`;
  const descId = `company-${id}-desc`;
  const bulletsId = `company-${id}-bullets`;
  const tagsId = `company-${id}-tags`;

  return (
    <li className="h-full" role="listitem">
      <Reveal delay={0.04 + index * 0.08} y={10} duration={0.5}>
        <Link
          href={href}
          className={[
            // layout (unchanged)
            "group block h-full rounded-2xl border border-border bg-card p-6",
            // premium hover micro-effect (no reflow)
            "relative overflow-hidden",
            "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out",
            "hover:-translate-y-0.5 hover:shadow-sm hover:border-[color:var(--accent)]/35",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "motion-reduce:transform-none motion-reduce:transition-none",
            // overlay glow (opacity-only)
            "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
            "before:bg-[radial-gradient(70%_60%_at_50%_0%,rgba(201,162,39,0.12),transparent_65%)]",
            "before:opacity-0 before:transition-opacity before:duration-300",
            "group-hover:before:opacity-100",
          ].join(" ")}
          aria-labelledby={titleId}
          aria-describedby={`${descId} ${bulletsId}`}
        >
          <article className="h-full" aria-label={name}>
            <div className="flex items-start justify-between gap-4">
              <div
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background",
                  "transition-colors duration-300",
                  "group-hover:border-[color:var(--accent)]/35",
                ].join(" ")}
                aria-hidden="true"
              >
                <Icon
                  className={[
                    "h-5 w-5 text-[color:var(--primary)]",
                    "transition-transform duration-300",
                    "group-hover:scale-[1.04]",
                    "motion-reduce:transform-none",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </div>

              <span
                className={[
                  "text-xs text-muted-foreground transition duration-300",
                  "group-hover:text-[color:var(--accent)]",
                ].join(" ")}
              >
                <span className="sr-only">View </span>
                View{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none"
                >
                  →
                </span>
              </span>
            </div>

            <h2
              id={titleId}
              className="mt-4 font-heading text-xl text-[color:var(--primary)]"
            >
              {name}
            </h2>

            <ul
              id={tagsId}
              className="mt-2 flex flex-wrap gap-2"
              aria-label="Company focus areas"
              role="list"
            >
              {tags.map((t) => (
                <li
                  key={t}
                  className={[
                    "rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground",
                    "transition-colors duration-300",
                    "group-hover:border-[color:var(--accent)]/30",
                  ].join(" ")}
                  role="listitem"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p id={descId} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>

            <ul
              id={bulletsId}
              className="mt-4 space-y-2"
              aria-label="Key capabilities"
              role="list"
            >
              {bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 text-[color:var(--accent)]"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </Link>
      </Reveal>
    </li>
  );
}

const WHY_CSTL = [
  {
    title: "Governance",
    description:
      "Clear decision rights, oversight, and continuity systems that keep the group aligned.",
  },
  {
    title: "Shared Services",
    description:
      "Centralized operations for consistency: compliance, documentation, standards, and execution discipline.",
  },
  {
    title: "Speed with Control",
    description:
      "Operating companies move faster because structure reduces ambiguity and rework.",
  },
] as const;

export default function CompaniesPage() {
  return (
    <main aria-labelledby="companies-title" role="main">
      <JsonLd data={jsonLd} />

      <a
        href="#companies-grid"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to company list
      </a>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <div className="relative cstl-container py-16 sm:py-20">
          <Reveal variant="fade" duration={0.3} y={6}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol
                className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
                role="list"
              >
                <li role="listitem">
                  <Link
                    href="/"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">
                  /
                </li>
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  Companies
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.5}>
            <SectionHeading
              kicker="Our Companies"
              title="The operating companies within the Coast Group—built to execute, scale, and endure."
              description="Coast System & Technologies Limited (CSTL) provides group-level governance, structure, and shared services across the Coast operating companies—so each company can move faster while staying aligned."
            />
          </Reveal>

          <Reveal delay={0.12} y={10} duration={0.5}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" aria-describedby="companies-lead">
              <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                <Link href="/start">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/contact">Contact CSTL</Link>
              </Button>

              <div
                className="sm:ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
                aria-label={`Company registration number: ${SITE.trust.rc}`}
              >
                <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                <span>RC: {SITE.trust.rc}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} variant="fade" duration={0.28}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* COMPANIES PROFILE */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="companies-grid-title">
        <h2 id="companies-grid-title" className="sr-only">
          Company profiles
        </h2>

        <ul
          id="companies-grid"
          className="grid gap-4 lg:grid-cols-3"
          aria-label="Coast Group companies"
          role="list"
        >
          {COMPANIES.map((c, idx) => (
            <CompanyCard key={c.id} {...c} index={idx} />
          ))}
        </ul>
      </section>

      {/* CSTL ROLE IN THE GROUP */}
      <section className="border-y border-border bg-card/40" aria-labelledby="cstl-role-title">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <Reveal variant="fade" duration={0.28} y={6}>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                CSTL’s role in the group
              </p>
            </Reveal>

            <Reveal delay={0.04} y={10} duration={0.5}>
              <h2
                id="cstl-role-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Governance + shared services that keep the group aligned
              </h2>
            </Reveal>

            <Reveal delay={0.08} y={10} duration={0.5}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The operating companies execute in their domains. CSTL provides the
                structure behind them—so standards stay consistent, compliance stays
                traceable, and continuity is protected.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3" role="list" aria-label="CSTL operating model">
            {WHY_CSTL.map((x, idx) => (
              <RevealItem key={x.title} delay={0.06 + idx * 0.08} y={10} duration={0.5}>
                <div className="rounded-2xl border border-border bg-card p-6" role="listitem">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background"
                    aria-hidden="true"
                  >
                    <Building2 className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {x.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="companies-cta-title">
        <Reveal y={10} duration={0.55}>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Start here
                </p>
                <h2
                  id="companies-cta-title"
                  className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
                >
                  Tell us what you’re building—and we’ll route it to the right team.
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  If your work spans multiple domains, CSTL coordinates delivery and keeps governance clean.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start">Start a Project</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact CSTL</Link>
                </Button>
              </div>
            </div>

            <Separator className="my-8" aria-hidden="true" />

            <p className="text-xs text-muted-foreground">{SITE.signature}</p>
          </div>
        </Reveal>
      </section>

      {/* DISCLAIMER */}
      <footer className="cstl-container py-10" role="contentinfo" aria-label="Legal and informational notice">
        <Reveal variant="fade" duration={0.25}>
          <MicroDisclaimer />
        </Reveal>
      </footer>
    </main>
  );
}
