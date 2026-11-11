import { SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-center">
      <ul className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gabriela Caballero · Zurich
      </p>
    </footer>
  );
}
