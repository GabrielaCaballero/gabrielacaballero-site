import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Same policy as Empanadas Bochas: deliberately permissive. Being readable by
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) is the
// point — it's how assistants answer "who is Gabriela Caballero?".
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
