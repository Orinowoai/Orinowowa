"use client";
import Image from "next/image";
import Link from "next/link";

export default function ClientNavBar() {
  return (
    <>
      {/* Disco Wave Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-rose animate-disco-wave"></div>
      
      <header className="sticky top-0 z-40 border-b border-brand-navy/50 backdrop-blur bg-brand-ink/90">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Orinowo Home" className="flex items-center gap-2">
            <Image 
              src="/brand/orinowo-primary-logo.png" 
              alt="Orinowo logo" 
              width={36} 
              height={36} 
              priority 
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <span className="sr-only">Orinowo</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-brand-gold transition-colors">
              Home
            </Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-brand-gold transition-colors">
              Leaderboard
            </Link>
            <Link href="/spotlight" className="text-white/80 hover:text-brand-gold transition-colors">
              Spotlight
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-brand-gold transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-brand-gold transition-colors">
              Contact
            </Link>
            <Link
              href="/plans"
              className="px-3 py-1.5 rounded-full bg-brand-violet hover:bg-brand-violet/80 text-white font-semibold transition-colors"
            >
              Upgrade
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}