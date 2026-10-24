import Link from "next/link";
import { Logo } from "./Logo";
import { StoneCourse } from "./StoneCourse";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-[#c9d1d9]">
      <StoneCourse tone="ink" />
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1.5fr]">
        <div>
          <Logo onInk />
          <p className="mt-5 max-w-xs text-[0.95rem]">Medical device quality assurance and regulatory affairs consulting.</p>
        </div>
        <nav aria-label="Footer">
          <p className="label">Pages</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-white no-underline hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label">Contact</p>
          <ul className="mt-4 space-y-2">
            <li><a href={`mailto:${SITE.email}`} className="break-words text-white no-underline hover:underline">{SITE.email}</a></li>
            <li><a href={SITE.phoneHref} className="text-white no-underline hover:underline">{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="wrap py-5 text-sm">© {SITE.year} Fieldstone Consultants, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
