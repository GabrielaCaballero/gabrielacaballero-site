import type { Metadata } from "next";
import Image from "next/image";
import { TIMELINE } from "@/lib/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Gabriela Caballero's path from Córdoba to Zurich: Google AI Foundations, YouTube Shopping, Google Sheets (Tables), Google Maps, NYU as a Fulbright Scholar, and engineering at Globant.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <section className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="rise mb-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-primary via-primary-strong to-primary bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">
            The Flight Path
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From Córdoba to Zurich — a product manager&apos;s path through four cities, driven by curiosity, data,
            and a love for building.
          </p>
        </header>

        <ol className="relative space-y-12 border-l border-border/60 pl-6 md:pl-10">
          {TIMELINE.map((era) => (
            <li key={era.id} id={era.id} className="relative scroll-mt-28">
              <span
                aria-hidden
                className="absolute -left-[33px] top-8 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[49px]"
              />
              <article className="group rounded-3xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/60 md:p-10">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{era.period}</p>
                <h2 className="mt-1 text-xl font-bold md:text-2xl">{era.role}</h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  <span aria-hidden>{era.flag}</span> {era.location}
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <p className="mb-4 text-muted-foreground">{era.summary}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {era.achievements.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span aria-hidden className="text-primary">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <aside className="rounded-2xl border border-primary/20 bg-background/40 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Personal side</p>
                    <p className="text-sm italic text-muted-foreground">&ldquo;{era.personal}&rdquo;</p>
                  </aside>
                </div>

                {/* Native <details>: opens without JavaScript and the content
                    stays in the HTML, so crawlers read the deep dive too. */}
                <details className="mt-6 border-t border-border pt-6">
                  <summary className="w-fit cursor-pointer rounded-2xl bg-muted px-6 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-muted/70 [details[open]_&]:bg-primary [details[open]_&]:text-primary-foreground">
                    Dive deeper
                  </summary>

                  <div className="mt-6 space-y-8">
                    <div>
                      <h3 className="mb-4 text-lg font-bold text-primary">Strategic deep dive</h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {era.projects.map((p) => (
                          <div key={p.name} className="rounded-2xl border border-border bg-muted/20 p-5">
                            <h4 className="mb-2 text-sm font-bold">{p.name}</h4>
                            <p className="text-xs leading-relaxed text-muted-foreground">{p.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {era.press && (
                      <div>
                        <h3 className="mb-4 text-lg font-bold text-primary">Public recognition</h3>
                        <ul className="space-y-2">
                          {era.press.map((p) => (
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

                    <div>
                      <h3 className="mb-4 text-lg font-bold text-primary">Life highlights</h3>
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {era.photos.map((photo) => (
                          <Image
                            key={photo.src}
                            src={photo.src}
                            alt={photo.alt}
                            width={192}
                            height={128}
                            loading="lazy"
                            className="h-32 w-48 shrink-0 rounded-2xl border border-border object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
