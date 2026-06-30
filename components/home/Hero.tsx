"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, BookOpen, GraduationCap, Star } from "lucide-react";
import { site } from "@/constants/site";
import { starPerformer } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-crimson-600/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute right-10 top-16 animate-float text-gold-400/30">
          <GraduationCap className="h-16 w-16" />
        </div>
        <div className="absolute bottom-24 left-10 animate-float text-white/10" style={{ animationDelay: "1.5s" }}>
          <BookOpen className="h-20 w-20" />
        </div>
      </div>

      <div className="container relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-white/15"
          >
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> No.1 Coaching Classes since {site.established}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Vidyadhan <span className="text-gold-400">Classes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg font-semibold text-brand-100"
          >
            {site.tagline} — {site.classesLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-brand-100/90"
          >
            English & Semi-English Medium coaching for Std. 7th to 10th, and 11th & 12th in Science
            (MHT-CET) and Commerce — guided by Mahendra Chaudhari Sir in Vitawa, Kalwa, Thane.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button href="/admissions" variant="gold" size="lg">Apply for Admission</Button>
            <Button href="/courses" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-900">
              View Courses
            </Button>
            <Button href={site.phoneHref} size="lg" className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20">
              <Phone className="h-4 w-4" /> Call Now
            </Button>
            <Button href={site.whatsappHref} size="lg" className="bg-success text-white hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Logo + star result card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-4xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Vidyadhan Classes logo"
                width={180}
                height={180}
                className="h-44 w-44 rounded-full bg-white object-contain p-2 shadow-soft"
                priority
              />
            </div>
            <div className="mt-6 rounded-3xl bg-gold-gradient p-5 text-center text-brand-900">
              <p className="text-xs font-bold uppercase tracking-wider">SSC 2025 Topper</p>
              <p className="mt-1 font-display text-4xl font-extrabold">{starPerformer.percentage}</p>
              <p className="text-sm font-bold">{starPerformer.name}</p>
              <p className="text-xs">{starPerformer.school}</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { v: "100%", l: "Result" },
                { v: "2008", l: "Since" },
                { v: "42+", l: "Toppers" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/10 py-3">
                  <p className="font-display text-xl font-extrabold text-gold-400">{s.v}</p>
                  <p className="text-[11px] text-brand-100">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
