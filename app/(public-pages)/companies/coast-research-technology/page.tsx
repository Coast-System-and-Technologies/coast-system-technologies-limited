// app/(public-pages)/companies/coast-research-technology/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  GraduationCap,
  Boxes,
  Sparkles,
  ExternalLink,
  Users,
  ClipboardCheck,
  School,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import JsonLd from "@/components/insights/JsonLd";

import Reveal, { RevealItem } from "@/components/motion/reveal";

const PAGE_URL = `${BASE_URL}/companies/coast-research-technology`;
const OG_IMAGE = `${BASE_URL}/assets/og/companies-crt.jpg`;

// ✅ Normalize (no trailing slash)
const CSTL_SITE_URL = BASE_URL;
const CRT_SITE_URL = "https://www.coastresearchtechnology.com";

// ✅ Must be a publicly accessible image URL (recommended: host a real file)
const CRT_LOGO_URL = `${CRT_SITE_URL}/assets/crt_logo.webp`;

// ✅ Use CRT domain for CRT organization identity
const CRT_ORG_ID = `${CRT_SITE_URL}/#organization`;

export const metadata: Metadata = {
  title: "Coast Research Technology (CRT)",
  description:
    "Software engineering, product delivery, app maintenance, and tech training—building real-world systems and supporting them for continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Coast Research Technology (CRT) | Coast System & Technologies Limited",
    description:
      "Software engineering, product delivery, app maintenance, and tech training—built under CSTL governance.",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Coast Research Technology (CRT) | Coast System & Technologies Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coast Research Technology (CRT)",
    description:
      "Software engineering, product delivery, app maintenance, and tech training—built under CSTL governance.",
    images: [OG_IMAGE],
  },
  keywords: [
    "Coast Research Technology",
    "CRT",
    "software engineering Nigeria",
    "product delivery",
    "application maintenance",
    "app support",
    "web and mobile development",
    "backend engineering",
    "API development",
    "tech training Nigeria",
    "internship programs",
    "software development company",
    "Coast System and Technologies Limited",
    "CSTL",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
    title: "Tech Training",
    description:
      "Structured training programs with mentorship and practical projects—designed to build real industry capacity.",
    icon: GraduationCap,
  },
] as const;

const WHAT_WE_DO = [
  "Web and mobile product development",
  "Backend architecture & integrations",
  "Fintech and lending infrastructure support",
  "Operations tooling (workflows, admin systems)",
  "Maintenance contracts and continuity support",
  "Tech training programs and capacity building",
] as const;

const WHY_CRT = [
  "Delivery discipline: clean handoffs, documentation, and consistency.",
  "Engineering depth: practical architecture for real operations.",
  "Continuity mindset: we don’t just build—we support and stabilize.",
  "Training culture: structured learning guided by experienced instructors.",
] as const;

const TRAINING_TRACKS = [
  {
    title: "Full-Stack Development",
    description:
      "Build modern web apps end-to-end: frontend, backend, database, and deployment fundamentals.",
    icon: Boxes,
  },
  {
    title: "Backend Engineering",
    description:
      "APIs, authentication, integrations, databases, architecture patterns, and reliability basics.",
    icon: Cpu,
  },
  {
    title: "Data Analysis Foundations",
    description:
      "Data cleaning, analysis workflows, dashboards, and practical reporting for real use-cases.",
    icon: ClipboardCheck,
  },
  {
    title: "Career-Ready Project Practice",
    description:
      "Guided projects that reinforce delivery discipline—requirements, iteration, QA, and handoffs.",
    icon: Sparkles,
  },
] as const;

