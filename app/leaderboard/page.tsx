import BarChart from "../../components/BarChart";
import Link from "next/link";

export default function LeaderboardPage() {
  const leaderboardData = [
    { label: "DJ Gold", value: 15000 },
    { label: "AfroKing", value: 14200 },
    { label: "LoFiQueen", value: 13800 },
    { label: "TrapLord", value: 12900 },
    { label: "SynthStar", value: 12100 },
    { label: "NeoDriller", value: 11800 },
    { label: "AmapianoX", value: 11350 },
    { label: "RnBWave", value: 11120 },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Global Leaderboard
          </h1>
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-brand-gold">
                  Top Producers
                </h2>
                <span className="px-4 py-2 bg-brand-rose/20 border border-brand-rose/50 text-brand-rose rounded-full text-sm font-medium">
                  DEMO DATA
                </span>
              </div>
              <BarChart rows={leaderboardData} />
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* Contest Info */}
            <div className="bg-gradient-to-br from-brand-violet/10 to-brand-cyan/10 border border-brand-violet/30 rounded-2xl p-6">
              <h3 className="text-xl font-heading font-bold text-brand-violet mb-4">
                Producer of the Year
              </h3>
              <div className="space-y-3 text-white/80">
                <p className="text-3xl font-bold text-brand-gold">120 days</p>
                <p className="text-sm">remaining in competition</p>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <h4 className="font-semibold text-white mb-2">Grand Prize:</h4>
                  <ul className="text-sm space-y-1">
                    <li>💰 £10,000 cash prize</li>
                    <li>🎵 Record deal opportunity</li>
                    <li>🏢 Studio residency program</li>
                    <li>🎧 Professional equipment package</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-heading font-bold text-white mb-4">
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Active Producers</span>
                  <span className="font-bold text-brand-cyan">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Tracks Created</span>
                  <span className="font-bold text-brand-gold">45,231</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Weekly Competitions</span>
                  <span className="font-bold text-brand-rose">12</span>
                </div>
              </div>
            </div>

            {/* Join Competition CTA */}
            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-rose/10 border border-brand-gold/30 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-heading font-bold text-white mb-3">
                Ready to Compete?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Upload your tracks and climb the leaderboard
              </p>
              <Link
                href="/plans"
                className="inline-block px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
