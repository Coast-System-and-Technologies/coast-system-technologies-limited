// app/(public-pages)/packages/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Workflow,
  Scale,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Choose a CSTL engagement package: advisory sessions, implementation sprints, or retained governance and compliance support.",
};

type PackageCard = {
  name: string;
  tagline: string;
  idealFor: string;
  includes: string[];
  ctaLabel: string;
};

const PACKAGES: PackageCard[] = [
  {
    name: "Advisory Session",
    tagline: "Fast clarity. Clean direction.",
    idealFor:
      "Founders and teams who need expert guidance, a decision path, or a structured next step.",
    includes: [
      "Scoped call with pre-read intake",
      "Problem framing + options",
      "Action plan + priority list",
      "Templates/checklists as needed",
      "Follow-up summary notes",
    ],
    ctaLabel: "Book an Advisory",
  },
  {
    name: "Implementation Sprint",
    tagline: "Build the system. Ship the structure.",
    idealFor:
      "Teams ready to implement: policies, workflows, documentation systems, or compliance operations.",
    includes: [
      "Kickoff + discovery mapping",
      "Deliverables pack (policies/registers/SOPs)",
      "Stage gates + QC checklists",
      "Ops handoff + training",
      "Final report + next steps",
    ],
    ctaLabel: "Start a Sprint",
  },
  {
    name: "Retained Governance",
    tagline: "Continuity, oversight, and control.",
    idealFor:
      "Organizations that want ongoing governance support: filings, IP discipline, privacy cadence, and documentation continuity.",
    includes: [
      "Monthly governance cadence + reviews",
      "Registry/filings coordination support",
      "IP and documentation continuity",
      "Risk logging + approvals discipline",
      "On-call advisory for key decisions",
    ],
    ctaLabel: "Request Retainer",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Order",
    description:
      "Clear processes, checklists, and operating artifacts your team can actually run.",
    icon: Workflow,
  },
  {
    title: "Strategy",
    description:
      "Decision paths, structure, and governance that reduce ambiguity and rework.",
    icon: Sparkles,
  },
  {
    title: "Legacy",
    description:
      "Continuity systems: traceable records, IP custody discipline, and long-term durability.",
    icon: Lock,
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

function PackageCardView(p: PackageCard) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-heading text-xl text-[color:var(--primary)]">
            {p.name}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{p.tagline}</div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
          <Scale className="h-4 w-4 text-[color:var(--accent)]" />
          Package
        </div>
      </div>

      <Separator className="my-5" />

      <div className="text-xs tracking-widest text-muted-foreground uppercase">
        Ideal for
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {p.idealFor}
      </p>

      <div className="mt-5 text-xs tracking-widest text-muted-foreground uppercase">
        Includes
      </div>
      <ul className="mt-3 space-y-2">
        {p.includes.map((x) => (
          <li key={x} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          asChild
          className="w-full bg-[color:var(--primary)] text-white hover:opacity-90"
        >
          <Link href="/start">
            {p.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Packages"
            title="Choose a structured engagement."
            description="CSTL packages are designed for clarity, disciplined execution, and continuity—so you get order, strategy, and legacy in practice."
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
              {SITE.signature}
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <PackageCardView key={p.name} {...p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <div className="text-xs tracking-widest text-muted-foreground uppercase">
            Note
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Pricing can vary based on scope, number of entities, and urgency. Use the{" "}
            <Link href="/start" className="underline underline-offset-4">
              Start a Project
            </Link>{" "}
            intake so we can propose the cleanest path.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              What you get
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              {SITE.signature} — delivered as systems
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every engagement is designed to produce artifacts your team can run on: workflows, templates, registers, and a continuity plan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {WHAT_YOU_GET.map((x) => {
              const Icon = x.icon;
              return (
                <div
                  key={x.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                  </div>
                  <div className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {x.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Next step
              </div>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Start with the intake—get a structured proposal.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us what you need. We’ll respond with a clean scope and the best package path.
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
