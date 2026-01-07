// app/(public-pages)/companies/coastlink24/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Shield,
  Cable,
  Gauge,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import JsonLd from "@/components/insights/JsonLd";

import Reveal, { RevealItem } from "@/components/motion/reveal";

const PAGE_PATH = "/companies/coastlink24";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

const OG_IMAGE = `${BASE_URL}/assets/og/companies-coastlink24.jpg`;

// ✅ Normalize (no trailing slash)
const COASTLINK_SITE_URL = "https://www.coastlink24.com.ng";
const COASTLINK_ORG_ID = `${COASTLINK_SITE_URL}/#organization`;

// ✅ Only keep logo if it is publicly reachable on CoastLink24 domain.
// Put the file in CoastLink24 site: /public/assets/logo.png  → /assets/logo.png
const COASTLINK_LOGO_URL = `${COASTLINK_SITE_URL}/assets/logo.png`;

export const metadata: Metadata = {
  title: "CoastLink24 Intelligent Systems Limited",
  description:
    "Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "CoastLink24 Intelligent Systems Limited | Coast System & Technologies Limited",
    description:
      "Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "CoastLink24 — Fintech infrastructure under CSTL governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoastLink24 | CSTL",
    description:
      "Mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "CoastLink24",
    "fintech infrastructure",
    "fintech infrastructure Nigeria",
    "loan mandate systems",
    "lending infrastructure",
    "lending operations automation",
    "mandate collections",
    "collections orchestration",
    "repayment automation",
    "repayment workflows",
    "integrations",
    "risk controls",
    "audit trails",
    "Coast System and Technologies Limited",
    "CSTL",
  ],
};

const CAPABILITIES = [
  {
    title: "Mandates & Collections",
    description:
      "Salary and account mandate flows, collections orchestration, retries, and control handling.",
    icon: Workflow,
  },
  {
    title: "Repayment Workflows",
    description:
      "End-to-end repayment tracking, reconciliation, exceptions, and customer lifecycle controls.",
    icon: Gauge,
  },
  {
    title: "Integrations Layer",
    description:
      "Payment gateways, banks, identity tools, and third-party services—connected reliably and securely.",
    icon: Cable,
  },
  {
    title: "Risk & Control Systems",
    description:
      "Guardrails for lending operations: thresholds, approvals, audit trails, and rule enforcement.",
    icon: Shield,
  },
] as const;

const WHAT_WE_DO = [
  "Infrastructure for asset lending (API + backend services)",
  "Mandate setup + repayment automation flows",
  "Operational tools: dashboards, logs, and exception handling",
  "Secure integrations: banks, payment providers, verification tools",
  "Controls-first systems: traceability, approvals, and compliance readiness",
] as const;

const WHY_COASTLINK = [
  "Infrastructure mindset: we build the engine, not the marketing wrapper.",
  "Controls-first: traceability and guardrails baked into workflows.",
  "Reliability: retries, monitoring, and failure modes handled cleanly.",
  "Integration depth: practical experience across real payment/mandate ecosystems.",
] as const;

