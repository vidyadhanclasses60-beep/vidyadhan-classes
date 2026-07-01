import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { starPerformer } from "@/lib/data";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ResultsTabs } from "@/components/results/ResultsTabs";

export const metadata: Metadata = {
  title: "Results & Toppers",
  description:
    "Vidyadhan Classes 2026 results — 100% result with 25 SSC toppers (Divya Sonawane 90.20%) and 17 HSC toppers. See every achiever.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Results"
        title="Our Toppers 2026"
        subtitle="100% result — celebrating 25 SSC and 17 HSC achievers from Vidyadhan Classes."
      />

      <section className="py-16">
        <div className="container">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-4xl bg-brand-gradient p-8 text-center text-white shadow-soft sm:flex-row sm:text-left">
              <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full bg-gold-gradient text-brand-900">
                <Star className="h-6 w-6 fill-brand-900" />
                <span className="font-display text-2xl font-extrabold">{starPerformer.percentage}</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold-300">Star Performer · SSC {starPerformer.year}</p>
                <h2 className="mt-1 font-display text-3xl font-extrabold">{starPerformer.name}</h2>
                <p className="text-brand-100">{starPerformer.school}</p>
                <p className="mt-2 text-sm text-brand-100/80">One of the highest scores in the institute’s history.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-4">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-4xl border border-line bg-white p-3 shadow-card">
              <Image
                src="/images/results/toppers-2026.jpg"
                alt="Vidyadhan Classes SSC and HSC 2026 toppers with names and percentages"
                width={1035}
                height={1600}
                sizes="(max-width: 768px) 100vw, 700px"
                className="h-auto w-full rounded-3xl"
                priority
              />
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-ink/60">
              Our complete SSC &amp; HSC 2026 toppers. Full list with schools below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 pt-12">
        <ResultsTabs />
      </section>
    </>
  );
}
