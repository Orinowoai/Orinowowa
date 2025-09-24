export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://orinowo.com/sitemap.xml`,
    {
      headers: { "Content-Type": "text/plain" },
    },
  );
}
