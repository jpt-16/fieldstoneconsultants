# Fieldstone Consultants website

Next.js (App Router) + Tailwind CSS v4, deployable to Vercel.

```
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Contact form
`POST /api/contact` (Vercel serverless) sends mail via [Resend](https://resend.com) with a honeypot field.
Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a sender on a domain verified in Resend).
Set the same variables in the Vercel project. Without them the form shows a fallback message with the email address.

## Content
All copy and service lists live in `lib/site.ts`. Page metadata uses `lib/seo.ts`; JSON-LD is in `lib/schema.ts`.

## Placeholders to complete
- About page: owner name, headshot, credentials (`app/about/page.tsx`).
- No testimonials, case studies, certifications, or ISO 13485 claims are included. Add only with owner confirmation.
