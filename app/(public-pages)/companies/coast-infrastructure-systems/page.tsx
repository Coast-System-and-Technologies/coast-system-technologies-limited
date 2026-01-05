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
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";
import JsonLd from "@/components/insights/JsonLd";

const BASE_URL = "https://coastsystemtechnologies.com.ng";
const PAGE_PATH = "/companies/coast-infrastructure-systems";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

const OG_IMAGE = `${BASE_URL}/assets/og/companies-cisl.jpg`;
const CISL_SITE_URL = "https://coastinfrastructure.com.ng";

export const metadata: Metadata = {
  title: "Coast Infrastructure Systems Limited (CISL)",
  description:
    "Infrastructure systems delivery—solar, CCTV, networking, and procurement—executed reliably on-ground for operational continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title:
      "Coast Infrastructure Systems Limited (CISL) | Coast System & Technologies Limited",
    description:
      "Infrastructure systems delivery—solar, CCTV, networking, and procurement—executed reliably on-ground for operational continuity.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Coast Infrastructure Systems Limited (CISL) — Solar, CCTV, Networking & Procurement under CSTL governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coast Infrastructure Systems Limited (CISL) | CSTL",
    description:
      "Solar, CCTV, networking, and procurement—delivered with reliable on-ground execution.",
    images: [OG_IMAGE],
  },
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
  keywords: [
    "Coast Infrastructure Systems",
    "CISL",
    "solar installation Nigeria",
    "CCTV installation",
    "office networking",
    "procurement and deployment",
    "infrastructure systems",
    "Coast Group",
  ],
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
] as const;

const WHAT_WE_DO = [
  "Solar system sales, installation, and maintenance",
  "CCTV installation and configuration",
  "Office networking: routing, cabling, setup",
  "Equipment procurement with deployment support",
  "Field execution with documentation and handoffs",
] as const;

const WHY_CISL = [
  "On-ground execution: we don’t just advise—we deploy.",
  "Operational continuity: systems sized for real daily use.",
  "Documentation and handoff discipline for long-term maintenance.",
  "Procurement accountability and clean project coordination.",
] as const;

