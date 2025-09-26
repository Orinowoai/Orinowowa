"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-brand-ink/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/orinowo-primary-logo.png"
              alt="Orinowo"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 opacity-90"
            />
            <span className="font-bold text-brand-gold tracking-wide">ORINOWO</span>
          </div>
          
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/plans" className="text-white/70 hover:text-brand-gold transition-colors">
              Pricing
            </Link>
            <Link href="/leaderboard" className="text-white/70 hover:text-brand-gold transition-colors">
              Leaderboard
            </Link>
            <Link href="/spotlight" className="text-white/70 hover:text-brand-gold transition-colors">
              Spotlight
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-brand-gold transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-brand-gold transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-white/70 hover:text-brand-gold transition-colors">
              Privacy
            </Link>
          </nav>
          
          <div className="text-sm text-white/50">
            © {year} Orinowo • Luxury AI Music Studio
          </div>
        </div>
      </div>
    </footer>
  );
}
