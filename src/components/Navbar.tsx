"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-strong" />
          <span className="font-display text-xl font-bold tracking-wide">GABRIELA</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive(link.href) ? "text-primary" : "hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col items-center gap-5 border-t border-border bg-background/95 py-5 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg ${isActive(link.href) ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
