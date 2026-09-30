import type { MetadataRoute } from "next";

// Coming-soon phase: only the waitlist flow exists. Listing pages that 404
// (about, services, blog…) tells crawlers the site is broken. Thank-you is
// noindex and disallowed in robots.ts, so it stays out too.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smilery.com";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/book-appointment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
