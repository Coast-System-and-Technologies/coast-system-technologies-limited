// app/(public-pages)/services/trademark-ip/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  FileText,
  ClipboardCheck,
  Layers3,
  Lock,
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

import Reveal, { RevealItem } from "@/components/motion/reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Trademark & IP",
  description:
    "Trademark filing coordination and IP discipline—brand protection routines, evidence packs, and structured documentation built for scaling companies.",
};

const DELIVERABLES = [
  {
    title: "Trademark Filing Coordination",
    description:
      "We coordinate the filing process: intake, classification guidance, evidence pack, and submission readiness.",
    icon: Scale,
  },
  {
    title: "Brand & IP Asset Register",
    description:
      "A simple register of names, marks, logos, domains, products, and ownership references.",
    icon: Layers3,
  },
  {
    title: "Evidence & Documentation Pack",
    description:
      "Structured proof pack: logo files, usage samples, domain proof, brand story, and supporting attachments.",
    icon: FileText,
  },
  {
    title: "Workflow + Checklists",
    description:
      "Stage gates for filing readiness and quality control so nothing is forgotten.",
    icon: ClipboardCheck,
  },
  {
    title: "Ownership & Access Discipline",
    description:
      "Control routines for shared accounts, admin access, and IP custody—built for continuity.",
    icon: Lock,
  },
  {
    title: "Implementation & Handoff",
    description:
      "Clear next steps: renewals tracking, future filings, and governance routines.",
    icon: CheckCircle2,
  },
];

const OUTCOMES = [
  "Trademark work becomes structured: clear intake, pack, and submission readiness.",
  "Cleaner IP custody: ownership clarity and access discipline.",
  "Reduced risk: fewer mistakes, missing evidence, or inconsistent brand references.",
  "Continuity: filing history and asset records remain traceable over time.",
];

const WHO_ITS_FOR = [
  "Founders launching a new brand and needing filing discipline from day one.",
  "Growing companies expanding products, trademarks, and brand assets.",
  "Teams with multiple designers/devs handling brand materials and domains.",
  "Organizations that want a repeatable IP routine (not a once-off scramble).",
];

const WORKFLOW_STEPS = [
  {
    title: "Intake",
    description:
      "We capture the mark, use-case, jurisdiction context, and filing intent.",
  },
  {
    title: "Pack Build",
    description:
      "We organize evidence: brand assets, usage samples, and filing-ready attachments.",
  },
  {
    title: "QC & Readiness",
    description:
      "We run checklists: completeness, naming consistency, and evidence clarity.",
  },
  {
    title: "Submission Coordination",
    description:
      "We coordinate submission steps and keep a clean record for continuity.",
  },
];

const FAQS = [
  {
    q: "Do you file trademarks directly?",
    a: "We coordinate the filing process and build the structured documentation and evidence pack. Where filings require a licensed agent or formal legal representation, we coordinate with qualified professionals or your existing counsel.",
  },
  {
    q: "What exactly is included in an IP pack?",
    a: "A structured set of brand assets and supporting evidence—logo files, usage samples, domain proof, ownership references, and a clean registry entry to keep everything traceable.",
  },
  {
    q: "Can this be done for multiple products/brands?",
    a: "Yes. We can build a register and repeatable workflow that supports multiple marks and products across a group of companies.",
  },
  {
    q: "Do you help track renewals and future filings?",
    a: "Yes. Part of the handoff can include renewal tracking structure and the routines needed to keep IP disciplined over time.",
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

export default function TrademarkIpPage() {
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
              title="Trademark & IP"
              description="Trademark filing coordination and IP discipline—so what you build stays protected as you scale."
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
              Brand protection with operational discipline
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              IP work becomes messy when it’s rushed. We bring structure: a clean
              intake, evidence pack discipline, filing readiness checks, and a
              register that stays traceable as your company grows.
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
                  Evidence packs • Registers • Continuity routines
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
                Deliverables designed for filing readiness
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We build a clean IP pack and workflow so filings are repeatable and organized.
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
              A disciplined IP workflow
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We keep it structured: intake → evidence pack → QC → coordination.
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

      {/* FAQ */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <Reveal variant="fade" duration={0.32} y={6}>
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                FAQs
              </div>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Common questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={10} duration={0.5} className="mt-8 max-w-3xl">
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
          </Reveal>
        </div>
      </section>

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
                  Protect what you’re building—early.
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Start with a clean intake so we can build an evidence pack and structure a repeatable IP routine.
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
