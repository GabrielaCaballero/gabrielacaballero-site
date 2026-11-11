import Image from "next/image";
import Link from "next/link";
import LatentGame from "@/components/LatentGame";
import Particles from "@/components/Particles";
import { DRIVERS, NOW } from "@/lib/about";
import { MEDIA } from "@/lib/media";
import { CV_PATH, JOB_TITLE, SOCIALS, TAGLINE } from "@/lib/site";

const substack = SOCIALS.find((s) => s.label === "Substack")!.url;

export default function AboutPage() {
  return (
    <section className="relative px-5 pb-20 pt-28">
      <Particles />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mb-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="rise space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {JOB_TITLE} · Google
            </p>
            <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              GABRIELA
              <br />
              CABALLERO.
            </h1>

            <div className="flex w-fit flex-wrap items-center rounded-full border border-border text-sm text-muted-foreground">
              <span className="flex items-center gap-2 border-r border-border px-4 py-2">
                <span aria-hidden className="text-primary">📍</span> ZURICH
                <span className="text-xs text-muted-foreground/70">(prev. London &amp; NYC)</span>
              </span>
              <span className="px-4 py-2">🏠 ARGENTINA</span>
            </div>

            <p className="max-w-xl text-xl leading-relaxed text-foreground/90">{TAGLINE}</p>

            <p className="max-w-xl text-muted-foreground">
              Today I work on Context &amp; Retrieval in Google&apos;s AI Foundations. Before that I made YouTube
              videos shoppable with multimodal AI, brought Tables to Google Sheets, and helped Google Maps understand
              the world through photos. Engineer by training, storyteller by nature.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/experience"
                className="rounded-2xl bg-primary px-7 py-4 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/20 transition hover:brightness-95"
              >
                See my work →
              </Link>
              <a
                href={CV_PATH}
                download
                className="rounded-2xl border border-border px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:border-primary hover:text-primary"
              >
                Download CV
              </a>
              <Link href="/contact" className="px-2 text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="rise relative flex justify-center [animation-delay:150ms]">
            <div aria-hidden className="glow absolute inset-[8%] rounded-[40px] bg-primary/30 blur-3xl" />
            <Image
              src="/photos/gabriela-about.webp"
              alt="Portrait of Gabriela Caballero"
              width={896}
              height={1152}
              priority
              className="relative aspect-[3/4] h-auto w-full max-w-md rounded-[40px] border-2 border-border object-cover shadow-2xl grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        {/* What drives me */}
        <SectionTitle>What drives me</SectionTitle>
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DRIVERS.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div aria-hidden className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">
                {d.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wide">{d.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Now + As seen in */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle>Right now</SectionTitle>
            <dl className="space-y-4 rounded-3xl border border-border bg-card/50 p-7">
              {NOW.map((n) => (
                <div key={n.label}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-primary">{n.label}</dt>
                  <dd className="text-muted-foreground">{n.text}</dd>
                </div>
              ))}
            </dl>
            <a
              href={substack}
              target="_blank"
              rel="noopener noreferrer me"
              className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:underline"
            >
              Read my writing on Substack ↗
            </a>
          </div>

          <div id="media" className="scroll-mt-28 lg:col-span-3">
            <SectionTitle>As seen in</SectionTitle>
            <ul className="space-y-3">
              {MEDIA.map((m) => (
                <li key={m.url}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    lang={m.lang}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/30 p-5 transition hover:border-primary/60"
                  >
                    <span>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                        {m.platform} · {m.year}
                      </span>
                      <span className="block font-bold">{m.title}</span>
                      <span className="block text-sm text-muted-foreground">{m.description}</span>
                    </span>
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      ▶
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The mini-game, now an easter egg rather than the main call to action */}
        <div className="flex flex-col items-center gap-3 border-t border-border pt-10 text-center">
          <p className="text-sm italic text-muted-foreground">
            Made it this far out of pure curiosity (or boredom)? Pretend you&apos;re training an ML model. You&apos;re
            welcome. 🚀
          </p>
          <LatentGame />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide">
      <span aria-hidden className="h-[3px] w-8 rounded-full bg-primary" />
      {children}
    </h2>
  );
}
