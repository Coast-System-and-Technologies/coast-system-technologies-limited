// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Layers3,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import Reveal, { RevealItem } from "@/components/motion/reveal";

const PAGE_URL = `${BASE_URL}/`;
const OG_IMAGE = `${BASE_URL}/assets/og/home.webp`;

export const metadata: Metadata = {
  title: "Home | Coast System and Technologies Limited (CSTL) — The Structure Behind Great Companies",
  description:
    "ORDER • STRATEGY • LEGACY. Governance-led shared services across structuring, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution—built for clarity, control, and continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Coast System and Technologies Limited (CSTL)",
    description:
      "Governance-led shared services and operational discipline—so companies execute faster while staying aligned.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CSTL — Order • Strategy • Legacy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coast System and Technologies Limited (CSTL)",
    description:
      "Governance-led shared services and operational discipline—so companies execute faster while staying aligned.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PILLARS = [
  {
    title: "Governance & Structuring",
    href: "/services/governance-structuring",
    icon: Layers3,
    description:
      "Group structure, internal discipline, and continuity frameworks that keep execution aligned.",
  },
  {
    title: "LegalTech & Compliance Systems",
    href: "/services/legaltech-compliance-systems",
    icon: Workflow,
    description:
      "Operational workflows, audit trails, and compliance tooling that makes governance measurable.",
  },
  {
    title: "Data Protection & Privacy",
    href: "/services/data-protection-privacy",
    icon: ShieldCheck,
    description: "Nigeria-focused privacy and data governance practice built for real operations.",
  },
  {
    title: "Trademark & IP",
    href: "/services/trademark-ip",
    icon: Sparkles,
    description:
      "Brand protection and IP discipline—so what you build stays protected as you scale.",
  },
  {
    title: "CAC Registry",
    href: "/services/cac-registry",
    icon: Building2,
    description:
      "Registrations, filings, and compliance coordination with clean documentation standards.",
  },
] as const;

const COMPANIES = [
  {
    title: "Coast Research Technology",
    href: "/companies/coast-research-technology",
    subtitle: "Software engineering • Product delivery • Maintenance • Talent development",
  },
  {
    title: "CoastLink24",
    href: "/companies/coastlink24",
    subtitle: "Fintech infrastructure • Integrated lending systems • Financial analysis",
  },
  {
    title: "Coast Infrastructure Systems",
    href: "/companies/coast-infrastructure-systems",
    subtitle: "Infrastructure systems • Power • Connectivity • Procurement",
  },
] as const;

const STEPS = [
  {
    title: "Intake",
    description:
      "You submit a clear request. We classify the work, define constraints, and align on outcomes.",
  },
  {
    title: "Scope & Controls",
    description:
      "We create a structured scope: deliverables, owners, timelines, checkpoints, and documentation standards.",
  },
  {
    title: "Execution",
    description:
      "We deliver with operational discipline—clean handoffs, traceable decisions, and stable rollout.",
  },
  {
    title: "Continuity",
    description:
      "We keep systems maintained: governance routines, updates, and shared-services support when needed.",
  },
] as const;

