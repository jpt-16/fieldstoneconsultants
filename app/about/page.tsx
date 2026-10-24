import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/Icons";
import { CAPABILITIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Fieldstone Consultants",
  description:
    "Fieldstone Consultants brings 20+ years of medical device experience in quality systems, FDA regulations, risk management, and process improvement to teams at every stage.",
  path: "/about",
});

const approach = [
  { t: "Understand first", d: "We start with your product, your stage, and your risks before recommending anything." },
  { t: "Right-size the system", d: "Procedures and records scaled to what your team can actually maintain." },
  { t: "Keep safety central", d: "Patient safety and product quality drive every decision." },
  { t: "Aim for efficient outcomes", d: "Clear scope, plain language, and no unnecessary process." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Experienced quality and regulatory help, sized to your company</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.6fr_1fr] md:py-24">
        <Reveal>
          <h2 className="text-3xl">Who we are</h2>
          <div className="mt-5 space-y-5">
            <p>
              Fieldstone Consultants, LLC provides medical device quality assurance and regulatory affairs consulting. The practice is led by an industry professional with more than 20 years of experience and a foundation in Quality Systems Management and FDA regulations.
            </p>
            <p>
              Clients range from startups just beginning their journey to companies with an established quality system that needs right-sized solutions. The work is guided by three values: efficient outcomes, safety, and quality.
            </p>
          </div>
        </Reveal>

        {/* PLACEHOLDER: owner profile. Replace with real name, headshot, and credentials. */}
        <Reveal delay={100}>
          <aside aria-label="Owner profile placeholder" className="rounded-lg border-2 border-dashed border-stone-300 bg-stone-50 p-6">
            <div
              role="img"
              aria-label="Headshot placeholder"
              className="flex aspect-square w-full items-center justify-center rounded-md bg-stone-200 text-sm font-medium text-slate-700"
            >
              [Headshot placeholder]
            </div>
            <p className="mt-5 font-serif text-xl text-navy-900">[Owner name]</p>
            <p className="text-sm text-slate-700">[Title, e.g. Principal Consultant]</p>
            <p className="mt-3 text-sm text-slate-700">[Credentials and certifications to be provided by the owner]</p>
          </aside>
        </Reveal>
      </section>

      <section aria-labelledby="cap-heading" className="stone-lines-light bg-stone-100">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <h2 id="cap-heading" className="text-3xl sm:text-4xl">Experience and capabilities</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <li key={c} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-5 py-4">
                <IconCheck className="h-5 w-5 shrink-0 text-teal-600" />
                <span className="font-medium text-navy-900">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <h2 id="approach-heading" className="text-3xl sm:text-4xl">Our approach</h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <li key={a.t} className="border-t-2 border-navy-900 pt-5">
              <span className="font-serif text-sm text-teal-700" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-2 text-xl">{a.t}</h3>
              <p className="mt-2 text-[0.98rem]">{a.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
