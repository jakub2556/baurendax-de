import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/sanity/queries";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Wärmepumpe Ratgeber – Kosten, Förderung, Altbau & GEG 2026",
  description:
    "Wärmepumpen-Ratgeber vom Fachbetrieb: Kosten 2026, KfW-Förderung bis 70%, Wärmepumpe im Altbau, GEG Heizungsgesetz. Expertenwissen für Hausbesitzer.",
  alternates: { canonical: "https://baurendax.de/blog" },
};

export default async function Blog() {
  const blogPosts = await getAllPosts();
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/60" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-sm font-semibold mb-6">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight">
            Ratgeber & Aktuelles
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-2xl mx-auto">
            Expertenwissen rund um Wärmepumpen, Förderung und energieeffizientes Heizen.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-10 items-center bg-surface rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={700}
                height={450}
                className="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 text-sm text-muted mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span>{featured.readTime} Lesezeit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading group-hover:text-accent transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Artikel lesen
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-10">Alle Artikel</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-sm text-muted mb-3">
                    <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-heading leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Weiterlesen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
    </>
  );
}
