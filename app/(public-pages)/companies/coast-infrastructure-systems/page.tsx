// app/(public-pages)/companies/coast-infrastructure-systems/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  CheckCircle2,
  Sun,
  Cctv,
  Router,
  Truck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Coast Infrastructure Systems Limited (CISL)",
  description:
    "Infrastructure systems delivery—solar, CCTV, networking, and procurement—executed reliably on-ground for operational continuity.",
};

const CAPABILITIES = [
  {
    title: "Solar + Power Systems",
    description:
      "Sizing, procurement, installation, and support—built for reliable daily operation.",
    icon: Sun,
  },
  {
    title: "CCTV Installation & Setup",
    description:
      "Camera planning, installation, configuration, and monitoring setup for secure premises.",
    icon: Cctv,
  },
  {
    title: "Networking & Connectivity",
    description:
      "Office networking, routing, cabling, and configuration—stable connectivity for teams.",
    icon: Router,
  },
  {
    title: "Procurement & Deployment",
    description:
      "Procure, deliver, and deploy equipment with documentation and accountability.",
    icon: Truck,
  },
];

const WHAT_WE_DO = [
  "Solar system sales, installation, and maintenance",
  "CCTV installation and configuration",
  "Office networking: routing, cabling, setup",
  "Equipment procurement with deployment support",
  "Field execution with documentation and handoffs",
];

const WHY_CISL = [
  "On-ground execution: we don’t just advise—we deploy.",
  "Operational continuity: systems sized for real daily use.",
  "Documentation and handoff discipline for long-term maintenance.",
  "Procurement accountability and clean project coordination.",
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

export default function CoastInfrastructureSystemsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Operating Company"
            title="Coast Infrastructure Systems Limited (CISL)"
            description="We deliver infrastructure systems that power operations—solar, CCTV, networking, and procurement—with reliable on-ground execution."
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
              What CISL does
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              Infrastructure systems deployed with discipline
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              CISL is the Coast Group’s infrastructure systems operator. We design
              and deploy on-ground systems that power daily operations—energy, security,
              connectivity, and equipment procurement—built for reliability and continuity.
            </p>

            <ul className="mt-6 space-y-2">
              {WHY_CISL.map((x) => (
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
                  <Network className="h-5 w-5 text-[color:var(--primary)]" />
                </div>
                <div>
                  <div className="font-heading text-lg text-[color:var(--primary)]">
                    CISL at a glance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Solar • CCTV • Networking • Procurement
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
                Field execution with documentation and continuity under CSTL oversight.
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
              Systems that keep operations running
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Practical infrastructure delivery, sized and configured for daily use—not guesswork.
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

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card">
                <Wrench className="h-5 w-5 text-[color:var(--primary)]" />
              </div>
              <div className="max-w-2xl">
                <div className="font-heading text-lg text-[color:var(--primary)]">
                  Continuity matters
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We emphasize documentation, handoffs, and support so installed systems
                  remain maintainable—especially for growing teams and shared facilities.
                </p>
              </div>
            </div>
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
                Deploy infrastructure with reliability—and accountability.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us your requirements. CSTL coordinates engagement and routes execution to CISL where appropriate.
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
