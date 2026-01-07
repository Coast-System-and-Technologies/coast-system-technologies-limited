// app/(public-pages)/insights/articles/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import Reveal, { RevealItem } from "@/components/motion/reveal";

import { BASE_URL } from "@/lib/site-url";
import { getPostsByType, formatDate } from "@/lib/insights/content";
import type { PillarTag } from "@/components/insights/PillarChips";

type SearchParamsShape = { tag?: string };
type PageProps = { searchParams?: SearchParamsShape | Promise<SearchParamsShape> };

async function unwrapSearchParams(sp?: PageProps["searchParams"]) {
  return await Promise.resolve(sp ?? {});
}

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical guides, checklists, and Nigeria-grounded implementation notes from Coast System & Technologies Limited.",
  alternates: { canonical: `${BASE_URL}/insights/articles` },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Articles | Coast System & Technologies Limited Insights",
    description:
      "Practical guides, checklists, and Nigeria-grounded implementation notes from Coast System & Technologies Limited.",
    url: `${BASE_URL}/insights/articles`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Coast System & Technologies Limited Insights",
    description:
      "Practical guides, checklists, and Nigeria-grounded implementation notes from Coast System & Technologies Limited.",
  },
};

export default async function ArticlesIndex({ searchParams }: PageProps) {
  const { tag } = await unwrapSearchParams(searchParams);

  const posts = getPostsByType("article");
  const allTags = Array.from(new Set(posts.flatMap((p) => p.pillarTags))).sort();
  const activeTag = (tag || "").trim();

  const filtered = activeTag
    ? posts.filter((p) => p.pillarTags.includes(activeTag as PillarTag))
    : posts;

  const url = `${BASE_URL}/insights/articles${
    activeTag ? `?tag=${encodeURIComponent(activeTag)}` : ""
  }`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/insights/articles/#collection`,
      url,
      name: "Articles | Coast System & Technologies Limited Insights",
      description:
        "Practical guides, checklists, and Nigeria-grounded implementation notes from Coast System & Technologies Limited.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: "Articles", item: `${BASE_URL}/insights/articles` },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="max-w-3xl space-y-3">
        <Reveal variant="fade" duration={0.25} y={0}>
          <p className="text-xs font-medium text-muted-foreground">Insights</p>
        </Reveal>

        <Reveal delay={0.04} duration={0.35} y={8} variant="liftScale">
          <h1 className="text-4xl font-semibold tracking-tight">Articles</h1>
        </Reveal>

        <Reveal delay={0.08} duration={0.35} y={8} variant="lift">
          <p className="text-base leading-relaxed text-muted-foreground">
            Practical guides, checklists, and implementation notes — Nigeria-grounded, execution-first.
          </p>
        </Reveal>
      </header>

      {/* Filters (animate the section, not each chip — keeps flex-wrap stable) */}
      <Reveal delay={0.06} duration={0.35} y={8} variant="lift">
        <section className="mt-10" aria-label="Filter articles by pillar tag">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/insights/articles"
              className={[
                "rounded-full border px-3 py-1 text-xs transition-opacity duration-200 hover:opacity-90",
                !activeTag
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              ].join(" ")}
              aria-current={!activeTag ? "page" : undefined}
            >
              All
            </Link>

            {allTags.map((t) => {
              const isActive = t === activeTag;
              return (
                <Link
                  key={t}
                  href={`/insights/articles?tag=${encodeURIComponent(t)}`}
                  className={[
                    "rounded-full border px-3 py-1 text-xs transition-opacity duration-200 hover:opacity-90",
                    isActive
                      ? "border-foreground text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t}
                </Link>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* List */}
      <section className="mt-8" aria-label="Articles list">
        <ul role="list" className="grid gap-4 md:grid-cols-3">
          {filtered.map((p, idx) => (
            <RevealItem
              key={p.slug}
              className="rounded-2xl border border-border p-6"
              // premium stagger (subtle)
              delay={0.04 + idx * 0.05}
              duration={0.4}
              y={10}
              variant="liftScale"
            >
              <article aria-label={p.title} className="space-y-3">
                <div className="text-xs text-muted-foreground">
                  {formatDate(p.publishedAtISO)}
                </div>

                <h2 className="text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {p.pillarTags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/insights/articles/${p.slug}`}
                  className="inline-flex rounded-xl border border-border px-4 py-2 text-sm transition-opacity duration-200 hover:opacity-90 hover:border-foreground"
                  aria-label={`Read: ${p.title}`}
                >
                  Read
                </Link>
              </article>
            </RevealItem>
          ))}
        </ul>

        {!filtered.length ? (
          <Reveal delay={0.08} variant="fade" duration={0.25} y={0}>
            <p className="mt-6 text-sm text-muted-foreground">No articles found for this tag.</p>
          </Reveal>
        ) : null}
      </section>

      <Reveal delay={0.1} duration={0.35} y={8} variant="lift">
        <div className="mt-12">
          <MicroDisclaimer />
        </div>
      </Reveal>
    </main>
  );
}
