// app/(public-pages)/insights/founders-corner/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { BASE_URL } from "@/lib/site-url";
import { getPostBySlug, getPostsByType, formatDate } from "@/lib/insights/content";

type ParamsShape = { slug: string };
type PageProps = {
  params: ParamsShape | Promise<ParamsShape>;
};

async function unwrapParams(params: PageProps["params"]) {
  return await Promise.resolve(params);
}

export async function generateStaticParams() {
  return getPostsByType("founders-corner").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await unwrapParams(params);

  const post = getPostBySlug("founders-corner", slug);
  if (!post || post.type !== "founders-corner") return {};

  const url = `${BASE_URL}/insights/founders-corner/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/founders-corner.jpg`;

  return {
    title: `${post.title} | Founder’s Corner | Coast System & Technologies Limited`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "Coast System & Technologies Limited",
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function FounderPostPage({ params }: PageProps) {
  const { slug } = await unwrapParams(params);

  const post = getPostBySlug("founders-corner", slug);
  if (!post || post.type !== "founders-corner") notFound();

  const url = `${BASE_URL}/insights/founders-corner/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/founders-corner.jpg`;

  const related = getPostsByType("founders-corner")
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "en-NG",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAtISO,
    dateModified: post.updatedAtISO || post.publishedAtISO,
    author: {
      "@type": "Person",
      name: "Toluwalope Coast",
      jobTitle: "Founder & Managing Director",
      affiliation: { "@type": "Organization", name: "Coast System & Technologies Limited" },
    },
    publisher: {
      "@type": "Organization",
      name: "Coast System & Technologies Limited",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` },
    },
    image: [ogImage],
    keywords: post.pillarTags,
    articleSection: post.pillarTags,
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="space-y-3">
        <div className="text-xs font-medium text-gray-500">Founder’s Corner</div>

        <div className="flex flex-wrap gap-2">
          {post.pillarTags.map((t) => (
            <span key={t} className="rounded-full border border-gray-200 px-3 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{post.title}</h1>
        <p className="text-base leading-relaxed text-gray-700">{post.hook}</p>

        <div className="text-xs text-gray-500">
          {formatDate(post.publishedAtISO)} • {post.readingTimeMins} min read
        </div>
      </header>

      <article className="mt-10 space-y-8">
        {post.sections.map((s) => (
          <section key={s.subhead} className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-900">{s.subhead}</h2>
            <p className="text-sm leading-relaxed text-gray-700">{s.body}</p>
          </section>
        ))}

        <div className="rounded-2xl bg-gray-50 p-6">
          <div className="text-sm font-semibold text-gray-900">Principle</div>
          <p className="mt-2 text-sm text-gray-700">{post.principleLine}</p>
          <p className="mt-4 text-sm font-medium text-gray-900">
            Toluwalope Coast — Founder &amp; Managing Director
          </p>
        </div>
      </article>

      <section className="mt-12 rounded-2xl border border-gray-200 p-7">
        <h2 className="text-lg font-semibold text-gray-900">
          If you’re building something serious, build it on structure.
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

      {related.length ? (
        <section aria-labelledby="related" className="mt-12">
          <h2 id="related" className="text-lg font-semibold text-gray-900">
            More from Founder’s Corner
          </h2>

          <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} className="rounded-2xl border border-gray-200 p-5">
                <div className="text-sm font-semibold text-gray-900">{p.title}</div>
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
      ) : null}

      <MicroDisclaimer />
    </main>
  );
}
