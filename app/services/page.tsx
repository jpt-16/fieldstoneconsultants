import { Closing } from "@/components/Closing";
import { DesignControlThread, RegulatoryPathway } from "@/components/Diagrams";
import { PageIntro } from "@/components/PageIntro";
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
      <PageIntro label="Services" title="Quality and regulatory support, from first procedures to submission">
        <p>
          Two service areas, one consultant. Engage Fieldstone for a single project or across the product lifecycle. Regulatory outcomes depend on the device and on FDA's review, so the focus is clear strategy, solid evidence, and well-prepared submissions.
        </p>
      </PageIntro>

      {PILLARS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          aria-labelledby={`${p.id}-h`}
          className={`scroll-mt-20 border-b border-rule ${i % 2 ? "bg-paper-deep" : ""}`}
        >
          <div className="wrap grid gap-6 py-14 lg:grid-cols-[12rem_1fr] lg:gap-12 md:py-20">
            <p className="label pt-2">0{i + 1} / {i === 0 ? "Quality" : "Regulatory"}</p>
            <div>
              <h2 id={`${p.id}-h`} className="text-[1.9rem] sm:text-4xl">{p.title}</h2>
              <p className="mt-4 max-w-[36rem] text-lg">{p.summary}</p>
              {i === 0 ? <DesignControlThread /> : <RegulatoryPathway />}
              <ol className="rows mt-12">
                {p.items.map((s, n) => (
                  <li key={s.name} className="grid gap-x-8 gap-y-2 py-5 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_1.25fr]">
                    <span className="label pt-1.5">{i + 1}.{n + 1}</span>
                    <h3 className="text-[1.3rem] leading-snug">{s.name}</h3>
                    <p className="text-[0.98rem] sm:col-start-2 lg:col-start-auto">{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      <Closing title="Not sure which service fits?" text="Describe where you are and we will work out the next sensible step together. The first conversation is free." />
      {servicesSchema.map((s) => <JsonLd key={s.name} data={s} />)}
    </>
  );
}
