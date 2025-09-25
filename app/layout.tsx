
import "./globals.css";
import Logo from "../components/Logo";

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
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/spotlight', label: 'Spotlight' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/plans', label: 'Plans' },
  ];
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh antialiased selection:bg-[rgba(124,58,237,.25)]">
        <header className="sticky top-0 z-50">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-4 text-sm">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-1 rounded transition hover:bg-primary/10 hover:underline underline-offset-4 decoration-2 ${typeof window !== 'undefined' && window.location.pathname === link.href ? 'text-primary underline' : 'text-text'}`}
                  aria-current={typeof window !== 'undefined' && window.location.pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <a href="/plans" className="ml-2 btn btn-primary" aria-label="Upgrade">Upgrade</a>
            </div>
          </nav>
          <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-4 py-10 text-xs opacity-80">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span>
              © {new Date().getFullYear()} Orinowo — Luxury AI Music Studio
              <br />
              <a href="mailto:support@orinowo.com" className="underline text-secondary">support@orinowo.com</a>
            </span>
            <div className="flex gap-2 items-center">
              {/* Partner logos row, fallback to sample */}
              {["/partner1.png","/partner2.png","/partner3.png"].map((src, i) => (
                <img key={i} src={src} alt="Partner logo" className="h-6 w-6 rounded bg-card border border-white/10" />
              ))}
            </div>
          </div>
          <span className="block mt-2">Sample content may be shown when live data is unavailable.</span>
        </footer>
      </body>
    </html>
  );
}
