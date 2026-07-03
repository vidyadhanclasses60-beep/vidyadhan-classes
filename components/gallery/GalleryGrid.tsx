"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon } from "lucide-react";
import { gallery } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Results", "Events", "Awards", "Campus"];

/* Real photographs mapped to their gallery entry by title.            */
/* Entries without an image here fall back to the branded card design. */
const galleryImages: Record<string, { src: string; w: number; h: number }> = {
  "SSC 2026 Toppers Felicitation": { src: "/images/gallery/ssc-toppers-2026.jpg", w: 1200, h: 1440 },
  "HSC 2026 Toppers Felicitation": { src: "/images/gallery/hsc-toppers-2026.jpg", w: 1200, h: 1440 },
  "Sabhasad Sanman Award": { src: "/images/gallery/sabhasad-sanman-award.jpg", w: 1200, h: 864 },
  "Aadarsh Shikshak Puraskar Ceremony": { src: "/images/gallery/aadarsh-shikshak-ceremony.jpg", w: 1200, h: 933 },
  "Shikshakratna Puraskar Felicitation": { src: "/images/gallery/shikshakratna-puraskar.jpg", w: 1200, h: 1600 },
  "Director Felicitation Moments": { src: "/images/gallery/director-felicitation.jpg", w: 1200, h: 800 },
  "10th Std. Farewell Ceremony 2025-26": { src: "/images/gallery/farewell-ceremony-2026.jpg", w: 1200, h: 900 },
  "Student Gathering & Sessions": { src: "/images/gallery/student-gathering.jpg", w: 1200, h: 900 },
  "Annual Function Highlights": { src: "/images/gallery/annual-function.jpg", w: 1200, h: 900 },
  "Classroom & Doubt Sessions": { src: "/images/gallery/classroom-doubt-session.jpg", w: 1200, h: 900 },
  "100% Result Celebration": { src: "/images/gallery/result-celebration.jpg", w: 1200, h: 800 },
  "Teacher's Day Sohla 2025": { src: "/images/gallery/teachers-day-sohla.jpg", w: 1200, h: 800 },
};

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter);
  const activeItem = active !== null ? items[active] : null;
  const activeImg = activeItem ? galleryImages[activeItem.title] : undefined;

  return (
    <div className="container">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              filter === c ? "bg-brand-700 text-white shadow" : "border border-line bg-white text-brand-700 hover:bg-brand-50",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => {
          const img = galleryImages[item.title];
          return (
            <motion.button
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              onClick={() => setActive(i)}
              className={cn(
                "group relative flex w-full break-inside-avoid overflow-hidden rounded-3xl text-left shadow-card transition hover:shadow-soft",
                img
                  ? "items-end"
                  : cn(
                      "items-end bg-brand-gradient p-6 text-white",
                      i % 3 === 0 ? "min-h-56" : i % 3 === 1 ? "min-h-44" : "min-h-64",
                    ),
              )}
            >
              {img ? (
                <>
                  <Image
                    src={img.src}
                    alt={item.title}
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/10 to-transparent" />
                  <div className="relative p-5 text-white">
                    <span className="inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-bold text-brand-900">{item.category}</span>
                    <p className="mt-2 font-display text-lg font-bold leading-snug">{item.title}</p>
                  </div>
                </>
              ) : (
                <>
                  <ImageIcon className="absolute right-5 top-5 h-7 w-7 text-white/25" aria-hidden />
                  <div>
                    <span className="inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-bold text-brand-900">{item.category}</span>
                    <p className="mt-2 font-display text-lg font-bold leading-snug">{item.title}</p>
                  </div>
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-900/85 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full overflow-hidden rounded-4xl text-center text-white",
                activeImg ? "max-w-2xl bg-brand-900" : "max-w-lg bg-brand-gradient p-10",
              )}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2 hover:bg-white/25"
              >
                <X className="h-5 w-5" />
              </button>
              {activeImg ? (
                <>
                  <Image
                    src={activeImg.src}
                    alt={activeItem.title}
                    width={activeImg.w}
                    height={activeImg.h}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="h-auto max-h-[75vh] w-full object-contain"
                  />
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold text-brand-900">{activeItem.category}</span>
                    <h3 className="mt-2 font-display text-xl font-bold">{activeItem.title}</h3>
                  </div>
                </>
              ) : (
                <>
                  <ImageIcon className="mx-auto h-16 w-16 text-white/30" />
                  <span className="mt-4 inline-block rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold text-brand-900">{activeItem.category}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{activeItem.title}</h3>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
