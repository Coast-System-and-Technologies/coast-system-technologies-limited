// app/insights/articles/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/insights/JsonLd";
import MicroDisclaimer from "@/components/insights/MicroDisclaimer";
import { BASE_URL } from "@/lib/site-url";
import { getPostBySlug, getPostsByType, formatDate } from "@/lib/insights/content";

export async function generateStaticParams() {
  return getPostsByType("article").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug("article", params.slug);
  if (!post || post.type !== "article") return {};

  const url = `${BASE_URL}/insights/articles/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/articles.jpg`;

  return {
    title: `${post.title} | Coast System & Technologies Limited Articles`,
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

export default function ArticlePostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug("article", params.slug);
  if (!post || post.type !== "article") notFound();

  const url = `${BASE_URL}/insights/articles/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/articles.jpg`;

  const related = getPostsByType("article").filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "en-NG",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAtISO,
    dateModified: post.updatedAtISO || post.publishedAtISO,
    author: { "@type": "Organization", name: "Coast System & Technologies Limited" },
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
        <div className="text-xs font-medium text-gray-500">Article</div>
        <div className="flex flex-wrap gap-2">
          {post.pillarTags.map((t) => (
            <span key={t} className="rounded-full border border-gray-200 px-3 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{post.title}</h1>

        <div className="text-xs text-gray-500">
          {formatDate(post.publishedAtISO)} • {post.readingTimeMins} min read
        </div>
      </header>

      <article className="mt-10 space-y-10">
        <section>
          <h2 className="text-sm font-semibold text-gray-900">Problem statement</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">{post.problemStatement}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-900">What you need to know</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {post.whatYouNeedToKnow.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-900">Step-by-step / checklist</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700">
            {post.steps.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-900">Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {post.commonMistakes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-gray-50 p-7">
          <h2 className="text-lg font-semibold text-gray-900">What CSTL can deliver</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {post.whatCstlDelivers.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
            >
              Request a Quote
            </Link>
            <Link
              href="/start"
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-900"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </article>

      {related.length ? (
        <section aria-labelledby="related" className="mt-12">
          <h2 id="related" className="text-lg font-semibold text-gray-900">
            Related articles
          </h2>

          <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} className="rounded-2xl border border-gray-200 p-5">
                <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                <div className="mt-2 text-xs text-gray-500">{formatDate(p.publishedAtISO)}</div>
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
      ) : null}

      <MicroDisclaimer />
    </main>
  );
}
