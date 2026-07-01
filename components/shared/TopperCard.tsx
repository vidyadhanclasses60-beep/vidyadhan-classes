import Image from "next/image";
import { Trophy } from "lucide-react";
import type { Topper } from "@/types";
import { initials, avatarGradient, cn } from "@/lib/utils";

/* Real topper portraits (cropped from the class-topper posters).      */
/* Keyed by the exact name in lib/data.ts. Names not listed here keep   */
/* the branded initials avatar as a graceful fallback.                  */
const topperPhotos: Record<string, string> = {
  "Divya Sonawane": "/images/toppers/divya-sonawane.jpg",
  "Nandini Wagh": "/images/toppers/nandini-wagh.jpg",
  "Atharva Shinde": "/images/toppers/atharva-shinde.jpg",
  "Shreya Kesare": "/images/toppers/shreya-kesare.jpg",
  "Sujit Chikane": "/images/toppers/sujit-chikane.jpg",
  "Shravani Chaudhari": "/images/toppers/shravani-chaudhari.jpg",
  "Parth Lohar": "/images/toppers/parth-lohar.jpg",
  "Om Kheratkar": "/images/toppers/om-kheratkar.jpg",
  "Tanvi Tambe": "/images/toppers/tanvi-tambe.jpg",
  "Bhavesh Lotankar": "/images/toppers/bhavesh-lotankar.jpg",
  "Nidhi Padwal": "/images/toppers/nidhi-padwal.jpg",
  "Aryan Shinde": "/images/toppers/aryan-shinde.jpg",
  "Sumedh Jagzap": "/images/toppers/sumedh-jagzap.jpg",
  "Vedika Unde": "/images/toppers/vedika-unde.jpg",
  "Vedanti Shinde": "/images/toppers/vedanti-shinde.jpg",
  "Mausam Medatiya": "/images/toppers/mausam-medatiya.jpg",
  "Omkar Ranpise": "/images/toppers/omkar-ranpise.jpg",
  "Sakshi Yadav": "/images/toppers/sakshi-yadav.jpg",
  "Rahul Choudhary": "/images/toppers/rahul-choudhary.jpg",
  "Navin Lohar": "/images/toppers/navin-lohar.jpg",
  "Sarthak Rode": "/images/toppers/sarthak-rode.jpg",
  "Manthan Jadhav": "/images/toppers/manthan-jadhav.jpg",
  "Harpritsingh Rathod": "/images/toppers/harpritsingh-rathod.jpg",
  "Jay Karanje": "/images/toppers/jay-karanje.jpg",
  "Aditya Patil": "/images/toppers/aditya-patil.jpg",
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
