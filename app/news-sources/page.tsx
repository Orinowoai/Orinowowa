export default function NewsSourcesPage() {
  const sources = [
    {
      name: "Pitchfork",
      url: "https://pitchfork.com",
      description: "Independent music publication covering news, reviews, and features",
      rss: "https://pitchfork.com/rss/news/"
    },
    {
      name: "Rolling Stone",
      url: "https://www.rollingstone.com",
      description: "Leading music and culture magazine with industry news coverage",
      rss: "https://www.rollingstone.com/music/music-news/feed/"
    },
    {
      name: "Billboard",
      url: "https://www.billboard.com",
      description: "Music industry publication with charts, news, and business coverage",
      rss: "https://www.billboard.com/c/music/music-news/feed/"
    },
    {
      name: "MusicTech",
      url: "https://www.musictech.net",
      description: "Technology-focused publication covering music production and gear",
      rss: "https://www.musictech.net/feed/"
    },
    {
      name: "The Verge (AI)",
      url: "https://www.theverge.com",
      description: "Technology publication's AI and machine learning coverage",
      rss: "https://www.theverge.com/rss/ai/index.xml"
    },
    {
      name: "TechCrunch (AI)",
      url: "https://techcrunch.com",
      description: "Technology startup publication's artificial intelligence coverage",
      rss: "https://techcrunch.com/category/artificial-intelligence/feed/"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 mb-6 glow">
          News Sources
        </h1>
        <p className="text-xl text-sand/80 max-w-3xl mx-auto mb-8">
          Our automated blog system curates content from trusted industry publications 
          to bring you the latest in music technology and AI innovations.
        </p>
        <a href="/" className="btn btn-secondary">
          ← Back to Home
        </a>
      </div>

      {/* Transparency Statement */}
      <div className="card p-8 bg-gradient-to-r from-deep-800/50 to-deep-700/50 border-luxuryGold/20">
        <h2 className="text-2xl font-bold text-luxuryGold mb-4 text-center">
          Our Commitment to Transparency
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-sand/80 leading-relaxed mb-4">
            Orinowo's blog features an automated content curation system that respectfully 
            aggregates publicly available RSS feeds from leading music and technology publications. 
            We believe in transparency about our content sources and attribution practices.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-iris-100 mb-3">What We Do</h3>
              <ul className="space-y-2 text-sand/70">
                <li>• Automatically fetch publicly available RSS feeds</li>
                <li>• Create excerpts and summaries for discovery</li>
                <li>• Always link back to original sources</li>
                <li>• Provide clear attribution to publishers</li>
                <li>• Respect robots.txt and publisher guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-iris-100 mb-3">What We Don't Do</h3>
              <ul className="space-y-2 text-sand/70">
                <li>• Copy full articles without permission</li>
                <li>• Claim ownership of external content</li>
                <li>• Monetize others' work directly</li>
                <li>• Scrape content beyond RSS feeds</li>
                <li>• Remove original source attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Source List */}
      <div>
        <h2 className="text-3xl font-bold text-iris-100 mb-8 text-center">
          Our Trusted Sources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((source, i) => (
            <div key={i} className="card p-6 hover:shadow-gold transition-all duration-300">
              <h3 className="text-xl font-semibold text-luxuryGold mb-3">
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {source.name}
                </a>
              </h3>
              <p className="text-sand/70 mb-4 text-sm leading-relaxed">
                {source.description}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs"
                >
                  Visit Website →
                </a>
                <a
                  href={source.rss}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sand/60 hover:text-luxuryGold transition-colors"
                >
                  RSS Feed
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright & Fair Use */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-iris-100 mb-6 text-center">
          Copyright & Fair Use
        </h2>
        <div className="prose prose-invert max-w-none text-center">
          <p className="text-sand/80 leading-relaxed mb-6">
            All curated content remains the intellectual property of its original publishers. 
            Our use of excerpts and summaries falls under fair use provisions for commentary, 
            criticism, and news reporting purposes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="card p-4">
              <h3 className="font-semibold text-luxuryGold mb-2">Publishers</h3>
              <p className="text-sand/70">
                If you represent a publication and have concerns about how your content 
                is being used, please contact us immediately.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-luxuryGold mb-2">Readers</h3>
              <p className="text-sand/70">
                Always visit the original source for complete articles and to support 
                the publishers who create this valuable content.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-luxuryGold mb-2">Content Creators</h3>
              <p className="text-sand/70">
                We celebrate and amplify the work of music journalists and industry 
                analysts through respectful curation and attribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card p-8 text-center bg-gradient-to-r from-deep-800/50 to-deep-700/50 border-luxuryGold/20">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-luxuryGold mb-4">
          Questions or Concerns?
        </h2>
        <p className="text-sand/80 mb-6 max-w-2xl mx-auto">
          We're committed to ethical content practices and respect for intellectual property. 
          If you have any questions or concerns about our content curation, please reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:legal@orinowo.com" className="btn btn-cta">
            Contact Legal Team
          </a>
          <a href="mailto:editorial@orinowo.com" className="btn btn-secondary">
            Editorial Inquiries
          </a>
          <a href="/contact" className="btn btn-secondary">
            General Contact
          </a>
        </div>
      </div>
    </div>
  );
}