import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Baurendax – Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function Datenschutz() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
        <h1 className="text-3xl font-bold text-foreground font-heading">Datenschutzerklärung</h1>

        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei Cloudflare. Anbieter ist die Cloudflare, Inc.,
          101 Townsend St, San Francisco, CA 94107, USA. Details entnehmen Sie der Datenschutzerklärung
          von Cloudflare:{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            https://www.cloudflare.com/privacypolicy/
          </a>
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          <br />
          Baurendax — Peter Bauer
          <br />
          E-Mail: info@baurendax.de
          <br />
          Telefon: +421 944 075 714
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage
          von Art. 6 Abs. 1 lit. b DSGVO.
        </p>

        <h3>Google Analytics</h3>
        <p>
          Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited.
          Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.
          Die Nutzung erfolgt erst nach Ihrer ausdrücklichen Einwilligung über unseren Cookie-Banner
          (Art. 6 Abs. 1 lit. a DSGVO). Wir nutzen Google Analytics mit der Funktion „Consent Mode v2",
          sodass ohne Ihre Zustimmung keine personenbezogenen Daten erhoben werden.
        </p>
        <p>
          Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
          Browser-Software verhindern. Sie können darüber hinaus die Erfassung durch Google Analytics
          verhindern, indem Sie den Cookie-Banner ablehnen.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung
          sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden. Ferner steht Ihnen ein Beschwerderecht bei
          der zuständigen Aufsichtsbehörde zu.
        </p>
      </div>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Datenschutz", href: "/datenschutz" },
        ]}
      />
    </section>
  );
}
