import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";

export default function Home() {
  const initials = [
    "AL",
    "SR",
    "B",
    "DP",
    "GA",
    "AT",
    "JD",
    "IH",
    "BE",
    "SV",
    "FL",
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Creator Avatars */}
        <section className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Join thousands of creators
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-3">
            {initials.map((t, i) => (
              <span key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-rose flex items-center justify-center text-brand-ink font-bold text-sm shadow-lg">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-brand-gold font-heading font-bold text-xl mb-4">Fast Renders</div>
            <p className="text-white/70">
              Generate tracks in seconds with luxury-grade AI.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-brand-violet font-heading font-bold text-xl mb-4">Packs & Presets</div>
            <p className="text-white/70">
              Curated sounds, genres, and creative presets.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-brand-cyan font-heading font-bold text-xl mb-4">Community Ranking</div>
            <p className="text-white/70">
              Compete for top spots and prizes every week.
            </p>
          </div>
        </section>

        {/* Film, Fashion & Brand Scores Section */}
        <section className="bg-gradient-to-r from-brand-navy/50 to-brand-ink/50 backdrop-blur border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white mb-12">
            Film, Fashion & Brand Scores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-rose/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">Original Film Scores</h3>
              <p className="text-white/70 text-sm mb-4">
                Cinematic compositions for your productions
              </p>
              <p className="text-brand-gold text-xs font-medium mb-4">
                Client: Kinematik Filmwerke GmbH
              </p>
              <a 
                href="/contact?service=film-scores" 
                className="inline-block px-6 py-3 bg-brand-rose hover:bg-brand-rose/80 text-white font-semibold rounded-full transition-colors"
              >
                Get Quote
              </a>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-violet/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">Runway Music – Milan</h3>
              <p className="text-white/70 text-sm mb-6">
                High-fashion runway soundtracks
              </p>
              <a 
                href="/contact?service=runway-music" 
                className="inline-block px-6 py-3 bg-brand-violet hover:bg-brand-violet/80 text-white font-semibold rounded-full transition-colors"
              >
                Book Now
              </a>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-cyan/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">Artist & Producer Packs</h3>
              <p className="text-white/70 text-sm mb-6">
                Professional sample libraries and stems
              </p>
              <a 
                href="/contact?service=producer-packs" 
                className="inline-block px-6 py-3 bg-brand-cyan hover:bg-brand-cyan/80 text-brand-ink font-semibold rounded-full transition-colors"
              >
                Explore Packs
              </a>
            </div>
          </div>
        </section>

        {/* Blog Cards */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Luxury & Creativity Collide", img: "/blog1.jpg" },
              { title: "AI-Imagined Music Futures", img: "/blog2.jpg" },
              { title: "The Golden Opportunity", img: "/blog3.jpg" },
            ].map((b, i) => (
              <BlogCard key={i} title={b.title} img={b.img} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
