import KPIStrip from "@/components/KPIStrip";
import Leaderboard from "@/components/Leaderboard";
import WeeklySongs from "@/components/WeeklySongs";
import Sponsors from "@/components/Sponsors";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="rounded-2xl glass gold-border p-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neonViolet mb-4">
          Orinowo — Vibrant AI Music Studio
        </h1>
        <p className="max-w-3xl text-base text-white/80 mb-6">
          Cinematic AI music, social gamification, and investor-ready features.
        </p>
        <a
          href="/plans"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-neonPink text-black hover:brightness-110 transition shadow-glow"
        >
          Start free
        </a>
      </section>
      <KPIStrip />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Leaderboard />
        <WeeklySongs />
      </div>
      <Sponsors />
      <Reviews />
    </main>
  );
}
