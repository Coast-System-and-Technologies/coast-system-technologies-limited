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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";

const PAGE_URL = `${BASE_URL}/companies/coast-research-technology`;
const OG_IMAGE = `${BASE_URL}/assets/og/companies-crt.jpg`;
const CRT_SITE_URL = "https://coastresearchtechnology.com/";

export const metadata: Metadata = {
  title: "Coast Research Technology (CRT)",
  description:
    "Software engineering, tech training, product delivery, and app maintenance—building real-world systems and developing talent with disciplined execution.",
  keywords: [
    "Coast Research Technology",
    "CRT",
    "software engineering Nigeria",
    "tech training",
    "product delivery",
    "application maintenance",
    "backend development",
    "frontend development",
    "CSTL",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Coast Research Technology (CRT) | Coast System & Technologies Limited",
    description:
      "Software engineering, tech training, product delivery, and app maintenance—built under CSTL governance.",
    url: PAGE_URL,
    locale: "en_NG",
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
      "Software engineering, tech training, product delivery, and app maintenance—built under CSTL governance.",
    images: [OG_IMAGE],
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
    title: "Tech Training",
    description:
      "Structured training programs with mentorship and practical projects—focused on competence and delivery habits.",
    icon: GraduationCap,
  },
  {
    title: "Product Delivery",
    description:
      "From idea → MVP → production—delivery discipline, QA, documentation, and launch support.",
    icon: Sparkles,
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ongoing support for continuity—bug fixes, upgrades, monitoring, performance tuning, and improvements.",
    icon: Wrench,
  },
];

const WHAT_WE_DO = [
  "Web and mobile product development",
  "Backend architecture & integrations",
  "Fintech and lending infrastructure support",
  "App maintenance contracts and continuity support",
  "Tech training programs (beginner → job-ready tracks)",
  "Mentorship and project-based coaching",
  "Corporate/team upskilling (workshops where needed)",
];

const WHY_CRT = [
  "Training is core: structured programs built around mentorship and real project output.",
  "Delivery discipline: clean handoffs, documentation, and consistent execution.",
  "Engineering depth: practical architecture for real operations and constraints.",
  "Continuity mindset: we don’t just build—we support, stabilize, and upgrade.",
];

const TRAINING_TRACKS = [
  {
    title: "Career Tracks (Beginner → Job-Ready)",
    description:
      "Structured programs that build fundamentals, portfolio projects, and practical delivery habits.",
    icon: Users,
  },
  {
    title: "Mentorship & Project Coaching",
    description:
      "Guided delivery with reviews, checkpoints, and feedback—so learners build real competence and output.",
    icon: ClipboardCheck,
  },
  {
    title: "Team Upskilling",
    description:
      "Workshops for teams and organizations—focused on delivery patterns, tooling, and modern workflows.",
    icon: GraduationCap,
  },
];

