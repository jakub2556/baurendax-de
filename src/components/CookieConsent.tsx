"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = "granted" | "denied" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent;
    if (stored) {
      setConsent(stored);
      updateGtagConsent(stored);
    } else {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function updateGtagConsent(value: Consent) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: value === "granted" ? "granted" : "denied",
        ad_storage: value === "granted" ? "granted" : "denied",
        ad_user_data: value === "granted" ? "granted" : "denied",
        ad_personalization: value === "granted" ? "granted" : "denied",
      });
    }
  }

  function handleAccept() {
    localStorage.setItem("cookie-consent", "granted");
    setConsent("granted");
    updateGtagConsent("granted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "denied");
    setConsent("denied");
    updateGtagConsent("denied");
    setVisible(false);
  }

  if (!visible || consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 animate-fade-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-border p-6 sm:p-8">
        <div className="sm:flex sm:items-start sm:gap-6">
          {/* Icon */}
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-accent/10 items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground font-heading mb-2">
              Cookie-Einstellungen
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Wir verwenden Cookies und Google Analytics, um unsere Website zu verbessern und die
              Nutzung zu analysieren. Sie können selbst entscheiden, ob Sie Analyse-Cookies zulassen
              möchten. Weitere Informationen finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-accent-dark font-semibold underline hover:text-accent">
                Datenschutzerklärung
              </Link>
              .
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors text-sm"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleDecline}
                className="px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-surface transition-colors text-sm"
              >
                Nur notwendige
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
