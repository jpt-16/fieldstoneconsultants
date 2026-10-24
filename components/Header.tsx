"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const item = (href: string, label: string, mobile = false) => {
    const current = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        aria-current={current ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={
          mobile
            ? `block border-t border-rule py-4 font-serif text-2xl no-underline ${current ? "text-accent" : "text-ink"}`
            : `text-[0.95rem] no-underline underline-offset-[0.5em] decoration-2 decoration-accent hover:underline ${current ? "text-ink underline" : "text-body hover:text-ink"}`
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="wrap flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Logo />
        <div className="hidden items-center gap-9 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-8">
            {NAV.map((n) => item(n.href, n.label))}
          </nav>
          <a href={SITE.phoneHref} className="label border-l border-rule pl-8 normal-case tracking-normal text-ink no-underline hover:text-accent">
            {SITE.phone}
          </a>
        </div>
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="wrap pb-6 md:hidden">
          {NAV.map((n) => item(n.href, n.label, true))}
          <a href={SITE.phoneHref} className="label block border-t border-rule pt-4 normal-case tracking-normal text-ink no-underline">{SITE.phone}</a>
        </nav>
      )}
    </header>
  );
}
