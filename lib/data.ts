// lib/data.ts

import { INavLink } from "./types";

export const INavLinks: INavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About us",
  },
  {
    label: "Services",
    subLinks: [
      {
        href: "/corporate-legal-and-governance",
        label: "Corporate Legal & Governance",
      },
      {
        href: "/ip-trademark-and-brand-control",
        label: "IP, Trademark & Brand Control",
      },
      {
        href: "/strategic-advisory-and-startup-support",
        label: "Strategic Advisory & Startup Support",
      },
      {
        href: "/outsourcing-and-ecruitment",
        label: "Outsourcing & Recruitment",
      },
    ],
  },
  {
    label: "Packages",
    subLinks: [
      {
        href: "/trademark-starter-pack",
        label: "Trademark Starter Pack",
      },
      {
        href: "/venture-setup-suite",
        label: "Venture Setup Suite",
      },
      {
        href: "/ip-legal-shield-bundle",
        label: "IP + Legal Shield Bundle",
      },
      {
        href: "/retainer-advisory-plan",
        label: "Retainer Advisory Plan",
      },
    ],
  },
  { href: "/insights", label: "Insights" },
  { href: "/contact-us", label: "Contact" },
];
