import AvatarRow from "../../components/AvatarRow";
import BackHome from "../../components/BackHome";

export default function LeaderboardPage() {
  const rows = [
    { artist: "DJ Gold", score: 15000 },
    { artist: "AfroKing", score: 14200 },
    { artist: "LoFiQueen", score: 13800 },
    { artist: "TrapLord", score: 12900 },
    { artist: "SynthStar", score: 12100 },
    { artist: "NeoDriller", score: 11800 },
    { artist: "AmapianoX", score: 11350 },
    { artist: "RnBWave", score: 11120 },
  ];
  const crowns = ["👑", "🥈", "🥉"];
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="sticky top-0 bg-surface/80 backdrop-blur z-10 py-4 mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Leaderboard</h1>
        <button className="btn btn-secondary" aria-label="Refresh">
          Refresh
        </button>
      </div>
      <AvatarRow names={rows.map((r) => r.artist)} />
      <ul className="mt-8 grid gap-4">
        {rows.map((row, i) => (
          <li key={row.artist} className="card flex items-center gap-4 p-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg mr-2">
              {row.artist.slice(0, 2).toUpperCase()}
            </span>
            <span className="font-semibold text-base flex-1">{row.artist}</span>
            <span className="text-xl font-bold text-accent">{row.score}</span>
            {i < 3 && <span className="ml-2 text-2xl">{crowns[i]}</span>}
          </li>
        ))}
      </ul>
      <div className="card mt-10 text-center">
        <h3 className="text-xl font-bold text-primary">
          Countdown to Artist/Producer of the Year
        </h3>
        <p className="mt-2">
          120 days • Winner gets £10,000 + record deal + studio residency
        </p>
      </div>
      <BackHome className="mt-10" />
    </section>
  );
}
