"use client";

export default function SpinningBadge({
  text = "LOREM · IPSUM · 2026 · ",
  size = "6em",
  className = "",
}: {
  text?: string;
  size?: string;
  className?: string;
}) {
  const chars = text.split("");

  return (
    <div
      className={`relative animate-[spin_60s_linear_infinite] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-ink/15"
        />
        <text className="font-sans text-[0.55rem] uppercase tracking-[0.25em] fill-ink/40">
          <textPath href="#badge-circle" startOffset="0%">
            {chars.map((char, i) => (
              <tspan key={i}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
