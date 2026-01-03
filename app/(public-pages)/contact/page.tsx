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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${BASE_URL}/contact`,
      },
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
              <Badge
                variant="secondary"
                className="border border-border/60 bg-background/60"
              >
                Nigeria-based
              </Badge>
              <Badge
                variant="secondary"
                className="border border-border/60 bg-background/60"
              >
                Corporate & Technology Consultancy
              </Badge>
              <Badge
                variant="secondary"
                className="border border-border/60 bg-background/60"
              >
                CAC Registered (RC {SITE.trust.rc})
              </Badge>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s build the structure your organisation needs.
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground">
              Use this page to reach CSTL for enquiries, proposals, and advisory
              engagements. If you already know what you want, start with Start a
              Project or Request a Quote.
            </p>

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

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[color:var(--cstl-gold,#C9A227)]" />
              <span>{SITE.signature}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Start a Project (Recommended)</CardTitle>
              <CardDescription>
                Send a brief and we’ll respond with the right engagement path and
                next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/start">Start a Project</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>
                For organisations ready for scope + pricing based on their needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/start">Request a Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Call / WhatsApp</CardTitle>
              <CardDescription>
                For quick coordination and scheduling.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
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
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <ContactForm />

          <div className="space-y-6">
            <Card className="border-border/70 bg-card/70">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold tracking-tight">
                  Executive Office
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For executive and strategic conversations:
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <a
                    className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                    href={`mailto:${SITE.contact.email}`}
                  >
                    <Mail className="h-4 w-4" /> {SITE.contact.email}
                  </a>

                  <a
                    className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                    href={`tel:${SITE.contact.phoneTel}`}
                  >
                    <Phone className="h-4 w-4" /> {SITE.contact.phoneDisplay}
                  </a>

                  <a
                    className="flex items-center gap-2 underline underline-offset-4 hover:text-foreground"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>

                <Separator className="my-5" />

                <h3 className="text-sm font-semibold tracking-tight">Social</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Keep it simple. One clean link.
                </p>

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
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground">
              We provide advisory, systems, and filing coordination services.
              Where legal representation is required, clients may engage licensed
              counsel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
