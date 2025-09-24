export default function BlogPage() {
  const posts = [
    {
      t: "Luxury & Creativity Collide",
      s: "Discover Orinowo's AI-powered music experience.",
    },
    {
      t: "AI-Imagined Music Futures",
      s: "How culture-first AI reshapes artist paths.",
    },
    {
      t: "The Golden Opportunity",
      s: "Elevate your sound with AI at Orinowo.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-luxuryGold">AI Music Insights</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {posts.map((p) => (
          <article key={p.t} className="card">
            <h3 className="text-xl font-semibold">{p.t}</h3>
            <p className="opacity-80 mt-2">{p.s}</p>
            <a className="btn-gold mt-4" href="#">
              Read
            </a>
          </article>
        ))}
      </div>
      <div className="card mt-12">
        <h3 className="text-xl font-semibold text-luxuryGold">
          Partner With Us
        </h3>
        <p>
          Branded content, music tech collabs, affiliate drops. Email:
          partners@orinowo.com
        </p>
      </div>
    </section>
  );
}
