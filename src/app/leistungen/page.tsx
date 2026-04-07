import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/sanity/queries";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Wärmepumpe installieren lassen – Beratung, Montage & Wartung",
  description:
    "Wärmepumpe installieren lassen vom Fachbetrieb ✓ Beratung & Begehung ✓ Lieferung & Montage ✓ Heizungsumrüstung ✓ Wartung & Service ✓ Deutschlandweit zum Festpreis",
  alternates: { canonical: "https://baurendax.de/leistungen" },
};

export default async function Leistungen() {
  const services = await getAllServices();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/60" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-sm font-semibold mb-6">
            Unsere Leistungen
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight">
            Komplett-Service für
            <br />
            <span className="gradient-text">Ihre Wärmepumpe</span>
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-2xl mx-auto">
            Von der ersten Beratung bis zur regelmäßigen Wartung — wir sind Ihr Ansprechpartner für
            alle Fragen rund um Wärmepumpen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className={`group grid lg:grid-cols-2 gap-12 items-center rounded-3xl p-4 lg:p-8 hover:bg-surface transition-all duration-500 ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl font-bold text-foreground font-heading group-hover:text-accent transition-colors">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted text-lg leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 inline-flex items-center gap-2 text-accent font-semibold text-lg group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent to-accent-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Bereit für Ihre neue Heizung?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-2xl hover:bg-white/90 transition-all shadow-lg text-lg"
          >
            Kostenlos beraten lassen
          </Link>
        </div>
      </section>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
        ]}
      />
    </>
  );
}
