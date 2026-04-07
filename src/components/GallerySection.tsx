"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { LightboxGallery } from "@/components/Lightbox";

const galleryImages = [
  { src: "/images/IMG20251104143313.webp", alt: "Wärmepumpe Installation — Außeneinheit" },
  { src: "/images/IMG20251109155056-1.webp", alt: "Professionelle Wärmepumpen-Montage" },
  { src: "/images/IMG20251101120210.webp", alt: "Außeneinheit an Hauswand montiert" },
  { src: "/images/IMG20250930173005.webp", alt: "Fertige Wärmepumpe im Betrieb" },
  { src: "/images/IMG20251009202259.webp", alt: "Technikraum mit Wärmepumpe" },
  { src: "/images/IMG20251104135953.webp", alt: "Wärmepumpe Service und Wartung" },
  { src: "/images/IMG20251104143318.webp", alt: "Wärmepumpe Nahaufnahme" },
  { src: "/images/IMG202511041402502.webp", alt: "Installation Innenbereich" },
  { src: "/images/IMG20251202153350.webp", alt: "Abgeschlossenes Wärmepumpen-Projekt" },
];

export function GallerySection() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Unsere Projekte
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-heading tracking-tight">
              Referenzen aus ganz Deutschland
            </h2>
            <p className="mt-4 text-muted text-lg">
              Klicken Sie auf ein Bild für die Großansicht
            </p>
          </div>
        </ScrollReveal>

        <LightboxGallery images={galleryImages} />
      </div>
    </section>
  );
}
