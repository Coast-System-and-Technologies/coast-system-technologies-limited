// app/(public-pages)/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const EFFECTIVE_DATE = "[Insert date]"; // update when publishing

const EMAIL = SITE.contact.email;
const PHONE_TEL = SITE.contact.phoneTel;
const PHONE_DISPLAY = SITE.contact.phoneDisplay;

export const metadata: Metadata = {
  title: "Privacy Policy | Coast System & Technologies Limited",
  description:
    "How CSTL collects, uses, shares, and protects personal data, and how to contact us about your privacy rights.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Privacy Policy | Coast System & Technologies Limited",
    description:
      "How CSTL collects, uses, shares, and protects personal data, and how to contact us about your privacy rights.",
    url: `${BASE_URL}/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Coast System & Technologies Limited",
    description:
      "How CSTL collects, uses, shares, and protects personal data, and how to contact us about your privacy rights.",
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
    // If you have a logo at /public/assets/logo.png, this is perfect:
    logo: `${BASE_URL}/assets/logo.png`,
    email: EMAIL,
    telephone: PHONE_TEL,
    sameAs: [SITE.socials.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "privacy inquiries",
        email: EMAIL,
        telephone: PHONE_TEL,
        availableLanguage: ["en"],
        areaServed: "NG",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/privacy/#webpage`,
    url: `${BASE_URL}/privacy`,
    name: "Privacy Policy | Coast System & Technologies Limited",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/privacy/#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Privacy", item: `${BASE_URL}/privacy` },
    ],
  },
];

