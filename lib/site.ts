/** Canonical production origin — override with NEXT_PUBLIC_SITE_URL on Vercel if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thelaundryproject.in"
).replace(/\/$/, "");

export const SITE_NAME = "The Laundry Project";
export const SITE_EMAIL = "hello@thelaundryproject.in";
export const SITE_PHONE = "+919752217713";

export const PUBLIC_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];
