import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Baurendax – Angaben gemäß § 5 TMG.",
  alternates: { canonical: "https://baurendax.de/impressum" },
};

export default function Impressum() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
        <h1 className="text-3xl font-bold text-foreground font-heading">Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Baurendax
          <br />
          Deutschlandweiter Service
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +421 944 075 714
          <br />
          E-Mail: info@baurendax.de
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Baurendax
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Impressum", href: "/impressum" },
        ]}
      />
    </section>
  );
}