const toc = [
  { href: "#who-we-are", label: "1) Who We Are (Data Controller)" },
  { href: "#data-we-collect", label: "2) Personal Data We Collect" },
  { href: "#why-we-use", label: "3) Why We Use Personal Data" },
  { href: "#legal-basis", label: "4) Legal Basis for Processing" },
  { href: "#cookies", label: "5) Cookies & Analytics" },
  { href: "#sharing", label: "6) Sharing & Disclosures" },
  { href: "#international", label: "7) International Transfers" },
  { href: "#security", label: "8) Data Security" },
  { href: "#retention", label: "9) Data Retention" },
  { href: "#rights", label: "10) Your Rights" },
  { href: "#children", label: "11) Children’s Privacy" },
  { href: "#updates", label: "12) Updates to This Policy" },
];

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-base font-semibold tracking-tight text-foreground md:text-lg"
    >
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
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
                NDPA/NDPR (Nigeria)
              </Badge>
              <Badge variant="secondary" className="border border-border/60 bg-background/60">
                Effective: {EFFECTIVE_DATE}
              </Badge>
              <Badge variant="secondary" className="border border-border/60 bg-background/60">
                RC {SITE.trust.rc}
              </Badge>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground">
              Coast System and Technologies Limited (“CSTL”, “we”, “us”) respects your privacy and is
              committed to handling personal data responsibly. This policy explains how we collect,
              use, share, store, and protect personal data when you visit our website, contact us, or
              use our services.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[color:var(--cstl-gold,#C9A227)]" />
              <span>{SITE.signature}</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="gap-2">
                <Link href="/start">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="secondary">
                <Link href="/contact">Contact Executive Office</Link>
              </Button>

              <Link
                href="/cookies"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main */}
          <div className="space-y-8">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="text-base">Quick summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  We collect contact details, project details, and uploaded files you provide; and
                  limited usage/device data via cookies/analytics.
                </p>
                <p>
                  We use data to respond, deliver services, coordinate workflows/filings, improve the
                  site, maintain security, and meet legal obligations.
                </p>
                <p>
                  For privacy requests, email{" "}
                  <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6 text-sm leading-6 text-muted-foreground">
              <SectionTitle id="who-we-are">1) Who We Are (Data Controller)</SectionTitle>
              <div className="space-y-2">
                <p className="text-foreground/90">
                  Company: <span className="font-medium">{SITE.name}</span>
                </p>
                <p className="text-foreground/90">
                  Email:{" "}
                  <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </p>
                <p className="text-foreground/90">
                  Phone:{" "}
                  <a className="underline underline-offset-4" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  If you contact us, submit a form, request a proposal, or start a project, we process
                  your data to respond and deliver services.
                </p>
              </div>

              <Separator />

              <SectionTitle id="data-we-collect">2) Personal Data We Collect</SectionTitle>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">A. Information you provide</p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>Name, email, phone number, company name, role/title</li>
                    <li>Project details (briefs, timelines, requirements)</li>
                    <li>Uploaded files (documents, brand assets, compliance materials)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-foreground">B. Information collected automatically</p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>Device and browser information</li>
                    <li>IP address, approximate location, referral source</li>
                    <li>Pages viewed and interactions (via cookies/analytics)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-foreground">C. Information from partners</p>
                  <p>
                    Where applicable, data provided through accredited filing partners or service
                    partners as part of a client engagement (only to the extent necessary to deliver
                    your request).
                  </p>
                </div>
              </div>

              <Separator />

              <SectionTitle id="why-we-use">3) Why We Use Personal Data</SectionTitle>
              <ul className="ml-5 list-disc space-y-1">
                <li>Respond to enquiries and project briefs</li>
                <li>Provide proposals, services, and delivery updates</li>
                <li>Coordinate filings and service workflows (where applicable)</li>
                <li>Improve our website and user experience</li>
                <li>Maintain security, prevent abuse, and keep operational records</li>
                <li>Comply with legal obligations where required</li>
              </ul>

              <Separator />

              <SectionTitle id="legal-basis">4) Legal Basis for Processing</SectionTitle>
              <ul className="ml-5 list-disc space-y-1">
                <li>Consent (e.g., when you opt into communications)</li>
                <li>Contract / pre-contract steps (e.g., responding to “Start a Project” submissions)</li>
                <li>Legal obligations (where applicable)</li>
                <li>Legitimate interests (e.g., security, service improvement), balanced with your rights</li>
              </ul>

              <Separator />

              <SectionTitle id="cookies">5) Cookies & Analytics</SectionTitle>
              <div className="space-y-2">
                <p>We may use cookies and similar technologies to:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Keep the site working correctly</li>
                  <li>Understand performance and usage</li>
                  <li>Improve content and conversion flows</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. See our{" "}
                  <Link className="underline underline-offset-4 hover:text-foreground" href="/cookies">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              <Separator />

              <SectionTitle id="sharing">6) Sharing & Disclosures</SectionTitle>
              <div className="space-y-2">
                <p>We may share personal data with:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Service providers (e.g., hosting, email delivery, analytics)</li>
                  <li>
                    Professional/regulated partners (only where required to deliver a service request
                    such as filings or international IP support via accredited partners)
                  </li>
                  <li>Authorities if required by law or to protect rights, safety, and integrity</li>
                </ul>
                <p className="font-medium text-foreground">We do not sell personal data.</p>
              </div>

              <Separator />

              <SectionTitle id="international">7) International Transfers</SectionTitle>
              <p>
                If a service requires international processing (e.g., international filings via
                accredited partners), we take reasonable steps to ensure data is handled with
                appropriate safeguards and only for the intended purpose.
              </p>

              <Separator />

              <SectionTitle id="security">8) Data Security</SectionTitle>
              <p>
                We apply reasonable technical and organisational measures designed to protect personal
                data against unauthorised access, loss, misuse, or alteration.
              </p>

              <Separator />

              <SectionTitle id="retention">9) Data Retention</SectionTitle>
              <ul className="ml-5 list-disc space-y-1">
                <li>As long as needed to respond and deliver services</li>
                <li>As needed for operational records, compliance, and dispute resolution</li>
                <li>Then securely delete or anonymise where appropriate</li>
              </ul>

              <Separator />

              <SectionTitle id="rights">10) Your Rights</SectionTitle>
              <div className="space-y-2">
                <p>Depending on applicable law and context, you may request:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Access to personal data we hold about you</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion (where applicable)</li>
                  <li>Withdrawal of consent (where processing is based on consent)</li>
                  <li>Restriction/objection in certain circumstances</li>
                </ul>
                <p>
                  To make a request: email{" "}
                  <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  .
                </p>
              </div>

              <Separator />

              <SectionTitle id="children">11) Children’s Privacy</SectionTitle>
              <p>
                Our services are intended for business users. We do not knowingly collect personal
                data from children through our business forms.
              </p>

              <Separator />

              <SectionTitle id="updates">12) Updates to This Policy</SectionTitle>
              <p>
                We may update this Privacy Policy from time to time. The “Effective date” will reflect
                the latest version.
              </p>
            </div>

            <Card className="border-border/70 bg-card/70">
              <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">Privacy questions?</p>
                  <p className="text-sm text-muted-foreground">
                    Reach the Executive Office for privacy requests and enquiries.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="secondary" className="gap-2">
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="gap-2">
                    <a href={`tel:${PHONE_TEL}`}>
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <Link href="/start">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services/data-protection-privacy">
                  NDPA/NDPR Privacy Readiness (Nigeria)
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="text-base">On this page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {toc.map((t) => (
                  <a
                    key={t.href}
                    href={t.href}
                    className="block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {t.label}
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="text-base">Related</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <Link
                  href="/cookies"
                  className="block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/contact"
                  className="block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Contact
                </Link>
                <Link
                  href="/start"
                  className="block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Start a Project
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
