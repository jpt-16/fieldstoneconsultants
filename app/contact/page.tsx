import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
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
      <PageIntro label="Contact" title="Book a free consultation">
        <p>Tell us about your device and what you need. We will reply by email, usually within one business day.</p>
      </PageIntro>
      <div className="wrap grid gap-14 py-14 md:py-20 lg:grid-cols-[12rem_1fr_17rem] lg:gap-12">
        <p className="label pt-2">Send a message</p>
        <div className="relative max-w-2xl">
          <ContactForm />
        </div>
        <aside aria-label="Direct contact" className="lg:col-start-3 lg:row-start-1">
          <dl className="border-t-2 border-ink">
            <div className="border-b border-rule py-4">
              <dt className="label">Email</dt>
              <dd className="mt-1"><a href={`mailto:${SITE.email}`} className="break-all font-serif text-xl text-ink">{SITE.email}</a></dd>
            </div>
            <div className="border-b border-rule py-4">
              <dt className="label">Phone</dt>
              <dd className="mt-1"><a href={SITE.phoneHref} className="font-serif text-xl text-ink">{SITE.phone}</a></dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
