export default function SpotlightPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-luxuryGold">Orinowo Spotlight</h1>
      <p className="opacity-80">Song of the Week, Producer of the Month & Yearly Awards</p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card">
          <h3 className="text-2xl font-semibold">Song of the Week</h3>
          <p className="mt-2">"Golden Dreams" — AfroKing</p>
        </div>
        <div className="card">
          <h3 className="text-2xl font-semibold">Producer of the Month</h3>
          <p className="mt-2">LoFiQueen</p>
        </div>
      </div>
      
      <div className="card mt-8">
        <h3 className="text-2xl font-semibold">Artist/Producer of the Year</h3>
        <p className="mt-2">120 days left • £10,000 + record deal + studio time</p>
      </div>
      
      <div className="card mt-8">
        <h3 className="text-xl font-semibold text-luxuryGold">Sponsor Spotlight</h3>
        <p>Feature your brand • High-intent creators • CPM/CPA hybrid.</p>
      </div>
    </section>
  );
}
