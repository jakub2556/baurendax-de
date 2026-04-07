import { client } from "./client";

// --- Types ---
export interface SanityPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
}

export interface SanityService {
  _id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; description: string }[];
  faq: { q: string; a: string }[];
  order: number;
}

// --- Category label map ---
const categoryLabels: Record<string, string> = {
  "kosten-foerderung": "Kosten & Förderung",
  technik: "Technik",
  ratgeber: "Ratgeber",
  aktuelles: "Aktuelles",
};

// --- Queries ---
export async function getAllPosts(): Promise<SanityPost[]> {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      "slug": slug.current,
      title,
      excerpt,
      "image": mainImage.asset->url,
      "date": publishedAt,
      category,
      readTime,
      body
    }
  `);

  return posts.map((p: Record<string, unknown>) => ({
    ...p,
    category: categoryLabels[p.category as string] || (p.category as string) || "",
    date: p.date
      ? new Date(p.date as string).toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "",
    image: (p.image as string) || "/images/hero-bg.webp",
  }));
}

export async function getPostBySlug(
  slug: string
): Promise<SanityPost | null> {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      title,
      excerpt,
      "image": mainImage.asset->url,
      "date": publishedAt,
      category,
      readTime,
      body
    }
  `,
    { slug }
  );

  if (!post) return null;

  return {
    ...post,
    category: categoryLabels[post.category] || post.category || "",
    date: post.date
      ? new Date(post.date).toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "",
    image: post.image || "/images/hero-bg.webp",
  };
}

export async function getPostSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "post"].slug.current`);
}

export async function getAllServices(): Promise<SanityService[]> {
  const services = await client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      "slug": slug.current,
      title,
      shortDescription,
      description,
      "image": image.asset->url,
      features,
      process[] { title, description },
      faq[] { q, a },
      order
    }
  `);

  return services.map((s: Record<string, unknown>) => ({
    ...s,
    image: (s.image as string) || "/images/hero-bg.webp",
    shortDescription: (s.shortDescription as string) || "",
    features: (s.features as string[]) || [],
    process:
      (s.process as { title: string; description: string }[]) || [],
    faq: (s.faq as { q: string; a: string }[]) || [],
  }));
}

export async function getServiceBySlug(
  slug: string
): Promise<SanityService | null> {
  const service = await client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      title,
      shortDescription,
      description,
      "image": image.asset->url,
      features,
      process[] { title, description },
      faq[] { q, a },
      order
    }
  `,
    { slug }
  );

  if (!service) return null;

  return {
    ...service,
    image: service.image || "/images/hero-bg.webp",
    shortDescription: service.shortDescription || "",
    features: service.features || [],
    process: service.process || [],
    faq: service.faq || [],
  };
}

export async function getServiceSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "service"].slug.current`);
}
