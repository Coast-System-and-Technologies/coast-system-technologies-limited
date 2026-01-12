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
  FileText,
  Settings,
  Play,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import Reveal, { RevealItem } from "@/components/motion/reveal";
import Image from "next/image";

const PAGE_URL = `${BASE_URL}/`;
const OG_IMAGE = `${BASE_URL}/assets/og/home.webp`;
const HERO_IMAGE = "/assets/hero/hero-panel.webp";

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

// Pillar image mapping (placeholder - can be replaced with actual images)
const PILLAR_IMAGES: Record<string, string> = {
  "Governance & Structuring": "/assets/hero/hero-panel.webp", // Placeholder - replace with actual image
  "LegalTech & Compliance Systems": "/assets/hero/hero-panel.webp",
  "Data Protection & Privacy": "/assets/hero/hero-panel.webp",
  "Trademark & IP": "/assets/hero/hero-panel.webp",
  "CAC Registry": "/assets/hero/hero-panel.webp",
};

const PILLARS = [
  {
    title: "Governance & Structuring",
    href: "/services/governance-structuring",
    icon: Layers3,
    category: "SERVICE ONE",
    description:
      "Group structure, internal discipline, and continuity frameworks that keep execution aligned.",
  },
  {
    title: "LegalTech & Compliance Systems",
    href: "/services/legaltech-compliance-systems",
    icon: Workflow,
    category: "SERVICE TWO",
    description:
      "Operational workflows, audit trails, and compliance tooling that makes governance measurable.",
  },
  {
    title: "Data Protection & Privacy",
    href: "/services/data-protection-privacy",
    icon: ShieldCheck,
    category: "SERVICE THREE",
    description: "Nigeria-focused privacy and data governance practice built for real operations.",
  },
  {
    title: "Trademark & IP",
    href: "/services/trademark-ip",
    icon: Sparkles,
    category: "SERVICE FOUR",
    description:
      "Brand protection and IP discipline—so what you build stays protected as you scale.",
  },
  {
    title: "CAC Registry",
    href: "/services/cac-registry",
    icon: Building2,
    category: "SERVICE FIVE",
    description:
      "Registrations, filings, and compliance coordination with clean documentation standards.",
  },
] as const;

const COMPANIES = [
  {
    title: "Coast Research Technology",
    href: "/companies/coast-research-technology",
    subtitle: "Software engineering • Product delivery • Maintenance • Talent development",
    logoSrc: "/assets/companies/crt-mark.svg",
  },
  {
    title: "CoastLink24",
    href: "/companies/coastlink24",
    subtitle: "Fintech infrastructure • Integrated lending systems • Financial analysis",
    logoSrc: "/assets/companies/coastLink24-mark.svg",
  },
  {
    title: "Coast Infrastructure Systems",
    href: "/companies/coast-infrastructure-systems",
    subtitle: "Infrastructure systems • Power • Connectivity • Procurement",
    logoSrc: "/assets/companies/coast-Infastructure-mark.svg",
  },
] as const;

