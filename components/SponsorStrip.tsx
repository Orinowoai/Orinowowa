"use client";

import { useEffect, useState } from "react";

const sponsors = [
  { name: "Harmonic Labs" }, 
  { name: "GoldWave Audio" }, 
  { name: "AfroNation Studio" },
  { name: "DrillCity Records" }, 
  { name: "LoFi Collective" }
];

export default function SponsorStrip() {
  const [i, setI] = useState(0);
  
  useEffect(() => { 
    const t = setInterval(() => setI(v => (v + 1) % sponsors.length), 2200); 
    return () => clearInterval(t); 
  }, []);
  
  return (
    <div className="mt-8">
      <div className="text-xs uppercase tracking-widest opacity-70">
        Partners • Sponsors • Investors
      </div>
      <div className="h-9 relative overflow-hidden mt-2">
        {sponsors.map((s, idx) => (
          <div 
            key={s.name} 
            className={`absolute inset-0 flex items-center justify-center transition-opacity ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-3 py-1 border border-luxuryGold/50 rounded-full text-luxuryGold">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
