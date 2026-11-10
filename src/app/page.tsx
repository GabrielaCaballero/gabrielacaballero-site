import Image from "next/image";
import Link from "next/link";
import LatentGame from "@/components/LatentGame";
import Particles from "@/components/Particles";
import { JOB_TITLE, MISSION, TAGLINE, VISION } from "@/lib/site";

export default function AboutPage() {
  return (
    <section className="relative px-5 pb-20 pt-28">
      <Particles />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="rise space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{JOB_TITLE}</p>
            <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              <span className="sr-only">Gabriela Caballero — </span>
              PRODUCT
              <br />
              STRATEGY.
            </h1>

            <div className="flex w-fit flex-wrap items-center rounded-full border border-border text-sm text-muted-foreground">
              <span className="flex items-center gap-2 border-r border-border px-4 py-2">
                <span aria-hidden className="text-primary">📍</span> ZURICH
                <span className="text-xs text-muted-foreground/70">(prev. London &amp; NYC)</span>
              </span>
              <span className="px-4 py-2">🏠 ARGENTINA</span>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{TAGLINE}</p>

            <p className="max-w-lg text-muted-foreground">
              Today I lead product strategy for Context &amp; Retrieval in Google&apos;s AI Foundations. Before that I
              made millions of YouTube videos shoppable, brought Tables to Google Sheets, and taught Google Maps to
              read the world through Street View.{" "}
              <Link href="/experience" className="text-primary underline-offset-4 hover:underline">
                See the flight path →
              </Link>
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-sm italic text-muted-foreground">
                If you made it this far out of pure curiosity (or boredom), here&apos;s a mini-game where you can
                pretend you&apos;re training an ML model. You&apos;re welcome. 🚀
              </p>
              <LatentGame />
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

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card icon="✨" title="My mission">
            <p className="italic">&ldquo;{MISSION}&rdquo;</p>
          </Card>
          <Card icon="🚀" title="Vision statement">
            <p>{VISION}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-colors hover:border-primary/40">
      <div aria-hidden className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">
        {icon}
      </div>
      <h2 className="mb-3 font-display text-xl font-bold uppercase tracking-wide">{title}</h2>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
