// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import Reveal, { RevealItem } from "@/components/motion/reveal";

import { SITE } from "@/content/site";

// Keep this local to avoid type issues while you're fixing lib/site-url.ts
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ??
  "https://coastsystemtechnologies.com.ng";

const PAGE_URL = `${BASE_URL}/terms`;

export const metadata: Metadata = {
  title: "Terms of Service | Coast System & Technologies Limited",
  description:
    "Website terms, service engagement terms, disclaimers, IP, confidentiality, payments, and limitations of liability for CSTL.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Terms of Service | Coast System & Technologies Limited",
    description:
      "Website terms and service engagement terms for CSTL: confidentiality, IP, disclaimers, and limitation of liability.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Coast System & Technologies Limited",
    description:
      "Website terms and service engagement terms for CSTL: confidentiality, IP, disclaimers, and limitation of liability.",
  },
};

const sections = [
  { id: "about", title: "1) About CSTL" },
  { id: "website-use", title: "2) Website Use" },
  { id: "engagement", title: "3) Service Requests & Engagement" },
  { id: "no-legal-rep", title: "4) No Legal Representation Claim (Important)" },
  { id: "third-party", title: "5) Third-Party / Accredited Partner Services" },
  { id: "fees", title: "6) Fees, Official Charges & Payments" },
  { id: "confidentiality", title: "7) Confidentiality" },
  { id: "ip", title: "8) Intellectual Property" },
  { id: "disclaimers", title: "9) Disclaimers" },
  { id: "liability", title: "10) Limitation of Liability" },
  { id: "termination", title: "11) Termination" },
  { id: "law", title: "12) Governing Law" },
  { id: "contact", title: "13) Contact" },
] as const;

const termsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: "Terms of Service | Coast System & Technologies Limited",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
};

