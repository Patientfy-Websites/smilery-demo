"use client";

export default function Marquee({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const textClass = `font-display font-bold text-sm tracking-normal uppercase shrink-0 ${
    dark ? "text-white/30" : "text-ink/25"
  }`;

  const words = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden py-6 border-y ${
        dark ? "bg-ink border-white/10" : "bg-cream border-ink/5"
      }`}
    >
      <div className="flex animate-marquee">
        <div className="flex items-center gap-6 shrink-0">
          {words.map((item, i) => (
            <span key={i} className={textClass}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 shrink-0">
          {words.map((item, i) => (
            <span key={i} className={textClass}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
