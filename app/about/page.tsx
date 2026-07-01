import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, CheckCircle2, Quote } from "lucide-react";
import { site } from "@/constants/site";
import { awards } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Vidyadhan Classes, Vitawa (Kalwa), Thane — For Quality Education since 2008, led by Mahendra Chaudhari Sir (B.Sc. B.Ed.).",
};

const timeline = [
  { year: "2008", text: "Vidyadhan Classes is founded in Vitawa, Kalwa, with a mission of quality education." },
  { year: "2008–2020", text: "Years of consistent State Board results across Std. 7th to 10th." },
  { year: "2021–2024", text: "Expansion into 11th & 12th Science (MHT-CET) and Commerce, with Science, School and Commerce sections." },
  { year: "2025", text: "Honoured with the Aadarsh Shikshak Puraskar by the Coaching Classes Sanchalak Sanghatna." },
  { year: "2026", text: "100% result with 25 SSC and 17 HSC toppers — Divya Sonawane tops SSC with 90.20%." },
];

const objectives = [
  "Build strong fundamentals from Std. 7th onward",
  "Deliver consistent State Board and board-exam results",
  "Prepare Science students for MHT-CET",
  "Provide free printed notes and regular weekly tests",
  "Keep parents involved through regular meetings",
  "Guide every student on streams and careers",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="About Vidyadhan Classes"
        subtitle="For Quality Education since 2008 — a trusted name for coaching in Vitawa, Kalwa, Thane."
      />

      <section className="py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-900">
              A Local Institute Built on Results and Trust
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Founded in {site.established}, Vidyadhan Classes has grown into one of the most trusted
              coaching classes in the Vitawa–Kalwa area of Thane. We coach students from Std. 7th to 10th
              in English and Semi-English medium, and Std. 11th & 12th in Science (MHT-CET) and Commerce.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Under the guidance of {site.director} ({site.directorQualification}), the institute focuses
              on strong fundamentals, disciplined practice and individual attention — reflected in a
              100% result and dozens of toppers every year.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-brand-900">No.1 Coaching since 2008</span>
              <span className="rounded-full bg-crimson-50 px-4 py-2 text-sm font-semibold text-crimson-600">100% Result</span>
              <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">English & Semi-English</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-4xl bg-brand-gradient p-8 text-center text-white shadow-soft">
              <Image
                src="/images/director.jpg"
                alt="Mahendra Chaudhari Sir — Director of Vidyadhan Classes"
                width={200}
                height={200}
                className="mx-auto h-44 w-44 rounded-full border-4 border-gold-400 object-cover shadow-soft"
              />
              <h3 className="mt-5 font-display text-2xl font-bold">{site.director}</h3>
              <p className="text-gold-300">{site.directorQualification} — Director & Founder</p>
              <blockquote className="relative mt-5 rounded-3xl bg-white/10 p-5 text-sm leading-relaxed text-brand-100">
                <Quote className="absolute right-4 top-4 h-6 w-6 text-white/20" aria-hidden />
                “Every child can excel with the right guidance, honest feedback and consistent practice.
                At Vidyadhan Classes, we teach until every concept is clear.”
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-surface py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-4xl border border-line bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                To provide quality, affordable education that helps every student build strong
                fundamentals and achieve consistent results — from Std. 7th through 12th.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-4xl border border-line bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson-gradient text-white">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                To be the most trusted coaching institute in Thane for school and junior-college
                education, known for results, integrity and the all-round growth of students.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Our Journey" title="Milestones Since 2008" />
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-line sm:left-1/2" aria-hidden />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex gap-6 sm:w-1/2 ${i % 2 ? "sm:ml-auto sm:flex-row" : "sm:flex-row-reverse sm:text-right"}`}>
                    <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gold-500 shadow sm:left-auto sm:right-0 sm:translate-x-1/2" style={i % 2 ? { left: "-2rem" } : {}} aria-hidden />
                    <div className="ml-10 rounded-3xl border border-line bg-white p-5 shadow-card sm:ml-0">
                      <span className="inline-block rounded-full bg-brand-700 px-3 py-0.5 text-xs font-bold text-white">{item.year}</span>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-surface py-20">
        <div className="container">
          <SectionHeading eyebrow="What We Stand For" title="Our Objectives" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {objectives.map((o, i) => (
              <Reveal key={o} delay={(i % 2) * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <p className="text-sm font-medium text-ink/80">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards recap */}
      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Recognition" title="Awards & Honours" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <Reveal key={`${a.title}-${a.year}`} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-3xl border border-gold-200 bg-gold-50/60 p-6 text-center">
                  <h3 className="font-display text-base font-bold text-brand-900">{a.title}</h3>
                  <p className="mt-1 text-xs text-ink/65">{a.org}</p>
                  <span className="mt-3 inline-block rounded-full bg-brand-700 px-3 py-0.5 text-xs font-semibold text-white">{a.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
