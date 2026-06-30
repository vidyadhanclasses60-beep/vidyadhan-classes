import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { facilities } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Facilities at Vidyadhan Classes, Kalwa, Thane — smart classrooms, computer lab, library, test series, doubt sessions, career guidance, parking and more.",
};

const promises = [
  "Disciplined, student-friendly learning environment",
  "Small, focused batches with individual attention",
  "Regular tests with honest performance feedback",
  "Free printed notes and structured study material",
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Facilities"
        title="Facilities & Infrastructure"
        subtitle="Everything a student needs to stay consistent and perform — under one roof in Vitawa, Kalwa."
      />

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Built Around the Student"
            subtitle="From smart classrooms to a computer lab, library and career guidance — practical facilities that support real results."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => {
              const Icon = (Icons[f.icon as keyof typeof Icons] || Icons.CheckCircle) as Icons.LucideIcon;
              return (
                <Reveal key={f.title} delay={(i % 3) * 0.07}>
                  <div className="group h-full rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-brand-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Our Promise
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-900">
              More Than Facilities — A Culture of Consistency
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Good infrastructure matters, but results come from discipline and attention. At Vidyadhan
              Classes, every facility exists to keep students consistent, supported and exam-ready.
            </p>
            <ul className="mt-6 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
            <Button href="/admissions" variant="primary" size="lg" className="mt-7">Visit Us / Book a Demo</Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "100%", l: "Result" },
                { v: "2008", l: "Established" },
                { v: "7th-12th", l: "All Standards" },
                { v: "Free", l: "Printed Notes" },
              ].map((s) => (
                <div key={s.l} className="rounded-3xl bg-brand-gradient p-7 text-center text-white shadow-card">
                  <p className="font-display text-2xl font-extrabold text-gold-400">{s.v}</p>
                  <p className="mt-1 text-sm text-brand-100">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
