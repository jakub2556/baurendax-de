import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Nicht gefunden" };
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        locale: "de_DE",
        images: [{ url: `https://baurendax.de${post.image}` }],
      },
    };
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={i} />;
        if (trimmed.startsWith("### "))
          return (
            <h3 key={i} className="text-xl font-bold text-foreground font-heading mt-10 mb-4">
              {trimmed.slice(4)}
            </h3>
          );
        if (trimmed.startsWith("## "))
          return (
            <h2 key={i} className="text-2xl sm:text-3xl font-bold text-foreground font-heading mt-12 mb-5">
              {trimmed.slice(3)}
            </h2>
          );
        if (trimmed.startsWith("| ")) {
          // Table row
          const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
          if (cells.every((c) => /^-+$/.test(c))) return null; // divider row
          const isHeader = i > 0 && content.trim().split("\n")[
            content.trim().split("\n").indexOf(line) + 1
          ]?.trim().startsWith("|--");
          return (
            <tr key={i} className={isHeader ? "bg-surface" : "border-b border-border"}>
              {cells.map((cell, j) =>
                isHeader ? (
                  <th key={j} className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 text-sm text-muted">
                    {renderInline(cell)}
                  </td>
                )
              )}
            </tr>
          );
        }
        if (trimmed.startsWith("- "))
          return (
            <li key={i} className="flex items-start gap-3 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
              <span className="text-muted leading-relaxed">{renderInline(trimmed.slice(2))}</span>
            </li>
          );
        return (
          <p key={i} className="text-muted leading-relaxed mb-4 text-lg">
            {renderInline(trimmed)}
          </p>
        );
      });
  };

  const renderInline = (text: string) => {
    // Bold
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/60" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zurück zum Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-accent/20 text-accent-light rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-white/40 text-sm">{post.date}</span>
            <span className="text-white/40 text-sm">{post.readTime} Lesezeit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-white/60 text-xl leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
          <Image src={post.image} alt={post.title} width={900} height={500} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-primary to-primary-dark rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white font-heading">Bereit für Ihre neue Heizung?</h3>
          <p className="mt-3 text-white/70">Kostenlose Beratung und unverbindliches Angebot</p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-lg"
          >
            Jetzt anfragen
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-10">Weitere Artikel</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={600}
                      height={400}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-muted mb-3">
                      <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {p.category}
                      </span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-heading group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `https://baurendax.de${post.image}`,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Baurendax" },
            publisher: {
              "@type": "Organization",
              name: "Baurendax",
              logo: { "@type": "ImageObject", url: "https://baurendax.de/images/logo.webp" },
            },
          }),
        }}
      />
    </>
  );
}
