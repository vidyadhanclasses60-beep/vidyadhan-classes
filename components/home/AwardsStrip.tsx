import { Award as AwardIcon } from "lucide-react";
import { awards } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function AwardsStrip() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Recognition"
          title="Awarded for Quality Teaching"
          subtitle="Honoured by the Coaching Classes Sanchalak Sanghatna, Maharashtra for excellence in education."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a, i) => (
            <Reveal key={`${a.title}-${a.year}`} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-3xl border border-gold-200 bg-gold-50/60 p-6 text-center shadow-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-brand-900">
                  <AwardIcon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-brand-900">{a.title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink/65">{a.org}</p>
                <span className="mt-3 inline-block rounded-full bg-brand-700 px-3 py-0.5 text-xs font-semibold text-white">
                  {a.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
