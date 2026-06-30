import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { ToppersPreview } from "@/components/home/ToppersPreview";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { AwardsStrip } from "@/components/home/AwardsStrip";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CoursesPreview />
      <ToppersPreview />
      <FacilitiesPreview />
      <AwardsStrip />
      <section className="bg-surface py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Families Say About Us"
            subtitle="Words from the students and parents behind our results."
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
