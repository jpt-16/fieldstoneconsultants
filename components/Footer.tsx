import Link from "next/link";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-950 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-stone-300">
            Medical device quality assurance and regulatory affairs consulting.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-sans! text-xs! font-semibold uppercase tracking-[0.18em] text-teal-300!">Explore</h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-[0.95rem] hover:text-white hover:underline underline-offset-4">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans! text-xs! font-semibold uppercase tracking-[0.18em] text-teal-300!">Contact</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white hover:underline underline-offset-4">{SITE.email}</a></li>
            <li><a href={SITE.phoneHref} className="hover:text-white hover:underline underline-offset-4">{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-stone-300 sm:px-8">
          © {SITE.year} Fieldstone Consultants, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
