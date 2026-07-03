import type { ReactNode } from "react";
import "./globals.css";
import { baseMetadata, organizationJsonLd } from "@/lib/seo";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/shared/FloatingButtons";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

export const metadata = baseMetadata;

export const viewport = {
  themeColor: "#0A2E8A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
