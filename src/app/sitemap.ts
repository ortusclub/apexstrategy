import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Only services with real content — see `indexable` in @/lib/site.
    ...SERVICES.filter((service) => service.indexable).map((service) => ({
      url: `${SITE_URL}/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ];
}
