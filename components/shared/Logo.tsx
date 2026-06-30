import Image from "next/image";
import Link from "next/link";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label={`${site.name} home`}>
      <Image
        src="/logo.png"
        alt={`${site.name} logo`}
        width={52}
        height={52}
        className="h-12 w-12 rounded-full bg-white object-contain p-0.5 shadow-card"
        priority
      />
      <span className="leading-tight">
        <span className={cn("block font-display text-lg font-extrabold tracking-tight", light ? "text-white" : "text-brand-900")}>
          {site.name}
        </span>
        <span className={cn("block text-[11px] font-semibold tracking-wide", light ? "text-gold-300" : "text-crimson-600")}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
