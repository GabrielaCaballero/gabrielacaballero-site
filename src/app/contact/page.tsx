import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
import { FEEDBACK_FORM_URL, SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Gabriela Caballero on LinkedIn, Substack, YouTube or Instagram, or share anonymous feedback.",
  alternates: { canonical: "/contact/" },
};

const ICONS: Record<string, string> = {
  LinkedIn: "in",
  Substack: "✎",
  YouTube: "▶",
  Instagram: "◎",
};

const tile =
  "min-w-[150px] rounded-2xl border border-border bg-card/50 p-8 text-center transition hover:scale-105 hover:border-primary/40";

export default function ContactPage() {
  return (
    <section className="px-5 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <header className="rise mb-6 text-center">
          <div
            aria-hidden
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-strong text-3xl shadow-lg shadow-primary/30"
          >
            ✈
          </div>
          <h1 className="mb-6 font-display text-6xl font-bold tracking-tight md:text-8xl">CONNECT.</h1>
          <p className="text-lg italic text-muted-foreground">
            &ldquo;Let&apos;s build the future of human-AI collaboration.&rdquo;
          </p>
        </header>

        <ul className="mb-20 mt-12 flex flex-wrap justify-center gap-4">
          <li>
            <CopyEmail className={tile} />
          </li>
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer me" className={`block ${tile}`}>
                <span aria-hidden className="mb-3 block text-2xl font-bold text-primary">
                  {ICONS[s.label]}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card/50 p-10 text-center transition hover:border-primary/40">
          <h2 className="mb-3 font-display text-2xl font-bold uppercase tracking-wide">Feedback hub</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Please share <strong>anonymous feedback</strong> to help me grow as a professional and a person!
          </p>
          <a
            href={FEEDBACK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:brightness-95"
          >
            Share feedback ↗
          </a>
        </div>
      </div>
    </section>
  );
}
