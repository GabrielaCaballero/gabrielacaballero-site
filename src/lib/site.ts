// Single source of truth for who Gabriela is and where she lives online.
// The layout's JSON-LD, the page metadata, the footer, the contact page and
// public/llms.txt all describe the same person — keep them in sync by editing
// here (and llms.txt, which is static text) rather than in each page.

export const SITE_URL = "https://gabrielacaballero.com";
export const SITE_NAME = "Gabriela Caballero";
export const JOB_TITLE = "Technical AI Product Manager";

// One-line positioning, distilled from Gabriela's Ikigai: research and
// synthesis + explaining technical things + AI that works for everyone.
export const TAGLINE =
  "I make AI useful and understandable — building the retrieval systems that ground it, and telling the stories that help everyone benefit from it, not just the most technical.";

export const SITE_DESCRIPTION =
  "Gabriela Caballero is a Technical AI Product Manager at Google in Zurich, working on the retrieval and context systems that ground Google's AI. Previously YouTube Shopping, Google Sheets and Google Maps.";

// Public-safe version of the CV (same rules as src/lib/experience.ts: no
// internal metrics or system details). To update, replace the PDF file in
// /public with a new export under the same name.
export const CV_PATH = "/Gabriela_Caballero_CV.pdf";

// Email is copied by a button rather than rendered as a mailto: link, so it
// isn't sitting in the static HTML for address-harvesting bots. The phone
// number was removed from the site on purpose (Oct 2026) — don't add it back.
export const EMAIL = "lmgabrielac@gmail.com";

export type Social = { label: string; url: string };

export const SOCIALS: Social[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/gabrielacaballero/" },
  { label: "Substack", url: "https://substack.com/@gabycaballero" },
  { label: "YouTube", url: "https://www.youtube.com/channel/UCnZPgwSbAoaFxDB_sAUzv8A" },
  { label: "Instagram", url: "https://www.instagram.com/gabrielacaballer/" },
];

export const FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdkVZ6rZoK6ei7lGyiYfolt8a017QfhMtpWhAuKDVLrMeQs1w/viewform?usp=dialog";

export const NAV_LINKS = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];
