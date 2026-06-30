import type { Metadata } from "next";
import { site } from "@/constants/site";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Vidyadhan Classes website.",
};

const sections = [
  {
    h: "Acceptance of Terms",
    p: "By accessing and using this website, you agree to these terms and conditions. If you do not agree, please do not use the website.",
  },
  {
    h: "Use of Content",
    p: "All content on this website — including text, results, logos and images — belongs to Vidyadhan Classes and is provided for informational purposes. You may not reproduce it for commercial use without permission.",
  },
  {
    h: "Accuracy of Information",
    p: "We make every effort to keep course details, results and fees accurate and up to date. However, fees and schedules may change; please confirm current details with us directly before taking admission.",
  },
  {
    h: "Admissions & Fees",
    p: "Admission is subject to availability and the institute’s policies. Fees once paid are governed by the fee terms communicated at the time of admission.",
  },
  {
    h: "External Links",
    p: "This website may contain links to third-party platforms. We are not responsible for the content or practices of those external services.",
  },
  {
    h: "Contact",
    p: `For any questions about these terms, contact us at ${site.phone} or ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero breadcrumb="Legal" title="Terms & Conditions" />
      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="text-sm text-ink/60">Last updated: 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-bold text-brand-900">{s.h}</h2>
                <p className="mt-2 leading-relaxed text-ink/75">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
