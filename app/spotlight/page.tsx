import BackHome from "../../components/BackHome";

const partners = [
  { brand: "Ableton", slogan: "Push creative boundaries." },
  { brand: "Splice", slogan: "Sounds for creators." },
  { brand: "Native Instruments", slogan: "Instruments for visionaries." },
  { brand: "Roland", slogan: "Legendary sound." },
  { brand: "Akai", slogan: "Beat makers unite." },
  { brand: "Korg", slogan: "Synth innovation." },
];

export default function SpotlightPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-primary">Spotlight</h1>
      <p className="opacity-80">
        Song of the Week, Producer of the Month & Yearly Awards
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {partners.map((p, i) => (
          <div
            key={p.brand}
            className="card flex flex-col items-center p-6 animate-particleFloat"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <span className="text-2xl font-bold text-accent mb-2">
              {p.brand}
            </span>
            <p className="text-sm text-text/70">{p.slogan}</p>
          </div>
        ))}
      </div>
      <div className="card mt-8 text-center">
        <h3 className="text-xl font-bold text-primary">Sponsor Spotlight</h3>
        <p>Feature your brand • High-intent creators • CPM/CPA hybrid.</p>
      </div>
      <BackHome className="mt-10" />
    </section>
  );
}
