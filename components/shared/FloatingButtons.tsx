import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-success p-3.5 text-white shadow-soft transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-success/40"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call Vidyadhan Classes"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson-600 p-3.5 text-white shadow-soft transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-crimson-300"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
