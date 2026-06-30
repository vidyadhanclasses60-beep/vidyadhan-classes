"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { initials, avatarGradient, cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-4xl border border-line bg-white p-8 shadow-soft sm:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-50" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <p className="relative text-lg leading-relaxed text-ink/80 sm:text-xl">“{t.quote}”</p>
            <div className="mt-7 flex items-center gap-4">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white",
                  avatarGradient(t.name),
                )}
                aria-hidden
              >
                {initials(t.name)}
              </div>
              <div>
                <p className="font-display font-bold text-brand-900">{t.name}</p>
                <p className="text-sm text-crimson-600">{t.detail}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={prev} aria-label="Previous testimonial" className="rounded-full border border-line p-2.5 text-brand-700 transition hover:bg-brand-50">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all",
                i === index ? "w-7 bg-brand-700" : "w-2.5 bg-line hover:bg-brand-200",
              )}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next testimonial" className="rounded-full border border-line p-2.5 text-brand-700 transition hover:bg-brand-50">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
