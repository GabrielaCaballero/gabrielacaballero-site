"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/site";

export default function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fall back to mail app.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      <span aria-hidden className="mb-3 block text-2xl text-primary">✉</span>
      <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        {copied ? "Copied!" : "Copy email"}
      </span>
    </button>
  );
}
