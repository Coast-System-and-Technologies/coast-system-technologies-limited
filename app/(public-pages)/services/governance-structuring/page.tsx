// app/(public-pages)/services/governance-structuring/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  ShieldCheck,
  Users,
  Workflow,
  FileText,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaqSection } from "@/components/sections/faq-section";

import { SITE } from "@/content/site";
import Reveal, { RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Governance & Structuring",
  description:
    "Group structure, decision rights, operating rhythm, and continuity frameworks—so your company can execute with order, strategy, and legacy.",
};

const DELIVERABLES = [
  {
    title: "Group Structure Blueprint",
    description:
      "Holding vs operating entity map, roles, boundaries, and how entities interact.",
    icon: Layers3,
  },
  {
    title: "Decision Rights & Approval Matrix",
    description:
      "Who can approve what, escalation paths, thresholds, and a clean audit mindset.",
    icon: Workflow,
  },
  {
    title: "Role Scope & Oversight Routines",
    description:
      "Clear role scope for founders, execs, reviewers, and shared-services teams.",
    icon: Users,
  },
  {
    title: "Governance Documentation Pack",
    description:
      "Operating memos, registers, templates, and documentation standards that reduce chaos.",
    icon: FileText,
  },
  {
    title: "Founder Continuity Framework",
    description:
      "Safeguards for strategic continuity: control points, change control, and succession thinking.",
    icon: ShieldCheck,
  },
  {
    title: "Implementation & Handoff",
    description:
      "A practical rollout plan—what to implement now vs later, with checkpoints.",
    icon: CheckCircle2,
  },
];

const OUTCOMES = [
  "Less ambiguity: clearer roles, decisions, and accountability.",
  "Faster execution: fewer delays caused by unclear approvals.",
  "Cleaner documentation: traceable decisions and reusable templates.",
  "Continuity: structure that remains stable as teams change.",
];

const WHO_ITS_FOR = [
  "Founders building a multi-company group (holding + operating companies).",
  "Teams that want discipline: roles, sign-offs, and clean delivery routines.",
  "Companies scaling operations and needing governance that matches complexity.",
  "Businesses preparing for partnerships, institutional engagement, or compliance exposure.",
];

const WORKFLOW_STEPS = [
  {
    title: "Intake",
    description:
      "We capture your structure, operating reality, and the outcomes you want.",
    icon: FileText,
  },
  {
    title: "Structure & Roles",
    description:
      "We define entities, responsibilities, decision rights, and oversight routines.",
    icon: Layers3,
  },
  {
    title: "Documentation Pack",
    description:
      "We deliver governance artifacts: matrices, templates, registers, and SOP direction.",
    icon: Workflow,
  },
  {
    title: "Rollout",
    description:
      "We help you implement: handoff, adoption, and continuity checkpoints.",
    icon: CheckCircle2,
  },
];

const FAQS = [
  {
    q: "Is this legal advice?",
    a: "No. This is governance and operating structure work—systems, documentation standards, decision rights, and implementation support. Where legal filings or counsel are required, we coordinate with qualified professionals or your existing counsel.",
  },
  {
    q: "Can CSTL structure a group where the founder owns multiple companies?",
    a: "Yes. That’s a common case. We focus on clarity: what sits at the holding level vs operating level, how IP and shared services are managed, and how continuity is protected.",
  },
  {
    q: "Do you help with CAC-related structuring too?",
    a: "Yes—structuring and CAC work often connect. This service focuses on governance design; CAC Registry is where filing execution lives.",
  },
  {
    q: "How long does a governance & structuring engagement take?",
    a: "Depends on scope and number of entities. Most engagements run as a short structured sprint with clear deliverables and handoff.",
  },
];

