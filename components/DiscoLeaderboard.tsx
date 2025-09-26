"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";

interface LeaderboardUser {
  id: string;
  name: string;
  xp: number;
}

interface LeaderboardData {
  items: LeaderboardUser[];
  sample?: boolean;
}

export default function DiscoLeaderboard({ showTop = 5, showHeader = true }: { 
  showTop?: number; 
  showHeader?: boolean; 
}) {
  const [mounted, setMounted] = useState(false);
  
  const { data, isLoading } = useSWR<LeaderboardData>("/api/leaderboard", (url: string) =>
    fetch(url).then((r) => r.json())
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const users = data?.items?.slice(0, showTop) || [];
  const maxXP = users[0]?.xp || 1;

  if (!mounted) {
    return (
      <section className="glass rounded-2xl p-6 shadow-gold">
        {showHeader && (
          <h2 className="text-luxuryGold font-bold text-2xl mb-6 glow">
            🏆 Top Creators
          </h2>
        )}
        <div className="space-y-3">
          {Array.from({ length: showTop }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-deep-800/30">
              <div className="w-8 h-8 bg-deep-700 rounded-full shimmer"></div>
              <div className="flex-1">
                <div className="h-4 bg-deep-700 rounded shimmer mb-2"></div>
                <div className="h-2 bg-deep-800 rounded shimmer w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="glass rounded-2xl p-6 shadow-gold">
      {showHeader && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-luxuryGold font-bold text-2xl glow">
            🏆 Top Creators
          </h2>
          {data?.sample && (
            <span className="px-3 py-1 bg-amber-400 text-deep-900 rounded-full text-xs font-bold">
              DEMO
            </span>
          )}
        </div>
      )}
      
      <div className="space-y-4">
        {(isLoading ? Array.from({ length: showTop }, (_, i) => ({
          id: `loading-${i}`,
          name: "Loading...",
          xp: 1000 * (showTop - i)
        })) : users).map((user, index) => {
          const percentage = (user.xp / maxXP) * 100;
          const crown = index < 3 ? ["👑", "🥈", "🥉"][index] : "";
          
          return (
            <div
              key={user.id}
              className="group flex items-center gap-4 p-4 rounded-xl bg-deep-800/20 border border-deep-700/30 hover:border-luxuryGold/30 transition-all duration-300"
            >
              {/* Rank & Crown */}
              <div className="flex items-center gap-2 min-w-[3rem]">
                <span className="text-sm font-bold text-iris-200">
                  #{index + 1}
                </span>
                {crown && <span className="text-lg">{crown}</span>}
              </div>

              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-luxuryGold flex items-center justify-center font-bold text-deep-900 text-sm shadow-gold">
                {user.name.slice(0, 2).toUpperCase()}
              </div>

              {/* User Info & Progress Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold truncate ${
                    index < 3 ? "text-luxuryGold" : "text-iris-100"
                  }`}>
                    {user.name}
                  </span>
                  <span className="text-sm font-bold text-gold-400 ml-2">
                    {user.xp.toLocaleString()} XP
                  </span>
                </div>
                
                {/* Animated Progress Bar with Disco Effect */}
                <div className="w-full h-3 bg-deep-700/50 rounded-full overflow-hidden">
                  <div
                    className="bar h-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${percentage}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!isLoading && users.length > 0 && (
        <div className="mt-6 pt-4 border-t border-deep-700/30 text-center">
          <a
            href="/leaderboard"
            className="btn btn-secondary text-sm"
            aria-label="View full leaderboard"
          >
            View Full Leaderboard →
          </a>
        </div>
      )}
    </section>
  );
}