function PageHeading({
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
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </p>
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
  const crtOrgId = `${PAGE_URL}/#crt`;
  const crtOfferCatalogId = `${PAGE_URL}/#crt-offer-catalog`;
  const primaryImageId = `${PAGE_URL}/#primaryimage`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Coast System & Technologies Limited",
      url: `${BASE_URL}/`,
      inLanguage: "en-NG",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Coast System & Technologies Limited",
      url: `${BASE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/logo.png`,
      },
      email: "executive.office@coastsystemtechnologies.com.ng",
      telephone: "+2349136860226",
      sameAs: ["https://www.facebook.com/profile.php?id=61576938838523"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": crtOrgId,
      name: "Coast Research Technology",
      url: CRT_SITE_URL,
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
      description:
        "Software engineering, tech training, product delivery, and app maintenance—building real-world systems and developing talent with disciplined execution.",
      hasOfferCatalog: { "@id": crtOfferCatalogId },
      knowsAbout: [
        "Software development",
        "Tech training",
        "Product delivery",
        "Application maintenance",
        "Systems engineering",
        "Team upskilling",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": crtOfferCatalogId,
      name: "Coast Research Technology services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Engineering",
            description:
              "Backend + frontend engineering for stable, secure, scalable products.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tech Training",
            description:
              "Structured training programs with mentorship and practical projects.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Delivery",
            description:
              "Delivery discipline from idea → MVP → production with QA and documentation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Maintenance & Support",
            description:
              "Continuity support: upgrades, fixes, monitoring, performance improvements.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": primaryImageId,
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Coast Research Technology (CRT) | Coast System & Technologies Limited",
      description:
        "Software engineering, tech training, product delivery, and app maintenance—built under CSTL governance.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": crtOrgId },
      mainEntity: { "@id": crtOrgId },
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      primaryImageOfPage: { "@id": primaryImageId },
      inLanguage: "en-NG",
      potentialAction: {
        "@type": "ReadAction",
        target: [PAGE_URL],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Companies",
          item: `${BASE_URL}/companies`,
        },
        { "@type": "ListItem", position: 3, name: "Coast Research Technology", item: PAGE_URL },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <div className="relative cstl-container py-16 sm:py-20">
          <PageHeading
            kicker="Operating Company"
            title="Coast Research Technology (CRT)"
            description="We build real-world software systems, run structured tech training, and support products for long-term stability and continuity."
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
              <Link href="/start">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact CSTL</Link>
            </Button>

            <div className="sm:ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
              Built under CSTL governance
            </div>
          </div>

          {/* Premium external link strip */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 px-4 py-2 text-xs text-foreground/80">
            <ExternalLink className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
            <span className="font-medium">Official CRT website:</span>
            <a
              href={CRT_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline underline-offset-4"
              aria-label="Visit Coast Research Technology website (opens in a new tab)"
            >
              coastresearchtechnology.com <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
        </div>
      </header>

      {/* SUMMARY */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-summary-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              What CRT does
            </p>

            <h2
              id="crt-summary-title"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Engineering + Training—built with delivery discipline
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              CRT is the Coast Group’s software engineering and tech training company. We design, build, and
              maintain products across fintech, internal operations, and digital platforms—while also running
              structured training programs that develop competent, delivery-ready talent.
            </p>

            <ul className="mt-6 space-y-2" aria-label="Why teams choose CRT">
              {WHY_CRT.map((x) => (
                <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link href="/services">Explore CSTL Services</Link>
              </Button>

              <Button asChild variant="ghost">
                <Link href="/companies" className="text-[color:var(--primary)]">
                  Back to Companies
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm" aria-label="CRT overview">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                  <Cpu className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-heading text-lg text-[color:var(--primary)]">
                    CRT at a glance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Engineering • Training • Delivery • Maintenance
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Core services
              </div>
              <ul className="mt-4 space-y-3" aria-label="CRT core services list">
                {WHAT_WE_DO.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <div className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-4">
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Official website
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  For training schedules, service details, and updates directly from CRT.
                </p>

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

                <p className="mt-2 text-[11px] text-muted-foreground">Opens in a new tab.</p>
              </div>

              <Separator className="my-6" />

              <p className="text-xs text-muted-foreground leading-relaxed">
                Mission-aligned delivery under CSTL’s governance and shared services.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="border-y border-border bg-card/40" aria-labelledby="crt-training-title">
        <div className="cstl-container py-14 sm:py-16">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Training
          </p>

          <h2
            id="crt-training-title"
            className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
          >
            Training designed for output—not noise
          </h2>

          <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
            Structured programs built around mentorship, projects, and delivery habits—so learning translates into competence.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {TRAINING_TRACKS.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <div className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                    {t.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
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
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-capabilities-title">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Capabilities
        </p>

        <h2
          id="crt-capabilities-title"
          className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
        >
          Built for real-world systems
        </h2>

        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          CRT builds and supports software—and develops talent—under real operating conditions.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6" role="listitem">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
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
      </section>

      {/* CTA + DISCLAIMER */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="crt-cta-title">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Start with a clean intake
              </p>

              <h3
                id="crt-cta-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Build software, train talent, and keep systems stable.
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us what you need—product build, maintenance, or training. CSTL coordinates the engagement and routes execution to CRT where appropriate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                <Link href="/start">Start a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact CSTL</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8" />
          <p className="text-xs text-muted-foreground">{SITE.signature}</p>
        </div>

        <MicroDisclaimer />
      </section>
    </main>
  );
}
