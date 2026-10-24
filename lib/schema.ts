import { PILLARS, SITE } from "./site";

const orgId = `${SITE.url}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": orgId,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.svg`,
  image: `${SITE.url}/opengraph-image`,
  description: SITE.description,
  email: SITE.email,
  telephone: "+1-860-810-7918",
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "Medical device quality management systems",
    "FDA regulatory affairs",
    "Design controls",
    "Risk management",
    "CAPA",
    "510(k)",
    "De Novo",
    "PMA",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SITE.email,
    telephone: "+1-860-810-7918",
    availableLanguage: "English",
  },
};

export const servicesSchema = PILLARS.flatMap((p) =>
  p.items.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: p.title,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "United States" },
  })),
);
