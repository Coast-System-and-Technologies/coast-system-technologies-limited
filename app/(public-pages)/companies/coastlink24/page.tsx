// app/(public-pages)/companies/coastlink24/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Shield,
  Cable,
  Gauge,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "CoastLink24 Integrated Systems",
  description:
    "Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, and integrations built for disciplined lending operations.",
};

const CAPABILITIES = [
  {
    title: "Mandates & Collections",
    description:
      "Salary and account mandate flows, collections orchestration, retries, and control handling.",
    icon: Workflow,
  },
  {
    title: "Repayment Workflows",
    description:
      "End-to-end repayment tracking, reconciliation, exceptions, and customer lifecycle controls.",
    icon: Gauge,
  },
  {
    title: "Integrations Layer",
    description:
      "Payment gateways, banks, identity tools, and third-party services—connected reliably and securely.",
    icon: Cable,
  },
  {
    title: "Risk & Control Systems",
    description:
      "Guardrails for lending operations: thresholds, approvals, audit trails, and rule enforcement.",
    icon: Shield,
  },
];

const WHAT_WE_DO = [
  "Infrastructure for asset lending (API + backend services)",
  "Mandate setup + repayment automation flows",
  "Operational tools: dashboards, logs, and exception handling",
  "Secure integrations: banks, payment providers, verification tools",
  "Controls-first systems: traceability, approvals, and compliance readiness",
];

const WHY_COASTLINK = [
  "Infrastructure mindset: we build the engine, not the marketing wrapper.",
  "Controls-first: traceability and guardrails baked into workflows.",
  "Reliability: retries, monitoring, and failure modes handled cleanly.",
  "Integration depth: practical experience across real payment/mandate ecosystems.",
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

export default function CoastLink24Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Operating Company"
            title="CoastLink24 Integrated Systems"
            description="Fintech infrastructure for lenders and operators—mandates, repayment workflows, automation, and integrations built for disciplined lending operations."
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
              Built under CSTL governance
            </div>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" />
        </div>
      </section>

      {/* SUMMARY */}
      <section className="cstl-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              What CoastLink24 does
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              The operating engine behind lending
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              CoastLink24 is the Coast Group’s fintech infrastructure operator. We
              build the backend services that power lending operations—mandate setup,
              repayment automation, integrations, and controls that make systems reliable.
            </p>

            <ul className="mt-6 space-y-2">
              {WHY_COASTLINK.map((x) => (
                <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link href="/services">Explore CSTL Services</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link
                  href="/companies"
                  className="text-[color:var(--primary)]"
                >
                  Back to Companies
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                  <Landmark className="h-5 w-5 text-[color:var(--primary)]" />
                </div>
                <div>
                  <div className="font-heading text-lg text-[color:var(--primary)]">
                    CoastLink24 at a glance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Mandates • Repayments • Integrations • Controls
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Core work
              </div>
              <ul className="mt-4 space-y-3">
                {WHAT_WE_DO.map((x) => (
                  <li
                    key={x}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <div className="text-xs text-muted-foreground leading-relaxed">
                Infrastructure-led execution under CSTL’s governance and shared services.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Capabilities
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              Infrastructure built for real operations
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We design lending infrastructure with control points, reliability patterns, and traceability baked in.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                  </div>
                  <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
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
                Start with a clean intake
              </div>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Build lending infrastructure with control—and reliability.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us what you’re building. CSTL coordinates the engagement and routes execution to CoastLink24 where appropriate.
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
