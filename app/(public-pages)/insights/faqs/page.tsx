// app/insights/faqs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import FaqSearch, { type FaqGroup } from "@/components/insights/FaqSearch.client";
import Reveal from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

import { BASE_URL } from "@/lib/site-url";

const PAGE_URL = `${BASE_URL}/insights/faqs`;
const OG_IMAGE = `${BASE_URL}/assets/og/faqs.jpg`;

export const metadata: Metadata = {
  title: "FAQs | Coast System & Technologies Limited Insights",
  description:
    "Answers to common questions on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry services—built for clarity and continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "FAQs | Coast System & Technologies Limited",
    description:
      "Clear answers on governance, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "FAQs | Coast System & Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Coast System & Technologies Limited",
    description:
      "Clear answers on governance, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.",
    images: [OG_IMAGE],
  },
};

export default function FaqsPage() {
  const groups: FaqGroup[] = [
    {
      title: "Governance & Structuring",
      ctaLabel: "Explore Governance & Structuring",
      ctaHref: "/services/governance-structuring",
      items: [
        {
          q: "Do small companies really need governance?",
          a: "Yes. Governance reduces confusion, protects decision-making, and prevents founder risk as the team grows. It installs clarity on roles, approvals, and authority before complexity increases.",
        },
        {
          q: "What does 'approval matrix' mean in practice?",
          a: "A simple rule-set that states who can approve what (and up to what limit), how approvals are routed, and where records are stored—so decisions are faster and auditable.",
        },
        {
          q: "How do we reduce decision delays without chaos?",
          a: "Define decision owners, set thresholds, create escalation paths, and standardise how approvals are requested and archived. The goal is repeatability—less debate, fewer bottlenecks.",
        },
      ],
    },
    {
      title: "Legal-Tech & Compliance Systems",
      ctaLabel: "Explore Legal-Tech & Compliance Systems",
      ctaHref: "/services/legaltech-compliance-systems",
      items: [
        {
          q: "Is this 'contract automation'?",
          a: "Not legal representation. This is internal document control + workflows: templates, routing, version control, ownership, audit trails, and obligation tracking—so your organisation can operate correctly.",
        },
        {
          q: "What's the difference between templates and a documentation system?",
          a: "Templates are files. A documentation system includes naming rules, storage structure, version control, approval routing, ownership, and change logs—so documents stay usable and controlled over time.",
        },
        {
          q: "Can CSTL standardise our contracts and approvals?",
          a: "Yes. We can build a template library + control rules + routing workflows that fit your tools (Drive/M365/Notion) and install the system with adoption guidance.",
        },
      ],
    },
    {
      title: "Data Protection & Privacy (Nigeria)",
      ctaLabel: "Explore Data Protection & Privacy",
      ctaHref: "/services/data-protection-privacy",
      items: [
        {
          q: "Do we need NDPA/NDPR compliance if we're small?",
          a: "If you collect or store personal data (staff, customers, vendors), you need privacy readiness. Small size does not remove risk—incidents, audits, and partner requirements can still apply.",
        },
        {
          q: "What documents do we need for privacy readiness?",
          a: "Typically: privacy policy/notice, internal data protection policy, data processing records, vendor/processor clauses, breach response process, and basic staff guidance.",
        },
        {
          q: "Can you help if we already have policies?",
          a: "Yes. We can audit what exists, restructure for clarity, assign ownership, and convert policies into a working system with workflows and controls.",
        },
      ],
    },
    {
      title: "Trademark & IP Protection (NIPO)",
      ctaLabel: "Explore Trademark & IP Protection",
      ctaHref: "/services/trademark-ip",
      items: [
        {
          q: "When should we trademark our brand?",
          a: "Before major marketing, partnerships, or expansion—when the name starts carrying real value. Early filing reduces disputes and protects ownership.",
        },
        {
          q: "What do you need from us to file a trademark?",
          a: "Brand name/mark, logo (if applicable), what goods/services you provide, and ownership details. We then guide classification and prepare filing steps.",
        },
        {
          q: "How long does trademark registration take?",
          a: "Timelines vary by process stage and registry workflow. The important part is filing early and tracking status consistently to avoid unnecessary delays.",
        },
      ],
    },
    {
      title: "CAC Registry Services (Accredited Agent)",
      ctaLabel: "Explore CAC Registry Services",
      ctaHref: "/services/cac-registry",
      items: [
        {
          q: "What can CSTL do as a CAC accredited agent?",
          a: "Coordinate incorporation and post-inc filings cleanly: document collection, preparation guidance, submission, status tracking, and resolving common process issues.",
        },
        {
          q: "What do you need to incorporate or file post-inc changes?",
          a: "Basic identity details for directors/shareholders, proposed names (if new), share capital intent, and the specific filing request. We provide a checklist once you submit a brief.",
        },
        {
          q: "How long do CAC filings take?",
          a: "Depends on filing type and CAC processing time. We focus on correctness, clean submissions, and status tracking—so avoidable rejections don't create delays.",
        },
      ],
    },
  ];

  const faqMainEntity = groups.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    }))
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Coast System & Technologies Limited",
      url: `${BASE_URL}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Coast System & Technologies Limited",
      url: `${BASE_URL}/`,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` },
      email: "executive.office@coastsystemtechnologies.com.ng",
      telephone: "+2349136860226",
      sameAs: ["https://www.facebook.com/profile.php?id=61576938838523"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "FAQs | Coast System & Technologies Limited",
      description:
        "Frequently asked questions on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry services.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      mainEntity: faqMainEntity,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: "FAQs", item: PAGE_URL },
      ],
    },
  ];

  return (
    <main className="cstl-container py-16 sm:py-20 md:py-24">
      <JsonLd data={jsonLd} />

      <header className="w-full space-y-6">
        <Reveal variant="fade" duration={0.32} y={6}>
          <p className="text-xs font-medium tracking-widest text-[color:var(--accent)] uppercase">
            Insights
          </p>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[color:var(--primary)]">
            FAQs
          </h1>
        </Reveal>

        <Reveal delay={0.05} variant="fade" duration={0.35} y={8}>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Clear answers to common questions on governance, compliance systems, privacy (Nigeria),
            trademark/IP (NIPO), and CAC registry execution.
          </p>
        </Reveal>

        <Reveal delay={0.08} variant="fade" duration={0.3}>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/start" className="gap-2">
                Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact CSTL</Link>
            </Button>
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.06} variant="fade" duration={0.4} y={12} className="mt-12">
        <FaqSearch groups={groups} />
      </Reveal>

      <Reveal delay={0.1} variant="fade" duration={0.35} y={8}>
        <section className="mt-16 rounded-2xl border border-border bg-card/60 p-8 sm:p-10">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[color:var(--primary)]">
            Not sure which pillar applies?
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Send a short brief. We'll route you to the right service and respond with next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/start">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/start?intent=quote">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12} variant="fade" duration={0.25}>
        <div className="mt-12">
          <MicroDisclaimer />
        </div>
      </Reveal>
    </main>
  );
}
