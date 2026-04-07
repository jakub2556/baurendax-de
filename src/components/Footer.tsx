import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Unternehmen",
    links: [
      { name: "Über uns", href: "/ueber-uns" },
      { name: "Leistungen", href: "/leistungen" },
      { name: "Blog", href: "/blog" },
      { name: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { name: "Wärmepumpen-Installation", href: "/leistungen/installation" },
      { name: "Heizungsumrüstung", href: "/leistungen/umruestung" },
      { name: "Beratung & Planung", href: "/leistungen/beratung" },
      { name: "Wartung & Service", href: "/leistungen/wartung" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-baurendax.webp"
              alt="Baurendax"
              width={160}
              height={53}
              className="h-14 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für Wärmepumpen in ganz Deutschland. Von der Beratung bis zur
              Installation — alles aus einer Hand.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* City links for local SEO */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
            Wärmepumpe in Ihrer Stadt
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { name: "Berlin", href: "/waermepumpe/berlin" },
              { name: "München", href: "/waermepumpe/muenchen" },
              { name: "Hamburg", href: "/waermepumpe/hamburg" },
              { name: "Köln", href: "/waermepumpe/koeln" },
              { name: "Frankfurt", href: "/waermepumpe/frankfurt" },
              { name: "Stuttgart", href: "/waermepumpe/stuttgart" },
              { name: "Düsseldorf", href: "/waermepumpe/duesseldorf" },
              { name: "Leipzig", href: "/waermepumpe/leipzig" },
            ].map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="text-sm text-white/50 hover:text-accent transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Baurendax. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-white/70">
            Webdesign von{" "}
            <a
              href="https://eweby.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline hover:text-white transition-colors"
            >
              EWEBY.EU
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
