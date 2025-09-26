import DiscoLeaderboard from "../../components/DiscoLeaderboard";

export default function LeaderboardPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 mb-6 glow">
          Global Leaderboard
        </h1>
        <p className="text-xl text-sand/80 max-w-3xl mx-auto mb-8">
          Compete with creators worldwide and climb the luxury rankings. Top performers earn exclusive rewards.
        </p>
        <a
          href="/"
          className="btn btn-secondary"
        >
          ← Back to Home
        </a>
      </div>

      {/* Full Disco Leaderboard */}
      <DiscoLeaderboard showTop={20} showHeader={false} />

      {/* Competition Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-luxuryGold mb-4">
              Artist of the Year Challenge
            </h3>
            <p className="text-sand/70 mb-6">
              The ultimate competition for music creators. Win exclusive prizes, 
              record deals, and studio residency opportunities.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gold-400">£10,000</div>
                <div className="text-xs text-sand/60">Grand Prize</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">120</div>
                <div className="text-xs text-sand/60">Days Left</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">2,847</div>
                <div className="text-xs text-sand/60">Participants</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <div className="text-center">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-luxuryGold mb-4">
              Elite Privileges
            </h3>
            <p className="text-sand/70 mb-6">
              Top 10 creators enjoy exclusive perks and recognition throughout the platform.
            </p>
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-2">
                <span className="text-luxuryGold">✓</span>
                <span className="text-sand/80">Crown badge on profile</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-luxuryGold">✓</span>
                <span className="text-sand/80">Priority customer support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-luxuryGold">✓</span>
                <span className="text-sand/80">Exclusive community access</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-luxuryGold">✓</span>
                <span className="text-sand/80">Featured on homepage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How to Earn XP */}
      <div className="card p-8">
        <h2 className="text-3xl font-bold text-iris-100 mb-8 text-center">
          How to Earn XP
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🎵</div>
            <h3 className="font-semibold text-luxuryGold mb-2">Create Tracks</h3>
            <p className="text-sm text-sand/70">+100 XP per track generated</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold text-luxuryGold mb-2">Daily Streaks</h3>
            <p className="text-sm text-sand/70">+50 XP for consecutive days</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-luxuryGold mb-2">Community</h3>
            <p className="text-sm text-sand/70">+25 XP for helpful feedback</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-semibold text-luxuryGold mb-2">Quality Bonus</h3>
            <p className="text-sm text-sand/70">+200 XP for featured tracks</p>
          </div>
        </div>
      </div>

      {/* Join Competition CTA */}
      <div className="card p-12 text-center bg-gradient-to-r from-deep-800/50 to-deep-700/50 border-luxuryGold/20">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-luxuryGold mb-4">
          Ready to Compete?
        </h2>
        <p className="text-xl text-sand/80 mb-8 max-w-2xl mx-auto">
          Start creating luxury-grade music today and climb the global leaderboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/plans" className="btn btn-cta text-lg px-8 py-4">
            Start Creating
          </a>
          <a href="/spotlight" className="btn btn-secondary text-lg px-8 py-4">
            View Spotlight
          </a>
        </div>
      </div>
    </div>
  );
}
