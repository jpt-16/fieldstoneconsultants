import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Talk through your quality and regulatory needs",
  text = "Book a free consultation to discuss where you are today and what a right-sized plan could look like.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="on-dark relative overflow-hidden bg-navy-900">
      <div className="stone-lines absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl text-white! sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-stone-200">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="light">Book a Free Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outline-light">View Services</ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
