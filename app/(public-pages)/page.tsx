import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Building2, Layers3, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";

const PILLARS = [
  {
    title: "Governance & Structuring",
    href: "/services/governance-structuring",
    icon: Layers3,
    description:
      "Group structure, internal discipline, and continuity frameworks that keep execution aligned.",
  },
  {
    title: "LegalTech & Compliance Systems",
    href: "/services/legaltech-compliance-systems",
    icon: Workflow,
    description:
      "Operational workflows, audit trails, and compliance tooling that makes governance measurable.",
  },
  {
    title: "Data Protection & Privacy",
    href: "/services/data-protection-privacy",
    icon: ShieldCheck,
    description:
      "Nigeria-focused privacy and data governance practice built for real operations.",
  },
  {
    title: "Trademark & IP",
    href: "/services/trademark-ip",
    icon: Sparkles,
    description:
      "Brand protection and IP discipline—so what you build stays protected as you scale.",
  },
  {
    title: "CAC Registry",
    href: "/services/cac-registry",
    icon: Building2,
    description:
      "Registrations, filings, and compliance coordination with clean documentation standards.",
  },
];

const COMPANIES = [
  {
    title: "Coast Research Technology",
    href: "/companies/coast-research-technology",
    subtitle: "Software engineering • product delivery • maintenance",
  },
  {
    title: "CoastLink24",
    href: "/companies/coastlink24",
    subtitle: "Fintech infrastructure • integrated lending systems",
  },
  {
    title: "Coast Infrastructure Systems",
    href: "/companies/coast-infrastructure-systems",
    subtitle: "Infrastructure systems • power • connectivity",
  },
];

const STEPS = [
  {
    title: "Intake",
    description:
      "You submit a clear request. We classify the work, define constraints, and align on outcomes.",
  },
  {
    title: "Scope & Controls",
    description:
      "We create a structured scope: deliverables, owners, timelines, checkpoints, and documentation standards.",
  },
  {
    title: "Execution",
    description:
      "We deliver with operational discipline—clean handoffs, traceable decisions, and stable rollout.",
  },
  {
    title: "Continuity",
    description:
      "We keep systems maintained: governance routines, updates, and shared-services support when needed.",
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
        <div className="text-xs tracking-widest text-muted-foreground uppercase">{kicker}</div>
      ) : null}
      <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg" />
        <div className="absolute inset-0 cstl-grid opacity-35" />

        <div className="relative cstl-container py-20 sm:py-24 md:py-28">
          {/* Signature pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
            <span className="font-medium text-[color:var(--primary)]">{SITE.signature}</span>
            <span className="hidden sm:inline">Governance • Shared Services • Execution Support</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.06] text-[color:var(--primary)]">
                The structure behind companies that execute, scale, and endure.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Coast System & Technologies Limited provides group-level governance, operational discipline,
                and shared services—so operating companies move faster while staying aligned.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/contact">Contact CSTL</Link>
                </Button>

                <Button asChild variant="ghost" className="sm:ml-2">
                  <Link href="/companies" className="text-[color:var(--primary)]">
                    Explore Our Companies
                  </Link>
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
                  RC: {SITE.trust.rc}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  Documentation-first delivery
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  Governance-led systems
                </span>
              </div>
            </div>

            {/* Right panel: “Executive card” */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card shadow-sm">
                <div className="p-6">
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">
                    CSTL Operating Focus
                  </div>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">Order</div>
                        <div className="text-sm text-muted-foreground">
                          Clear roles, clean documentation, and traceable decisions.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">Strategy</div>
                        <div className="text-sm text-muted-foreground">
                          Structures that keep products and teams aligned as complexity grows.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">Legacy</div>
                        <div className="text-sm text-muted-foreground">
                          Continuity frameworks that outlive individuals and preserve intent.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full cstl-seal-line opacity-70" />

                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/services">View Services Overview</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Built to feel like an executive brief: calm, structured, premium—never loud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="cstl-container py-16 sm:py-20">
        <SectionHeading
          kicker="What we do"
          title="Governance-led services built for real operations"
          description="We don’t just advise. We build the structure, systems, and documentation standards that make execution consistent."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-[color:var(--accent)] transition">
                    View →
                  </span>
                </div>

                <div className="mt-4 font-heading text-xl text-[color:var(--primary)]">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
            <Link href="/start">Start a Project</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="border-y border-border bg-card/40">
        <div className="cstl-container py-16 sm:py-20">
          <SectionHeading
            kicker="Coast Group"
            title="Operating companies built to deliver"
            description="CSTL provides the governance layer. The operating companies execute across software, fintech infrastructure, and physical systems."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {COMPANIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm"
              >
                <div className="font-heading text-xl text-[color:var(--primary)]">
                  {c.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.subtitle}</p>
                <div className="mt-6 h-px w-full cstl-seal-line opacity-60" />
                <div className="mt-4 text-sm text-[color:var(--primary)]">
                  View profile <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/companies">View All Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="cstl-container py-16 sm:py-20">
        <SectionHeading
          kicker="Operating rhythm"
          title="A disciplined workflow—built for clarity"
          description="Structured delivery is the product. We build systems that remain stable even as teams change."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Step {idx + 1}
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cstl-hero-bg opacity-70" />
        <div className="absolute inset-0 cstl-grid opacity-25" />

        <div className="relative cstl-container py-16 sm:py-20">
          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-8 sm:p-10">
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Ready when you are
              </div>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]">
                Bring the vision. We’ll bring the structure.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                If you’re building something serious—systems, governance, or filings—start with a clean intake so we can
                deliver with discipline from day one.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start">Start a Project</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Talk to CSTL</Link>
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {SITE.signature}
          </p>
        </div>
      </section>
    </main>
  );
}
