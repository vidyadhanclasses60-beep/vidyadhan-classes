import type { Metadata } from "next";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { initials, avatarGradient, cn } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What students and parents say about Vidyadhan Classes — the coaching, mentoring and results behind our toppers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Testimonials"
        title="Words From Our Families"
        subtitle="The students and parents behind our 100% result share their experience."
      />

      <section className="py-20">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container">
          <SectionHeading eyebrow="More Voices" title="From Students & Parents" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card">
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold-500" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">“{t.quote}”</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <div className={cn("flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white", avatarGradient(t.name))} aria-hidden>
                      {initials(t.name)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900">{t.name}</p>
                      <p className="text-xs text-crimson-600">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-white px-6 py-4 text-center text-sm text-ink/60">
            These are representative testimonials built around real achievers. Replace them with genuine
            signed quotes in <code className="rounded bg-surface px-1.5 py-0.5 text-xs">lib/data.ts</code> before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
