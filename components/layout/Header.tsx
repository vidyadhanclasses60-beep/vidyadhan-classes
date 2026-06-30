"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/constants/site";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 shadow-card backdrop-blur" : "bg-white",
      )}
    >
      <div className="container flex h-20 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  active ? "bg-brand-50 text-brand-700" : "text-ink/75 hover:bg-brand-50 hover:text-brand-700",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={site.phoneHref} variant="outline" size="sm">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
          <Button href="/admissions" variant="gold" size="sm">
            Admission Open
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-brand-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold",
                      active ? "bg-brand-50 text-brand-700" : "text-ink/80 hover:bg-brand-50",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2">
                <Button href={site.phoneHref} variant="outline" size="md">
                  <Phone className="h-4 w-4" /> Call {site.phone}
                </Button>
                <Button href="/admissions" variant="gold" size="md">
                  Admission Open
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
