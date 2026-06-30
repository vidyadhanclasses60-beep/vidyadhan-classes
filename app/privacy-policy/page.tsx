import type { Metadata } from "next";
import { site } from "@/constants/site";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Vidyadhan Classes website.",
};

const sections = [
  {
    h: "Information We Collect",
    p: "Our website does not run a server-side database. When you use the enquiry form, the details you enter (name, mobile number, standard and message) are passed directly into WhatsApp or your email app on your own device. We only receive what you choose to send us through those channels.",
  },
  {
    h: "How We Use Your Information",
    p: "Any information you share with us is used solely to respond to your admission enquiry, share course and fee details, and provide academic support. We do not sell or rent your information to third parties.",
  },
  {
    h: "Cookies & Analytics",
    p: "This website may use basic, privacy-friendly analytics to understand page visits. No sensitive personal data is collected for advertising purposes.",
  },
  {
    h: "Third-Party Links",
    p: "Pages may link to external services such as WhatsApp, Google Maps or social media. Those services have their own privacy policies, which we encourage you to review.",
  },
  {
    h: "Data Security",
    p: "We take reasonable steps to protect any information shared with us through our official phone, WhatsApp and email channels.",
  },
  {
    h: "Contact",
    p: `For any privacy-related questions, contact us at ${site.phone} or ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero breadcrumb="Legal" title="Privacy Policy" />
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
