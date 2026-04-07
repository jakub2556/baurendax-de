import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-surface">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-8xl font-bold text-accent/20 font-heading mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-heading mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-muted text-lg mb-8 leading-relaxed">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-2xl hover:bg-white transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
