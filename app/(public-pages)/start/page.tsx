import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, FileText, Shield } from "lucide-react";

import { SITE } from "@/content/site";
import { BASE_URL } from "@/lib/site-url";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import StartProjectForm from "@/components/forms/start-project-form";
import Reveal, { RevealItem } from "@/components/motion/reveal";


const whatsappLink = `https://wa.me/${SITE.contact.phoneTel.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: `Start a Project | ${SITE.shortName} — ${SITE.positioningLine}`,
  description:
    "Submit a project brief to Coast System & Technologies Limited. We’ll review, route you to the right service pillar, and respond with next steps, checklist, and proposal/call options.",
  alternates: {
    canonical: `${BASE_URL}/start`,
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `Start a Project | ${SITE.shortName}`,
    description:
      "Submit a project brief. We’ll route it to the right pillar and respond with next steps, checklist, and engagement options.",
    url: `${BASE_URL}/start`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Start a Project | ${SITE.shortName}`,
    description:
      "Submit a project brief. We’ll route it to the right pillar and respond with next steps, checklist, and engagement options.",
  },
};

const steps = [
  {
    icon: FileText,
    title: "Submit your brief (2–5 minutes)",
    body: "Share enough context for us to scope correctly. Attach anything you already have.",
  },
  {
    icon: Shield,
    title: "We review + route correctly",
    body: "Right pillar, right checklist, and the cleanest engagement path for your outcome.",
  },
  {
    icon: Clock3,
    title: "You receive next steps",
    body: "Proposal outline, checklist, or a strategy call invite—depending on complexity.",
  },
];

export default function StartProjectPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(30,27,75,0.14),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(201,162,39,0.10),transparent_35%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Left */}
            <div className="md:col-span-7">
              <Reveal variant="fade" duration={0.35} y={6}>
                <p className="text-sm text-muted-foreground">
                  Clear scope • Clean delivery • Serious outcomes
                </p>
              </Reveal>

              <Reveal delay={0.06} y={8} duration={0.45}>
                <h1 className="mt-3 font-heading text-4xl leading-tight tracking-tight md:text-5xl">
                  Start a Project
                </h1>
              </Reveal>

              <Reveal delay={0.12} y={8} duration={0.45}>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                  Tell us what you’re building and what outcome you want. We’ll route it to the right
                  CSTL pillar and respond with next steps.
                </p>
              </Reveal>

              <Reveal delay={0.18} y={6} duration={0.4}>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href="#start-form">
                      Start Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Book a Strategy Call</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.22} variant="fade" duration={0.35}>
                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4 text-[color:var(--cstl-gold,#C9A227)]" />
                  <span>{SITE.signature}</span>
                </div>
              </Reveal>
            </div>

            {/* Right */}
            <Reveal className="md:col-span-5" delay={0.14} y={10} duration={0.5}>
              <div className="md:col-span-5">
                <Card className="bg-card/70">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">
                      What you’ll receive from us
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground/70" />
                      <span>
                        A recommended pillar + engagement path (package / custom scope / retainer)
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground/70" />
                      <span>A checklist of required documents</span>
                    </div>

                    <div className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground/70" />
                      <span>
                        Either a proposal outline or a strategy call invite (depending on complexity)
                      </span>
                    </div>

                    <Separator className="my-4" />

                    <div className="text-xs">
                      <span className="font-medium text-foreground">Urgent?</span>{" "}
                      Email{" "}
                      <a className="underline underline-offset-4" href={`mailto:${SITE.contact.email}`}>
                        {SITE.contact.email}
                      </a>{" "}
                      or WhatsApp{" "}
                      <a
                        className="underline underline-offset-4"
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {SITE.contact.phoneDisplay}
                      </a>
                      .
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>

          {/* How it works */}
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s, idx) => (
              <RevealItem
                key={s.title}
                delay={0.06 + idx * 0.08}
                y={8}
                duration={0.45}
                className="list-none"
              >
                <Card className="bg-card/70">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="font-heading text-lg">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{s.body}</CardContent>
                </Card>
              </RevealItem>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section id="start-form" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-4" y={8} duration={0.45}>
              <div>
                <h2 className="font-heading text-2xl tracking-tight">Project Brief</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share enough context for us to scope correctly. Attach anything you already have.
                </p>

                <div className="mt-6 rounded-xl border bg-card/70 p-4 text-xs text-muted-foreground">
                  <p className="font-medium text-foreground">Confidentiality</p>
                  <p className="mt-1">
                    Your information is treated as confidential and used only to evaluate and respond
                    to your request.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.08} y={10} duration={0.5}>
              <div className="md:col-span-8">
                <StartProjectForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

