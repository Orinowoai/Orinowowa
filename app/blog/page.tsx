"use client";
import React from "react";

const curatedPosts = [
  {
    title: "The Future of AI in Music Production",
    description: "Discover how artificial intelligence is revolutionizing the music industry with cutting-edge technology and innovative approaches to sound creation.",
    date: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format",
    tags: ["AI", "Innovation", "Future"],
    author: "Orinowo",
    slug: "future-ai-music-production"
  },
  {
    title: "Luxury Meets Innovation in Sound Design",
    description: "Explore the intersection of premium audio experiences and innovative technology platforms that are shaping the modern music landscape.",
    date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format",
    tags: ["Luxury", "Sound Design", "Innovation"],
    author: "Orinowo",
    slug: "luxury-meets-innovation"
  },
  {
    title: "Building the Next Generation Music Studio",
    description: "Behind the scenes of creating investor-ready music technology for the modern artist, including workflow optimization and premium features.",
    date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format",
    tags: ["Studio", "Technology", "Investment"],
    author: "Orinowo",
    slug: "next-generation-music-studio"
  },
  {
    title: "AI Music Creation: From Concept to Commercial Success",
    description: "Learn how creators are monetizing AI-generated music and building sustainable careers in the evolving digital music economy.",
    date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format",
    tags: ["Commercial", "AI Music", "Career"],
    author: "Orinowo",
    slug: "ai-music-commercial-success"
  },
  {
    title: "The Psychology of Premium Audio Experiences",
    description: "Understanding how luxury audio design influences listener behavior and emotional engagement in modern music platforms.",
    date: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format",
    tags: ["Psychology", "Audio", "UX"],
    author: "Orinowo",
    slug: "psychology-premium-audio"
  },
  {
    title: "Community-Driven Music Innovation",
    description: "How social gamification and community features are transforming the way artists create, share, and discover music.",
    date: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=800&auto=format",
    tags: ["Community", "Social", "Innovation"],
    author: "Orinowo",
    slug: "community-driven-innovation"
  }
];

export default function BlogPage() {
  // Add JSON-LD structured data for the blog
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Orinowo AI Music Insights",
    "description": "Luxury AI music production insights, industry trends, and technology innovations",
    "url": `${process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app"}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Orinowo",
      "logo": `${process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app"}/brand/orinowo-logo.svg`
    },
    "blogPost": curatedPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Orinowo"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app"}/blog/${post.slug}`
      },
      "image": post.image,
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData)
        }}
      />

      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 mb-6 glow">
            AI Music Insights
          </h1>
          <p className="text-xl text-sand/80 max-w-3xl mx-auto mb-8">
            Discover the latest trends in AI music production, luxury audio experiences, 
            and technology innovations shaping the future of sound.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/" className="btn btn-secondary">
              ← Back to Home
            </a>
            <a href="/contact" className="btn btn-cta">
              Partner With Us
            </a>
          </div>
        </div>

        {/* Featured Article */}
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={curatedPosts[0].image}
                alt={curatedPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-luxuryGold text-deep-900 rounded-full text-xs font-bold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex gap-2 mb-3">
                {curatedPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full text-xs bg-deep-700 text-luxuryGold border border-luxuryGold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-iris-100 mb-4 hover:text-luxuryGold transition-colors">
                {curatedPosts[0].title}
              </h2>
              <p className="text-sand/70 mb-6 text-lg leading-relaxed">
                {curatedPosts[0].description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-luxuryGold flex items-center justify-center font-bold text-deep-900 text-sm">
                    O
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxuryGold">Orinowo Team</div>
                    <div className="text-xs text-sand/60">
                      {new Date(curatedPosts[0].date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-cta"
                  aria-label={`Read article: ${curatedPosts[0].title}`}
                  disabled
                  title="Coming soon - Automated blog system in development"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curatedPosts.slice(1).map((post, i) => (
            <article key={i} className="card overflow-hidden group hover:shadow-gold transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-deep-700 text-luxuryGold border border-luxuryGold/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-iris-100 mb-3 group-hover:text-luxuryGold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sand/70 mb-4 text-sm line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-sand/60">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <button
                    className="btn btn-secondary text-sm"
                    aria-label={`Read article: ${post.title}`}
                    disabled
                    title="Coming soon - Automated blog system in development"
                  >
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="card p-8 text-center bg-gradient-to-r from-deep-800/50 to-deep-700/50 border-luxuryGold/20">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-luxuryGold mb-4">
            Stay Updated
          </h2>
          <p className="text-sand/80 mb-6 max-w-2xl mx-auto">
            Get the latest AI music insights, industry trends, and exclusive content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-deep-800 border border-deep-700 text-sand placeholder-sand/50 focus:outline-none focus:border-luxuryGold"
              disabled
              title="Coming soon"
            />
            <button
              className="btn btn-cta px-6"
              disabled
              title="Coming soon"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-sand/60 mt-3">
            Newsletter coming soon. Follow us on social media for updates.
          </p>
        </div>

        {/* Partner CTA */}
        <div className="card p-8 text-center">
          <h3 className="text-xl font-semibold text-luxuryGold mb-4">Partner With Us</h3>
          <p className="text-sand/70 mb-6">
            Branded content opportunities, music tech collaborations, and affiliate partnerships available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:partners@orinowo.com" className="btn btn-cta">
              Contact Partners Team
            </a>
            <a href="/contact" className="btn btn-secondary">
              General Inquiries
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
