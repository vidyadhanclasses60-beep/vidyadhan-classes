import * as Icons from "lucide-react";
import { facilities } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function FacilitiesPreview() {
  return (
    <section className="bg-surface py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Why Vidyadhan"
          title="Facilities That Support Every Student"
          subtitle="Everything a student needs to stay consistent — from smart classrooms to free notes and career guidance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => {
            const Icon = (Icons[f.icon as keyof typeof Icons] || Icons.CheckCircle) as Icons.LucideIcon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full gap-4 rounded-3xl border border-line bg-white p-6 shadow-card transition hover:shadow-soft">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-900">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