function SectionHeading({
  kicker,
  title,
  description,
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

      {/* Page H1 */}
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
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` },
      email: SITE?.contact?.email,
      telephone: SITE?.contact?.phoneTel,
      sameAs: SITE?.socials?.facebook ? [SITE.socials.facebook] : undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${PAGE_URL}#cisl`,
      name: "Coast Infrastructure Systems Limited",
      url: CISL_SITE_URL,
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
      description:
        "Infrastructure systems delivery—solar, CCTV, networking, and procurement—executed reliably on-ground for operational continuity.",
      areaServed: { "@type": "Country", name: "Nigeria" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CISL Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solar + Power Systems",
              description:
                "Sizing, procurement, installation, and support—built for reliable daily operation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CCTV Installation & Setup",
              description:
                "Camera planning, installation, configuration, and monitoring setup for secure premises.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Networking & Connectivity",
              description:
                "Office networking, routing, cabling, and configuration—stable connectivity for teams.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Procurement & Deployment",
              description:
                "Procure, deliver, and deploy equipment with documentation and accountability.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Coast Infrastructure Systems Limited (CISL) | Coast System & Technologies Limited",
      description:
        "Infrastructure systems delivery—solar, CCTV, networking, and procurement—executed reliably on-ground for operational continuity.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}#cisl` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-NG",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Companies",
          item: `${BASE_URL}/companies`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Coast Infrastructure Systems Limited (CISL)",
          item: PAGE_URL,
        },
      ],
    },
  ];

  return (
    <main id="cisl-main">
      <JsonLd data={jsonLd} />

      {/* Optional in-page skip link (best if your layout also has one) */}
      <a
        href="#cisl-summary-title"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to page content
      </a>

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="coastinfrastructure-limited-title"
      >
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <header className="relative cstl-container py-16 sm:py-20">
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
              <li aria-hidden="true" role="listitem">/</li><li role="listitem">
                <Link
                  href="/companies/"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                >
                  Companies
                </Link>
              </li>
              <li aria-hidden="true" role="listitem">/</li>
              <li aria-current="page" className="text-foreground/80" role="listitem">
                Coast Infrastructure Systems Limited
              </li>
            </ol>
          </nav>

          <SectionHeading
            kicker="Operating Company"
            title="Coast Infrastructure Systems Limited (CISL)"
            titleId="coast-infrastructure-systems-limited-title"
            description="We deliver infrastructure systems that power operations—solar, CCTV, networking, and procurement—with reliable on-ground execution."
          />

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

          {/* Premium external link strip */}
          <div
            className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 px-4 py-2 text-xs text-foreground/80"
            role="note"
            aria-label="Official CoastLink24 website"
          >
            <ExternalLink className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
            <span className="font-medium">Official CISL website:</span>
            <a
              href={CISL_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline underline-offset-4"
              aria-label="Visit Coast Infrastructure Systems Limited website (opens in a new tab)"
            >
              www.coastinfrastructure.com.ng <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
        </header>
      </section>

      {/* SUMMARY */}
      <section
        className="cstl-container py-14 sm:py-16"
        aria-labelledby="cisl-summary-title"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              What CISL does
            </div>

            <h2
              id="cisl-summary-title"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Infrastructure systems deployed with discipline
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Coast Infrastructure System Limited (CISL) is the Coast Group’s infrastructure systems operator. We design and deploy
              on-ground systems that power daily operations—energy, security, connectivity, and
              equipment procurement—built for reliability and continuity.
            </p>

            <ul className="mt-6 space-y-2" aria-label="Why CISL works well for teams" role="list">
              {WHY_CISL.map((x) => (
                <li key={x} className="flex gap-2 text-sm text-muted-foreground" role="listitem">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 text-[color:var(--accent)]"
                    aria-hidden="true"
                  />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <nav className="mt-8 flex flex-col sm:flex-row gap-3" aria-label="Related navigation">
              <Button asChild variant="outline">
                <Link href="/services" aria-label="Explore CSTL services">
                  Explore CSTL Services
                </Link>
              </Button>

              <Button asChild variant="ghost">
                <Link
                  href="/companies"
                  className="text-[color:var(--primary)]"
                  aria-label="Back to companies"
                >
                  Back to Companies
                </Link>
              </Button>
            </nav>
          </div>

          <div className="lg:col-span-5">
            <aside
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              aria-labelledby="cisl-card-title"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                  <Network className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                </div>
                <div>
                  <div
                    id="cisl-card-title"
                    className="font-heading text-lg text-[color:var(--primary)]"
                  >
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

              <ul className="mt-4 space-y-3" aria-label="Core work list">
                {WHAT_WE_DO.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                    <div
                      className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]"
                      aria-hidden="true"
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              {/* Official website strip */}
              <div
                className="rounded-2xl border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 p-4"
                role="note"
                aria-label="Official CISL website"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs tracking-widest text-muted-foreground uppercase">
                      Official website
                    </div>
                    <div className="mt-1 text-sm font-medium text-[color:var(--primary)]">
                      www.coastinfrastructure.com.ng
                    </div>
                  </div>

                  <a
                    href={CISL_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-[color:var(--accent)]/60 hover:bg-[color:var(--accent)]/10 transition"
                    aria-label="Open CISL official website in a new tab"
                  >
                    Visit <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-3 h-px w-full cstl-seal-line opacity-60" aria-hidden="true" />

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  For catalog, project updates, and infrastructure-specific enquiries, use the CISL site.
                </p>
              </div>

              <Separator className="my-6" />

              <div className="text-xs text-muted-foreground leading-relaxed">
                Field execution with documentation and continuity under CSTL oversight.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="border-y border-border bg-card/40"
        aria-labelledby="cisl-capabilities-title"
      >
        <div className="cstl-container py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Capabilities
            </div>

            <h2
              id="cisl-capabilities-title"
              className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
            >
              Systems that keep operations running
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Practical infrastructure delivery, sized and configured for daily use—not guesswork.
            </p>
          </div>

          <div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label="CISL capabilities"
          >
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  role="listitem"
                  className="rounded-2xl border border-border bg-card p-6"
                  aria-label={c.title}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg text-[color:var(--primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </article>
              );
            })}
          </div>

          <aside
            className="mt-10 rounded-2xl border border-border bg-background p-6"
            aria-label="Continuity note"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card">
                <Wrench className="h-5 w-5 text-[color:var(--primary)]" aria-hidden="true" />
              </div>
              <div className="max-w-2xl">
                <h3 className="font-heading text-lg text-[color:var(--primary)]">
                  Continuity matters
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We emphasize documentation, handoffs, and support so installed systems remain
                  maintainable—especially for growing teams and shared facilities.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="cstl-container py-14 sm:py-16" aria-labelledby="cisl-cta-title">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Start with a clean intake
              </div>

              <h2
                id="cisl-cta-title"
                className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--primary)]"
              >
                Deploy infrastructure with reliability—and accountability.
              </h2>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tell us your requirements. CSTL coordinates engagement and routes execution to CISL where appropriate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
              <Button
                asChild
                className="bg-[color:var(--primary)] text-white hover:opacity-90"
              >
                <Link href="/start" aria-label="Start a project with CSTL">
                  Start a Project
                </Link>
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
      </section>
    </main>
  );
}
