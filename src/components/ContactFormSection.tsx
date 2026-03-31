"use client";

import { useState } from "react";

const heatingTypes = [
  "Öl-Heizung",
  "Gas-Heizung",
  "Elektro-Heizung",
  "Nachtspeicher",
  "Andere / Unbekannt",
];

const propertyTypes = [
  "Einfamilienhaus",
  "Doppelhaushälfte",
  "Reihenhaus",
  "Mehrfamilienhaus",
  "Gewerbe",
];

export function ContactFormSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    heatingType: "",
    propertyType: "",
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

  const steps = [
    // Step 1 — Heating type
    <div key="heating">
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Welche Heizung haben Sie aktuell?
      </h3>
      <p className="text-muted text-sm mb-6">Wählen Sie Ihren aktuellen Heizungstyp</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {heatingTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              update("heatingType", type);
              setStep(1);
            }}
            className={`px-5 py-4 rounded-xl border text-left font-medium transition-all ${
              form.heatingType === type
                ? "border-accent bg-accent/5 text-accent"
                : "border-border hover:border-accent/40 text-foreground"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>,

    // Step 2 — Property type
    <div key="property">
      <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
        Welchen Gebäudetyp haben Sie?
      </h3>
      <p className="text-muted text-sm mb-6">Wählen Sie Ihren Gebäudetyp</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {propertyTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              update("propertyType", type);
              setStep(2);
            }}
            className={`px-5 py-4 rounded-xl border text-left font-medium transition-all ${
              form.propertyType === type
                ? "border-accent bg-accent/5 text-accent"
                : "border-border hover:border-accent/40 text-foreground"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>,

    // Step 3 — Area + PLZ
    <div key="details">
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
          onClick={() => setStep(3)}
          className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
        >
          Weiter
        </button>
      </div>
    </div>,

    // Step 4 — Contact info
    <div key="contact">
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
              placeholder="+49 123 456 789"
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
          onClick={() => setStep(4)}
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
                { icon: "check", text: "Kostenlose Erstberatung" },
                { icon: "shield", text: "Keine versteckten Kosten" },
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
            {step < 4 && (
              <div className="flex items-center gap-2 mb-8">
                {[0, 1, 2, 3].map((i) => (
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
            {step > 0 && step < 4 && (
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
