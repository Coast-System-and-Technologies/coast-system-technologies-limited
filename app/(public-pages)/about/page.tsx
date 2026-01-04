// app/(public-pages)/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
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

const PAGE_URL = `${BASE_URL}/about`;
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
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "About CSTL" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Coast System & Technologies Limited",
    description:
      "The governance and shared services layer behind the Coast Group—built for order, strategic control, and continuity.",
    images: [OG_IMAGE],
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
];

const WHAT_WE_DO = [
  "Group-level governance and structuring for Coast operating companies",
  "Shared services: compliance, documentation systems, and operating standards",
  "Registry and IP coordination: CAC, trademarks, and records continuity",
  "Data governance and privacy discipline (Nigeria-focused practice)",
  "Operational systems: process design, checklists, workflows, and controls",
];

const WHY_EXIST = [
  "To create a structure behind great companies—so execution is consistent and scalable.",
  "To protect strategic continuity: decision rights, documentation, and ownership clarity.",
  "To centralize shared services so operating companies can move faster without chaos.",
];

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
];

function HeroHeading({
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
        id="about-title"
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

export default function AboutPage() {
  const jsonLd = {
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
    identifier: {
      "@type": "PropertyValue",
      name: "RC Number",
      value: SITE.trust.rc,
    },
    sameAs: [SITE.socials.facebook],
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
  }

  return (
    <main aria-labelledby="about-title">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section
        aria-labelledby="about-title"
        className="relative overflow-hidden border-b border-border"
      >
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <HeroHeading
            kicker="About"
            title="The structure behind great companies."
            description="Coast System & Technologies Limited (CSTL) is the governance and shared services layer behind the Coast Group—built to create order, strategic control, and continuity."
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
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              <span className="font-medium text-[color:var(--primary)]">
                {SITE.signature}
              </span>
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* WHY CSTL */}
      <section aria-labelledby="why" className="cstl-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Why CSTL exists
            </p>
            <h2
              id="why"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Holding-layer governance that keeps execution aligned
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Coast System & Technologies Limited (CSTL) is the group-level layer that creates structure across operations:
              governance, shared services, documentation discipline, and continuity.
              The operating companies execute. CSTL keeps the system coherent.
            </p>

            <ul className="mt-6 space-y-2" role="list">
              {WHY_EXIST.map((x) => (
                <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link href="/companies">Explore Our Companies</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/services" className="text-[color:var(--primary)]">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5" aria-label="What Coast System & Technologies Limited does">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                What CSTL does
              </p>
              <ul className="mt-4 space-y-3" role="list">
                {WHAT_WE_DO.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <span
                      className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]"
                      aria-hidden="true"
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <p className="text-xs text-muted-foreground leading-relaxed">
                RC: {SITE.trust.rc} • Governance layer • Shared services
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PILLARS */}
      <section aria-labelledby="pillars" className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Brand pillars
            </p>
            <h2
              id="pillars"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              {SITE.signature}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              These aren’t slogans. They’re the operating principles behind how we build systems and protect continuity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section aria-labelledby="how" className="cstl-container py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            How we work
          </p>
          <h2
            id="how"
            className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
          >
            Structure you can run on
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We design for adoption: clear artifacts, disciplined workflow, and traceable continuity.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK.map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
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
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="border-t border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
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
        </div>
      </section>

      {/* Disclaimer */}
      <div className="cstl-container py-10">
        <MicroDisclaimer />
      </div>
    </main>
  );
}
