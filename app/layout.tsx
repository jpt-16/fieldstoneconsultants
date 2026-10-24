import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const serif = localFont({
  src: "./fonts/Newsreader.woff2",
  weight: "200 800",
  variable: "--f-serif",
  display: "swap",
});
const sans = localFont({
  src: [
    { path: "./fonts/PlexSans-400.woff2", weight: "400" },
    { path: "./fonts/PlexSans-500.woff2", weight: "500" },
    { path: "./fonts/PlexSans-600.woff2", weight: "600" },
  ],
  variable: "--f-sans",
  display: "swap",
});
const mono = localFont({
  src: [{ path: "./fonts/PlexMono-400.woff2", weight: "400" }],
  variable: "--f-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.tagline} | Fieldstone Consultants`, template: "%s | Fieldstone Consultants" },
  description: SITE.description,
  applicationName: SITE.shortName,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f5f3ee" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
