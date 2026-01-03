// app/cookies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cookie, Mail, Phone, ShieldCheck } from "lucide-react";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PAGE_URL = `${BASE_URL}/cookies`;
const EFFECTIVE_DATE = "01 January 2026"; // change anytime

export const metadata: Metadata = {
  title: "Cookie Policy | Coast System & Technologies Limited",
  description:
    "Learn how CSTL uses cookies and similar technologies to operate our website, improve performance, and understand usage. Manage your preferences anytime.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Cookie Policy | CSTL",
    description:
      "How CSTL uses cookies to keep the website working, improve performance, and understand usage — plus your consent controls.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | CSTL",
    description:
      "How CSTL uses cookies to keep the website working, improve performance, and understand usage — plus your consent controls.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: SITE.name,
    url: BASE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE.name,
    url: BASE_URL,
    logo: `${BASE_URL}/_next/image?url=%2Fassets%2Flogo.png&w=96&q=75`,
    email: SITE.contact.email,
    telephone: SITE.contact.phoneTel,
    sameAs: [SITE.socials.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "business inquiries",
        email: SITE.contact.email,
        telephone: SITE.contact.phoneTel,
        availableLanguage: ["en"],
        areaServed: "NG",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: `Cookie Policy | ${SITE.name}`,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Cookie Policy", item: PAGE_URL },
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(30,27,75,0.14),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(201,162,39,0.10),transparent_35%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="border border-border/60 bg-background/60">
                Cookie Policy
              </Badge>
              <Badge variant="secondary" className="border border-border/60 bg-background/60">
                Effective: {EFFECTIVE_DATE}
              </Badge>
              <Badge variant="secondary" className="border border-border/60 bg-background/60">
                CAC Registered (RC {SITE.trust.rc})
              </Badge>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Cookie Policy</h1>

            <p className="max-w-2xl text-base text-muted-foreground">
              Coast System and Technologies Limited (“CSTL”, “we”, “us”) uses cookies and similar
              technologies (like pixels and local storage) to help our website function properly,
              improve performance, and understand how visitors use our site.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[color:var(--cstl-gold,#C9A227)]" />
              <span>{SITE.signature}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main policy body */}
          <Card className="border-border/70 bg-card/70">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Policy details</CardTitle>
              <CardDescription>
                This page explains what cookies are, how we use them, and the choices you have.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">1) What Cookies Are</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They
                  help websites remember your actions and preferences (for example: form progress,
                  language settings, and analytics).
                </p>
              </div>

              <Separator />

              <div className="space-y-3">
                <h2 className="text-base font-semibold text-foreground">2) How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>

                <div className="space-y-2 rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">A) Strictly Necessary Cookies (Always On)</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Security cookies (to prevent abuse)</li>
                    <li>Session cookies (to keep forms working correctly)</li>
                    <li>Basic site functionality (navigation, load balancing)</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">B) Performance &amp; Analytics Cookies (Optional)</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Which pages are visited most often</li>
                    <li>How visitors move through the site</li>
                    <li>Errors or slow pages</li>
                  </ul>
                  <p className="mt-2">
                    We use this data to improve the website and user experience.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">C) Functional Cookies (Optional)</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Saved preferences (e.g., display settings)</li>
                    <li>Enhanced form experience</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">D) Marketing Cookies (Optional / Future)</p>
                  <p>
                    If we run advertising or retargeting in the future, marketing cookies may be used
                    to measure campaign performance and show relevant ads. If/when enabled, we will
                    request your consent.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">3) Third-Party Cookies</h2>
                <p>
                  Some cookies may be set by third-party tools we use (for example, analytics providers
                  or embedded content). These providers may collect data according to their own policies.
                  Where third-party cookies are used, we aim to keep usage minimal and purpose-based.
                </p>
              </div>

              <Separator />

              <div className="space-y-3">
                <h2 className="text-base font-semibold text-foreground">4) Your Choices (Consent &amp; Controls)</h2>
                <p>You can control cookies in three main ways:</p>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">A) Cookie Banner (Recommended)</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Accept all</li>
                    <li>Reject optional cookies</li>
                    <li>Customise preferences</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">B) Browser Settings</p>
                  <p>
                    You can delete or block cookies using your browser settings. Note: blocking strictly
                    necessary cookies may affect site functionality.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">C) Update Preferences Anytime</p>
                  <p>
                    If we implement a cookie preference button/link (recommended), you’ll be able to
                    update your choices at any time.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">5) Cookie Retention</h2>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Session cookies: expire when you close your browser</li>
                  <li>Persistent cookies: remain until they expire or you delete them</li>
                </ul>
                <p>We aim to keep cookie lifetimes reasonable and aligned with their purpose.</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">6) Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. The “Effective date” will reflect
                  the latest version.
                </p>
              </div>

              <Separator />

              <div className="space-y-3">
                <h2 className="text-base font-semibold text-foreground">7) Contact</h2>
                <div className="flex flex-col gap-2">
                  <a
                    className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                    href={`mailto:${SITE.contact.email}`}
                  >
                    <Mail className="h-4 w-4" />
                    {SITE.contact.email}
                  </a>
                  <a
                    className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                    href={`tel:${SITE.contact.phoneTel}`}
                  >
                    <Phone className="h-4 w-4" />
                    {SITE.contact.phoneDisplay}
                  </a>
                </div>

                <div className="pt-2 text-xs">
                  Also see:{" "}
                  <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
                    Privacy Policy
                  </Link>{" "}
                  •{" "}
                  <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Cookie className="h-5 w-5" />
                  Cookie banner copy (ready)
                </CardTitle>
                <CardDescription>Use this directly in your banner/modal UI.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">Title</p>
                  <p className="mt-1">Cookie Preferences</p>

                  <p className="mt-4 font-medium text-foreground">Text</p>
                  <p className="mt-1">
                    We use cookies to keep our site secure and working properly. With your permission,
                    we also use analytics cookies to understand usage and improve performance. You can
                    accept all cookies, reject optional cookies, or customise your preferences.
                  </p>

                  <Separator className="my-4" />

                  <p className="font-medium text-foreground">Buttons</p>
                  <div className="mt-2 grid gap-2">
                    <Button type="button" variant="secondary" className="w-full">
                      Accept all
                    </Button>
                    <Button type="button" variant="outline" className="w-full">
                      Reject optional
                    </Button>
                    <Button type="button" className="w-full">
                      Customise
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-medium text-foreground">Preference categories (recommended)</p>
                  <ul className="mt-2 ml-4 list-disc space-y-1">
                    <li>Strictly necessary (Always on)</li>
                    <li>Analytics (Toggle)</li>
                    <li>Functional (Toggle)</li>
                    <li>Marketing (Toggle, default off)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Need help implementing consent?</CardTitle>
                <CardDescription>
                  We can install a minimal cookie-consent UI and wire it to analytics safely.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button asChild className="gap-2">
                  <Link href="/start">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact CSTL</Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  We keep cookie usage minimal, purpose-based, and aligned with consent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