function SectionHeading({
  kicker,
  title,
  description,
  id,
}: {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p className="text-xs tracking-widest text-muted-foreground uppercase">{kicker}</p>
      ) : null}
      <h2 id={id} className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: SITE.name,
      url: `${BASE_URL}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE.name,
      url: `${BASE_URL}/`,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` },
      email: SITE.contact.email,
      telephone: SITE.contact.phoneTel,
      sameAs: [SITE.socials.facebook],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: `${BASE_URL}/`,
      name: `${SITE.shortName} — ${SITE.positioningLine}`,
      description:
        "Governance-led shared services across structuring, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` }],
    },
  ];

  return (
    <main id="content">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg" />
        <div className="absolute inset-0 cstl-grid opacity-35" />

        <div className="relative cstl-container py-20 sm:py-24 md:py-28">
          {/* Signature pill */}
          <Reveal variant="fade" duration={0.35}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
              <span className="font-medium text-[color:var(--primary)]">{SITE.signature}</span>
              <span className="hidden sm:inline">Governance • Shared Services • Execution Support</span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <h1
                  id="hero-title"
                  className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.06] text-[color:var(--primary)]"
                >
                  The structure behind companies that execute, scale, and endure.
                </h1>
              </Reveal>

              <Reveal delay={0.12} y={8}>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {SITE.name} (CSTL) provides group-level governance, operational discipline, and shared
                  services—so operating companies move faster while staying aligned.
                </p>
              </Reveal>

              <Reveal delay={0.18} y={6}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="cta">

                    <Link href="/start" aria-label="Start a project with Coast System & Technologies Limited">
                      Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <Link href="/contact" aria-label="Contact us">
                      Contact CSTL
                    </Link>
                  </Button>

                  <Button asChild variant="ghost" className="sm:ml-2">
                    <Link
                      href="/companies"
                      className="text-[color:var(--primary)]"
                      aria-label="Explore CSTL operating companies"
                    >
                      Explore CSTL Companies
                    </Link>
                  </Button>
                </div>
              </Reveal>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                  <span>RC: {SITE.trust.rc}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  Documentation-first delivery
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  Governance-led systems
                </span>
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={0.12}>
              {/* Right panel: Executive card */}
              <aside className="lg:col-span-5" aria-label="CSTL operating focus">
                <div className="rounded-2xl border border-border bg-card shadow-sm">
                  <div className="p-6">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Operating Focus
                    </p>

                    <ul className="mt-3 space-y-3">
                      {[
                        {
                          title: "Order",
                          body: "Clear roles, clean documentation, and traceable decisions.",
                        },
                        {
                          title: "Strategy",
                          body: "Structures that keep products and teams aligned as complexity grows.",
                        },
                        {
                          title: "Legacy",
                          body: "Continuity frameworks that outlive individuals and preserve intent.",
                        },
                      ].map((x) => (
                        <li key={x.title} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="text-sm font-medium">{x.title}</p>
                            <p className="text-sm text-muted-foreground">{x.body}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 h-px w-full cstl-seal-line opacity-70" />

                    <div className="mt-6">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/services" aria-label="View CSTL services overview">
                          View Services Overview
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section aria-labelledby="pillars-title" className="cstl-container py-16 sm:py-20">
        {/* Optional: animate the heading as one block */}
        <Reveal variant="fade" duration={0.4}>
          <SectionHeading
            id="pillars-title"
            kicker="What we do"
            title="Governance-led services built for real operations"
            description="We don’t just advise. We build the structure, systems, and documentation standards that make execution consistent."
          />
        </Reveal>

        <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;

            return (
              <RevealItem
                key={p.href}
                // premium stagger: small, controlled
                delay={0.06 + idx * 0.08}
                y={8}
                duration={0.45}
              >
                <Link
                  href={p.href}
                  className="group block rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Open service: ${p.title}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-[color:var(--accent)] transition">
                      View <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </Link>
              </RevealItem>
            );
          })}
        </ul>

        {/* Optional: animate CTAs as one block */}
        <Reveal delay={0.08} y={6} duration={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta">
              <Link href="/start">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </Reveal>
      </section>


      {/* COMPANIES */}
      <section aria-labelledby="companies-title" className="border-y border-border bg-card/40">
        <div className="cstl-container py-16 sm:py-20">
          {/* Optional: animate the heading as one block */}
          <Reveal variant="fade" duration={0.4}>
            <SectionHeading
              id="companies-title"
              kicker="Coast Group"
              title="Operating companies built to deliver"
              description="Coast System & Technologies Limited provides the governance layer. The operating companies execute across software, fintech infrastructure, and physical systems."
            />
          </Reveal>

          <ul role="list" className="mt-10 grid gap-4 lg:grid-cols-3">
            {COMPANIES.map((c, idx) => (
              <RevealItem
                key={c.href}
                delay={0.06 + idx * 0.08}
                y={8}
                duration={0.45}
              >
                <Link
                  href={c.href}
                  className="block rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View company profile: ${c.title}`}
                >
                  <h3 className="font-heading text-xl text-[color:var(--primary)]">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.subtitle}</p>
                  <div className="mt-6 h-px w-full cstl-seal-line opacity-60" />
                  <p className="mt-4 text-sm text-[color:var(--primary)]">
                    View profile <span aria-hidden="true">→</span>
                  </p>
                </Link>
              </RevealItem>
            ))}
          </ul>

          {/* Optional: animate the CTA button block */}
          <Reveal delay={0.08} y={6} duration={0.4}>
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link href="/companies">View All Companies</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>


      {/* HOW WE WORK */}
      <section aria-labelledby="workflow-title" className="cstl-container py-16 sm:py-20">
        <Reveal variant="fade" duration={0.4}>
          <SectionHeading
            id="workflow-title"
            kicker="Operating rhythm"
            title="A disciplined workflow—built for clarity"
            description="Structured delivery is the product. We build systems that remain stable even as teams change."
          />
        </Reveal>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => (
            <RevealItem
              key={s.title}
              delay={0.06 + idx * 0.08}
              y={8}
              duration={0.45}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Step {idx + 1}
                </p>
                <span
                  className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-3 font-heading text-lg text-[color:var(--primary)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </RevealItem>
          ))}
        </ol>
      </section>


      {/* FINAL CTA */}
      <section aria-labelledby="cta-title" className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg opacity-70" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          {/* Card reveal */}
          <Reveal y={10} duration={0.5} variant="fadeBlur">
            <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-8 sm:p-10">
              <div className="max-w-2xl">
                {/* Optional: stagger inside (more premium) */}
                <Reveal variant="fade" duration={0.35}>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Ready when you are
                  </p>
                </Reveal>

                <Reveal delay={0.06} y={8} duration={0.45}>
                  <h2
                    id="cta-title"
                    className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
                  >
                    Bring the vision. We’ll bring the structure.
                  </h2>
                </Reveal>

                <Reveal delay={0.12} y={8} duration={0.45}>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    If you’re building something serious—systems, governance, or filings—start with a
                    clean intake so we can deliver with discipline from day one.
                  </p>
                </Reveal>

                <Reveal delay={0.18} y={6} duration={0.4}>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="cta">
                      <Link href="/start">Start a Project</Link>
                    </Button>

                    <Button asChild variant="outline">
                      <Link href="/contact">Talk to Us</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* Signature line reveal */}
          <Reveal delay={0.22} variant="fade" duration={0.35}>
            <p className="mt-6 text-xs text-muted-foreground">{SITE.signature}</p>
          </Reveal>
        </div>
      </section>


      {/* Disclaimer */}
      <div className="cstl-container py-10">
        <Reveal variant="fade" duration={0.5} y={6}>
          <MicroDisclaimer />
        </Reveal>
      </div>


    </main>
  );
}
