import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 border-navy-900",
  secondary: "bg-transparent text-navy-900 border-navy-900/30 hover:border-navy-900 hover:bg-navy-900/5",
  light: "bg-white text-navy-900 border-white hover:bg-stone-100",
  "outline-light": "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-base font-medium transition-colors duration-200 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
