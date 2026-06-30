import { Megaphone } from "lucide-react";

const messages = [
  "🎓 Admission Open — 7th to 10th (English & Semi-English) | 11th & 12th (Science & Commerce)",
  "🏆 SSC 2026: Divya Sonawane tops with 90.20% — 100% Result at Vidyadhan Classes",
  "📚 Free printed notes for one-time fees paid",
  "📞 Call / WhatsApp Mahendra Chaudhari Sir: 9322094000",
  "🔬 11th Demo lectures start Monday, 1st June 2026",
];

export function AnnouncementBar() {
  const loop = [...messages, ...messages];
  return (
    <div className="relative flex items-center gap-3 overflow-hidden bg-crimson-gradient py-2 text-sm text-white">
      <span className="z-10 flex shrink-0 items-center gap-1.5 bg-crimson-700 px-3 py-1 font-bold uppercase tracking-wide">
        <Megaphone className="h-4 w-4" /> News
      </span>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap pr-10">
        {loop.map((m, i) => (
          <span key={i} className="font-medium">{m}</span>
        ))}
      </div>
    </div>
  );
}
