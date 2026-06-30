import type { Metadata } from "next";
import { faqs } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Vidyadhan Classes — courses, location, admissions, MHT-CET, notes and fees.",
};

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <PageHero
        breadcrumb="FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers about courses, admissions and how Vidyadhan Classes works."
      />
      <section className="py-20">
        <div className="container">
          <FaqAccordion />
          <div className="mx-auto mt-12 max-w-3xl rounded-4xl bg-brand-gradient p-8 text-center text-white">
            <h2 className="font-display text-2xl font-bold">Still have a question?</h2>
            <p className="mt-2 text-brand-100">Talk to us directly — we are happy to help.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href={site.phoneHref} variant="gold" size="md">Call {site.phone}</Button>
              <Button href={site.whatsappHref} size="md" className="bg-success text-white hover:brightness-110">WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
