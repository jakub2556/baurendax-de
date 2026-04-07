import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { ContactFormSection } from "@/components/ContactFormSection";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { ScrollReveal } from "@/components/ScrollReveal";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  return params.then(({ city: slug }) => {
    const city = getCityBySlug(slug);
    if (!city) return { title: "Nicht gefunden" };
    return {
      title: `Wärmepumpe ${city.name} – Installation vom Fachbetrieb`,
      description: `Wärmepumpe installieren in ${city.name} ✓ Kostenlose Beratung ✓ Festpreisgarantie ✓ 2 Jahre Garantie ✓ Fachbetrieb für ${city.bundesland} ✓ Ab 15.000 €`,
      alternates: { canonical: `https://baurendax.de/waermepumpe/${slug}` },
      openGraph: {
        title: `Wärmepumpe ${city.name} – Baurendax Fachbetrieb`,
        description: `Professionelle Wärmepumpen-Installation in ${city.name} und Umgebung. Beratung, Planung und Montage aus einer Hand.`,
      },
    };
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-light/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {city.bundesland} · {city.population} Einwohner
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight leading-tight">
            Wärmepumpe in{" "}
            <span className="gradient-text">{city.name}</span>
            <br />
            installieren lassen
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
            Ihr lokaler Fachbetrieb für Wärmepumpen in {city.name} und Umgebung.
            Kostenlose Beratung, Festpreisgarantie und professionelle Installation
            aus einer Hand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-lg"
            >
              Kostenloses Angebot für {city.name}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+421944075714"
              className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/15 transition-all text-lg"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Local Facts */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Wärmepumpe {city.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading tracking-tight">
                Warum {city.name}er Hausbesitzer jetzt auf Wärmepumpen umsteigen
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {city.localFacts.map((fact, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-surface rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{fact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-surface-alt py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading tracking-tight">
                Unsere Leistungen in {city.name}
              </h2>
              <p className="mt-4 text-muted text-lg">
                Komplettservice von der Beratung bis zur Inbetriebnahme
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kostenlose Beratung",
                desc: `Vor-Ort-Begehung in ${city.name} und Umgebung — kostenlos und unverbindlich`,
                href: "/leistungen/beratung",
              },
              {
                title: "Planung & Angebot",
                desc: "Technische Planung, Heizlastberechnung und Festpreisangebot",
                href: "/leistungen/beratung",
              },
              {
                title: "Installation",
                desc: "Fachgerechte Montage durch zertifizierte Techniker in 2–5 Tagen",
                href: "/leistungen/installation",
              },
              {
                title: "Wartung & Service",
                desc: `Regelmäßige Wartung und schneller Notfall-Service in ${city.name}`,
                href: "/leistungen/wartung",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link href={item.href} className="block h-full">
                  <div className="group bg-white p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all h-full">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-heading mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-10 sm:p-14 text-center noise relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
                  Wärmepumpe in {city.name} ab 15.000 €
                </h2>
                <p className="text-white/60 text-lg mb-2">
                  Komplettpaket inkl. Beratung, Wärmepumpe, Montage & Inbetriebnahme
                </p>
                <p className="text-white/40 text-sm mb-8">
                  Endpreis abhängig von Gebäude, Leistung und Installationsaufwand
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
                  >
                    Angebot für {city.name} anfordern
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                  <span>✓ Kostenlose Beratung</span>
                  <span>✓ Festpreisgarantie</span>
                  <span>✓ 2 Jahre Garantie</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground font-heading text-center mb-8">
              Auch in der Region {city.name} für Sie da
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-medium text-foreground"
                >
                  Wärmepumpe {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection />

      {/* City-specific FAQ */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading tracking-tight">
                Häufige Fragen zur Wärmepumpe in {city.name}
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              {
                q: `Was kostet eine Wärmepumpe in ${city.name}?`,
                a: `Die Kosten für eine Wärmepumpe in ${city.name} beginnen ab 15.000 € inkl. Installation. Der genaue Preis hängt von Gebäudegröße, Dämmstandard und gewähltem System ab. Durch KfW-Förderung (bis 70%) können Sie erheblich sparen. Wir erstellen Ihnen ein kostenloses Festpreisangebot.`,
              },
              {
                q: `Wie lange dauert die Wärmepumpen-Installation in ${city.name}?`,
                a: `Die reine Installation dauert 2–5 Arbeitstage. Von der Erstberatung bis zur Inbetriebnahme rechnen wir mit 4–8 Wochen. Wir planen den Termin so, dass Sie möglichst wenig gestört werden.`,
              },
              {
                q: `Funktioniert eine Wärmepumpe auch in ${city.name}er Altbauten?`,
                a: `Ja! Moderne Hochtemperatur-Wärmepumpen arbeiten effizient auch in Altbauten — selbst ohne Fußbodenheizung. Bei der kostenlosen Begehung prüfen wir, welches System für Ihr Gebäude in ${city.name} optimal ist.`,
              },
              {
                q: `Welche Förderung gibt es in ${city.bundesland}?`,
                a: `Über die KfW erhalten Sie bis zu 70% Zuschuss (Grund 30% + Klima 20% + Einkommen 30%). Dazu kommen ggf. zusätzliche Förderprogramme des Landes ${city.bundesland}. Wir beraten Sie zur maximalen Förderung.`,
              },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
                <details className="group bg-white border border-border rounded-2xl hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <summary className="flex items-center justify-between px-7 py-6 cursor-pointer list-none font-bold text-foreground hover:text-accent transition-colors text-lg">
                    {faq.q}
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0 ml-4 group-open:bg-accent group-open:text-white transition-all">
                      <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-7 pb-6 text-muted leading-relaxed text-lg">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Baurendax Wärmepumpen ${city.name}`,
            description: `Professionelle Wärmepumpen-Installation in ${city.name}. Kostenlose Beratung, Festpreisgarantie und 2 Jahre Garantie.`,
            url: `https://baurendax.de/waermepumpe/${slug}`,
            telephone: "+421944075714",
            email: "info@baurendax.de",
            priceRange: "€€",
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: {
                "@type": "State",
                name: city.bundesland,
              },
            },
            parentOrganization: {
              "@type": "HVACBusiness",
              "@id": "https://baurendax.de/#organization",
              name: "Baurendax",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Was kostet eine Wärmepumpe in ${city.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Die Kosten für eine Wärmepumpe in ${city.name} beginnen ab 15.000 € inkl. Installation. Durch KfW-Förderung können bis zu 70% der Kosten übernommen werden.`,
                },
              },
              {
                "@type": "Question",
                name: `Welche Förderung gibt es in ${city.bundesland}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Über die KfW erhalten Sie bis zu 70% Zuschuss. Dazu kommen ggf. zusätzliche Förderprogramme des Landes ${city.bundesland}.`,
                },
              },
            ],
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: `Wärmepumpe ${city.name}`, href: `/waermepumpe/${slug}` },
        ]}
      />
    </>
  );
}
