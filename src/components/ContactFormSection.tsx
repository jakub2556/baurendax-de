"use client";

import Image from "next/image";
import { useState } from "react";

const heatingTypes = [
  { label: "Öl-Heizung", icon: "🛢️" },
  { label: "Gas-Heizung", icon: "🔥" },
  { label: "Elektro-Heizung", icon: "⚡" },
  { label: "Nachtspeicher", icon: "🌡️" },
  { label: "Andere / Unbekannt", icon: "❓" },
];

const propertyTypes = [
  { label: "Einfamilienhaus", icon: "🏠" },
  { label: "Doppelhaushälfte", icon: "🏘️" },
  { label: "Reihenhaus", icon: "🏗️" },
  { label: "Mehrfamilienhaus", icon: "🏢" },
  { label: "Gewerbe", icon: "🏭" },
];

const bundeslaender = [
  { name: "Nordrhein-Westfalen", color: "bg-green-600" },
  { name: "Bayern", color: "bg-sky-500" },
  { name: "Baden-Württemberg", color: "bg-yellow-500" },
  { name: "Hessen", color: "bg-red-600" },
  { name: "Niedersachsen", color: "bg-red-500" },
  { name: "Rheinland-Pfalz", color: "bg-red-700" },
  { name: "Sachsen", color: "bg-emerald-600" },
  { name: "Brandenburg", color: "bg-red-500" },
  { name: "Schleswig-Holstein", color: "bg-blue-600" },
  { name: "Thüringen", color: "bg-red-600" },
  { name: "Sachsen-Anhalt", color: "bg-yellow-600" },
  { name: "Berlin", color: "bg-gray-700" },
  { name: "Hamburg", color: "bg-red-600" },
  { name: "Mecklenburg-Vorpommern", color: "bg-blue-500" },
  { name: "Saarland", color: "bg-gray-600" },
  { name: "Bremen", color: "bg-red-500" },
];

const stepImages = [
  { src: "/images/hero-house-pump.webp", alt: "Heizungssystem" },
  { src: "/images/Fotka-domu.webp", alt: "Gebäudetyp wählen" },
  { src: "/images/service-1024x683.webp", alt: "Deutschlandweiter Service" },
  { src: "/images/Preis-1024x683.webp", alt: "Angaben zum Gebäude" },
  { src: "/images/service-techniker.webp", alt: "Kontakt aufnehmen" },
];

