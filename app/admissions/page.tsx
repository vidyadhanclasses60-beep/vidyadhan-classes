import type { Metadata } from "next";
import { CheckCircle2, Phone, MessageCircle, CalendarClock, FileText } from "lucide-react";
import { site } from "@/constants/site";
import { feeTables, feeNote } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { AdmissionForm } from "@/components/forms/AdmissionForm";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions open at Vidyadhan Classes, Kalwa, Thane for 2026-27. Std. 7th–10th and 11th & 12th (Science & Commerce). Enquire on WhatsApp 9322094000.",
};

const steps = [
  { icon: MessageCircle, title: "Enquire", text: "Send the enquiry form or call us on WhatsApp." },
  { icon: CalendarClock, title: "Visit / Demo", text: "Attend a demo lecture and meet the faculty." },
  { icon: FileText, title: "Register", text: "Complete admission and pay one-time fees." },
  { icon: CheckCircle2, title: "Start Learning", text: "Receive free printed notes and join your batch." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Admissions"
        title="Admissions Open 2026-27"
        subtitle="Secure your seat for Std. 7th–10th or 11th & 12th (Science & Commerce). Demo lectures from 1st June 2026."
      />

      {/* Steps */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-white p-6 text-center shadow-card">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-2 text-xs font-bold text-gold-600">STEP {i + 1}</p>
                  <h3 className="font-display text-lg font-bold text-brand-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + summary */}
      <section className="pb-20">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <AdmissionForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-4xl bg-brand-gradient p-7 text-white shadow-soft">
                <h3 className="font-display text-xl font-bold">Prefer to talk directly?</h3>
                <p className="mt-2 text-sm text-brand-100">
                  Speak with {site.director} for admissions, fees and batch timings.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button href={site.phoneHref} variant="gold" size="md"><Phone className="h-4 w-4" /> Call {site.phone}</Button>
                  <Button href={site.whatsappHref} size="md" className="bg-success text-white hover:brightness-110"><MessageCircle className="h-4 w-4" /> WhatsApp Us</Button>
                </div>
              </div>

              <div className="rounded-4xl border border-line bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-bold text-brand-900">Fees at a Glance</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {feeTables.slice(0, 2).flatMap((t) =>
                    t.rows.map((r) => (
                      <li key={`${t.title}-${r.label}`} className="flex items-center justify-between gap-3 border-b border-line pb-2">
                        <span className="text-ink/70">{t.title.split(" (")[0]} · {r.label}</span>
                        <span className="font-bold text-crimson-600">{r.amount}</span>
                      </li>
                    )),
                  )}
                </ul>
                <Button href="/courses" variant="outline" size="sm" className="mt-5 w-full">See full fee structure</Button>
                <p className="mt-4 rounded-2xl bg-gold-50 px-4 py-3 text-xs font-medium text-brand-900">{feeNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
