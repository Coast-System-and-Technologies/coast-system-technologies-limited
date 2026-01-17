import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Workflow,
  Scale,
  Building2,
  CheckCircle2,
  FileText,
  Settings,
  Play,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";
import Reveal, { RevealItem } from "@/components/motion/reveal";
import Image from "next/image";

// Service image mapping (matching homepage)
const SERVICE_IMAGES: Record<string, string> = {
  "Governance & Structuring": "/assets/home/what-we-do/governance-structuring.webp",
  "LegalTech & Compliance Systems": "/assets/home/what-we-do/legaltech-compliance.webp",
  "Data Protection & Privacy": "/assets/home/what-we-do/data-protection-privacy.webp",
  "Trademark & IP": "/assets/home/what-we-do/trademark-ip.webp",
  "CAC Registry": "/assets/home/what-we-do/cac-registry.webp",
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CSTL’s governance-led services: structuring, compliance systems, privacy, IP protection, and CAC registry coordination.",
};

const SERVICES = [
  {
    title: "Governance & Structuring",
    href: "/services/governance-structuring",
    icon: Layers3,
    description:
      "We design the structure that keeps your company aligned—roles, oversight, decision rights, and operating rhythm.",
    bullets: ["Group structure & oversight", "Operational discipline & roles", "Founder continuity frameworks"],
  },
  {
    title: "LegalTech & Compliance Systems",
    href: "/services/legaltech-compliance-systems",
    icon: Workflow,
    description:
      "We build compliance workflows and audit-ready systems that make governance measurable—not memory-based.",
    bullets: ["Approval trails & audit logs", "Policy + SOP systems", "Internal compliance operations"],
  },
  {
    title: "Data Protection & Privacy",
    href: "/services/data-protection-privacy",
    icon: ShieldCheck,
    description:
      "Nigeria-focused privacy and data governance practice built for real business operations and risk control.",
    bullets: ["Privacy audit workflow", "Policies & registers", "Operational controls + training"],
  },
  {
    title: "Trademark & IP",
    href: "/services/trademark-ip",
    icon: Scale,
    description:
      "We help coordinate trademark filing and IP discipline—so what you build stays protected as you scale.",
    bullets: ["Trademark filing coordination", "IP asset discipline", "Brand protection routines"],
  },
  {
    title: "CAC Registry",
    href: "/services/cac-registry",
    icon: Building2,
    description:
      "Structured CAC registration and filing coordination with clean documentation standards and verification clarity.",
    bullets: ["Company registrations", "Post-incorporation filings", "Compliance coordination packs"],
  },
];

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
      "We define deliverables, owners, timelines, checkpoints, and documentation standards.",
    icon: Settings,
  },
  {
    title: "Execution",
    description:
      "We deliver with discipline—clean handoffs, traceable decisions, and stable rollout.",
    icon: Play,
  },
  {
    title: "Continuity",
    description:
      "We support ongoing stability: routines, updates, and shared-services alignment when needed.",
    icon: RefreshCw,
  },
] as const;

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
        <div className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </div>
      ) : null}
      <h1 className="mt-2 font-heading text-3xl sm:text-4xl text-[color:var(--primary)]">
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

function ServiceCard({
  title,
  href,
  description,
  bullets,
  icon: Icon,
}: (typeof SERVICES)[number]) {
  const imageSrc = SERVICE_IMAGES[title] || "/assets/hero/hero-panel.webp";
  
  return (
    <Link
      href={href}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-2xl",
        "bg-[color:var(--card)] shadow-md",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--accent)]/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transform-none motion-reduce:transition-none",
      ].join(" ")}
      aria-label={`Open service: ${title}`}
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
        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[color:var(--primary)] transition-colors duration-300 group-hover:text-[color:var(--primary)]/95">
          {title}
        </h3>
        
        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed transition-opacity duration-300 group-hover:opacity-90">
          {description}
        </p>
        
        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-muted-foreground">
              <CheckCircle2
                className={[
                  "mt-0.5 h-4 w-4 text-[color:var(--accent)] shrink-0",
                  "transition-opacity duration-300",
                  "group-hover:opacity-90",
                ].join(" ")}
              />
              <span className="transition-opacity duration-300 group-hover:opacity-95">
                {b}
              </span>
            </li>
          ))}
        </ul>
        
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
  );
}


