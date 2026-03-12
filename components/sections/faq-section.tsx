"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/reveal";

export type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  faqs: FaqItem[];
  kicker?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function FaqSection({
  faqs,
  kicker = "FAQs",
  title = "Common questions",
  description,
  className,
}: FaqSectionProps) {
  return (
    <section
      className={`border-y border-border bg-card/40 ${className ?? ""}`}
      aria-labelledby="faq-section-title"
    >
      <div className="cstl-container py-20 sm:py-24 md:py-28">
        <Reveal variant="fade" duration={0.32} y={6}>
          <div className="w-full">
            <p className="text-xs font-medium tracking-widest text-[color:var(--accent)] uppercase">
              {kicker}
            </p>
            <h2
              id="faq-section-title"
              className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-[color:var(--primary)]"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.08} y={10} duration={0.5} className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
          >
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                value={`faq-${idx}`}
                className="rounded-2xl border border-border border-b-border bg-card px-6 last:border-b data-[state=open]:border-[color:var(--accent)]/30 data-[state=open]:shadow-lg data-[state=open]:shadow-[color:var(--accent)]/5 transition-all duration-300"
              >
                <AccordionTrigger className="py-6 text-left font-heading text-base sm:text-lg font-semibold text-[color:var(--primary)] hover:no-underline hover:text-[color:var(--accent)] [&>svg]:size-5 [&>svg]:text-muted-foreground [&[data-state=open]]:text-[color:var(--accent)] [&[data-state=open]>svg]:text-[color:var(--accent)]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-0">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
