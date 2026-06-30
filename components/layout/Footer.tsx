import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { nav, site } from "@/constants/site";
import { courses } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-gradient text-brand-100">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/85">
            For Quality Education since {site.established}. Coaching for Std. 7th–10th and 11th & 12th
            (Science & Commerce) in Vitawa, Kalwa, Thane.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 transition hover:bg-gold-500 hover:text-brand-900">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={site.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:bg-gold-500 hover:text-brand-900">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={site.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 transition hover:bg-gold-500 hover:text-brand-900">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold-300">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-white">Courses</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href="/courses" className="transition hover:text-gold-300">{c.title}</Link>
              </li>
            ))}
            <li><Link href="/admissions" className="transition hover:text-gold-300">Fees & Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={site.phoneHref} className="hover:text-gold-300">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={site.whatsappHref} className="hover:text-gold-300">WhatsApp {site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-100/80 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-300">Terms</Link>
            <Link href="/faq" className="hover:text-gold-300">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
