"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon } from "lucide-react";
import { gallery } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Results", "Events", "Awards", "Campus"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter);

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
        {items.map((item, i) => (
          <motion.button
            key={item.title}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            onClick={() => setActive(i)}
            className={cn(
              "group relative flex w-full break-inside-avoid items-end overflow-hidden rounded-3xl bg-brand-gradient p-6 text-left text-white shadow-card transition hover:shadow-soft",
              i % 3 === 0 ? "min-h-56" : i % 3 === 1 ? "min-h-44" : "min-h-64",
            )}
          >
            <ImageIcon className="absolute right-5 top-5 h-7 w-7 text-white/25" aria-hidden />
            <div>
              <span className="inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-bold text-brand-900">{item.category}</span>
              <p className="mt-2 font-display text-lg font-bold leading-snug">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink/60">
        Replace these cards with real event photographs from your gallery in components/gallery/GalleryGrid.tsx.
      </p>

      <AnimatePresence>
        {active !== null && (
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
              className="relative w-full max-w-lg rounded-4xl bg-brand-gradient p-10 text-center text-white"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 rounded-full bg-white/15 p-2 hover:bg-white/25"
              >
                <X className="h-5 w-5" />
              </button>
              <ImageIcon className="mx-auto h-16 w-16 text-white/30" />
              <span className="mt-4 inline-block rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold text-brand-900">{items[active].category}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{items[active].title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
