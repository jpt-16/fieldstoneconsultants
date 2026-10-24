/**
 * Two courses of irregular stone in hairline, used as a section divider.
 * Widths are fixed (not random) so server and client render identically.
 */
const COURSES: number[][] = [
  [92, 61, 118, 74, 96, 53, 110, 83, 67, 105, 79, 91, 71],
  [58, 104, 77, 121, 64, 98, 72, 112, 60, 88, 101, 75],
];

function course(widths: number[], y: number, h: number, shift: number) {
  const total = widths.reduce((a, b) => a + b, 0);
  const k = 1200 / total;
  let x = shift;
  const out: string[] = [];
  widths.forEach((w, i) => {
    const w2 = w * k;
    const j = ((i * 7) % 5) - 2; // small, repeatable lean on each joint
    out.push(`M${x.toFixed(1)} ${y + h}L${(x + j).toFixed(1)} ${y}L${(x + w2 + j * 0.6).toFixed(1)} ${y}L${(x + w2).toFixed(1)} ${y + h}`);
    x += w2;
  });
  return out.join("");
}

export function StoneCourse({ className = "", tone = "rule" }: { className?: string; tone?: "rule" | "ink" }) {
  const stroke = tone === "ink" ? "rgb(255 255 255 / 0.22)" : "var(--color-rule)";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 30"
      preserveAspectRatio="none"
      className={`block h-7 w-full ${className}`}
      fill="none"
      stroke={stroke}
      strokeWidth="1"
    >
      <path vectorEffect="non-scaling-stroke" d={course(COURSES[0], 0, 14, 0)} />
      <path vectorEffect="non-scaling-stroke" d={course(COURSES[1], 15, 14, 0)} />
      <path vectorEffect="non-scaling-stroke" d="M0 14.5H1200M0 29.5H1200" />
    </svg>
  );
}
