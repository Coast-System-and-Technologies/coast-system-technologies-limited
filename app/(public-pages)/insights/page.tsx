// app/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import PillarChips from "@/components/insights/PillarChips";
import { BASE_URL } from "@/lib/site-url";
import { getAllPosts, formatDate } from "@/lib/insights/content";

const PAGE_URL = `${BASE_URL}/insights`;
const OG_IMAGE = `${BASE_URL}/assets/og/insights.jpg`;

export const metadata: Metadata = {
  title: "Insights | Coast System & Technologies Limited — The Structure Behind Great Companies",
  description:
    "Executive notes and practical guides on governance, compliance systems, privacy readiness (Nigeria), trademark/IP protection (NIPO), and CAC registry execution—built for clarity, control, and continuity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
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

export default function InsightsHubPage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const activeTag = searchParams?.tag;
  const all = getAllPosts();

  const filtered = activeTag ? all.filter((p) => p.pillarTags.includes(activeTag as any)) : all;

  const featured = filtered[0];
  const latest = filtered.slice(0, 12);

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
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Insights | Coast System & Technologies Limited",
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
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Insights</h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-700">
          Executive notes and practical guides on the structure behind great companies—governance,
          compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC registry execution.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
          >
            Start a Project
          </Link>
          <Link
            href="/start?intent=strategy-call"
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-900"
          >
            Book a Strategy Call
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          CAC Registered (RC 8449588) • Nigeria-based • Confidential workflow
        </p>
      </header>

      {/* Featured */}
      {featured ? (
        <section aria-labelledby="featured" className="mt-12">
          <h2 id="featured" className="text-lg font-semibold text-gray-900">
            Featured
          </h2>

          <div className="mt-4 rounded-2xl border border-gray-200 p-6">
            <div className="text-xs font-medium text-gray-500">Featured Post</div>
            <div className="mt-2 text-2xl font-semibold text-gray-900">{featured.title}</div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
              {featured.excerpt}
            </p>
            <div className="mt-3 text-xs text-gray-500">{formatDate(featured.publishedAtISO)}</div>

            <Link
              href={
                featured.type === "founders-corner"
                  ? `/insights/founders-corner/${featured.slug}`
                  : `/insights/articles/${featured.slug}`
              }
              className="mt-5 inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
            >
              Read Post
            </Link>
          </div>
        </section>
      ) : null}

      {/* Lanes */}
      <section aria-labelledby="lanes" className="mt-12">
        <h2 id="lanes" className="text-lg font-semibold text-gray-900">
          Explore
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            href="/insights/founders-corner"
            className="rounded-2xl border border-gray-200 p-6 hover:border-gray-900"
          >
            <div className="text-sm font-semibold text-gray-900">Founder’s Corner</div>
            <p className="mt-2 text-sm text-gray-700">
              Short executive columns on control, continuity, risk, and disciplined execution.
            </p>
            <div className="mt-4 text-sm text-gray-900">Browse →</div>
          </Link>

          <Link
            href="/insights/articles"
            className="rounded-2xl border border-gray-200 p-6 hover:border-gray-900"
          >
            <div className="text-sm font-semibold text-gray-900">Articles</div>
            <p className="mt-2 text-sm text-gray-700">
              Practical guides, checklists, and step-by-step implementation notes.
            </p>
            <div className="mt-4 text-sm text-gray-900">Browse →</div>
          </Link>

          <Link
            href="/insights/faqs"
            className="rounded-2xl border border-gray-200 p-6 hover:border-gray-900"
          >
            <div className="text-sm font-semibold text-gray-900">FAQs</div>
            <p className="mt-2 text-sm text-gray-700">
              Quick answers grouped by pillar—clear and direct.
            </p>
            <div className="mt-4 text-sm text-gray-900">Browse →</div>
          </Link>
        </div>
      </section>

      {/* Pillar filters */}
      <section aria-labelledby="pillars" className="mt-12">
        <h2 id="pillars" className="text-lg font-semibold text-gray-900">
          Pillar Tags
        </h2>
        <div className="mt-4">
          <PillarChips basePath="/insights" activeTag={activeTag} />
        </div>
      </section>

      {/* Latest feed */}
      <section aria-labelledby="latest" className="mt-12">
        <h2 id="latest" className="text-lg font-semibold text-gray-900">
          Latest
        </h2>

        <ul role="list" className="mt-4 grid gap-4 md:grid-cols-2">
          {latest.map((p) => {
            const href =
              p.type === "founders-corner"
                ? `/insights/founders-corner/${p.slug}`
                : `/insights/articles/${p.slug}`;

            return (
              <li key={`${p.type}:${p.slug}`} className="rounded-2xl border border-gray-200 p-6">
                <div className="text-xs font-medium text-gray-500">
                  {p.type === "founders-corner" ? "Founder’s Corner" : "Article"}
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{p.title}</div>
                <div className="mt-2 text-xs text-gray-500">
                  {p.pillarTags[0]} • {formatDate(p.publishedAtISO)}
                </div>
                <Link
                  href={href}
                  className="mt-4 inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
                >
                  Read
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Final CTA strip */}
      <section className="mt-14 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">
        Want Coast System & Technologies Limited to implement what you’re reading?
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Send a brief. We’ll respond with scope direction and next steps.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
          >
            Start a Project
          </Link>
          <Link
            href="/start?intent=quote"
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-900"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <MicroDisclaimer />
    </main>
  );
}