const STEPS = [
  {
    title: "Intake",
    description:
      "You submit a clear request. We classify the work, define constraints, and align on outcomes.",
    icon: FileText,
  },
  {
    title: "Scope & Controls",
    description:
      "We create a structured scope: deliverables, owners, timelines, checkpoints, and documentation standards.",
    icon: Settings,
  },
  {
    title: "Execution",
    description:
      "We deliver with operational discipline—clean handoffs, traceable decisions, and stable rollout.",
    icon: Play,
  },
  {
    title: "Continuity",
    description:
      "We keep systems maintained: governance routines, updates, and shared-services support when needed.",
    icon: RefreshCw,
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
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{kicker}</p>
      ) : null}
      <h2 id={id} className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-[color:var(--primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
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

        {/* Right-side background image panel (desktop only) */}
        <div className="absolute right-0 top-0 hidden h-full w-[30%] overflow-hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
          </div>
        </div>

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

            <Reveal className="lg:col-span-5 relative z-10" delay={0.12}>
              {/* Right panel: Executive card */}
              <aside className="lg:col-span-5" aria-label="CSTL operating focus">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  {/* Mobile/Tablet hero media inside the card */}
                  <div className="relative aspect-[4/3] w-full lg:hidden">
                    <Image
                      src={HERO_IMAGE}
                      alt=""
                      fill
                      className="object-cover"
                      priority
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
                  </div>

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
      <section aria-labelledby="pillars-title" className="relative overflow-hidden cstl-container py-20 sm:py-24 md:py-28">
        {/* Subtle background decorative pattern */}
        <div className="absolute inset-0 cstl-grid opacity-5" aria-hidden="true" />
        
        <div className="relative">
          <Reveal variant="fade" duration={0.32}>
          <SectionHeading
            id="pillars-title"
            kicker="What we do"
            title="Governance-led services built for real operations"
            description="We don’t just advise. We build the structure, systems, and documentation standards that make execution consistent."
          />
        </Reveal>

        <ul role="list" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            const imageSrc = PILLAR_IMAGES[p.title] || "/assets/hero/hero-panel.webp";
            return (
              <RevealItem key={p.href} delay={0.04 + idx * 0.06} y={10} duration={0.45} className="h-full">
                <Link
                  href={p.href}
                  className={[
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl",
                    "bg-[color:var(--card)] shadow-md",
                    "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                    "hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--accent)]/10",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "motion-reduce:transform-none motion-reduce:transition-none",
                  ].join(" ")}
                  aria-label={`Open service: ${p.title}`}
                >
                  {/* Top Image Panel */}
                  <div className="relative aspect-[16/10] w-full bg-[color:var(--muted)]">
                    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                      <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        aria-hidden="true"
                        priority={idx < 3}
                      />
                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--card)]/10" />
                    </div>
                    
                    {/* Floating Circular Badge */}
                    <div className={[
                      "absolute bottom-4 right-5 z-10",
                      "flex h-14 w-14 items-center justify-center rounded-full",
                      "bg-[color:var(--accent)] shadow-lg border-2 border-[color:var(--card)]",
                      "transition-all duration-300",
                      "group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[color:var(--accent)]/40",
                    ].join(" ")}>
                      <Icon className={[
                        "h-6 w-6 text-[color:var(--primary-foreground)]",
                        "transition-all duration-300",
                        "group-hover:drop-shadow-[0_0_6px_color-mix(in_oklab,var(--accent)_70%,transparent)]",
                      ].join(" ")} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Bottom Info Panel */}
                  <div className="relative flex flex-1 flex-col rounded-b-2xl bg-[color:var(--card)] p-6 pt-10">
                    {/* Category Label */}
                    <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--accent)] mb-2">
                      {(p as typeof PILLARS[number] & { category: string }).category}
                    </p>
                    
                    {/* Title */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[color:var(--primary)] transition-colors duration-300 group-hover:text-[color:var(--primary)]/95">
                      {p.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed transition-opacity duration-300 group-hover:opacity-90 line-clamp-3">
                      {p.description}
                    </p>
                    
                    {/* Read More Button */}
                    <div className="mt-6">
                      <span className={[
                        "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium",
                        "bg-[color:var(--accent)]/10 text-[color:var(--accent)]",
                        "transition-all duration-300",
                        "group-hover:bg-[color:var(--accent)]/20 group-hover:translate-x-1",
                      ].join(" ")}>
                        Read More
                        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </ul>

        <Reveal delay={0.06} y={6} variant="fade-up" duration={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta" className="sm:min-w-[160px]">
              <Link href="/start">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" className="sm:min-w-[180px]">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </Reveal>
        </div>
      </section>



      {/* COMPANIES */}
      <section aria-labelledby="companies-title" className="relative overflow-hidden border-y border-border bg-card/50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 cstl-grid opacity-10" aria-hidden="true" />
        
        <div className="relative cstl-container py-20 sm:py-24 md:py-28">
          <Reveal variant="fade" duration={0.32}>
            <SectionHeading
              id="companies-title"
              kicker="Coast Group"
              title="Operating companies built to deliver"
              description="Coast System & Technologies Limited provides the governance layer. The operating companies execute across software, fintech infrastructure, and physical systems."
            />
          </Reveal>

          <ul role="list" className="mt-12 grid gap-6 lg:grid-cols-3">
            {COMPANIES.map((c, idx) => (
              <RevealItem key={c.href} delay={0.04 + idx * 0.07} y={10} duration={0.45} className="h-full">
                <Link
                  href={c.href}
                  className={[
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8",
                    "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                    "hover:-translate-y-1 hover:shadow-lg hover:shadow-[color:var(--accent)]/5 hover:border-[color:var(--accent)]/40",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "motion-reduce:transform-none motion-reduce:transition-none",
                    // Premium glow overlay
                    "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
                    "before:bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_65%)]",
                    "before:opacity-0 before:transition-opacity before:duration-300",
                    "group-hover:before:opacity-100",
                  ].join(" ")}
                  aria-label={`View company profile: ${c.title}`}
                >
                  {/* Company logo watermark - enhanced */}
                  <div className="pointer-events-none absolute bottom-0 right-0 z-0">
                    <div className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-56 lg:w-56">
                      <Image
                        src={c.logoSrc}
                        alt=""
                        fill
                        className="object-contain opacity-[0.04] blur-[0.5px] transition-all duration-300 group-hover:opacity-[0.08] group-hover:blur-[0.3px]"
                        aria-hidden="true"
                        priority={false}
                      />
                      {/* Enhanced fade gradient overlay */}
                      <div
                        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                        style={{
                          background:
                            "radial-gradient(ellipse at top left, color-mix(in oklab, var(--card) 100%, transparent) 0%, color-mix(in oklab, var(--card) 70%, transparent) 35%, transparent 65%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content layer */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3 className="font-heading text-xl sm:text-2xl text-[color:var(--primary)] transition-colors duration-300 group-hover:text-[color:var(--primary)]/95">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed transition-opacity duration-300 group-hover:opacity-90">
                      {c.subtitle}
                    </p>
                  </div>
                  
                  {/* Enhanced seal line with hover effect */}
                  <div className="relative z-10 mt-8 h-px w-full cstl-seal-line opacity-40 transition-all duration-300 group-hover:opacity-80 group-hover:h-[1.5px]" />
                  
                  <p className={[
                    "relative z-10 mt-5 text-sm font-medium text-[color:var(--primary)]",
                    "transition-all duration-300",
                    "group-hover:text-[color:var(--accent)] group-hover:translate-x-1",
                  ].join(" ")}>
                    View profile <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </p>
                </Link>
              </RevealItem>
            ))}
          </ul>

          <Reveal delay={0.06} variant="fade-up" y={6} duration={0.4}>
            <div className="mt-12">
              <Button asChild variant="outline" className="min-w-[180px]">
                <Link href="/companies">View All Companies</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>



      {/* HOW WE WORK */}
      <section aria-labelledby="workflow-title" className="border-y border-border bg-card/40">
        <div className="cstl-container py-20 sm:py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Heading */}
            <Reveal variant="fade" duration={0.32}>
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest text-[color:var(--accent)] uppercase">
                  Operating rhythm
                </p>
                <h2 id="workflow-title" className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-[color:var(--primary)]">
                  A disciplined workflow—built for clarity
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Structured delivery is the product. We build systems that remain stable even as teams change.
                </p>
              </div>
            </Reveal>

            {/* Right Column - Timeline */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60" aria-hidden="true" />
              
              <ol className="relative space-y-8">
                {STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <RevealItem
                      key={s.title}
                      delay={0.05 + idx * 0.08}
                      y={10}
                      duration={0.45}
                      className="relative"
                    >
                      <div className="flex items-start gap-6">
                        {/* Icon Badge */}
                        <div className={[
                          "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                          "bg-card border border-border/50 shadow-sm",
                          "transition-all duration-300",
                        ].join(" ")}>
                          <Icon className="h-6 w-6 text-[color:var(--primary)]" aria-hidden="true" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h3 className="font-heading text-lg sm:text-xl font-semibold text-[color:var(--primary)]">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                      </div>
                    </RevealItem>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>



      {/* FINAL CTA */}
      <section aria-labelledby="cta-title" className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg opacity-70" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-20 sm:py-24 md:py-28">
          <Reveal y={10} duration={0.5}>
            <div className={[
              "group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-sm",
              "p-10 sm:p-12 md:p-14",
              "transition-all duration-300",
              "hover:border-[color:var(--accent)]/40 hover:shadow-xl hover:shadow-[color:var(--accent)]/5",
              // Subtle glow on hover
              "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
              "before:bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_70%)]",
              "before:opacity-0 before:transition-opacity before:duration-300",
              "group-hover:before:opacity-100",
            ].join(" ")}>
              <div className="relative z-10 max-w-2xl">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Ready when you are
                </p>
                <h2 id="cta-title" className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-[color:var(--primary)]">
                  Bring the vision. We’ll bring the structure.
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  If you’re building something serious—systems, governance, or filings—start with a clean intake so we can deliver with discipline from day one.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta" size="lg" className="sm:min-w-[180px]">
                    <Link href="/start">Start a Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="sm:min-w-[160px]">
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                </div>
              </div>
              
              {/* Decorative seal line */}
              <div className="absolute bottom-0 left-0 right-0 h-px cstl-seal-line opacity-50" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="fade" duration={0.32}>
            <p className="mt-8 text-xs font-medium tracking-wider text-muted-foreground text-center">
              {SITE.signature}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <Reveal as="div" className="cstl-container py-10" variant="fade" duration={0.32}>
        <MicroDisclaimer />
      </Reveal>



    </main>
  );
}
