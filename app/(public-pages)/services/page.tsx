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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

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
  },
  {
    title: "Scope & Controls",
    description:
      "We define deliverables, owners, timelines, checkpoints, and documentation standards.",
  },
  {
    title: "Execution",
    description:
      "We deliver with discipline—clean handoffs, traceable decisions, and stable rollout.",
  },
  {
    title: "Continuity",
    description:
      "We support ongoing stability: routines, updates, and shared-services alignment when needed.",
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
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
          <Icon className="h-5 w-5 text-[color:var(--primary)]" />
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-[color:var(--accent)] transition">
          View →
        </span>
      </div>

      <div className="mt-4 font-heading text-xl text-[color:var(--primary)]">
        {title}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
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

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Services"
            title="Governance-led services built for real operations"
            description="CSTL provides the structure, systems, and documentation standards that make execution consistent—across companies, teams, and time."
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
              RC: {SITE.trust.rc}
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="bg-[color:var(--primary)] text-white hover:opacity-90"
          >
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
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Operating rhythm
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              A disciplined workflow—built for clarity
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Structured delivery is part of the product. We reduce ambiguity,
              increase traceability, and enforce clean handoffs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">
                    Step {i + 1}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                </div>
                <div className="mt-3 font-heading text-lg text-[color:var(--primary)]">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE TEASER + CTA */}
      <section className="cstl-container py-14 sm:py-16">
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
                Whether you need a one-off filing, a compliance workflow, or a
                governance system, we’ll guide you through a disciplined start so
                execution stays clean.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-[color:var(--primary)] text-white hover:opacity-90"
              >
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/start">Start a Project</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-xs text-muted-foreground">
            {SITE.signature}
          </div>
        </div>
      </section>
    </main>
  );
}
