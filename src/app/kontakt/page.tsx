import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Wärmepumpe Angebot anfordern – Kostenlose Beratung",
  description:
    "Jetzt kostenloses Wärmepumpen-Angebot anfordern ✓ Festpreisgarantie ✓ Beratung vor Ort ✓ Antwort in 24h ✓ Bis zu 70% KfW-Förderung ✓ Deutschlandweit",
  alternates: { canonical: "https://baurendax.de/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Kontaktieren Sie uns
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Anfrage. Füllen Sie das Formular aus oder kontaktieren Sie uns
            direkt.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-surface">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground font-heading">Telefon</h3>
              <a href="tel:+421944075714" className="mt-1 text-muted hover:text-accent transition-colors">
                +421 944 075 714
              </a>
            </div>
            <div className="text-center p-6 rounded-2xl bg-surface">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground font-heading">E-Mail</h3>
              <a href="mailto:info@baurendax.de" className="mt-1 text-muted hover:text-accent transition-colors">
                info@baurendax.de
              </a>
            </div>
            <div className="text-center p-6 rounded-2xl bg-surface">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground font-heading">Erreichbarkeit</h3>
              <p className="mt-1 text-muted">Mo – Fr: 10:00 – 18:00 Uhr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <ContactFormSection />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Kontakt", href: "/kontakt" },
        ]}
      />
    </>
  );
}
