import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact: Book a Free Consultation",
  description:
    "Book a free consultation with Fieldstone Consultants about medical device quality systems or FDA regulatory submissions. Email or call, or send a message online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Book a free consultation</h1>
          <p className="mt-6 max-w-2xl text-lg">Tell us about your device and what you need. We'll respond by email, usually within one business day.</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr] md:py-24">
        <div className="relative">
          <h2 className="sr-only">Send a message</h2>
          <ContactForm />
        </div>
        <aside aria-label="Direct contact" className="space-y-8 md:pt-2">
          <div className="flex gap-4">
            <IconMail className="mt-1 h-6 w-6 shrink-0 text-teal-700" />
            <div>
              <h2 className="font-sans! text-sm! font-semibold uppercase tracking-[0.14em]">Email</h2>
              <a href={`mailto:${SITE.email}`} className="mt-1 block break-all text-lg text-navy-900 underline underline-offset-4 hover:text-teal-700">{SITE.email}</a>
            </div>
          </div>
          <div className="flex gap-4">
            <IconPhone className="mt-1 h-6 w-6 shrink-0 text-teal-700" />
            <div>
              <h2 className="font-sans! text-sm! font-semibold uppercase tracking-[0.14em]">Phone</h2>
              <a href={SITE.phoneHref} className="mt-1 block text-lg text-navy-900 underline underline-offset-4 hover:text-teal-700">{SITE.phone}</a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
