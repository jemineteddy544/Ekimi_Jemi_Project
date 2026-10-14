/**
 * Absolute base URL of the live site — used for metadata, sitemap and robots.
 * NEXT_PUBLIC_SITE_URL wins (set it once a custom domain is live); otherwise
 * Netlify's URL or Vercel's production domain, falling back to local dev.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const whatsappLink = (number: string, text?: string) =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
