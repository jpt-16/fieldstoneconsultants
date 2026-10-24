"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const link = (href: string, label: string, mobile = false) => {
    const current = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        aria-current={current ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={
          mobile
            ? `block border-b border-stone-200 py-4 text-lg ${current ? "font-semibold text-navy-900" : "text-slate-700"}`
            : `border-b-2 py-1 text-[0.95rem] font-medium transition-colors ${current ? "border-teal-600 text-navy-900" : "border-transparent text-slate-700 hover:border-stone-300 hover:text-navy-900"}`
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.filter((n) => n.href !== "/contact").map((n) => link(n.href, n.label))}
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-md bg-navy-900 px-5 text-[0.95rem] font-medium text-white transition-colors hover:bg-navy-800"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone-300 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-stone-200 bg-white px-5 pb-4 md:hidden">
          {NAV.map((n) => link(n.href, n.label, true))}
        </nav>
      )}
    </header>
  );
}
