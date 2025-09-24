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
    <html lang="en" className="dark">
      <body className="min-h-dvh antialiased selection:bg-[rgba(124,58,237,.25)]">
        <header className="sticky top-0 z-50 glass gold-border">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Orinowo logo" className="h-8 w-8 rounded-full" />
              <span className="font-semibold tracking-wide text-neonCyan">Orinowo</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="/plans" className="hover:opacity-90">Plans</a>
              <a href="/leaderboard" className="hover:opacity-90">Leaderboard</a>
              <a href="/spotlight" className="hover:opacity-90">Spotlight</a>
              <a href="/contact" className="hover:opacity-90">Contact</a>
              <a href="/plans" className="ml-2 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-neonPink text-black hover:brightness-110 transition">Upgrade</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-4 py-10 text-xs opacity-70">
          © {new Date().getFullYear()} Orinowo — Luxury AI Music Studio<br />
          <span className="block mt-2">Sample content may be shown when live data is unavailable.</span>
        </footer>
      </body>
    </html>
  );
}
