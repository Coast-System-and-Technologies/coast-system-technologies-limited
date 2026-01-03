// components/insights/FaqSearch.client.tsx
"use client";

import React, { useMemo, useState } from "react";

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
          (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  return (
    <div className="mt-6">
      <label htmlFor="faq-search" className="block text-sm font-medium text-gray-900">
        Search FAQs
      </label>
      <input
        id="faq-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search FAQs…"
        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-900"
      />

      <div className="mt-8 space-y-10">
        {filtered.map((group) => (
          <section key={group.title} aria-labelledby={group.title} className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">{group.title}</h2>

            <div className="space-y-3">
              {group.items.map((item) => (
                <details key={item.q} className="rounded-xl border border-gray-200 p-4">
                  <summary className="cursor-pointer text-sm font-medium text-gray-900">
                    {item.q}
                  </summary>
                  <div className="mt-3 text-sm leading-relaxed text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>

            <a
              href={group.ctaHref}
              className="inline-flex items-center rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:border-gray-900"
            >
              {group.ctaLabel}
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
