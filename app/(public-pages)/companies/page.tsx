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

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

const PAGE_URL = `${BASE_URL}/companies`;
const OG_IMAGE = `${BASE_URL}/assets/og/our-companies.webp`; // safe fallback (already exists)

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Our Companies | Coast System & Technologies Limited",
    description:
      "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Our Companies | Coast System and Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Companies | Coast System and Technologies Limited",
    description:
      "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
    images: [OG_IMAGE],
  },
};

const COMPANIES = [
  {
    name: "Coast Research Technology (CRT)",
    href: "/companies/coast-research-technology",
    icon: Cpu,
    tags: ["Software engineering", "Product delivery", "App maintenance", "Talent development"],
    description:
      "We build real-world software products and systems—and provide ongoing application support for stability and continuity. We also train and mentor interns to become software engineers.",
    bullets: ["Build & ship products", "Maintain & support systems", "Training & internships"],
  },
  {
    name: "CoastLink24 Integrated Systems Limited",
    href: "/companies/coastlink24",
    icon: Landmark,
    tags: ["Fintech infrastructure", "Lending APIs", "Payment workflows", "Risk controls", "Intelligent financial analysis", "Intelligent financial reporting"],
    description:
      "Infrastructure for lenders and operators—mandates, repayment workflows, automation, and integrations. We also provide intelligent financial analysis and reporting services.",
    bullets: ["Asset lending infrastructure", "Repayment automation", "Integrations & risk controls", "Intelligent financial analysis", "Intelligent financial reporting"],
  },
  {
    name: "Coast Infrastructure Systems Limited",
    href: "/companies/coast-infrastructure-systems",
    icon: Network,
    tags: ["Infrastructure systems", "CCTV & networking", "Solar", "Procurement"],
    description:
      "We deliver infrastructure systems that power operations—installation, configuration, and reliable execution on-ground.",
    bullets: ["Solar + power systems", "CCTV + networking", "Procurement & deployment"],
  },
];

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
];

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
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CompanyCard({
  name,
  href,
  icon: Icon,
  tags,
  description,
  bullets,
}: (typeof COMPANIES)[number]) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`View ${name}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
          <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-[color:var(--accent)] transition">
          View <span aria-hidden="true">→</span>
        </span>
      </div>

      <h2 className="mt-4 font-heading text-xl text-[color:var(--primary)]">
        {name}
      </h2>

      <div className="mt-2 flex flex-wrap gap-2" aria-label="Company tags">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      <ul className="mt-4 space-y-2" role="list" aria-label="Key capabilities">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default function CompaniesPage() {
  const companyOrgNodes = COMPANIES.map((c) => ({
    "@type": "Organization",
    "@id": `${BASE_URL}${c.href}#organization`,
    name: c.name,
    url: `${BASE_URL}${c.href}`,
    description: c.description,
    // helps search engines understand what they do
    knowsAbout: c.tags,
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
  }));

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
        sameAs: [SITE.socials.facebook],

        // ✅ declares the group companies under CSTL
        subOrganization: COMPANIES.map((c) => ({
          "@id": `${BASE_URL}${c.href}#organization`,
        })),
      },

      ...companyOrgNodes,

      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Our Companies | ${SITE.name}`,
        description:
          "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        breadcrumb: { "@id": `${PAGE_URL}/#breadcrumbs` },

        mainEntity: {
          "@type": "ItemList",
          itemListElement: COMPANIES.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "WebPage",
              "@id": `${BASE_URL}${c.href}#webpage`,
              url: `${BASE_URL}${c.href}`,
              name: c.name,
              about: { "@id": `${BASE_URL}${c.href}#organization` },
              isPartOf: { "@id": `${BASE_URL}/#website` },
            },
          })),
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Companies", item: PAGE_URL },
        ],
      },
    ],
  };


  return (
    <main aria-labelledby="companies-title">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Our Companies"
            title="The operating companies within the Coast Group—built to execute, scale, and endure."
            description="Coast System & Technologies Limited (CSTL) provides group-level governance, structure, and shared services across the Coast operating companies—so each company can move faster while staying aligned."
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-[color:var(--primary)] text-white hover:opacity-90"
            >
              <Link href="/start">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact CSTL</Link>
            </Button>

            <div className="sm:ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
              <span>RC: {SITE.trust.rc}</span>
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* COMPANIES GRID */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="companies-grid">
        <h2 id="companies-grid" className="sr-only">
          Company profiles
        </h2>

        <div className="grid gap-4 lg:grid-cols-3" role="list">
          {COMPANIES.map((c) => (
            <div key={c.href} role="listitem">
              <CompanyCard {...c} />
            </div>
          ))}
        </div>
      </section>

      {/* CSTL ROLE */}
      <section className="border-y border-border bg-card/40" aria-labelledby="cstl-role">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              CSTL’s role in the group
            </p>
            <h2
              id="cstl-role"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Governance + shared services that keep the group aligned
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The operating companies execute in their domains. CSTL provides the
              structure behind them—so standards stay consistent, compliance stays
              traceable, and continuity is protected.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {WHY_CSTL.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                  <Building2 className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {x.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="companies-cta">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Start here
              </p>
              <h2
                id="companies-cta"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Tell us what you’re building—and we’ll route it to the right team.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                If your work spans multiple domains, CSTL coordinates delivery and keeps governance clean.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-[color:var(--primary)] text-white hover:opacity-90"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact CSTL</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <p className="text-xs text-muted-foreground">{SITE.signature}</p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="cstl-container py-10">
        <MicroDisclaimer />
      </div>
    </main>
  );
}
