import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CAPABILITIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Fieldstone Consultants",
  description:
    "Fieldstone Consultants brings 20+ years of medical device experience in quality systems, FDA regulations, risk management, and process improvement to teams at every stage.",
  path: "/about",
});

const approach: [string, string][] = [
  ["Understand first", "We start with your product, your stage, and your risks before recommending anything."],
  ["Right-size the system", "Procedures and records scaled to what your team can actually maintain."],
  ["Keep safety central", "Patient safety and product quality drive every decision."],
  ["Aim for efficient outcomes", "Clear scope, plain language, and no unnecessary process."],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro label="About" title="Experienced quality and regulatory help, sized to your company" />

      <section aria-labelledby="who-h" className="border-b border-rule">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-[12rem_1fr_17rem] lg:gap-12 md:py-20">
          <p className="label pt-2">Who we are</p>
          <Reveal>
            <h2 id="who-h" className="sr-only">Who we are</h2>
            <p className="font-serif text-[1.5rem] leading-snug text-ink sm:text-[1.7rem]">
              Fieldstone Consultants, LLC provides medical device quality assurance and regulatory affairs consulting, led by an industry professional with more than 20 years of experience.
            </p>
            <p className="mt-6 max-w-[36rem]">
              The foundation is Quality Systems Management and FDA regulations. Clients range from startups just beginning their journey to companies with an established quality system that needs right-sized solutions. Three values guide the work: efficient outcomes, safety, and quality.
            </p>
          </Reveal>

          {/* PLACEHOLDER: owner profile. Replace with real name, headshot, and credentials. */}
          <aside aria-label="Owner profile placeholder" className="max-w-[17rem] self-start">
            <div role="img" aria-label="Headshot placeholder" className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-muted bg-paper-deep text-sm text-muted">
              [Headshot placeholder]
            </div>
            <p className="mt-4 font-serif text-xl text-ink">[Owner name]</p>
            <p className="text-sm text-muted">[Title]</p>
            <p className="mt-2 text-sm text-muted">[Credentials and certifications to be provided by the owner]</p>
          </aside>
        </div>
      </section>

      <section aria-labelledby="cap-h" className="border-b border-rule bg-paper-deep">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-[12rem_1fr] lg:gap-12 md:py-20">
          <p className="label pt-2">Capabilities</p>
          <div>
            <h2 id="cap-h" className="max-w-xl text-[1.9rem] sm:text-4xl">Experience and capabilities</h2>
            <ul className="mt-10 border-b border-rule sm:grid sm:grid-cols-2 sm:gap-x-12">
              {CAPABILITIES.map((c) => (
                <li key={c} className="border-t border-rule py-4 font-serif text-[1.35rem] text-ink">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-h">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-[12rem_1fr] lg:gap-12 md:py-20">
          <p className="label pt-2">Approach</p>
          <div>
            <h2 id="approach-h" className="text-[1.9rem] sm:text-4xl">How the work gets done</h2>
            <dl className="rows mt-10">
              {approach.map(([t, d]) => (
                <div key={t} className="grid gap-1 py-5 sm:grid-cols-[15rem_1fr] sm:gap-8">
                  <dt className="font-serif text-xl text-ink">{t}</dt>
                  <dd className="max-w-[34rem] text-[0.98rem]">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
