import Link from "next/link";

/** Three courses of dry-laid stone. Used as the mark and echoed as a divider. */
export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <path d="M20 12h26l3 12H17z" />
      <path d="M12 28h22l-2 14H10zM38 28h16l2 14H36z" />
      <path d="M8 46h18l2 10H6zM30 46h14l1 10H31zM48 46h10l2 10H49z" />
    </svg>
  );
}

export function Logo({ onInk = false }: { onInk?: boolean }) {
  return (
    <Link href="/" aria-label="Fieldstone Consultants, home" className="inline-flex items-center gap-3 no-underline">
      <Mark className={`h-8 w-8 ${onInk ? "text-accent-light" : "text-accent"}`} />
      <span className={`font-serif text-[1.45rem] leading-none tracking-tight ${onInk ? "text-white" : "text-ink"}`}>
        Fieldstone <span className={`font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] ${onInk ? "text-accent-light" : "text-muted"}`}>Consultants</span>
      </span>
    </Link>
  );
}
