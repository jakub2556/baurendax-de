import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Ratgeber rund um Wärmepumpen",
  description:
    "Tipps, Ratgeber und aktuelle Informationen rund um Wärmepumpen, Förderungen und energieeffizientes Heizen.",
};

const posts = [
  {
    slug: "waermepumpe-kosten-2026",
    title: "Wärmepumpe Kosten 2026: Was kostet eine Wärmepumpe wirklich?",
    excerpt:
      "Alle Kosten im Überblick: Anschaffung, Installation, Betrieb und Wartung. Plus: aktuelle Fördermöglichkeiten, die Ihre Investition deutlich reduzieren.",
    image: "/images/Preis-1024x683.png",
    date: "15. März 2026",
    category: "Kosten & Förderung",
  },
  {
    slug: "waermepumpe-altbau",
    title: "Wärmepumpe im Altbau: Funktioniert das wirklich?",
    excerpt:
      "Moderne Wärmepumpen eignen sich hervorragend für Altbauten. Erfahren Sie, worauf Sie achten müssen und welche Lösung zu Ihrem Gebäude passt.",
    image: "/images/ChatGPT-Image-3.-3.-2026-15_18_14.png",
    date: "8. März 2026",
    category: "Technik",
  },
  {
    slug: "foerderung-heizungstausch",
    title: "Förderung Heizungstausch 2026: Bis zu 70% Zuschuss sichern",
    excerpt:
      "Die aktuellen Förderprogramme der KfW und BAFA im Überblick. So beantragen Sie die maximale Förderung für Ihre neue Wärmepumpe.",
    image: "/images/Fotka-domu.png",
    date: "1. März 2026",
    category: "Kosten & Förderung",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Ratgeber & Aktuelles
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Expertenwissen rund um Wärmepumpen, Förderung und energieeffizientes Heizen.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted mb-3">
                    <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground font-heading leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-accent text-sm font-semibold group-hover:underline">
                      Weiterlesen →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted">
              Weitere Artikel folgen in Kürze. Schauen Sie bald wieder vorbei!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
