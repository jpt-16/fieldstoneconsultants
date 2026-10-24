import Link from "next/link";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

/** Closing call to action. Quiet, on paper, with the direct contact details beside it. */
export function Closing({
  title = "Tell us where you are and what you need next.",
  text = "A first conversation is free. We will talk through your device, your stage, and a sensible next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="closing-h" className="border-t-2 border-ink">
      <Reveal className="wrap grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-20">
        <div>
          <h2 id="closing-h" className="max-w-xl text-[1.9rem] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg">{text}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn">Book a Free Consultation <Arrow /></Link>
          </div>
        </div>
        <dl className="self-end text-[0.98rem]">
          <div className="border-t border-rule py-3">
            <dt className="label">Email</dt>
            <dd className="mt-1"><a href={`mailto:${SITE.email}`} className="break-all text-ink">{SITE.email}</a></dd>
          </div>
          <div className="border-y border-rule py-3">
            <dt className="label">Phone</dt>
            <dd className="mt-1"><a href={SITE.phoneHref} className="text-ink">{SITE.phone}</a></dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
