export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const NAV = {
  dropdowns: {
    services: [
      {
        label: "Governance & Structuring",
        href: "/services/governance-structuring",
        description: "Group structure, operational discipline, continuity frameworks.",
      },
      {
        label: "LegalTech & Compliance Systems",
        href: "/services/legaltech-compliance-systems",
        description: "Workflows, approval trails, compliance operations.",
      },
      {
        label: "Data Protection & Privacy",
        href: "/services/data-protection-privacy",
        description: "Nigeria-focused data governance and privacy practice.",
      },
      {
        label: "Trademark & IP",
        href: "/services/trademark-ip",
        description: "Trademark filing coordination and IP discipline.",
      },
      {
        label: "CAC Registry",
        href: "/services/cac-registry",
        description: "Registrations, filings, and compliance coordination.",
      },
      { label: "View All Services", href: "/services" },
    ] satisfies NavLink[],

    companies: [
      {
        label: "Coast Research Technology",
        href: "/companies/coast-research-technology",
        description: "Software engineering, delivery, maintenance, and talent development.",
      },
      {
        label: "CoastLink24",
        href: "/companies/coastlink24",
        description: "Fintech infrastructure and integrated lending systems.",
      },
      {
        label: "Coast Infrastructure Systems",
        href: "/companies/coast-infrastructure-systems",
        description: "Infrastructure systems, power, connectivity, installations and procurement.",
      },
      { label: "View All Companies", href: "/companies" },
    ] satisfies NavLink[],

    insights: [
      {
        label: "Insights Hub",
        href: "/insights",
        description: "Knowledge, frameworks, and operating playbooks.",
      },
      {
        label: "Founder’s Corner",
        href: "/insights/founders-corner",
        description: "Founder notes, strategy memos, and legacy thinking.",
      },
      {
        label: "Articles",
        href: "/insights/articles",
        description: "Short reads on governance, systems, and execution.",
      },
      {
        label: "FAQs",
        href: "/insights/faqs",
        description: "Answers to common questions about CSTL services.",
      },
    ] satisfies NavLink[],
  },

  primary: [
    { label: "About", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Clients & Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],

  ctas: {
    start: { label: "Start a Project", href: "/start" },
  },
} as const;
