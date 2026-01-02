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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SITE } from "@/content/site";

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
  },
  {
    title: "Structure & Roles",
    description:
      "We define entities, responsibilities, decision rights, and oversight routines.",
  },
  {
    title: "Documentation Pack",
    description:
      "We deliver governance artifacts: matrices, templates, registers, and SOP direction.",
  },
  {
    title: "Rollout",
    description:
      "We help you implement: handoff, adoption, and continuity checkpoints.",
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
          <SectionTitle
            kicker="Service"
            title="Governance & Structuring"
            description="We design the structure that keeps your company aligned—roles, decision rights, operating rhythm, and continuity frameworks built for execution."
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

      {/* AT A GLANCE */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
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
              {OUTCOMES.map((x) => (
                <li
                  key={x}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link
                  href="/services"
                  className="text-[color:var(--primary)]"
                >
                  Back to Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Who it’s for
              </div>
              <ul className="mt-4 space-y-3">
                {WHO_ITS_FOR.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <div className="text-xs text-muted-foreground leading-relaxed">
                RC: {SITE.trust.rc} • Governance-led delivery • Documentation-first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-widest text-muted-foreground uppercase">
            How it works
          </div>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
            A disciplined workflow—built for clarity
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We reduce ambiguity, increase traceability, and enforce clean handoffs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((s, i) => (
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
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              FAQs
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              Common questions
            </h2>
          </div>

          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, idx) => (
                <AccordionItem key={f.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg opacity-70" />
        <div className="absolute inset-0 cstl-grid opacity-20" />

        <div className="relative cstl-container py-14 sm:py-16">
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

              <div className="mt-6 text-xs text-muted-foreground">
                {SITE.signature}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
