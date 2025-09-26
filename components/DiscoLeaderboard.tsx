"use client";
import { useEffect, useState } from "react";

type Row = { id: string; artist: string; score: number; };
type Payload = { ok: boolean; items: Row[] };

const FALLBACK: Row[] = [
 { id: "1", artist: "Aurora Gold", score: 980 },
 { id: "2", artist: "Velvet Tones", score: 920 },
 { id: "3", artist: "Echo Luxe", score: 875 },
 { id: "4", artist: "Neon Harbor", score: 830 },
 { id: "5", artist: "Crystal Wave", score: 790 },
];

export default function DiscoLeaderboard() {
 const [rows, setRows] = useState<Row[]>(FALLBACK);

 useEffect(() => {
 let active = true;
 (async () => {
 try {
 const res = await fetch("/api/leaderboard", { cache: "no-store" });
 if (!res.ok) throw new Error("bad status");
 const data: Payload = await res.json();
 if (active && data?.ok && Array.isArray(data.items) && data.items.length) {
 setRows(data.items.slice(0, 5));
 }
 } catch {
 // use fallback
 }
 })();
 return () => { active = false; };
 }, []);

 const max = Math.max(...rows.map(r => r.score), 1);

 return (
 <section aria-labelledby="home-leaderboard" className="card p-6 md:p-8">
 <div className="flex items-center justify-between gap-4 mb-4">
 <h2 id="home-leaderboard" className="text-2xl font-extrabold text-iris-200">
 Weekly Leaderboard
 </h2>
 <a href="/leaderboard" className="badge hover:text-iris-100">View full board →</a>
 </div>

 <div className="grid gap-4">
 {rows.map((r, i) => {
 const pct = Math.max(8, Math.round((r.score / max) * 100)); // min width
 return (
 <div key={r.id} className="grid gap-2">
 <div className="flex items-center justify-between text-sm">
 <div className="flex items-center gap-2">
 <span className={`rank-badge rank-${i+1}`}>{i+1}</span>
 <span className="font-medium text-sand/90">{r.artist}</span>
 </div>
 <span className="text-sand/70">{r.score}</span>
 </div>
 <div className="bar-outer" role="img" aria-label={`${r.artist} score ${r.score}`}>
 <div
 className={`bar-inner disco ${i < 3 ? "bar-gold" : "bar-amber"}`}
 style={{ width: pct + "%" }}
 />
 </div>
 </div>
 );
 })}
 </div>

 <p className="text-xs text-sand/60 mt-4">
 Animated sheen respects prefers-reduced-motion for accessibility.
 </p>
 </section>
 );
}