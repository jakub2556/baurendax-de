export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; description: string }[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "beratung",
    title: "Beratung & Begehung",
    shortDescription: "Kostenlose Erstberatung und detaillierte technische Analyse vor Ort.",
    description:
      "Unsere Experten kommen zu Ihnen vor Ort und beurteilen die Gegebenheiten. Gemeinsam finden wir die optimale Wärmepumpen-Lösung für Ihr Gebäude — ob Neubau oder Altbau. Die Beratung ist selbstverständlich kostenlos und unverbindlich.",
    image: "/images/Roztiahnute-sluzby-1024x683.webp",
    features: [
      "Kostenlose Erstberatung ohne Verpflichtung",
      "Vor-Ort-Begehung und Gebäudeanalyse",
      "Heizlastberechnung nach DIN EN 12831",
      "Prüfung der Förderfähigkeit",
      "Individuelle Empfehlung passender Systeme",
      "Detailliertes Festpreisangebot",
    ],
    process: [
      { title: "Kontaktaufnahme", description: "Sie füllen unser Formular aus oder rufen uns an" },
      { title: "Terminvereinbarung", description: "Wir vereinbaren einen Vor-Ort-Termin" },
      { title: "Begehung", description: "Unser Experte analysiert Ihr Gebäude" },
      { title: "Angebot", description: "Sie erhalten ein detailliertes Festpreisangebot" },
    ],
    faq: [
      { q: "Ist die Beratung wirklich kostenlos?", a: "Ja, die Erstberatung und Begehung vor Ort ist für Sie komplett kostenlos und unverbindlich." },
      { q: "Wie lange dauert eine Begehung?", a: "In der Regel 30-60 Minuten. Wir nehmen uns die Zeit, die nötig ist." },
      { q: "Was muss ich vorbereiten?", a: "Idealerweise halten Sie Ihre letzte Heizkostenabrechnung und den Energieausweis bereit. Ist aber kein Muss." },
    ],
  },
  {
    slug: "installation",
    title: "Lieferung & Installation",
    shortDescription: "Fachgerechte Lieferung und professionelle Montage durch zertifizierte Techniker.",
    description:
      "Wir liefern hochwertige Marken-Wärmepumpen und installieren diese fachgerecht. Unsere zertifizierten Techniker sorgen für eine saubere, termingerechte Montage — zum garantierten Festpreis.",
    image: "/images/service-techniker.webp",
    features: [
      "Markengeräte von Viessmann, Bosch & Co.",
      "Zertifizierte Montage-Techniker",
      "Festpreisgarantie ohne Nachberechnung",
      "Termingerechte Umsetzung",
      "Saubere Baustelle garantiert",
      "Komplette Inbetriebnahme und Einweisung",
    ],
    process: [
      { title: "Auftragsbestätigung", description: "Nach Ihrem OK bestellen wir das Equipment" },
      { title: "Lieferung", description: "Material und Gerät werden angeliefert" },
      { title: "Montage", description: "Unsere Techniker installieren die Anlage (2-5 Tage)" },
      { title: "Inbetriebnahme", description: "Funktionstest, Einweisung und Übergabe" },
    ],
    faq: [
      { q: "Welche Marken installieren Sie?", a: "Wir arbeiten mit führenden Herstellern wie Viessmann, LG, Blaupunkt, Hyundai und FoxAir zusammen." },
      { q: "Wie lange dauert die Installation?", a: "Die reine Installation dauert 2-5 Arbeitstage, je nach Komplexität des Projekts." },
      { q: "Was ist eine Festpreisgarantie?", a: "Der vereinbarte Preis gilt — auch wenn die Installation aufwändiger wird als geplant. Kein Risiko für Sie." },
    ],
  },
  {
    slug: "umruestung",
    title: "Heizungsumrüstung",
    shortDescription: "Komplettumbau von Öl, Gas oder Elektro auf eine effiziente Wärmepumpe.",
    description:
      "Sie heizen noch mit Öl, Gas oder Elektro? Wir rüsten Ihre bestehende Heizungsanlage komplett auf eine moderne Wärmepumpe um. Inklusive Demontage der alten Anlage und fachgerechter Entsorgung.",
    image: "/images/Preis-1024x683.webp",
    features: [
      "Demontage der alten Heizungsanlage",
      "Fachgerechte Entsorgung der Altgeräte",
      "Anpassung der Heizungsinfrastruktur",
      "Neue Wärmepumpe inkl. Zubehör",
      "Hydraulischer Abgleich",
      "Bis zu 70% staatliche Förderung",
    ],
    process: [
      { title: "Bestandsaufnahme", description: "Analyse der vorhandenen Heizungsanlage" },
      { title: "Planung", description: "Konzept für die Umrüstung inkl. Förderantrag" },
      { title: "Demontage", description: "Fachgerechte Entfernung der alten Anlage" },
      { title: "Installation", description: "Einbau der neuen Wärmepumpe und Inbetriebnahme" },
    ],
    faq: [
      { q: "Kann ich auch nur die Heizung tauschen, ohne zu dämmen?", a: "Ja! Eine Wärmepumpe funktioniert auch ohne zusätzliche Dämmung. Natürlich ist eine gute Dämmung vorteilhaft, aber kein Muss." },
      { q: "Was passiert mit meiner alten Ölheizung?", a: "Wir demontieren die Anlage inklusive Öltank und kümmern uns um die fachgerechte Entsorgung." },
      { q: "Bekomme ich für die Umrüstung Förderung?", a: "Ja, beim Austausch einer Öl- oder alten Gasheizung erhalten Sie bis zu 70% Zuschuss durch die BEG." },
    ],
  },
  {
    slug: "wartung",
    title: "Wartung & Service",
    shortDescription: "Regelmäßige Wartung und schneller Service für störungsfreien Betrieb.",
    description:
      "Damit Ihre Wärmepumpe langfristig effizient arbeitet, bieten wir Wartungsverträge und schnellen Service im Störungsfall. Prävention statt Reparatur — so sparen Sie langfristig.",
    image: "/images/Udrzba-v-technickej-miestnosti.webp",
    features: [
      "Jährliche Inspektion und Wartung",
      "Schneller Notfall-Service",
      "Ersatzteile sofort verfügbar",
      "Remote-Diagnose möglich",
      "Effizienz-Check und Optimierung",
      "Verlängerung der Herstellergarantie",
    ],
    process: [
      { title: "Vertrag abschließen", description: "Wählen Sie Ihren passenden Wartungsvertrag" },
      { title: "Jährliche Wartung", description: "Unser Techniker prüft und wartet Ihre Anlage" },
      { title: "Dokumentation", description: "Wartungsprotokoll und Effizienz-Report" },
      { title: "Support", description: "Im Störungsfall schnelle Hilfe per Telefon oder vor Ort" },
    ],
    faq: [
      { q: "Wie oft muss eine Wärmepumpe gewartet werden?", a: "Wir empfehlen eine jährliche Wartung. Das sichert die Effizienz und verlängert die Lebensdauer der Anlage." },
      { q: "Was kostet ein Wartungsvertrag?", a: "Unsere Wartungsverträge beginnen ab 190 € pro Jahr, je nach Anlagentyp und Umfang." },
      { q: "Wie schnell sind Sie im Notfall vor Ort?", a: "Kunden mit Wartungsvertrag haben Priorität — in der Regel sind wir innerhalb von 24-48 Stunden bei Ihnen." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
