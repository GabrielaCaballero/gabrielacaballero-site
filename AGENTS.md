<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project rules

- Content lives in `src/lib/` (`site.ts`, `about.ts`, `experience.ts`, `media.ts`). Pages only render it — edit data there, not in JSX.
- Every page must be readable without JavaScript (static export). Prefer server components and native HTML (`<details>`) over client state; only `Navbar`, `CopyEmail` and `LatentGame` are client components.
- When content changes, update `public/llms.txt` to match.
- Never publish a phone number.
- Public-safe content only (see the comment at the top of `src/lib/experience.ts`): launched products, public press, already-published metrics. No internal system details, unreleased work or internal team names.
- Photos: compress to WebP (≤1100px) in `public/photos/` before adding.
