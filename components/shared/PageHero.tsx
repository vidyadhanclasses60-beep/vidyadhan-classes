import { Reveal } from "./Reveal";

interface Props {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-crimson-600/20 blur-3xl" />
      </div>
      <div className="container relative text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">{breadcrumb}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-brand-100">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
