// app/(public-pages)/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Layers3,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

import Reveal, { RevealItem } from "@/components/motion/reveal";

const PAGE_PATH = "/about";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/assets/og/about.webp`; // safe fallback (already exists)

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Coast System & Technologies Limited (CSTL) is the governance and shared services layer behind the Coast Group—built for order, strategic control, and continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "About Us | Coast System & Technologies Limited",
    description:
      "The governance and shared services layer behind the Coast Group—built for order, strategic control, and continuity.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "About CSTL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Coast System & Technologies Limited",
    description:
      "The governance and shared services layer behind the Coast Group—built for order, strategic control, and continuity.",
    images: [OG_IMAGE],
  },
  keywords: [
    "Coast System & Technologies Limited",
    "CSTL",
    "governance layer",
    "shared services",
    "holding company",
    "corporate structuring",
    "CAC registry support",
    "trademark and IP coordination",
    "documentation systems",
    "operating standards",
    "Nigeria",
    "Order Strategy Legacy",
  ],
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
};

const PILLARS = [
  {
    title: "Order",
    description:
      "We build structure: clear workflows, disciplined documentation, and repeatable operating systems.",
    icon: Workflow,
  },
  {
    title: "Strategy",
    description:
      "We align decisions, reduce ambiguity, and keep execution focused on what compounds.",
    icon: Layers3,
  },
  {
    title: "Legacy",
    description:
      "We protect continuity: IP custody, governance, compliance discipline, and long-term durability.",
    icon: ShieldCheck,
  },
] as const;

const WHAT_WE_DO = [
  "Group-level governance and structuring for Coast operating companies",
  "Shared services: compliance, documentation systems, and operating standards",
  "Registry and IP coordination: CAC, trademarks, and records continuity",
  "Data governance and privacy discipline (Nigeria-focused practice)",
  "Operational systems: process design, checklists, workflows, and controls",
] as const;

const WHY_EXIST = [
  "To create a structure behind great companies—so execution is consistent and scalable.",
  "To protect strategic continuity: decision rights, documentation, and ownership clarity.",
  "To centralize shared services so operating companies can move faster without chaos.",
] as const;

const HOW_WE_WORK = [
  {
    title: "Clarity first",
    description:
      "We start by mapping the reality—structures, workflows, decision rights, and risks.",
  },
  {
    title: "Systems, not slogans",
    description:
      "We turn principles into operating artifacts: templates, checklists, registers, and SOPs.",
  },
  {
    title: "Traceable by design",
    description:
      "We keep records clean so decisions, filings, and ownership remain verifiable over time.",
  },
  {
    title: "Continuity as default",
    description:
      "We design for the future: onboarding, handoffs, maintenance, and renewal routines.",
  },
] as const;

function HeroHeading({
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
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </p>
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

export default function AboutPage() {
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
        image: { "@id": `${BASE_URL}/#logo` },
        email: SITE.contact.email,
        telephone: SITE.contact.phoneTel,
        identifier: SITE?.trust?.rc
          ? { "@type": "PropertyValue", name: "RC Number", value: SITE.trust.rc }
          : undefined,
        sameAs: SITE?.socials?.facebook ? [SITE.socials.facebook] : undefined,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "business inquiries",
            email: SITE.contact.email,
            telephone: SITE.contact.phoneTel,
            areaServed: "NG",
            availableLanguage: ["en"],
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "About Us | Coast System & Technologies Limited",
        description:
          "Coast System & Technologies Limited (CSTL) is the governance and shared services layer behind the Coast Group—built for order, strategic control, and continuity.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-NG",
        keywords:
          "CSTL, Coast System & Technologies, governance, shared services, structuring, compliance, operating standards, Nigeria",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main id="main-content" aria-labelledby="about-title">
      <JsonLd data={jsonLd} />

      {/* Skip link */}
      <a
        href="#why"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to page content
      </a>

      {/* HERO */}
      <section
        aria-labelledby="about-title"
        className="relative overflow-hidden border-b border-border"
      >
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <div className="relative cstl-container py-16 sm:py-20">
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
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  About
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.55}>
            <HeroHeading
              kicker="About"
              title="The structure behind great companies."
              titleId="about-title"
              description="Coast System & Technologies Limited (CSTL) is the governance and shared services layer behind the Coast Group—built to create order, strategic control, and continuity."
            />
          </Reveal>

          <Reveal delay={0.12} y={10} duration={0.55}>
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
                <span className="font-medium text-[color:var(--primary)]">
                  {SITE.signature}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} variant="fade" duration={0.25}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* WHY CSTL */}
      <section aria-labelledby="why" className="cstl-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal variant="fade" duration={0.25} y={6}>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Why CSTL exists
              </p>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.55}>
              <h2
                id="why"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Holding-layer governance that keeps execution aligned
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.55}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Coast System & Technologies Limited (CSTL) is the group-level layer that creates structure across operations:
                governance, shared services, documentation discipline, and continuity.
                The operating companies execute. CSTL keeps the system coherent.
              </p>
            </Reveal>

            <Reveal delay={0.14} y={10} duration={0.55}>
              <ul className="mt-6 space-y-2" role="list" aria-label="Why CSTL exists list">
                {WHY_EXIST.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} y={10} duration={0.55}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Explore links">
                <Button asChild variant="outline">
                  <Link href="/companies">Explore Our Companies</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/services" className="text-[color:var(--primary)]">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5" aria-label="What Coast System & Technologies Limited does">
            <Reveal y={10} duration={0.55}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  What CSTL does
                </p>

                <ul className="mt-4 space-y-3" role="list" aria-label="What CSTL does list">
                  {WHAT_WE_DO.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {SITE?.trust?.rc ? <>RC: {SITE.trust.rc} • </> : null}
                  Governance layer • Shared services
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* PILLARS */}
      <section aria-labelledby="pillars" className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <Reveal variant="fade" duration={0.25} y={6}>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Brand pillars
              </p>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.55}>
              <h2
                id="pillars"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                {SITE.signature}
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.55}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                These aren’t slogans. They’re the operating principles behind how we build systems and protect continuity.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3" role="list" aria-label="Brand pillars">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <RevealItem key={p.title} delay={0.06 + idx * 0.08} y={10} duration={0.55}>
                  <PremiumCard>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </PremiumCard>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section aria-labelledby="how" className="cstl-container py-14 sm:py-16">
        <div className="max-w-2xl">
          <Reveal variant="fade" duration={0.25} y={6}>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              How we work
            </p>
          </Reveal>

          <Reveal delay={0.05} y={10} duration={0.55}>
            <h2
              id="how"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Structure you can run on
            </h2>
          </Reveal>

          <Reveal delay={0.1} y={10} duration={0.55}>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We design for adoption: clear artifacts, disciplined workflow, and traceable continuity.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" role="list" aria-label="How we work principles">
          {HOW_WE_WORK.map((x, idx) => (
            <RevealItem key={x.title} delay={0.06 + idx * 0.08} y={10} duration={0.55}>
              <PremiumCard>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Principle
                  </p>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-heading text-lg text-[color:var(--primary)]">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {x.description}
                </p>
              </PremiumCard>
            </RevealItem>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="border-t border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <Reveal y={10} duration={0.55}>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Start here
                  </p>

                  <h2
                    id="cta"
                    className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
                  >
                    Tell us what you need—and we’ll structure the path forward.
                  </h2>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Begin with a short intake. We’ll route your request and propose a clear next step.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label="CTA buttons">
                  <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
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
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="cstl-container py-10">
        <MicroDisclaimer />
      </div>
    </main>
  );
}
