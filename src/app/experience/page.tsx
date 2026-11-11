import type { Metadata } from "next";
import Image from "next/image";
import { AWARDS, CITIES, COMMUNITY, EDUCATION, ROLES, type City, type CityId } from "@/lib/experience";
import { CV_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Gabriela Caballero's experience at Google — AI Foundations, YouTube Shopping, Google Sheets and Google Maps — plus engineering at Globant and Intel, NYU as a Fulbright Scholar, and community work.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  // A city's postcard appears right before its first role.
  const seen = new Set<CityId>();

  return (
    <section className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="rise mb-14 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-primary via-primary-strong to-primary bg-clip-text font-display text-4xl font-bold text-transparent md:text-6xl">
            The Flight Path
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            5+ years at Google turning messy, unstructured data — video, images, spreadsheets and search indices —
            into products people actually use. With a postcard from every city along the way.
          </p>
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Download CV ↓
          </a>
        </header>

        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
          {ROLES.map((role) => {
            const firstInCity = !seen.has(role.city);
            seen.add(role.city);
            return (
              <div key={role.id} className="space-y-6">
                {firstInCity && <Postcard city={CITIES[role.city]} />}
                <article
                  id={role.id}
                  className="scroll-mt-28 rounded-3xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/60 md:p-8"
                >
                  <div className="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary">{role.org}</p>
                      <h3 className="text-xl font-bold md:text-2xl">{role.team}</h3>
                      <p className="text-sm text-muted-foreground">{role.title}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {role.period}
                    </p>
                  </div>

                  <p className="mb-4 text-muted-foreground">{role.summary}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="text-primary">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {(role.more || role.press) && (
                    // Native <details>: no JavaScript, and still in the HTML for crawlers.
                    <details className="mt-6 border-t border-border pt-5">
                      <summary className="w-fit cursor-pointer rounded-2xl bg-muted px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition hover:bg-muted/70 [details[open]_&]:bg-primary [details[open]_&]:text-primary-foreground">
                        Dive deeper
                      </summary>
                      <div className="mt-5 space-y-6">
                        {role.more && (
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {role.more.map((m) => (
                              <div key={m.name} className="rounded-2xl border border-border bg-muted/20 p-5">
                                <h4 className="mb-2 text-sm font-bold">{m.name}</h4>
                                <p className="text-xs leading-relaxed text-muted-foreground">{m.details}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {role.press && (
                          <div>
                            <h4 className="mb-3 text-sm font-bold text-primary">In the press</h4>
                            <ul className="space-y-2">
                              {role.press.map((p) => (
                                <li key={p.url}>
                                  <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between rounded-xl border border-border bg-muted/20 p-3 text-sm transition hover:border-primary/40"
                                  >
                                    {p.title}
                                    <span aria-hidden className="text-muted-foreground">↗</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </details>
                  )}
                </article>
              </div>
            );
          })}
        </div>

        <SectionTitle>Education &amp; awards</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {EDUCATION.map((e) => (
            <div key={e.school} className="rounded-3xl border border-border/60 bg-card/50 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.school}</p>
              <h3 className="mt-1 font-bold">{e.degree}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
            </div>
          ))}
          {AWARDS.map((a) => (
            <div key={a.name} className="rounded-3xl border border-border/60 bg-card/50 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Award</p>
              <h3 className="mt-1 font-bold">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {a.name} ↗
                  </a>
                ) : (
                  a.name
                )}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          ))}
        </div>

        <SectionTitle>Community</SectionTitle>
        <ul className="space-y-3 rounded-3xl border border-border/60 bg-card/50 p-6 text-sm text-muted-foreground">
          {COMMUNITY.map((c) => (
            <li key={c} className="flex gap-2">
              <span aria-hidden className="text-primary">•</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 mt-16 flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide first-of-type:mt-0">
      <span aria-hidden className="h-[3px] w-8 rounded-full bg-primary" />
      {children}
    </h2>
  );
}

// The personal side of each move, styled as a postcard with a stamp.
function Postcard({ city }: { city: City }) {
  return (
    <aside
      aria-label={`Life in ${city.name}`}
      className="relative rotate-[-0.6deg] rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 md:p-6"
    >
      <span
        aria-hidden
        className="absolute right-4 top-4 flex h-12 w-10 items-center justify-center rounded-sm border-2 border-dotted border-primary/50 bg-background text-xl"
      >
        {city.flag}
      </span>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        Postcard from {city.name} · {city.years}
      </p>
      <p className="mt-2 max-w-2xl pr-12 text-sm italic text-muted-foreground">{city.personal}</p>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {city.photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={160}
            height={112}
            loading="lazy"
            className="h-24 w-36 shrink-0 rounded-xl border border-border object-cover md:h-28 md:w-40"
          />
        ))}
      </div>
    </aside>
  );
}
