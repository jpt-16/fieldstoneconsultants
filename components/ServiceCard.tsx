import type { Pillar } from "@/lib/site";
import { IconCheck } from "./Icons";

export function PillarDetail({ pillar, headingLevel = 2 }: { pillar: Pillar; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <section id={pillar.id} aria-labelledby={`${pillar.id}-h`} className="scroll-mt-24">
      <H id={`${pillar.id}-h`} className="text-3xl sm:text-4xl">{pillar.title}</H>
      <p className="mt-4 max-w-2xl text-lg">{pillar.summary}</p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {pillar.items.map((s) => (
          <li key={s.name} className="rounded-lg border border-stone-200 bg-white p-6 shadow-card">
            <div className="flex items-start gap-3">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
              <div>
                <h3 className="font-serif text-xl">{s.name}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed">{s.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
