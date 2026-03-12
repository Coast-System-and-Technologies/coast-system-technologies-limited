// app/(public-pages)/services/legaltech-compliance-systems/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Bell,
  CheckCircle2,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaqSection } from "@/components/sections/faq-section";

import Reveal, { RevealItem } from "@/components/motion/reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "LegalTech & Compliance Systems",
  description:
    "Build compliance workflows, approval trails, audit logs, and operational discipline—so governance becomes measurable, not memory-based.",
};

const DELIVERABLES = [
  {
    title: "Compliance Workflow Design",
    description:
      "Pipeline stages, responsibilities, stage transition rules, and enforcement logic.",
    icon: Workflow,
  },
  {
    title: "Approval Trails & Audit Logs",
    description:
      "Traceable decisions: who approved what, when, and why—with clean review notes.",
    icon: ClipboardCheck,
  },
  {
    title: "Templates & Filing Packs",
    description:
      "Reusable document templates, intake forms, checklists, and filing pack builders.",
    icon: FileText,
  },
  {
    title: "Policy + SOP System",
    description:
      "Operational policies, SOPs, and documentation standards that reduce ambiguity.",
    icon: Lock,
  },
  {
    title: "Reminders, SLAs & Escalations",
    description:
      "Notifications and cadence controls that keep the work moving on schedule.",
    icon: Bell,
  },
  {
    title: "Implementation & Handoff",
    description:
      "Practical rollout: training, adoption guidance, and continuous improvement loop.",
    icon: CheckCircle2,
  },
];

const OUTCOMES = [
  "Fewer missed steps: stage gates enforce discipline before work progresses.",
  "Audit-ready history: approval trails and reviewer notes are always traceable.",
  "Faster throughput: clear ownership, SLAs, and escalations reduce delays.",
  "Standardization: templates and packs make delivery consistent across requests.",
];

const WHO_ITS_FOR = [
  "Teams running recurring filings, compliance tasks, or registry operations.",
  "Organizations that rely on memory, WhatsApp threads, or untracked approvals.",
  "Founders/execs who want control without micromanagement.",
  "Operations that need traceability: evidence, logs, reviewer notes, and handoffs.",
];

const WORKFLOW_STEPS = [
  {
    title: "Intake & Classification",
    description:
      "Capture request details and classify the work to choose the correct workflow path.",
    icon: FileText,
  },
  {
    title: "Checklist & Pack Build",
    description:
      "Generate the required pack: templates, forms, evidence, and structured folders.",
    icon: ClipboardCheck,
  },
  {
    title: "Review & Approval",
    description:
      "Reviewer checks completeness, writes notes, and records approval decisions.",
    icon: Bell,
  },
  {
    title: "Execution & Audit Trail",
    description:
      "Run the task with traceable actions, timestamps, and an always-ready report trail.",
    icon: CheckCircle2,
  },
];

const FAQS = [
  {
    q: "Is this legal advice or a law firm service?",
    a: "No. This is a governance and operations systems service. We design and implement workflows, logs, templates, and discipline for compliance operations. Where legal counsel is required, we coordinate with qualified professionals or your existing counsel.",
  },
  {
    q: "Can this be built as an internal app?",
    a: "Yes. This is exactly the use case—an internal compliance hub that enforces stage gates, keeps audit trails, and standardizes delivery through templates and packs.",
  },
  {
    q: "What’s the difference between this and Governance & Structuring?",
    a: "Governance & Structuring defines the structure and decision rights. LegalTech & Compliance Systems builds the operational engine—workflows, checklists, approval logs, notifications, and templates—to run governance daily.",
  },
  {
    q: "Do you support CAC, trademark, and privacy operations with this system?",
    a: "Yes. This system can be the operating layer for CAC Desk workflows, trademark filing coordination, privacy audit workflows, and other recurring compliance routines.",
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

export default function LegalTechComplianceSystemsPage() {
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
              title="LegalTech & Compliance Systems"
              description="We build compliance workflows, approval trails, and audit-ready systems—so governance becomes measurable, not memory-based."
            />
          </Reveal>

          <Reveal delay={0.06} y={8} duration={0.45}>
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
          <Reveal className="lg:col-span-7" y={10} duration={0.5}>
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Outcomes
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              An operating engine for compliance work
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Compliance failures often come from weak systems: missing
              checklists, unclear approvals, no logs, and inconsistent
              documentation. We fix that by building a disciplined workflow.
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
          <Reveal className="lg:col-span-5" delay={0.06} y={10} duration={0.5}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Who it’s for
              </div>

              <ul className="mt-4 space-y-3">
                {WHO_ITS_FOR.map((x, idx) => (
                  <RevealItem
                    key={x}
                    delay={0.06 + idx * 0.06}
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
                  RC: {SITE.trust.rc} • Workflow discipline • Audit-ready trails
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-20 sm:py-24 md:py-28">
          <Reveal variant="fade" duration={0.32} y={6}>
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-widest text-[color:var(--accent)] uppercase">
                What you get
              </p>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Deliverables designed for daily use
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This is not just documentation. It’s a working system—templates,
                stage gates, and logs that enforce discipline.
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
                  A disciplined workflow—built for traceability
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Every step produces evidence: checklists, packs, reviewer notes, and logs.
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
                  Turn compliance into a system—not a scramble.
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Start with a clean intake so we can design the workflow,
                  templates, and controls for disciplined execution.
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
