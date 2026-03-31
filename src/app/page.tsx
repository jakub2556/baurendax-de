import Image from "next/image";
import Link from "next/link";
import { ContactFormSection } from "@/components/ContactFormSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GallerySection } from "@/components/GallerySection";

const services = [
  {
    icon: "clipboard",
    title: "Beratung & Planung",
    description:
      "Individuelle Beratung vor Ort und detaillierte technische Planung für Ihr Wärmepumpen-Projekt.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "truck",
    title: "Lieferung & Montage",
    description:
      "Fachgerechte Lieferung und professionelle Installation durch zertifizierte Techniker.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: "refresh",
    title: "Heizungsumrüstung",
    description:
      "Kompletumstieg von Öl, Gas oder Elektro auf eine effiziente Wärmepumpe.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: "shield",
    title: "Wartung & Service",
    description:
      "Regelmäßige Wartung und schneller Service für störungsfreien Betrieb.",
    color: "from-violet-500/20 to-purple-500/20",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Installierte Anlagen" },
  { value: 98, suffix: "%", label: "Zufriedene Kunden" },
  { value: 100, suffix: "%", label: "Deutschlandweit" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
];

const processSteps = [
  {
    step: "01",
    title: "Erstberatung",
    description: "Kostenlose Beratung und Begehung vor Ort",
    icon: "phone",
  },
  {
    step: "02",
    title: "Planung",
    description: "Technische Planung und individuelles Angebot",
    icon: "document",
  },
  {
    step: "03",
    title: "Installation",
    description: "Fachgerechte Montage durch unser Expertenteam",
    icon: "wrench",
  },
  {
    step: "04",
    title: "Inbetriebnahme",
    description: "Einweisung und Übergabe an Sie",
    icon: "check",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    clipboard: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    truck: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M2.25 14.25V6.375c0-.621.504-1.125 1.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v7.875m-14.5 0h14.5m0 0h2.25" />
      </svg>
    ),
    refresh: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    shield: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}

export default function Home() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-dark overflow-hidden noise">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Fotka-domu.png"
            alt="Modernes Haus mit Wärmepumpe"
            fill
            className="object-cover opacity-15 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-accent/60 animate-float delay-200" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/20 animate-float delay-500" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <div>
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Wärmepumpen-Experte in ganz Deutschland
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-heading tracking-tight">
                Ihre neue
                <br />
                Heizung.
                <br />
                <span className="gradient-text">Effizient.</span>
              </h1>

              <p className="animate-fade-up delay-200 mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg">
                Von der Beratung bis zur Installation — wir sind Ihr zuverlässiger Partner für
                Wärmepumpen. Professionell, schnell und deutschlandweit.
              </p>

              <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-lg animate-pulse-glow"
                >
                  Kostenlos anfragen
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+491234567890"
                  className="group inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/15 transition-all text-lg"
                >
                  <svg className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Jetzt anrufen
                </a>
              </div>
            </div>

            {/* Right — Hero image card */}
            <div className="hidden lg:block animate-fade-up delay-400">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary-light/20 rounded-3xl blur-xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/Fotka-domu.png"
                    alt="Modernes Haus mit Wärmepumpe"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Bis zu 70% Förderung</p>
                        <p className="text-white/50 text-xs">Staatliche Zuschüsse für Ihren Heizungstausch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* === STATS === */}
      <section className="bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-white rounded-3xl shadow-xl shadow-black/5 border border-border overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-10 px-6 ${i < stats.length - 1 ? "lg:border-r border-border" : ""} ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="mt-1 text-sm text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === SERVICES === */}
      <section id="leistungen" className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Unsere Leistungen
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-heading tracking-tight">
                Alles aus einer Hand
              </h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                Von der ersten Beratung bis zur fertigen Installation — wir begleiten Sie durch den
                gesamten Prozess.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="group relative bg-white p-8 rounded-3xl border border-border hover:border-transparent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-foreground font-heading">{service.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
                    <div className="mt-5 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Mehr erfahren
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-14">
              <Link
                href="/leistungen"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/15"
              >
                Alle Leistungen ansehen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === ABOUT / WHY US === */}
      <section className="relative bg-surface-alt py-28 lg:py-36 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                  Warum Baurendax
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-heading tracking-tight leading-tight">
                  Ihr verlässlicher Partner für{" "}
                  <span className="gradient-text">Wärmepumpen</span>
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Mit langjähriger Erfahrung und einem Team aus zertifizierten Fachleuten bieten wir
                  Ihnen eine Komplettlösung für den Umstieg auf eine moderne, energieeffiziente
                  Heizung.
                </p>
                <ul className="mt-10 space-y-5">
                  {[
                    "Zertifizierte Fachbetrieb-Qualität",
                    "Deutschlandweiter Service",
                    "Festpreisgarantie — keine versteckten Kosten",
                    "Unterstützung bei Fördermittel-Anträgen",
                    "Persönliche Betreuung von A bis Z",
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-foreground font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <Link
                    href="/ueber-uns"
                    className="group inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-3 transition-all"
                  >
                    Mehr über uns erfahren
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                  <Image
                    src="/images/service-1024x683.png"
                    alt="Techniker installiert Wärmepumpe"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating secondary image */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white animate-float">
                  <Image
                    src="/images/ChatGPT-Image-23.-3.-2026-13_29_06.png"
                    alt="Wärmepumpe an Haus"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-accent text-white px-6 py-4 rounded-2xl shadow-lg shadow-accent/30 animate-float delay-200">
                  <p className="text-3xl font-bold font-heading">10+</p>
                  <p className="text-sm text-white/80">Jahre Erfahrung</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="relative bg-primary-dark py-28 lg:py-36 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-light/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-sm font-semibold mb-4">
                So funktioniert&apos;s
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading tracking-tight">
                In 4 Schritten zur
                <br />
                <span className="gradient-text">neuen Heizung</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 150}>
                <div className="relative group">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  <div className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="text-6xl font-bold text-accent/20 font-heading group-hover:text-accent/40 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white font-heading">{step.title}</h3>
                    <p className="mt-3 text-white/50 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === GALLERY === */}
      <GallerySection />

      {/* === FAQ PREVIEW === */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Häufige Fragen
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-heading tracking-tight">
                Das fragen unsere Kunden
              </h2>
            </div>
          </ScrollReveal>

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
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-3 transition-all"
              >
                Alle Fragen ansehen
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CTA / CONTACT FORM === */}
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
          }),
        }}
      />
    </>
  );
}