export default function TermsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          <Reveal variant="fade" duration={0.25} y={6}>
            <p className="text-sm text-muted-foreground">
              Legal • Website Use • Service Engagement
            </p>
          </Reveal>

          <Reveal variant="liftScale" duration={0.45} y={10}>
            <h1 className="mt-3 font-heading text-4xl leading-tight tracking-tight md:text-5xl">
              Terms of Service
            </h1>
          </Reveal>

          <Reveal delay={0.06} variant="fade" duration={0.25} y={6}>
            <p className="mt-3 text-sm text-muted-foreground">
              Effective date:{" "}
              <span className="font-medium text-foreground">[Insert date]</span>
            </p>
          </Reveal>

          <Reveal delay={0.1} variant="lift" duration={0.4} y={10}>
            <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
              These Terms govern your use of the CSTL website and any engagement initiated through our
              website, email, or official communication channels. By using our website or submitting
              a request, you agree to these Terms.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            {[
              { key: "sig", text: SITE.signature },
              { key: "pos", text: SITE.positioningLine },
            ].map((pill, idx) => (
              <RevealItem key={pill.key} delay={0.14 + idx * 0.05} y={6} duration={0.3}>
                <span className="rounded-full border px-3 py-1">{pill.text}</span>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ON THIS PAGE */}
      <section className="border-b bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Reveal variant="fade" duration={0.25} y={6}>
            <h2 className="font-heading text-lg tracking-tight">On this page</h2>
          </Reveal>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {sections.map((s, idx) => (
              <li key={s.id}>
                <RevealItem delay={0.02 + idx * 0.03} y={6} duration={0.35}>
                  <a
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                    href={`#${s.id}`}
                  >
                    {s.title}
                  </a>
                </RevealItem>
              </li>
            ))}
          </ul>

          <Reveal delay={0.06} variant="fade" duration={0.25} y={6}>
            <p className="mt-6 text-xs text-muted-foreground">
              Need privacy details instead? See{" "}
              <Link className="underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-14">
          <div className="space-y-10">
            {/* 1 */}
            <section id="about" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">1) About CSTL</h2>
              </Reveal>
              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  Coast System and Technologies Limited (“CSTL”, “we”, “us”) provides governance and
                  structuring services, compliance systems support, data protection/privacy
                  implementation (Nigeria), trademark/IP protection support, and CAC registry services
                  (accredited agent channel), as described on our website.
                </p>
              </Reveal>
            </section>

            {/* 2 */}
            <section id="website-use" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">2) Website Use</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">You agree not to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>misuse the website</li>
                    <li>attempt unauthorised access</li>
                    <li>upload malicious content</li>
                    <li>copy or republish content without permission</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We may suspend access if misuse is detected.
                  </p>
                </>
              </Reveal>
            </section>

            {/* 3 */}
            <section id="engagement" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">
                  3) Service Requests &amp; Engagement
                </h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Submitting a form or contacting CSTL does not create a binding contract. A binding
                    engagement starts only when:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>scope is agreed in writing (proposal/statement of work), and</li>
                    <li>commercial terms are accepted, and</li>
                    <li>any required deposit/payment is received (if applicable).</li>
                  </ul>
                </>
              </Reveal>
            </section>

            {/* 4 */}
            <section id="no-legal-rep" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">
                  4) No Legal Representation Claim (Important)
                </h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  CSTL provides structure, documentation architecture, and operational implementation
                  support. Where legal representation, litigation, or regulated legal drafting is
                  required, clients may engage licensed counsel. CSTL may coordinate alongside counsel
                  for workflow and documentation consistency.
                </p>
              </Reveal>
            </section>

            {/* 5 */}
            <section id="third-party" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">
                  5) Third-Party / Accredited Partner Services
                </h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Where a service requires accredited channels or partners (e.g., international filings
                    via accredited partners), CSTL will:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>coordinate documentation readiness and process flow, and</li>
                    <li>inform you of partner involvement where relevant.</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Third-party terms may apply for partner-delivered components.
                  </p>
                </>
              </Reveal>
            </section>

            {/* 6 */}
            <section id="fees" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">
                  6) Fees, Official Charges &amp; Payments
                </h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">Unless otherwise stated:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>
                      CSTL service fees are separate from official fees/charges (e.g., CAC or trademark registry fees).
                    </li>
                    <li>Quotes are valid for a defined period stated on the proposal.</li>
                    <li>Work may be paused if payments are overdue.</li>
                  </ul>
                </>
              </Reveal>
            </section>

            {/* 7 */}
            <section id="confidentiality" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">7) Confidentiality</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  We treat client information as confidential and use it only for delivery and
                  communication. We may disclose information only where legally required or with your
                  permission.
                </p>
              </Reveal>
            </section>

            {/* 8 */}
            <section id="ip" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">8) Intellectual Property</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">
                    All CSTL website content, brand assets, text, and materials are owned by CSTL unless
                    otherwise stated.
                  </p>
                  <div className="mt-4 rounded-xl border bg-card/40 p-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">For client engagements:</span>{" "}
                      Deliverables remain CSTL intellectual property until full payment is made (unless
                      your contract says otherwise). After payment, you receive a license to use the
                      deliverables for your internal business purposes.
                    </p>
                  </div>
                </>
              </Reveal>
            </section>

            {/* 9 */}
            <section id="disclaimers" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">9) Disclaimers</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">We aim for accuracy, but:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>the website is provided “as is”</li>
                    <li>outcomes may vary based on client inputs, regulator timelines, and external dependencies</li>
                    <li>
                      Regulatory processing timelines (CAC/NIPO) are outside CSTL’s control, though we
                      maintain disciplined coordination and tracking.
                    </li>
                  </ul>
                </>
              </Reveal>
            </section>

            {/* 10 */}
            <section id="liability" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">10) Limitation of Liability</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  To the maximum extent permitted by law, CSTL will not be liable for indirect or
                  consequential losses (e.g., loss of profit, loss of data, business interruption).
                  CSTL’s total liability for any claim is limited to the fees paid for the specific
                  service giving rise to the claim, except where law prohibits such limitation.
                </p>
              </Reveal>
            </section>

            {/* 11 */}
            <section id="termination" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">11) Termination</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  Either party may terminate an engagement as provided in the signed proposal/contract.
                  Fees for completed work and non-refundable official costs remain payable.
                </p>
              </Reveal>
            </section>

            {/* 12 */}
            <section id="law" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">12) Governing Law</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <p className="mt-3 text-sm text-muted-foreground">
                  These Terms are governed by the laws of the Federal Republic of Nigeria, and disputes
                  will be subject to the competent courts in Nigeria unless otherwise agreed in writing.
                </p>
              </Reveal>
            </section>

            {/* 13 */}
            <section id="contact" className="scroll-mt-28">
              <Reveal variant="fade" duration={0.25} y={6}>
                <h2 className="font-heading text-2xl tracking-tight">13) Contact</h2>
              </Reveal>

              <Reveal delay={0.04} variant="lift" duration={0.4} y={10}>
                <>
                  <p className="mt-3 text-sm text-muted-foreground">For legal/terms questions:</p>

                  <div className="mt-4 rounded-xl border bg-card/40 p-4">
                    <p className="text-sm">
                      <span className="font-medium">Email:</span>{" "}
                      <a className="underline underline-offset-4" href={`mailto:${SITE.contact.email}`}>
                        {SITE.contact.email}
                      </a>
                    </p>
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Phone:</span>{" "}
                      <a className="underline underline-offset-4" href={`tel:${SITE.contact.phoneTel}`}>
                        {SITE.contact.phoneDisplay}
                      </a>
                    </p>
                  </div>

                  <p className="mt-5 text-xs text-muted-foreground">
                    Prefer to start an engagement? Use{" "}
                    <Link className="underline underline-offset-4" href="/start">
                      Start a Project
                    </Link>
                    .
                  </p>
                </>
              </Reveal>
            </section>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />
    </main>
  );
}
