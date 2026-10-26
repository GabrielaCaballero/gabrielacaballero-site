// Single source of truth for who Gabriela is and where she lives online.
// The layout's JSON-LD, the page metadata, the footer, the contact page and
// public/llms.txt all describe the same person — keep them in sync by editing
// here (and llms.txt, which is static text) rather than in each page.

export const SITE_URL = "https://gabrielacaballero.com";
export const SITE_NAME = "Gabriela Caballero";
export const JOB_TITLE = "Technical Product Manager";

export const TAGLINE =
  "I solve complex information challenges and build delightful AI experiences by bridging deep technical strategy with user-centric design.";

export const SITE_DESCRIPTION =
  "Gabriela Caballero is a Technical Product Manager at Google in Zurich, working on AI Foundations — the retrieval and context systems that ground AI in information. Previously YouTube Shopping, Google Sheets and Google Maps.";

export const MISSION =
  "To create bridges between technology and humanity by simplifying the complex and telling meaningful stories.";

export const VISION =
  "I envision a future where technology evolves into an intuitive, active partner, anticipating our needs and augmenting human potential.";

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
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];