function SectionHeading({
  kicker,
  title,
  description,
  titleId,
}: {
  kicker?: string;
  title: string;
  description?: string;
  titleId: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </div>
      ) : null}

      <h1
        id={titleId}
        className="mt-2 font-heading text-3xl sm:text-4xl text-[color:var(--primary)]"
      >
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

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-sm hover:border-[color:var(--accent)]/35",
        "motion-reduce:transform-none motion-reduce:transition-none",
        "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
        "before:bg-[radial-gradient(70%_60%_at_50%_0%,rgba(201,162,39,0.12),transparent_65%)]",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function CoastResearchTechnologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${CSTL_SITE_URL}/#website`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: `${CSTL_SITE_URL}/`,
        publisher: { "@id": `${CSTL_SITE_URL}/#organization` },
        inLanguage: "en-NG",
      },
      {
        "@type": "Organization",
        "@id": `${CSTL_SITE_URL}/#organization`,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: SITE.shortName,
        url: `${CSTL_SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${CSTL_SITE_URL}/#logo`,
          url: `${CSTL_SITE_URL}/assets/logo.png`,
        },
        email: SITE.contact.email,
        telephone: SITE.contact.phoneTel,
        identifier: {
          "@type": "PropertyValue",
          name: "RC Number",
          value: SITE.trust.rc,
        },
        sameAs: SITE.socials.facebook ? [SITE.socials.facebook] : undefined,
      },
      {
        "@type": "Organization",
        "@id": CRT_ORG_ID,
        name: "Coast Research Technology",
        alternateName: "CRT",
        url: CRT_SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${CRT_SITE_URL}/#logo`,
          url: CRT_LOGO_URL,
        },
        parentOrganization: { "@id": `${CSTL_SITE_URL}/#organization` },
        description:
          "Software engineering, product delivery, app maintenance, and tech training—building real-world systems and supporting them for continuity.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${PAGE_URL}/#crt-offers`,
          name: "CRT Services",
          keywords:
            "Coast Research Technology, CRT, software engineering Nigeria, product delivery, app maintenance, tech training, backend development, frontend development, fintech systems",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Software Engineering & Product Delivery",
                description:
                  "Design and build stable software products with disciplined delivery and clean architecture.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "App Maintenance & Support",
                description:
                  "Ongoing support for stability: upgrades, fixes, monitoring, and continuity improvements.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tech Training",
                description:
                  "Structured training programs with mentorship and practical projects—delivered in calm, well-paced classrooms with small cohorts and industry-expert instructors.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "Coast Research Technology (CRT) | Coast System & Technologies Limited",
        description:
          "Software engineering, product delivery, app maintenance, and tech training—built under CSTL governance.",
        isPartOf: { "@id": `${CSTL_SITE_URL}/#website` },
        mainEntity: { "@id": CRT_ORG_ID },
        breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        inLanguage: "en-NG",
        keywords:
          "Coast Research Technology, CRT, software engineering, product delivery, app maintenance, tech training, programming training, Nigeria, fintech systems, web development, mobile development",
        about: [
          { "@id": CRT_ORG_ID },
          { "@type": "Thing", name: "Software Engineering" },
          { "@type": "Thing", name: "Tech Training" },
          { "@type": "Thing", name: "Application Maintenance" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${CSTL_SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Companies", item: `${CSTL_SITE_URL}/companies` },
          { "@type": "ListItem", position: 3, name: "Coast Research Technology", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main id="main-content" aria-labelledby="coast-research-technology-title">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="coast-research-technology-title"
      >
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <header className="relative cstl-container py-16 sm:py-20">
          <Reveal variant="fade" duration={0.28} y={6}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground" role="list">
                <li role="listitem">
                  <Link
                    href="/"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li role="listitem">
                  <Link
                    href="/companies"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Companies
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  Coast Research Technology
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.5}>
            <SectionHeading
              kicker="Operating Company"
              title="Coast Research Technology (CRT)"
              titleId="coast-research-technology-title"
              description="CRT build real-world software products and systems—and provide ongoing application support for stability and continuity."
            />
          </Reveal>

          <Reveal delay={0.12} y={10} duration={0.5}>
            <div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              role="group"
              aria-label="Primary actions"
            >
              <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                <Link href="/start" aria-label="Start a project with CSTL">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/contact" aria-label="Contact CSTL">
                  Contact CSTL
                </Link>
              </Button>

              <div className="sm:ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                Built under CSTL governance
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={10} duration={0.5}>
            <div
              className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 px-4 py-2 text-xs text-foreground/80"
              role="note"
              aria-label="Official Coast Research Technology website"
            >
              <ExternalLink className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
              <span className="font-medium">Official CRT website:</span>
              <a
                href={CRT_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline underline-offset-4"
                aria-label="Visit Coast Research Technology website (opens in a new tab)"
              >
                www.coastresearchtechnology.com{" "}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} variant="fade" duration={0.25}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
          </Reveal>
        </header>
      </section>

      {/* SUMMARY */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-summary-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal variant="fade" duration={0.25} y={6}>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                What CRT does
              </div>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.5}>
              <h2
                id="crt-summary-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Engineering teams trust for delivery—and continuity
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.5}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Coast Research Technology (CRT) is the Coast Group’s software engineering arm: we design, build, and maintain products
                across fintech, internal operations, and digital platforms. Alongside delivery, we run
                structured training designed to help people gain real, practical competence.
              </p>
            </Reveal>

            <Reveal delay={0.14} y={10} duration={0.5}>
              <ul className="mt-6 space-y-2" aria-label="Why teams choose CRT" role="list">
                {WHY_CRT.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} y={10} duration={0.5}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Navigation actions">
                <Button asChild variant="outline">
                  <Link href="/services" aria-label="Explore CSTL services">
                    Explore CSTL Services
                  </Link>
                </Button>

                <Button asChild variant="ghost">
                  <Link href="/companies" className="text-[color:var(--primary)]" aria-label="Back to companies page">
                    Back to Companies
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5" aria-label="CRT summary card">
            <Reveal y={10} duration={0.55}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                    <Cpu className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-heading text-lg text-[color:var(--primary)]">
                      CRT at a glance
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Engineering • Product • Maintenance • Training
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Core work
                </div>

                <ul className="mt-4 space-y-3" aria-label="CRT core work areas" role="list">
                  {WHAT_WE_DO.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <div
                  className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-4"
                  role="note"
                  aria-label="Official CRT website callout"
                >
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">
                    Official website
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    For services, training updates, and announcements directly from CRT.
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full border-[color:var(--accent)]/35 bg-background hover:bg-[color:var(--accent)]/10"
                  >
                    <a
                      href={CRT_SITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Coast Research Technology website (opens in a new tab)"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Visit CRT website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>

                  <div className="mt-2 text-[11px] text-muted-foreground">
                    Opens in a new tab.
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-xs text-muted-foreground leading-relaxed">
                  Mission-aligned delivery under CSTL’s governance and shared services.
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-border bg-card/40" aria-labelledby="crt-capabilities-title">
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <Reveal variant="fade" duration={0.25} y={6}>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Capabilities
              </div>
            </Reveal>

            <Reveal delay={0.05} y={10} duration={0.5}>
              <h2
                id="crt-capabilities-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Built for real-world systems
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={10} duration={0.5}>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Coast Research Technology builds and supports software that must work under real operating conditions—and trains
                people to become effective in real delivery environments.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="CRT capabilities">
            {CAPABILITIES.map((c, idx) => {
              const Icon = c.icon;
              return (
                <RevealItem key={c.title} delay={0.06 + idx * 0.08} y={10} duration={0.5}>
                  <PremiumCard>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                    </div>
                    <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                      {c.title}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
                  </PremiumCard>
                </RevealItem>
              );
            })}
          </div>

          <Reveal delay={0.12} y={10} duration={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="cta">
                <Link href="/start">Request Training Intake</Link>
              </Button>

              <Button asChild variant="outline">
                <a
                  href={CRT_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore training and programs on the official CRT website (opens in a new tab)"
                  className="inline-flex items-center gap-2"
                >
                  Explore CRT website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAINING */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-training-title">
        <div className="max-w-2xl">
          <Reveal variant="fade" duration={0.25} y={6}>
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Tech Training
            </div>
          </Reveal>

          <Reveal delay={0.05} y={10} duration={0.5}>
            <h2
              id="crt-training-title"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Structured learning with real delivery discipline
            </h2>
          </Reveal>

          <Reveal delay={0.1} y={10} duration={0.5}>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Training at Coast Research Technology is practical: structured curriculum, mentorship, projects, and guidance
              designed to build competence—not just theory.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Training tracks">
          {TRAINING_TRACKS.map((t, idx) => {
            const Icon = t.icon;
            return (
              <RevealItem key={t.title} delay={0.06 + idx * 0.08} y={10} duration={0.5}>
                <PremiumCard>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                    {t.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </PremiumCard>
              </RevealItem>
            );
          })}
        </div>

        <Reveal y={10} duration={0.55}>
          <div className="mt-10 rounded-2xl border border-border bg-background p-6" role="note" aria-label="Classroom experience">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card">
                <School className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
              </div>

              <div className="max-w-2xl">
                <div className="font-heading text-lg text-[color:var(--primary)]">
                  Classroom experience
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  CRT classrooms are comfortable, quiet, serene, and clean—with a calm ambiance that helps
                  students concentrate and learn better. We also keep cohorts small, so instructors can pay
                  attention to each student.
                </p>

                <ul className="mt-4 space-y-2" aria-label="Training environment highlights" role="list">
                  <li className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>Comfortable, clean, serene classroom atmosphere</span>
                  </li>
                  <li className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <Users className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>Not overcrowded—better focus and instructor attention per learner</span>
                  </li>
                  <li className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                    <span>Industry-expert instructors with practical delivery experience</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3" role="group" aria-label="Training actions">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[color:var(--accent)]/35 bg-background hover:bg-[color:var(--accent)]/10"
                  >
                    <a
                      href={CRT_SITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View CRT training details on the official CRT website (opens in a new tab)"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      View training on CRT site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>

                  <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                    <Link href="/start" aria-label="Start a project or training inquiry with CSTL">
                      Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-cta-title">
        <Reveal y={10} duration={0.55}>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Start with a clean intake
                </div>

                <h2
                  id="crt-cta-title"
                  className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
                >
                  Ship software with discipline—and keep it stable.
                </h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Tell us what you’re building. CSTL coordinates the engagement and routes execution to CRT
                  where appropriate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta">
                  <Link href="/start">Start a Project</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/contact" aria-label="Contact CSTL">
                    Contact CSTL
                  </Link>
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="text-xs text-muted-foreground">{SITE.signature}</div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
