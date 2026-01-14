// lib/insights/content.ts
import { BASE_URL } from "@/lib/site-url";
import type { PillarTag } from "@/components/insights/PillarChips";

export type InsightType = "founders-corner" | "article" | "faq";

export type FounderPost = {
  type: "founders-corner";
  slug: string;
  title: string;
  hook: string;
  excerpt: string;
  pillarTags: PillarTag[];
  publishedAtISO: string;
  updatedAtISO?: string;
  readingTimeMins: number;
  ogImageUrl?: string;
  sections: Array<{ subhead: string; body: string }>;
  principleLine: string;
};

export type ArticlePost = {
  type: "article";
  slug: string;
  title: string;
  excerpt: string;
  pillarTags: PillarTag[];
  publishedAtISO: string;
  updatedAtISO?: string;
  readingTimeMins: number;
  ogImageUrl?: string;
  problemStatement: string;
  whatYouNeedToKnow: string[];
  steps: string[];
  commonMistakes: string[];
  whatCstlDelivers: string[];
};

export type FaqPost = {
  type: "faq";
  slug: string;
  title: string;
  excerpt: string;
  pillarTags: PillarTag[];
  publishedAtISO: string;
  updatedAtISO?: string;
  readingTimeMins: number;
  ogImageUrl?: string;
};

export type InsightPost = FounderPost | ArticlePost | FaqPost;

export const founderPosts: FounderPost[] = [
  {
    type: "founders-corner",
    slug: "the-structure-behind-great-companies",
    title: "The Structure Behind Great Companies",
    hook: "Talent builds speed. Structure builds endurance.",
    excerpt:
      "Most companies don’t fail for lack of effort—they fail because decisions, approvals, and ownership are not designed to hold pressure.",
    pillarTags: ["Governance & Structuring", "Legal-Tech & Compliance Systems"],
    publishedAtISO: "2026-01-02",
    updatedAtISO: "2026-01-02",
    readingTimeMins: 4,
    ogImageUrl: `${BASE_URL}/assets/og/founders-corner.jpg`,
    sections: [
      {
        subhead: "Structure is not bureaucracy",
        body: "Structure is clarity: who owns decisions, who approves what, and what must be documented before money and reputation move.",
      },
      {
        subhead: "Speed without control becomes expensive",
        body: "When approvals are informal, teams repeat mistakes. A good system removes debate from repeatable work.",
      },
      {
        subhead: "Continuity is designed, not hoped for",
        body: "Governance is the operating layer that keeps execution consistent—even when the founder is absent.",
      },
    ],
    principleLine: "Build systems that can outlive urgency.",
  },
];

export const articlePosts: ArticlePost[] = [
  {
    type: "article",
    slug: "how-to-install-an-approval-matrix-that-actually-gets-used",
    title: "How to Install an Approval Matrix That Actually Gets Used",
    excerpt:
      "A practical, Nigeria-grounded approach to defining authority limits, routing approvals, and reducing decision delays without chaos.",
    pillarTags: ["Governance & Structuring"],
    publishedAtISO: "2026-01-02",
    updatedAtISO: "2026-01-02",
    readingTimeMins: 9,
    ogImageUrl: `${BASE_URL}/assets/og/articles.jpg`,
    problemStatement:
      "Approvals are slow, inconsistent, and often happen on WhatsApp—creating risk, confusion, and repeated disputes.",
    whatYouNeedToKnow: [
      "An approval matrix is a control tool, not a document for decoration.",
      "Your thresholds must reflect real transaction sizes and roles in your org.",
      "Routing must match how your team actually works (Drive/M365/Notion, etc.).",
    ],
    steps: [
      "List the decisions that move money, risk, or reputation (payments, discounts, hires, vendor onboarding, filings).",
      "Define authority roles (requester, reviewer, approver, final approver) and escalation paths.",
      "Set thresholds per decision type (₦ ranges, risk level, exceptions).",
      "Create a simple routing workflow (who sends what to whom, and where it gets stored).",
      "Publish as a 1-page matrix + a short policy note; train the team with 3–5 real scenarios.",
      "Install version control: owner, review cadence, change log.",
    ],
    commonMistakes: [
      "Making thresholds unrealistic (forcing everything to MD).",
      "No storage/record rule (approvals disappear in chats).",
      "No exception handling (urgent cases cause policy-breaking).",
    ],
    whatCstlDelivers: [
      "Approval matrix + authority limits document (audit-friendly).",
      "Routing workflow + storage/version-control rules.",
      "Template pack for approval requests + exception logs.",
      "Implementation roadmap and adoption guidance.",
    ],
  },
];

export function getAllPosts(): InsightPost[] {
  const all = [...founderPosts, ...articlePosts];
  return all.sort((a, b) => (a.publishedAtISO < b.publishedAtISO ? 1 : -1));
}

export function getPostsByType(type: InsightType): InsightPost[] {
  return getAllPosts().filter((p) => p.type === type);
}

export function getPostBySlug(type: InsightType, slug: string): InsightPost | undefined {
  return getAllPosts().find((p) => p.type === type && p.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-NG", { year: "numeric", month: "short", day: "2-digit" });
}