export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />
        
        {/* Deep burgundy/wine background panel with premium gradient overlay - top-right, ~30% width on large screens only */}
        <div 
          className="hidden lg:block absolute top-0 right-0 h-full w-[30%] pointer-events-none" 
          aria-hidden="true"
        >
          {/* Base burgundy background */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(400px circle at 60% 80%, rgba(90, 42, 58, 0.4), transparent 55%),
                linear-gradient(to bottom, rgba(90, 42, 58, 0.15), rgba(90, 42, 58, 0.08) 50%, transparent 100%),
                linear-gradient(to right, transparent 0%, rgba(90, 42, 58, 0.95) 20%, rgba(90, 42, 58, 0.98) 100%)
              `,
            }}
          />
          
          {/* Light mode: subtle blue accent */}
          <div 
            className="absolute inset-0 dark:hidden"
            style={{
              background: `radial-gradient(600px circle at 80% 20%, rgba(30, 27, 75, 0.10), transparent 60%)`,
            }}
          />
          
          {/* Dark mode: gold accent */}
          <div 
            className="absolute inset-0 hidden dark:block"
            style={{
              background: `radial-gradient(600px circle at 80% 20%, rgba(201, 162, 39, 0.25), transparent 60%)`,
            }}
          />
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
            }}
          />
        </div>

        <div className="relative cstl-container py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <Reveal variant="fade" duration={0.35} y={6}>
                <SectionHeading
                  kicker="Services"
                  title="Governance-led services built for real operations"
                  description="CSTL provides the structure, systems, and documentation standards that make execution consistent—across companies, teams, and time."
                />
              </Reveal>

              <Reveal delay={0.08} y={8} duration={0.45}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="cta">
                    <Link href="/start">
                      Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <Link href="/contact">Contact CSTL</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.1} y={8} duration={0.45}>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  RC: {SITE.trust.rc}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Image */}
            <div className="relative lg:col-span-5">
              <Reveal delay={0.12} variant="fade" duration={0.5}>
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/assets/services/hero/services-hero.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.12} variant="fade" duration={0.35}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="cstl-container py-14 sm:py-16">
        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => (
            <RevealItem
              key={s.href}
              delay={0.04 + idx * 0.06}
              y={10}
              duration={0.45}
              className="h-full"
            >
              <ServiceCard {...s} />
            </RevealItem>
          ))}
        </ul>

        <Reveal delay={0.08} y={6} duration={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta">
              <Link href="/start">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/companies" className="text-[color:var(--primary)]">
                Explore Our Companies
              </Link>
            </Button>
          </div>
        </Reveal>
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
                  Structured delivery is part of the product. We reduce ambiguity, increase traceability,
                  and enforce clean handoffs.
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

      {/* PACKAGE TEASER + CTA */}
      <section className="cstl-container py-14 sm:py-16">
        <Reveal y={10} duration={0.5}>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Engagement
                </div>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                  Choose a package—or start with a structured intake
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Whether you need a one-off filing, a compliance workflow, or a governance system,
                  we’ll guide you through a disciplined start so execution stays clean.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta">
                  <Link href="/packages">View Packages</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/start">Start a Project</Link>
                </Button>
              </div>
            </div>

            <Reveal delay={0.08} variant="fade" duration={0.35}>
              <Separator className="my-8" />
            </Reveal>

            <Reveal delay={0.12} variant="fade" duration={0.35}>
              <div className="text-xs text-muted-foreground">{SITE.signature}</div>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </main>
  );
}


