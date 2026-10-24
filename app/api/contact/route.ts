import { Resend } from "resend";
import { SERVICE_INTEREST } from "@/lib/site";

export const runtime = "nodejs";

const MAX = { name: 120, email: 200, company: 160, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (str(body.website, 200)) return Response.json({ ok: true });

  const name = str(body.name, MAX.name);
  const email = str(body.email, MAX.email);
  const company = str(body.company, MAX.company);
  const message = str(body.message, MAX.message);
  const interest = str(body.interest, 80);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please tell us a little about what you need.";
  if (interest && !(SERVICE_INTEREST as readonly string[]).includes(interest)) errors.interest = "Please choose an option.";
  if (Object.keys(errors).length) return Response.json({ ok: false, errors }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "jon@fieldstoneconsultants.com";
  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY / CONTACT_FROM_EMAIL not configured");
    return Response.json(
      { ok: false, error: "The form is temporarily unavailable. Please email jon@fieldstoneconsultants.com." },
      { status: 503 },
    );
  }

  const subject = `Website inquiry from ${name}${company ? ` (${company})` : ""}`.replace(/[\r\n]+/g, " ");
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Service interest: ${interest || "-"}`,
    "",
    message,
  ].join("\n");
  const html = `<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> ${esc(email)}<br><strong>Company:</strong> ${esc(company || "-")}<br><strong>Service interest:</strong> ${esc(interest || "-")}</p><p style="white-space:pre-wrap">${esc(message)}</p>`;

  try {
    const { error } = await new Resend(apiKey).emails.send({ from, to, replyTo: email, subject, text, html });
    if (error) throw new Error(error.message);
    return Response.json({ ok: true });
  } catch (e) {
    console.error("Contact form send failed", e);
    return Response.json(
      { ok: false, error: "We couldn't send your message. Please email jon@fieldstoneconsultants.com directly." },
      { status: 502 },
    );
  }
}
