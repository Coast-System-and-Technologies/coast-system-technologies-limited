// content/insights/founders-corner.ts
export type PillarKey =
  | "governance"
  | "legaltech"
  | "privacy"
  | "ip"
  | "cac"
  | "all";

export const PILLARS: Array<{ key: Exclude<PillarKey, "all">; label: string }> = [
  { key: "governance", label: "Governance & Structuring" },
  { key: "legaltech", label: "Legal-Tech & Compliance Systems" },
  { key: "privacy", label: "Data Protection & Privacy (Nigeria)" },
  { key: "ip", label: "Trademark & IP Protection (NIPO)" },
  { key: "cac", label: "CAC Registry Services" },
];

export type FoundersCornerPost = {
  type: "founders-corner";
  slug: string;
  title: string;
  hook: string; // 1–2 line excerpt
  pillarKeys: Exclude<PillarKey, "all">[];
  dateISO: string; // YYYY-MM-DD
  readingTimeMins: number;
};

export const FOUNDERS_CORNER_POSTS: FoundersCornerPost[] = [
  {
    type: "founders-corner",
    slug: "the-structure-behind-great-companies",
    title: "The Structure Behind Great Companies",
    hook:
      "Great companies are not built on talent alone. They are built on installed structure—decision rights, controls, and accountability that hold under pressure.",
    pillarKeys: ["governance", "legaltech"],
    dateISO: "2026-01-07",
    readingTimeMins: 5,
  },
  {
    type: "founders-corner",
    slug: "control-is-not-micromanagement",
    title: "Control Is Not Micromanagement",
    hook:
      "Control is clarity: who decides, who approves, and what proof exists. Without this, speed becomes chaos and delegation becomes risk.",
    pillarKeys: ["governance"],
    dateISO: "2026-01-10",
    readingTimeMins: 4,
  },
  {
    type: "founders-corner",
    slug: "documentation-is-a-defence-system",
    title: "Documentation Is a Defence System",
    hook:
      "Documentation is not bureaucracy. It is operational memory—how you preserve truth, authority, and continuity when people change.",
    pillarKeys: ["legaltech", "privacy"],
    dateISO: "2026-01-13",
    readingTimeMins: 4,
  },
  {
    type: "founders-corner",
    slug: "privacy-readiness-is-reputation-control",
    title: "Privacy Readiness Is Reputation Control",
    hook:
      "In Nigeria, privacy failures don’t just trigger complaints—they erode trust. Readiness is how you protect your brand when scrutiny arrives.",
    pillarKeys: ["privacy"],
    dateISO: "2026-01-16",
    readingTimeMins: 4,
  },
  {
    type: "founders-corner",
    slug: "ip-is-ownership-structure-not-a-logo",
    title: "IP Is Ownership Structure, Not a Logo",
    hook:
      "A brand name becomes an asset the moment it carries value. If you don’t secure it early, you can’t defend it later—especially during growth.",
    pillarKeys: ["ip"],
    dateISO: "2026-01-19",
    readingTimeMins: 4,
  },
  {
    type: "founders-corner",
    slug: "cac-execution-is-a-leadership-signal",
    title: "CAC Execution Is a Leadership Signal",
    hook:
      "If your registry work is sloppy, governance is already weak. Clean CAC execution is an early proof that your company is built to endure.",
    pillarKeys: ["cac", "governance"],
    dateISO: "2026-01-22",
    readingTimeMins: 4,
  },
];
