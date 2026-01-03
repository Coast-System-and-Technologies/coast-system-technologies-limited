// app/(public-pages)/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import PillarChips from "@/components/insights/PillarChips";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import { getAllPosts, formatDate } from "@/lib/insights/content";
import type { PillarTag } from "@/components/insights/PillarChips";

const PAGE_URL = `${BASE_URL}/insights`;
const OG_IMAGE = `${BASE_URL}/assets/og/insights.jpg`;

type SearchParamsShape = { tag?: string };
type PageProps = { searchParams?: SearchParamsShape | Promise<SearchParamsShape> };

async function unwrapSearchParams(sp?: PageProps["searchParams"]) {
  return await Promise.resolve(sp ?? {});
}

export const metadata: Metadata = {
  title: "Insights | Coast System & Technologies Limited — The Structure Behind Great Companies",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Insights | Coast System & Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Coast System & Technologies Limited",
    description:
      "Executive notes and practical guides on governance, compliance, privacy (Nigeria), trademark/IP (NIPO), and CAC execution.",
    images: [OG_IMAGE],
  },
};

export default async function InsightsHubPage({ searchParams }: PageProps) {
  const { tag } = await unwrapSearchParams(searchParams);
  const activeTag = (tag || "").trim();

  const all = getAllPosts();
  const filtered = activeTag ? all.filter((p) => p.pillarTags.includes(activeTag as PillarTag)) : all;

  const featured = filtered[0];
  const latest = filtered.slice(0, 12);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: SITE.name,
      url: `${BASE_URL}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE.name,
      url: `${BASE_URL}/`,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` },
      email: SITE.contact.email,
      telephone: SITE.contact.phoneTel,
      sameAs: [SITE.socials.facebook],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `Insights | ${SITE.name}`,
      description:
        "Executive notes and practical guides on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry execution—built for clarity, control, and continuity.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: latest.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url:
            p.type === "founders-corner"
              ? `${BASE_URL}/insights/founders-corner/${p.slug}`
              : `${BASE_URL}/insights/articles/${p.slug}`,
          name: p.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: PAGE_URL },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <header className="space-y-5">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Insights</h1>

        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          Executive notes and practical guides on the structure behind great companies—governance,
          compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.
        </p>

        <div className="flex flex-wrap gap-3" aria-label="Primary actions">
          <Link
            href="/start"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a Project
          </Link>
          <Link
            href="/start?intent=strategy-call"
            className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-foreground"
          >
            Book a Strategy Call
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          CAC Registered (RC {SITE.trust.rc}) • Nigeria-based • Confidential workflow
        </p>
      </header>

      {/* Featured */}
      {featured ? (
        <section aria-labelledby="featured" className="mt-12">
          <h2 id="featured" className="text-lg font-semibold text-foreground">
            Featured
          </h2>

          <div className="mt-4 rounded-2xl border border-border bg-card/60 p-6">
            <div className="text-xs font-medium text-muted-foreground">Featured Post</div>
            <div className="mt-2 text-2xl font-semibold text-foreground">{featured.title}</div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <div className="mt-3 text-xs text-muted-foreground">{formatDate(featured.publishedAtISO)}</div>

            <Link
              aria-label={`Read featured post: ${featured.title}`}
              href={
                featured.type === "founders-corner"
                  ? `/insights/founders-corner/${featured.slug}`
                  : `/insights/articles/${featured.slug}`
              }
              className="mt-5 inline-flex rounded-xl border border-border px-4 py-2 text-sm text-foreground hover:border-foreground"
            >
              Read Post
            </Link>
          </div>
        </section>
      ) : null}

      {/* Lanes */}
      <section aria-labelledby="lanes" className="mt-12">
        <h2 id="lanes" className="text-lg font-semibold text-foreground">
          Explore
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3" role="list" aria-label="Insights categories">
          <Link
            role="listitem"
            href="/insights/founders-corner"
            className="rounded-2xl border border-border bg-card/50 p-6 hover:border-foreground"
            aria-label="Browse Founder’s Corner"
          >
            <div className="text-sm font-semibold text-foreground">Founder’s Corner</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Short executive columns on control, continuity, risk, and disciplined execution.
            </p>
            <div className="mt-4 text-sm text-foreground">Browse →</div>
          </Link>

          <Link
            role="listitem"
            href="/insights/articles"
            className="rounded-2xl border border-border bg-card/50 p-6 hover:border-foreground"
            aria-label="Browse Articles"
          >
            <div className="text-sm font-semibold text-foreground">Articles</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Practical guides, checklists, and step-by-step implementation notes.
            </p>
            <div className="mt-4 text-sm text-foreground">Browse →</div>
          </Link>

          <Link
            role="listitem"
            href="/insights/faqs"
            className="rounded-2xl border border-border bg-card/50 p-6 hover:border-foreground"
            aria-label="Browse FAQs"
          >
            <div className="text-sm font-semibold text-foreground">FAQs</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick answers grouped by pillar—clear and direct.
            </p>
            <div className="mt-4 text-sm text-foreground">Browse →</div>
          </Link>
        </div>
      </section>

      {/* Pillar filters */}
      <section aria-labelledby="pillars" className="mt-12">
        <h2 id="pillars" className="text-lg font-semibold text-foreground">
          Pillar Tags
        </h2>

        <div className="mt-4" aria-label="Filter insights by pillar tag">
          <PillarChips basePath="/insights" activeTag={activeTag || undefined} />
        </div>
      </section>

      {/* Latest feed */}
      <section aria-labelledby="latest" className="mt-12">
        <h2 id="latest" className="text-lg font-semibold text-foreground">
          Latest
        </h2>

        <ul role="list" className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Latest insights">
          {latest.map((p) => {
            const href =
              p.type === "founders-corner"
                ? `/insights/founders-corner/${p.slug}`
                : `/insights/articles/${p.slug}`;

            return (
              <li key={`${p.type}:${p.slug}`} className="rounded-2xl border border-border bg-card/50 p-6">
                <div className="text-xs font-medium text-muted-foreground">
                  {p.type === "founders-corner" ? "Founder’s Corner" : "Article"}
                </div>

                <div className="mt-2 text-lg font-semibold text-foreground">{p.title}</div>

                <div className="mt-2 text-xs text-muted-foreground">
                  {p.pillarTags?.[0] ? `${p.pillarTags[0]} • ` : ""}
                  {formatDate(p.publishedAtISO)}
                </div>

                <Link
                  href={href}
                  aria-label={`Read: ${p.title}`}
                  className="mt-4 inline-flex rounded-xl border border-border px-4 py-2 text-sm text-foreground hover:border-foreground"
                >
                  Read
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Final CTA strip */}
      <section className="mt-14 rounded-2xl border border-border bg-card/60 p-8" aria-label="Implementation call-to-action">
        <h2 className="text-xl font-semibold text-foreground">
          Want CSTL to implement what you’re reading?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send a brief. We’ll respond with scope direction and next steps.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a Project
          </Link>
          <Link
            href="/start?intent=quote"
            className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-foreground"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <div className="mt-12">
        <MicroDisclaimer />
      </div>
    </main>
  );
}
