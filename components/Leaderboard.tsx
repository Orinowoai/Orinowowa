"use client";
import useSWR from "swr";

export default function Leaderboard() {
  const { data, isLoading } = useSWR("/api/leaderboard", (url) =>
    fetch(url).then((r) => r.json()),
  );
  return (
    <section className="glass rounded-2xl p-6 shadow-gold">
      <h2 className="text-neonViolet font-bold text-2xl mb-4">Leaderboard</h2>
      <ul>
        {(isLoading
          ? [{ id: 0, name: "Loading...", xp: 0 }]
          : data?.items || []
        ).map((user: any, i: number) => (
          <li key={user.id} className="flex items-center mb-2">
            <span
              className={`font-bold ${i < 3 ? "text-neonPink" : "text-neonCyan"}`}
            >
              {user.name}
            </span>
            <span className="ml-auto text-neonLime">{user.xp} XP</span>
          </li>
        ))}
      </ul>
      {data?.sample && (
        <span className="mt-2 px-2 py-1 bg-amber text-black rounded text-xs">
          Sample
        </span>
      )}
    </section>
  );
}
