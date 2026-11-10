import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  JOB_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
} from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted (src/app/fonts, Latin subset incl. á é ñ) rather than
// fetched from Google Fonts at build time: no third-party request for
// visitors, and the build works offline.
const bodyFont = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-body",
  weight: "100 900",
});
const displayFont = localFont({
  src: "./fonts/Oswald.woff2",
  variable: "--font-display",
  weight: "200 700",
});

const DEFAULT_TITLE = `${SITE_NAME} | ${JOB_TITLE} at Google, Zurich`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Each page sets its own title; %s becomes e.g. "Experience | Gabriela Caballero".
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: {
    type: "profile",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#020817",
};

// schema.org Person: this is what lets Google (and AI assistants) connect the
// site, her LinkedIn, Substack and YouTube as the same person.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/photos/gabriela-about.webp`,
  jobTitle: JOB_TITLE,
  description: SITE_DESCRIPTION,
  worksFor: { "@type": "Organization", name: "Google" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressCountry: "CH",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "New York University" },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional, Facultad Regional Córdoba",
    },
  ],
  award: "Fulbright Scholar",
  knowsAbout: [
    "Product management",
    "Hybrid and vector search",
    "Retrieval-augmented generation (RAG)",
    "LLM and multimodal evaluation",
    "Agentic workflows",
    "Computer vision",
    "Google Sheets",
    "Google Maps",
  ],
  knowsLanguage: ["English", "Spanish"],
  sameAs: SOCIALS.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
