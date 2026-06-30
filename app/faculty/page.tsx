import type { Metadata } from "next";
import { GraduationCap, BookOpen, Clock } from "lucide-react";
import { faculty } from "@/lib/data";
import { initials, avatarGradient, cn } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the faculty of Vidyadhan Classes — led by Director Mahendra Chaudhari Sir (B.Sc. B.Ed.), with dedicated School, Science and Commerce sections.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Faculty"
        title="Our Faculty"
        subtitle="Experienced, dedicated mentors across School, Science and Commerce sections."
      />
      <section className="py-20">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div
                  className={cn(
                    "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white shadow-soft",
                    avatarGradient(f.name),
                  )}
                  aria-hidden
                >
                  {initials(f.name)}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-900">{f.name}</h3>
                <p className="text-sm font-semibold text-crimson-600">{f.role}</p>
                <div className="mt-4 space-y-2 text-left text-sm text-ink/70">
                  <p className="flex items-start gap-2"><GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" /> {f.qualification}</p>
                  <p className="flex items-start gap-2"><BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" /> {f.subject}</p>
                  <p className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" /> {f.experience}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container">
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-surface px-6 py-4 text-center text-sm text-ink/65">
            Individual subject-teacher profiles and photographs can be added here as they are provided.
          </p>
        </div>
      </section>
    </>
  );
}
