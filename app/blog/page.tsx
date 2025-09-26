import { fetchBlogPosts } from "../../lib/actions/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Industry News & Insights | Orinowo Blog",
  description: "Stay updated with the latest trends in AI music production, industry insights, and creative inspiration from the world of music technology.",
  openGraph: {
    title: "Music Industry News & Insights | Orinowo Blog",
    description: "Stay updated with the latest trends in AI music production, industry insights, and creative inspiration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Industry News & Insights | Orinowo Blog",
    description: "Stay updated with the latest trends in AI music production, industry insights, and creative inspiration.",
  },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

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
            Music Industry Insights
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay ahead with the latest trends in AI music production, industry news, and creative inspiration from around the world.
          </p>
        </div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-brand-gold mb-8">Featured</h2>
            <article className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-violet/20 text-brand-violet rounded-full text-sm font-medium">
                      {posts[0].source}
                    </span>
                    <span className="text-white/60 text-sm">
                      {new Date(posts[0].publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                    {posts[0].title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  <a
                    href={posts[0].url}
                    className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/80 font-semibold transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Recent Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-brand-cyan/20 text-brand-cyan rounded text-xs font-medium">
                      {post.source}
                    </span>
                    <span className="text-white/60 text-xs">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.url}
                    className="text-brand-gold hover:text-brand-gold/80 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-brand-violet/10 to-brand-cyan/10 border border-brand-violet/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Stay In The Loop
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            Get the latest music industry insights and AI production tips delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-brand-gold"
            />
            <button className="px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
