import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Calculator } from "lucide-react";
import { courses } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

const icons = [BookOpen, FlaskConical, Calculator];

export function CoursesPreview() {
  return (
    <section className="bg-surface py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Our Programmes"
          title="Courses Built for State Board Success"
          subtitle="From foundation years to board exams and MHT-CET — structured coaching with free notes, weekly tests and doubt sessions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={c.slug} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-900">{c.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-crimson-600">{c.medium}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
                    {c.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/courses" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 transition group-hover:gap-2">
                    Explore course <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button href="/courses" variant="primary" size="lg">View all courses & fees</Button>
        </div>
      </div>
    </section>
  );
}
