// app/(public-pages)/insights/page.tsx
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
import { getAllPosts, formatDate } from "@/lib/insights/content";
import type { PillarTag } from "@/components/insights/PillarChips";

const PAGE_PATH = "/insights";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/assets/og/insights.jpg`;

type SearchParamsShape = { tag?: string };
type PageProps = { searchParams?: SearchParamsShape | Promise<SearchParamsShape> };

async function unwrapSearchParams(sp?: PageProps["searchParams"]) {
  return await Promise.resolve(sp ?? {});
}

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Executive notes and practical guides on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry execution—built for clarity, control, and continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Insights | Coast System & Technologies Limited — The Structure Behind Great Companies",
    description:
      "Founder’s Corner, Articles, and FAQs on governance, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC execution.",
    url: PAGE_URL,
    locale: "en_NG",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Insights | Coast System & Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Coast System & Technologies Limited",
    description:
      "Executive notes and practical guides on governance, compliance, privacy (Nigeria), trademark/IP (NIPO), and CAC execution.",
    images: [OG_IMAGE],
  },
  keywords: [
    "CSTL Insights",
    "Founder’s Corner",
    "governance",
    "compliance systems",
    "privacy Nigeria",
    "NDPR",
    "CAC registry services",
    "trademark registration Nigeria",
    "NIPO",
    "IP protection",
    "operating systems",
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

function postUrl(p: any) {
  return p.type === "founders-corner"
    ? `${BASE_URL}/insights/founders-corner/${p.slug}`
    : p.type === "faq"
      ? `${BASE_URL}/insights/faqs/${p.slug}`
      : `${BASE_URL}/insights/articles/${p.slug}`;
}

export default async function InsightsHubPage({ searchParams }: PageProps) {
  const { tag } = await unwrapSearchParams(searchParams);
  const activeTag = (tag || "").trim();

  const all = getAllPosts();

  const filtered = activeTag
    ? all.filter((p) => p.pillarTags?.includes(activeTag as PillarTag))
    : all;

  const featured = filtered[0] ?? null;

  // ✅ Latest excludes featured to prevent duplicates
  const latest = featured ? filtered.slice(1, 13) : filtered.slice(0, 12);

  const itemList = [...(featured ? [featured] : []), ...latest].slice(0, 12);

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
        url: PAGE_URL,
        name: `Insights | ${SITE.name}`,
        description:
          "Executive notes and practical guides on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry execution—built for clarity, control, and continuity.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-NG",
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        keywords:
          "CSTL Insights, Founder’s Corner, Articles, FAQs, governance, compliance, NDPR, CAC, trademarks, NIPO, documentation systems",
        mainEntity: {
          "@type": "ItemList",
          "@id": `${PAGE_URL}#itemlist`,
          numberOfItems: itemList.length,
          itemListElement: itemList.map((p: any, idx: number) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": p.type === "founders-corner" ? "Article" : "Article",
              name: p.title,
              url: postUrl(p),
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
          { "@type": "ListItem", position: 2, name: "Insights", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main id="main-content" aria-labelledby="insights-title">
      <JsonLd data={jsonLd} />

      {/* Skip link */}
      <a
        href="#insights-explore"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to page content
      </a>

      {/* HERO (matches CSTL style) */}
      <section
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="insights-title"
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
                <li aria-current="page" className="text-foreground/80" role="listitem">
                  Insights
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.55}>
            <div className="max-w-3xl space-y-4">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Insights Hub</p>

              <h1
                id="insights-title"
                className="font-heading text-3xl sm:text-4xl text-[color:var(--primary)]"
              >
                Insights
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground">
                Executive notes and practical guides on the structure behind great companies—governance,
                compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.
              </p>

              <div className="flex flex-wrap gap-3" role="group" aria-label="Primary actions">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start" aria-label="Start a project with CSTL">
                    Start a Project
                  </Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/start?intent=strategy-call" aria-label="Book a strategy call">
                    Book a Strategy Call
                  </Link>
                </Button>

                {activeTag ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                    <span className="font-medium text-foreground/80">Filter:</span>
                    <span className="font-medium text-[color:var(--primary)]">{activeTag}</span>
                    <Link
                      href="/insights"
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
        {/* Featured */}
        {featured ? (
          <section aria-labelledby="featured" className="mt-0">
            <Reveal variant="fade" duration={0.25} y={6}>
              <h2 id="featured" className="text-lg font-semibold text-foreground">
                Featured
              </h2>
            </Reveal>

            <Reveal delay={0.06} y={10} duration={0.55}>
              <PremiumCard className="mt-4">
                <div className="text-xs font-medium text-muted-foreground">Featured Post</div>

                <div className="mt-2 font-heading text-2xl text-[color:var(--primary)]">
                  {featured.title}
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>

                <div className="mt-3 text-xs text-muted-foreground">
                  {formatDate(featured.publishedAtISO)}
                </div>

                <div className="mt-5">
                  <Button asChild variant="outline">
                    <Link
                      aria-label={`Read featured post: ${featured.title}`}
                      href={
                        featured.type === "founders-corner"
                          ? `/insights/founders-corner/${featured.slug}`
                          : featured.type === "faq"
                            ? `/insights/faqs/${featured.slug}`
                            : `/insights/articles/${featured.slug}`
                      }
                    >
                      Read Post
                    </Link>
                  </Button>
                </div>
              </PremiumCard>
            </Reveal>
          </section>
        ) : null}

        {/* Lanes */}
        <section aria-labelledby="insights-explore" className="mt-12">
          <Reveal variant="fade" duration={0.25} y={6}>
            <h2 id="insights-explore" className="text-lg font-semibold text-foreground">
              Explore
            </h2>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-3" role="list" aria-label="Insights categories">
            {[
              {
                href: "/insights/founders-corner",
                title: "Founder’s Corner",
                desc: "Short executive columns on control, continuity, risk, and disciplined execution.",
              },
              {
                href: "/insights/articles",
                title: "Articles",
                desc: "Practical guides, checklists, and step-by-step implementation notes.",
              },
              {
                href: "/insights/faqs",
                title: "FAQs",
                desc: "Quick answers grouped by pillar—clear and direct.",
              },
            ].map((x, idx) => (
              <RevealItem key={x.href} delay={0.06 + idx * 0.08} y={10} duration={0.55}>
                <Link
                  role="listitem"
                  href={x.href}
                  className="block"
                  aria-label={`Browse ${x.title}`}
                >
                  <PremiumCard className="h-full">
                    <div className="text-sm font-semibold text-foreground">{x.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                    <div className="mt-4 text-sm text-[color:var(--primary)]">Browse →</div>
                  </PremiumCard>
                </Link>
              </RevealItem>
            ))}
          </div>
        </section>

        {/* Pillar filters */}
        <section aria-labelledby="pillars" className="mt-12">
          <Reveal variant="fade" duration={0.25} y={6}>
            <h2 id="pillars" className="text-lg font-semibold text-foreground">
              Pillar Tags
            </h2>
          </Reveal>

          <Reveal delay={0.06} y={10} duration={0.55}>
            <div className="mt-4" aria-label="Filter insights by pillar tag">
              <PillarChips basePath="/insights" activeTag={activeTag || undefined} />
            </div>
          </Reveal>
        </section>

        {/* Latest feed */}
        <section aria-labelledby="latest" className="mt-12">
          <Reveal variant="fade" duration={0.25} y={6}>
            <h2 id="latest" className="text-lg font-semibold text-foreground">
              Latest
            </h2>
          </Reveal>

          <ul role="list" className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Latest insights">
            {latest.map((p, idx) => {
              const href =
                p.type === "founders-corner"
                  ? `/insights/founders-corner/${p.slug}`
                  : p.type === "faq"
                    ? `/insights/faqs/${p.slug}`
                    : `/insights/articles/${p.slug}`;

              return (
                <RevealItem key={`${p.type}:${p.slug}`} delay={0.04 + idx * 0.06} y={10} duration={0.55}>
                  <li>
                    <PremiumCard>
                      <div className="text-xs font-medium text-muted-foreground">
                        {p.type === "founders-corner" ? "Founder’s Corner" : p.type === "faq" ? "FAQ" : "Article"}
                      </div>

                      <div className="mt-2 text-lg font-semibold text-foreground">{p.title}</div>

                      <div className="mt-2 text-xs text-muted-foreground">
                        {p.pillarTags?.[0] ? `${p.pillarTags[0]} • ` : ""}
                        {formatDate(p.publishedAtISO)}
                      </div>

                      <div className="mt-4">
                        <Button asChild variant="outline">
                          <Link href={href} aria-label={`Read: ${p.title}`}>
                            Read
                          </Link>
                        </Button>
                      </div>
                    </PremiumCard>
                  </li>
                </RevealItem>
              );
            })}
          </ul>
        </section>

        {/* Final CTA strip */}
        <section className="mt-14" aria-label="Implementation call-to-action">
          <Reveal y={10} duration={0.55}>
            <div className="rounded-2xl border border-border bg-card/60 p-8">
              <h2 className="font-heading text-xl text-[color:var(--primary)]">
                Want CSTL to implement what you’re reading?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send a brief. We’ll respond with scope direction and next steps.
              </p>

              <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="CTA actions">
                <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href="/start">Start a Project</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/start?intent=quote">Request a Quote</Link>
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
