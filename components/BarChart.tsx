"use client";

type Row = { label: string; value: number };

export default function BarChart({ rows }: { rows: Row[] }) {
  const max = Math.max(...rows.map((r) => r.value), 1);

  return (
    <div className="space-y-3">
      {rows.map((r, i) => (
        <div key={r.label} className="flex items-center gap-3">
          <div className="w-8 text-right text-sm opacity-70">{i + 1}</div>
          <div className="flex-1">
            <div className="flex justify-between text-sm">
              <span>{r.label}</span>
              <span className="text-luxuryGold font-semibold">
                {r.value.toLocaleString()} pts
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded mt-1">
              <div
                className="h-2 bg-luxuryGold rounded"
                style={{ width: `${(r.value / max) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
