import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/experience/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/media/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact/`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
