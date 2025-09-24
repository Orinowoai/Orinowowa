import BarChart from "@/components/BarChart";

export default function Leaderboard() {
  const rows = [
    { label: "DJ Gold", value: 15000 },
    { label: "AfroKing", value: 14200 },
    { label: "LoFiQueen", value: 13800 },
    { label: "TrapLord", value: 12900 },
    { label: "SynthStar", value: 12100 },
    { label: "NeoDriller", value: 11800 },
    { label: "AmapianoX", value: 11350 },
    { label: "RnBWave", value: 11120 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-luxuryGold">
        Orinowo Global Leaderboard
      </h1>
      <p className="opacity-80">
        Prize pool • brand partnerships • discoverability
      </p>
      <div className="mt-6">
        <BarChart rows={rows} />
      </div>
      <div className="card mt-10">
        <h3 className="text-2xl font-bold text-luxuryGold">
          Countdown to Artist/Producer of the Year
        </h3>
        <p className="mt-2">
          120 days • Winner gets £10,000 + record deal + studio residency
        </p>
      </div>
    </section>
  );
}
