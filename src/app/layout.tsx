import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Baurendax – Ihr Experte für Wärmepumpen in Deutschland",
    template: "%s | Baurendax",
  },
  description:
    "Professionelle Wärmepumpen-Installation in ganz Deutschland. Beratung, Planung und Montage aus einer Hand. Jetzt kostenlos anfragen!",
  keywords: [
    "Wärmepumpe",
    "Wärmepumpe installieren",
    "Heizung umrüsten",
    "Wärmepumpe Kosten",
    "Wärmepumpe Deutschland",
    "Heizungstausch",
    "Wärmepumpe Förderung",
  ],
  authors: [{ name: "Baurendax" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Baurendax",
    title: "Baurendax – Ihr Experte für Wärmepumpen",
    description:
      "Professionelle Wärmepumpen-Installation in ganz Deutschland. Beratung, Planung und Montage aus einer Hand.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://baurendax.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
