// app/(public-pages)/results/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Clients & Results | CSTL — The Structure Behind Great Companies",
  description:
    "Proof of structured delivery: governance installs, compliance systems, privacy readiness (Nigeria), trademark/IP protection, and CAC registry services—delivered with confidentiality and discipline.",
  alternates: {
    canonical: "https://coastsystemtechnologies.com.ng/results",
  },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Clients & Results | CSTL",
    description:
      "Evidence-driven delivery with confidentiality: governance, compliance systems, privacy readiness (Nigeria), trademark/IP, and CAC registry execution.",
    url: "https://coastsystemtechnologies.com.ng/results",
    images: [
      {
        url: "https://coastsystemtechnologies.com.ng/assets/og/clients.jpg",
        width: 1200,
        height: 630,
        alt: "Clients & Results — Coast System & Technologies Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients & Results | CSTL",
    description:
      "Evidence-driven delivery with confidentiality: governance, compliance systems, privacy readiness (Nigeria), trademark/IP, and CAC registry execution.",
    images: ["https://coastsystemtechnologies.com.ng/assets/og/clients.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://coastsystemtechnologies.com.ng/#organization",
    name: "Coast System & Technologies Limited",
    url: "https://coastsystemtechnologies.com.ng/",
    email: "executive.office@coastsystemtechnologies.com.ng",
    telephone: "+2349136860226",
    sameAs: ["https://www.facebook.com/profile.php?id=61576938838523"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://coastsystemtechnologies.com.ng/results/#webpage",
    url: "https://coastsystemtechnologies.com.ng/results",
    name: "Clients & Results | Coast System & Technologies Limited",
    description:
      "Evidence-driven delivery with confidentiality: governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection, and CAC registry services.",
    about: { "@id": "https://coastsystemtechnologies.com.ng/#organization" },
    mainEntity: {
      "@type": "ItemList",
      name: "Selected Engagement Snapshots (Anonymised)",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Governance & Control Installation (Anonymised)" },
        { "@type": "ListItem", position: 2, name: "Legal-Tech & Compliance System Setup (Anonymised)" },
        { "@type": "ListItem", position: 3, name: "Data Protection & Privacy Readiness (Nigeria) (Anonymised)" },
        { "@type": "ListItem", position: 4, name: "Trademark & IP Protection (Nigeria-first) (Anonymised)" },
        { "@type": "ListItem", position: 5, name: "CAC Registry Services (Accredited Agent) (Anonymised)" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://coastsystemtechnologies.com.ng/results/#breadcrumbs",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://coastsystemtechnologies.com.ng/" },
      { "@type": "ListItem", position: 2, name: "Clients & Results", item: "https://coastsystemtechnologies.com.ng/results" },
    ],
  },
];

export default function ResultsPage() {
  const proof = [
    "Deliverables we install (playbooks, approval matrices, policy packs, filing packs)",
    "Operational changes (clean approvals, controlled documentation, compliance rhythm)",
    "Evidence packs (audit-ready structure, records discipline, tracking logs)",
    "Before → After clarity (what was broken, what we made stable)",
  ];

  const problems = [
    "Internal chaos: approvals, ownership, unclear authority",
    "Weak records: missing versions, no controls, no audit trail",
    "Privacy risk: data handling without NDPA-ready structure",
    "Brand exposure: scaling a brand without trademark protection",
    "Registry execution: CAC filings that need to be clean, accurate, and trackable",
  ];

  const snapshots = [
    {
      title: "Governance & Control Installation",
      clientType: "Founder-led company (growth stage)",
      challenge: "Approvals were informal; roles overlapped; decisions delayed",
      delivered:
        "Authority matrix + governance playbook + approval thresholds + record discipline",
      outcome:
        'Faster decisions, clearer accountability, reduced “who approved this?” disputes',
    },
    {
      title: "Legal-Tech & Compliance System Setup",
      clientType: "Operations-heavy team",
      challenge:
        "Multiple document versions; unclear “final”; missing audit-ready structure",
      delivered:
        "Template library + workflow routing + version control standard + evidence folder structure",
      outcome:
        "Clean document ownership, predictable approvals, easier retrieval during due diligence",
    },
    {
      title: "Data Protection & Privacy (Nigeria) Readiness",
      clientType: "Customer-data business",
      challenge:
        "Policies existed but no workflows, evidence, or vendor governance",
      delivered:
        "Gap assessment + data mapping + policy pack + vendor governance pack + request-handling workflow",
      outcome: "Structured privacy operations and audit readiness foundation",
    },
    {
      title: "Trademark & IP Protection (Nigeria-first + Partner Route)",
      clientType: "Growing brand",
      challenge: "Brand visibility increasing; protection not in place",
      delivered:
        "Filing coordination + milestone tracking + portfolio structure + renewals planning",
      outcome: "Clear ownership path, portfolio discipline, reduced future risk",
    },
    {
      title: "CAC Registry Services (Accredited Agent)",
      clientType: "New company / post-incorporation update",
      challenge: "Filing risk + documentation gaps",
      delivered:
        "Requirements checklist + filing coordination + tracking + clean records pack",
      outcome: "Clean registry execution and compliance-ready documentation set",
    },
  ];

  const sectors = [
    "Technology & fintech",
    "Education and training businesses",
    "HR / recruitment / workforce platforms",
    "Health services (data-heavy operations)",
    "SMEs and multi-entity groups",
  ];

  const standards = [
    "Scope clarity (no vague deliverables)",
    "Documentation discipline (controlled formats, storage, ownership)",
    "Tracking & milestones (status visibility and closure)",
    "Confidentiality (client protection is part of the service)",
    "Continuity thinking (structure that survives transitions)",
  ];

  return (
    <main className="relative">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          {/* subtle grid + glow (x-factor, restrained) */}
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(30,27,75,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,27,75,1)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,27,75,0.18),transparent_60%)] blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl tracking-tight text-foreground">
              Results that scale — delivered with structure and confidentiality.
            </h1>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              CSTL supports founders and organisations with governance, compliance systems,
              privacy readiness (Nigeria), trademark/IP protection, and CAC registry services.
              Many engagements are confidential—so we show proof through deliverables, outcomes,
              and anonymised snapshots.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/start">Start a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/start">Request a Proposal</Link>
              </Button>

              <div className="w-full" />

              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="secondary">Discreet by design</Badge>
                <Badge variant="secondary">Evidence-driven delivery</Badge>
                <Badge variant="secondary">Built for continuity</Badge>
              </div>
            </div>

            <div className="mt-8 h-px w-40 bg-[#C9A227]/40" />
          </div>
        </div>
      </section>

      {/* PROOF YOU CAN VERIFY */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-foreground">
            How we show results without exposing clients
          </h2>
          <p className="mt-2 text-muted-foreground">
            Because many engagements are private, we focus on what can be verified:
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {proof.map((item) => (
            <Card key={item} className="bg-card/80">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#C9A227]"
                  />
                  <p className="text-sm md:text-base text-foreground">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-foreground">
            The problems we’re hired to solve
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <Card key={p}>
              <CardContent className="pt-6">
                <p className="text-sm md:text-base text-foreground">{p}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* SNAPSHOTS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-foreground">
            Engagement snapshots
          </h2>
          <p className="mt-2 text-muted-foreground">
            Client identities withheld where required. Available evidence may be shared privately under NDA.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {snapshots.map((s) => (
            <Card key={s.title} className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C9A227]/40" />
              <CardHeader>
                <CardTitle className="text-base md:text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="text-muted-foreground">Client type</p>
                  <p className="text-foreground">{s.clientType}</p>
                </div>

                <div className="text-sm">
                  <p className="text-muted-foreground">Challenge</p>
                  <p className="text-foreground">{s.challenge}</p>
                </div>

                <div className="text-sm">
                  <p className="text-muted-foreground">What CSTL delivered</p>
                  <p className="text-foreground">{s.delivered}</p>
                </div>

                <div className="text-sm">
                  <p className="text-muted-foreground">Outcome</p>
                  <p className="text-foreground">{s.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTORS + STANDARD */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-cormorant)] text-xl">
                Sectors we commonly support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {sectors.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-foreground/60"
                  />
                  <p className="text-sm md:text-base text-foreground">{s}</p>
                </div>
              ))}
              <p className="pt-2 text-sm text-muted-foreground">
                We prioritise “structure-first” operators: founders, directors, and teams who want discipline.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-cormorant)] text-xl">
                Our operating standard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {standards.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-[#C9A227]"
                  />
                  <p className="text-sm md:text-base text-foreground">{s}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <Card className="border-[#C9A227]/25">
          <CardHeader>
            <CardTitle className="font-[family-name:var(--font-cormorant)] text-xl">
              Discreet by design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground">
              Some client work is not published publicly. Where needed, we can share selected evidence privately under NDA—without
              exposing sensitive company information.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-foreground">
              Want structure you can trust under pressure?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Start a project and we’ll route you to the right pillar and engagement path.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/start">Start a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/start">Request a Proposal</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/start">Book a Strategy Call</Link>
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              We provide advisory, systems, and filing coordination services. Where legal representation is required, clients may engage licensed counsel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
