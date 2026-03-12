// app/(public-pages)/services/cac-registry/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Workflow,
  CheckCircle2,
  Stamp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaqSection } from "@/components/sections/faq-section";

import Reveal, { RevealItem } from "@/components/motion/reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "CAC Registry",
  description:
    "Structured CAC registration and filing coordination: documentation packs, checklists, QC, submission readiness, and compliance continuity.",
};

const DELIVERABLES = [
  {
    title: "Registration & Filing Coordination",
    description:
      "We coordinate CAC registrations and post-incorporation filings with a disciplined process.",
    icon: Building2,
  },
  {
    title: "Filing Pack Builder",
    description:
      "Structured document packs: forms, IDs, evidence, resolutions, and attachments organized for submission.",
    icon: FileText,
  },
  {
    title: "QC Checklist + Reviewer Notes",
    description:
      "Completeness checks, risk spotting, and clean reviewer notes before any submission step.",
    icon: ClipboardCheck,
  },
  {
    title: "Stage Gates & Workflow Tracking",
    description:
      "Clear stages and transition rules so work doesn’t move forward incomplete.",
    icon: Workflow,
  },
  {
    title: "Submission Readiness & Records",
    description:
      "We ensure submission readiness and keep a traceable record of what was submitted and when.",
    icon: Stamp,
  },
  {
    title: "Continuity & Compliance Routine",
    description:
      "Handoff structure for future filings—so compliance becomes a routine, not a panic.",
    icon: CheckCircle2,
  },
];

const OUTCOMES = [
  "Fewer delays from missing documents or unclear requirements.",
  "Cleaner packs: everything organized and submission-ready.",
  "Traceable history: filings, evidence, and reviewer notes are easy to verify later.",
  "Continuity: post-incorporation compliance becomes a system, not memory work.",
];

const WHO_ITS_FOR = [
  "Founders registering new companies and needing a clean filing workflow.",
  "Organizations handling multiple entities and recurring post-incorporation filings.",
  "Teams that want a disciplined pack + QC approach before submission.",
  "Groups that need governance-aligned registry operations with traceable records.",
];

const WORKFLOW_STEPS = [
  {
    title: "Intake",
    description:
      "We capture the request, entity details, and filing type—then list required documents.",
  },
  {
    title: "Pack Build",
    description:
      "We assemble the filing pack: forms, evidence, IDs, resolutions, and attachments.",
  },
  {
    title: "QC + Review",
    description:
      "We run completeness checks and reviewer notes so submission is clean and confident.",
  },
  {
    title: "Submission Coordination",
    description:
      "We coordinate submission steps and keep a traceable record for continuity.",
  },
];

const FAQS = [
  {
    q: "Do you submit filings using your own CAC login?",
    a: "We coordinate the process and prepare submission-ready packs. Where submissions require specific credentials, submission stays under the responsible party’s login. We do not encourage credential sharing.",
  },
  {
    q: "Do you handle post-incorporation filings?",
    a: "Yes. We coordinate a range of post-incorporation filings and help build continuity routines so filings remain consistent over time.",
  },
  {
    q: "What’s the difference between CAC Registry and Governance & Structuring?",
    a: "Governance & Structuring defines structure and decision rights. CAC Registry focuses on registrations/filings execution coordination—packs, checklists, submission readiness, and record continuity.",
  },
  {
    q: "Can this be run as an internal CAC Desk OS?",
    a: "Yes. This is a common approach: workflow stages, pack builder, QC checklist, reviewer sheets, approval logs, and an audit trail—built for disciplined registry operations.",
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

export default function CacRegistryPage() {
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
              title="CAC Registry"
              description="Structured CAC registration and filing coordination—packs, QC, workflow discipline, and traceable records."
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
              Filing discipline that reduces delays
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              CAC work becomes stressful when packs are incomplete, requirements are unclear,
              and there’s no traceable record. We bring structure: pack building, QC, and
              continuity.
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
                  RC: {SITE.trust.rc} • Pack discipline • QC • Traceable records
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
                Deliverables designed for submission readiness
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A clean workflow and pack system that stays reusable for the next filing.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d, idx) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={0.05 + idx * 0.07} y={10} duration={0.45}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                    </div>
                    <div className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                      {d.title}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="cstl-container py-14 sm:py-16">
        <Reveal variant="fade" duration={0.32} y={6}>
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              How it works
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              A disciplined CAC workflow
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Intake → pack → QC → submission coordination, with traceable records.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.06 + i * 0.08} y={10} duration={0.45}>
              <div className="rounded-2xl border border-border bg-card p-6">
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
            </Reveal>
          ))}
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
                  Keep filings clean. Keep records traceable.
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Start with a clean intake so we can build a submission-ready pack and run a disciplined CAC workflow.
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
