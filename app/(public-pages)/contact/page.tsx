import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Facebook,
} from "lucide-react";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";
import { ContactForm } from "@/components/forms/contact-form";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import Reveal, { RevealItem } from "@/components/motion/reveal";

const whatsappLink = `https://wa.me/${SITE.contact.phoneTel.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Contact CSTL | Start a Project, Request a Quote, or Book a Strategy Call",
  description:
    "Contact Coast System & Technologies Limited for governance, compliance systems, NDPA/NDPR privacy readiness (Nigeria), NIPO trademark protection, and CAC registry services. Submit a brief to get next steps.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Contact CSTL",
    description:
      "Start a project, request a quote, or reach our executive office for governance, compliance systems, privacy readiness, trademark protection, and CAC registry services.",
    url: `${BASE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CSTL",
    description:
      "Start a project, request a quote, or reach our executive office for governance, compliance systems, privacy readiness, trademark protection, and CAC registry services.",
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
    email: SITE.contact.email,
    telephone: SITE.contact.phoneTel,
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
    sameAs: [SITE.socials.facebook],
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}/contact/#webpage`,
    url: `${BASE_URL}/contact`,
    name: `Contact ${SITE.shortName}`,
    description:
      "Contact CSTL to start a project, request a quote, or reach the executive office for governance, compliance systems, NDPA/NDPR privacy readiness (Nigeria), trademark protection (NIPO), and CAC registry services.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    mainEntity: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/contact/#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
];

export default function ContactPage() {
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
              {[
                "Nigeria-based",
                "Corporate & Technology Consultancy",
                `CAC Registered (RC ${SITE.trust.rc})`,
              ].map((label, idx) => (
                <RevealItem
                  key={label}
                  delay={0.02 + idx * 0.05}
                  y={6}
                  duration={0.35}
                >
                  <Badge
                    variant="secondary"
                    className="border border-border/60 bg-background/60"
                  >
                    {label}
                  </Badge>
                </RevealItem>
              ))}
            </div>

            <Reveal variant="fade" duration={0.32} y={6}>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s build the structure your organisation needs.
              </h1>
            </Reveal>

            <Reveal delay={0.06} y={8} duration={0.45}>
              <p className="max-w-2xl text-base text-muted-foreground">
                Use this page to reach CSTL for enquiries, proposals, and advisory
                engagements. If you already know what you want, start with Start a
                Project or Request a Quote.
              </p>
            </Reveal>

            <Reveal delay={0.1} y={8} duration={0.45}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild className="gap-2">
                  <Link href="/start">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="secondary">
                  <Link href="/start">Request a Quote</Link>
                </Button>

                <Link
                  href="/start"
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.14} variant="fade" duration={0.28}>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-[color:var(--cstl-gold,#C9A227)]" />
                <span>{SITE.signature}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Start a Project (Recommended)",
              desc:
                "Send a brief and we’ll respond with the right engagement path and next steps.",
              btnVariant: "default" as const,
              btnLabel: "Start a Project",
              href: "/start",
              extra: null,
            },
            {
              title: "Request a Quote",
              desc: "For organisations ready for scope + pricing based on their needs.",
              btnVariant: "secondary" as const,
              btnLabel: "Request a Quote",
              href: "/start",
              extra: null,
            },
            {
              title: "Call / WhatsApp",
              desc: "For quick coordination and scheduling.",
              btnVariant: "secondary" as const,
              btnLabel: "",
              href: "",
              extra: "call-whatsapp",
            },
          ].map((c, idx) => (
            <Reveal key={c.title} delay={0.04 + idx * 0.08} y={10} duration={0.5}>
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </CardHeader>

                <CardContent className={c.extra ? "space-y-2" : undefined}>
                  {!c.extra ? (
                    <Button
                      asChild
                      variant={c.btnVariant}
                      className="w-full"
                    >
                      <Link href={c.href}>{c.btnLabel}</Link>
                    </Button>
                  ) : (
                    <>
                      <Button asChild variant="secondary" className="w-full gap-2">
                        <a href={`tel:${SITE.contact.phoneTel}`}>
                          <Phone className="h-4 w-4" />
                          Call {SITE.contact.phoneDisplay}
                        </a>
                      </Button>

                      <Button asChild className="w-full gap-2">
                        <a href={whatsappLink} target="_blank" rel="noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal y={10} duration={0.5}>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06} y={10} duration={0.5}>
              <Card className="border-border/70 bg-card/70">
                <CardContent className="p-6">
                  <RevealItem y={6} duration={0.35}>
                    <h3 className="text-sm font-semibold tracking-tight">
                      Executive Office
                    </h3>
                  </RevealItem>

                  <RevealItem delay={0.04} y={8} duration={0.4}>
                    <p className="mt-2 text-sm text-muted-foreground">
                      For executive and strategic conversations:
                    </p>
                  </RevealItem>

                  <div className="mt-4 space-y-3 text-sm">
                    <RevealItem delay={0.06} y={8} duration={0.4}>
                      <a
                        className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                        href={`mailto:${SITE.contact.email}`}
                      >
                        <Mail className="h-4 w-4" /> {SITE.contact.email}
                      </a>
                    </RevealItem>

                    <RevealItem delay={0.1} y={8} duration={0.4}>
                      <a
                        className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                        href={`tel:${SITE.contact.phoneTel}`}
                      >
                        <Phone className="h-4 w-4" /> {SITE.contact.phoneDisplay}
                      </a>
                    </RevealItem>

                    <RevealItem delay={0.14} y={8} duration={0.4}>
                      <a
                        className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </RevealItem>
                  </div>

                  <Reveal delay={0.12} variant="fade" duration={0.28}>
                    <Separator className="my-5" />
                  </Reveal>

                  <RevealItem y={6} duration={0.35}>
                    <h3 className="text-sm font-semibold tracking-tight">Social</h3>
                  </RevealItem>

                  <RevealItem delay={0.04} y={8} duration={0.4}>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Keep it simple. One clean link.
                    </p>
                  </RevealItem>

                  <RevealItem delay={0.08} y={10} duration={0.45}>
                    <div className="mt-4">
                      <Button asChild variant="secondary" className="w-full gap-2">
                        <a
                          href={SITE.socials.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Facebook className="h-4 w-4" />
                          Facebook
                        </a>
                      </Button>
                    </div>
                  </RevealItem>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.12} variant="fade" duration={0.28} y={6}>
              <p className="text-xs text-muted-foreground">
                We provide advisory, systems, and filing coordination services.
                Where legal representation is required, clients may engage licensed
                counsel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
