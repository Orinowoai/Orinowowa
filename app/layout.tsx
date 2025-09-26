console.log("✔ Copilot is editing files");
import type { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "../components/ImageWithFallback";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orinowo — Luxury AI Music Studio",
  description:
    "Create luxury-grade AI music with social gamification and investor-ready features.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app",
  ),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Orinowo — Luxury AI Music Studio",
    description:
      "Cinematic AI music, social gamification, and investor-ready features.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-deep-900 text-sand antialiased">
      <body className="min-h-dvh bg-gradient-to-b from-deep-900 via-deep-800 to-deep-900">
        <header className="sticky top-0 z-40 border-b border-deep-700/50 backdrop-blur bg-deep-900/70">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ImageWithFallback
                src="/orinowo-hoodie.png"
                alt="Orinowo"
                className="h-8 w-8 rounded-md object-cover ring-2 ring-gold-500/50"
                fallbackSrc="/orinowo-favicon.svg"
              />
              <span className="font-extrabold tracking-wide text-iris-200 drop-shadow-sm">
                ORINOWO
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="nav-link">
                Home
              </Link>
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
              <a href="/plans" className="btn btn-cta">
                Upgrade
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <footer className="mt-16 border-t border-deep-700/40 bg-deep-900/70">
          <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/orinowo-favicon.svg"
                  className="h-6 w-6"
                  alt="logo"
                />
                <span className="font-bold text-iris-100">ORINOWO</span>
              </div>
              <p className="text-sand/70 max-w-md">
                Luxury AI music creation suite. Faster renders, investor-ready
                design, and community-driven growth.
              </p>
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
