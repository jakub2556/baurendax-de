import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Wärmepumpe FAQ – Kosten, Förderung, Altbau, Installation",
  description:
    "Was kostet eine Wärmepumpe? Funktioniert sie im Altbau? Wie hoch ist die Förderung 2026? Alle Antworten vom Fachbetrieb ✓ Kosten ✓ KfW-Förderung ✓ Installation",
  alternates: { canonical: "https://baurendax.de/faq" },
};

const faqs = [
  {
    category: "Kosten & Förderung",
    items: [
      {
        q: "Was kostet eine Wärmepumpe inklusive Installation?",
        a: "Die Gesamtkosten für eine Luft-Wasser-Wärmepumpe inklusive Installation liegen typischerweise zwischen 15.000 und 30.000 €. Der genaue Preis hängt von der Gebäudegröße, dem gewählten Gerät und den baulichen Gegebenheiten ab. Wir erstellen Ihnen ein individuelles Festpreisangebot.",
      },
      {
        q: "Welche Fördermittel gibt es für Wärmepumpen?",
        a: "Die KfW und das BAFA bieten attraktive Förderprogramme für den Heizungstausch. Je nach Voraussetzung können bis zu 70% der Kosten gefördert werden. Wir unterstützen Sie bei der Antragstellung und beraten Sie zu den aktuellen Fördermöglichkeiten.",
      },
      {
        q: "Gibt es eine Festpreisgarantie?",
        a: "Ja! Nach der Begehung vor Ort erstellen wir Ihnen ein verbindliches Festpreisangebot. So wissen Sie von Anfang an, was Ihre neue Heizung kostet — ohne versteckte Zusatzkosten.",
      },
    ],
  },
  {
    category: "Installation & Technik",
    items: [
      {
        q: "Wie lange dauert die Installation einer Wärmepumpe?",
        a: "Die reine Installation dauert in der Regel 2–5 Arbeitstage. Von der Erstberatung bis zur Inbetriebnahme planen wir durchschnittlich 4–8 Wochen ein, abhängig von den baulichen Gegebenheiten und der Verfügbarkeit der Geräte.",
      },
      {
        q: "Funktioniert eine Wärmepumpe auch im Altbau?",
        a: "Ja, moderne Wärmepumpen arbeiten auch bei niedrigen Außentemperaturen bis -20°C effizient. In den meisten Altbauten ist der Einbau problemlos möglich — auch mit bestehenden Heizkörpern. Wir prüfen die Eignung bei der Begehung vor Ort.",
      },
      {
        q: "Welche Wärmepumpen-Marken verwenden Sie?",
        a: "Wir arbeiten mit führenden Herstellern wie Viessmann, Bosch, Daikin und Vaillant zusammen. Die Wahl des Geräts richtet sich nach Ihren individuellen Anforderungen und den Gegebenheiten vor Ort.",
      },
      {
        q: "Muss ich meine bestehende Heizung vorher entfernen?",
        a: "Nein, das übernehmen wir für Sie. Bei einer Heizungsumrüstung kümmern wir uns um die komplette Demontage und fachgerechte Entsorgung Ihrer alten Heizungsanlage.",
      },
    ],
  },
  {
    category: "Service & Ablauf",
    items: [
      {
        q: "Arbeiten Sie deutschlandweit?",
        a: "Ja, wir bieten unsere Leistungen in ganz Deutschland an. Egal ob Norden oder Süden — wir kommen zu Ihnen.",
      },
      {
        q: "Was passiert nach der Installation?",
        a: "Nach der Installation erhalten Sie eine ausführliche Einweisung in Ihre neue Anlage. Auf Wunsch bieten wir auch Wartungsverträge für den langfristigen, effizienten Betrieb Ihrer Wärmepumpe an.",
      },
      {
        q: "An wen wende ich mich bei einer Störung?",
        a: "Bei Störungen erreichen Sie unseren Kundenservice telefonisch oder per E-Mail. Für Kunden mit Wartungsvertrag bieten wir einen bevorzugten Notfall-Service mit kurzen Reaktionszeiten.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Wärmepumpen,
            Kosten, Förderung und unseren Service.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-6">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((faq) => (
                  <details key={faq.q} className="group border border-border rounded-xl">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-foreground hover:text-accent transition-colors">
                      {faq.q}
                      <svg
                        className="w-5 h-5 text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-muted leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground font-heading">
            Ihre Frage war nicht dabei?
          </h2>
          <p className="mt-3 text-muted text-lg">
            Kontaktieren Sie uns direkt — wir helfen Ihnen gerne weiter.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((section) =>
              section.items.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              }))
            ),
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
    </>
  );
}