export function ContactFormSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    heatingType: "",
    propertyType: "",
    bundesland: "",
    area: "",
    name: "",
    email: "",
    phone: "",
    plz: "",
    message: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const totalSteps = 5;

  const steps = [
    // Step 0 — Heating type
    <div key="heating">
      <div className="relative h-28 -mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
        <Image src={stepImages[0].src} alt={stepImages[0].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Welche Heizung haben Sie aktuell?
      </h3>
      <p className="text-muted text-sm mb-6">Wählen Sie Ihren aktuellen Heizungstyp</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {heatingTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => {
              update("heatingType", type.label);
              setStep(1);
            }}
            className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left font-medium transition-all ${
              form.heatingType === type.label
                ? "border-accent bg-accent/5 text-accent"
                : "border-border hover:border-accent/40 text-foreground"
            }`}
          >
            <span className="text-xl">{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>
    </div>,

    // Step 1 — Property type
    <div key="property">
      <div className="relative h-28 -mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
        <Image src={stepImages[1].src} alt={stepImages[1].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Welchen Gebäudetyp haben Sie?
      </h3>
      <p className="text-muted text-sm mb-6">Wählen Sie Ihren Gebäudetyp</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {propertyTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => {
              update("propertyType", type.label);
              setStep(2);
            }}
            className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left font-medium transition-all ${
              form.propertyType === type.label
                ? "border-accent bg-accent/5 text-accent"
                : "border-border hover:border-accent/40 text-foreground"
            }`}
          >
            <span className="text-xl">{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>
    </div>,

    // Step 2 — Bundesland
    <div key="bundesland">
      <div className="relative h-28 -mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
        <Image src={stepImages[2].src} alt={stepImages[2].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        In welchem Bundesland wohnen Sie?
      </h3>
      <p className="text-muted text-sm mb-6">
        Wir sind in ganz Deutschland für Sie im Einsatz
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[400px] overflow-y-auto pr-1">
        {bundeslaender.map((land) => (
          <button
            key={land.name}
            onClick={() => {
              update("bundesland", land.name);
              setStep(3);
            }}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left font-medium transition-all text-sm ${
              form.bundesland === land.name
                ? "border-accent bg-accent/5 text-accent"
                : "border-border hover:border-accent/40 text-foreground hover:bg-surface"
            }`}
          >
            <span className={`w-5 h-4 rounded-sm ${land.color} flex-shrink-0`} />
            {land.name}
          </button>
        ))}
        <button
          onClick={() => {
            update("bundesland", "Andere");
            setStep(3);
          }}
          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left font-medium transition-all text-sm sm:col-span-2 ${
            form.bundesland === "Andere"
              ? "border-accent bg-accent/5 text-accent"
              : "border-border hover:border-accent/40 text-foreground hover:bg-surface"
          }`}
        >
          <span className="w-5 h-4 rounded-sm bg-gray-300 flex-shrink-0" />
          Anderes Bundesland
        </button>
      </div>
    </div>,

    // Step 3 — Area + PLZ
    <div key="details">
      <div className="relative h-28 -mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
        <Image src={stepImages[3].src} alt={stepImages[3].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Angaben zum Gebäude
      </h3>
      <p className="text-muted text-sm mb-6">Helfen Sie uns, Ihnen ein passendes Angebot zu erstellen</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Wohnfläche (ca. m²)
          </label>
          <input
            type="text"
            value={form.area}
            onChange={(e) => update("area", e.target.value)}
            placeholder="z.B. 150"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Postleitzahl
          </label>
          <input
            type="text"
            value={form.plz}
            onChange={(e) => update("plz", e.target.value)}
            placeholder="z.B. 80331"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          />
        </div>
        <button
          onClick={() => setStep(4)}
          className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
        >
          Weiter
        </button>
      </div>
    </div>,

    // Step 4 — Contact info
    <div key="contact">
      <div className="relative h-28 -mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
        <Image src={stepImages[4].src} alt={stepImages[4].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Ihre Kontaktdaten
      </h3>
      <p className="text-muted text-sm mb-6">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Max Mustermann"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">E-Mail *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="max@beispiel.de"
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Telefon</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+49 170 123 4567"
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Nachricht</label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            placeholder="Haben Sie besondere Wünsche oder Fragen?"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
          />
        </div>
        <button
          onClick={() => setStep(5)}
          className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
        >
          Kostenlos anfragen
        </button>
        <p className="text-xs text-muted text-center">
          Ihre Daten werden vertraulich behandelt. Mehr dazu in unserer{" "}
          <a href="/datenschutz" className="text-accent hover:underline">
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
    </div>,

    // Step 5 — Success
    <div key="success" className="text-center py-8">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-foreground font-heading">Vielen Dank!</h3>
      <p className="mt-2 text-muted">
        Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
      </p>
    </div>,
  ];

  return (
    <section id="kontakt" className="bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-2">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Jetzt kostenlos beraten lassen
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Füllen Sie unser kurzes Formular aus und erhalten Sie ein unverbindliches Angebot für
              Ihre neue Wärmepumpe.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { icon: "clock", text: "Antwort innerhalb von 24 Stunden" },
                { icon: "check", text: "Kostenlose Erstberatung & Begehung" },
                { icon: "shield", text: "2 Jahre Garantie mit Verlängerungsoption" },
                { icon: "price", text: "Festpreisgarantie — keine versteckten Kosten" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            {/* Progress bar */}
            {step < totalSteps && (
              <div className="flex items-center gap-2 mb-8">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-accent" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            )}

            {steps[step]}

            {/* Back button */}
            {step > 0 && step < totalSteps && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-4 text-sm text-muted hover:text-foreground transition-colors"
              >
                ← Zurück
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
