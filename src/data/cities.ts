export interface City {
  slug: string;
  name: string;
  bundesland: string;
  population: string;
  localFacts: string[];
  nearbyAreas: string[];
}

export const cities: City[] = [
  {
    slug: "berlin",
    name: "Berlin",
    bundesland: "Berlin",
    population: "3,7 Millionen",
    localFacts: [
      "Über 60% der Berliner Gebäude heizen noch mit Gas — der Umstieg auf Wärmepumpen wird durch das GEG 2026 beschleunigt",
      "Berliner Altbauten profitieren besonders von modernen Luft-Wasser-Wärmepumpen mit Hochtemperatur-Technik",
      "Zusätzliche Landesförderung Berlin: Bis zu 10.000 € extra zum KfW-Zuschuss über das Programm 'BEK 2030'",
    ],
    nearbyAreas: ["Potsdam", "Brandenburg an der Havel", "Oranienburg", "Bernau", "Königs Wusterhausen"],
  },
  {
    slug: "muenchen",
    name: "München",
    bundesland: "Bayern",
    population: "1,5 Millionen",
    localFacts: [
      "Bayerische Wärmepumpen-Förderung: Bis zu 70% durch KfW plus zusätzliche kommunale Zuschüsse der LH München",
      "Münchner Energiestandards sind besonders hoch — unsere Wärmepumpen erfüllen alle Anforderungen",
      "Hohe Heizkosten durch kalte Winter: Eine Wärmepumpe spart Münchner Haushalten bis zu 40% Heizkosten",
    ],
    nearbyAreas: ["Augsburg", "Ingolstadt", "Rosenheim", "Freising", "Dachau"],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    bundesland: "Hamburg",
    population: "1,9 Millionen",
    localFacts: [
      "Hamburger Klimaplan: Die Stadt fördert den Austausch fossiler Heizungen mit zusätzlichen Zuschüssen",
      "Hamburgs feuchtes Klima macht Luft-Wasser-Wärmepumpen besonders effizient",
      "Viele Hamburger Reihenhäuser und Einfamilienhäuser eignen sich ideal für den Wärmepumpen-Einbau",
    ],
    nearbyAreas: ["Lübeck", "Kiel", "Bremen", "Lüneburg", "Pinneberg"],
  },
  {
    slug: "koeln",
    name: "Köln",
    bundesland: "Nordrhein-Westfalen",
    population: "1,1 Millionen",
    localFacts: [
      "NRW bietet mit dem Programm 'progres.nrw' zusätzliche Förderung für Wärmepumpen-Installation",
      "Kölns mildes Rheinland-Klima sorgt für hohe Wärmepumpen-Effizienz (COP bis 4,5)",
      "Über 40% der Kölner Gebäude wurden vor 1978 gebaut — ideale Kandidaten für die Heizungsumrüstung",
    ],
    nearbyAreas: ["Düsseldorf", "Bonn", "Leverkusen", "Bergisch Gladbach", "Aachen"],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    bundesland: "Hessen",
    population: "770.000",
    localFacts: [
      "Hessen fördert energetische Sanierung zusätzlich über die WI-Bank mit zinsgünstigen Darlehen",
      "Frankfurts Klimaschutzkonzept sieht die Abschaltung aller Gasheizungen bis 2035 vor",
      "Hohe Immobilienpreise in Frankfurt: Eine Wärmepumpe steigert den Gebäudewert um bis zu 15%",
    ],
    nearbyAreas: ["Wiesbaden", "Darmstadt", "Offenbach", "Mainz", "Hanau"],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    bundesland: "Baden-Württemberg",
    population: "640.000",
    localFacts: [
      "Baden-Württemberg war Vorreiter beim Erneuerbare-Wärme-Gesetz — Wärmepumpen erfüllen alle Anforderungen",
      "Stuttgarts Kessellage erfordert leise Wärmepumpen — unsere Geräte liegen unter 40 dB(A)",
      "Zusätzliche Förderung über die L-Bank Baden-Württemberg für energetische Sanierung",
    ],
    nearbyAreas: ["Karlsruhe", "Mannheim", "Heilbronn", "Tübingen", "Esslingen"],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    bundesland: "Nordrhein-Westfalen",
    population: "620.000",
    localFacts: [
      "Düsseldorfs 'Klimaneutrales Düsseldorf 2035' setzt auf den Austausch fossiler Heizungen",
      "NRW-Förderung progres.nrw plus KfW-Zuschuss: Bis zu 75% der Kosten werden übernommen",
      "Viele Düsseldorfer Stadtvillen und Altbauten eignen sich hervorragend für Wärmepumpen",
    ],
    nearbyAreas: ["Köln", "Essen", "Wuppertal", "Mönchengladbach", "Krefeld"],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    bundesland: "Sachsen",
    population: "620.000",
    localFacts: [
      "Sachsen fördert Wärmepumpen über die SAB mit attraktiven Zusatz-Darlehen",
      "Leipzigs Gründerzeit-Viertel: Spezielle Hochtemperatur-Wärmepumpen für Altbauten verfügbar",
      "Günstiger Strom durch regionale Ökostrom-Tarife macht den Wärmepumpen-Betrieb besonders wirtschaftlich",
    ],
    nearbyAreas: ["Dresden", "Halle", "Chemnitz", "Jena", "Magdeburg"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
