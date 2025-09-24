"use client";
export default function Success() {
  return (
    <main className="glass gold-border rounded-2xl p-10 text-center">
      <h1 className="text-2xl font-semibold text-neonViolet">
        Thanks! Subscription active.
      </h1>
      <p className="mt-2 text-sm text-white/80">
        Enjoy premium features. You’re officially VIP.
      </p>
      <a
        href="/"
        className="mt-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-neonPink text-black hover:brightness-110 transition shadow-glow"
      >
        Go to studio
      </a>
    </main>
  );
}
