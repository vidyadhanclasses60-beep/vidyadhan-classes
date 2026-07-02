import type { Metadata } from "next";
import { BookOpen, Clock, GraduationCap, ListChecks, Sparkles } from "lucide-react";
import { courses, feeTables, feeNote } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Courses & Fees",
  description:
    "Courses at Vidyadhan Classes: Std. 7th to 10th (English & Semi-English), 11th & 12th Science (MHT-CET) and Commerce, with full 2026-27 fee structure.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Courses"
        title="Courses & Fee Structure"
        subtitle="Structured programmes from foundation years to board exams and MHT-CET — with the complete 2026-27 fees."
      />

      <section className="py-20">
        <div className="container space-y-8">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-card">
                <div className="grid lg:grid-cols-[1.2fr_1fr]">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-brand-900">{c.title}</h2>
                        <p className="text-sm font-semibold text-crimson-600">{c.medium}</p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-2 text-sm">
                        <GraduationCap className="mt-0.5 h-4 w-4 text-brand-700" />
                        <span><span className="font-semibold text-brand-900">Level:</span> {c.level}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="mt-0.5 h-4 w-4 text-brand-700" />
                        <span><span className="font-semibold text-brand-900">Timing:</span> {c.timing}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm sm:col-span-2">
                        <ListChecks className="mt-0.5 h-4 w-4 text-brand-700" />
                        <span><span className="font-semibold text-brand-900">Eligibility:</span> {c.eligibility}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="flex items-center gap-2 text-sm font-bold text-brand-900">
                        <BookOpen className="h-4 w-4" /> Subjects
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.subjects.map((s) => (
                          <span key={s} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink/75">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface p-8 sm:p-10">
                    <p className="flex items-center gap-2 text-sm font-bold text-brand-900">
                      <Sparkles className="h-4 w-4 text-gold-500" /> Highlights
                    </p>
                    <ul className="mt-4 space-y-3">
                      {c.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-ink/75">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Button href="/admissions" variant="primary" size="md" className="mt-6 w-full">
                      Enquire for this course
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section className="bg-surface py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="Fee Structure 2026-27"
            subtitle="All figures are as published by Vidyadhan Classes. Combo packages carry a special discount."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {feeTables.map((table, i) => (
              <Reveal key={table.title} delay={(i % 2) * 0.06}>
                <div className="h-full overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                  <div className="bg-brand-gradient px-6 py-4">
                    <h3 className="font-display text-lg font-bold text-white">{table.title}</h3>
                  </div>
                  <ul className="divide-y divide-line">
                    {table.rows.map((row) => (
                      <li key={row.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
                        <span className="text-sm font-medium text-ink/80">{row.label}</span>
                        <span className="rounded-full bg-crimson-50 px-3 py-1 text-sm font-bold text-crimson-600">{row.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gold-200 bg-gold-50 px-6 py-4 text-center text-sm font-medium text-brand-900">
              {feeNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
