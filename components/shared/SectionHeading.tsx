import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", light }: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            light ? "bg-white/15 text-gold-300" : "bg-brand-50 text-brand-700",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl",
          light ? "text-white" : "text-brand-900",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-base leading-relaxed", light ? "text-brand-100" : "text-ink/70")}>
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-1.5 w-20 rounded-full bg-gold-gradient",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}
