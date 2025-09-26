console.log("✔ Copilot is editing files");
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orinowo — Luxury AI Music Studio",
  description: "Create luxury-grade AI music with social gamification and investor-ready design.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app",
  ),
  openGraph: {
    title: "Orinowo — Luxury AI Music Studio",
    description: "Cinematic AI music, social gamification, and investor-ready features.",
    url: "/",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orinowo — Luxury AI Music Studio",
    description: "Cinematic AI music, social gamification, and investor-ready features.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Orinowo",
              "url": process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app",
              "logo": `${process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app"}/brand/orinowo-logo.svg`,
              "description": "Luxury AI Music Studio with social gamification and investor-ready features",
              "sameAs": [
                "https://x.com/orinowo",
                "https://instagram.com/orinowo"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Luxury Header with Glassmorphism */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-deep-900/80 border-b border-luxuryGold/20">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex items-center justify-between">
              {/* Brand Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <img
                  src="/brand/orinowo-logo.svg"
                  alt="Orinowo - Luxury AI Music Studio"
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                />
              </a>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="/leaderboard" className="nav-link">
                  Leaderboard
                </a>
                <a href="/spotlight" className="nav-link">
                  Spotlight
                </a>
                <a href="/blog" className="nav-link">
                  Blog
                </a>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
                <a href="/plans" className="nav-link">
                  Plans
                </a>
                <a href="/plans" className="btn btn-cta">
                  Upgrade Now
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="btn btn-secondary" aria-label="Menu">
                  ☰
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>

        {/* Luxury Footer */}
        <footer className="mt-20 border-t border-luxuryGold/20 bg-deep-900/70 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/brand/orinowo-logo.svg"
                  className="h-8 w-auto"
                  alt="Orinowo Logo"
                />
              </div>
              <p className="text-sand/70 max-w-md mb-4">
                © Orinowo • Luxury AI Music Studio. Create culture-first tracks with 
                investor-ready design, faster renders, and community-driven growth.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/orinowo" className="text-sand/60 hover:text-luxuryGold transition-colors" aria-label="Follow on X">
                  𝕏
                </a>
                <a href="https://instagram.com/orinowo" className="text-sand/60 hover:text-luxuryGold transition-colors" aria-label="Follow on Instagram">
                  📸
                </a>
              </div>
            </div>
            <div>
              <div className="footer-title">Product</div>
              <ul className="space-y-2 text-sand/80">
                <li>
                  <a href="/plans" className="footer-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/leaderboard" className="footer-link">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="/spotlight" className="footer-link">
                    Spotlight
                  </a>
                </li>
                <li>
                  <a href="/blog" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-title">Company</div>
              <ul className="space-y-2 text-sand/80">
                <li>
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/terms" className="footer-link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/news-sources" className="footer-link">
                    News Sources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-deep-700/40 py-4 text-center text-xs text-sand/60">
            © {new Date().getFullYear()} Orinowo — Luxury AI Music Studio
          </div>
        </footer>
      </body>
    </html>
  );
}
