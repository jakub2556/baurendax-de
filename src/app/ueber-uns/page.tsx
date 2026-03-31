import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Baurendax – Wärmepumpen-Fachbetrieb Deutschland",
  description:
    "Baurendax: Ihr zertifizierter Wärmepumpen-Fachbetrieb ✓ Erfahrenes Team ✓ Deutschlandweiter Service ✓ Viessmann & Bosch Partner ✓ Festpreisgarantie",
  alternates: { canonical: "https://baurendax.de/ueber-uns" },
};

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Über uns</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Wir machen Deutschland grüner
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Als erfahrenes Fachunternehmen für Wärmepumpen helfen wir Hausbesitzern in ganz
            Deutschland beim Umstieg auf eine nachhaltige Heizung.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-heading">Unsere Geschichte</h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Baurendax wurde mit einer klaren Vision gegründet: Wärmepumpen-Installation so einfach
                und transparent wie möglich zu machen. Von der ersten Beratung bis zur fertigen
                Anlage — bei uns bekommen Sie alles aus einer Hand.
              </p>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                Unser Team aus zertifizierten Technikern und erfahrenen Beratern sorgt dafür, dass Ihr
                Umstieg auf eine Wärmepumpe reibungslos verläuft. Wir arbeiten mit führenden
                Herstellern wie Viessmann und Bosch zusammen, um Ihnen die beste Qualität zu bieten.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/ChatGPT-Image-18.-3.-2026-20_32_36.webp"
                alt="Das Baurendax Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground font-heading">Unsere Werte</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Qualität",
                description:
                  "Wir setzen auf hochwertige Markenprodukte und fachgerechte Installation nach höchsten Standards.",
              },
              {
                title: "Transparenz",
                description:
                  "Festpreisgarantie, klare Kommunikation und keine versteckten Kosten — bei uns wissen Sie immer, woran Sie sind.",
              },
              {
                title: "Nachhaltigkeit",
                description:
                  "Jede installierte Wärmepumpe ist ein Beitrag zum Klimaschutz. Wir helfen Ihnen, Ihren CO₂-Fußabdruck zu reduzieren.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl border border-border text-center"
              >
                <h3 className="text-xl font-semibold text-foreground font-heading">{value.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Lernen Sie uns kennen
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Kontaktieren Sie uns für ein persönliches Beratungsgespräch.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-white/90 transition-colors text-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
