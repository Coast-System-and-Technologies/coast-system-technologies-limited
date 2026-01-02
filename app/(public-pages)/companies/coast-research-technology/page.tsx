// app/(public-pages)/companies/coast-research-technology/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  GraduationCap,
  Boxes,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Coast Research Technology (CRT)",
  description:
    "Software engineering, product delivery, app maintenance, and talent development—building real-world systems and supporting them for continuity.",
};

const CAPABILITIES = [
  {
    title: "Software Engineering",
    description:
      "Backend + frontend systems built for stability, security, and scale—executed with clean architecture.",
    icon: Boxes,
  },
  {
    title: "Product Delivery",
    description:
      "From idea to MVP to production—delivery discipline, QA, and launch support.",
    icon: Sparkles,
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ongoing support for stability and continuity—bug fixes, upgrades, monitoring, and improvements.",
    icon: Wrench,
  },
  {
    title: "Talent Development",
    description:
      "Hands-on training, mentorship, and internships—bridging academia and industry with real work.",
    icon: GraduationCap,
  },
];

const WHAT_WE_DO = [
  "Web and mobile product development",
  "Backend architecture & integrations",
  "Fintech and lending infrastructure support",
  "Operations tooling (workflows, admin systems)",
  "Maintenance contracts and continuity support",
];

const WHY_CRT = [
  "Delivery discipline: clean handoffs, documentation, and consistency.",
  "Engineering depth: practical architecture for real operations.",
  "Continuity mindset: we don’t just build— we support and stabilize.",
  "Talent pipeline: we grow capacity through training and mentorship.",
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

export default function CoastResearchTechnologyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Operating Company"
            title="Coast Research Technology (CRT)"
            description="We build real-world software products and systems—and provide ongoing application support for stability and continuity."
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
              What CRT does
            </div>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
              Engineering teams trust for delivery—and continuity
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              CRT is the Coast Group’s software engineering arm: we design, build,
              and maintain products across fintech, internal operations, and digital
              platforms. We don’t just ship—we support systems so they remain stable
              over time.
            </p>

            <ul className="mt-6 space-y-2">
              {WHY_CRT.map((x) => (
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
                  <Cpu className="h-5 w-5 text-[color:var(--primary)]" />
                </div>
                <div>
                  <div className="font-heading text-lg text-[color:var(--primary)]">
                    CRT at a glance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Engineering • Product • Maintenance • Talent
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Core work
              </div>
              <ul className="mt-4 space-y-3">
                {WHAT_WE_DO.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <div className="text-xs text-muted-foreground leading-relaxed">
                Mission-aligned delivery under CSTL’s governance and shared services.
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
              Built for real-world systems
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              CRT builds and supports software that must work under real operating conditions.
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
                Ship software with discipline—and keep it stable.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us what you’re building. CSTL coordinates the engagement and routes execution to CRT where appropriate.
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
