// components/insights/FaqSearch.client.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export type FaqItem = { q: string; a: string };
export type FaqGroup = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  items: FaqItem[];
};

export default function FaqSearch({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;

    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="faq-search"
          type="search"
          role="searchbox"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs…"
          aria-label="Search FAQs"
          className="w-full rounded-xl border border-border bg-card py-3.5 pl-12 pr-4 text-base text-[color:var(--primary)] placeholder:text-muted-foreground outline-none transition-colors focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
        />
      </div>

      {/* Grouped FAQs */}
      <div className="space-y-12">
        {filtered.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`group-${group.title.replace(/\s+/g, "-")}`}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2
                id={`group-${group.title.replace(/\s+/g, "-")}`}
                className="font-heading text-xl sm:text-2xl font-semibold text-[color:var(--primary)]"
              >
                {group.title}
              </h2>
              <Button asChild variant="outline" size="sm" className="w-fit">
                <Link href={group.ctaHref} className="gap-2">
                  {group.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <Accordion
              type="single"
              collapsible
              className="mt-6 space-y-2"
            >
              {group.items.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  value={`${group.title}-${idx}`}
                  className="rounded-xl border border-border bg-background/50 px-5 data-[state=open]:border-[color:var(--accent)]/25 data-[state=open]:bg-card transition-all duration-300"
                >
                  <AccordionTrigger className="py-5 text-left font-medium text-[color:var(--primary)] hover:no-underline hover:text-[color:var(--accent)] [&>svg]:size-4 [&[data-state=open]]:text-[color:var(--accent)]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-0">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center text-muted-foreground">
          No FAQs match your search. Try a different term or browse by category above.
        </p>
      )}
    </div>
  );
}
