import type { Metadata } from "next";
import { site } from "@/constants/site";

const description =
  "Vidyadhan Classes, Vitawa (Kalwa), Thane — For Quality Education since 2008. Coaching for Std. 7th to 10th (English & Semi-English) and 11th & 12th Science (MHT-CET) & Commerce. 100% result, SSC 2026 topper Divya Sonawane 90.20%.";

const keywords = [
  "Vidyadhan Classes",
  "coaching classes Kalwa",
  "coaching classes Thane",
  "Vitawa coaching classes",
  "SSC coaching Thane",
  "HSC coaching Kalwa",
  "MHT-CET coaching Thane",
  "10th tuition Kalwa",
  "12th Science Commerce coaching",
  "Mahendra Chaudhari Sir",
];

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline} — Kalwa, Thane`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "education",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description,
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export function pageMetadata(title: string, desc?: string): Metadata {
  return { title, description: desc || description, alternates: { canonical: "/" } };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    slogan: site.tagline,
    foundingDate: String(site.established),
    url: site.url,
    logo: `${site.url}/logo.png`,
    telephone: `+91${site.phone}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.pin,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    founder: { "@type": "Person", name: site.director },
  };
}
