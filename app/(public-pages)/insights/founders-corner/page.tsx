// app/insights/founders-corner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import PillarChips from "@/components/insights/PillarChips";
import { BASE_URL } from "@/lib/site-url";
import { getPostsByType, formatDate } from "@/lib/insights/content";

const PAGE_URL = `${BASE_URL}/insights/founders-corner`;
const OG_IMAGE = `${BASE_URL}/assets/og/founders-corner.jpg`;

export const metadata: Metadata = {
  title: "Founder’s Corner | CSTL Insights",
  description:
    "Short executive columns on control, continuity, risk, and disciplined execution—built for founders and decision-makers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Founder’s Corner | Coast System & Technologies Limited",
    description:
      "Founder-first notes on control, continuity, risk, and disciplined execution—built for decision-making.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Founder’s Corner | Coast System & Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder’s Corner | Coast System & Technologies Limited",
    description:
      "Short executive columns on control, continuity, risk, and disciplined execution—built for founders.",
    images: [OG_IMAGE],
  },
};

export default function FoundersCornerIndex({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const activeTag = searchParams?.tag;
  const posts = getPostsByType("founders-corner");
  const filtered = activeTag ? posts.filter((p) => p.pillarTags.includes(activeTag as any)) : posts;

  const featured = filtered[0];
  const list = filtered;

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
      name: "Founder’s Corner | Coast System & Technologies Limited",
      description:
        "Short executive columns on control, continuity, risk, and disciplined execution—built for founders and decision-makers.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: list.slice(0, 12).map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${BASE_URL}/insights/founders-corner/${p.slug}`,
          name: p.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: "Founder’s Corner", item: PAGE_URL },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Founder’s Corner</h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-700">
          Short executive columns on control, continuity, risk, and disciplined execution.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/start?intent=strategy-call"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/start"
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-900"
          >
            Start a Project
          </Link>
        </div>

        <p className="text-xs text-gray-500">Direct • Practical • Built for decision-making</p>
      </header>

      <section aria-labelledby="filters" className="mt-10">
        <h2 id="filters" className="text-lg font-semibold text-gray-900">
          Filter by pillar
        </h2>
        <div className="mt-4">
          <PillarChips basePath="/insights/founders-corner" activeTag={activeTag} />
        </div>
      </section>

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
              href={`/insights/founders-corner/${featured.slug}`}
              className="mt-5 inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
            >
              Read
            </Link>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="all" className="mt-12">
        <h2 id="all" className="text-lg font-semibold text-gray-900">
          All posts
        </h2>

        <ul role="list" className="mt-4 grid gap-4 md:grid-cols-2">
          {list.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-gray-200 p-6">
              <div className="text-xs font-medium text-gray-500">{p.pillarTags[0]}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{p.title}</div>
              <div className="mt-2 text-xs text-gray-500">{formatDate(p.publishedAtISO)}</div>

              <Link
                href={`/insights/founders-corner/${p.slug}`}
                className="mt-4 inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
              >
                Read
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">
        Want Coast System & Technologies Limited to install the structure behind the ideas?
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Book a strategy call or send a brief. We’ll tell you what needs to be installed first.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/start?intent=strategy-call"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/start"
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-900"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <MicroDisclaimer />
    </main>
  );
}
