// content/insights/articles.ts
export type ArticlePillarKey =
  | "governance"
  | "legaltech"
  | "privacy"
  | "ip"
  | "cac"
  | "all";

export const ARTICLE_PILLARS: Array<{ key: Exclude<ArticlePillarKey, "all">; label: string }> = [
  { key: "governance", label: "Governance & Structuring" },
  { key: "legaltech", label: "Legal-Tech & Compliance Systems" },
  { key: "privacy", label: "Data Protection & Privacy (Nigeria)" },
  { key: "ip", label: "Trademark & IP Protection (NIPO)" },
  { key: "cac", label: "CAC Registry Services" },
];

export type ArticlePost = {
  type: "article";
  slug: string;
  title: string;
  excerpt: string;
  pillarKeys: Exclude<ArticlePillarKey, "all">[];
  dateISO: string; // YYYY-MM-DD
  readingTimeMins: number;
};

export const ARTICLE_POSTS: ArticlePost[] = [
  {
    type: "article",
    slug: "how-to-build-an-approval-workflow-that-scales",
    title: "How to Build an Approval Workflow That Scales",
    excerpt:
      "A practical guide to designing decision rights, approval tiers, and audit trails that reduce chaos and speed up execution.",
    pillarKeys: ["governance", "legaltech"],
    dateISO: "2026-01-08",
    readingTimeMins: 10,
  },
  {
    type: "article",
    slug: "ndpa-privacy-readiness-checklist-for-nigerian-businesses",
    title: "NDPA Privacy Readiness Checklist for Nigerian Businesses",
    excerpt:
      "What to put in place: inventory, lawful basis, policies, vendor controls, breach readiness, and documentation that holds under scrutiny.",
    pillarKeys: ["privacy"],
    dateISO: "2026-01-12",
    readingTimeMins: 12,
  },
  {
    type: "article",
    slug: "nipo-trademark-filing-prep-what-to-get-right",
    title: "NIPO Trademark Filing Prep: What to Get Right",
    excerpt:
      "How to reduce rejection risk: mark selection, classes, goods/services description, ownership details, and evidence pack.",
    pillarKeys: ["ip"],
    dateISO: "2026-01-15",
    readingTimeMins: 9,
  },
  {
    type: "article",
    slug: "cac-post-incorporation-updates-common-errors",
    title: "CAC Post-Incorporation Updates: Common Errors to Avoid",
    excerpt:
      "Most delays come from avoidable mistakes. Here’s a clean checklist for updates, filings, and supporting documents.",
    pillarKeys: ["cac"],
    dateISO: "2026-01-18",
    readingTimeMins: 8,
  },
];
