import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Vidyadhan Classes — toppers felicitations, award ceremonies, events and campus moments in Vitawa, Kalwa, Thane.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        title="Moments at Vidyadhan Classes"
        subtitle="Felicitations, awards, events and everyday learning — a glimpse into our institute."
      />
      <section className="py-20">
        <GalleryGrid />
      </section>
    </>
  );
}
