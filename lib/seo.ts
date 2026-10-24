import type { Metadata } from "next";
import { SITE } from "./site";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: path,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
