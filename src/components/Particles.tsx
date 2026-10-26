// Floating pink "data points" behind the About hero. Positions are fixed
// (not Math.random) so server and client render identical markup, and the
// motion is pure CSS, so this ships zero JavaScript.

const DOTS = [
  [8, 12, 9, 0], [22, 70, 6, 1.2], [35, 30, 12, 2.4], [48, 85, 7, 0.6],
  [60, 18, 10, 3.1], [72, 55, 6, 1.8], [85, 25, 11, 4.2], [92, 78, 8, 2.9],
  [15, 45, 7, 3.6], [28, 92, 10, 0.9], [55, 40, 5, 4.8], [78, 8, 9, 2.1],
  [40, 62, 8, 1.5], [66, 90, 12, 3.9], [5, 80, 6, 4.5], [95, 45, 7, 0.3],
] as const;

export default function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute right-0 top-0 h-[80%] w-[70%] bg-[radial-gradient(closest-side,rgba(251,163,230,0.18),transparent)]" />
      <div className="absolute bottom-0 left-0 h-[50%] w-[50%] bg-[radial-gradient(closest-side,rgba(251,163,230,0.1),transparent)]" />
      {DOTS.map(([left, top, size, delay], i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-primary/30"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