function SectionTitle({
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


export default function GovernanceStructuringPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <Reveal variant="fade" duration={0.32} y={6}>
            <SectionTitle
              kicker="Service"
              title="Governance & Structuring"
              description="We design the structure that keeps your company aligned—roles, decision rights, operating rhythm, and continuity frameworks built for execution."
            />
          </Reveal>

          <Reveal delay={0.06} duration={0.42} y={8}>
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
          </Reveal>

          <Reveal delay={0.1} variant="fade" duration={0.28}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
          </Reveal>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <Reveal className="lg:col-span-7" variant="fade-up" y={10} duration={0.5}>
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Outcomes
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              Structure that reduces chaos and increases speed
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Governance isn’t a vibe—it’s a system. We formalize how your company
              makes decisions, keeps records, and maintains continuity so execution
              becomes consistent.
            </p>

            <ul className="mt-6 space-y-2">
              {OUTCOMES.map((x, idx) => (
                <RevealItem
                  key={x}
                  delay={0.06 + idx * 0.06}
                  y={8}
                  duration={0.42}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                  <span>{x}</span>
                </RevealItem>
              ))}
            </ul>

            <Reveal delay={0.08} y={8} duration={0.42}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline">
                  <Link href="/packages">View Packages</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/services" className="text-[color:var(--primary)]">
                    Back to Services
                  </Link>
                </Button>
              </div>
            </Reveal>
          </Reveal>

          {/* Right */}
          <Reveal className="lg:col-span-5" delay={0.08} y={10} duration={0.5}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Who it’s for
              </div>

              <ul className="mt-4 space-y-3">
                {WHO_ITS_FOR.map((x, idx) => (
                  <RevealItem
                    key={x}
                    delay={0.08 + idx * 0.06}
                    y={8}
                    duration={0.42}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{x}</span>
                  </RevealItem>
                ))}
              </ul>

              <Reveal delay={0.1} variant="fade" duration={0.28}>
                <Separator className="my-6" />
              </Reveal>

              <Reveal delay={0.12} variant="fade" duration={0.28}>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  RC: {SITE.trust.rc} • Governance-led delivery • Documentation-first
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <Reveal variant="fade" duration={0.32} y={6}>
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                What you get
              </div>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Deliverables designed for implementation
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We deliver a practical governance pack—built for adoption, not shelfware.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d, idx) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={0.05 + idx * 0.07} y={10} duration={0.45}>
                  <div
                    className={[
                      "group relative rounded-2xl border border-border bg-card p-6 sm:p-7",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color:var(--accent)]/5 hover:border-[color:var(--accent)]/25",
                      "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-2xl before:bg-[color:var(--accent)] before:opacity-0 before:transition-opacity before:duration-300",
                      "hover:before:opacity-100",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                        "bg-[color:var(--accent)]/10 text-[color:var(--accent)]",
                        "transition-all duration-300",
                        "group-hover:bg-[color:var(--accent)]/20 group-hover:scale-105",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-[color:var(--primary)]">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW - Same UI flow as Operating rhythm on homepage */}
      <section aria-labelledby="workflow-title" className="border-y border-border bg-card/40">
        <div className="cstl-container py-20 sm:py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Heading */}
            <Reveal variant="fade" duration={0.32}>
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest text-[color:var(--accent)] uppercase">
                  How it works
                </p>
                <h2 id="workflow-title" className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-[color:var(--primary)]">
                  A disciplined workflow—built for clarity
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We reduce ambiguity, increase traceability, and enforce clean handoffs.
                </p>
              </div>
            </Reveal>

            {/* Right Column - Timeline */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60" aria-hidden="true" />

              <ol className="relative space-y-8">
                {WORKFLOW_STEPS.map((s, idx) => {
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

      <FaqSection faqs={FAQS} />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg opacity-70" />
        <div className="absolute inset-0 cstl-grid opacity-20" />

        <div className="relative cstl-container py-14 sm:py-16">
          <Reveal y={12} duration={0.55}>
            <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-8 sm:p-10">
              <div className="max-w-2xl">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Ready when you are
                </div>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                  Bring the vision. We’ll bring the structure.
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Start with a clean intake so we can deliver with discipline from day one.
                </p>

                <Reveal delay={0.06} y={8} duration={0.45}>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-[color:var(--primary)] text-white hover:opacity-90"
                    >
                      <Link href="/start">
                        Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Talk to CSTL</Link>
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={0.1} variant="fade" duration={0.28}>
                  <div className="mt-6 text-xs text-muted-foreground">
                    {SITE.signature}
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
