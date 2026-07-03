import Image from "next/image";
import { Trophy } from "lucide-react";
import type { Topper } from "@/types";
import { initials, avatarGradient, cn } from "@/lib/utils";

/* Real topper portraits (cropped from the class-topper posters).      */
/* Keyed by the exact name in lib/data.ts. Names not listed here keep   */
/* the branded initials avatar as a graceful fallback.                  */
const topperPhotos: Record<string, string> = {
  // Photos removed by request — every topper now shows the initials avatar.
  // To bring photos back later, restore the "Name": "/images/toppers/slug.jpg" lines.
};

export function TopperCard({ topper, rank }: { topper: Topper; rank?: number }) {
  const photo = topperPhotos[topper.name];
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="bg-brand-gradient px-5 pb-12 pt-6 text-center">
        {rank && (
          <span className="absolute left-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-brand-900">
            {rank}
          </span>
        )}
        <Trophy className="mx-auto h-5 w-5 text-gold-400" aria-hidden />
      </div>
      <div className="relative -mt-10 px-5 pb-6 text-center">
        {photo ? (
          <Image
            src={photo}
            alt={topper.name}
            width={160}
            height={160}
            className="mx-auto h-20 w-20 rounded-full border-4 border-white object-cover shadow-soft"
          />
        ) : (
          <div
            className={cn(
              "mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-xl font-bold text-white shadow-soft",
              avatarGradient(topper.name),
            )}
            aria-hidden
          >
            {initials(topper.name)}
          </div>
        )}
        <div className="mt-3 inline-block rounded-full bg-gold-gradient px-4 py-1 text-lg font-extrabold text-brand-900">
          {topper.percentage}
        </div>
        <h3 className="mt-2 font-display text-lg font-bold text-brand-900">{topper.name}</h3>
        <p className="mt-0.5 text-xs leading-snug text-ink/60">{topper.school}</p>
        <span className="mt-2 inline-block rounded-full bg-crimson-50 px-3 py-0.5 text-[11px] font-semibold text-crimson-600">
          {topper.level} {topper.year}
        </span>
      </div>
    </div>
  );
}
