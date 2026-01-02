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
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "Explore the Coast Group operating companies—software engineering, fintech infrastructure, and infrastructure systems—supported by CSTL’s governance and shared services.",
};

const COMPANIES = [
  {
    name: "Coast Research Technology (CRT)",
    href: "/companies/coast-research-technology",
    icon: Cpu,
    tags: ["Software engineering", "Product delivery", "App maintenance", "Talent development"],
    description:
      "We build real-world software products and systems—and provide ongoing application support for stability and continuity.",
    bullets: ["Build & ship products", "Maintain & support systems", "Training & internships"],
  },
  {
    name: "CoastLink24 Integrated Systems",
    href: "/companies/coastlink24",
    icon: Landmark,
    tags: ["Fintech infrastructure", "Lending APIs", "Payment workflows", "Risk controls"],
    description:
      "Infrastructure for lenders and operators—mandates, repayment workflows, automation, and integrations.",
    bullets: ["Asset lending infrastructure", "Repayment automation", "Integrations & risk controls"],
  },
  {
    name: "Coast Infrastructure Systems Limited (CISL)",
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
        {name}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
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

export default function CompaniesPage() {
  return (
    <main>
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
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              RC: {SITE.trust.rc}
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* COMPANIES GRID */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {COMPANIES.map((c) => (
            <CompanyCard key={c.href} {...c} />
          ))}
        </div>
      </section>

      {/* CSTL ROLE */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              CSTL’s role in the group
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
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
                  <Building2 className="h-5 w-5 text-[color:var(--primary)]" />
                </div>
                <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                  {x.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {x.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Start here
              </div>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Tell us what you’re building—and we’ll route it to the right team.
              </h3>
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

          <div className="text-xs text-muted-foreground">{SITE.signature}</div>
        </div>
      </section>
    </main>
  );
}
