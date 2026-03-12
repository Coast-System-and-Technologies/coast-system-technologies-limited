// app/(public-pages)/services/data-protection-privacy/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  ClipboardCheck,
  Users,
  Lock,
  CheckCircle2,
  Database,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaqSection } from "@/components/sections/faq-section";

import Reveal, { RevealItem } from "@/components/motion/reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Data Protection & Privacy",
  description:
    "Nigeria-focused privacy and data governance practice: audits, policies, registers, controls, and staff readiness—built for real operations.",
};

const DELIVERABLES = [
  {
    title: "Data Inventory & Processing Map",
    description:
      "Identify what data you collect, where it lives, why you process it, and who has access.",
    icon: Database,
  },
  {
    title: "Privacy Audit (Ops-Ready)",
    description:
      "A practical assessment of data flows, risks, controls, and gaps—built to inform implementation.",
    icon: ClipboardCheck,
  },
  {
    title: "Policies & Notices Pack",
    description:
      "Privacy policy, cookie notice, and supporting internal policies aligned to your actual operations.",
    icon: FileText,
  },
  {
    title: "Registers & Documentation",
    description:
      "Operational registers (requests log, incident log, vendor list) to keep compliance traceable.",
    icon: Lock,
  },
  {
    title: "Staff Awareness & Readiness",
    description:
      "Simple training + operating guidance so teams follow the rules in daily work.",
    icon: Users,
  },
  {
    title: "Implementation & Continuity",
    description:
      "Rollout plan, controls adoption, and ongoing improvement cadence (not a one-off document dump).",
    icon: CheckCircle2,
  },
];

const OUTCOMES = [
  "Clarity: a real map of your data flows and processing purposes.",
  "Control: practical safeguards and access discipline—implemented, not just documented.",
  "Traceability: logs and registers that prove operational compliance.",
  "Readiness: staff know what to do, what not to do, and what to escalate.",
];

const WHO_ITS_FOR = [
  "Businesses handling customer data (web apps, fintech, HR, education, healthcare-adjacent).",
  "Teams scaling operations and needing structured data governance controls.",
  "Organizations that want a Nigeria-focused privacy approach built for reality—not copy-paste policies.",
  "Founders and ops leads who want privacy to be a system, not a yearly panic.",
];

const WORKFLOW_STEPS = [
  {
    title: "Discovery",
    description:
      "We map data types, sources, storage locations, access paths, and processing purposes.",
  },
  {
    title: "Audit & Risk Review",
    description:
      "We identify gaps, risks, and practical controls—prioritized by impact and feasibility.",
  },
  {
    title: "Policies & Registers",
    description:
      "We deliver the policy pack + operational registers built for day-to-day use.",
  },
  {
    title: "Implementation",
    description:
      "We help you adopt controls, align staff behavior, and establish continuity routines.",
  },
];

const FAQS = [
  {
    q: "Is this a legal service?",
    a: "This is an operational data governance and privacy practice. We help you implement practical policies, registers, and controls. Where formal legal counsel is required, we coordinate with qualified professionals or your existing counsel.",
  },
  {
    q: "Do you cover Nigeria only?",
    a: "Yes—this service is designed for Nigeria-focused operations and practical compliance discipline for teams building and operating locally.",
  },
  {
    q: "Will you just give us a generic privacy policy?",
    a: "No. We map your actual operations first (data types, flows, access). The documents are then written to match reality—so staff can follow them and audits don’t collapse under scrutiny.",
  },
  {
    q: "Does this include cookies and website compliance pages?",
    a: "Yes. The output typically includes website-facing privacy/cookies content plus internal operational registers and controls.",
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

export default function DataProtectionPrivacyPage() {
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
              title="Data Protection & Privacy"
              description="Nigeria-focused privacy and data governance practice—audits, policies, registers, and real operational controls."
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
              Privacy that survives real operations
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Privacy fails when it’s treated as a document instead of an operating
              system. We build a practical governance layer: data mapping, controls,
              documentation, and staff behavior—all aligned.
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
                  Nigeria-focused • Operational controls • Documentation-first
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
                Deliverables designed for adoption
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Not copy-paste policies—an operating pack aligned to your real data flows.
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
              A disciplined privacy workflow
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We start with reality (data flows), then build controls and documentation that teams can actually follow.
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
                  Make privacy operational—not ceremonial.
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Start with a clean intake so we can map your data flows, define controls, and deliver a privacy pack your team can actually follow.
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
