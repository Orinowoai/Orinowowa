"use client";
import useSWR from "swr";

export default function Leaderboard() {
  const { data, isLoading } = useSWR("/api/leaderboard", (url) =>
    fetch(url).then((r) => r.json()),
  );
  
  return (
    <section className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-brand-gold font-heading font-bold text-3xl">Leaderboard</h2>
        {data?.sample && (
          <span className="px-3 py-1 bg-brand-rose/20 border border-brand-rose/50 text-brand-rose rounded-full text-sm font-medium">
            DEMO
          </span>
        )}
      </div>
      
      <ul className="space-y-4">
        {(isLoading
          ? [{ id: 0, name: "Loading...", xp: 0 }]
          : data?.items || []
        ).map((user: any, i: number) => {
          const isTopThree = i < 3;
          const position = i + 1;
          
          return (
            <li key={user.id} className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
              isTopThree 
                ? 'bg-gradient-to-r from-brand-gold/10 to-yellow-400/10 border border-brand-gold/30 animate-pulse-gold' 
                : 'bg-white/5 hover:bg-white/10'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${
                isTopThree
                  ? 'bg-gradient-to-br from-brand-gold to-yellow-400 text-brand-ink'
                  : 'bg-white/10 text-white/70'
              }`}>
                {position}
              </div>
              
              <div className="flex-1">
                <span className={`font-bold text-lg ${
                  isTopThree ? 'text-brand-gold' : 'text-white'
                }`}>
                  {user.name}
                </span>
              </div>
              
              <span className={`font-bold text-lg ${
                isTopThree ? 'text-brand-gold' : 'text-brand-cyan'
              }`}>
                {user.xp} XP
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
