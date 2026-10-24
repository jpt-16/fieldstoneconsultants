import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Closing } from "@/components/Closing";
import { Reveal } from "@/components/Reveal";
import { StoneCourse } from "@/components/StoneCourse";
import { PILLARS, WHY } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Medical Device Quality & Regulatory Consulting",
  description:
    "Medical device quality consulting and FDA regulatory consulting for startups and established teams: QMS, design controls, CAPA, 510(k), De Novo, and PMA support.",
  path: "/",
});

const GLANCE: [string, string][] = [
  ["Practice", "Medical device quality assurance and regulatory affairs"],
  ["Experience", "20+ years in the industry"],
  ["Foundation", "Quality Systems Management and FDA regulations"],
  ["Works with", "Startups through companies with an established quality system"],
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-h">
        <div className="wrap grid gap-12 pb-14 pt-14 md:grid-cols-[1.45fr_1fr] md:gap-16 md:pb-20 md:pt-24">
          <div>
            <h1 id="hero-h" className="max-w-[17ch] text-[2.6rem] sm:text-[3.6rem] sm:leading-[1.05]">
              Medical Device Quality &amp; Regulatory Consulting
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg sm:text-xl sm:leading-relaxed">
              Practical quality assurance and regulatory affairs support from someone who has done the work for 20+ years, sized to where your company is today.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/contact" className="btn">Book a Free Consultation <Arrow /></Link>
              <Link href="/services" className="tlink">View Services <Arrow /></Link>
            </div>
          </div>
          <dl className="self-end border-t-2 border-ink">
            {GLANCE.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-3.5">
                <dt className="label pt-1">{k}</dt>
                <dd className="text-[0.98rem] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <StoneCourse />
      </section>

      <section aria-labelledby="help-h" className="on-ink mt-20 bg-ink text-[#c9d1d9] md:mt-28">
        <div className="wrap py-16 md:py-24">
          <Reveal className="max-w-xl">
            <p className="label">Services</p>
            <h2 id="help-h" className="mt-3 text-[2rem] text-white sm:text-4xl">Ways We Can Help</h2>
          </Reveal>
          <div className="mt-12 md:mt-16">
            {PILLARS.map((p, i) => (
              <Reveal key={p.id} className="grid gap-6 border-t border-white/25 py-10 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-12">
                <div>
                  <p className="label">0{i + 1}</p>
                  <h3 className="mt-2 text-[1.7rem] text-white">{p.title}</h3>
                  <p className="mt-3 max-w-sm text-[0.98rem]">{p.summary}</p>
                  <Link href={`/services#${p.id}`} className="tlink mt-6">
                    Details<span className="sr-only"> on {p.title}</span> <Arrow />
                  </Link>
                </div>
                <ul className="grid content-start gap-x-10 sm:grid-cols-2">
                  {p.items.map((s) => (
                    <li key={s.name} className="border-t border-white/15 py-3 text-[0.98rem] text-white first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                      {s.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-h" className="bg-paper-deep">
        <div className="wrap grid gap-10 py-16 md:grid-cols-[1fr_1.15fr] md:gap-20 md:py-24">
          <Reveal>
            <p className="label">Why Fieldstone</p>
            <h2 id="why-h" className="mt-4 max-w-md text-[1.9rem] leading-tight sm:text-[2.35rem]">
              Twenty years of quality and FDA regulatory work, applied at the size your company actually is.
            </h2>
          </Reveal>
          <Reveal>
            <dl className="rows">
              {WHY.map((w) => (
                <div key={w.title} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-serif text-xl text-ink">{w.title}</dt>
                  <dd className="text-[0.98rem]">{w.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Closing />
    </>
  );
}
