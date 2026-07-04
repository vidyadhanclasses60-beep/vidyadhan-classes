import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Star, Youtube, Facebook } from "lucide-react";
import { site } from "@/constants/site";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { AdmissionForm } from "@/components/forms/AdmissionForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vidyadhan Classes — A/3, Ramdas Apartment, Vitawa, Kalwa, Thane 400605. Call / WhatsApp 9322094000.",
};

const details = [
  { icon: MapPin, label: "Address", value: site.address.full, sub: site.address.landmark },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsappHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Mail, label: "Director's Email", value: site.directorEmail, href: `mailto:${site.directorEmail}` },
  { icon: Instagram, label: "Instagram", value: "@vidyadhanclasses_thane", href: site.social.instagram },
  { icon: Youtube, label: "YouTube", value: "@vidyadhanclassesthane", href: site.social.youtube },
  { icon: Facebook, label: "Facebook", value: "Vidyadhan Classes on Facebook", href: site.social.facebook },
  { icon: Star, label: "Google Reviews", value: "Rate us on Google", href: site.social.googleReview },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 9:00 AM – 8:00 PM" },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Get in Touch"
        subtitle="Visit us in Vitawa, Kalwa, or reach out on call, WhatsApp or email — we are happy to help."
      />

      <section className="py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4 rounded-3xl border border-line bg-white p-5 shadow-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-ink/50">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-brand-900 break-words hover:text-crimson-600">{d.value}</a>
                    ) : (
                      <p className="font-semibold text-brand-900 break-words">{d.value}</p>
                    )}
                    {d.sub && <p className="mt-0.5 text-xs text-ink/60 break-words">{d.sub}</p>}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Button href={site.phoneHref} variant="primary" size="md" className="flex-1"><Phone className="h-4 w-4" /> Call</Button>
                <Button href={site.whatsappHref} size="md" className="flex-1 bg-success text-white hover:brightness-110"><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AdmissionForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-line shadow-card">
              <iframe
                title="Vidyadhan Classes location"
                src={mapSrc}
                className="block w-full max-w-full"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink/60">
              {site.address.full} — {site.address.landmark}
            </p>
            <div className="mt-4 flex justify-center">
              <Button href={site.mapsUrl} variant="primary" size="md">
                <MapPin className="h-4 w-4" /> Get Directions on Google Maps
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
