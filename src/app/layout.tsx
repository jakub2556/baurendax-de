import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/StructuredData";
import { GoogleAnalytics, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
    default: "Baurendax – Wärmepumpe installieren lassen | Deutschlandweit",
    template: "%s | Baurendax Wärmepumpen",
  },
  description:
    "Wärmepumpe installieren lassen vom Fachbetrieb ✓ Beratung, Planung & Montage aus einer Hand ✓ Bis zu 70% Förderung ✓ Festpreisgarantie ✓ Deutschlandweit",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Baurendax",
    title: "Baurendax – Wärmepumpe installieren lassen | Fachbetrieb Deutschland",
    description:
      "Professionelle Wärmepumpen-Installation in ganz Deutschland. Beratung, Planung und Montage aus einer Hand. Bis zu 70% KfW-Förderung. Jetzt kostenlos anfragen!",
    images: [
      {
        url: "https://baurendax.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baurendax – Wärmepumpen-Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baurendax – Wärmepumpe installieren lassen",
    description: "Professionelle Wärmepumpen-Installation in ganz Deutschland. Bis zu 70% Förderung.",
    images: ["https://baurendax.de/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://baurendax.de",
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
      <head>
        <GoogleAnalytics />
        <meta
          name="google-site-verification"
          content="MJIVqYuXW2QKRYcL8VM7fbIB_GRU84D6r_q9Dn1iTEU"
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleTagManagerNoScript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <OrganizationSchema />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
