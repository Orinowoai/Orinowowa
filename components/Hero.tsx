import SponsorStrip from "./SponsorStrip";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-goldAura pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-luxuryGold drop-shadow">
          Orinowo — Luxury AI Music Studio
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Create culture-first tracks in seconds. Compete globally. Monetize your sound.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="btn-gold" href="/plans">Subscribe from £4.99</a>
          <a className="btn border border-luxuryGold" href="/leaderboard">View Leaderboard</a>
          <a className="btn border border-luxuryGold" href="/spotlight">Weekly Spotlight</a>
        </div>
        <SponsorStrip />
      </div>
    </section>
  );
}
