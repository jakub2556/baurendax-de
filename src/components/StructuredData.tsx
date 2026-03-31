// Organization + HVACBusiness structured data — used in layout
export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "@id": "https://baurendax.de/#organization",
          name: "Baurendax",
          alternateName: "Baurendax - Ihr Experte für Wärmepumpen",
          url: "https://baurendax.de",
          logo: {
            "@type": "ImageObject",
            url: "https://baurendax.de/images/logo-baurendax.webp",
          },
          image: "https://baurendax.de/images/hero-bg.webp",
          description:
            "Professionelle Wärmepumpen-Installation in ganz Deutschland. Beratung, Planung, Lieferung und Montage aus einer Hand. Bis zu 70% staatliche Förderung.",
          areaServed: {
            "@type": "Country",
            name: "Deutschland",
            "@id": "https://www.wikidata.org/wiki/Q183",
          },
          serviceType: [
            "Wärmepumpen-Installation",
            "Heizungsumrüstung",
            "Wärmepumpen-Beratung",
            "Wärmepumpen-Wartung",
            "Heizungstausch",
          ],
          knowsAbout: [
            "Wärmepumpe",
            "Luftwärmepumpe",
            "Wärmepumpe Altbau",
            "Heizungsförderung",
            "KfW Förderung",
            "GEG Gebäudeenergiegesetz",
          ],
          priceRange: "€€",
          email: "info@baurendax.de",
          sameAs: [
            "https://www.facebook.com/baurendax",
            "https://www.instagram.com/baurendax",
          ],
        }),
      }}
    />
  );
}

// BreadcrumbList — pass breadcrumb items
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `https://baurendax.de${item.href}`,
          })),
        }),
      }}
    />
  );
}
