"use client";

type Row = { label: string; value: number };

export default function BarChart({ rows }: { rows: Row[] }) {
  const max = Math.max(...rows.map((r) => r.value), 1);

  return (
    <div className="space-y-4">
      {rows.map((r, i) => {
        const isTopThree = i < 3;
        const percentage = (r.value / max) * 100;
        
        return (
          <div key={r.label} className="flex items-center gap-4">
            <div className={`w-8 text-right text-sm font-bold ${isTopThree ? 'text-brand-gold' : 'text-white/70'}`}>
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-white">{r.label}</span>
                <span className="text-brand-gold font-bold">
                  {r.value.toLocaleString()} pts
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    isTopThree 
                      ? 'bg-gradient-to-r from-brand-gold to-yellow-400 animate-pulse-gold shadow-lg shadow-brand-gold/50' 
                      : 'bg-gradient-to-r from-brand-cyan to-brand-violet'
                  }`}
                  style={{ 
                    width: `${percentage}%`,
                    boxShadow: isTopThree ? '0 0 20px rgba(247, 201, 74, 0.6)' : 'none'
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
