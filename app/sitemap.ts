export default function sitemap() {
  const base = "https://www.orinowo.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/pricing`, lastModified: new Date() },
    { url: `${base}/leaderboard`, lastModified: new Date() },
    { url: `${base}/spotlight`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
