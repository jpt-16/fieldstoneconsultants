export const SITE = {
  name: "Fieldstone Consultants, LLC",
  shortName: "Fieldstone Consultants",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fieldstoneconsultants.com").replace(/\/$/, ""),
  email: "jon@fieldstoneconsultants.com",
  phone: "(860) 810-7918",
  phoneHref: "tel:+18608107918",
  tagline: "Medical Device Quality & Regulatory Consulting",
  description:
    "Fieldstone Consultants provides medical device quality assurance and regulatory affairs consulting, from quality system design to FDA premarket submissions.",
  year: 2026,
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceItem = { name: string; description: string };
export type Pillar = {
  id: string;
  title: string;
  summary: string;
  items: ServiceItem[];
};

export const PILLARS: Pillar[] = [
  {
    id: "quality-management-systems",
    title: "Quality Management Systems",
    summary:
      "Build, run, and maintain a quality system that fits the size of your company and the risk of your product.",
    items: [
      {
        name: "Design Control and Risk Management",
        description:
          "Set up design control procedures and a risk management process that connect user needs, design inputs, verification, and risk controls in one traceable record.",
      },
      {
        name: "QMS Administration",
        description:
          "Day-to-day upkeep of your quality system: document control, records, management review inputs, and the routine work that keeps you inspection-ready.",
      },
      {
        name: "Internal, External, and Supplier Audits and Support",
        description:
          "Plan and perform internal and supplier audits, and prepare for and respond to external audits, with clear findings and practical follow-up.",
      },
      {
        name: "CAPA Management",
        description:
          "Structure corrective and preventive action so problems are investigated to root cause, fixed, and checked for effectiveness, not just closed.",
      },
      {
        name: "Personnel Training (QMS)",
        description:
          "Role-based training on your quality system procedures, with training records that are straightforward to maintain and show to auditors.",
      },
    ],
  },
  {
    id: "regulatory-affairs-submissions",
    title: "Regulatory Affairs & Submissions",
    summary:
      "Choose the right U.S. regulatory path and prepare clear, well-organized submissions to FDA.",
    items: [
      {
        name: "Regulatory Strategy",
        description:
          "Define the pathway for your device, the evidence you will need, and a realistic sequence of steps, before you commit time and budget.",
      },
      {
        name: "Pre-Submission Application",
        description:
          "Prepare a focused Pre-Sub package with well-framed questions so you can get FDA feedback early in development.",
      },
      {
        name: "Breakthrough Application",
        description:
          "Assemble a Breakthrough Device designation request that clearly presents the device, the condition it addresses, and the supporting rationale.",
      },
      {
        name: "STeP Application",
        description:
          "Prepare an application for FDA's Safer Technologies Program (STeP) for qualifying devices.",
      },
      {
        name: "Premarket Submissions (De Novo, 510(k), and PMA)",
        description:
          "Plan, write, and compile De Novo, 510(k), and PMA submissions, and support responses to FDA questions during review.",
      },
      {
        name: "U.S. agent services",
        description:
          "Act as your U.S. agent for FDA communications when your company is located outside the United States.",
      },
    ],
  },
];

export const WHY = [
  { title: "20+ years", text: "Hands-on experience in the medical device industry." },
  { title: "End-to-end support", text: "From first quality procedures to premarket submissions." },
  { title: "Right-sized solutions", text: "Systems scaled to your stage, team, and product risk." },
  { title: "Safety and quality first", text: "Every recommendation is grounded in patient safety." },
] as const;

export const CAPABILITIES = [
  "Quality System Management",
  "Regulatory Affairs",
  "New Product Development",
  "Risk Management",
  "Quality Control",
  "Process Improvement",
] as const;

export const SERVICE_INTEREST = [
  "Quality Management Systems",
  "Regulatory Affairs & Submissions",
  "Both quality and regulatory",
  "Not sure yet",
] as const;
