import Hero from "@/components/Hero";
import BarChart from "@/components/BarChart";

export default function HomePage() {
  const rows = [
    { label: "DJ Gold", value: 15000 },
    { label: "AfroKing", value: 14200 },
    { label: "LoFiQueen", value: 13800 },
    { label: "TrapLord", value: 12900 },
    { label: "SynthStar", value: 12100 },
    { label: "NeoDriller", value: 11800 }
  ];

  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-luxuryGold">Weekly Leaderboard (seeded)</h2>
        <p className="opacity-80">Artificially curated to kickstart healthy competition and retention.</p>
        <div className="mt-6">
          <BarChart rows={rows} />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Ads & Partners</h3>
            <p>Subtle placements, CPM/CPA hybrid packages across spotlight/blog.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Investor Ready</h3>
            <p>Recurring revenue via subscriptions + sponsorship slots.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Legacy Look</h3>
            <p>Gold/black motif, rotating sponsor strip, testimonials.</p>
          </div>
        </div>
      </section>
    </>
  );
}