function SectionHeading({
  kicker,
  title,
  description,
  titleId,
}: {
  kicker?: string;
  title: string;
  description?: string;
  titleId: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </div>
      ) : null}

      <h1
        id={titleId}
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

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-sm hover:border-[color:var(--accent)]/35",
        "motion-reduce:transform-none motion-reduce:transition-none",
        "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
        "before:bg-[radial-gradient(70%_60%_at_50%_0%,rgba(201,162,39,0.12),transparent_65%)]",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function CoastLink24Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: `${BASE_URL}/`,
        inLanguage: "en-NG",
        publisher: { "@id": `${BASE_URL}/#organization` },
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
        email: SITE?.contact?.email,
        telephone: SITE?.contact?.phoneTel,
        identifier: SITE?.trust?.rc
          ? { "@type": "PropertyValue", name: "RC Number", value: SITE.trust.rc }
          : undefined,
        sameAs: SITE?.socials?.facebook ? [SITE.socials.facebook] : undefined,
      },
      {
        "@type": "Organization",
        "@id": COASTLINK_ORG_ID,
        name: "CoastLink24 Intelligent Systems Limited",
        alternateName: "CoastLink24",
        url: COASTLINK_SITE_URL,
        parentOrganization: { "@id": `${BASE_URL}/#organization` },
        description:
          "Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations.",
        areaServed: { "@type": "Country", name: "Nigeria" },

        ...(COASTLINK_LOGO_URL
          ? {
              logo: {
                "@type": "ImageObject",
                "@id": `${COASTLINK_SITE_URL}/#logo`,
                url: COASTLINK_LOGO_URL,
              },
            }
          : {}),

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${PAGE_URL}/#coastlink24-offers`,
          name: "CoastLink24 Capabilities",
          itemListElement: CAPABILITIES.map((c) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: c.title,
              description: c.description,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "CoastLink24 | Coast System & Technologies Limited",
        description:
          "Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        mainEntity: { "@id": COASTLINK_ORG_ID },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        inLanguage: "en-NG",
        keywords:
          "CoastLink24, fintech infrastructure, mandates, collections, repayment workflows, integrations, risk controls, audit trails, Nigeria",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Companies", item: `${BASE_URL}/companies` },
          { "@type": "ListItem", position: 3, name: "CoastLink24", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main id="main-content" aria-labelledby="coastlink24-title">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border" aria-labelledby="coastlink24-title">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <header className="relative cstl-container py-16 sm:py-20">
          <Reveal variant="fade" duration={0.28} y={6}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground" role="list">
                <li role="listitem">
                  <Link
                    href="/"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li role="listitem">
                  <Link
                    href="/companies"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Companies
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  CoastLink24
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.5}>
            <SectionHeading
              kicker="Operating Company"
              title="CoastLink24 Intelligent Systems Limited"
              titleId="coastlink24-title"
              description="Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, integrations, and controls built for disciplined lending operations."
            />
          </Reveal>

          <Reveal delay={0.12} y={10} duration={0.5}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Primary actions">
              <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                <Link href="/start" aria-label="Start a project with CSTL">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/contact" aria-label="Contact CSTL">
                  Contact CSTL
                </Link>
              </Button>

              <div className="sm:ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                Built under CSTL governance
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={10} duration={0.5}>
            <div
              className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 px-4 py-2 text-xs text-foreground/80"
              role="note"
              aria-label="Official CoastLink24 website"
            >
              <ExternalLink className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
              <span className="font-medium">Official CoastLink24 website:</span>
              <a
                href={COASTLINK_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline underline-offset-4"
                aria-label="Visit CoastLink24 website (opens in a new tab)"
              >
                www.coastlink24.com.ng{" "}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} variant="fade" duration={0.25}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
          </Reveal>
        </header>
      </section>

      {/* SUMMARY */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="coastlink24-summary-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal variant="fade" duration={0.25} y={6}>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                What CoastLink24 does
              </div>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.5}>
              <h2
                id="coastlink24-summary-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                The operating engine behind lending
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.5}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                CoastLink24 is the Coast Group’s fintech infrastructure operator. We build the backend
                services that power lending operations—mandate setup, repayment automation, integrations,
                and controls that make systems reliable.
              </p>
            </Reveal>

            <Reveal delay={0.14} y={10} duration={0.5}>
              <ul className="mt-6 space-y-2" aria-label="Why teams choose CoastLink24" role="list">
                {WHY_COASTLINK.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} y={10} duration={0.5}>
              <nav className="mt-8 flex flex-col sm:flex-row gap-3" aria-label="Related navigation">
                <Button asChild variant="outline">
                  <Link href="/services" aria-label="Explore CSTL services">
                    Explore CSTL Services
                  </Link>
                </Button>

                <Button asChild variant="ghost">
                  <Link
                    href="/companies"
                    className="text-[color:var(--primary)]"
                    aria-label="Back to companies page"
                  >
                    Back to Companies
                  </Link>
                </Button>
              </nav>
            </Reveal>
          </div>

          <aside className="lg:col-span-5" aria-label="CoastLink24 overview">
            <Reveal y={10} duration={0.55}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                    <Landmark className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-heading text-lg text-[color:var(--primary)]">
                      CoastLink24 at a glance
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mandates • Repayments • Integrations • Controls
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Core work
                </div>

                <ul className="mt-4 space-y-3" aria-label="Core work areas" role="list">
                  {WHAT_WE_DO.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <div
                  className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-4"
                  role="note"
                  aria-label="Official CoastLink24 website callout"
                >
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">
                    Official website
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    For product updates and official information directly from CoastLink24.
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full border-[color:var(--accent)]/35 bg-background hover:bg-[color:var(--accent)]/10"
                  >
                    <a
                      href={COASTLINK_SITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit CoastLink24 website (opens in a new tab)"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Visit CoastLink24 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>

                  <div className="mt-2 text-[11px] text-muted-foreground">Opens in a new tab.</div>
                </div>

                <Separator className="my-6" />

                <div className="text-xs text-muted-foreground leading-relaxed">
                  Fintech infrastructure-led execution under CSTL’s governance and shared services.
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-border bg-card/40" aria-labelledby="coastlink24-capabilities-title">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <Reveal variant="fade" duration={0.25} y={6}>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Capabilities
              </div>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.5}>
              <h2
                id="coastlink24-capabilities-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Infrastructure built for real operations
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.5}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                CoastLink24 designs lending infrastructure with control points, reliability patterns, and traceability baked in.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="CoastLink24 capabilities">
            {CAPABILITIES.map((c, idx) => {
              const Icon = c.icon;
              return (
                <RevealItem key={c.title} delay={0.06 + idx * 0.08} y={10} duration={0.5}>
                  <PremiumCard>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                    </div>
                    <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                      {c.title}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
                  </PremiumCard>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="coastlink24-cta-title">
        <Reveal y={10} duration={0.55}>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Start with a clean intake
                </div>

                <h2
                  id="coastlink24-cta-title"
                  className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
                >
                  Build lending infrastructure with control—and reliability.
                </h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Tell us what you’re building. CSTL coordinates the engagement and routes execution to CoastLink24 where appropriate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start" aria-label="Start a project with CSTL">
                    Start a Project
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact" aria-label="Contact CSTL">
                    Contact CSTL
                  </Link>
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="text-xs text-muted-foreground">{SITE.signature}</div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
