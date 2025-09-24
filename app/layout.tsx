import "./globals.css";

export const metadata = {
  title: "Orinowo — AI Music Studio | Create, Compete, Monetize",
  description: "First-of-its-kind culture-forward AI music studio. Afrobeats, Drill, Lofi & more.",
  metadataBase: new URL("https://www.orinowo.com"),
  openGraph: {
    title: "Orinowo — Luxury AI Music Studio",
    description: "Create culture-first tracks in seconds. Compete globally. Monetize.",
    url: "https://www.orinowo.com",
    siteName: "Orinowo",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: { 
    card: "summary_large_image", 
    site: "@orinowo", 
    creator: "@orinowo" 
  },
  alternates: { 
    canonical: "https://www.orinowo.com" 
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 backdrop-blur bg-deepBlack/70 border-b border-luxuryGold/30">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-luxuryGold">Orinowo</a>
            <nav className="flex gap-6">
              <a href="/plans">Pricing</a>
              <a href="/leaderboard">Leaderboard</a>
              <a href="/spotlight">Spotlight</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-luxuryGold/30">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm opacity-80">
            © {new Date().getFullYear()} Orinowo • Support: hello@orinowo.com • Ads/Partnerships: partners@orinowo.com
          </div>
        </footer>
        {/* SEO schema */}
        <script 
          type="application/ld+json" 
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org", 
              "@type": "Organization",
              name: "Orinowo", 
              url: "https://www.orinowo.com",
              sameAs: ["https://x.com/orinowo", "https://instagram.com/orinowo"],
              brand: { "@type": "Brand", name: "Orinowo" }
            })
          }}
        />
      </body>
    </html>
  );
}
