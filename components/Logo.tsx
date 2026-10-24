import Link from "next/link";

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <rect width="64" height="64" rx="12" fill="currentColor" />
      <path d="M14 24 L30 14 L50 20 L52 40 L36 52 L16 46 Z" stroke="#8cc7c4" strokeWidth="3" strokeLinejoin="round" />
      <path d="M30 14 L36 52 M14 24 L52 40" stroke="#8cc7c4" strokeWidth="2" strokeOpacity="0.6" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Fieldstone Consultants, home"
      className="group inline-flex items-center gap-3"
    >
      <Mark className={`h-9 w-9 ${dark ? "text-navy-800" : "text-navy-900"}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl tracking-tight ${dark ? "text-white" : "text-navy-900"}`}
        >
          Fieldstone
        </span>
        <span
          className={`mt-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] ${dark ? "text-teal-300" : "text-teal-700"}`}
        >
          Consultants
        </span>
      </span>
    </Link>
  );
}
