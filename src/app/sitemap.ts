import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://baurendax.de";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-31"),
      images: [`${baseUrl}/images/Fotka-domu.webp`, `${baseUrl}/images/logo-baurendax.webp`],
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date("2026-03-31"),
      images: services.map((s) => `${baseUrl}${s.image}`),
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date("2026-03-31"),
      images: [`${baseUrl}/images/ChatGPT-Image-18.-3.-2026-20_32_36.webp`],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-31"),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-03-31"),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date("2026-03-31"),
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date("2026-03-31"),
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date("2026-03-31"),
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/leistungen/${service.slug}`,
    lastModified: new Date("2026-03-31"),
    images: [`${baseUrl}${service.image}`],
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date("2026-03-31"),
    images: [`${baseUrl}${post.image}`],
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/waermepumpe/${city.slug}`,
    lastModified: new Date("2026-04-07"),
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...cityPages];
}
