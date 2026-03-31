import Image from "next/image";
import Link from "next/link";
import { ContactFormSection } from "@/components/ContactFormSection";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Beratung & Planung",
    description: "Individuelle Beratung vor Ort und detaillierte technische Planung für Ihr Wärmepumpen-Projekt.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.387-3.112A1.125 1.125 0 004.875 13.2v5.1a1.125 1.125 0 001.158 1.143l5.387-.312a1.125 1.125 0 001.08-1.143v-1.671a1.125 1.125 0 00-1.08-1.143zM15.75 7.5l-2.25 2.25m0 0l2.25 2.25m-2.25-2.25H21M3 12h2.25" />
      </svg>
    ),
    title: "Lieferung & Montage",
    description: "Fachgerechte Lieferung und professionelle Installation Ihrer Wärmepumpe durch zertifizierte Techniker.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Heizungsumrüstung",
    description: "Umstieg von Öl, Gas oder Elektro auf eine effiziente Wärmepumpe — wir übernehmen den kompletten Umbau.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.387 3.112A1.125 1.125 0 014.875 17.13v-5.1a1.125 1.125 0 011.158-1.143l5.387.312a1.125 1.125 0 011.08 1.143v1.671a1.125 1.125 0 01-1.08 1.143zM9.75 7.5l2.25 2.25m0 0L9.75 12M12 9.75H3m18 0h-2.25" />
      </svg>
    ),
    title: "Wartung & Service",
    description: "Regelmäßige Wartung und schneller Service für den langfristigen, störungsfreien Betrieb Ihrer Anlage.",
  },
];

const stats = [
  { value: "500+", label: "Installierte Anlagen" },
  { value: "98%", label: "Zufriedene Kunden" },
  { value: "100%", label: "Deutschlandweit" },
  { value: "10+", label: "Jahre Erfahrung" },
];

const processSteps = [
  { step: "01", title: "Erstberatung", description: "Kostenlose Beratung und Begehung vor Ort" },
  { step: "02", title: "Planung", description: "Technische Planung und individuelles Angebot" },
  { step: "03", title: "Installation", description: "Fachgerechte Montage durch unser Expertenteam" },
  { step: "04", title: "Inbetriebnahme", description: "Einweisung und Übergabe an Sie" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Fotka-domu.png"
            alt="Modernes Haus mit Wärmepumpe"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-6">
              Wärmepumpen-Experte in ganz Deutschland
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
              Ihre neue Heizung.{" "}
              <span className="text-accent">Effizient.</span>{" "}
              <span className="text-accent-light">Nachhaltig.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              Von der Beratung bis zur Installation — wir sind Ihr zuverlässiger Partner für
              Wärmepumpen. Professionell, schnell und deutschlandweit.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-lg"
              >
                Kostenlos anfragen
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:+491234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 text-lg"
              >
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent font-heading">{stat.value}</div>
                <div className="mt-1 text-sm text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Unsere Leistungen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Alles aus einer Hand
            </h2>
            <p className="mt-4 text-muted text-lg">
              Von der ersten Beratung bis zur fertigen Installation — wir begleiten Sie durch den
              gesamten Prozess.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-heading">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/leistungen"
              className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              Alle Leistungen ansehen
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Warum Baurendax</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
                Ihr verlässlicher Partner für Wärmepumpen
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Mit langjähriger Erfahrung und einem Team aus zertifizierten Fachleuten bieten wir
                Ihnen eine Komplettlösung für den Umstieg auf eine moderne, energieeffiziente Heizung.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Zertifizierte Fachbetrieb-Qualität",
                  "Deutschlandweiter Service",
                  "Festpreisgarantie — keine versteckten Kosten",
                  "Unterstützung bei Fördermittel-Anträgen",
                  "Persönliche Betreuung von A bis Z",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Mehr über uns
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/service-1024x683.png"
                    alt="Techniker installiert Wärmepumpe"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/IMG20251104143318-scaled.jpg"
                    alt="Installierte Wärmepumpe"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ChatGPT-Image-23.-3.-2026-13_29_06.png"
                    alt="Wärmepumpe an Haus"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/IMG20251202153350-scaled.jpg"
                    alt="Wärmepumpe Außeneinheit"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">So funktioniert&apos;s</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              In 4 Schritten zur neuen Heizung
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/10" />
                )}
                <div className="text-5xl font-bold text-accent/30 font-heading">{step.step}</div>
                <h3 className="mt-3 text-xl font-semibold text-white font-heading">{step.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Unsere Projekte</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Referenzen aus ganz Deutschland
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/IMG20251104143313-scaled.jpg", alt: "Wärmepumpe Installation 1" },
              { src: "/images/IMG20251109155056-1-scaled.jpg", alt: "Wärmepumpe Installation 2" },
              { src: "/images/IMG20251101120210-scaled.jpg", alt: "Wärmepumpe Installation 3" },
              { src: "/images/IMG20250930173005-scaled.jpg", alt: "Wärmepumpe Installation 4" },
              { src: "/images/IMG20251009202259-scaled.jpg", alt: "Wärmepumpe Installation 5" },
              { src: "/images/IMG20251104135953-scaled.jpg", alt: "Wärmepumpe Installation 6" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Häufige Fragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Das fragen unsere Kunden
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Wie viel kostet eine Wärmepumpe?",
                a: "Die Kosten variieren je nach Gebäude und Anforderungen. Eine Luft-Wasser-Wärmepumpe kostet inkl. Installation typischerweise zwischen 15.000 und 30.000 €. Durch staatliche Förderungen können bis zu 70% der Kosten übernommen werden.",
              },
              {
                q: "Wie lange dauert die Installation?",
                a: "Die reine Installation dauert in der Regel 2–5 Arbeitstage. Von der Erstberatung bis zur Inbetriebnahme planen wir durchschnittlich 4–8 Wochen ein.",
              },
              {
                q: "Funktioniert eine Wärmepumpe auch im Altbau?",
                a: "Ja! Moderne Wärmepumpen arbeiten auch bei niedrigen Außentemperaturen effizient und können in den meisten Altbauten eingesetzt werden. Wir prüfen die Eignung bei der Begehung vor Ort.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-border rounded-xl">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-foreground hover:text-accent transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-muted leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              Alle Fragen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <ContactFormSection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Baurendax",
            description: "Professionelle Wärmepumpen-Installation in ganz Deutschland",
            url: "https://baurendax.de",
            logo: "https://baurendax.de/images/logo.png",
            image: "https://baurendax.de/images/Fotka-domu.png",
            areaServed: { "@type": "Country", name: "Deutschland" },
            serviceType: [
              "Wärmepumpen-Installation",
              "Heizungsumrüstung",
              "Heizungsberatung",
              "Wärmepumpen-Wartung",
            ],
            priceRange: "€€",
            sameAs: ["https://www.facebook.com/baurendax", "https://www.instagram.com/baurendax"],
          }),
        }}
      />
    </>
  );
}
