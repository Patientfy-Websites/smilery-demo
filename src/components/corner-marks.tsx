export default function CornerMarks({
  className = "",
  size = "1.5em",
  color = "text-ink/20",
}: {
  className?: string;
  size?: string;
  color?: string;
}) {
  const line = `absolute ${color}`;
  const s = size;

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* Top-left */}
      <span className={`${line} top-0 left-0 w-px`} style={{ height: s }} />
      <span className={`${line} top-0 left-0 h-px`} style={{ width: s }} />

      {/* Top-right */}
      <span className={`${line} top-0 right-0 w-px`} style={{ height: s }} />
      <span className={`${line} top-0 right-0 h-px`} style={{ width: s }} />

      {/* Bottom-left */}
      <span className={`${line} bottom-0 left-0 w-px`} style={{ height: s }} />
      <span className={`${line} bottom-0 left-0 h-px`} style={{ width: s }} />

      {/* Bottom-right */}
      <span className={`${line} bottom-0 right-0 w-px`} style={{ height: s }} />
      <span className={`${line} bottom-0 right-0 h-px`} style={{ width: s }} />
    </div>
  );
}
