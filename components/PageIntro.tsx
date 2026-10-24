import type { ReactNode } from "react";

/** Interior-page header: label, H1 and lede set on a narrow measure beside a rule. */
export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <header className="border-b border-rule">
      <div className="wrap grid gap-6 pb-12 pt-12 lg:grid-cols-[12rem_1fr] lg:gap-12 md:pb-16 md:pt-20">
        <p className="label pt-2">{label}</p>
        <div>
          <h1 className="max-w-3xl text-[2.15rem] sm:text-5xl">{title}</h1>
          {children && <div className="mt-6 max-w-[38rem] text-lg">{children}</div>}
        </div>
      </div>
    </header>
  );
}
