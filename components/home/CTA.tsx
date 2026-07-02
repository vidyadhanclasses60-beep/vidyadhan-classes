import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-14 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-crimson-600/20 blur-3xl" aria-hidden />
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Admissions Are Open</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              Join Vidyadhan Classes for Std. 7th to 10th, 11th & 12th (Science & Commerce). Talk to
              Mahendra Chaudhari Sir today and secure your seat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/admissions" variant="gold" size="lg">Apply for Admission</Button>
              <Button href={site.phoneHref} size="lg" className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20">
                <Phone className="h-4 w-4" /> {site.phone}
              </Button>
              <Button href={site.whatsappHref} size="lg" className="bg-success text-white hover:brightness-110">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
