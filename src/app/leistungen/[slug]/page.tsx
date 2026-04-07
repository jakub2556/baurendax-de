import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, getServiceSlugs } from "@/sanity/queries";
import { BreadcrumbSchema } from "@/components/StructuredData";

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Nicht gefunden" };
  return {
    title: `${service.title} – Baurendax Wärmepumpen`,
    description: service.description.slice(0, 160),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const allServices = await getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Alle Leistungen
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-sm font-semibold mb-6">
                Leistung
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-white/60 text-xl leading-relaxed">{service.description}</p>
              <div className="mt-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-lg"
                >
                  Jetzt anfragen
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Das bieten wir Ihnen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-6 rounded-2xl bg-surface hover:bg-accent/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-foreground font-medium text-lg pt-1.5">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">So läuft es ab</h2>
          </div>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                  <span className="text-accent font-bold font-heading text-lg group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground font-heading">{step.title}</h3>
                  <p className="mt-1 text-muted text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-heading">Häufige Fragen</h2>
          </div>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.q} className="group bg-surface border border-border rounded-2xl hover:shadow-lg hover:shadow-accent/5 transition-all">
                <summary className="flex items-center justify-between px-7 py-6 cursor-pointer list-none font-bold text-foreground hover:text-accent transition-colors text-lg">
                  {item.q}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 ml-4 group-open:bg-accent group-open:text-white transition-all">
                    <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </summary>
                <div className="px-7 pb-6 text-muted leading-relaxed text-lg">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-10">Weitere Leistungen</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={400}
                    height={250}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground font-heading group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{s.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
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

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: "Baurendax",
              url: "https://baurendax.de",
            },
            areaServed: { "@type": "Country", name: "Deutschland" },
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
          { name: service.title, href: `/leistungen/${slug}` },
        ]}
      />
    </>
  );
}
