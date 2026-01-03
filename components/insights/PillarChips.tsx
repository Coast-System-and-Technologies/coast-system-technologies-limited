// components/insights/PillarChips.tsx
import Link from "next/link";
import React from "react";

export type PillarTag =
  | "Governance & Structuring"
  | "Legal-Tech & Compliance Systems"
  | "Data Protection & Privacy (Nigeria)"
  | "Trademark & IP Protection (NIPO)"
  | "CAC Registry Services";

const ALL: PillarTag[] = [
  "Governance & Structuring",
  "Legal-Tech & Compliance Systems",
  "Data Protection & Privacy (Nigeria)",
  "Trademark & IP Protection (NIPO)",
  "CAC Registry Services",
];

export default function PillarChips({
  basePath,
  activeTag,
}: {
  basePath: string;
  activeTag?: string;
}) {
  return (
    <nav aria-label="Pillar filters" className="flex flex-wrap gap-2">
      <Link
        href={basePath}
        aria-current={!activeTag ? "page" : undefined}
        className={`rounded-full border px-3 py-1 text-sm ${
          !activeTag ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-700"
        }`}
      >
        All
      </Link>

      {ALL.map((tag) => {
        const isActive = activeTag === tag;
        const href = `${basePath}?tag=${encodeURIComponent(tag)}`;
        return (
          <Link
            key={tag}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full border px-3 py-1 text-sm ${
              isActive ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-700"
            }`}
          >
            {tag}
          </Link>
        );
      })}
    </nav>
  );
}

export { ALL as PILLAR_TAGS };
