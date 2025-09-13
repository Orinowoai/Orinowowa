export default function Success() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-luxuryGold">Welcome to Orinowo</h1>
      <p className="mt-3">Your subscription is active. Start creating and climb the charts.</p>
      <div className="mt-6 flex gap-4 justify-center">
        <a className="btn-gold" href="/leaderboard">See Leaderboard</a>
        <a className="btn border border-luxuryGold" href="/spotlight">View Spotlight</a>
      </div>
    </section>
  );
}
