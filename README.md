# gabrielacaballero.com

Personal site of Gabriela Caballero, Technical Product Manager at Google in Zurich.

Rebuilt in Oct 2026 from the original Lovable (Vite + React SPA) version, using the same stack as the Empanadas Bochas site. The main reason: the old site rendered everything with JavaScript, so Google and AI assistants saw an almost empty page.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, exported as static HTML (`output: "export"`)
- Tailwind CSS v4
- No UI library, animation library or backend: 3 runtime dependencies (`next`, `react`, `react-dom`)

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

## Editing content

| What | File |
| --- | --- |
| Name, tagline, mission, socials, email | `src/lib/site.ts` |
| Home page: what drives me, right now | `src/lib/about.ts` |
| Experience by team, city postcards, education | `src/lib/experience.ts` |
| Interviews and talks ("As seen in") | `src/lib/media.ts` |
| Downloadable CV | `public/Gabriela_Caballero_CV.pdf` |
| Summary for AI assistants | `public/llms.txt` (keep in sync) |
| Photos | `public/photos/` (WebP, ≤1100px wide) |

## Pages

- `/` About: who I am, what drives me, right now, as seen in, and the "Enter latent space" mini-game
- `/experience` roles by team with a postcard from each city; "Dive deeper" uses native `<details>` so it's in the HTML
- `/contact` socials, copy-email, feedback form

Old URLs `/projects`, `/interviews` and `/media` redirect via `vercel.json`; `/blog` points to Substack.

## SEO / AI readability

- Every page is pre-rendered HTML with its own title, description and canonical URL
- `schema.org/Person` JSON-LD in the layout links the site to LinkedIn, Substack, YouTube and Instagram
- `robots.txt` and `sitemap.xml` generated from `src/app/robots.ts` and `src/app/sitemap.ts`
- `public/llms.txt` plain-text summary for AI assistants

## Deploying

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com) (framework preset: Next.js). No environment variables needed.
3. In Vercel → Domains, add `gabrielacaballero.com` and `www.gabrielacaballero.com`, then in GoDaddy DNS set the records Vercel shows (an `A` record for the apex and a `CNAME` for `www`).
4. Unpublish the Lovable project once the domain points to Vercel.
5. Submit `https://gabrielacaballero.com/sitemap.xml` in Google Search Console.
