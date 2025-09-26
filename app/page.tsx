import DiscoLeaderboard from "../components/DiscoLeaderboard";

export default function Home() {
  const initials = [
    "MG", "SR", "BK", "DP", "GA", "AT", "JD", "IH", "BE", "SV", "FL"
  ];

  const sampleBlogPosts = [
    {
      title: "The Future of AI in Music Production",
      excerpt: "Discover how artificial intelligence is revolutionizing the music industry with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format",
      slug: "future-ai-music-production"
    },
    {
      title: "Luxury Meets Innovation in Sound Design",
      excerpt: "Explore the intersection of premium audio experiences and innovative technology platforms.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format",
      slug: "luxury-meets-innovation"
    },
    {
      title: "Building the Next Generation Music Studio",
      excerpt: "Behind the scenes of creating investor-ready music technology for the modern artist.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format",
      slug: "next-generation-music-studio"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Cinematic Gold Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gold aura background effect */}
        <div className="absolute inset-0 bg-gradient-radial from-luxuryGold/10 via-luxuryGold/5 to-transparent pointer-events-none" />
        
        <div className="relative text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 drop-shadow-2xl mb-6 glow">
            Orinowo
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-iris-100 mb-4">
            Luxury AI Music Studio
          </h2>
          <p className="text-lg md:text-xl text-sand/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Create culture-first tracks in seconds. Compete globally. Monetize your sound 
            with investor-ready design and luxury-grade AI technology.
          </p>
          
          {/* Strong CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/plans" className="btn btn-cta text-lg px-8 py-4">
              Start Free Trial
            </a>
            <a href="/plans" className="btn btn-secondary text-lg px-8 py-4 border-luxuryGold/30 hover:border-luxuryGold">
              Upgrade Now
            </a>
          </div>

          {/* Avatar Strip */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            <span className="text-sand/70 text-sm mr-4">Trusted by creators:</span>
            {initials.map((initial, i) => (
              <span key={i} className="avatar">
                {initial}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card p-8 text-center group hover:shadow-gold transition-all duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold text-luxuryGold mb-3">Fast Renders</h3>
          <p className="text-sand/70">
            Generate luxury-grade tracks in seconds with our cutting-edge AI technology.
          </p>
        </div>
        <div className="card p-8 text-center group hover:shadow-gold transition-all duration-300">
          <div className="text-4xl mb-4">🎵</div>
          <h3 className="text-xl font-bold text-luxuryGold mb-3">Packs & Presets</h3>
          <p className="text-sand/70">
            Curated sounds, genres, and creative presets crafted by industry professionals.
          </p>
        </div>
        <div className="card p-8 text-center group hover:shadow-gold transition-all duration-300">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-luxuryGold mb-3">Community Ranking</h3>
          <p className="text-sand/70">
            Compete with creators worldwide and climb the luxury leaderboard.
          </p>
        </div>
      </section>

      {/* Disco Leaderboard Widget */}
      <section className="grid lg:grid-cols-2 gap-12 items-start">
        <DiscoLeaderboard showTop={5} />
        
        {/* Testimonial Block */}
        <div className="card p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">💎</div>
            <blockquote className="text-xl font-medium text-iris-100 mb-6 italic">
              "Orinowo transformed our sound production workflow. The AI quality is 
              absolutely luxury-grade, and the community features keep us motivated."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-luxuryGold flex items-center justify-center font-bold text-deep-900">
                MG
              </div>
              <div>
                <div className="font-semibold text-luxuryGold">Marcus Gold</div>
                <div className="text-sm text-sand/70">Grammy-nominated Producer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-iris-100 mb-4">
            Latest Insights
          </h2>
          <p className="text-sand/70 max-w-2xl mx-auto">
            Stay ahead with the latest trends in AI music production, industry insights, 
            and technology innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sampleBlogPosts.map((post, i) => (
            <article key={i} className="card overflow-hidden group hover:shadow-gold transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-iris-100 mb-3 group-hover:text-luxuryGold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sand/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="btn btn-secondary text-sm"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/blog" className="btn btn-cta">
            View All Articles
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="card p-12 text-center bg-gradient-to-r from-deep-800/50 to-deep-700/50 border-luxuryGold/20">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-luxuryGold mb-4">
          Ready to Create?
        </h2>
        <p className="text-xl text-sand/80 mb-8 max-w-2xl mx-auto">
          Join thousands of creators using Orinowo to craft luxury-grade music with AI precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/plans" className="btn btn-cta text-lg px-8 py-4">
            Start Your Journey
          </a>
          <a href="/leaderboard" className="btn btn-secondary text-lg px-8 py-4">
            View Leaderboard
          </a>
        </div>
      </section>
    </div>
  );
}
