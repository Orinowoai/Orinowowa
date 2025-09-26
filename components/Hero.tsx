import Image from "next/image";
import SponsorStrip from "./SponsorStrip";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-transparent to-brand-ink/50 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Logo with blurred glow */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-brand-gold/30 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <Image
              src="/brand/orinowo-primary-logo.png"
              alt="Orinowo"
              width={120}
              height={120}
              priority
              className="relative z-10 w-20 h-20 md:w-32 md:h-32 filter drop-shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6">
          Orinowo — Luxury AI Music Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          Create culture-first tracks in seconds. Compete globally. Monetize
          your sound.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="/plans" 
            className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Subscribe from £4.99
          </a>
          <a 
            href="/leaderboard" 
            className="px-8 py-4 border-2 border-brand-violet hover:bg-brand-violet/20 text-white font-semibold rounded-full text-lg transition-all duration-300"
          >
            View Leaderboard
          </a>
          <a 
            href="/spotlight" 
            className="px-8 py-4 border-2 border-brand-cyan hover:bg-brand-cyan/20 text-white font-semibold rounded-full text-lg transition-all duration-300"
          >
            Weekly Spotlight
          </a>
        </div>
        
        <SponsorStrip />
      </div>
    </section>
  );
}
