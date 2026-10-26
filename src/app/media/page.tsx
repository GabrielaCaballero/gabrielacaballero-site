import type { Metadata } from "next";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Interviews, talks and panels with Gabriela Caballero on product management, working in tech abroad, and building a career from Argentina to London and Zurich.",
  alternates: { canonical: "/media/" },
};

export default function MediaPage() {
  return (
    <section className="px-5 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <header className="rise mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden className="h-[3px] w-10 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Live broadcasts</span>
          </div>
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            MEDIA
            <br />
            LOUNGE.
          </h1>
        </header>

        <ul className="space-y-4">
          {MEDIA.map((item, i) => (
            <li key={item.url} className="rise" style={{ animationDelay: `${i * 80}ms` }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                lang={item.lang}
                className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 transition hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 md:p-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative flex-1">
                  <span className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                      {item.platform}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                  </span>
                  <span className="mb-2 block text-base font-bold md:text-lg">{item.title}</span>
                  <span className="mb-3 block text-sm text-muted-foreground">{item.description}</span>
                  <span className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/50 text-muted-foreground transition duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  ▶
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
