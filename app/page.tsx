"use client";
import ImageWithFallback from "../components/ImageWithFallback";

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
    <section className="space-y-10">
      <div className="card p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-iris-200 tracking-tight">
          Create luxury-grade AI music with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD166] to-[#FF8A66]">
            playful power
          </span>
          .
        </h1>
        <p className="mt-3 text-sand/75 max-w-2xl">
          Cinematic AI music, social gamification, and investor-ready features.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/plans" className="btn btn-cta">
            Go to Plans
          </a>
          <a
            href="/plans"
            className="btn border border-white/10 text-sand/80 hover:text-iris-100"
          >
            Start Free
          </a>
        </div>
        <div className="mt-6 flex items-center flex-wrap">
          {initials.map((t, i) => (
            <span key={i} className="avatar">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="text-sand font-bold"> Fast Renders</div>
          <p className="text-sand/70 mt-2">
            Generate tracks in seconds with luxury-grade AI.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-sand font-bold"> Packs & Presets</div>
          <p className="text-sand/70 mt-2">
            Curated sounds, genres, and creative presets.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-sand font-bold"> Community Ranking</div>
          <p className="text-sand/70 mt-2">
            Compete for top spots and prizes every week.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Luxury & Creativity Collide", img: "/blog1.jpg" },
          { title: "AI-Imagined Music Futures", img: "/blog2.jpg" },
          { title: "The Golden Opportunity", img: "/blog3.jpg" },
        ].map((b, i) => (
          <article key={i} className="card overflow-hidden">
            <ImageWithFallback
              src={b.img}
              alt=""
              className="h-48 w-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1200&auto=format"
            />
            <div className="p-6">
              <h3 className="text-sand font-semibold">{b.title}</h3>
              <p className="text-sand/70 mt-2">
                Explore how Orinowo elevates your sound with cutting-edge AI.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
