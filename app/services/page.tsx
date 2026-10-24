import { CtaBand } from "@/components/CtaBand";
import { PillarDetail } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { PILLARS } from "@/lib/site";
import { servicesSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services: QMS and FDA Regulatory Affairs",
  description:
    "Quality management systems, design controls, CAPA, audits, and training, plus FDA regulatory strategy and Pre-Sub, Breakthrough, STeP, 510(k), De Novo, and PMA submissions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Quality and regulatory support, end to end</h1>
          <p className="mt-6 max-w-2xl text-lg">
            Two service areas, one consultant. Work with Fieldstone on a single project or across the full product lifecycle. Regulatory outcomes depend on the device and on FDA's review, so we focus on clear strategy, solid evidence, and well-prepared submissions.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-24 px-5 py-20 sm:px-8 md:py-24">
        {PILLARS.map((p) => (
          <Reveal key={p.id}>
            <PillarDetail pillar={p} />
          </Reveal>
        ))}
      </div>
      <CtaBand title="Not sure which service fits?" text="Describe where you are and we'll help you work out the next sensible step. The first conversation is free." />
      {servicesSchema.map((s) => (
        <JsonLd key={s.name} data={s} />
      ))}
    </>
  );
}
