import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-brand-gradient">
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center text-white">
        <p className="font-display text-7xl font-extrabold text-gold-400 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Page Not Found</h1>
        <p className="mt-3 max-w-md text-brand-100">
          The page you are looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold" size="lg"><Home className="h-4 w-4" /> Back to Home</Button>
          <Button href="/courses" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-900">
            View Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
