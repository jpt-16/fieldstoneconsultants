"use client";

import { useRef, useState, type FormEvent } from "react";
import { SERVICE_INTEREST } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-2 block w-full border border-[#76818c] bg-white px-4 py-3 text-base text-ink focus:border-accent";
const label = "block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setErrors({});
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        form.reset();
        setStatus("success");
      } else {
        setErrors(json.errors ?? {});
        setFormError(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
      }
    } catch {
      setFormError("Network error. Please try again or email jon@fieldstoneconsultants.com.");
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border-t-2 border-accent bg-paper-deep p-8 outline-none">
        <h2 className="text-2xl">Thank you. Your message was sent.</h2>
        <p className="mt-3">We'll reply to the email address you provided, usually within one business day.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 tlink">
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {});
  const msg = (k: string) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-red-800">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "error" && formError && (
          <p role="alert" className="border-l-4 border-red-800 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
            {formError}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name <span className="font-normal text-muted">(required)</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={120} className={field} {...err("name")} />
          {msg("name")}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email <span className="font-normal text-muted">(required)</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={field} {...err("email")} />
          {msg("email")}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" maxLength={160} className={field} />
        </div>
        <div>
          <label htmlFor="interest" className={label}>Service interest</label>
          <select id="interest" name="interest" defaultValue="" className={field} {...err("interest")}>
            <option value="">Select one</option>
            {SERVICE_INTEREST.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {msg("interest")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message <span className="font-normal text-muted">(required)</span></label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} className={field} {...err("message")} />
        {msg("message")}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-sm text-muted">Please don't include confidential or proprietary product details in this form.</p>
    </form>
  );
}
