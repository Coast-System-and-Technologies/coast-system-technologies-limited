// app/insights/articles/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import PillarChips from "@/components/insights/PillarChips";
import { BASE_URL } from "@/lib/site-url";
import { getPostsByType, formatDate } from "@/lib/insights/content";

const PAGE_URL = `${BASE_URL}/insights/articles`;
const OG_IMAGE = `${BASE_URL}/assets/og/articles.jpg`;

export const metadata: Metadata = {
  title: "Articles | CSTL Insights",
  description:
    "Practical guides, checklists, and step-by-step implementation notes on governance, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC execution.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Coast System & Technologies Limited",
    title: "Articles | Coast System & Technologies Limited",
    description:
      "Practical guides, checklists, and step-by-step implementation notes—built for clarity and execution.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Articles | Coast System & Technologies Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Coast System & Technologies Limited",
    description:
      "Practical guides, checklists, and step-by-step implementation notes—built for clarity and execution.",
    images: [OG_IMAGE],
  },
};

export default function ArticlesIndex({ searchParams }: { searchParams?: { tag?: string } }) {
  const activeTag = searchParams?.tag;
  const posts = getPostsByType("article");
  const filtered = activeTag ? posts.filter((p) => p.pillarTags.includes(activeTag as any)) : posts;

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
      name: "Articles | Coast System & Technologies Limited",
      description:
        "Practical guides, checklists, and step-by-step implementation notes on governance, compliance systems, privacy (Nigeria), trademark/IP (NIPO), and CAC execution.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: filtered.slice(0, 12).map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${BASE_URL}/insights/articles/${p.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Articles", item: PAGE_URL },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Articles</h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-700">
          Practical guides, checklists, and step-by-step implementation notes—built for clarity and
          execution.
        </p>

        <div className="flex flex-wrap gap-3">
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
      </header>

      <section aria-labelledby="filters" className="mt-10">
        <h2 id="filters" className="text-lg font-semibold text-gray-900">
          Filter by pillar
        </h2>
        <div className="mt-4">
          <PillarChips basePath="/insights/articles" activeTag={activeTag} />
        </div>
      </section>

      <section aria-labelledby="list" className="mt-12">
        <h2 id="list" className="text-lg font-semibold text-gray-900">
          All articles
        </h2>

        <ul role="list" className="mt-4 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-gray-200 p-6">
              <div className="text-xs font-medium text-gray-500">{p.pillarTags[0]}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.excerpt}</p>
              <div className="mt-3 text-xs text-gray-500">{formatDate(p.publishedAtISO)}</div>

              <Link
                href={`/insights/articles/${p.slug}`}
                className="mt-4 inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
              >
                Read
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <MicroDisclaimer />
    </main>
  );
}
