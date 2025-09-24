"use client";
import useSWR from "swr";

export default function WeeklySongs() {
  const { data, isLoading } = useSWR("/api/weekly-songs", (url) =>
    fetch(url).then((r) => r.json()),
  );
  return (
    <section className="glass rounded-2xl p-6 shadow-gold">
      <h2 className="text-neonPink font-bold text-2xl mb-4">Weekly Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(isLoading
          ? [{ id: 0, title: "Loading...", artist: "", cover: "" }]
          : data?.items || []
        ).map((song: any) => (
          <div key={song.id} className="glass p-4 rounded-xl">
            <img
              src={song.cover || "/covers/sample.jpg"}
              alt={song.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <div className="font-bold text-neonCyan">{song.title}</div>
            <div className="text-xs text-white/70">{song.artist}</div>
          </div>
        ))}
      </div>
      {data?.sample && (
        <span className="mt-2 px-2 py-1 bg-amber text-black rounded text-xs">
          Sample
        </span>
      )}
    </section>
  );
}
