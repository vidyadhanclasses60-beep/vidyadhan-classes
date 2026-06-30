import { sscToppers } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { TopperCard } from "@/components/shared/TopperCard";
import { Button } from "@/components/ui/Button";

export function ToppersPreview() {
  const featured = sscToppers.slice(0, 8);
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="SSC 2026 Result"
          title="Heartiest Congratulations to Our Toppers"
          subtitle="A 100% result and 25 SSC toppers above 80% — proof of consistent, quality teaching at Vidyadhan Classes."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.08}>
              <TopperCard topper={t} rank={i + 1} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/results" variant="crimson" size="lg">See all SSC & HSC toppers</Button>
        </div>
      </div>
    </section>
  );
}
