// Serve robots.txt directly to bypass Cloudflare Content-Signal injection
export const onRequest: PagesFunction = async () => {
  const body = `User-Agent: *
Allow: /
Disallow: /api/
Disallow: /studio/

User-Agent: ChatGPT-User
Allow: /

User-Agent: Claude-User
Allow: /

User-Agent: Claude-SearchBot
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: GPTBot
Disallow: /

User-Agent: CCBot
Disallow: /

User-Agent: Google-Extended
Disallow: /

Sitemap: https://baurendax.de/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
