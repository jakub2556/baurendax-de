"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative">
            <Image
              src="/images/logo-baurendax.webp"
              alt="Baurendax – Ihr Experte für Wärmepumpen"
              width={180}
              height={60}
              priority
              className={`h-14 sm:h-16 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-accent hover:bg-accent/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
            >
              Jetzt anfragen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-border/50 px-4 py-4 space-y-1 shadow-xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-xl transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 bg-accent text-white text-center font-semibold rounded-xl hover:bg-accent-dark transition-colors"
          >
            Jetzt anfragen
          </Link>
        </div>
      </div>
    </header>
  );
}
