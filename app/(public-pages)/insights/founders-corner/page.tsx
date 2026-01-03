// app/(public-pages)/insights/founders-corner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { BASE_URL } from "@/lib/site-url";
import { getPostsByType, formatDate } from "@/lib/insights/content";
import type { PillarTag } from "@/components/insights/PillarChips";

type SearchParamsShape = { tag?: string };
type PageProps = { searchParams?: SearchParamsShape | Promise<SearchParamsShape> };

async function unwrapSearchParams(sp?: PageProps["searchParams"]) {
  return await Promise.resolve(sp ?? {});
}

export const metadata: Metadata = {
  title: "Founder’s Corner | Coast System & Technologies Limited Insights",
  description:
    "Executive notes from Coast System & Technologies Limited on governance, continuity, structure, and serious operating systems for companies.",
  alternates: { canonical: `${BASE_URL}/insights/founders-corner` },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Founder’s Corner | Coast System & Technologies Limited Insights",
    description:
      "Executive notes from Coast System & Technologies Limited on governance, continuity, structure, and serious operating systems for companies.",
    url: `${BASE_URL}/insights/founders-corner`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder’s Corner | Coast System & Technologies Limited Insights",
    description:
      "Executive notes from Coast System & Technologies Limited on governance, continuity, structure, and serious operating systems for companies.",
  },
};

export default async function FoundersCornerIndex({ searchParams }: PageProps) {
  const { tag } = await unwrapSearchParams(searchParams);

  const posts = getPostsByType("founders-corner");
  const allTags = Array.from(new Set(posts.flatMap((p) => p.pillarTags))).sort();
  const activeTag = (tag || "").trim();

  const filtered = activeTag
    ? posts.filter((p) => p.pillarTags.includes(activeTag as PillarTag))
    : posts;

  const url = `${BASE_URL}/insights/founders-corner${activeTag ? `?tag=${encodeURIComponent(activeTag)}` : ""}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/insights/founders-corner/#collection`,
      url,
      name: "Founder’s Corner | Coast System & Technologies Limited Insights",
      description:
        "Executive notes from Coast System & Technologies Limited on governance, continuity, structure, and serious operating systems for companies.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: "Founder’s Corner", item: `${BASE_URL}/insights/founders-corner` },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-medium text-muted-foreground">Insights</p>
        <h1 className="text-4xl font-semibold tracking-tight">Founder’s Corner</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Short, executive notes on governance, continuity, and structure — written for operators.
        </p>
      </header>

      {/* Filters */}
      <section className="mt-10" aria-label="Filter posts by pillar tag">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/insights/founders-corner"
            className={[
              "rounded-full border px-3 py-1 text-xs",
              !activeTag ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:text-foreground",
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
                href={`/insights/founders-corner?tag=${encodeURIComponent(t)}`}
                className={[
                  "rounded-full border px-3 py-1 text-xs",
                  isActive ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {t}
              </Link>
            );
          })}
        </div>
      </section>

      {/* List */}
      <section className="mt-8" aria-label="Founder’s Corner posts">
        <ul role="list" className="grid gap-4 md:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-border p-6">
              <article aria-label={p.title} className="space-y-3">
                <div className="text-xs text-muted-foreground">{formatDate(p.publishedAtISO)}</div>

                <h2 className="text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {p.pillarTags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/insights/founders-corner/${p.slug}`}
                  className="inline-flex rounded-xl border border-border px-4 py-2 text-sm hover:border-foreground"
                  aria-label={`Read: ${p.title}`}
                >
                  Read
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {!filtered.length ? (
          <p className="mt-6 text-sm text-muted-foreground">
            No posts found for this tag.
          </p>
        ) : null}
      </section>

      <div className="mt-12">
        <MicroDisclaimer />
      </div>
    </main>
  );
}
