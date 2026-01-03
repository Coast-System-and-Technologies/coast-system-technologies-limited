// app/(public-pages)/insights/articles/[slug]/page.tsx
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
  // ✅ content.ts uses "article" (singular)
  return getPostsByType("article").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await unwrapParams(params);

  const post = getPostBySlug("article", slug);
  if (!post || post.type !== "article") return {};

  const url = `${BASE_URL}/insights/articles/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/articles.jpg`;

  return {
    title: `${post.title} | Articles | CSTL`,
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

export default async function ArticlePostPage({ params }: PageProps) {
  const { slug } = await unwrapParams(params);

  const post = getPostBySlug("article", slug);
  if (!post || post.type !== "article") notFound();

  const url = `${BASE_URL}/insights/articles/${post.slug}`;
  const ogImage = post.ogImageUrl || `${BASE_URL}/assets/og/articles.jpg`;

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
      "@type": "Organization",
      name: "Coast System & Technologies Limited",
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

  const more = getPostsByType("article")
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14">
      <JsonLd data={jsonLd} />

      <header className="space-y-3">
        <div className="text-xs font-medium text-muted-foreground">Articles</div>

        <div className="flex flex-wrap gap-2">
          {post.pillarTags.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="text-xs text-muted-foreground">
          {formatDate(post.publishedAtISO)} • {post.readingTimeMins} min read
        </div>
      </header>

      {/* Article Body (matches your ArticlePost structure) */}
      <article className="mt-10 space-y-10">
        {/* Problem statement */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-foreground">Problem statement</h2>
          <p className="text-sm leading-relaxed text-foreground/90">{post.problemStatement}</p>
        </section>

        {/* What you need to know */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">What you need to know</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/90">
            {post.whatYouNeedToKnow.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Step-by-step</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground/90">
            {post.steps.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </section>

        {/* Common mistakes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Common mistakes</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/90">
            {post.commonMistakes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        {/* What CSTL can deliver */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">What CSTL can deliver</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/90">
            {post.whatCstlDelivers.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      </article>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border border-border p-7">
        <h2 className="text-lg font-semibold">Ready for implementation?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send a brief and we’ll route you to the right pillar, checklist, and delivery path.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a Project
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>

      {/* More */}
      {more.length ? (
        <section aria-labelledby="more" className="mt-12">
          <h2 id="more" className="text-lg font-semibold">
            More Articles
          </h2>
          <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug} className="rounded-2xl border border-border p-5">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="mt-2 text-xs text-muted-foreground">{formatDate(p.publishedAtISO)}</div>
                <Link
                  href={`/insights/articles/${p.slug}`}
                  className="mt-4 inline-flex rounded-xl border border-border px-4 py-2 text-sm hover:border-foreground"
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
