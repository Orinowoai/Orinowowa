import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Spotlight | Orinowo - Luxury AI Music Studio",
  description: "Discover the best creators, tracks, and producers in our weekly spotlight. Song of the Week, Producer of the Month & Yearly Awards.",
  openGraph: {
    title: "Weekly Spotlight | Orinowo - Luxury AI Music Studio",
    description: "Discover the best creators, tracks, and producers in our weekly spotlight.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Spotlight | Orinowo - Luxury AI Music Studio",
    description: "Discover the best creators, tracks, and producers in our weekly spotlight.",
  },
};

const spotlightCategories = [
  {
    title: "Song of the Week",
    description: "The most innovative track created this week",
    winner: "BeatMaster Pro",
    track: "Neon Dreams",
    plays: "12.4K",
    icon: "🏆"
  },
  {
    title: "Producer of the Month",
    description: "Celebrating outstanding music production",
    winner: "SynthWave Studios",
    track: "Digital Sunset",
    plays: "45.2K",
    icon: "🎵"
  },
  {
    title: "Rising Star",
    description: "Breakthrough artist making waves",
    winner: "MelodyMaker",
    track: "Future Vibes",
    plays: "8.9K",
    icon: "⭐"
  }
];

const partners = [
  { brand: "Ableton", slogan: "Push creative boundaries.", color: "from-blue-500 to-purple-600" },
  { brand: "Splice", slogan: "Sounds for creators.", color: "from-green-500 to-blue-500" },
  { brand: "Native Instruments", slogan: "Instruments for visionaries.", color: "from-orange-500 to-red-500" },
  { brand: "Roland", slogan: "Legendary sound.", color: "from-red-500 to-pink-500" },
  { brand: "Akai", slogan: "Beat makers unite.", color: "from-purple-500 to-indigo-500" },
  { brand: "Korg", slogan: "Synth innovation.", color: "from-teal-500 to-cyan-500" },
];

export default function SpotlightPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Weekly Spotlight
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Celebrating the most innovative creators, breakthrough tracks, and outstanding producers in our community.
          </p>
        </div>

        {/* Spotlight Winners */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {spotlightCategories.map((category, i) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-heading font-bold text-brand-gold mb-2">
                  {category.title}
                </h2>
                <p className="text-white/70 text-sm">{category.description}</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-white">{category.winner}</h3>
                  <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-medium">
                    WINNER
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white/90 font-medium mb-1">&quot;{category.track}&quot;</h4>
                  <p className="text-white/60 text-sm">{category.plays} plays this week</p>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold rounded-lg text-sm font-medium transition-colors">
                    Listen
                  </button>
                  <button className="flex-1 py-2 border border-white/20 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Sponsors */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Sponsor Partners
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div
                key={partner.brand}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${partner.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {partner.brand.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {partner.brand}
                </h3>
                <p className="text-white/70 text-sm">{partner.slogan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="bg-gradient-to-r from-brand-violet/10 to-brand-cyan/10 border border-brand-violet/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Become a Sponsor
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Feature your brand to thousands of high-intent music creators. Our hybrid CPM/CPA model ensures maximum ROI for your marketing spend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=partnership"
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Weekly Spotlight - Orinowo",
            "description": "Discover the best creators, tracks, and producers in our weekly spotlight.",
            "url": "https://orinowowa.vercel.app/spotlight",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Weekly Spotlight Winners",
              "itemListElement": spotlightCategories.map((category, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": category.title,
                "description": category.description
              }))
            }
          })
        }}
      />
    </div>
  );
}
