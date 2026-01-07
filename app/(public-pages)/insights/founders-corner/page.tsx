// app/(public-pages)/insights/founders-corner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import PillarChips from "@/components/insights/PillarChips";

import Reveal, { RevealItem } from "@/components/motion/reveal";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import { getPostsByType, formatDate } from "@/lib/insights/content";
import type { PillarTag } from "@/components/insights/PillarChips";

const PAGE_PATH = "/insights/founders-corner";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

// Use an existing OG fallback you already have.
// If you later create /assets/og/founders-corner.jpg, swap this.
const OG_IMAGE = `${BASE_URL}/assets/og/insights.jpg`;

type SearchParamsShape = { tag?: string };
type PageProps = { searchParams?: SearchParamsShape | Promise<SearchParamsShape> };

async function unwrapSearchParams(sp?: PageProps["searchParams"]) {
  return await Promise.resolve(sp ?? {});
}

export const metadata: Metadata = {
  title: "Founder’s Corner",
  description:
    "Short executive columns from Coast System & Technologies Limited on governance, control, continuity, and disciplined execution.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Founder’s Corner | Coast System & Technologies Limited",
    description:
      "Short executive columns on governance, control, continuity, and disciplined execution.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Founder’s Corner | Coast System & Technologies Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder’s Corner | Coast System & Technologies Limited",
    description:
      "Short executive columns on governance, control, continuity, and disciplined execution.",
    images: [OG_IMAGE],
  },
  keywords: [
    "Founder’s Corner",
    "CSTL Insights",
    "governance",
    "operating systems",
    "decision rights",
    "risk control",
    "continuity",
    "documentation discipline",
    "Order Strategy Legacy",
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
        "relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6",
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

function postHref(slug: string) {
  return `/insights/founders-corner/${slug}`;
}

export default async function FoundersCornerIndex({ searchParams }: PageProps) {
  const { tag } = await unwrapSearchParams(searchParams);

  const posts = getPostsByType("founders-corner");
  const activeTag = (tag || "").trim();

  const filtered = activeTag
    ? posts.filter((p) => p.pillarTags?.includes(activeTag as PillarTag))
    : posts;

  // Cap for schema (avoid huge graphs)
  const schemaList = filtered.slice(0, 24);

  const url = `${PAGE_URL}${activeTag ? `?tag=${encodeURIComponent(activeTag)}` : ""}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: `${BASE_URL}/`,
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-NG",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: SITE.shortName,
        url: `${BASE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/assets/logo.png`,
        },
        email: SITE.contact.email,
        telephone: SITE.contact.phoneTel,
        identifier: SITE?.trust?.rc
          ? { "@type": "PropertyValue", name: "RC Number", value: SITE.trust.rc }
          : undefined,
        sameAs: SITE?.socials?.facebook ? [SITE.socials.facebook] : undefined,
      },
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url,
        name: `Founder’s Corner | ${SITE.name}`,
        description:
          "Short executive columns on governance, control, continuity, and disciplined execution.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-NG",
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        keywords:
          "Founder’s Corner, CSTL, governance, control, continuity, operating systems, decision rights, risk discipline",
        mainEntity: {
          "@type": "ItemList",
          "@id": `${PAGE_URL}#itemlist`,
          numberOfItems: schemaList.length,
          itemListElement: schemaList.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Article",
              name: p.title,
              url: `${BASE_URL}${postHref(p.slug)}`,
              datePublished: p.publishedAtISO,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: "Founder’s Corner", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main id="main-content" aria-labelledby="founders-corner-title">
      <JsonLd data={jsonLd} />

      {/* Skip link */}
      <a
        href="#fc-list"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to page content
      </a>

      {/* HERO (CSTL style) */}
      <section className="relative overflow-hidden border-b border-border" aria-labelledby="founders-corner-title">
        <div className="absolute inset-0 cstl-hero-bg opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 cstl-grid opacity-25" aria-hidden="true" />

        <header className="relative cstl-container py-16 sm:py-20">
          <Reveal variant="fade" duration={0.28} y={6}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground" role="list">
                <li role="listitem">
                  <Link
                    href="/"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li role="listitem">
                  <Link
                    href="/insights"
                    className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-foreground"
                  >
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true" role="listitem">/</li>
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  Founder’s Corner
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.55}>
            <div className="max-w-3xl space-y-4">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Insights</p>

              <h1
                id="founders-corner-title"
                className="font-heading text-3xl sm:text-4xl text-[color:var(--primary)]"
              >
                Founder’s Corner
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground">
                Short, executive notes on governance, control, continuity, and disciplined execution — written for operators.
              </p>

              <div className="flex flex-wrap gap-3" role="group" aria-label="Primary actions">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start" aria-label="Start a project with CSTL">
                    Start a Project
                  </Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/insights" aria-label="Back to Insights hub">
                    Back to Insights
                  </Link>
                </Button>

                {activeTag ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                    <span className="font-medium text-foreground/80">Filter:</span>
                    <span className="font-medium text-[color:var(--primary)]">{activeTag}</span>
                    <Link
                      href="/insights/founders-corner"
                      className="ml-1 underline underline-offset-4 hover:text-foreground"
                      aria-label="Clear filter"
                    >
                      Clear
                    </Link>
                  </div>
                ) : null}
              </div>

              <p className="text-xs text-muted-foreground">
                CAC Registered{SITE?.trust?.rc ? ` (RC ${SITE.trust.rc})` : ""} • Nigeria-based • Confidential workflow
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18} variant="fade" duration={0.25}>
            <div className="mt-10 h-px w-full cstl-seal-line opacity-70" aria-hidden="true" />
          </Reveal>
        </header>
      </section>

      <div className="cstl-container py-14 sm:py-16">
        {/* Filters */}
        <section aria-label="Filter posts by pillar tag">
          <Reveal variant="fade" duration={0.25} y={6}>
            <h2 className="text-lg font-semibold text-foreground">Pillar Tags</h2>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.55}>
            <div className="mt-4">
              {/* Uses your existing chips UI for consistency */}
              <PillarChips basePath="/insights/founders-corner" activeTag={activeTag || undefined} />
            </div>
          </Reveal>
        </section>

        {/* List */}
        <section id="fc-list" className="mt-12" aria-label="Founder’s Corner posts">
          <Reveal variant="fade" duration={0.25} y={6}>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">All posts</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activeTag ? `Showing posts tagged “${activeTag}”.` : "Showing all Founder’s Corner posts."}
                </p>
              </div>

              <div className="hidden sm:block text-xs text-muted-foreground">
                {filtered.length} post{filtered.length === 1 ? "" : "s"}
              </div>
            </div>
          </Reveal>

          <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3" aria-label="Founder’s Corner feed">
            {filtered.map((p, idx) => (
              <RevealItem key={p.slug} delay={0.04 + idx * 0.06} y={10} duration={0.55}>
                <li>
                  <PremiumCard className="h-full">
                    <article aria-label={p.title} className="space-y-3">
                      <div className="text-xs text-muted-foreground">
                        {formatDate(p.publishedAtISO)}
                      </div>

                      <h3 className="font-heading text-lg leading-snug text-[color:var(--primary)]">
                        {p.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">{p.excerpt}</p>

                      <div className="flex flex-wrap gap-2 pt-1" aria-label="Pillar tags">
                        {p.pillarTags?.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button asChild variant="outline">
                          <Link href={postHref(p.slug)} aria-label={`Read: ${p.title}`}>
                            Read
                          </Link>
                        </Button>
                      </div>
                    </article>
                  </PremiumCard>
                </li>
              </RevealItem>
            ))}
          </ul>

          {!filtered.length ? (
            <p className="mt-6 text-sm text-muted-foreground">No posts found for this tag.</p>
          ) : null}
        </section>

        {/* CTA strip */}
        <section className="mt-14" aria-label="Implementation call-to-action">
          <Reveal y={10} duration={0.55}>
            <div className="rounded-2xl border border-border bg-card/60 p-8">
              <h2 className="font-heading text-xl text-[color:var(--primary)]">
                Want CSTL to implement the structure behind the idea?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send a brief. We’ll respond with scope direction and next steps.
              </p>

              <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="CTA actions">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start">Start a Project</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/start?intent=strategy-call">Book a Strategy Call</Link>
                </Button>
              </div>

              <Separator className="my-8" />
              <div className="text-xs text-muted-foreground">{SITE.signature}</div>
            </div>
          </Reveal>
        </section>

        <div className="mt-12">
          <MicroDisclaimer />
        </div>
      </div>
    </main>
  );
}
