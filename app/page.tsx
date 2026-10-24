import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { IconArrow, IconClock, IconLayers, IconScale, IconShield } from "@/components/Icons";
import { PILLARS, WHY } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Medical Device Quality & Regulatory Consulting",
  description:
    "Medical device quality consulting and FDA regulatory consulting for startups and established teams: QMS, design controls, CAPA, 510(k), De Novo, and PMA support.",
  path: "/",
});

const whyIcons = [IconClock, IconLayers, IconScale, IconShield];

export default function Home() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy-900">
        <div className="stone-lines absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-32">
          <div className="hero-in max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Fieldstone Consultants</p>
            <h1 className="mt-5 text-4xl text-white! sm:text-5xl md:text-6xl">
              Medical Device Quality &amp; Regulatory Consulting
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-stone-200 md:text-xl">
              Practical quality assurance and regulatory affairs support, built on 20+ years of industry experience and scaled to where your company is today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="light">Book a Free Consultation</ButtonLink>
              <ButtonLink href="/services" variant="outline-light">View Services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="help-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Services</p>
          <h2 id="help-heading" className="mt-3 text-3xl sm:text-4xl">Ways We Can Help</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article className="flex h-full flex-col rounded-lg border border-stone-200 bg-stone-50 p-8 transition-shadow duration-300 hover:shadow-card">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-3">{p.summary}</p>
                <ul className="mt-5 space-y-1.5 text-[0.98rem]">
                  {p.items.slice(0, 4).map((s) => (
                    <li key={s.name} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-teal-600" />
                      {s.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${p.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-medium text-teal-700 underline-offset-4 hover:underline"
                >
                  Learn more<span className="sr-only"> about {p.title}</span>
                  <IconArrow className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-heading" className="stone-lines-light bg-stone-100">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <h2 id="why-heading" className="text-3xl sm:text-4xl">Why Fieldstone</h2>
          </Reveal>
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <li key={w.title}>
                  <Reveal delay={i * 80}>
                    <Icon className="h-7 w-7 text-teal-700" />
                    <h3 className="mt-4 text-xl">{w.title}</h3>
                    <p className="mt-2 text-[0.98rem]">{w.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
