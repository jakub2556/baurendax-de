import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen – Wärmepumpen-Installation & Service",
  description:
    "Unsere Leistungen: Beratung, technische Planung, Lieferung, Installation und Wartung von Wärmepumpen in ganz Deutschland.",
};

const services = [
  {
    id: "beratung",
    title: "Beratung & Begehung",
    description:
      "Unsere Experten kommen zu Ihnen vor Ort und beurteilen die Gegebenheiten. Gemeinsam finden wir die optimale Wärmepumpen-Lösung für Ihr Gebäude — ob Neubau oder Altbau.",
    features: [
      "Kostenlose Erstberatung",
      "Vor-Ort-Begehung und Analyse",
      "Prüfung der Förderfähigkeit",
      "Individuelle Empfehlung",
    ],
    image: "/images/Roztiahnute-sluzby-1024x683.png",
  },
  {
    id: "installation",
    title: "Lieferung & Installation",
    description:
      "Wir liefern hochwertige Marken-Wärmepumpen und installieren diese fachgerecht. Unsere zertifizierten Techniker sorgen für eine saubere, termingerechte Montage.",
    features: [
      "Markengeräte von Viessmann, Bosch & Co.",
      "Zertifizierte Montage-Techniker",
      "Festpreisgarantie",
      "Termingerechte Umsetzung",
    ],
    image: "/images/service-1024x683.png",
  },
  {
    id: "umruestung",
    title: "Heizungsumrüstung",
    description:
      "Sie heizen noch mit Öl, Gas oder Elektro? Wir rüsten Ihre bestehende Heizungsanlage komplett auf eine moderne Wärmepumpe um — effizient und sauber.",
    features: [
      "Demontage der alten Heizung",
      "Anpassung der Heizungsinfrastruktur",
      "Neue Wärmepumpe inkl. Zubehör",
      "Entsorgung der Altgeräte",
    ],
    image: "/images/Preis-1024x683.png",
  },
  {
    id: "wartung",
    title: "Wartung & Service",
    description:
      "Damit Ihre Wärmepumpe langfristig effizient arbeitet, bieten wir regelmäßige Wartungsverträge und schnellen Service im Störungsfall.",
    features: [
      "Jährliche Inspektion",
      "Schneller Notfall-Service",
      "Ersatzteile auf Lager",
      "Remote-Diagnose möglich",
    ],
    image: "/images/Udrzba-v-technickej-miestnosti.png",
  },
];

export default function Leistungen() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Unsere Leistungen
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Komplett-Service für Ihre Wärmepumpe
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Von der ersten Beratung bis zur regelmäßigen Wartung — wir sind Ihr Ansprechpartner für
            alle Fragen rund um Wärmepumpen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-bold text-foreground font-heading">{service.title}</h2>
                <p className="mt-4 text-muted text-lg leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Bereit für Ihre neue Heizung?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-white/90 transition-colors text-lg"
          >
            Kostenlos beraten lassen
          </Link>
        </div>
      </section>
    </>
  );
}
