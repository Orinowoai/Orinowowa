
import AvatarRow from "../components/AvatarRow";
import BackHome from "../components/BackHome";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="rounded-2xl card p-10 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Create luxury-grade AI music with playful power.
        </h1>
        <p className="max-w-3xl mx-auto text-base text-text/80 mb-6">
          Cinematic AI music, social gamification, and investor-ready features.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="/plans" className="btn btn-primary" aria-label="Go to Plans">Go to Plans</a>
          <a href="#features" className="btn btn-secondary" aria-label="Start Free">Start Free</a>
        </div>
        <AvatarRow />
      </section>
      <section id="features" className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="card flex flex-col items-center p-6">
          <span className="text-3xl mb-2">⚡</span>
          <h3 className="font-bold text-lg mb-1">Fast Renders</h3>
          <p className="text-sm text-text/70">Generate tracks in seconds with luxury-grade AI.</p>
        </div>
        <div className="card flex flex-col items-center p-6">
          <span className="text-3xl mb-2">🎛️</span>
          <h3 className="font-bold text-lg mb-1">Packs & Presets</h3>
          <p className="text-sm text-text/70">Curated sounds, genres, and creative presets.</p>
        </div>
        <div className="card flex flex-col items-center p-6">
          <span className="text-3xl mb-2">🏆</span>
          <h3 className="font-bold text-lg mb-1">Community Ranking</h3>
          <p className="text-sm text-text/70">Compete for top spots and prizes every week.</p>
        </div>
      </section>
      {/* Weekly Songs and Testimonials would be here, using supabase/lib fallback */}
      <BackHome className="mt-10" />
    </main>
  );
}
