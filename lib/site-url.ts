// lib/site-url.ts
export const BASE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ??
  "https://coastsystemtechnologies.com.ng";
