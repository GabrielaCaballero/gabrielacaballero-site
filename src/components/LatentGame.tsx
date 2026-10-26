"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// "Enter Latent Space": a 20-second mini-game where you steer a model through
// feature space. Ported from the Lovable site, with two fixes:
//  - it now works on phones (tap / hold to climb), not just arrow keys;
//  - game state lives in refs, so the canvas loop isn't torn down every render.

const W = 600;
const H = 300;
const ROUND_SECONDS = 20;
const SYMBOLS = ["Σ", "μ", "θ", "λ", "f(x)", "∫", "σ", "Δ"];

type Obstacle = {
  x: number;
  y: number;
  kind: "point" | "noise" | "flag";
  symbol: string;
  speed: number;
  size: number;
};

function spawn(): Obstacle {
  const r = Math.random();
  const y = Math.random() * (H - 40) + 20;
  if (r < 0.12) return { x: W, y, kind: "flag", symbol: "🇦🇷", speed: 3 + Math.random() * 2, size: 28 };
  return {
    x: W,
    y,
    kind: r > 0.52 ? "point" : "noise",
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    speed: 4 + Math.random() * 2,
    size: Math.random() > 0.4 ? 22 : 28,
  };
}

export default function LatentGame() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [over, setOver] = useState(false);
  const [round, setRound] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const velocity = useRef(0);

  const flap = useCallback(() => {
    velocity.current = -6;
  }, []);

  const restart = () => {
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setOver(false);
    setRound((r) => r + 1);
  };

  // Canvas loop
  useEffect(() => {
    if (!open || over) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let y = H / 2;
    let frame = 0;
    let raf = 0;
    let obstacles: Obstacle[] = [];
    velocity.current = 0;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(236, 72, 153, 0.07)";
      for (let i = 0; i < W; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        ctx.stroke();
      }

      velocity.current += 0.25;
      y += velocity.current;
      if (y > H) {
        y = H - 5;
        velocity.current = -4.8;
      }
      if (y < 0) {
        y = 5;
        velocity.current = 1;
      }

      if (frame % 45 === 0) obstacles.push(spawn());
      obstacles = obstacles.filter((o) => {
        o.x -= o.speed;
        if (Math.hypot(o.x - 40, o.y - y) < o.size) {
          const delta = o.kind === "noise" ? -10 : o.kind === "flag" ? 15 : 5;
          setScore((s) => Math.max(0, s + delta));
          return false;
        }
        ctx.fillStyle = o.kind === "noise" ? "#ef4444" : "#ffffff";
        ctx.font = o.kind === "flag" ? `${o.size}px serif` : `bold ${o.size}px monospace`;
        ctx.fillText(o.symbol, o.x, o.y);
        return o.x > -50;
      });

      ctx.save();
      ctx.translate(40, y);
      ctx.fillStyle = "#ec4899";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#ec4899";
      ctx.beginPath();
      ctx.moveTo(15, 0);
      ctx.lineTo(-10, -8);
      ctx.lineTo(-10, 8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      frame++;
      raf = requestAnimationFrame(tick);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === " ") {
        e.preventDefault();
        flap();
      }
      if (e.key === "ArrowDown") velocity.current = 3;
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, over, round, flap]);

  // Countdown
  useEffect(() => {
    if (!open || over) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setOver(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [open, over, round]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          restart();
          setOpen(true);
        }}
        className="group flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/20 transition hover:brightness-95"
      >
        Enter latent space
        <span aria-hidden className="transition-transform group-hover:translate-x-1">🚀</span>
      </button>

      {/* Portal to <body>: the hero column has a CSS transform (entrance
          animation), which would otherwise trap this fixed overlay inside it. */}
      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Latent Space Navigator mini-game"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <span className="text-sm font-bold text-primary">Latent Space Navigator</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close game"
              >
                ✕
              </button>
            </div>
            <p className="border-b border-border bg-muted/30 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              <b className="text-primary">How to play:</b> tap the board (or press ↑ / Space) to fly up, ↓ to dive.
              Collect <b className="text-foreground">white symbols</b> (+5), catch 🇦🇷 flags for{" "}
              <b className="text-primary">triple points</b>, and avoid <b className="text-red-500">red noise</b> or
              your model overfits!
            </p>
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={W}
                height={H}
                onPointerDown={flap}
                className="block w-full touch-none bg-background"
              />
              {over && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70">
                  <p className="text-xl font-black tracking-widest text-red-500">MODEL OVERFITTED</p>
                  <p className="text-sm text-muted-foreground">Final accuracy: {score}%</p>
                  <button
                    type="button"
                    onClick={restart}
                    className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition hover:scale-105"
                  >
                    ↻ Re-train
                  </button>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-6">
                <Stat label="Time" value={`${timeLeft}s`} />
                <Stat label="Accuracy" value={`${score}%`} />
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full bg-black/60 px-4 py-1 text-center backdrop-blur">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="text-lg font-black">{value}</p>
    </div>
  );
}
