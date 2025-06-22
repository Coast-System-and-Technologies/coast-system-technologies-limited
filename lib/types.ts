// lib/types.ts

export interface INavLink {
  label: string;
  href?: string;
  subLinks?: Array<{
    label: string;
    href: string;
  }>;
}
