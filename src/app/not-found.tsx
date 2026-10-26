import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-5 pb-20 pt-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">404 · out of distribution</p>
      <h1 className="my-4 font-display text-5xl font-bold md:text-7xl">LOST IN LATENT SPACE.</h1>
      <p className="mb-8 text-muted-foreground">This page doesn&apos;t exist (or the model hallucinated it).</p>
      <Link href="/" className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground">
        Back home
      </Link>
    </section>
  );
}
